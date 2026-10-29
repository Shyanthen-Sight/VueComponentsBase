import { createApp } from 'vue'
import Exp1_ParentToChild_Child from './componentsOnFTP/Exp1_ParentToChild_Child.vue'

// 直接挂载，可在这里传入任何你需要的 props
// createApp(MyComponent, { receivedMsg: '测试' }).mount('#app')

// createApp(Exp1_ParentToChild_Parent).mount('#app')

createApp(Exp1_ParentToChild_Child, { id: 123, title: 'testValue' }).mount('#app')
