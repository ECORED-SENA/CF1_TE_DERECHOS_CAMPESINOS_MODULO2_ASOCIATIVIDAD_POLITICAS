<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-3.r8
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img1.png', alt='Diagrama sobre los actores de la cadena productiva que incluye productores, transformadores, comercializadores y consumidores, con flechas que indican el flujo entre ellos y la participación de proveedores de servicios a lo largo del proceso. ', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
 
          .col-lg.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Este componente formativo busca explicar, de manera sencilla y práctica, los aspectos más importantes para llevar un manejo correcto de la nómina en el contexto rural. Se abordarán temas como las obligaciones laborales, el manejo de novedades de nómina, la correcta liquidación de salarios, la aplicación de normativas técnicas y la importancia de sistematizar la información. Todo está pensado para brindar herramientas claras, aplicables en el día a día de los empleadores campesinos, fortaleciendo así el trabajo digno y la productividad del campo.

    .row.bg-4
      .col-12
        .p-5
          separador
          #t_1_1.titulo-segundo.color-acento-contenido
            h2 1.1 Asociatividad

          .row.align-items-center
            .col-lg-6
              p La #[b asociatividad] es la unión de varios productores que trabajan de manera conjunta con objetivos comunes. Su propósito es mejorar la productividad, la eficiencia y ampliar el acceso a mercados, lo cual permite obtener mejores precios y, en consecuencia, mejorar la calidad de vida de sus integrantes.

              p.mt-2.p-4.r8.bg-5 En el sector rural, la asociatividad se basa en pilares fundamentales como el trabajo en equipo, la disciplina, la coordinación y la unión de esfuerzos. Para que esta colaboración tenga éxito, es indispensable que los integrantes compartan valores y se comprometan con sus colaboradores. Esta unión de voluntades se orienta a satisfacer necesidades definidas desde el inicio del camino empresarial.

            .col-lg-6.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 610px").m-auto

          separador
          #t_1_2.titulo-segundo.color-acento-contenido
            h2 1.2 Cadenas productivas

          p Las cadenas productivas en el sector rural comprenden todas las etapas por las que pasa un producto, desde su producción hasta su consumo final. Este proceso involucra a distintos actores —productores, transformadores, comercializadores y consumidores— y cada etapa agrega valor al producto.

          .row.mt-4.justify-content-center
            .col-lg-6
              .titulo-sexto.color-secundario.mb-3.mt-4
                h5 Figura 1. 
                span Actores de la cadena productiva 

              figure
                img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 610px").m-auto

            .col-lg-3.d-lg-block.d-none.mt-4
              figure
                img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 296px")

    p.mt-4 A continuación se presentan los principales actores que intervienen en una cadena productiva rural, junto con su función:

    .row.bg-6.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: rgba(255, 255, 255, 0.7) !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Productores

                    p Son quienes transforman recursos naturales o materias primas en bienes y servicios. En el campo, cultivan, crían o procesan productos agropecuarios, participando activamente en el abastecimiento de mercados. Ser productor implica conocimiento del entorno, esfuerzo y compromiso con la calidad y el desarrollo comunitario.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Transformadores	

                    p Toman los productos generados por los productores y los convierten en bienes con mayor valor agregado. Esto incluye procesos de transformación, empaque y adecuación para la venta o consumo. Se requiere conocimiento técnico, uso de maquinaria especializada y compromiso con la calidad y las normas.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Comercializadores	

                    p Conectan el producto con el mercado. Se encargan de la distribución, promoción y venta del producto, asegurando que llegue al consumidor en condiciones óptimas. Este rol exige habilidades de negociación, conocimiento del mercado y capacidad para mantener el valor del producto en el proceso.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='')
                  


                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    p
                      b Consumidores		

                    p Son quienes dan sentido a toda la cadena productiva al generar la demanda. Sus decisiones de compra influyen en la forma de producción, transformación y comercialización. Además, pueden promover prácticas sostenibles, el comercio justo y el desarrollo local a través de un consumo consciente.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='')
                  

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Consumidores	      

    .row.align-items-center
      .col-lg-7
        p Las redes empresariales surgen de la unión voluntaria entre asociaciones, pequeñas empresas o productores que buscan mejorar su estructura productiva, compartir conocimientos y trabajar en conjunto para obtener beneficios como la reducción de costos, la adquisición de tecnología a mejores precios, la ampliación de mercados o la creación de marcas colectivas. Todo esto fortalece su capacidad de negociación y aumenta la demanda de sus productos.

        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-7.r8
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img9.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px")
    
              .col-lg.d-flex
                .p-4.w-100.d-flex.align-items-center
                  p.mb-0 Al integrarse en una red empresarial dentro de una cadena productiva, se accede a un sistema de colaboración estratégica entre empresas con intereses comunes. Esta red facilita la optimización de recursos, el acceso a nuevos mercados y la cooperación entre actores que, en vez de competir individualmente, actúan coordinadamente para fortalecer cada eslabón de la cadena.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='', style="width: 610px").m-auto      


    .p-4.r8.bg-2 Un ejemplo exitoso es el caso del #[b sector cafetero en Colombia], donde cooperativas y alianzas entre productores, tostadores, exportadores y comercializadores han logrado posicionar el café Colombiano como uno de los más reconocidos en el mundo. Gracias a esta articulación, se ha mejorado la calidad del producto, incrementado los ingresos y fortalecido la presencia internacional del sector.
          
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
