(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"ad3a8192","chunk-0206bfa0":"bfd70531","chunk-0c047e41":"416347e8","chunk-13a6037e":"990ac76e","chunk-18f95272":"390737d8","chunk-25b302c8":"8faeb68c","chunk-26fc7596":"9a954fbd","chunk-2c06842c":"d9d3c978","chunk-2d0e96ec":"229b0177","chunk-2d208d90":"fbfdbf8a","chunk-2d21d0e2":"05a5fe40","chunk-2d22c123":"e7022577","chunk-2d2747e2":"a1250838","chunk-2e80bb9a":"f477a53f","chunk-319206de":"f0c95d3a","chunk-32334cb6":"409f553e","chunk-3c57cd7b":"94c2076a","chunk-3d6834f6":"1202c832","chunk-4cdd78c0":"33cfd434","chunk-4f2d402a":"b03d5036","chunk-4fde0a08":"c38c9f38","chunk-515a8379":"0f218ec0","chunk-53ccb27e":"246497fd","chunk-55d286b8":"af1ffab1","chunk-59974754":"e0ff8661","chunk-6e1e538a":"98f13096","chunk-766a929b":"24cc1c04","chunk-c796899c":"9e75f7ac","chunk-e8a7823a":"2b41ddb8","chunk-f2df7d2c":"0e0dab54","chunk-fde47172":"6d003a50",comple:"8b9cefee",creditos:"73e1dbdb",glosario:"ac608c3f",intro:"2e314b55",referencias:"9d39f227",sintesis:"ff09a4dd",tema1:"b9aa8f3e",tema2:"9c511436",tema3:"01918dd7",tema4:"5a94581f",tema5:"f77fb889"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1,tema2:1,tema3:1,tema4:1,tema5:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"51a2ad3a","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"8b3d9d08","chunk-6e1e538a":"126808df","chunk-766a929b":"8e010cc2","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"d7c72c06",creditos:"10da7b49",glosario:"5cb29718",intro:"31d6cfe0",referencias:"a3daf8f6",sintesis:"31d6cfe0",tema1:"08c8e83f",tema2:"5b9360b5",tema3:"579cba71",tema4:"badcf231",tema5:"b7ecdb37"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},1710:function(e,a,n){e.exports=n.p+"img/imagen1.1b970d70.svg"},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.ae7d9c32.svg"},"397a":function(e,a,n){e.exports=n.p+"img/imagen2.5cf12f32.svg"},4810:function(e,a,n){e.exports=n.p+"img/imagen4.33fa1d2b.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Recursos y herramientas para el análisis efectivo de datos.",descripcionCurso:"Se abordan las herramientas para reconocer el proceso de instalación de la infraestructura y librerías basados en el lenguaje de programación Python, fundamental para el manejo y el análisis exploratorio de los datos.<br><br>Aprenderá a desplegar su propio entorno de trabajo con herramientas modernas Python, a realizar las lecturas de los archivos, manipular la información y generar análisis estadísticos.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("230f"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("1710")},{clases:["banner-principal-decorativo-2"],imagen:n("397a")},{clases:["banner-principal-decorativo-3"],imagen:n("e144")},{clases:["banner-principal-decorativo-4"],imagen:n("4810")},{clases:["banner-principal-decorativo-5"],imagen:n("6f75")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Implementación de la infraestructura tecnológica para el tratamiento de datos. ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Instalación Anaconda",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Primeros pasos",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Mi primer programa",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Librerías para el tratamiento y visualización de los datos",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Planteamiento de las preguntas objetivo del negocio",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Entendiendo los datos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Prepare la infraestructura",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Lectura de datos",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Identificación de los datos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Manipulando los datos",hash:"t_3_4"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Métodos para el análisis de datos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Medidas de tendencia central y de dispersión",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Gráficos",hash:"t_4_2"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Análisis de resultados y conclusiones",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Acevedo, A. y Martínez, V. (2021). Hacia una explotación de la encuesta de estructura salarial en hostelería desde el análisis exploratorio de datos con aplicación a la brecha salarial de género. Revista Atlántida: Revista Canaria de Ciencias Sociales, (12), p. 101-129.",link:"https://dialnet.unirioja.es/servlet/articulo?codigo=8310316"},{referencia:"Marrugo, H. y Melo, J. (2020). Propuesta análisis exploratorio de datos georreferenciables y temporales, caso de estudio: producción nacional del oro 2012 a 2020. Fundación Universitaria Los Libertadores.",link:"http://hdl.handle.net/11371/3596"},{referencia:"Meneghetti, M. (2021). Introduction to Gravitational Lensing: With Python Examples. Springer.",link:""},{referencia:"Rojas, I., Jiménez, E. y Yepes, R. (2021). Competencias profesionales e Industria 4.0: análisis exploratorio para ingeniería industrial y administrativa en Medellín. Revista Interamericana de Investigación, Educación y Pedagogía, 14(2), p. 169-194.",link:"https://doi.org/10.15332/25005421.6299"},{referencia:"Roldán, C. (2021). Instalación y configuración básica de Anaconda para Python. Universitat Politècnica de València.",link:"https://riunet.upv.es/handle/10251/167282"}],glosario:[{termino:"BoxPlot",significado:"Gráfico de caja que sirve para representar la dispersión de los datos en cuartiles."},{termino:"Gráfico",significado:"Utilizado para realizar representaciones estadísticas y mostrar información con el objetivo de generar información."},{termino:"JupiterLab",significado:"Aplicación que hace parte de Anaconda y sirve para crear la interfaz gráfica para los proyectos de Python."},{termino:"Notebook",significado:"Archivos que se crean desde el aplicativo JupiterLab."},{termino:"Seaborn",significado:"Librería especializada en la creación de gráficos informativos y estadísticos."},{termino:"Pandas",significado:"Librerías de Python utilizadas para el análisis y la manipulación de los datos."}],complementario:[{tema:"Análisis Exploratorio de Datos",referencia:"Abonaplata. (2019). Análisis exploratorio de datos con Python.",tipo:"Página Web",link:"https://www.kaggle.com/code/abonaplata/analisis-exploratorio-de-datos-con-python/notebook"},{tema:"Análisis Exploratorio de datos",referencia:"Sotaquirá, M. (2021). ¿Cómo hacer el Análisis Exploratorio de Datos? - Guía paso a paso. Codificando bits.",tipo:"Página Web",link:"https://www.codificandobits.com/blog/analisis-exploratorio-de-datos/"},{tema:"Descargar Anaconda",referencia:"Anaconda. (s. f.). Anaconda Distribution.",tipo:"Página Web",link:"https://www.anaconda.com/products/individual?modal=nucleus"},{tema:"Colección de Datos",referencia:"MAJYHAIN. (2022). Height of Male and Female by Country 2022. Kaggle.",tipo:"Página Web",link:"https://www.kaggle.com/majyhain/height-of-male-and-female-by-country-2022"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable equipo desarrollo curricular",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Ronald Alexander Vacca Ascanio",cargo:"Experto Temático",centro:"Centro De Diseño Metrología - Regional Distrito Capital. "},{nombre:"Jeimy Lorena Romero Perilla",cargo:"Diseñador Instruccional",centro:"Centro de la industria, la empresa y los servicios - Regional Norte de Santander"},{nombre:"María Inés Machado López",cargo:"Diseñador Instruccional",centro:"Centro de la industria, la empresa y los servicios - Regional Norte de Santander"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Asesor metodológico y pedagógico",centro:"Centro De Diseño Metrología - Regional Distrito Capital."},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro De Diseño Metrología - Regional Distrito Capital."}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable equipo diseño y desarrollo de RED",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Anllelo Andres Reina Montañez",cargo:"Diseño Web",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Validación Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Luis Jesús Perez Madariaga",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Andrea Paola Botello De La Rosa",cargo:"Validación Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Luis Gabriel Urueta",cargo:"Desarrollo actividades didácticas",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Bolaño",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yicelly Mesa",cargo:"Storyboard y gráficos",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Ludwyng Corzo",cargo:"Animación 2d",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Junior Rodriguez",cargo:"Validación producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable equipo gestión de repositorio",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"6f75":function(e,a,n){e.exports=n.p+"img/imagen5.f6178d3c.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","jquery":"^3.6.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.86047cd4.svg"},cf25:function(e,a,n){"use strict";n("fea6")},e144:function(e,a,n){e.exports=n.p+"img/imagen3.529b4790.svg"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.fbd7db62.js.map