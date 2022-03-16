<template>
<div>
<!-- Iteration 2 --> 
    
    <button class="iter" @click="sumaNum">{{'La sumas es: ' + sumaNum(5,6)}} </button> <br>

<!-- Iteration 3 -->  
    
    <button class="iter" @click="isHidden = !isHidden">
        <p v-if="isHidden">Click me to <b>show</b> the Image</p>
        <p v-else>Click me to <b>hide</b> the Image</p>
    </button>
    <img src="../assets/tree.jpg" alt="tree" v-if="!isHidden"><br><br>
 
 <!-- Iteration 4 -->  
    <div class="posts" v-for="post in posts" :key="post.title">
        {{post.description}}
    </div>

</div>
</template>

<script>
export default {
    data(){
        return {
            isHidden: true,
            posts: [
                {
                    title:"post1",
                    description: "Monday's reminder",
                    content: "school"
                },
                 {
                    title:"post2",
                    description: "Tuesday's reminder",
                    content: "work"
                },
                 {
                    title:"post3",
                    description: "Wenesday's reminder",
                    content: "gym"
                }
            ]
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

.posts{
    border: solid grey;
    margin: 15px;
    width: 20%;
    border-radius: 40%;
    padding: 18px;
    text-align: center;
}
</style>