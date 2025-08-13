<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Proceso asociativo

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-2.r8
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
 
          .col-lg.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 El proceso asociativo es una construcción progresiva que inicia con la #[b identificación de necesidades comunes] y se consolida mediante la participación activa, la planificación estratégica y el compromiso colectivo. Es un camino que requiere claridad de objetivos, análisis de capacidades individuales y visión compartida.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Necesidad para asociarse

    .row.align-items-center
      .col-lg-8
        p La decisión de asociarse debe partir de un #[b análisis personal y productivo]. Cada productor debe evaluar su situación actual: identificar sus limitaciones, reconocer sus fortalezas y definir qué espera lograr dentro de una asociación. Esta reflexión inicial permite establecer metas realistas y motivadoras que puedan alcanzarse en conjunto.

        .row.mt-4.r8.bg-15.p-3.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img2.svg", alt="", style="width: 95px").m-auto
          .col-lg-10
            p La #[b necesidad de asociarse] se vuelve evidente cuando los desafíos del entorno superan las capacidades individuales. En contextos donde los recursos son escasos, los costos son elevados o el acceso al mercado es limitado, unirse con otros productores se convierte en una #[b estrategia esencial] para avanzar con mayor seguridad y sostenibilidad.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 400px").m-auto

    p.mt-4 A continuación, se presenta un video que profundiza en los beneficios de los procesos asociativos como estrategia para superar limitaciones individuales y fortalecer la gestión colectiva.

    .row.mt-2
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/oXadKBd8Mw0?si=R77rimBcZE145C_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.bg-16
      .col-12
        .p-5
          separador
          #t_3_2.titulo-segundo.color-acento-contenido
            h2 3.2  Matriz asociativa (Matriz DOFA)

          .row.align-items-center
            .col-lg-8              
              .row.r8.bg-17.p-3.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img4.svg", alt="", style="width: 95px").m-auto
                .col-lg-10
                  p La matriz asociativa, también conocida como matriz DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas), es una herramienta clave para analizar, identificar y evaluar los factores internos y externos que afectan el funcionamiento de una asociación.

              p.mt-4 En el caso de asociaciones de productores, esta matriz permite comprender el entorno organizacional, productivo y comercial en el que se desarrollan, facilitando la toma de decisiones estratégicas que impulsen su desarrollo sostenible. Los componentes de la matriz DOFA son: 

            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 400px").m-auto

          .row.mt-4.justify-content-center
            .col-lg-5
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img6.svg', alt='Texto que describa la imagen')

                .tarjeta.color-primario.p-3(x="10%" y="30%" numero="+")
                  .h5.mb-2 Debilidades 
                  p Limitaciones internas que dificultan el desarrollo (ej. Falta de maquinaria, escasa formación administrativa).

                .tarjeta.color-primario.p-3(x="90%" y="30%" numero="+")
                  .h5.mb-2 Amenazas  	 
                  p Factores externos que representan riesgos o desafíos (ej. Inestabilidad climática, competencia desleal).

                .tarjeta.color-primario.p-3(x="10%" y="70%" numero="+")
                  .h5.mb-2 Fortalezas 	 
                  p Capacidades y recursos internos que permiten a los asociados cumplir sus objetivos (ej. Experiencia, liderazgo, producción diversificada).

                .tarjeta.color-primario.p-3(x="90%" y="70%" numero="+")
                  .h5.mb-2 Oportunidades  
                  p Factores externos favorables que pueden aprovecharse para mejorar el desempeño (ej. Demanda creciente, apoyo institucional).

          .row.align-items-center.mt-5
            .col-lg-4.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema3/img7.png', alt='', style="width: 400px").m-auto
            .col-lg-8

              .row.p-3.bg-13.r8.align-items-center
                .col-lg-12
                  p.px-4 La importancia de la matriz DOFA en una asociación son: 

                  ul.lista-ul--color.mt-2.p-4
                    li.d-flex.align-items-start.p-1.bg-18
                      span.icono-img
                      p.mb-0 Permite diagnosticar la situación actual de forma participativa.

                    li.d-flex.align-items-start.p-1.bg-18
                      span.icono-img
                      p.mb-0 Facilita la definición de estrategias a corto, mediano y largo plazo.

                    li.d-flex.align-items-start.p-1.bg-18
                      span.icono-img
                      p.mb-0 Fortalece la gestión colectiva y la toma de decisiones.

                    li.d-flex.align-items-start.p-1.bg-18
                      span.icono-img
                      p.mb-0 Orienta acciones concretas en áreas como producción, comercialización, capacitación y alianzas.


          .titulo-tres.mt-5: h3 Ejemplo práctico. Matriz DOFA         

          p.mt-4 A modo de ejemplo práctico, se expone la matriz DOFA aplicada a la Asociación de Mujeres Campesinas ASOES San Luis. Este ejercicio permite identificar las capacidades internas y los factores del entorno que inciden en el fortalecimiento organizativo, productivo y comercial de la asociación. El análisis proporciona una base estratégica para diseñar acciones orientadas al aprovechamiento de oportunidades, el fortalecimiento de las fortalezas y la superación de desafíos.


    .row.bg-6
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Fortalezas	

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Experiencia en labores agrícolas y pecuarias.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Compromiso y trabajo solidario entre las integrantes.


                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Conocimiento del territorio y prácticas tradicionales sostenibles.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Producción diversificada (hortalizas, frutas, conservas).

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Liderazgo comunitario y reconocimiento local.


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img8.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Debilidades	

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Falta de maquinaria y equipos para la transformación de productos.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Bajo acceso a créditos o recursos financieros.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Limitada formación en temas administrativos y comerciales.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Dificultades en la movilidad y el transporte rural.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Poca visibilidad fuera de la comunidad.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img9.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Oportunidades	

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Programas gubernamentales de apoyo a mujeres rurales.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Acceso a capacitaciones técnicas y asociativas.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Demanda creciente de productos orgánicos y artesanales.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Posibilidad de alianzas con otras asociaciones o cooperativas.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Facilidad de comercialización mediante redes sociales y mercados locales.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img10.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Amenazas		

                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Inestabilidad climática que afecta la producción.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Intermediarios que reducen el margen de ganancia.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Competencia con grandes empresas o productos importados.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Falta de políticas rurales efectivas a largo plazo.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Migración de jóvenes que debilita el relevo generacional.

                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img11.png', alt='')       

   
    .row.align-items-center.mt-4.justify-content-center
      .col-lg-8
        .row.align-items-center.bg-17.p-3.r8
          .col-lg-2.d-lg-block.d-none 
            figure
              img(src="@/assets/curso/tema3/img12.svg", alt="", style="width: 100px").m-auto
          .col-lg-10
            p La matriz DOFA no solo permite identificar el estado actual de la asociación, sino también trazar #[b acciones estratégicas concretas] que potencien sus fortalezas, aprovechen sus oportunidades, superen sus debilidades y reduzcan los riesgos.
            
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Posibles socios

    .row.align-items-center
      .col-lg-7
        p La #[b asociatividad rural] es una estrategia fundamental para fortalecer la productividad, facilitar el acceso a mercados y fomentar el desarrollo sostenible en comunidades agrícolas. Para que un proceso asociativo tenga éxito, es crucial identificar y seleccionar correctamente a los posibles socios, aquellos que compartan intereses, valores y una disposición real al trabajo colectivo. A continuación, se describen los pasos principales para identificar y consolidar un grupo asociativo sólido:
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 505px").m-auto


    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-2")
          .row(titulo="A.	Definir los objetivos de la asociatividad")

            p.px-5 Antes de buscar socios, es esencial tener claridad sobre el propósito del trabajo asociativo. ¿El objetivo es mejorar la comercialización, acceder a insumos, compartir maquinaria, desarrollar capacidades técnicas o participar en proyectos institucionales? Una visión clara permite identificar personas afines que compartan esas metas.

          div(titulo="B.	Realizar un diagnóstico comunitario")

            p.px-5 Un diagnóstico participativo en la comunidad o región ayuda a reconocer: qué productores o familias realizan actividades similares; cuáles son las necesidades compartidas; qué recursos y capacidades existen; quiénes tienen experiencia en trabajo asociativo previo.

          div(titulo="C.	Identificar actores clave del territorio")

            p.px-5 Buscar socios implica mapear el entorno social y productivo. Algunos actores estratégicos son: pequeños y medianos productores agrícolas; artesanos o transformadores de productos agropecuarios; líderes comunitarios con vocación de servicio; jóvenes rurales con interés en innovación. Para esto, pueden utilizarse registros de organizaciones locales, juntas de acción comunal, gremios o entidades como agencias de extensión rural.

          div(titulo="D.	Promover espacios de diálogo y confianza")

            p.px-5 La confianza es un pilar de toda asociación. Para fomentarla, se deben crear espacios de encuentro: reuniones, talleres, ferias o jornadas comunitarias donde los posibles socios compartan experiencias e intereses. Estas interacciones fortalecen los lazos y permiten evaluar compatibilidades.

          div(titulo="E.	Evaluar compatibilidad y compromiso")

            p.px-5 Más allá de compartir intereses, los futuros socios deben demostrar responsabilidad, ética y voluntad de trabajo colectivo. Algunas preguntas clave para esta evaluación son: ¿están dispuestos a tomar decisiones en grupo?, ¿pueden aportar tiempo, conocimientos o recursos?, ¿comparten una visión de futuro común?

          div(titulo="F.	Iniciar con un grupo piloto")

            p.px-5 No es necesario comenzar con un gran número de participantes. A menudo, un grupo pequeño y comprometido es suficiente para dar inicio al proceso, generar confianza y servir como modelo para que otros se sumen más adelante.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4	Plan de trabajo

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La asociatividad rural es una herramienta clave para mejorar las condiciones de vida de las comunidades campesinas. Permite a los productores acceder a mejores mercados, fortalecer su capacidad de negociación, optimizar recursos y fomentar el desarrollo sostenible. Este plan de trabajo tiene como objetivo guiar el proceso de conformación de una asociación rural desde su etapa inicial hasta su formalización legal, asegurando una base sólida y participativa.


    TabsC.color-secundario.mt-4
      .py-3.py-md-4(titulo="Objetivo general", style="background-color: #F3F0EA")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img16.png')

          .col-md-8.mb-4.mb-md-0
            h4 Objetivo general
            p Conformar una asociación rural legalmente constituida y funcional, basada en principios de solidaridad, cooperación y desarrollo colectivo, que represente los intereses de sus miembros y promueva el bienestar común.
                 

      .py-3.py-md-4.al(titulo="Objetivos específicos", style="background-color: #F3F0EA")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img17.png')

          .col-md-8.mb-4.mb-md-0
            h4 Objetivos específicos
            p Los objetivos específicos del plan de trabajo permiten trazar un camino claro desde la convocatoria de socios hasta la implementación de actividades. Estos son:

            ul.lista-ul--color.mt-2
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Identificar y convocar a potenciales asociados con intereses y objetivos comunes.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Sensibilizar a la comunidad sobre los beneficios de la asociatividad.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Diseñar y aprobar estatutos, reglamentos y estructura organizativa.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Realizar los trámites legales necesarios para la formalización.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Establecer un plan de acción inicial para las actividades de la asociación.


    .titulo-tres.mt-5: h3 Etapas del plan de trabajo

    p.mt-4 El proceso de conformación de una asociación rural puede dividirse en etapas consecutivas, cada una con actividades específicas. A continuación, se detallan:

    .row.bg-6
      .col-12
        .p-5
          .tarjeta.tarjeta--gris.p-5(style='background-color: rgba(255, 255, 255, 0.7) !important')
            PasosB.color-secundario
              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Diagnóstico y convocatoria	

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Realizar un diagnóstico participativo de la comunidad para conocer su realidad y potencial.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Identificar líderes, productores y actores clave interesados en conformar la asociación.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Convocar a reuniones informativas abiertas para presentar la idea asociativa.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Recolectar información sobre intereses, necesidades y expectativas de los potenciales miembros.

                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img18.png')

              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Sensibilización y formación

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Realizar talleres sobre asociatividad, liderazgo, toma de decisiones y manejo colectivo.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Presentar casos de éxito y experiencias de asociaciones rurales que hayan fortalecido sus territorios.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Promover espacios de diálogo donde se resuelvan dudas, se generen acuerdos y se fortalezca la confianza entre los futuros socios.


                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img19.png')


              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Asamblea constitutiva y formalización legal

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Convocar y realizar una asamblea constitutiva formal con todos los miembros fundadores.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Elegir la junta directiva y los órganos de control.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Firmar el acta de constitución.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Realizar el registro legal ante las entidades correspondientes (Cámara de Comercio, DIAN, o su equivalente).

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Obtener el NIT (Número de Identificación Tributaria) y abrir una cuenta bancaria institucional a nombre de la asociación.


                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img20.png')


              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Organización del grupo

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Conformar un comité promotor o grupo gestor responsable del proceso inicial.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Definir la misión, visión y objetivos que guiarán a la futura asociación.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Identificar las actividades productivas, comerciales o sociales que se impulsarán en la primera etapa.


                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img21.png')


              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Puesta en marcha

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Establecer un plan de acción inicial con actividades programadas para los primeros 6 a 12 meses.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Identificar oportunidades de financiamiento, asistencia técnica o convenios interinstitucionales.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Asignar roles y responsabilidades operativas entre los socios.


                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Iniciar las actividades productivas, comerciales o sociales planificadas.

                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img22.png')


              .row.p-5(titulo="")
                .col-md-7.mb-4.mb-md-0
                  p
                    b Elaboración de estatutos y normativas

                  ul.lista-ul--color.mt-2
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Redactar los estatutos de la asociación, incluyendo: nombre, domicilio, objeto, órganos directivos, funciones, derechos y deberes de los miembros.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Discutir el borrador del documento con todos los interesados, ajustándolo colectivamente.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Acordar un reglamento interno de funcionamiento que oriente la vida cotidiana de la organización.

                .col-md-5
                  figure
                    img(src='@/assets/curso/tema3/img23.png')


    .titulo-tres.mt-5: h3 Recursos necesarios

    p.mt-4 Para llevar a cabo este plan de trabajo, la asociación debe prever ciertos recursos logísticos, humanos y técnicos. Entre los más importantes se encuentran:


    .row.align-items-center.mt-4
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img24.png', alt='', style="width: 504px").m-auto
      .col-lg-7
        .row.p-2.bg-2.r8.align-items-center
          .col-lg-12
            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Permite diagnosticar la situación actual de forma participativa.

              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Facilita la definición de estrategias a corto, mediano y largo plazo.

              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Fortalece la gestión colectiva y la toma de decisiones.

              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Orienta acciones concretas en áreas como producción, comercialización, capacitación y alianzas.


    .titulo-tres.mt-5: h3 Evaluación y seguimiento

    p.mt-4 El éxito del plan depende del seguimiento continuo y la evaluación sistemática. Para ello, se proponen las siguientes acciones:

    .row.align-items-center.mt-4
    
      .col-lg-7
        .row.p-2.bg-17.r8.align-items-center
          .col-lg-12
            ul.lista-ul--color.mt-2.p-4
              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Realizar una evaluación mensual de avances por parte del comité promotor.

              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Revisar compromisos y ajustar el cronograma según las necesidades del grupo.

              li.d-flex.align-items-start.p-1.bg-18
                span.icono-img
                p.mb-0 Presentar informes periódicos a todos los socios, promoviendo la retroalimentación y la mejora continua.


      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img25.png', alt='', style="width: 504px").m-auto

    p.mt-4 La conformación de una asociación rural es un proceso colectivo que exige liderazgo, compromiso y acompañamiento técnico. Este plan de trabajo busca garantizar que dicho proceso se realice de manera organizada, participativa y sostenible, con resultados concretos que beneficien tanto a sus integrantes como a la comunidad en general.


    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5  Indicadores de éxito en una asociación

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img26.png')})`,'margin-right': '-10px'}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores de éxito son herramientas fundamentales para evaluar el desempeño, la sostenibilidad y el impacto de una asociación rural. Más allá de los resultados económicos, estos indicadores permiten medir la participación, el fortalecimiento organizativo, la gestión eficiente y el impacto social en la comunidad.

    p.mt-4 Su seguimiento constante no solo permite hacer un diagnóstico de la realidad de la organización, sino que también orienta la toma de decisiones, mejora los procesos internos y garantiza una evolución coherente con los objetivos propuestos. A continuación, se presentan los principales indicadores que reflejan el éxito de una asociación rural:

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img27.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-2")
          .row(titulo="A.	Número de miembros activos	")

            p.px-5.mb-0 Evalúa cuántos socios participan de manera efectiva en actividades, asambleas y toma de decisiones. No basta con estar inscritos; la clave está en el nivel de compromiso y permanencia. 
            p.px-5 #[b Ejemplo de meta:] 80% de participación activa en reuniones y actividades anuales.

          div(titulo="B.	Participación democrática y equitativa")

            p.px-5 Mide la inclusión y equidad en la toma de decisiones. Incluye la participación de mujeres, jóvenes y grupos tradicionalmente excluidos, así como la rotación transparente de cargos directivos. 
            p.px-5 #[b Indicadores específicos:] asistencia a asambleas, diversidad en cargos, mecanismos de elección y consulta.

          div(titulo="C.	Sostenibilidad económica")

            p.px-5 Refleja la capacidad de generar recursos suficientes para mantenerse y crecer. 
            p.px-5 #[b Indicadores clave:] incremento de ingresos por ventas colectivas, diversificación de fuentes de financiamiento (ventas, aportes, proyectos), cumplimiento presupuestal y existencia de fondos de reserva.

          div(titulo="D.	Acceso a mercados y mejora en precios")

            p.px-5 Evalúa el impacto económico del trabajo conjunto en la comercialización. 
            p.px-5 #[b Indicadores:] número de acuerdos comerciales firmados, aumento del precio promedio de venta de los productos, ampliación y diversificación de canales de venta.

    .row.mt-4.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-2")
          .row(titulo="E.	Fortalecimiento de capacidades")

            p.px-5 Mide el crecimiento del conocimiento técnico, organizativo y administrativo entre los socios. 
            p.px-5 #[b Indicadores:] número de capacitaciones realizadas, asistencia a encuentros o ferias, mejoras observables en gestión productiva y organizativa.

          div(titulo="F.	Gestión administrativa y legal eficiente")

            p.px-5 Revisa el cumplimiento de los requerimientos legales y la organización documental interna. 
            p.px-5 #[b Indicadores:] registro legal actualizado, estados financieros auditados o verificados, existencia de actas, planes de trabajo y reglamentos internos vigentes.

          div(titulo="G.	 Impacto social y comunitario")

            p.px-5 Mide el efecto de la asociación en el entorno más allá del beneficio económico directo. 
            p.px-5 #[b Indicadores:] mejora en la calidad de vida de los socios, generación de empleo e ingresos familiares, participación en proyectos comunitarios o ambientales.

          div(titulo="H.	 Nivel de confianza y cohesión interna")

            p.px-5 Evalúa la calidad de las relaciones entre los socios: respeto, compromiso, sentido de pertenencia y resolución participativa de conflictos. 
            p.px-5 #[b Indicadores:] encuestas internas de satisfacción, permanencia de socios en el mediano/largo plazo, existencia de espacios de diálogo y mediación.

      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img28.png', alt='', style="width: 295px").m-auto


    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-17.p-3.r8
          .col-lg-2.d-lg-block.d-none 
            figure
              img(src="@/assets/curso/tema3/img29.svg", alt="", style="width: 100px").m-auto
          .col-lg-10
            p Los indicadores de éxito deben ser claros, medibles, realistas y adaptados a la realidad específica de cada asociación. Evaluarlos de forma periódica permite reconocer avances, fortalecer lo que funciona y corregir lo que no, promoviendo así una organización más sólida, participativa y transformadora.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
