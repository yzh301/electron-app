/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-12 20:49:59
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-13 00:22:55
 * @FilePath: \electron-app\electron.vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const pathSrcRenderer = resolve(__dirname, 'src/renderer')
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('🚀 ~ file: electron.vite.config.js:18 ~ defineConfig ~ env:', env)
  return {
    main: {
      plugins: [externalizeDepsPlugin()]
    },
    preload: {
      plugins: [externalizeDepsPlugin()]
    },
    renderer: {
      resolve: {
        alias: {
          '@': pathSrcRenderer
        }
      },
      plugins: [
        vue(),
        AutoImport({
          // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
          imports: ['vue', '@vueuse/core', 'vue-router', 'pinia'],
          resolvers: [
            ElementPlusResolver({
              importStyle: 'sass'
            }), // 自动导入图标组件
            IconsResolver({
              prefix: 'Icon'
            })
          ],
          eslintrc: {
            enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false
            filepath: './.eslintrc-auto-import.json', // 指定自动导入函数 eslint 规则的文件
            globalsPropValue: true
          },
          vueTemplate: true,
          dts: resolve(pathSrcRenderer, 'types', 'auto-imports.d.ts') // 指定自动导入函数TS类型声明文件路径
        }),
        Components({
          resolvers: [
            // 自动注册图标组件
            IconsResolver({
              enabledCollections: ['ep']
            }),
            // 自动导入 Element Plus 组件
            ElementPlusResolver({
              importStyle: 'sass'
            })
          ],
          // 搜索子目录
          deep: true,
          // 指定自定义组件位置(默认:src/components)
          dirs: ['./**/components'],
          include: [/.vue$/, /.vue?vue/],
          exclude: [/[\/]node_modules[\/]/, /[\/].git[\/]/, /[\/].nuxt[\/]/],
          // 允许子目录作为组件的命名空间前缀。
          directoryAsNamespace: false,
          dts: resolve(pathSrcRenderer, 'types', 'components.d.ts') // 指定自动导入组件TS类型声明文件路径
        }),
        Icons({
          autoInstall: true
        })
      ]
    }
  }
})
