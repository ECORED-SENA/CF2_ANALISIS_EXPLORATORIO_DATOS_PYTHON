<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En la actualidad, existen muchas herramientas y recursos que pueden implementar las organizaciones, independientemente de su tamaño, para el análisis exploratorio de datos, una de ella es Anaconda, la cual, por medio de lenguajes como Python, permite el manejo y procesamiento de grandes volúmenes de información; por ende, en el desarrollo de este componente, se reconoce  a fondo dicha herramienta, de la misma forma que su proceso de instalación; por medio de ejemplos, se identifica el proceso de aplicación de las metodologías necesarias para la preparación, lectura y análisis de datos.

    p.mb-5 Una breve revisión de los temas vistos se encuentra en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
