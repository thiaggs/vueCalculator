import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)    // esse significa o de baixo
    // render(createElement){
    //     return createElement(App)
    // }
}).$mount("#app")