<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementación de la infraestructura tecnológica para el tratamiento de datos.

    .cont_background1.pb-5(style="position:relative;")
      p(data-aos="fade-up") Para empezar con la instalación de las herramientas tecnológicas que permitan el despliegue del lenguaje de programación Python, es importante que valide los requerimientos técnicos con los que se debe contar, entre los que están:

      p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 1 ] #[em Requerimientos técnicos]

      figure.mt-5(style="position:relative")
        img(src="@/assets/curso/tema1/3.svg" data-aos="fade-up" style="position:relative")

      p.mt-5(data-aos="fade-up" style="position:relative") Por otro lado, las instalaciones necesarias que se deben ejecutar para desarrollar el análisis de datos exploratorio las puede encontrar a continuación:

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
              p.mt-4(style="position:relative") Para las implementaciones de interfaz gráfica, se utilizan los llamados JUPITER, los cuales vienen con la implementación de Anaconda, de manera que facilitan la gestión de #[em Notebooks] (libros que permiten ejecutar líneas de código del lenguaje  de manera gráfica, lo que establece un ambiente más intuitivo para al usuario).
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/5.svg" style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="JupiterLabs" style="position:relative")
          h3(style="position:relative") JupiterLabs
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Esta aplicación permite la creación de archivos denominados #[em Notebooks], para la ejecución y visualización de códigos Python.
              p.mt-4(style="position:relative") Esta aplicación es compatible  con código en tiempo real, ecuaciones matemáticas, visualización y Markdown. Sus usos incluyen limpieza y conversión de datos, simulación numérica, modelado estadístico y máquinas.
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/6.svg" style="position:relative")
        .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Notebooks</em>" style="position:relative")
          h3(style="position:relative") #[em Notebooks]
          .row.mt-4(style="position:relative")
            .col-md-8(style="position:relative")
              p Es una herramienta que permite la creación de diferentes celdas, necesarias para el desarrollo del código en Python; entre dichas celdas, se encuentran:
              p.mt-4(style="position:relative") #[strong Celdas para realizar comentarios:] se utilizan para documentar las líneas de código y ayudan como guía para el desarrollador del proyecto.
              p.mt-4(style="position:relative") #[strong Celdas para ingresar líneas de código Python:] permite ingresar códigos que son interpretados por el lenguaje de programación Python.
              p.mt-4(style="position:relative") #[strong Celdas con los resultados obtenidos:] permiten visualizar las variables, tablas, gráficos, entre otros, del proceso que se realiza en las celdas de ingreso de código.
            .col-md-4(style="place-self:center;position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/7.svg" style="position:relative")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_1 1.1 Instalación Anaconda

    .cajon-b.color-primario.pt-2.ps-2
      p.mb-0(data-aos="fade-up") Anaconda es una distribución de Python que trae consigo múltiples aplicaciones que permiten la implementación de diversos proyectos, ya sea a nivel de consola o a través de interfaz gráfica; este es un #[em software] de uso gratuito, que se puede descargar a través de su página oficial.
        br
        br
        | Para conocer el proceso de instalación, revise con atención el siguiente recurso educativo.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xrlISRh0MZs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Primeros pasos

    .cont_background2.pb-5(style="position:relative")
      .row(style="position:relative")
        .col-md-5(style="position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema1/8.svg" data-aos="fade-right" style="position:relative")
        .col-md-7(style="place-self:center;position:relative")
          .row(style="position:relative")
            .col-auto(style="position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/9.svg" data-aos="fade-up" style="position:relative")
            .col(style="position:relative;place-self:center;")
              p(data-aos="fade-up" style="position:relative") Una vez realizada la instalación correctamente, se recomienda reiniciar el computador, para que todas las herramientas terminen su proceso de configuración y se pueda empezar a trabajar en la aplicación que provee esta distribución.

          p.mt-4(data-aos="fade-up" style="position:relative") Después de haber realizado la instalación, ingrese en la barra de búsqueda las palabras Anaconda Navigator, y seleccione el ícono correspondiente que indica la aplicación; esta distribución de #[em software] incorpora varias aplicaciones que permiten ejecutar código del lenguaje de programación Python, las cuales pueden usarse en modo consola o de interfaz gráfica.

          p.mt-4(data-aos="fade-up" style="position:relative") En el siguiente recurso educativo, conocerá los primeros pasos para la ejecución del entorno de trabajo en una de las aplicaciones provistas por Anaconda Navigator denominada JupiterLabs, esta es la aplicación que se estará utilizando en el curso de análisis exploratorio de los datos:

      .tarjeta.tarjeta--gris.p-5.mt-5(style="background-color: rgba(52,163,237,0.1)")
        LineaTiempoC.color-acento-contenido(text-small style="position:relative")
          .row.col-md-10.m-auto(titulo="1" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Abrir Anaconda Navigator
              p(style="position:relative") Para el #[em software] Anaconda Navigator, diríjase a la barra de búsqueda de su computador y escriba #[strong(style="color:#BE2057;") Anaconda Navigator]; en la medida que empiece a escribir, se irán filtrando las aplicaciones; seleccione el ícono que se identifica como aplicación de #[strong(style="color:#BE2057;") Anaconda Navigator], como se muestra en la imagen.
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/11.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="2" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Seleccione la herramienta JupiterLab
              p(style="position:relative") Cuando se abre la Anaconda Navigator, usted podrá observar múltiples herramientas para el manejo de proyectos en Python; para este caso, la herramienta a utilizar será JupiterLab, para usar esta aplicación, selecciona la herramienta dando clic en el botón #[em Launch].
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/12.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="3" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Haga clic sobre el botón #[em Launch]
              p(style="position:relative") Allí se desprende el entorno de trabajo que se muestra en la imagen. Al lado izquierdo, encontrará las carpetas necesarias para  guardar cada uno de sus archivos; al lado derecho, aparece el tipo de aplicación que se utilizará; para este caso, el curso está basado en la creación de #[em Notebooks].
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/13.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="4" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Creación de #[em Notebooks]
              p(style="position:relative") Para crear los #[em Notebooks], seleccione la primera opción de la derecha, tal como se muestra en la imagen; en el panel izquierdo, puede seleccionar la carpeta donde  va a guardar los #[em Notebooks].
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/14.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="5" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Extensión .ipynb
              p(style="position:relative") Los #[em Notebooks] tienen la extensión .ipynb, y el entorno de trabajo se puede apreciar en la imagen.
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/15.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="6" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative")  Celdas en los #[em Notebooks]
              p(style="position:relative") En la siguiente imagen, se representan los tres tipos de celdas que se utilizan en los #[em Notebooks]: la primera línea es un comentario, como se aprecia en la imagen: “Mi Primer Programa”,  esta sirve para llevar la documentación del archivo; la siguiente línea: print (“Hola Mundo”), ejecuta la línea de comando del lenguaje Python.
              p.mt-4 Finalmente, la tercera línea muestra los resultados, en este caso, el texto “hola mundo”, estos datos también pueden ser numéricos, tablas, gráficos, entre otros.
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/16.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="7" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Herramientas del archivo Notebook
              p(style="position:relative") A continuación, se detalla cada herramienta que hace parte del archivo Notebook, y que ayuda al desarrollo del proyecto.
              ul.lista-ul.mt-2
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | Para guardar el Notebook, utilice el primer ícono en forma de disquete.
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | Cada vez que se requiere adicionar una nueva línea, ya sea de comentario o de código, se utiliza el ícono con el signo +.
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | El ícono de las tijeras elimina las líneas de código.
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | Las líneas se ejecutan de manera independiente con el ícono de forma triangular.
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | Para pausar o detener el proceso, el ícono indicado es el cuadrado al lado del triángulo.
                li
                  i.fas.fa-caret-right(style="color:#067EFF;")
                  | La flecha en forma circular se utiliza para reiniciar el programa desde la primera línea.
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/17.svg', alt='' style="position:relative")

          .row.col-md-10.m-auto(titulo="8" style="position:relative")
            .col-md-7.mb-4.mb-md-0(style="position:relative")
              h4(style="position:relative") Herramientas del archivo Notebook
              p(style="position:relative") En la parte superior derecha, está la lista de opciones para indicar si una línea es de código o de comentario; como se aprecia en la siguiente imagen, se pueden seleccionar tres opciones:
              p.mt-4 #[strong #[em Code]:] líneas de código que son interpretadas por el lenguaje de programación Python.
              p.mt-4 #[strong #[em Markdown]:] líneas de comentarios, ayudan a documentar el proyecto, pueden incluir textos con formatos, imágenes, tablas, entre otros.
              p.mt-4 #[strong #[em Raw]:] se usa para visualizar la información tal como se escribe, pero no es interpretada por el lenguaje.
            .col-md-5(style="position:relative")
              figure(style="position:relative")
                img(src='@/assets/curso/tema1/18.svg', alt='' style="position:relative")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_3 1.3 Mi primer programa

    .row(style="position:relative;z-index:1;")
      .col-md-5
        figure
          img(src="@/assets/curso/tema1/19.png" data-aos="fade-right")
      .col-md-7
        .cont_background3(style="position:relative;z-index:1")
          p.mt-5(data-aos="fade-up" style="position:relative") Para comprender lo visto hasta el momento, replique el siguiente ejemplo, que consiste en capturar dos variables y mostrar como resultado la suma de ellas. Para cada celda donde solicite la variable, realice la operación e incluya una celda de comentario que dé cuenta de lo que se ha realizado o lo que se busca con esa línea.
          .row.mt-4(style="position:relative")
            .col-auto(style="position:relative")
              figure(style="position:relative")
                img(src="@/assets/curso/tema1/20.svg" data-aos="fade-up" style="position:relative")
            .col(style="position:relative")
              p(data-aos="fade-up" style="position:relative") Como se observa en la #[strong(style="color:#34A3ED;") figura 2], se utilizan las celdas de comentarios que especifican cada una de las operaciones a realizar, y las celdas de código que se pueden fácilmente identificar por el número que se asigna a la derecha encerrado entre corchetes.
              p.mt-4(data-aos="fade-up" style="position:relative") Se ubica en cada una de las celdas de código y las ejecuta con el ícono triangular ubicado en la barra superior, hasta poder visualizar el resultado final.

    br
    br
    .cont_background4.mt-5.pb-5(style="position:relative")
      .col-md-6.m-auto(style="position:relative")
        p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 2 ] #[em Ejemplo suma de dos variables y celdas de comentarios]
        figure.mt-4(style="position:relative")
          img(src="@/assets/curso/tema1/23.svg" data-aos="fade-up")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_4 1.4  Librerías para el tratamiento y visualización de los datos

    .row
      .col-md-7
        p(data-aos="fade-up") Las librerías son un conjunto de instrucciones que ayudan a codificar todo tipo de soluciones, y para el caso del análisis exploratorio de datos, no es la excepción; para este caso, se utilizan una serie de librerías que facilitan el tratamiento y visualización de los datos con muy pocas líneas de código.
        p.mt-4(data-aos="fade-up") Estas librerías procesan grandes volúmenes de información y generan resultados muy importantes que agilizan el estudio de los datos.
        .cajon.color-acento-botones.p-4.mt-4
          p.mb-0(data-aos="fade-up") En el siguiente recurso educativo, conocerá las principales librerías que se trabajarán en este programa de formación, preste mucha atención, pues se explicará la forma correcta de importarlas y ejecutarlas desde los #[em Notebooks]:
      .col-md-5
        figure.mt-4
          img(src="@/assets/curso/tema1/24.svg" data-aos="fade-right")

    .row.mt-5
      .col-md-5
        figure
          img(src="@/assets/curso/tema1/25.png" data-aos="fade-right")
      .col-md-7
        SlyderA.pt-5.pb-5.ps-5.pe-5.cont_slider1.mt-4(tipo="b")
          .row
            p #[strong Librería Pandas:] herramienta creada en Python para la manipulación y visualización de grandes volúmenes de datos. Para la instalación en el #[em Notebook], se debe crear una nueva celda de código e ingresar el comando #[em import pandas as pd]. Después, se coloca la palabra as seguida de #[em pd], puede ser cualquier nombre, este debe ser abreviado y hacer referencia al nombre de la librería, por convención se puede  decir que Pandas se utilizará como #[em pd].
          .row
            p #[strong Librería Matplotlib:] Es una librería que permite muy fácilmente generar diversos tipos de gráficos. Para el uso de esta librería, ingrese el siguiente comando: #[em import matplotlib.pyplot as plt].
          .row
            p #[strong Librería Seaborn:]  se basa en la librería para la gestión de gráficos Matplolib, se utiliza para la visualización de gráficas más atractivas, igualmente, para los gráficos informativos y estadísticos; para usar esta librería, importe de la siguiente manera: #[em import seaborn as sns].
          .row
            p #[strong Librería Numpy:] este conjunto de herramientas es muy útil para trabajar funciones matemáticas, algebraicas y la fácil manipulación de vectores y matrices; para usar esta librería, use: #[em import numpy as np].





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
.cont_background2:before
  content: ''
  background-image: url(../assets/curso/tema1/10.svg)
  position: absolute
  width: 115%
  height: 60%
  left: -7%
  top: 40%
.cont_background3:before
  content: ''
  background-image: url(../assets/curso/tema1/21.svg)
  position: absolute
  width: 110%
  height: 110%
  left: -7%
  top: -5%
.cont_background4:before
  content: ''
  background-image: url(../assets/curso/tema1/22.svg)
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  top: -25%
  z-index: 0
  background-size: 65%
.cajon.color-acento-botones
  background-color: #FFECB1
.cont_slider1
  background-image: url(../assets/curso/tema1/26.svg)
  background-repeat: no-repeat
  background-size: cover
.slyder-a__bullets__item--active
  background-color: #E2C140
  border-color: #E2C140
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #7F4FC7
  transform: rotate(0deg) !important
  background-image: url(../assets/template/arrow2.svg) !important
.slyder-a__tipo-b .slyder-a__btn--sigt
  transform: rotate(180deg) !important
</style>
