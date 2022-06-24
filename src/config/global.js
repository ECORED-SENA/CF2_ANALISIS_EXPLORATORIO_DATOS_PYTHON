export default {
  global: {
    componenteFormativo: 'Análisis exploratorio de datos en Python.',
    descripcionCurso:
      'Se abordan las herramientas para reconocer el proceso de instalación de la infraestructura y librerías basados en el lenguaje de programación Python, fundamental para el manejo y el análisis exploratorio de los datos.<br><br>Aprenderá a desplegar su propio entorno de trabajo con herramientas modernas Python, a realizar las lecturas de los archivos, manipular la información y generar análisis estadísticos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
            titulo: 'Instalación Anaconda',
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
            titulo: 'Identificación de los datos',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
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
