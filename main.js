const app = Vue.createApp({
  data() {
    return {
      product: "Носки",
      description: "Ноги скажут 'спасибо'",
      image: "./assets/images/socks_green.jpg",
      url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%81%D0%BA%D0%B8",
      inventory: 20,
      onSale: true,
    };
  },
});
const mountedApp = app.mount("#app");
