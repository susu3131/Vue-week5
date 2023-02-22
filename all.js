// import loading  from './loading.js'

const apiUrl = 'https://vue3-course-api.hexschool.io'
const apiPath = 'susu3131'


//區域註冊 modal 元件
const productModal = {
  //當id變動時取得資料，呈現modal
  props:['id','addCart','loadtype'],
  data(){
    return{
      modal:{},
      tempProduct:{},
      qty:1,
    }
  },
  methods: {
    hideModal(){
      this.modal.hide();
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
      isLoading: true,
      isShow: false,
      products:[],
      cart: {
        carts:[]
      },
      //取得資料ID
      productID:'',
      loadItem:''
      }

    },

  methods: {
    //1 取得資料
    getData(page=1){
      const url = `${apiUrl}/v2/api/${apiPath}/products/?page=${page}`
      axios.get(url)
        .then(res=> this.products = res.data.products)
        .catch(err=> console.log(err))
    },
    //2 開啟modal時取得對應產品id
    getID(id){
      //取得key值得productid 代入data 的 id 
      this.productID = id ;
    },
    //3 加入購物車
    addCart(id,qty=1){
      this.isShow = true
      this.loadItem = id ;
      const tempCart = {
        product_id : id ,
        qty,
      }
      axios.post(`${apiUrl}/v2/api/${apiPath}/cart`,{data:tempCart})
      .then(res=> {
    
        this.$refs.productModal.hideModal();
        alert(res.data.message)
        this.loadItem = '' ;
        this.isShow = false
      })
      .catch(err=> console.log(err))
    },
    //4 取得購物車資料
    getCart(){
      axios.get(`${apiUrl}/v2/api/${apiPath}/cart`)
      .then(res=>{
        this.cart = res.data.data
        console.log(res.data.data);
      })
      .catch(err=> console.log(err))
    },
    //5 刪除購物車(單一品項)
    deleteCart(id){
      this.isShow = true
      this.loadItem = id ;  
      axios.delete(`${apiUrl}/v2/api/${apiPath}/cart/${id}`)
      .then(res=>{
        alert(res.data.message)
        this.loadItem = '' ;
        this.isShow = false
      })
      .catch(err=> console.log(err))

    },
    //6 清空購物車
    deleteAllCart(){
      axios.delete(`${apiUrl}/v2/api/${apiPath}/carts`)
      .then(res=>{
        alert(res.data.message)
      })
      .catch(err=> console.log(err));


    },
    //7 更新購物車
    updateCart(id,qty=1){
      this.loadItem = id ;
      const data = {
        product_id:id,
        qty
      }
      axios.put(`${apiUrl}/v2/api/${apiPath}/cart/${id}`,{data})
      .then(res=>{
        alert(res.data.message)
        this.loadItem = '' ;
        console.log(this.loadItem);
      })
      .catch(err=> console.log(err));
      

    },

    // submit() {
    //   let loader = this.$loading.show({
    //       // Optional parameters
    //       container: this.fullPage ? null : this.$refs.formContainer,
    //       canCancel: true,
    //       onCancel: this.onCancel,
    //   });
    //   // simulate AJAX
    //   setTimeout(() => {
    //       loader.hide()
    //   }, 5000)
    // }
  },
  components:{
    productModal
  },
  watch:{
    cart(){
      axios.get(`${apiUrl}/v2/api/${apiPath}/cart`)
      .then(res=>this.cart = res.data.data)
      .catch(err=> console.log(err))
    }
  },
  mounted() {
    this.getData();
    this.getCart();
    // submit()
  }
})

// app.use(VueLoading.LoadingPlugin);
app.component('load',VueLoading.component)
app.mount('#app');

