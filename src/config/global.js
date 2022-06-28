export default {
  global: {
    componenteFormativo:
      'Recursos y herramientas para el análisis efectivo de datos.',
    descripcionCurso:
      'Se abordan las herramientas para reconocer el proceso de instalación de la infraestructura y librerías basados en el lenguaje de programación Python, fundamental para el manejo y el análisis exploratorio de los datos.<br><br>Aprenderá a desplegar su propio entorno de trabajo con herramientas modernas Python, a realizar las lecturas de los archivos, manipular la información y generar análisis estadísticos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/imagen1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/imagen2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/imagen3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/imagen4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/imagen5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Implementación de la infraestructura tecnológica para el tratamiento de datos. ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instalación Anaconda',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Primeros pasos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mi primer programa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Librerías para el tratamiento y visualización de los datos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planteamiento de las preguntas objetivo del negocio',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entendiendo los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Prepare la infraestructura',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Lectura de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Identificación de los datos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Manipulando los datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Métodos para el análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Medidas de tendencia central y de dispersión',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Gráficos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Análisis de resultados y conclusiones',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acevedo, A. y Martínez, V. (2021). Hacia una explotación de la encuesta de estructura salarial en hostelería desde el análisis exploratorio de datos con aplicación a la brecha salarial de género. Revista Atlántida: Revista Canaria de Ciencias Sociales, (12), p. 101-129.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8310316',
    },
    {
      referencia:
        'Marrugo, H. y Melo, J. (2020). Propuesta análisis exploratorio de datos georreferenciables y temporales, caso de estudio: producción nacional del oro 2012 a 2020. Fundación Universitaria Los Libertadores.',
      link: 'http://hdl.handle.net/11371/3596',
    },
    {
      referencia:
        'Meneghetti, M. (2021). Introduction to Gravitational Lensing: With Python Examples. Springer.',
      link: '',
    },
    {
      referencia:
        'Rojas, I., Jiménez, E. y Yepes, R. (2021). Competencias profesionales e Industria 4.0: análisis exploratorio para ingeniería industrial y administrativa en Medellín. Revista Interamericana de Investigación, Educación y Pedagogía, 14(2), p. 169-194.',
      link: 'https://doi.org/10.15332/25005421.6299',
    },
    {
      referencia:
        'Roldán, C. (2021). Instalación y configuración básica de Anaconda para Python. Universitat Politècnica de València.',
      link: 'https://riunet.upv.es/handle/10251/167282',
    },
  ],
  glosario: [
    {
      termino: 'BoxPlot',
      significado:
        'Gráfico de caja que sirve para representar la dispersión de los datos en cuartiles.',
    },
    {
      termino: 'Gráfico',
      significado:
        'Utilizado para realizar representaciones estadísticas y mostrar información con el objetivo de generar información.',
    },
    {
      termino: 'JupiterLab',
      significado:
        'Aplicación que hace parte de Anaconda y sirve para crear la interfaz gráfica para los proyectos de Python.',
    },
    {
      termino: 'Notebook',
      significado: 'Archivos que se crean desde el aplicativo JupiterLab.',
    },
    {
      termino: 'Seaborn',
      significado:
        'Librería especializada en la creación de gráficos informativos y estadísticos.',
    },
    {
      termino: 'Pandas',
      significado:
        'Librerías de Python utilizadas para el análisis y la manipulación de los datos.',
    },
  ],
  complementario: [
    {
      tema: 'Análisis Exploratorio de Datos',
      referencia:
        'Abonaplata. (2019). Análisis exploratorio de datos con Python. Kaggle. https://www.kaggle.com/code/abonaplata/analisis-exploratorio-de-datos-con-python/notebook',
      tipo: 'Página Web',
      link:
        'https://www.kaggle.com/code/abonaplata/analisis-exploratorio-de-datos-con-python/notebook',
    },
    {
      tema: 'Análisis Exploratorio de datos',
      referencia:
        'Sotaquirá, M. (2021). ¿Cómo hacer el Análisis Exploratorio de Datos? - Guía paso a paso. Codificando bits. https://www.codificandobits.com/blog/analisis-exploratorio-de-datos/',
      tipo: 'Página Web',
      link:
        'https://www.codificandobits.com/blog/analisis-exploratorio-de-datos/',
    },
    {
      tema: 'Descargar Anaconda',
      referencia:
        'Anaconda. (s. f.). Anaconda Distribution. https://www.anaconda.com/products/individual?modal=nucleus',
      tipo: 'Página Web',
      link: 'https://www.anaconda.com/products/individual?modal=nucleus',
    },
    {
      tema: 'Colección de Datos',
      referencia:
        'MAJYHAIN. (2022). Height of Male and Female by Country 2022. Kaggle.  https://www.kaggle.com/datasets/majyhain/height-of-male-and-female-by-country-2022',
      tipo: 'Página Web',
      link:
        'https://www.kaggle.com/majyhain/height-of-male-and-female-by-country-2022',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ronald Alexander Vacca Ascanio',
        cargo: 'Experto Temático',
        centro: 'Centro De Diseño Metrología - Regional Distrito Capital. ',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro De Diseño Metrología - Regional Distrito Capital.',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro De Diseño Metrología - Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo diseño y desarrollo de RED',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño Web',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Jesús Perez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De La Rosa',
        cargo: 'Validación Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta',
        cargo: 'Desarrollo actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Bolaño',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Mesa',
        cargo: 'Storyboard y gráficos',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo',
        cargo: 'Animación 2d',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Junior Rodriguez',
        cargo: 'Validación producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable equipo gestión de repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
