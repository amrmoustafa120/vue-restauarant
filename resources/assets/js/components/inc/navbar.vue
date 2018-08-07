<template>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand" >
    <div class="field is-grouped">
      <a class="navbar-item" href="https://bulma.io">
        restaurant 
    </a>
      <div class="navbar-item">
       <router-link to="/home" class="navbar-item">home</router-link>
       <router-link to="/tables" class="navbar-item">tables</router-link>
       <router-link to="/meals" class="navbar-item">meals</router-link>
       <router-link to="/ingredients" class="navbar-item">ingredients</router-link>
       <router-link to="/categories" class="navbar-item">categories</router-link>
      </div>
      
     

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    </div>
    
  </div>
</nav>
