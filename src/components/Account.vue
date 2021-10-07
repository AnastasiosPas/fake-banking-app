<template>
    <div>
        <p  class='accountComponent'>{{accountNumber}}</p>
    </div>
</template>

<script>
export default {
    name: 'Account',
    props: {
        accountNumber: String,
    },

}
</script>

<style scoped>

.accountComponent {
    font-size: 1.5em;
    text-align: left;
    padding: 15px;
    margin: 1px;
    background-image: linear-gradient(270deg, rgba(0, 76, 76, 0.9), rgba(0, 113, 107, 0.9));
    color: rgb(230, 230, 230);
    margin: 0.5em 0em;
    cursor: pointer;
    max-width:fit-content;
    margin: 0px;
}

.accountComponent:hover {
    color:white;
    background-image: linear-gradient(270deg, rgba(0, 76, 76), rgba(0, 113, 107));

} 

</style>


// @click="$emit('view-account-details')"