const federationProjects: { [key: string]: [string, string] } = {
    "@mf-app/remote": ['http://localhost:5001/mf-app-react-remote/assets/remoteEntry.js', 'https://dmifsud.github.io/mf-app-react-remote/mf-app-react-remote/assets/remoteEntry.js'],
    "@mf-app/store": ['http://localhost:4000/mf-app-store/assets/remoteEntry.js', 'https://dmifsud.github.io/mf-app-store/mf-app-store/assets/remoteEntry.js'],
};

export const getRemoteProjects = (mode: 'development' | 'production' | 'local-prod') => {
    return Object.fromEntries(Object.entries(federationProjects).map(([key, value]) => [key, value[mode === 'development' || mode === 'local-prod' ? 0 : 1]]))
};

export default federationProjects;

