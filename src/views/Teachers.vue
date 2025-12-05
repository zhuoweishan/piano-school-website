<template>
  <div class="page-container">
    <div class="page-header container">
      <h1 v-animate="'fade-up'">名师团队</h1>
      <p v-animate="'fade-up'">MASTER TEAM</p>
    </div>
    <div class="teachers-grid container">
      <div class="t-card" v-for="i in 4" :key="i" v-animate="'fade-up'">
        <div class="img-wrapper">
          <img :src="'https://images.pexels.com/photos/752119'+i+'/pexels-photo-752119'+i+'.jpeg?auto=compress&cs=tinysrgb&w=600'" alt="">
        </div>
        <div class="info">
          <h3>教师姓名</h3>
          <p class="title">钢琴硕士 / 教学总监</p>
          <p class="bio">毕业于知名音乐学院，拥有丰富的一线教学经验。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.page-header { padding: 120px 0 60px; text-align: center; h1 { color: white; } p { color: $theme-gold; letter-spacing: 3px; } }
.teachers-grid { 
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; padding-bottom: 100px; 
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 40px; } /* 手机端单列 */
}
.t-card { background: $surface-dark; overflow: hidden; }
.img-wrapper {
  height: 380px; position: relative; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.5s; }
  @media (max-width: 768px) { height: 300px; img { filter: grayscale(0); } /* 手机端取消黑白滤镜 */ }
}
.info {
  padding: 25px 20px; text-align: center;
  h3 { color: white; margin-bottom: 5px; font-size: 20px; }
  .title { color: $theme-gold; font-size: 12px; margin-bottom: 15px; }
  .bio { color: #888; font-size: 13px; line-height: 1.5; }
}
</style>