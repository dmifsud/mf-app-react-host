import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import federationOptions from '../federation.config.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const modulePath = `${__dirname}/../src/module-federations.d.ts`;
// TODO: add option to install from package.local.json
const localPackageJsonPath = `${__dirname}/../package.docker.json`;

const remoteModuleFederationProjectNames = Object.keys(federationOptions);

function writeModuleDeclarations(declarations: string[], outputPath: string) {
  const content = declarations.map(declaration => `declare module '${declaration}/*';`).join('\n');
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Module declarations written to ${outputPath}`);
}


if (fs.existsSync(localPackageJsonPath)) {
  const localPackageJson = JSON.parse(fs.readFileSync(localPackageJsonPath, 'utf-8'));
//   const dependencies = localPackageJson.dependencies || {};
  const devDependencies = localPackageJson.devDependencies || {};

  const allDependencies = {
    // ...dependencies,
    ...devDependencies
  };

  if (Object.keys(allDependencies).length > 0) {
    const installCmd = `npm install --no-save ${Object.entries(allDependencies).map(([name, version]) => `${name}@${version}`).join(' ')}`;
    console.log(`Installing local dependencies: ${installCmd}`);
    execSync(installCmd, { stdio: 'inherit' });
  } else {
    console.log('No local dependencies to install.');
  }
} else {
  console.log('No package.local.json found, skipping local dependencies installation.');
}

// writeModuleDeclarations(remoteModuleFederationProjectNames, modulePath);
console.log('Remote Projects added:', remoteModuleFederationProjectNames);