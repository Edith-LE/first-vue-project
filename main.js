const app = Vue.createApp({
  data (){
    return {
      title: 'This a Hello World',
      quantity: 1000,
      link: 'https://www.youtube.com/',
      state: false,
      services: ['transfer', 'pay', 'services'],
      disable: false

    }
  },
  methods:{
    addBalance (){
      this.quantity = this.quantity +100
    },
    decreaseBalance (val){
      if( this.quantity == 0){
        alert ("Your balance it's cero")
        this.disable = true
        return 
      }
      this.quantity = this.quantity -val
    }


  },
  computed:{
    quantityColor(){
      return this.quantity > 500 ? 'text-success' : 'text-danger'

    },

    capitalLetters(){
      return  this.title.toUpperCase()
    }
  }

})