import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
 const files = import.meta.glob('./*.ts')

export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  for (const path in files) {
    files[path]().then(mod => {
      if (path !== './index.ts') {
        (mod as any).default(app)
      }
    })
  }
}