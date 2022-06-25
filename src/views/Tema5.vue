<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis de resultados y conclusiones

    p(data-aos="fade-up") A continuación, se tomarán los resultados obtenidos para realizar la comparación y, de esta manera, se irá dando respuesta a las preguntas planteadas en el inicio del análisis de los datos; para este fin, se definen los siguientes pasos:

    SlyderA.p-0.p-md-4.cont_slider5_1.mt-5(tipo="b")
      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") a] Comparación entre el total de fumadores contra los que pagan más por el valor del seguro:
        .col-md-6
          h4.text-white.titulo-degrade.p-2.text-center Análisis unitario distribución fumadores y no fumadores
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 6 ] #[em Distribución porcentual de fumadores]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/3.svg")
        .col-md-6
          h4.text-white.titulo-degrade.p-2.text-center Distribución de valores de seguro pagados por fumadores y no fumadores
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 7 ] #[em Valor seguro contra fumador ]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/4.svg")
        p.mt-5 La gráfica circular muestra que la mayor cantidad de clientes no son fumadores; la segunda gráfica muestra una distribución que indica que los que más alto pagan por el valor del seguro son los fumadores. 

      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") b] Para determinar el total de valores porcentualmente pagados al seguro por personas no fumadoras y fumadoras, se usa el siguiente comando, que permite generar ese análisis a través de un gráfico de total porcentual. #[strong (Ver Figura 8)]
        .col-md-6
          .cajon.color-acento-botones.p-4.mt-3(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative") total_rango_edad = df['Rango_Edad'].groupby(df['Rango_Edad']).count() #[br] labels = ["A", "B", "C", "D", "E"] #[br] colors = sns.color_palette('Set2')[0:5]
            p.mt-4 plt.pie(total_rango_edad, labels = labels, colors = colors, autopct='%.1f%%') #[br] plt.show()
          p.mt-5 El resultado que se genera en la gráfica, visualizado en la #[strong(style="color:#34A3ED;") figura 9], arroja datos interesantes. Recuerde que los clientes fumadores equivalen a un 20 %, y los no fumadores, al 80 %, pero en cuanto a los valores pagados al seguro, las sumas son iguales al 50 % aproximadamente del total del valor del seguro, lo que indica un precio mucho más elevado para los clientes fumadores.
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 8 ] #[em Valor seguro contra fumador ]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/5.svg")

      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") c] Para comparar los valores porcentualmente pagados al seguro de acuerdo con el rango de edad, utilice el siguiente comando, que permite generar ese análisis y verlo reflejado en la #[strong(style="color:#34A3ED;") figura 9]:
        .col-md-6
          .cajon.color-acento-botones.p-4.mt-3(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative") total_rango_edad = df['Rango_Edad'].groupby(df['Rango_Edad']).count() #[br] labels = ["A", "B", "C", "D", "E"] #[br] colors = sns.color_palette('Set2')[0:5]
            p.mt-4 plt.pie(total_rango_edad, labels = labels, colors = colors, autopct='%.1f%%') #[br] plt.show()
          p.mt-5 Los resultados arrojados muestran porcentajes más equilibrados en todos los rangos de edad.
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 9 ] #[em Ingresos contra la variable rango de edad ]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/6.svg")

      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") d] Por otro lado, para establecer la correlación entre las variables que permiten identificar una cercanía, se precisa el siguiente comando:
        .col-md-6
          .cajon.color-acento-botones.p-4.mt-3(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative;word-break:break-all;") correlacion = df.corr() #[br] correlacion #[br] sns.heatmap(correlacion,xticklabels=correlacion.columns,yticklabels=correlacion.columns,annot=True)
          p.mt-5 Como se observa en la #[strong(style="color:#34A3ED;") figura 10], la relación más cercana al valor número 1 es la edad y el índice de masa corporal con respecto al valor pagado al seguro; estas relaciones toman más importancia en la medida en que el valor sea más cercano al número 1.
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 10 ] #[em Relación entre variables ]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/7.svg")

      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") e] Relaciones multivariado: para realizar el análisis multivariado que implica más de dos variables, se tendrán en cuenta las que tienen una relación más cercana, como lo son el índice de masa corporal, la edad con respecto al valor pagado al seguro y una variable muy importante que se ha descubierto, que es la de fumador; se relacionarán tres variables en un mismo gráfico, con el objetivo de observar patrones.
        .col-md-6
          .cajon.color-acento-botones.p-5.mt-3(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative;word-break:break-all;") sns.relplot(x='Rango_Edad' ,y='valor_seguro',hue='imc',data=df)
          p.mt-5 Como se puede observar en la #[strong(style="color:#34A3ED;") figura 11], los valores más altos pagados corresponden a todos los rangos de edad con un índice de masa corporal alto.
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 11 ] #[em Relación tres variables: valor seguro, rango de edad y el índice de masa corporal]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/8.svg")

      .row.p-0.pb-0.p-md-4
        p Para el siguiente análisis, utilice el siguiente comando:
        .col-md-6
          .cajon.color-acento-botones.p-5.mt-4.text-center(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative;word-break:break-all;") sns.relplot(x='Rango_Edad', #[br] y='valor_seguro',hue='fumador',data=df)
          p.mt-5 Claramente, se observa en la #[strong(style="color:#34A3ED;") figura 12] que, en cualquier rango de edad, el hecho de que sea fumador es determinante para el pago del valor del seguro.
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 12 ] #[em Relaciona tres variables: valor seguro, rango de edad y el indicador de fumador]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/9.svg")

      .row.p-0.pb-0.p-md-4
        p #[strong(style="color:white;background-color:#EE296D;padding:5px 12px;font-size: 17px;") f] Para establecer relaciones entre el valor pagado, estado fumador y la región, es necesario ejecutar el siguiente comando para determinar relación por regiones y valores pagados, como se observa en la #[strong(style="color:#34A3ED;") figura 13].
        .col-md-6
          .cajon.color-acento-botones.p-5.mt-3(style="position:relative")
            p.mb-0(data-aos="fade-up" style="position:relative;word-break:break-all;") sns.barplot(data=df,x='region',y='valor_seguro',hue='fumador')
        .col-md-6
          p.mt-5(data-aos="fade-up" style="border-left:4px #EE296D solid;padding-left:8px;position:relative") #[strong Figura 13 ] #[em Relación rango de edad y estado fumador con los valores del seguro]
          figure.mt-5.col-md-9.m-auto
            img(src="@/assets/curso/tema5/10.svg")

    br
    br
    .row.mt-5
      .col-md-7
        h4.text-white.titulo-degrade.p-2.text-center.col-md-5(data-aos="fade-up") Conclusiones
        p.mt-4(data-aos="fade-up") Partiendo de las preguntas planteadas y los resultados obtenidos en el análisis de un solo dato y multivariado, se pueden generar las siguientes conclusiones:
        ul.lista-ul.mt-2
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | El 80 % de los registros analizados no son fumadores.
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | Cerca del 45 % de los clientes no tienen hijos.
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | Aproximadamente, el 70 % de los clientes tiene al menos un hijo.
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | El rango de edad para el rango A representa cerca del 30 % del total de registros. 
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | Los valores pagados al seguro por los clientes identificados como fumadores equivalen al 50 % del total. 
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | A pesar de que los clientes no fumadores equivalen al 80 %, solo representan el 50 % del valor total del seguro. 
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | La región no es determinante en el valor del seguro.
          li.mb-4 
            i.fas.fa-caret-right(style="color:#067EFF;")
            | Lo más relevante en los valores pagados al seguro se dio en personas que son fumadores
      .col-md-5
        figure
          img(src="@/assets/curso/tema5/11.png" data-aos="fade-left")



      
</template>

<script>
export default {
  name: 'Tema5',
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
.cont_slider5_1
  background-image: url(../assets/curso/tema5/1.svg)
  background-repeat: no-repeat
  background-size: cover
.slyder-a__bullets__item--active
  background-color: #7F4FC7
  border-color: #7F4FC7
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #7F4FC7
  transform: rotate(0deg) !important
  background-image: url(../assets/template/arrow2.svg) !important
.slyder-a__tipo-b .slyder-a__btn--sigt
  transform: rotate(180deg) !important
.titulo-degrade
  background: url(../assets/curso/tema5/2.svg)
  background-size: cover
.cajon.color-acento-botones
  background-color: #FFECB1
</style>
