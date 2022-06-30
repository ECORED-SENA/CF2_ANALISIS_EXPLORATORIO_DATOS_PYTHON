<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Métodos para el análisis de datos

    .row.cont_background4_1(style="position:relative;")
      .col-md-5(style="position:relative;place-self:center;")
        figure(style="position:relative")
          img(src="@/assets/curso/tema4/1.svg" data-aos="fade-right" style="position:relative")
      .col-md-7(style="position:relative;place-self:center;")
        .row.mt-4(style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative;color:#34A3ED;font-weight:bold;") Con el análisis exploratorio de datos, es posible comprender y llegar a conclusiones de hipótesis sin tener que centrarse en el desarrollo de complicados algoritmos.
            p.mt-4(data-aos="fade-up" style="position:relative") Dentro de los métodos que se pueden utilizar en el análisis exploratorio, se encuentran los análisis propios de la estadística descriptiva, además de las visualizaciones gráficas, que permiten llegar a conclusiones de manera más fácil y precisa.
            p.mt-4(data-aos="fade-up" style="position:relative") En ese sentido, se pueden encontrar, dentro del análisis de datos, variables que son categóricas y variables numéricas, y dependiendo de ellas, se aplicarán métodos que permitan generar algún tipo de información de interés.
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema3/2.svg" data-aos="fade-up" style="position:relative")
        .cajon.color-acento-botones.p-4.mt-3(style="position:relative")
          p.mb-0(data-aos="fade-up" style="position:relative") Tenga en cuenta que, para los ejercicios que se desarrollarán a continuación, encontrará los documentos necesarios en los anexos del curso.

    Separador

    .titulo-segundo.mt-5
      h2#t_4_1 4.1  Medidas de tendencia central y de dispersión

    .row.cont_background4_2(style="position:relative;")
      .col-md-8(style="position:relative;")
        p(data-aos="fade-up" style="position:relative") Las medidas de tendencia central permitirán revisar el comportamiento de los datos desde el punto de vista del análisis estadístico; desde esta perspectiva, se aplicarán los distintos métodos, entre los que se encuentran la media, la moda, la mediana, la desviación estándar y los cuartiles, que ya se han definido en el primer componente formativo.
        .row(style="position:relative")
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema4/3.svg" data-aos="fade-up" style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative;") Para empezar, se procederá a aplicar los métodos de tendencia central a todos los datos; para tal fin, se debe aplicar el siguiente comando, el cual permitirá obtener el análisis de todas las variables, especificando la media, mediana, valores mínimos y máximos, desviación estándar y cuartiles.
        .cajon.color-acento-botones.p-4.mt-3.col-md-7.m-auto(style="position:relative")
          p.mb-0.text-center(data-aos="fade-up" style="position:relative")  Comando:  df.describe() 
      .col-md-4(style="position:relative;place-self:center;")
        figure(style="position:relative")
          img(src="@/assets/curso/tema4/2.png" data-aos="fade-right" style="position:relative")

    p.mt-5(data-aos="fade-up") El cual se define como se muestra en la siguiente figura:

    p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 4 ] #[em Comando de tendencia central]

    .row.cont_background4_3.mt-5(style="position:relative;")
      .row.col-md-10.m-auto(style="position:relative")
        .col-md-6.mb-3.p-0(style="position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema4/5.svg" data-aos="fade-right" style="position:relative")
        .col-md-6.mb-3.p-0(style="position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema4/6.svg" data-aos="fade-right" style="position:relative")

    .row.cont_background4_4.mt-5(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Al aplicar dicho comando, el resultado obtenido corresponde al cálculo de diferentes medidas, que ofrecen un consolidado con todas las variables numéricas de los datos analizados. En casi todas las variables, se observan datos parecidos en cuanto a la media y el valor central o mediana; para las variables valor del seguro, se marcan unas diferencias importantes entre estas medidas, como se muestra en la #[strong(style="color:#34A3ED;") figura 5].
      .col-md-10.m-auto(style="position:relative")
        p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 5 ] #[em Análisis estadístico de todas las variables numéricas]
        figure.mt-4(style="position:relative")
          img(src="@/assets/curso/tema4/8.svg" data-aos="fade-up" style="position:relative")

    Separador

    .titulo-segundo.mt-5
      h2#t_4_2 4.2  Gráficos

    .row.cont_background4_5(style="position:relative;")
      .col-md-4(style="position:relative")
        figure(style="position:relative")
          img(src="@/assets/curso/tema4/9.png" data-aos="fade-right" style="position:relative")
      .col-md-8(style="position:relative;place-self:center;")
        .row.mt-4(style="position:relative")
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema4/10.svg" data-aos="fade-up" style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative;") Otra medida que se puede aplicar para el análisis de datos es el uso de diferentes tipos de gráficos, los cuales permiten una visualización más clara. Con el uso de los gráficos, se puede realizar una distribución mucho más efectiva de los datos, lo que facilita su interpretación.
            p.mt-4(data-aos="fade-up" style="position:relative") Para conocer cada uno de los tipos de gráficos y su funcionalidad, revise con atención el anexo #[strong(style="color:#34A3ED") Tipo de gráficos]. 




      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
<style lang="sass">
.cont_background4_1:before
  content: ''
  background-image: url(../assets/curso/tema3/3.svg)
  position: absolute
  width: 91%
  height: 112%
  left: 25%
  top: -8%
.cajon.color-acento-botones
  background-color: #FFECB1
.cont_background4_2:before
  content: ''
  background-image: url(../assets/curso/tema3/3.svg)
  position: absolute
  width: 91%
  height: 85%
  right: 18%
  top: -4%
  transform: rotate(180deg)
.cont_background4_3:before
  content: ''
  background-image: url(../assets/curso/tema4/4.svg)
  position: absolute
  width: 130%
  height: 100%
  left: -7%
  top: -4%
  background-repeat-y: no-repeat
.cont_background4_4:before
  content: ''
  background-image: url(../assets/curso/tema4/7.svg)
  position: absolute
  width: 130%
  height: 100%
  left: -7%
  top: -4%
  background-repeat-y: no-repeat
.cont_background4_5:before
  content: ''
  background-image: url(../assets/curso/tema3/3.svg)
  position: absolute
  width: 95%
  height: 115%
  left: 20%
  top: -8%
  background-repeat: no-repeat
</style>
