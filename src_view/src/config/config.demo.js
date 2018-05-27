import Env from './env';

let config = {
    env: Env,
    axiosPath: {
        indexPage: '/Node-Monitor/demo/axiosIndexPage',
        startProfiler: '/Node-Monitor/demo/axiosProfiler',
        getProfilerDetail: '/Node-Monitor/demo/axiosProfilerDetail',
        getOverview: '/Node-Monitor/demo/axiosOverview',
        checkConfig: '/Node-Monitor/demo/axiosConfig',
        fetchConfig: '/Node-Monitor/demo/axiosFetchConfig',
    },

    vueRouter: {
        root: '/Node-Monitor/demo',
        index: '/Node-Monitor/demo/index',
        profiler: '/Node-Monitor/demo/profiler',
        overview: '/Node-Monitor/demo/overview',
        document: '/Node-Monitor/demo/document'
    }
};
export default config;
