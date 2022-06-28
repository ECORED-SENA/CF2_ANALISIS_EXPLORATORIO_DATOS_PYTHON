<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Entendiendo los datos

    .row.cont_background3_1(style="position:relative;")
      .col-md-4(style="position:relative")
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right" style="position:relative")
      .col-md-8(style="position:relative;place-self:center;")
        .row.mt-4(style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative") ¿Pero qué se debe tener en cuenta para comenzar con el análisis de datos? Preste mucha atención, pues a continuación se darán a conocer varias acciones que son necesarias en el momento de estudiar datos, como, por ejemplo, la preparación de la infraestructura, la determinación de los tipos de datos, el ordenamiento de los datos, su agrupamiento, la identificación de datos nulos, de datos duplicados, qué hacer con este tipos de datos, los diferentes formatos utilizados para el análisis,  entre otros.
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema3/2.svg" data-aos="fade-up" style="position:relative")

    Separador

    .titulo-segundo.mt-5
      h2#t_3_1 3.1  Prepare la infraestructura

    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5.col-md-10.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-up") Revise en  el siguiente recurso educativo los pasos necesarios para realizar el levantamiento de la información que permita la implementación del análisis de datos exploratorio de datos en Python:

    TabsC.color-acento-contenido.mt-5
      div(titulo="Cree un Notebook" style="background-color:#E0F1FD;")
        .row.p-2.p-md-5
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/4.svg' alt='')
            .tarjeta.tarjeta--azul(style="background-color:#F8FBFD;")
              .p-4
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/7.svg")
                  .col(style="place-self:center;")
                    p Para crear un entorno de trabajo, siga los siguientes pasos.
                    ul.lista-ul.mt-2
                      li
                        i.fas.fa-caret-right(style="color:#067EFF;")
                        | Inicie Anaconda Navigator.
                      li
                        i.fas.fa-caret-right(style="color:#067EFF;")
                        | Seleccione la aplicación JupiterLabs.
                      li
                        i.fas.fa-caret-right(style="color:#067EFF;")
                        | Crear un Notebook llamado &nbsp;<em>AnalsisDatos.ipynb</em>.
      div(titulo="Descargue el archivo" style="background-color:#E0F1FD;")
        .row.p-2.p-md-5
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/5.svg' alt='')
            .tarjeta.tarjeta--azul(style="background-color:#F8FBFD;")
              .p-4
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/7.svg")
                  .col(style="place-self:center;")
                    p Descargue el archivo denominado: #[strong(style="font-style:italic;") DatosSeguros.csv], que encuentra en los anexos y colóquelo en la misma carpeta donde creó el Notebook.
      div(titulo="Importe las librerías Pandas" style="background-color:#E0F1FD;")
        .row.p-2.p-md-5
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/6.svg' alt='')
            .tarjeta.tarjeta--azul(style="background-color:#F8FBFD;")
              .p-4
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema3/7.svg")
                  .col(style="place-self:center;")
                    p Para importar la librería Pandas que servirá para la lectura del archivo CSV, ejecute el siguiente comando:
                    p.mt-4 #[strong import pandas as pd]

    Separador

    .titulo-segundo.mt-5
      h2#t_3_2 3.2  Lectura de datos

    .row.cont_background3_1(style="position:relative;")
      .col-md-4(style="position:relative")
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/8.png" data-aos="fade-right" style="position:relative")
      .col-md-8(style="position:relative")
        .row(style="position:relative")
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema3/9.svg" data-aos="fade-up" style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative") Continuando con el análisis, se procede con la lectura de los datos que ya se encuentran en el archivo, los cuales deben ser asignados a la variable df. Para ese fin, se debe ejecutar el siguiente comando:
            .cajon.color-acento-botones.p-4.mt-3(style="position:relative")
              p.mb-0.text-center(data-aos="fade-up" style="position:relative") #[strong df = pd.read_csv('DatosSeguros.csv')]
        p.mt-4(data-aos="fade-up" style="position:relative") El nombre de la variable será df, que hace referencia a un dataframe, es decir, a una colección de datos organizados en filas y columnas, a la cual se le puede asignar el nombre que se prefiera o que mejor represente dichos datos.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_3 3.3  Identificación de los datos

    .row.cont_background3_2(style="position:relative;")
      .col-md-8(style="position:relative")
        .row(style="position:relative")
          .col-auto(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema3/11.svg" data-aos="fade-up" style="position:relative")
          .col(style="position:relative")
            p(data-aos="fade-up" style="position:relative") Después de la lectura de los datos dentro del archivo de texto en formato CSV, que se encuentran almacenados ahora en la variable df, se debe aplicar el siguiente comando para obtener información de los datos:
            .cajon.color-acento-botones.p-4.mt-3.col-md-9.m-auto(style="position:relative")
              p.mb-0.text-center(data-aos="fade-up" style="position:relative") #[strong df.info()]
        p.mt-4(data-aos="fade-up" style="position:relative") En la #[strong(style="color:#34A3ED;") tabla 1], se identifican los campos obtenidos en la colección de datos clasificados en categóricos y numéricos.
      .col-md-4(style="position:relative")
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/10.png" data-aos="fade-right" style="position:relative")

    .col-md-10.m-auto.mt-5(style="position:relative;z-index:1;")
      p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Tabla 1 ] #[em Caracterización de las variables]
      .tabla-a.color-acento-contenido.mt-4(data-aos="fade-up" style="position:relative:z-index:1;")
        table
          thead
            tr
              th.text-center.p-4(style="font-size:18px;") Variables categóricas
              th.text-center.p-4(style="font-size:18px;") Variables numéricas
          tbody
            tr.bg-white
              td.text-center.p-4 Sexo (object)
              td.text-center.p-4 edad (int64)
            tr.bg-white
              td.text-center.p-4 fumador (object)
              td.text-center.p-4 imc (float64)
            tr.bg-white
              td.text-center.p-4 region (object)
              td.text-center.p-4 valor_seguro(float64)
            tr.bg-white
              td.text-center.p-4
              td.text-center.p-4 hijos (int64)

    .row.cont_background3_3(style="position:relative;")
      p.mt-5(style="position:relative" data-aos="fade-up") Como se observa en la #[strong(style="color:#34A3ED;") figura 3], el resultado obtenido para el ejemplo dado es 1349 registros y un total de 7 columnas. Con este resultado se realiza la caracterización de las variables, las cuales pueden ser numéricas o categóricas. Es importante tener en cuenta que las variables categóricas son de tipo object.
      .col-md-10.m-auto(style="position:relative")
        p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 3 ] #[em Lectura e identificación de los datos]
        figure.mt-4(style="position:relative")
          img(src="@/assets/curso/tema3/13.svg" data-aos="fade-up" style="position:relative")
        figcaption(style="position:relative;font-weight:500;" data-aos="fade-up") Nota. Captura de pantalla

    Separador

    .titulo-segundo.mt-5
      h2#t_3_4 3.4  Manipulando los datos

    .row
      .col-auto
        figure
          img(src="@/assets/curso/tema3/14.svg" data-aos="fade-right")
      .col
        p(data-aos="fade-up") Al observar con atención la figura 3, se puede visualizar en la información de los datos que el resultado para las columnas imc y fumador es de 1347, mientras que para las demás columnas es de 1349. Esto indica que existen valores vacíos para esas dos variables.
        p.mt-4(data-aos="fade-up") Revise con atención el siguiente recurso educativo, que permite visualizar los pasos necesarios para limpiar los datos y dejarlos con una mejor consistencia para el análisis.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nIHKG1B9hQY" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema3',
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
.cont_background3_1:before
  content: ''
  background-image: url(../assets/curso/tema3/3.svg)
  position: absolute
  width: 78%
  height: 110%
  left: 23%
  top: -8%
.bloque-texto-a.color-secundario:before
  background-color: #FDBE41
  background: linear-gradient(173deg, #fdbe41, #D09F40 122%)
.bloque-texto-a.color-secundario
  background-color: #F6F6F6
.tabs-c__header
  margin-bottom: 0px
.tabs-c__tab--active span
  font-weight: bold
.cajon.color-acento-botones
  background-color: #FFECB1
.cont_background3_2:before
  content: ''
  background-image: url(../assets/curso/tema3/3.svg)
  position: absolute
  width: 78%
  height: 110%
  transform: rotate(180deg)
  right: 22%
  top: -8%
.cont_background3_3:before
  content: ''
  background-image: url(../assets/curso/tema3/12.svg)
  position: absolute
  width: 135%
  height: 110%
  left: -3%
  top: -20%
  background-repeat: no-repeat
.tabs-c__tab span
  font-size: 20px
.tarjeta-avatar-b .tarjeta
  place-self: center
</style>
