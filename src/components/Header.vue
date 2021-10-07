<template>
    <header class="header">
        <h1 class="logo">fAkeBN-AMRO </h1>
         <Button 
        @btn-click="$emit('toggle-login')"
        :text="loginBtn ? 'Log In' : 'Log Out'"
        :lock="loginBtn ? 'fas fa-lock' : 'fas fa-unlock'"
        />
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    components: {
        Button 
    },
    props: {
        loginBtn: Boolean,
    },
    // computed: {
    //        homePage() {
    //             if(this.$route.path === '/') {
    //             return true
    //         } else {
    //             return false
    //         }
    //        } 
    //      }
}
</script>


<style scoped>

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    background-image: linear-gradient(270deg, rgb(0, 76, 76), rgb(0, 113, 107));
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    position: sticky;
    top: 0px;
}

.logo {
    color: rgb(206, 206, 206);
    font-family: 'Condensed';
}



</style>