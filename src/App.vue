<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal__numero
  background-color: #EE296D !important
.titulo-principal__numero span
  color: white !important
.banner-interno__fondo
  background: #252435 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #EE296D !important
.banner-principal-decorativo-1
  animation: none !important
  top: -6% !important
  right: 80% !important
.banner-principal-decorativo-2
  animation: none !important
  top: 89% !important
  right: 0% !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 5px !important
  padding-top: 8rem !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img img
  position: relative
  z-index: 5
.banner-principal-decorativo-3
  top: 11%
  z-index: 0
  right: 16%
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-principal-decorativo-4
  top: 48%
  right: 15%
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
  z-index: 6
.banner-principal-decorativo-5
  top: 63%
  right: 29%
  z-index: 6
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
</style>
