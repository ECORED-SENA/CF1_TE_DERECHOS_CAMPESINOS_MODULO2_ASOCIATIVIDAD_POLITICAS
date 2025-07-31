<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 505px").m-auto
            .col-lg-7
              p En el contexto rural colombiano, la persistencia de prácticas productivas tradicionales ha limitado el acceso de muchas comunidades campesinas a mercados competitivos. Si bien estas costumbres representan una riqueza cultural importante, también evidencian barreras estructurales para alcanzar mayores niveles de desarrollo. Las dificultades para tecnificar procesos, acceder a insumos de calidad o negociar precios justos, se ven agravadas por la fragmentación productiva y la falta de organización colectiva.

          .row.mt-4.align-items-center.justify-content-center
            .col-lg-5
              p.p-4.r8.bg-2 Frente a esta realidad, la asociatividad rural surge como una estrategia fundamental para transformar las condiciones sociales y económicas del campo. Este enfoque promueve la cooperación entre productores con el fin de fortalecer capacidades, generar economías de escala, acceder a nuevos canales de comercialización y mejorar la calidad de vida de las comunidades. Además, fomenta valores como la solidaridad, la corresponsabilidad y la toma de decisiones compartida, pilares esenciales para construir procesos sostenibles.
            .col-lg-7
              .row.align-items-center
                .col-lg-5.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/intro/img2.png', alt='', style="width: 295px").m-auto
                .col-lg-7
                  figure
                    img(src="@/assets/curso/intro/img3.svg", alt="", style="width: 84px")

                  p.mt-2 El presente componente formativo introduce los elementos clave de la asociatividad rural, abordando su definición, beneficios, retos y condiciones para el éxito. A través de conceptos, experiencias reales y herramientas prácticas, se busca que los participantes reconozcan el valor estratégico de organizarse colectivamente, comprendan el proceso asociativo desde sus bases y fortalezcan sus competencias para participar activa y críticamente en proyectos comunitarios de desarrollo rural.



</template>

<script>
export default {
  name: 'Introduccion',
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
