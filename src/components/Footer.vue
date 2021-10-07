<template>
<div>
    <p class="footer">Copyright &copy; 2021</p>
</div>
</template>

<script>
export default {
   name: 'Footer',
}
</script>

<style scoped>

.footer {
   top: 94vh;
   right: 0;
   left: 0;
   width:100%;
   height: 2em;  
   color: rgb(206, 206, 206);
   background-image: linear-gradient(270deg, rgb(24, 80, 80), rgb(0, 113, 107));
   text-align: center;
   position: fixed;
   font-size: 1.2em;
   color:black;
   z-index: -1;
}


</style>