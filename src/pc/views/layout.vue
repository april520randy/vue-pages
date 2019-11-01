<template>
  <div>
    <div>this is layout template</div>
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>
    <button @click="gotomobile">go to mobile</button>
    <router-view />
  </div>
</template>
<script>
export default {
  
  methods:{
    gotomobile(){
      window.location.href = process.env.BASE_URL+'mobile'
    }
  }
}
</script>