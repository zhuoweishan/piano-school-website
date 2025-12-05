<template>
  <div class="page-container">
    <div class="page-header container">
      <h1 v-animate="'fade-up'">专业课程体系</h1>
      <p v-animate="'fade-up'" style="transition-delay: 0.1s">CURRICULUM</p>
    </div>
    <div class="course-list container">
      <div class="course-row" v-for="(course, index) in courses" :key="index" :class="{ reverse: index % 2 !== 0 }">
        <div class="img-col" v-animate="'blur-in'">
          <img :src="course.img" alt="">
        </div>
        <div class="text-col" v-animate="'fade-up'">
          <div class="num">0{{index + 1}}</div>
          <h2>{{course.title}}</h2>
          <p class="desc">{{course.desc}}</p>
          <ul class="tags"><li v-for="tag in course.tags" :key="tag">{{tag}}</li></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [
        { title: '儿童启蒙班', desc: '专为4-6岁儿童设计。奥尔夫教学法，快乐建立绝对音感。', img: 'https://images.pexels.com/photos/4005018/pexels-photo-4005018.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['趣味', '启蒙'] },
        { title: '英皇考级班', desc: '针对 ABRSM 及音协考级标准设计。历年通过率高达 98%。', img: 'https://images.pexels.com/photos/7521313/pexels-photo-7521313.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['考级', '乐理'] },
        { title: '成人速成班', desc: '摒弃枯燥练习，从名曲入手。10-15节课弹奏心仪曲目。', img: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['速成', '灵活'] },
        { title: '大师演奏班', desc: '音乐学院教授一对一指导。为艺考、比赛铺平道路。', img: 'https://images.pexels.com/photos/4005404/pexels-photo-4005404.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['专业', '比赛'] }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.page-header { padding: 120px 0 60px; text-align: center; h1 { font-size: 36px; color: white; } p { color: $theme-gold; letter-spacing: 3px; } }
.course-row {
  display: flex; align-items: center; gap: 80px; margin-bottom: 100px;
  &.reverse { flex-direction: row-reverse; }
  
  /* 移动端强制竖排 */
  @media (max-width: 768px) {
    flex-direction: column !important; gap: 30px; margin-bottom: 60px;
    .img-col { height: 250px !important; }
  }

  .img-col { flex: 1; height: 400px; width: 100%; border-radius: 4px; overflow: hidden; img { width: 100%; height: 100%; object-fit: cover; } }
  .text-col {
    flex: 1;
    .num { font-size: 60px; color: rgba(255,255,255,0.05); font-weight: bold; line-height: 1; margin-bottom: -10px; font-family: $font-serif; }
    h2 { font-size: 32px; color: white; margin-bottom: 15px; @media(max-width: 768px){ font-size: 26px; } }
    .desc { color: #999; line-height: 1.6; margin-bottom: 20px; font-size: 15px; }
    .tags { display: flex; gap: 10px; li { border: 1px solid #333; color: #888; padding: 4px 12px; font-size: 12px; border-radius: 20px; } }
  }
}
</style>