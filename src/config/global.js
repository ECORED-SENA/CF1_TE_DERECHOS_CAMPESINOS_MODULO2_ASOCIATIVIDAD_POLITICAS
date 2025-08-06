export default {
  global: {
    Name: 'Introducción y aspectos básicos de la asociatividad rural ',
    Description:
      'En este componente se abordan los aspectos básicos de la asociatividad rural como un mecanismo de cooperación, considerado un factor clave para la organización y el mejoramiento de la calidad de vida de las familias campesinas. Su propósito principal es fomentar la organización comunitaria con miras a desarrollar proyectos que permitan aumentar y optimizar la productividad.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Asociatividad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cadenas productivas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Consumidores',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La importancia de la asociatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Por qué y para qué asociarse',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuál es el éxito en un proceso de asociación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Obstáculos en un proceso de asociación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proceso asociativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Necesidad para asociarse',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Matriz asociativa (Matriz DOFA)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Posibles socios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Plan de trabajo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Indicadores de éxito en una asociación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Experiencia exitosa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'La asociatividad rural',
      referencia:
        'UPRAColombia. (2023). La unión hace la fuerza: La importancia de la asociatividad para el campo colombiano. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ugjeKgs75mQ',
    },
    {
      tema: 'Capacidades empresariales',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2019). Agricultura al día: ¿En qué consiste el proyecto de capacidades empresariales? [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ocHskEVyhk8',
    },
    {
      tema: 'Extensión agropecuaria',
      referencia:
        'Agencia de Desarrollo Rural. (2022). La extensión agropecuaria y la asociatividad. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vIJg8fuNEMs',
    },
  ],
  glosario: [
    {
      termino: 'Alianza productiva',
      significado:
        'acuerdo entre productores, el sector privado y el Estado para fortalecer la producción y comercialización conjunta.',
    },
    {
      termino: 'Asociación',
      significado:
        'grupo organizado de personas que se unen voluntariamente con fines comunes, con o sin ánimo de lucro.',
    },
    {
      termino: 'Asociatividad rural',
      significado:
        'forma de organización de pequeños productores rurales para alcanzar objetivos comunes.',
    },
    {
      termino: 'Cadenas productivas',
      significado:
        'conjunto organizado y secuencial de actividades económicas que transforman insumos o materias primas en productos finales, con valor agregado, listos para el consumo o comercialización. Estas actividades incluyen desde la producción primaria hasta la distribución final, e involucran a múltiples actores interrelacionados.',
    },
    {
      termino: 'Canales de comercialización',
      significado:
        'rutas o medios por los cuales los productos llegan del productor al consumidor, directa o indirectamente.',
    },
    {
      termino: 'Matriz asociativa',
      significado:
        'herramienta que permite analizar, planificar o evaluar los elementos clave en los procesos de asociatividad rural. Se utiliza para organizar la información relacionada con los actores, recursos, funciones y relaciones dentro de una asociación o red de productores rurales.',
    },
    {
      termino: 'Productores',
      significado:
        'los productores rurales son personas, familias o comunidades que viven y trabajan en el campo.',
    },
    {
      termino: 'Redes empresariales',
      significado:
        'sistemas de colaboración voluntaria entre varias empresas, organizaciones o productores que deciden trabajar en conjunto para alcanzar objetivos comunes, sin perder su independencia jurídica. A través de estas redes, los participantes comparten información, recursos, conocimientos, mercados y estrategias para mejorar su competitividad y sostenibilidad.',
    },
    {
      termino: 'Alianza productiva',
      significado:
        'acuerdo entre productores, el sector privado y el Estado para fortalecer la producción y comercialización conjunta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Red Nacional de Agencias de Desarrollo Local de Colombia - Red Adelco. (2023). <em>Ruta nacional de asociatividad rural productiva.</em>',
      link: '',
    },
    {
      referencia:
        'Centro Internacional de Negocios (CIN), Cámara de Comercio de Bogotá. (s.f.). <em>Asociatividad: Estrategia para la internacionalización de su negocio.</em>',
      link: '',
    },
    {
      referencia:
        'Universidad de Antioquia, Facultad de Ciencias Agrarias. (2022). <em>Gestión de la asociatividad rural agroempresarial.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
