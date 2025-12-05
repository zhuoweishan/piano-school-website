<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <div class="brand">
        <h2>JINDONG PIANO.</h2>
        <p>让音乐成为一生的朋友</p>
      </div>
      <div class="contact">
        <p>地址：山东省济宁市微山县</p>
        <p>电话：138 0000 0000</p>
      </div>
    </div>
    <div class="copyright">
      &copy; 2023 Jindong Piano Studio. All Rights Reserved.
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-footer { background: #050505; padding: 80px 0 30px; border-top: 1px solid #111; margin-top: auto; }
.footer-content { display: flex; justify-content: space-between; align-items: center; padding-bottom: 50px; border-bottom: 1px solid #111; flex-wrap: wrap; gap: 30px; }
.brand h2 { color: white; margin: 0 0 10px 0; letter-spacing: 2px; } .brand p { color: #666; font-size: 14px; }
.contact p { color: #888; font-size: 14px; line-height: 1.8; margin: 0; text-align: right; }
.copyright { text-align: center; color: #444; font-size: 12px; margin-top: 30px; }
</style>