# week5 第五周練習作業
### 建立環境、頁面
  - 載入vue
  - 載入axios
  - 載入驗證套件

### 取得產品列表
  - get api 取得客戶產品列表
  - v-for 渲染至畫面

### Modal 元件
  - 註冊元件
  - Bs初始化連結modal
    直接寫在元件裡，並新增一個存放modal 資料區
    ```html標籤對應ref 為modal ，可以運用ref 寫法快速取得 this.modal = new bootstrap.Modal(this.$refs.modal)```
    開啟modal時取得對應產品id (寫方法 productid = id )，再props 外層傳入內層元件(傳入id)
  - 渲染產品細節至modal

### 取得購物車
 -  串接get 購物車，渲染畫面
 -  watch 監聽有變化重新更新購物車
    v-if 判斷"當購物車有東西時才進行v-for 畫面渲染(避免出錯)" 
    v-if ="cart.carts  ; v-for="cartProduct in cart.carts"

### 新稱購物車
 - 串接post 購物車，新增一個臨時購物車(擺post格式)
    備註:axios.post(url位置,{代入資料}) 代入資料要依照api格式  
 - 新增完後關閉modal 
   在元件標籤上下ref ，用外層啟用內層方法關閉modal

### 購物車選擇數量
  - 將數量改成select選單，用v-for 創建對應數量 (元件)
    ex: <option :value="i" v-for = "i in 30" :key="`數字${i}`">{{ i }}</option>
    value對應數字值，key對應編號，並用{{ }} 讓它顯示在畫面上   
  - 綁定v-model select值在qty，讓新增可以代入對應加入購物車數量       
  - 串接put api 修改數量   
 
### 刪除購物車
  - 用key值代入id，串接api 刪除產品
  - 寫單一品項刪除購物車及清空所有購物車


### 送出訂單
- 寫表單驗證，使用VeeValidation 套件
- 將資料v-model 綁定表單
- 送出訂單串接api 

### 修正
 - 避免使用者重複點擊，寫loading disabled



