<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{customTitle}}</h2>
    <p>{{counter}}<sup>2</sup> = {{squareCounter}}</p>
    <p data-testid='counter'>{{counter}}</p>
    <div>
        <button @click="increase()">+1</button>
        <button @click="decrease()">-1</button>
    </div>
</template>

<script>
export default {
    name:'Counter',
    props:{
        title:String,
        start:{
            type:Number,
            default:100,
            //required:true,
            validator(value){
                return value >= 1;
            }
        }
    },
    data(){
        return {
            counter:this.start
        }
    },
    methods:{
        getSquareValue(){
            console.log('getSquareValue');
            return this.counter*this.counter;
        },
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        }
    },
    computed:{
        squareCounter(){
            //console.log('computed square counter');
            return this.counter*this.counter;
        },
        customTitle(){
            return (this.title!==undefined)?this.title:'Contador';
        }
    }
}
</script>

<style>
button{
    background-color:#64bbb7 ;
    border-radius:5px;
    color:white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    padding: 5px 15px;
    margin:0 5px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color:#5aa67b ;
    transition: 0.3s ease-in-out;
}
</style>