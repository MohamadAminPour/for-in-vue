Vue.createApp({
  data() {
    return {
      isShow : true,
      // users :['mmd','ali','sara','mahdi','fatame']
      users: [
        { id: 1, username: "mmd", password: "765433" },
        { id: 2, username: "ali", password: "hf74tg" },
        { id: 3, username: "sara", password: "fes9hse" },
      ],
    };
  },
  methods: {
    showHandler(){
      this.isShow = !this.isShow
    }
  },
}).mount(".app");
