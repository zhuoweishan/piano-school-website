<template>
  <div class="home-page">
    <section class="hero">
      <div class="bg-parallax"></div>
      <div class="content">
        <p v-animate="'fade-up'" class="pre-title">JINDONG PIANO STUDIO</p>
        <h1 v-animate="'fade-up'" style="transition-delay: 0.1s">Jindong<br><span class="gold-text">钢琴工作室</span></h1>
        <p v-animate="'fade-up'" class="location-tag">📍 山东 · 济宁 · 微山县</p>
        <div v-animate="'fade-up'" style="transition-delay: 0.2s" class="cta-group">
          <button class="btn-gold" @click="$router.push('/courses')">探索课程</button>
          <button class="btn-outline" @click="$router.push('/contact')">预约试听</button>
        </div>
      </div>
    </section>

    <section class="intro section-padding container">
      <div class="intro-grid">
        <div class="left" v-animate="'slide-left'">
          <h2>专注高端钢琴教育<br>做有温度的音乐</h2>
        </div>
        <div class="right" v-animate="'fade-up'">
          <p>Jindong 钢琴工作室扎根于微山县，致力于为不同年龄段的学员提供专业的钢琴教育。</p>
          <div class="signature">Studio Founder</div>
        </div>
      </div>
    </section>

    <section class="features section-padding">
      <div class="container">
        <div class="section-title" v-animate="'fade-up'"><h2>核心优势</h2><p>Why Choose Us</p></div>
        <div class="feat-grid">
          <div class="card" v-for="(item, i) in features" :key="i" v-animate="'scale-in'">
            <div class="icon">{{item.icon}}</div>
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div class="img-box" v-animate="'blur-in'">
        <div class="txt"><h3>专业演奏厅</h3><p>PROFESSIONAL HALL</p></div>
        <img src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800" alt="">
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        { icon: '🎹', title: '专业设备', desc: '配备专业演奏级钢琴，定期调律维护，保证最佳手感与音色。' },
        { icon: '🎓', title: '名师主教', desc: '音乐学院科班出身，拥有多年一线教学与考级辅导经验。' },
        { icon: '🏆', title: '考级通过', desc: '针对音协及英皇考级进行专项辅导，历年通过率保持高水平。' },
        { icon: '🎼', title: '因材施教', desc: '根据学员年龄与性格定制教学方案，让学琴不再是负担。' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.hero {
  height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #000;
  .bg-parallax {
    position: absolute; inset: 0; 
    background: url('https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800') center/cover;
    filter: brightness(0.4); opacity: 0.8;
  }
  .content { position: relative; z-index: 10; text-align: center; padding: 0 20px; }
  h1 { 
    font-size: 70px; line-height: 1.1; margin: 20px 0; color: white;
    @media (max-width: 768px) { font-size: 42px; } 
  }
  .gold-text { color: $theme-gold; font-family: $font-serif; }
  .pre-title { letter-spacing: 3px; color: rgba(255,255,255,0.7); font-size: 12px; }
  .location-tag { color: #ccc; margin-bottom: 40px; font-size: 14px; padding: 5px 15px; border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; background: rgba(0,0,0,0.3); }
  .cta-group { 
    display: flex; justify-content: center; gap: 20px; 
    @media (max-width: 768px) { flex-direction: column; button { width: 100%; } }
  }
  .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; padding: 14px 40px; font-size: 14px; cursor: pointer; transition: 0.3s; &:hover { border-color: white; background: rgba(255,255,255,0.1); } }
}

.intro-grid {
  display: flex; gap: 60px; align-items: center;
  @media (max-width: 768px) { flex-direction: column; gap: 30px; }
  .left h2 { 
    font-size: 40px; line-height: 1.4; color: $theme-gold; border-left: 3px solid $theme-gold; padding-left: 30px; 
    @media (max-width: 768px) { font-size: 28px; padding-left: 15px; border-width: 2px; }
  }
  .right { p { color: #aaa; line-height: 1.8; margin-bottom: 20px; font-size: 16px; } }
}

.features { background: $surface-dark; }
.feat-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 20px; }
  .card {
    background: $surface-light; padding: 40px 30px; border: 1px solid transparent;
    .icon { font-size: 40px; margin-bottom: 20px; color: #555; }
    h3 { margin-bottom: 15px; color: white; }
    p { color: #888; font-size: 14px; line-height: 1.6; }
  }
}

.showcase {
  height: 600px; overflow: hidden; position: relative; background: #111;
  @media (max-width: 768px) { height: 300px; }
  .img-box {
    width: 100%; height: 100%; position: relative;
    img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
    .txt { 
      position: absolute; bottom: 50px; left: 50px; z-index: 2; 
      @media (max-width: 768px) { left: 20px; bottom: 30px; }
      h3 { font-size: 40px; color: white; margin: 0; @media (max-width: 768px){ font-size: 24px; } } 
      p { color: $theme-gold; letter-spacing: 5px; font-size: 12px; } 
    }
  }
}
</style>