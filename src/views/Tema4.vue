<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Experiencia exitosa

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las experiencias reales fortalecen los conceptos y muestran cómo la asociatividad, cuando se implementa con compromiso y visión, puede transformar vidas y comunidades enteras. El siguiente caso ilustra el impacto positivo del trabajo colaborativo y la implementación de un proyecto estratégico en el ámbito rural.


    .row.bg-14
      .col-12
        .p-5
          .titulo-tres.mt-5: h3 Caso: Asociación ASOES San Luis — Vereda Guarigua Alto

          .row.mt-2.align-items-center
            .col-lg-9 
              p Las mujeres productoras de la vereda Guarigua Alto eran parte de #[b ASOES San Luis], una asociación de pequeños y medianos productores que, durante años, trabajó con dedicación en el campo, enfrentando retos cotidianos sin perder la esperanza de un futuro mejor. Ellas sabían que el potencial estaba en su tierra, en sus animales, en su comunidad. Solo faltaba una oportunidad real para crecer.

              .row.mt-4.align-items-center
                .col-lg-5.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema4/img2.png', alt='', style="width: 400px").m-auto
                .col-lg-7.p-3
                  p.bg-5.p-4.r8 Esa oportunidad llegó con un proyecto de fortalecimiento de la cadena ovino-caprina y de producción de tomate en invernaderos. Desde el inicio, las mujeres se involucraron con entusiasmo: participaron activamente en reuniones, compartieron saberes y asumieron el reto de aprender cosas nuevas.

            .col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema4/img3.png', alt='', style="width: 295px").m-auto

          p.mt-4 Junto a otros productores de la zona, identificaron debilidades dentro de la cadena productiva, evaluaron sus eslabones críticos y comenzaron a trazar nuevas estrategias para mejorar.

          .titulo-tres.mt-5: h3 Transformaciones alcanzadas

          p.mt-4 Los resultados alcanzados por la Asociación de Mujeres Campesinas ASOES San Luis reflejan el impacto positivo de su participación en procesos de fortalecimiento técnico y organizativo. A través de diferentes estrategias productivas y comunitarias, lograron transformar su realidad en distintos niveles. La siguiente tabla sintetiza los principales logros obtenidos en materia de producción, innovación, diversificación económica, cohesión social y empoderamiento colectivo.

    .row.bg-6
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Mejora en la producción animal	

                    p Las asociadas fortalecieron el manejo de sus hatos ovinos y caprinos mediante capacitación técnica, implementación de prácticas sanitarias, mejora genética y optimización de espacios de producción.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img4.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Innovación agrícola		

                    p Se capacitaron en el cultivo de tomate bajo invernadero, enfrentando con éxito el reto del control de clima y el uso eficiente del agua. Con cada ciclo de producción, su competitividad aumentó.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img5.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Diversificación e ingresos estables		

                    p La combinación de actividades pecuarias y hortícolas permitió diversificar las fuentes de ingreso y mantener una producción más estable durante el año.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img6.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Impacto comunitario			

                    p La comunidad en su conjunto creció. Las ventas aumentaron, se accedió a nuevos mercados y, lo más significativo, los jóvenes comenzaron a mostrar un renovado interés por el trabajo rural.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img7.png', alt='')       

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Empoderamiento colectivo	

                    p Más allá de lo productivo, el proyecto fortaleció su autoestima, visión de futuro y certeza de que la organización y la cooperación son herramientas transformadoras.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img8.png', alt='')     


    .row.justify-content-center.mb-5.mt-4
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-10.r8
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img9.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
 
          .col-lg.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Este caso demuestra que el #[b éxito de la asociatividad rural] no solo radica en acceder a recursos o capacitarse, sino en #[b la actitud de colaboración], la #[b confianza mutua] y la #[b capacidad de aprender y adaptarse]. Cuando las comunidades deciden actuar unidas, son capaces de convertir sus desafíos en oportunidades y su trabajo en orgullo.

</template>

<script>
export default {
  name: 'Tema4',
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
