app.component('bank-footer', {
  props: ['value', 'date'],
  template: /*html*/ `
    <div class="footer">
      <h3>{{text}} - {{value}}</h3>
      <p>{{date}}</p>
    </div>
   `,
   data(){
     return {
       text: 'this is my footer',
       quantity: 1000
     }
   }
})