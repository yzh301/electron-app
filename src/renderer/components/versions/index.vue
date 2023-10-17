<!--
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-12 20:49:59
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-17 22:47:54
 * @FilePath: \electron-app\src\renderer\components\Versions.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
const versions = reactive({ ...window?.electron?.process?.versions })
</script>

<template>
  <div>
    <svg-icon icon-class="AirplaneInFlight" size="18px" color="#ff0000" />
    <el-button type="info">SVG 本地图标</el-button>
    <HeaderTop />
  </div>
  <el-button type="success"> <i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
    <li class="v8-version">V8 v{{ versions.v8 }}</li>
  </ul>
</template>
