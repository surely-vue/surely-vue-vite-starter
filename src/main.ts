import { createApp } from "vue";
import STable from "@surely-vue/table";
import App from "./App.vue";
import Antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import "@surely-vue/table/dist/index.less";

const app = createApp(App);
app.use(STable).use(Antdv);
app.mount("#app");
