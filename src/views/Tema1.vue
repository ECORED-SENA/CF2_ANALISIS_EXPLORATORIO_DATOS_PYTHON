<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alistamiento y convocatoria según las necesidades de personal

    .cont_background1.pb-5(style="position:relative;")
      p(data-aos="fade-up") Bienvenido a este componente formativo denominado “Recursos y herramientas para el análisis efectivo de datos”. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se propone a continuación:

      p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 1 ] #[em Requerimientos técnicos]

      figure.mt-5(style="position:relative")
        img(src="@/assets/curso/tema1/3.svg" data-aos="fade-up" style="position:relative")

      p.mt-5(data-aos="fade-up" style="position:relative") Por otro lado, las instalaciones necesarias que se deben ejecutar para desarrollar el análisis de datos exploratorio las puede encontrar a detalle en el siguiente recurso educativo:

      TabsA.color-acento-botones.mt-5(style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Python" style="position:relative")
          h3(style="position:relative") Python
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Es un lenguaje de alto nivel, utilizado, entre otras cosas, en proyectos de ciencias de datos; cuenta con librerías muy robustas, que permiten la manipulación de grandes volúmenes de información; estas ejecuciones se pueden realizar muy fácilmente, ya que las librerías se ofrecen con muy pocas líneas de código, que en ocasiones pueden resultar muy complejos.
              p.mt-4(style="position:relative") Python es un lenguaje de programación multiplataforma, el cual permite desarrollar aplicaciones en cualquier sistema operativo.
              p.mt-4(style="position:relative") Para la utilización del lenguaje, es necesario descargar e instalar una distribución de Python que permite que las ejecuciones se realicen de manera gráfica a través de Notebook.
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/4.svg" style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Anaconda" style="position:relative")
          h3(style="position:relative") Anaconda
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Es una distribución del lenguaje de programación que permite utilizar con mayor facilidad el lenguaje Python. Para este caso, se hará uso de la interfaz gráfica, aunque también se puede trabajar en modo consola.
              p.mt-4(style="position:relative") Para las implementaciones de interfaz gráfica, se utilizan los llamados JUPITER, los cuales vienen con la implementación de Anaconda, de manera que facilitan la gestión de Notebooks (libros que permiten ejecutar líneas de código del lenguaje  de manera gráfica, lo que establece un ambiente más intuitivo para al usuario).
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/5.svg" style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="JupiterLabs" style="position:relative")
          h3(style="position:relative") JupiterLabs
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Esta aplicación permite la creación de archivos denominados Notebooks, para la ejecución y visualización de códigos Python.
              p.mt-4(style="position:relative") Esta aplicación es compatible  con código en tiempo real, ecuaciones matemáticas, visualización y Markdown. Sus usos incluyen limpieza y conversión de datos, simulación numérica, modelado estadístico y máquinas.
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/6.svg" style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Notebooks" style="position:relative")
          h3(style="position:relative") Notebooks
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Es una herramienta que permite la creación de diferentes celdas, necesarias para el desarrollo del código en Python; entre dichas celdas, se encuentran:
              p.mt-4(style="position:relative") #[strong Celdas para realizar comentarios:] se utilizan para documentar las líneas de código y ayudan como guía para el desarrollador del proyecto.
              p.mt-4(style="position:relative") #[strong Celdas para ingresar líneas de código Python:] permite ingresar códigos que son interpretados por el lenguaje de programación Python. 
              p.mt-4(style="position:relative") #[strong Celdas con los resultados obtenidos:] permiten visualizar las variables, tablas, gráficos, entre otros, del proceso que se realiza en las celdas de ingreso de código.
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/6.svg" style="position:relative")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_1 1.1 Instalación Anaconda

    .cajon-b.color-primario.pt-2.ps-2
      p.mb-0(data-aos="fade-up") Anaconda es una distribución de Python que trae consigo múltiples aplicaciones que permiten la implementación de diversos proyectos, ya sea a nivel de consola o a través de interfaz gráfica; este es un software de uso gratuito, que se puede descargar a través de su página oficial.
        br
        br
        | Para conocer el proceso de instalación, revise con atención el siguiente recurso educativo.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Primeros pasos

    .row
      .col-md-5
        figure
          img(src="@/assets/curso/tema1/8.svg" data-aos="fade-right")
      .col-md-7(style="place-self:center;")
        .row
          .col-auto
            figure
              img(src="@/assets/curso/tema1/9.svg" data-aos="fade-up")
          .col
            p(data-aos="fade-up") Una vez realizada la instalación correctamente, se recomienda reiniciar el computador, para que todas las herramientas terminen su proceso de configuración y se pueda empezar a trabajar en la aplicación que provee esta distribución.

        p.mt-4(data-aos="fade-up") Después de haber realizado la instalación, ingrese en la barra de búsqueda las palabras Anaconda Navigator, y seleccione el ícono correspondiente que indica la aplicación; esta distribución de software incorpora varias aplicaciones que permiten ejecutar código del lenguaje de programación Python, las cuales pueden usarse en modo consola o de interfaz gráfica.

        p.mt-4(data-aos="fade-up") En el siguiente recurso educativo, conocerá los primeros pasos para la ejecución del entorno de trabajo en una de las aplicaciones provistas por Anaconda Navigator denominada JupiterLabs, esta es la aplicación que se estará utilizando en el curso de análisis exploratorio de los datos:



      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_background1:before
  content: ''
  background-image: url(../assets/curso/tema1/2.svg)
  position: absolute
  width: 115%
  height: 75%
  left: -7%
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #EE296D;
  color: white
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #EE296D
.tarjeta.color-acento-botones--borde
  background-color: #E0F1FD
  color: #12263F
  border: none
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  background-color: #EE296D
  color: white
.tabs-a__tab
  background-color: #E8E8E8
.cajon-b.color-primario:before
  background-color: #FDDFE9
</style>
