const app = Vue.createApp({
  data() {
    return {
      product: "Носки",
      description: "Ноги скажут 'спасибо'",
    };
  },
});
const mountedApp = app.mount("#app");
