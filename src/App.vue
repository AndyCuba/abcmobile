<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}

body {
  width: 1920px;
  background: #202024;
  overflow-x: hidden;
} 

#app {
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 1440px) {
  body {
    max-width: 1026px;
    margin: auto;
  }
}

@media (max-width: 1026px) {
  body {
    max-width: 320px;
    margin: auto;
  }
}

</style>
