<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planteamiento de las preguntas objetivo del negocio

    .row
      .col-md-7(style="place-self:center;")
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema2/1.svg" data-aos="fade-right")
          .col
            p(data-aos="fade-up") Para realizar un análisis de datos exploratorio que resulte efectivo, es de vital importancia, como primera medida, identificar y tener claridad referente a los objetivos y las metas establecidas por la organización hacia la cual se va a aplicar dicho análisis.
            p.mt-4(data-aos="fade-up") Desde esta perspectiva, se debe identificar cada uno de los procesos que se realizan en cada una de las áreas que conforman la empresa, esto permitirá tener claridad frente a las tareas que se desarrollan y, por ende, de los datos que dicha tarea requiere para ejecutarse de manera efectiva. En este orden de ideas,  al tener claros los requerimientos y las necesidades de la empresa, el analista encargado tendrá una ruta ya establecida para dar inicio con la planeación del análisis, su diseño e implementación.
      .col-md-5
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-left")

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5.col-md-10.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-up") Revise en  el siguiente recurso educativo los pasos necesarios para realizar el levantamiento de la información que permita la implementación del análisis de datos exploratorio de datos en Python:

    PasosA.color-primario.mt-5.col-md-10.m-auto(tipo="n")
      .row.p-3
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p(data-aos="fade-right") Establecer un diálogo constante con cada uno de los miembros de la organización.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/3.png', alt='' data-aos="fade-left")
      .row.p-3
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/4.png', alt='' data-aos="fade-left")
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p.mt-4(data-aos="fade-right") Identificar la misión y la visión organizacional
      .row.p-3
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p(data-aos="fade-right") Identificar y tener claridad respecto de los recursos financieros con los que cuenta la empresa.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/5.png', alt='' data-aos="fade-left")
      .row.p-3
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/6.png', alt='' data-aos="fade-left")
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p.mt-3(data-aos="fade-right") Reconocer cada uno de los recursos tecnológicos con los que cuenta la organización.
      .row.p-3
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p(data-aos="fade-right") Identificar las características de los productos y servicios que ofrece la organización.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/7.png', alt='' data-aos="fade-left")
      .row.p-3
        .col-md-5
          figure
            img(src='@/assets/curso/tema2/8.png', alt='' data-aos="fade-left")
        .col-md-7.mb-4.mb-md-0(style="place-self:center;")
          p.mt-4(data-aos="fade-right") Reconocer cómo está posicionada la empresa frente a la competencia.

    .cont_background2_1.mt-5.pb-5(style="position:relative;")
      .row(style="position:relative")
        .col-md-4(style="position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema2/9.png" data-aos="fade-right" style="position:relative")
        .col-md-8(style="position:relative")
          p.mt-4(data-aos="fade-up" style="position:relative") Al poder responder a preguntas como: ¿qué necesidades tiene la empresa?, ¿hacia dónde va la empresa?, ¿cuáles son sus objetivos?, entre otras, se podrán identificar los parámetros y los procesos necesarios que permitan al analista implementar estrategias efectivas para optimizar el manejo de grandes volúmenes de información, los cuales, la mayoría de las veces, resultan fundamentales para la toma de decisiones estratégicas que favorezcan a la organización.
          p.mt-4(data-aos="fade-up" style="position:relative") Para que el analista de datos pueda desarrollar de la mejor manera su trabajo, es fundamental que cuente con el apoyo del gerente o el analista de negocio, los cuales le darán la información suficiente para comprender al 100% cada uno de los procesos de la empresa; a partir de allí, podrá establecer metodologías adecuadas para la gestión, la organización y el manejo de datos.
      .cajon.color-acento-botones.p-4.mt-5(style="position:relative")
        p.mb-0(data-aos="fade-up" style="position:relative") Por otro lado, es importante tener en cuenta que los análisis de datos no siempre pueden estar enmarcados hacia un solo objetivo, estos puede implementarse con el fin de llevar a la organización hacia:

      SlyderF.mt-5(columnas="col-lg-3 col-xl-3" style="position:relative")
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/11.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") La búsqueda de nueva información.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") El mejoramiento de los procesos productivos.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/13.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") La identificación de problemas que puedan estar afectando el óptimo desarrollo de la organización.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/14.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") La implementación de estrategias para descartar o aprobar hipótesis.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/15.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") La creación de nuevas líneas de negocio.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/16.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") El análisis de la competencia.
        .tarjeta.color-acento-botones.p-4(style="position:relative;background-color:white;box-shadow:0px 0px 10px #d6d6d6;height:300px;margin-bottom:10px;")
          .row.justify-content-center.mb-3(style="position:relative")
            figure.text-center(style="position:relative")
              img(src="@/assets/curso/tema2/17.svg" style="display:inline;max-width:100px;position:relative")
            p.mt-4.text-center(style="position:relative") El desarrollo de planes de mejoramiento, entre muchos otros.

    .cont_background2_2.mt-5.pb-5(style="position:relative;")
      .row(style="position:relative")
        .col-md-8(style="position:relative")
          p(data-aos="fade-up" style="position:relative") Las formulaciones de los objetivos del análisis de datos deben realizarse a partir de las respuestas dadas a las preguntas formuladas para la obtención de la información base; si se plantean de manera errónea las preguntas, pues las respuestas no van a ser las adecuadas, por ende, el planteamiento de los objetivos llevará a un análisis de datos fallido, que no va a beneficiar a la organización.
          p.mt-4(data-aos="fade-up" style="position:relative") Por ende, siguiendo con el ejemplo que se ha venido desarrollando a lo largo de este espacio de formación, se reconocerá la mejor manera para desarrollar el análisis y la identificación de preguntas que permitan identificar los objetivos del análisis: 
          p.mt-4(data-aos="fade-up" style="position:relative") Para este caso particular, se trabajará en un ejemplo en el que se requiere el análisis de la colección de datos (DatosSeguros.csv) para desarrollar una estrategia comercial de venta de seguros médicos; para este fin, se analizarán diferentes variables que van a permitir determinar el valor de dicho seguro.
          p.mt-4(data-aos="fade-up" style="position:relative") Desde esta perspectiva, la formulación de las preguntas objetivo del negocio se basará en un conjunto de datos que encontrará en los anexos con el nombre de #[strong(style="color:#34A3ED;") DatosSeguros.csv]. Inicialmente, se plantean las siguientes preguntas, que sirven de base para el análisis de los datos:
        .col-md-4(style="position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema2/18.png" data-aos="fade-left" style="position:relative")

      .row.mt-5(style="position:relative")
        .col-sm-6.col-md-4.mb-4.mb-lg-0(style="position:relative")
          .tarjeta--boton.color-primario.p-4#cajon_ridiculo1(style="position:relative;height:100%;")
            .row.justify-content-center.mb-2(style="position:relative")
              .col-7(style="position:relative")
                figure(style="position:relative")
                  img.img_ridicula1(src='@/assets/curso/tema2/20.svg', alt='' style="position:relative")
                  img.img_ridicula2(src='@/assets/curso/tema2/21.svg', alt='' style="position:relative;display:none;")
            p.text-center(style="font-weight:bold;position:relative;color:white;") ¿Las personas fumadoras representan el mayor potencial para ventas de seguros?
        .col-sm-6.col-md-4.mb-4.mb-lg-0(style="position:relative")
          .tarjeta--boton.color-primario.p-4#cajon_ridiculo2(style="position:relative;height:100%;")
            .row.justify-content-center.mb-2(style="position:relative")
              .col-7(style="position:relative")
                figure(style="position:relative")
                  img.img_ridicula1(src='@/assets/curso/tema2/22.svg', alt='' style="position:relative")
                  img.img_ridicula2(src='@/assets/curso/tema2/23.svg', alt='' style="position:relative;display:none;")
            p.text-center(style="font-weight:bold;position:relative;color:white;") ¿Cuál es la edad poblacional en la que se debe concentrar la estrategia comercial teniendo en cuenta el mayor ingreso?
        .col-sm-6.col-md-4.mb-4.mb-lg-0(style="position:relative")
          .tarjeta--boton.color-primario.p-4#cajon_ridiculo3(style="position:relative;height:100%;")
            .row.justify-content-center.mb-2(style="position:relative")
              .col-7(style="position:relative")
                figure(style="position:relative")
                  img.img_ridicula1(src='@/assets/curso/tema2/24.svg', alt='' style="position:relative")
                  img.img_ridicula2(src='@/assets/curso/tema2/25.svg', alt='' style="position:relative;display:none;")
            p.text-center(style="font-weight:bold;position:relative;color:white;") ¿Cuál es la región con mayor potencial de venta de seguros teniendo en cuenta los ingresos?

      .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5.col-md-10.m-auto(style="position:relative")
        .row.m-0.align-items-center.justify-content-between(style="position:relative")
          .col-lg-12(style="position:relative")
            .bloque-texto-a__texto.p-4(style="position:relative")
              p.mb-0(data-aos="fade-up" style="position:relative") Pueden surgir N preguntas, pero una sola pregunta basta para generar un análisis complejo de datos, incluso en el mismo análisis de los datos pueden surgir nuevas preguntas que se pueden intentar resolver, al igual que nueva información que no se contemplaba en principio.

      p.mt-5(data-aos="fade-up" style="position:relative") Finalmente, es importante socializar con todos los involucrados del negocio los hallazgos obtenidos, esto con el fin de coordinar de manera más eficiente la implementación necesaria para el análisis. Es importante que todos los miembros de la organización estén alineados, esto permitirá trabajar en pro del alcance de un mismo objetivo. 





      
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('#cajon_ridiculo1').hover(
      function() {
        $('#cajon_ridiculo1 .img_ridicula1').hide()
        $('#cajon_ridiculo1 .img_ridicula2').show()
      },
      function() {
        $('#cajon_ridiculo1 .img_ridicula1').show()
        $('#cajon_ridiculo1 .img_ridicula2').hide()
      },
    )
    $('#cajon_ridiculo2').hover(
      function() {
        $('#cajon_ridiculo2 .img_ridicula1').hide()
        $('#cajon_ridiculo2 .img_ridicula2').show()
      },
      function() {
        $('#cajon_ridiculo2 .img_ridicula1').show()
        $('#cajon_ridiculo2 .img_ridicula2').hide()
      },
    )
    $('#cajon_ridiculo3').hover(
      function() {
        $('#cajon_ridiculo3 .img_ridicula1').hide()
        $('#cajon_ridiculo3 .img_ridicula2').show()
      },
      function() {
        $('#cajon_ridiculo3 .img_ridicula1').show()
        $('#cajon_ridiculo3 .img_ridicula2').hide()
      },
    )
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.bloque-texto-a.color-secundario
  background-color: #F6F6F6
.bloque-texto-a.color-secundario:before
  background-color: #FDBE41
  background: linear-gradient(173deg, #fdbe41, #D09F40 122%)
.pasos-a.color-primario .pasos-a__circle
  background-color: #EE296D
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #EE296D
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #EE296D
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #EE296D
.pasos-a__linea__esquina__linea
  border-radius: 0px
.cont_background2_1:before
  content: ''
  background-image: url(../assets/curso/tema1/10.svg)
  position: absolute
  width: 115%
  height: 75%
  left: -7%
  top: 25%
  background-size: 1100px
.cajon.color-acento-botones
  background-color: #FFECB1
.cont_background2_2:before
  content: ''
  background-image: url(../assets/curso/tema2/19.svg)
  position: absolute
  width: 115%
  height: 70%
  left: -7%
  top: 30%
  background-size: 1100px
.tarjeta--boton.color-primario:active, .tarjeta--boton.color-primario:focus, .tarjeta--boton.color-primario:hover
  background-color: #fff
  box-shadow: 0px 0px 10px #d6d6d6
.tarjeta--boton
  border-radius: 20px
  background-color: #116EB9
.tarjeta--boton.color-primario:active p, .tarjeta--boton.color-primario:focus p, .tarjeta--boton.color-primario:hover p
  color: #12263F !important
</style>
