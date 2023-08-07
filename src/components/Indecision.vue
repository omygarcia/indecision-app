<template>
  <h1>Indecision</h1>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input 
    type="text" 
    placeholder="Hazme una pregunta"
    v-model="question"
     />
    <p>Recuerda terminar con un signo de interrogación(?)</p>
    <div v-if="isValidQuestion">
      <h2>{{question}}</h2>
      <h1>{{traducir(answer)}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name:'Indecision',
  data(){
    return{
      question:null,
      answer:null,
      //img:'https://via.placeholder.com/250'
      img:null,
      isValidQuestion:false
    }
  },
  methods:{
    async getAnswer(){
      this.answer = 'pensando...';
      const data = await fetch('https://yesno.wtf/api').then(r=>r.json());
      console.log(data);
      this.answer = data.answer;
      this.img = data.image;
    },
    traducir(answer)
    {
      switch(answer){
        case 'yes':
          return 'Si!';
        case 'no':
          return 'No!';
        case 'maybe':
          return 'Talvez!';
        default:
          return answer;
      }
    }
  },
  watch:{
    question(value,oldValue){
      //console.log({value,oldValue});
      this.isValidQuestion = false;
      if(!value.includes('?')) return;
      //TODO: hacer peticion http
      this.isValidQuestion = true;
      this.getAnswer();
    }
  }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>