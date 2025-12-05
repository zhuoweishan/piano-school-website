<!--
 * @Author: NewName zhuozhuo.com
 * @Date: 2025-12-05 09:28:32
 * @LastEditors: NewName zhuozhuo.com
 * @LastEditTime: 2025-12-05 09:37:22
 * @FilePath: \piano-school-website\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <TheHeader />
    <router-view /> <!-- 页面内容在这里渲染 -->
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter' // 记得创建这个组件

export default {
  components: { TheHeader, TheFooter }
}
</script>