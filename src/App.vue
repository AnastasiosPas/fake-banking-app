<template>
<div id="app" class="container">
  <Header  @toggle-login="toggleLogin" :loginBtn="loginBtn"/>
<p v-show="!loggedIn" class='welcome'>Welcome to the new era of online banking!</p>
     
    <div v-show="loggedIn" class="myaccounts">
      <MyAccounts />
    </div>
  
</div> 
 <Footer />

</template>


<script>

import Header from './components/Header'
import Footer from './components/Footer'
import MyAccounts from './components/MyAccounts'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MyAccounts
  },
  data() {
    return {
      loginBtn: true,
      loggedIn: false,
      allAccounts: [],
    }
  },
  methods: {
    toggleLogin () {
          this.loginBtn = !this.loginBtn;
          this.loggedIn = !this.loggedIn;
        },

   },
   created () {
     this.allAccounts = '../public/accounts.json';
     this.transAccount1 = '../public/transactions_NL18ABNA5476393838.json';
     this.transAccount2 = '../public/transactions_NL14ABNA4415260276.json';
     this.transAccount3 = '../public/transactions_NL72ABNA4416709382.json';
   }

  }


</script>


<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

@font-face {
  font-family: 'Condensed';
  src: url(./fonts/Universal-Condensed-Bold.ttf) format('truetype');
}

.welcome {
  position:fixed;
  top: 30%;
  font-size: 3em;
  font-weight:400;
  color: white;
  background-image: linear-gradient(270deg, rgba(0, 76, 76, 0.5), rgb(0, 113, 107, 0.5));
}



.myaccounts {
  margin-top: 70px;
}

</style>
