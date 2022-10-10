import { createApp } from 'vue'
import 'vant/lib/index.css'

import {
  Button
} from 'vant'

export const components = [
  Button
]

export default (app: ReturnType<typeof createApp>) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
