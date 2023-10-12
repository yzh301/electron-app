/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-12 21:01:07
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-12 21:32:56
 * @FilePath: \electron-app\src\renderer\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
// 全局样式文件引入
import '@/common/styles/frame.scss'

const app = createApp(App)

app.mount('#app')
