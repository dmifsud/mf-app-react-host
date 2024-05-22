const federationProjects: { [key: string]: [string, string] } = {
    "@mf-app/remote": ['http://localhost:5000/assets/remoteEntry.js', 'http://localhost:5000/assets/remoteEntry.js'],
    "@mf-app/store": ['https://dmifsud.github.io/mf-app-store/dist/assets/remoteEntry.js', 'http://localhost:5000/assets/remoteEntry.js'],
};

export const getRemoteProjects = (mode: 'development' | 'production') => {
    return Object.fromEntries(Object.entries(federationProjects).map(([key, value]) => [key, value[mode === 'development' ? 0 : 1]]))
};

export default federationProjects;

