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

2. 取得購物車
3. 新稱購物車
4. 刪除購物車
5. 表單驗證
