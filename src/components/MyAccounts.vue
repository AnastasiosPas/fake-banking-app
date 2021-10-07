<template>
    <div :key="account.accountNumber" v-for="account in allAccounts">
        <p class="salutation">Welcome back Mr. <strong>
            {{(account[0].accounts[0].holderName)}}</strong> </p>
        <p  class="accountsbtn">Your fAkeBN-AMRO accounts:</p>
        <br/>
      <div class="grid">
        <Account @click="viewAccountDetails1" 
                     :accountType="account[0].accounts[0].productName" 
                     :accountNumber="account[0].accounts[0].accountNumber" 
                     :balance="account[0].accounts[0].balance" />
            <ul v-if="viewDetails1"  class="details">
                <li>IBAN: {{account[0].accounts[0].accountNumber}}</li>  
                <li>Account type: {{account[0].accounts[0].productName}}</li>                 
                <li>Currency code: {{account[0].accounts[0].currencyCode}}</li>
                <li>Country code: {{account[0].accounts[0].bankCountryCode}}</li>
                <li>BIC code: {{account[0].accounts[0].bankIdentifierCode}}</li>
                <li>Balance:<strong> €{{account[0].accounts[0].balance}}</strong></li> 
                <Button @btn-click="openTransactions1" text="Transactions"/>
            </ul>
            <div>
                <div v-if="transactions1" class="transactions">
                <Transaction @expand-transaction="expandTransaction" :date="transAccount1[0].bookDate" :amount="transAccount1[0].amount" /> 
                <TransactionList  v-if="transaction"  :transactionId="transAccount1[0].transactionId"
                            :bookTime="transAccount1[0].transactionDateTime"
                            :creditDebit="transAccount1[0].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[0].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[0].counterpartyName"
                            :description="transAccount1[0].description"  /> 
                <Transaction @expand-transaction="expandTransaction" :date="transAccount1[1].bookDate" :amount="transAccount1[1].amount"/> 
                 <TransactionList  v-if="transaction"  :transactionId="transAccount1[1].transactionId"
                            :bookTime="transAccount1[1].transactionDateTime"
                            :creditDebit="transAccount1[1].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[1].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[1].counterpartyName"
                            :description="transAccount1[1].description"  /> 
                <Transaction @expand-transaction="expandTransaction" :date="transAccount1[2].bookDate" :amount="transAccount1[2].amount"/> 
                 <TransactionList  v-if="transaction"  :transactionId="transAccount1[2].transactionId"
                            :bookTime="transAccount1[2].transactionDateTime"
                            :creditDebit="transAccount1[2].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[2].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[2].counterpartyName"
                            :description="transAccount1[2].description"  /> 
                <Transaction @expand-transaction="expandTransaction" :date="transAccount1[3].bookDate" :amount="transAccount1[3].amount"/> 
                 <TransactionList  v-if="transaction"  :transactionId="transAccount1[3].transactionId"
                            :bookTime="transAccount1[3].transactionDateTime"
                            :creditDebit="transAccount1[3].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[3].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[3].counterpartyName"
                            :description="transAccount1[3].description"  /> 
                <Transaction @expand-transaction="expandTransaction" :date="transAccount1[4].bookDate" :amount="transAccount1[4].amount"/> 
                 <TransactionList  v-if="transaction"  :transactionId="transAccount1[4].transactionId"
                            :bookTime="transAccount1[4].transactionDateTime"
                            :creditDebit="transAccount1[4].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[4].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[4].counterpartyName"
                            :description="transAccount1[4].description"  /> 
                <Transaction @expand-transaction="expandTransaction"  :date="transAccount1[5].bookDate" :amount="transAccount1[5].amount"/> 
                 <TransactionList  v-if="transaction"  :transactionId="transAccount1[5].transactionId"
                            :bookTime="transAccount1[5].transactionDateTime"
                            :creditDebit="transAccount1[5].creditDebitIndicator"
                            :counterpartyAccountNumber="transAccount1[5].counterpartyAccountNumber"
                            :counterpartyName="transAccount1[5].counterpartyName"
                            :description="transAccount1[5].description"  /> 
            
                </div>
            </div>
      </div>   
      <div class="grid">
        <Account @click="viewAccountDetails2"
                    :accountType="account[0].accounts[1].productName" 
                    :accountNumber="account[0].accounts[1].accountNumber" 
                    :balance="account[0].accounts[1].balance" />
            <ul v-if="viewDetails2" class="details">
                <li>IBAN: {{account[0].accounts[1].accountNumber}}</li>  
                <li>Account type: {{account[0].accounts[1].productName}}</li>                 
                <li>Currency code: {{account[0].accounts[1].currencyCode}}</li>
                <li>Country code: {{account[0].accounts[1].bankCountryCode}}</li>
                <li>BIC code: {{account[0].accounts[1].bankIdentifierCode}}</li>
                <li>Balance: <strong> €{{account[0].accounts[1].balance}}</strong></li>
                <Button @btn-click="openTransactions2" text="Transactions"/>
            </ul>
                <div>
                    <div v-if="transactions2" class="transactions" >
                    <Transaction  @expand-transaction="expandTransaction" :date="transAccount2[0].bookDate" :amount="transAccount2[0].amount"/> 
                    <Transaction  :date="transAccount2[1].bookDate" :amount="transAccount2[1].amount"/> 
                    <Transaction  :date="transAccount2[2].bookDate" :amount="transAccount2[2].amount"/> 
                    </div>
                </div>
      </div>
      <div class="grid">
        <Account @click="viewAccountDetails3"
                    :accountType="account[1].accounts[0].productName" 
                    :accountNumber="account[1].accounts[0].accountNumber" 
                    :balance="account[1].accounts[0].bookBalance" />
            <ul v-if="viewDetails3" class="details">
                <li>IBAN: {{account[1].accounts[0].accountNumber}}</li>  
                <li>Account type: {{account[1].accounts[0].productName}}</li>                 
                <li>Currency code: {{account[1].accounts[0].currencyCode}}</li>
                <li>Country code: {{account[1].accounts[0].bankCountryCode}}</li>
                <li>BIC code: {{account[1].accounts[0].bankIdentifierCode}}</li>
                <li>Balance: <strong> €{{account[1].accounts[0].bookBalance}}</strong></li>
                <Button @btn-click="openTransactions3" text="Transactions"/>
            </ul>
                <div>
                    <div v-if="transactions3" class="transactions">
                    <Transaction @expand-transaction="expandTransaction" :date="transAccount3[0].bookDate" :amount="transAccount3[0].amount"/> 
                    <Transaction :date="transAccount3[1].bookDate" :amount="transAccount3[1].amount"/> 
                    <Transaction :date="transAccount3[2].bookDate" :amount="transAccount3[2].amount"/> 
                    </div>
                </div>
      </div>
    </div>
</template>


<script>
 import accountData from '../../public/accounts.json' 
 import { transactions1 } from '../../public/transactions_NL18ABNA5476393838.json'
 import { transactions2 } from '../../public/transactions_NL14ABNA4415260276.json'
 import { transactions3 } from '../../public/transactions_NL72ABNA4416709382.json'

 import Account from './Account'
 import Button from './Button'
 import Transaction from './Transaction'
 import TransactionList from './TransactionList'


export default {
    name: 'MyAccounts',
    components: {
        Account,
        Button,
        Transaction,
        TransactionList
    },
    props: {
        
    },
     data() {
    return {
      allAccounts: accountData,
      transAccount1: transactions1,
      transAccount2: transactions2,
      transAccount3: transactions3,
      viewDetails1: false,
      viewDetails2: false,
      viewDetails3: false,
      transactions1: false,
      transactions2: false,
      transactions3: false,
      transaction: false
        };
    },
    methods: {
    viewAccountDetails1 () {
        this.viewDetails1 = !this.viewDetails1;
        },

    viewAccountDetails2 () {
        this.viewDetails2 = !this.viewDetails2;
        },

    viewAccountDetails3 () {
        this.viewDetails3 = !this.viewDetails3;
        },

    openTransactions1() {
        this.transactions1 = !this.transactions1
        },

    openTransactions2() {
        this.transactions2 = !this.transactions2
        },

    openTransactions3() {
        this.transactions3 = !this.transactions3
        },

    expandTransaction() {
        this.transaction = !this.transaction;
    }
    }
}   
</script>


<style scoped>

.details {
    font-size: 1em;
    list-style: none;
    max-width:fit-content;
    padding: 15px;
    margin: 0px;

}

.salutation {
    margin-bottom: 20px;
    font-size: 2em;
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0.5em 0em;
}

.accountsbtn {
    /* position:absolute;  */
    border-radius: 2px;
    padding: 0px 15px;
    font-size: 1.7em;
    top: 175px;
}

.salutation, .accountsbtn, .details, .transactions{
    background-image: linear-gradient(270deg, rgba(0, 76, 76, 0.9), rgba(0, 113, 107, 0.9));
    color: rgb(230, 230, 230);
}


.details, .transactions p:hover {
    color: white;
    background-image: linear-gradient(270deg, rgba(0, 76, 76), rgba(0, 113, 107));
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr ;

}


</style>


               
//    async fetchAccounts() {
//       const res = await fetch("http://localhost:3000/accountGroups/")
//       const data = await res.json()

//       return data
//     }

//    },

//    async created () {
//      this.allAccounts = await this.fetchAccounts();
//    }