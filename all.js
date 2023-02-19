const apiUrl = 'https://vue3-course-api.hexschool.io'
const apiPath = 'susu3131'


//區域註冊
const productModal = {
  data(){
    return{
      modal:{},
      tempProduct:{},
    }
  },
  methods:{
    click(){
      console.log('內層');
      this.$emit('getTempProduct')
    }
  },
  template:'#userProductModal',
  mounted(){
    this.modal = new bootstrap.Modal(this.$refs.modal)
    this.modal.show()
  }
}


const app = Vue.createApp({
  data() {
    return {
      products:[],
      cart: {},
      test: '測試文字',
      }
    },
  methods: {
    //取得資料
    getData(page=1){
      const url = `${apiUrl}/v2/api/${apiPath}/products/?page=${page}`
      axios.get(url)
        .then(res=> this.products = res.data.products)
        .catch(err=> console.log(err))
    },
    getTempProduct(){
      console.log('test');
    }
  },
  components:{
    productModal
  },
  mounted() {
    this.getData()

  }
})

app.mount('#app');