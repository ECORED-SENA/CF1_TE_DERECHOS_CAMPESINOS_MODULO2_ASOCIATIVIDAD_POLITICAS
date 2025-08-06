<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 La importancia de la asociatividad

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`,'margin-right': '-10px'}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La asociatividad representa una estrategia clave para fortalecer a los pequeños productores rurales, especialmente frente a los desafíos que enfrentan en sus actividades diarias. Problemas como los bajos precios de venta, el alto costo de los insumos, las limitaciones técnicas, las barreras para acceder a créditos y las dificultades en la comercialización y movilidad de productos impactan directamente en la sostenibilidad de sus proyectos.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Por qué y para qué asociarse

    p Frente a este panorama, #[b asociarse] se convierte en una herramienta poderosa. No implica perder la independencia sobre los proyectos individuales, sino #[b mejorar los procesos productivos y organizativos] mediante decisiones colectivas, políticas internas y estrategias conjuntas. Esto permite abordar problemas comunes de forma más eficaz, optimizando áreas como la #[b compra de insumos, la asistencia técnica y la comercialización].

    .row.justify-content-center.mb-5.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-8.r8
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img2.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-11px")
 
          .col-lg.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Además, la asociatividad contribuye a construir redes de confianza, fomenta el trabajo colectivo y fortalece el sentido de pertenencia. Un grupo organizado y enfocado en objetivos comunes puede acceder con mayor facilidad a proyectos institucionales de apoyo a nivel municipal, departamental o nacional, aumentando así sus posibilidades de desarrollo.


    .row.align-items-center.mt-4
      .col-lg-7
        p A continuación, se presenta un pódcast que analiza las principales ventajas de la asociatividad en contextos rurales, destacando su impacto en la productividad, la cohesión social y el acceso a oportunidades de desarrollo.

        .row.align-items-center.bg-10.r8.p-4
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 270px").m-auto
          .col-lg-7
            p(style="color:black")
              Lo invitamos a escuchar el siguiente pódcast:

            TarjetaAudio.color-acento-botones.mb-3.bg-9.p-3(
              texto="Ventajas de la asociatividad en el desarrollo rural "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 504px").m-auto


    .row.bg-11
      .col-12
        .p-5
          separador
          #t_2_2.titulo-segundo.color-acento-contenido
            h2 2.2  Cuál es el éxito en un proceso de asociación

          p El #[b éxito en un proceso asociativo] no depende únicamente de lograr mayores ingresos, sino de alcanzar una transformación integral de todos los miembros participantes. Esto implica una mejora colectiva en su calidad de vida, su entorno y sus capacidades organizativas. La clave está en lograr que los asociados trabajen con compromiso, construyan relaciones sólidas y se unan bajo un #[b objetivo] común que beneficie a sus familias y a la comunidad en general.

          .row.mt-4.align-items-center.justify-content-center
            .col-lg-6.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 610px").m-auto
            .col-lg-6
              .row.bg-5.r8.p-4
                figure
                  img(src="@/assets/curso/tema2/img6.svg", alt="", style="width: 100px")

                p.mt-2 Este tipo de proceso requiere #[b tiempo, constancia y trabajo colectivo]. No se trata de un resultado inmediato, sino de una construcción progresiva que se fortalece con cada avance. Cuando se consolida, la asociación se convierte en una herramienta poderosa para mejorar la producción, defender los derechos del campesinado y construir comunidades más justas y sostenibles.

          p.mt-4 Algunos de los elementos clave en el éxito de un proceso asociativo son:

    .row.bg-6.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Construcción de relaciones basadas en confianza

                    p La confianza, el apoyo mutuo y la solidaridad fortalecen los vínculos entre los miembros.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img7.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Visión compartida		

                    p Tener claridad sobre los objetivos, el propósito y las expectativas de la asociación.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img8.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Responsabilidad en las tareas		

                    p Compromiso real con las funciones administrativas y operativas asignadas.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img9.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Toma de decisiones democrática			

                    p Participación colectiva con sentido de responsabilidad en cada decisión.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img10.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Honestidad y rendición de cuentas			

                    p Transparencia en el manejo de recursos y en los informes financieros.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img11.png', alt='')


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Mejora continua			

                    p Disposición de los miembros para evaluar, ajustar y fortalecer los procesos en desarrollo.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img12.png', alt='')


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Búsqueda de aliados			

                    p Generar alianzas estratégicas con entidades públicas y privadas que impulsen el crecimiento.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img13.png', alt='')


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Beneficios tangibles para los miembros			

                    p Resultados visibles como mejores precios, acceso a capacitación y mejora en la calidad de vida.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img14.png', alt='')


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Obstáculos en un proceso de asociación

    .row
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 400px").m-auto
      .col-lg-4
        .p.bg-12.r8(style="padding: 2.5rem;") Aunque la asociatividad es una herramienta poderosa para enfrentar desafíos productivos y mejorar la calidad de vida en el medio rural, su éxito no está garantizado. Si no se gestiona con responsabilidad, compromiso y confianza, el proceso puede enfrentar serias dificultades que pongan en riesgo su sostenibilidad y provoquen desánimo entre los participantes.
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='', style="width: 400px").m-auto
    
    p.mt-4 Uno de los factores más sensibles en cualquier grupo asociativo es la confianza entre los miembros. Sin ella, se dificulta el trabajo colectivo, se debilita el sentido de pertenencia y se bloquea la toma de decisiones efectiva. Además, la ausencia de resultados visibles a corto o mediano plazo, o la falta de una visión clara, puede llevar a la pérdida del interés y al abandono del proceso por parte de algunos integrantes. A continuación, se resumen los principales obstáculos que pueden surgir en un proceso asociativo:

    .row.mt-4.align-items-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img17.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-2")
          .row(titulo="Intereses externos	")

            p.px-5 Participantes que buscan beneficios personales o externos, afectando la toma de decisiones y generando divisiones.

          div(titulo="Falta de resultados visibles")

            p.px-5 La ausencia de logros concretos puede causar desmotivación y provocar el retiro de integrantes.

          div(titulo="Desconfianza entre los miembros")

            p.px-5 Limita el crecimiento del grupo, dificulta el trabajo en equipo y debilita la participación activa.

          div(titulo="Mala administración y falta de planificación")

            p.px-5 Errores en la gestión y decisiones improvisadas afectan negativamente el desempeño organizacional.

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-8
        .row.align-items-center.bg-13.p-3.r8
          .col-lg-2.d-lg-block.d-none 
            figure
              img(src="@/assets/curso/tema2/img18.svg", alt="", style="width: 100px").m-auto
          .col-lg-10
            p Así como un buen agricultor conoce el momento exacto en que sembró cada semilla y espera su cosecha, un buen empleador campesino debe tener claridad sobre lo que ocurre con sus trabajadores durante el mes. Registrar las novedades no es una carga, es una forma de construir confianza, respeto y justicia en el trabajo rural.


</template>

<script>
export default {
  name: 'Tema2',
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
