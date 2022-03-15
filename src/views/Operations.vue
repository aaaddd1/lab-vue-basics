<template>
<div>
<!-- Iteration 2 --> 
    <button class="iter" @click="sumaNum">{{'La sumas es: ' + sumaNum(5,6)}} </button> <br>

<!-- Iteration 3 -->  
    
    <button class="iter" @click="isHidden = !isHidden">
        <template v-if="isHidden">Click me to <b>show</b> the Image</template>
        <template v-else>Click me to <b>hide</b> the Image</template>
    </button>
    <img src="../assets/silly.jpg" alt="silly" v-if="!isHidden"><br><br>
 
 <!-- Iteration 4 -->  


</div>
</template>

<script>
export default {
    data(){
        return {
            isHidden: true,
        }
    },
methods:{
    sumaNum(a, b) { 
        return a + b },
    },
    
}

</script>

<style>
.iter{
    margin:1%;
    padding: 1%;
}
</style>