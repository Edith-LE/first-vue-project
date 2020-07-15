const app = new Vue ({
    el: '#app',
    data:{
        title: "tu mama no me quiere, por eso le voy a regalar colores",
        colors: [
            {name: "yellow", stock: 0},
            {name: "blue", stock: 10},
            {name: "green", stock: 5}
         ],
         newColor:"",
         total:0
    },
    methods:{
        addColor (){
            this.colors.push({
                name: this.newColor,
                stock: 0
            })
            this.newColor=""    
        }
    },
    computed:{
       totalColors(){
           this.total = 0;
           for(color of this.colors){
               this.total = this.total + color.stock
           }
           return this.total
       } 
    }
})