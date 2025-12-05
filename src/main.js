import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.scss'

Vue.config.productionTip = false

// 🔥 自定义全局动画指令 v-animate
// 用法: <div v-animate="'fade-up'">...</div>
Vue.directive('animate', {
  inserted: (el, binding) => {
    el.classList.add('anim-init', binding.value || 'fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('anim-active');
          }, 100); // 稍微延迟一点，防止闪烁
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 }); // 元素出现 15% 时触发
    observer.observe(el);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')