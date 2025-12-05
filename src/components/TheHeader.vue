<template>
  <header :class="['site-header', { scrolled: isScrolled }]">
    <div class="container inner">
      <div class="logo">JINDONG<span class="highlight">PIANO</span>.</div>
      
      <!-- PC端导航 -->
      <nav class="desktop-nav">
        <router-link to="/">首页</router-link>
        <router-link to="/courses">课程</router-link>
        <router-link to="/teachers">名师</router-link>
        <router-link to="/environment">环境</router-link>
        <router-link to="/pricing">课时</router-link>
        <router-link to="/contact">预约</router-link>
      </nav>

      <!-- 手机端菜单按钮 -->
      <div class="mobile-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <!-- 手机端全屏菜单 -->
      <transition name="slide-down">
        <div class="mobile-menu" v-if="isMenuOpen">
          <div class="menu-links">
            <router-link to="/" @click.native="closeMenu">首页 Home</router-link>
            <router-link to="/courses" @click.native="closeMenu">课程 Courses</router-link>
            <router-link to="/teachers" @click.native="closeMenu">名师 Teachers</router-link>
            <router-link to="/environment" @click.native="closeMenu">环境 Environment</router-link>
            <router-link to="/pricing" @click.native="closeMenu">课时 Pricing</router-link>
            <router-link to="/contact" @click.native="closeMenu">预约 Contact</router-link>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({ isScrolled: false, isMenuOpen: false }),
  mounted() { window.addEventListener('scroll', () => this.isScrolled = window.scrollY > 50) },
  methods: {
    toggleMenu() { this.isMenuOpen = !this.isMenuOpen; },
    closeMenu() { this.isMenuOpen = false; }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.site-header {
  position: fixed; top: 0; width: 100%; z-index: 2000; height: 100px;
  display: flex; align-items: center; transition: 0.4s;
  &.scrolled { height: 70px; background: rgba(10,10,10,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1); }
  @media (max-width: 768px) { height: 60px !important; background: #0a0a0a; border-bottom: 1px solid #222; }
}
.inner { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 24px; font-weight: bold; letter-spacing: 1px; font-family: $font-serif; color: white; .highlight { color: $theme-gold; } z-index: 2002; position: relative;}

/* Desktop Nav */
.desktop-nav {
  display: flex; gap: 30px;
  @media(max-width: 768px) { display: none; }
  a {
    font-size: 14px; letter-spacing: 1px; color: rgba(255,255,255,0.7); position: relative;
    &:hover, &.router-link-exact-active { color: white; }
  }
}

/* Mobile Toggle */
.mobile-toggle {
  display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 2002;
  @media(max-width: 768px) { display: flex; }
  .bar { width: 25px; height: 2px; background: $theme-gold; transition: 0.3s; }
  &.active {
    .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .bar:nth-child(2) { opacity: 0; }
    .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  }
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #0a0a0a; z-index: 2001;
  display: flex; align-items: center; justify-content: center;
  .menu-links {
    display: flex; flex-direction: column; text-align: center; gap: 30px;
    a { font-size: 24px; color: white; font-family: $font-serif; letter-spacing: 2px; }
  }
}
.slide-down-enter-active, .slide-down-leave-active { transition: transform 0.4s ease; }
.slide-down-enter, .slide-down-leave-to { transform: translateY(-100%); }
</style>