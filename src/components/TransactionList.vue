<template>

<div @expand-transactions="expandTransactions" class="transaction">
     <p>Transaction ID: {{transactionId}}</p>
     <p>Book time: {{bookTime}}</p>
     <p>Credit / Debit: {{creditDebit}}</p>
     <p>Counter party IBAN: {{counterpartyAccountNumber}}</p>
     <p>Counter party name: {{counterpartyName}}</p>
     <p>Transaction description: {{description}}</p>
</div>
     
</template>



<script>

export default {
   name: 'TsansactionList',
  
   props: {
       transactionId: Number,
       bookTime: Date,
       creditDebit: String,
       counterpartyAccountNumber: String,
       counterpartyName: String,
       description: String         
   },

    methods: {

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
        cursor:unset;
        border: 1px solid green;
    }
</style>


