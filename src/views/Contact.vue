<template>
  <div class="contact-page">
    <div class="map-container">
      <iframe class="baidu-map" src="https://map.baidu.com/search/%E6%B5%8E%E5%AE%81%E5%BE%AE%E5%B1%B1%E5%8E%BF/@13039608,4115312,13z?querytype=s&da_src=shareurl&wd=%E6%B5%8E%E5%AE%81%E5%BE%AE%E5%B1%B1%E5%8E%BF&c=288" frameborder="0"></iframe>
      <div class="map-overlay"></div>
    </div>

    <div class="container content-wrap">
      <div class="form-box" v-animate="'fade-up'">
        <h2>预约体验</h2>
        <p class="sub">Jindong Piano Studio</p>
        <form @submit.prevent="submit">
          <div class="input-row"><input type="text" placeholder="姓名 Name"></div>
          <div class="input-row"><input type="text" placeholder="电话 Phone"></div>
          <button type="submit" class="btn-gold" style="width: 100%">提交信息 Submit</button>
        </form>
      </div>

      <div class="info-box" v-animate="'fade-up'">
        <h3>联系方式</h3>
        <div class="item"><strong>📍 地址</strong><p>山东省 济宁市 微山县</p></div>
        <div class="item"><strong>📞 电话</strong><p>138 0000 0000</p></div>
      </div>
    </div>
  </div>
</template>
<script>
export default { methods: { submit() { alert('提交成功！') } } }
</script>
<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.contact-page { min-height: 100vh; position: relative; padding-top: 120px; padding-bottom: 50px; display: flex; align-items: center; justify-content: center; }
.map-container { position: absolute; inset: 0; z-index: 0; background: #222; height: 100%; }
.baidu-map { width: 100%; height: 100%; filter: grayscale(100%) invert(100%) contrast(0.8); opacity: 0.6; }
.map-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); pointer-events: none; }

.content-wrap { 
  position: relative; z-index: 2; display: flex; gap: 60px; justify-content: center; flex-wrap: wrap; width: 100%;
  @media (max-width: 768px) { flex-direction: column; gap: 30px; }
}
.form-box, .info-box { 
  background: rgba(20, 20, 20, 0.95); backdrop-filter: blur(15px); padding: 40px; border: 1px solid rgba(255,255,255,0.08); 
  width: 100%; box-sizing: border-box;
}
.form-box {
  flex: 1; min-width: 300px;
  h2 { font-size: 32px; color: white; margin-bottom: 5px; }
  .sub { color: $theme-gold; font-size: 14px; margin-bottom: 30px; }
  .input-row { margin-bottom: 20px; }
  input { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 12px; box-sizing: border-box; }
}
.info-box {
  flex: 0 0 350px;
  @media (max-width: 768px) { flex: 1; }
  h3 { color: $theme-gold; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }
  .item { margin-bottom: 20px; strong { color: white; display: block; margin-bottom: 5px; } p { color: #999; margin: 0; } }
}
</style>