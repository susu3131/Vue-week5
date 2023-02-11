const apiUrl = 'https://vue3-course-api.hexschool.io'
const apiPath = 'susu3131'


const app = Vue.createApp({
  data() {
    return {
      products:[],
      cart: {},
      test: '測試文字',
      }
    },
  methods: {
    getData(page=1){
      const url = `${apiUrl}/v2/api/${apiPath}/products/?page=${page}`
      axios.get(url)
        .then(res=> this.products = res.data.products)
        .catch(err=> console.log(err))
    }
  },
  mounted() {
    this.getData()

  }
})

app.mount('#app');