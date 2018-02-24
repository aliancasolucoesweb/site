<template>
<nav class="navbar is-white is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          Bulma Admin          
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="admin.html">
            Configurações
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Olá Admin
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Alterar Senha
      </a>
      <a class="navbar-item">
        Sair
      </a>
    </div>
        </div>
        </div>

      </div>
    </div>
  </nav>
</template>
<script>
export default {

}
    
</script>