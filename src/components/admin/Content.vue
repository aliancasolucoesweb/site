<template>
  <div>
      <nav-bar></nav-bar>
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <left-bar></left-bar>
                </div>
                 <div class="column is-9">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="../">Bulma</a></li>
                        <li><a href="../">Templates</a></li>
                        <li><a href="../">Examples</a></li>
                        <li class="is-active"><a href="#" aria-current="page">Admin</a></li>
                    </ul>
                    </nav>
                     <div class="container card">
                         
                        <div>
                            <div class="hero-body">
                                <div>
                                <h1 class="title">
                                    Olá, Admin.
                                </h1>
                                <h2 class="subtitle">
                                    Seja bem-vindo ao sistema 
                                </h2>
                                </div>
                            </div>
                        
                        </div>
                        <tabela></tabela>
                        <router-view></router-view>
                    </div>                
                </div>
          </div>
          
      </div>
      <footer-bar></footer-bar>
      
  </div>
</template>

<script>
import NavBar from './NavBar'
import LeftBar from './LeftBar'
import FooterBar from './FooterBar'
import Tabela from '@/components/resource/DataTable'

export default {
    components: {
        NavBar,
        LeftBar,
        FooterBar,
        Tabela
    }
}
</script>
<style>
html, body {
  font-family: 'Open Sans', serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ECF0F3;
}
nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 14px;
  font-weight: 700;
}
.columns {
  width: 100%;
  height: 100%;
}

.menu-label {
  color: #8F99A3;
  letter-spacing: 1.3;
  font-weight: 700;
  text-align: left !important;
}
.menu-list a {
  color: #0F1D38;
  font-size: 14px;
  font-weight: 700;
  text-align: left !important;
}
.menu-list a:hover {
  background-color: transparent;
  color: #276cda;
}
.menu-list a.is-active {
  background-color: transparent;
  color: #276cda;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8F99A3;
  font-weight: 400;
}
.info-tiles {
  margin: 1rem 0;
}
.info-tiles .subtitle {
  font-weight: 300;
  color: #8F99A3;
}
.hero.welcome.is-info {
  background: #36D1DC;
  background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
  background: linear-gradient(to right, #5B86E5, #36D1DC);
}
.hero.welcome .title, .hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}
.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8F99A3;
}
.card-footer-item:hover {
}
.card-table .table {
  margin-bottom: 0;
}
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>
