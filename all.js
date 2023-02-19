const apiUrl = 'https://vue3-course-api.hexschool.io'
const apiPath = 'susu3131'


//區域註冊
const productModal = {
  //當id變動時取得資料，呈現modal
  props:['id'],
  data(){
    return{
      modal:{},
      tempProduct:{},
    }
  },
  methods:{
    click(){
      console.log('內層');
      this.$emit('get-tempproduct')
    }
  },
  watch:{
    //監聽id變動取得資料
    id(){
      axios.get(`${apiUrl}/v2/api/${apiPath}/product/${this.id}`)
        .then(res => this.tempProduct = res.data.product )
    //取得id 再展開modal
      this.modal.show()
    }
  },
  template:'#userProductModal',
  mounted(){
    this.modal = new bootstrap.Modal(this.$refs.modal)
    
  }
}


const app = Vue.createApp({
  data() {
    return {
      products:[],
      cart: {},
      //取得資料ID
      productID:'',
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
    //開啟modal時取得對應產品id
    getID(id){
      //取得key值得productid 代入data 的 id 
      this.productID = id ;
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