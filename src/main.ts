import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Space,
    Select,
    TimePicker,
} from 'ant-design-vue'
import { setupLoading } from '@/plugins/loading.ts'
import '@/styles/index.css'

setupLoading()

const app = createApp(App)

app.use(Button, DatePicker, Form, Input, Space, Select, TimePicker)
app.use(router)

app.mount('#app')
