console.log(1);

const app ={
  data(){
    return{
      text:'這是一段文字'
    }
  },
  methods:{
    getData(){
      
    }
  },
  mounted(){
    console.log(1)
  }
}


Vue.createApp(app).mount('#app')