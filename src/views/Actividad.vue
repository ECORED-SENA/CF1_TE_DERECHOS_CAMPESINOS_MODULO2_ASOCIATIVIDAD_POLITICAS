<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Asociatividad rural',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar  la asociatividad, los procesos fundamentales para su constitución y los beneficios que se obtienen.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la asociatividad rural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La asociatividad rural busca eliminar por completo la identidad cultural de los campesinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La asociatividad rural busca que los productos sean más difíciles para la venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La asociatividad rural es la organización voluntaria de productores rurales para unir esfuerzos, compartir recursos y trabajar en conjunto con el fin de mejorar su producción, comercialización y calidad de vida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La asociatividad rural busca que los productores no mejoren los procesos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Por qué es importante asociarse en el campo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite a los pequeños productores enfrentar juntos los desafíos del mercado y fortalecer su posición frente a compradores y políticas públicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque los productores pueden vender sus productores de manera individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque es más difícil la trasferencia de tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por qué los productores pierden independencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué formas de asociatividad existen en el sector rural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las únicas formas de asociatividad rural son las empresas multinacionales y los bancos privados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Algunas formas comunes son: asociaciones de productores, cooperativas, alianzas productivas, redes de colaboración y consorcios campesinos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'En el sector rural no existen asociaciones sino únicamente contratos individuales con el Estado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La única forma de asociatividad válida en el campo es el trabajo informal entre vecinos sin organización legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué beneficios ofrece la asociatividad rural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La asociatividad rural reduce el acceso a créditos y apoyo institucional para los productores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Uno de los beneficios de la asociatividad rural es que limita la capacitación y el aprendizaje colectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asociarse en el sector rural hace que los productores vendan sus productos a menor precio y con mayores intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mayor capacidad de negociación, acceso a insumos más económicos, oportunidades de negociación, intercambio de conocimientos, acceso a asistencia técnica y financiación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué obstáculos enfrenta la asociatividad rural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desconfianza, falta de liderazgo, poca experiencia organizativa, barreras culturales, dificultad para acceder a recursos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La asociatividad rural no enfrenta ningún tipo de dificultad, ya que siempre funciona de manera perfecta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El principal obstáculo de la asociatividad rural es tener demasiada confianza y cooperación entre sus miembros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La abundancia de recursos económicos en el campo es una de las principales barreras para formar asociaciones rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son los factores clave para que una asociación funcione?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las asociaciones rurales prosperan cuando no existe liderazgo ni toma de decisiones compartidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'participación de sus miembros, objetivos claros, liderazgo transparente, formación continua, compromiso colectivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una asociación rural funciona mejor cuando no hay reglas ni estatutos que regulen su funcionamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El secreto del éxito de una asociación es que cada miembro trabaje de forma aislada sin comunicarse con los demás.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué papel juega el Estado en la asociatividad rural?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El papel del Estado en la asociatividad rural consiste únicamente en cobrar impuestos a las asociaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Estado no tiene ninguna responsabilidad en el fomento de la asociatividad rural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Estado puede apoyar a través de políticas públicas, financiamiento, capacitación, asesoría técnica y promoción de alianzas estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El Estado impide que los productores rurales se organicen y trabajen en conjunto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué relación tiene la asociatividad con el desarrollo rural?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La asociatividad rural frena el desarrollo de las comunidades porque impide la competencia entre productores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No existe ninguna relación entre asociatividad y desarrollo rural, ya que cada productor progresa de forma individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El desarrollo rural se logra únicamente con grandes inversiones externas, sin necesidad de asociaciones locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La asociatividad fortalece la economía local, mejora el bienestar de las comunidades, fomenta la inclusión social y contribuye al desarrollo sostenible del campo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Quiénes pueden asociarse en el contexto rural?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo los grandes productores con alto capital pueden formar parte de asociaciones rurales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Campesinos, productores agropecuarios, artesanos rurales, recolectores, pescadores artesanales y cualquier persona que participe en actividades económicas del campo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las mujeres y los jóvenes no están permitidos en procesos de asociatividad rural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los campesinos sin títulos de propiedad no pueden integrarse a ninguna forma de asociación rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se necesita para formar una asociación rural legalmente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar la organización, establecer estatutos, definir una junta directiva y cumplir con los requisitos legales del país.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para formar una asociación rural legal es suficiente con un acuerdo verbal entre los productores, sin ningún tipo de documentación',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo se puede crear una asociación rural si todos los integrantes tienen títulos universitarios',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No es necesario registrar la asociación ante ninguna entidad del Estado para que sea legal',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La asociatividad rural permite optimizar costos, acceder a mercados más amplios y obtener mejores precios por productos al comercializar colectivamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La asociatividad rural es importante porque los productores pueden trabajar solos y aprovechar las ayudas del estado para su propio beneficio.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
