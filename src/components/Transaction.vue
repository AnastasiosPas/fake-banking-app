<template>
        <p @click="$emit('expand-transaction', trans)" class="transaction">
            {{date}}:  <strong>€{{amount}}</strong>
        </p>
</template>


<script>
export default {
   name: 'Transaction',
   props: { 
           date: String,
           amount: Number
       }
   
}
</script>


<style  scoped>

    .transaction {
        max-width:fit-content;
        padding: 0px 15px;
        font-size: 1.3em;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
        cursor: pointer;
        color: rgb(250, 236, 158)
    }

</style>