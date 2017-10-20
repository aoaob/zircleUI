import store from './store/store'
import zstyle from './css/z-style.vue'
import zpanel from './components/z-panel.vue'
import zscale from './components/z-scale.vue'
import zitem from './components/z-item.vue'
import zcanvas from './components/z-canvas.vue'
import zviewmanager from './components/z-view-manager.vue'
import ztransition from './transitions/z-transition.vue'
import zpopup from './components/z-popup.vue'
import zbutton from './components/z-button.vue'
import zslider from './components/z-slider.vue'
import zrange from './components/z-range.vue'
import zscroll from './components/z-scroll.vue'
import zpagination from './components/z-pagination.vue'
import zlist from './components/z-list.vue'
import zdotnav from './components/z-dotnav.vue'
const zircle = {
  install (Vue, options) {
    Object.defineProperty(Vue.prototype, '$zircleStore', {
      get () {
        return store
      }
    })
    Vue.component('z-style', zstyle)
    Vue.component('z-canvas', zcanvas)
    Vue.component('z-view-manager', zviewmanager)
    Vue.component('z-panel', zpanel)
    Vue.component('z-scale', zscale)
    Vue.component('z-dotnav', zdotnav)
    Vue.component('z-pagination', zpagination)
    Vue.component('z-list', zlist)
    Vue.component('z-slider', zslider)
    Vue.component('z-item', zitem)
    Vue.component('z-range', zrange)
    Vue.component('z-scroll', zscroll)
    Vue.component('z-transition', ztransition)
    Vue.component('z-popup', zpopup)
    Vue.component('z-button', zbutton)
  }
}

export default zircle

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(zircle)
}
