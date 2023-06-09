import { App } from 'vue'
import Button from '@sv3-components/button'
import Foo from '@sv3-components/foo'
import Video from '@sv3-components/viedo'
// import component end
import '../style/index.scss'

const components = [
  Button,
  Foo,
  Video
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
