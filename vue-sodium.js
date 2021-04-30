export default {
    install: async (Vue, sodium) => {
        if(Vue.prototype) Vue.prototype.$sodium = sodium
        if(Vue.config.globalProperties) Vue.config.globalProperties.$sodium = sodium
        if(Vue) Vue.$sodium = sodium
    }
}