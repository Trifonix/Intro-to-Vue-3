const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Носки",
      description: "Ноги скажут 'спасибо'",
      image: "./assets/images/socks_green.jpg",
      url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%81%D0%BA%D0%B8",
      inventory: 20,
      onSale: true,
      details: ["Хлопок 50%", "Шерсть 30%", "Полиэстер 20%"],
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 901, color: "Зеленые", image: "./assets/images/socks_green.jpg" },
        { id: 902, color: "Синие", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      if (this.cart > 0) this.cart--;
    },
  },
});
const mountedApp = app.mount("#app");
