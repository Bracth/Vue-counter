<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {this.count ++}
    }
}
</script>

<template>
    <h1>Super contador</h1>
    <h2>{{count}}</h2>
    <button @click="add">+</button>
</template>

<style scoped>



    h1 {
    color: #000000;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
}

    button{
        font-size: 20px;
        padding: 20px 30px;
        border-radius: 100%;
        cursor: pointer;
    background-color: #FFF;
    color: #49FF18;
}

    button:hover {
        color: #000000;
        background-color: #49FF18;
}

button:active {
    background-color: #49FF18;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>