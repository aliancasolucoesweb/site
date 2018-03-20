<template>
<section class="hero is-white is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <h4 class="title is-4">Aliança Soluções</h4>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Sobre
              </a>
              <a class="navbar-item">
                Quem Somos
              </a>
              <a class="navbar-item">
                Produtos
              </a>
              <a class="navbar-item">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <p class="line-1 typewriter">Nosso trabalho é tornar seus sonhos em realidade... </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'contet-view',
  components: {
    Carousel, Slide
  }

}
</script>

<style>
.hero {
  /* font-family: 'Lato', sans-serif; */
  /* background: #4396c63a;
  background: -webkit-linear-gradient(to top, #71c4dd, #6090a7);
  background: linear-gradient(to top, #aacac4, #6090a7); */
  background-image: url("/static/change-your-mindset.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
  filter: alpha(opacity=10);

}

.line-1{
    position: relative;
    top: -30vh;
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
}

.typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>
