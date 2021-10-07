<template>
    <div>
        <button @click="$emit('btn-click')" class="btn">
            <i  :class="lock"> </i> {{text}}
        </button>
    </div>
</template>

<script>
export default {
name: 'Button',
 props: {
       text: String,
       lock: String,
   },

} 
</script>


<style>

.btn {
    background-color: rgb(232, 191, 43);
    padding: 3px 10px ;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    border-radius: 2px;
    border: 1px solid rgb(232, 191, 43);
    cursor: pointer;
}

.btn:hover {
background-color: rgb(255, 200, 0);
border: 1px solid rgb(255, 200, 0);
}

</style>