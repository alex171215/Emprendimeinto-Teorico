// Banco de Preguntas Design Thinking - Emprendimiento RDA2
// DT(40) + Formatos(56) + Canvas(36) = 132 preguntas
window.QUIZ_DATA = {
  "RDA2": [
    {
      "id": "business_model_canvas_36",
      "titulo": "Business Model Canvas PUCE (36 Preguntas)",
      "categorias": [
        {
          "value": "all",
          "label": "Todos los Bloques (36 Preguntas)"
        },
        {
          "value": "bloque1",
          "label": "Bloque 1 — Segmento de Clientes"
        },
        {
          "value": "bloque2",
          "label": "Bloque 2 — Propuesta de Valor"
        },
        {
          "value": "bloque3",
          "label": "Bloque 3 — Canales"
        },
        {
          "value": "bloque4",
          "label": "Bloque 4 — Relación con Clientes"
        },
        {
          "value": "bloque5",
          "label": "Bloque 5 — Fuentes de Ingresos"
        },
        {
          "value": "bloque6",
          "label": "Bloque 6 — Recursos Clave"
        },
        {
          "value": "bloque7",
          "label": "Bloque 7 — Actividades Clave"
        },
        {
          "value": "bloque8",
          "label": "Bloque 8 — Socios Clave"
        },
        {
          "value": "bloque9",
          "label": "Bloque 9 — Estructura de Costos"
        },
        {
          "value": "incorrect",
          "label": "Solo Preguntas Erradas"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas (Dudas)"
        }
      ],
      "preguntas": [
        {
          "id": "BMC.01",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "El equipo de «Fiado Claro» escribe en su bloque de Segmento: «Pequeños comerciantes de 30 a 60 años de Ecuador». Según los criterios del Canvas, ¿qué diagnóstico técnico describe mejor esta formulación?",
          "options": [
            "Es válido y suficiente: la edad delimita la madurez comercial y el país define el marco legal del mercado.",
            "Es demográfico pero no accionable: describe quiénes son, pero omite dónde ubicarlos y qué conducta tienen con el fiado.",
            "Es excesivamente estrecho: restringir el segmento a Ecuador frena el potencial de escalamiento regional en etapas tempranas.",
            "Es incompleto por omisión de género: añadir la distinción hombre/mujer basta para convertirlo en un segmento operativo."
          ],
          "correct": 1,
          "feedback": "El Canvas distingue un segmento meramente demográfico de uno accionable. «Comerciantes de 30 a 60 años» indica edad y país, pero no define su comportamiento observable ni cómo localizarlos. Un segmento accionable como «tiendas de barrio de Quito que fían en cuaderno y cobran semanalmente» permite salir a buscarlos y validar de inmediato."
        },
        {
          "id": "BMC.02",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "«BiciCampus» ofrece alquiler de bicicletas eléctricas en la universidad. En el bloque 1 escribe: «Estudiantes que viven a menos de 3 km del campus y que hoy llegan en taxi». ¿Qué juicio técnico es el más acertado sobre este segmento?",
          "options": [
            "Es demográfico básico: debería incorporar obligatoriamente el rango de edad y la facultad del estudiante para tener utilidad práctica.",
            "Es incompleto por confusión de roles: clasifica al usuario final sin identificar al padre de familia como pagador principal.",
            "Es excesivamente restrictivo: limitar el radio a 3 km excluye a la mayor parte del mercado universitario potencial.",
            "Es accionable y preciso: delimita ubicación geográfica, conducta de movilidad actual y un costo alternativo real a sustituir."
          ],
          "correct": 3,
          "feedback": "La formulación es accionable porque combina cercanía geográfica (menos de 3 km), comportamiento actual (llegar en taxi) y un dolor económico medible (gasto recurrente en pasajes). Esto permite salir a buscarlos en paradas y accesos del campus. La clase enseña que un nicho acotado y observable es superior a un público masivo e indeterminado."
        },
        {
          "id": "BMC.03",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "«AlmuerzoListo» es una app de pedidos anticipados en el campus universitario. El equipo identifica dos actores: (A) el estudiante que realiza y paga el pedido; (B) los bares del campus que preparan y entregan la comida. Según el Canvas, ¿cómo se clasifican técnicamente?",
          "options": [
            "A es pagador y B es usuario: ambos deben consolidarse formalmente dentro del bloque 1 como clientes de doble cara del sistema.",
            "Ambos son clientes equivalentes: se debe formular un lienzo Canvas independiente para cada uno de ellos.",
            "A es cliente en el bloque 1 (usuario y pagador); B es socio clave en el bloque 8, no segmento de clientes.",
            "B es el cliente principal porque elabora el menú; A es únicamente un beneficiario secundario del sistema."
          ],
          "correct": 2,
          "feedback": "En el Canvas, el bloque 1 agrupa a quienes reciben la propuesta de valor y pagan por ella (el estudiante). Los bares universitarios preparan el menú y operan como socios clave (bloque 8) o aliados de entrega, no como el destinatario que demanda la solución. Confundir aliados de suministro con clientes en el bloque 1 es un error metodológico recurrente."
        },
        {
          "id": "BMC.04",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "Una startup de tutorías universitarias escribe en su bloque 1: «Todos los estudiantes universitarios de Ecuador». Cuenta con un presupuesto piloto de 200 dólares. Según la metodología del Canvas, ¿cuál es la decisión inicial correcta?",
          "options": [
            "Acotar a un nicho accionable: enfocarse en estudiantes de Ingeniería de la PUCE con dificultades antes de exámenes parciales.",
            "Lanzar la campaña nacional de inmediato: un mercado masivo atrae rondas de capital semilla y valida la propuesta comercial con mayor rapidez.",
            "Detener la validación hasta conseguir mayor presupuesto: 200 dólares impiden abarcar un segmento representativo.",
            "Registrar la marca institucionalmente: proteger la propiedad intelectual antes de seleccionar una facultad específica."
          ],
          "correct": 0,
          "feedback": "Con un presupuesto inicial de 200 dólares es inviable captar un mercado nacional. La metodología exige comenzar con un segmento de playa (beachhead market) claramente localizable (estudiantes de Ingeniería de una facultad específica ante exámenes parciales). Esto permite entrevistas presenciales, feedback rápido y validación de tracción antes de expandirse a otras universidades."
        },
        {
          "id": "BMC.05",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "«Fiado Claro» define su bloque 2 como: «App móvil con IA que reconoce la caligrafía del cuaderno de fiado y actualiza los saldos de cada vecino automáticamente». Según los niveles de adopción tecnológica (adorno, ayuda, núcleo), ¿en qué nivel opera esta IA?",
          "options": [
            "Adorno superficial: si la IA se desconecta, el registro manual de cobros en papel cumple la misma función sin pérdidas.",
            "Ayuda complementaria: agiliza la digitación de nombres, pero el tendero podría transcribirlos en Excel con igual resultado.",
            "Núcleo condicional: solo califica como núcleo tecnológico si la precisión algorítmica de lectura automatizada supera el 99 % en condiciones reales de baja luz.",
            "Núcleo estructural: sin el modelo de visión artificial es inviable procesar miles de notas manuscritas con inmediatez y sin error."
          ],
          "correct": 3,
          "feedback": "La inteligencia artificial es núcleo cuando constituye la esencia misma de la propuesta y no puede suprimirse sin destruir el valor ofrecido. La lectura instantánea de cuadernos con caligrafías heterogéneas es humanamente inabarcable en tiempo real; si se retira la IA, la promesa de eliminar la digitación manual desaparece."
        },
        {
          "id": "BMC.06",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "Se evalúan cuatro redacciones de propuesta de valor para una app de tutorías. ¿Cuál aplica con mayor rigor la estructura estándar: «Ayudamos a [segmento] que [problema], con [solución], a diferencia de [alternativa]»?",
          "options": [
            "«La plataforma líder en Ecuador que conecta alumnos universitarios con tutores altamente calificados a tarifas sumamente accesibles y planes de financiamiento directo.»",
            "«Ayudamos a estudiantes universitarios con dudas en materias difíciles, con tutores expertos, a diferencia de estudiar solos.»",
            "«Ayudamos a estudiantes de Ingeniería de la PUCE que reprueban Cálculo, con tutorías de pares en 24 h, a diferencia de videos de YouTube sin interacción.»",
            "«Conectamos tutores destacados con estudiantes rezagados de forma eficiente mediante algoritmos de emparejamiento inteligente.»"
          ],
          "correct": 2,
          "feedback": "La formulación técnica rigurosa exige los cuatro componentes definidos: segmento concreto (alumnos de Ingeniería PUCE), dolor agudo (reprobar Cálculo), solución específica (tutorías de pares en 24 horas) y alternativa actual insatisfactoria (videos estáticos de YouTube sin retroalimentación). Las demás formulaciones son lemas comerciales genéricos."
        },
        {
          "id": "BMC.07",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "«Raíces Andinas» comercializa canastas agroecológicas: «Comida fresca a domicilio; pago directo al agricultor; trazabilidad del cultivo». Un competidor nuevo publica idéntica promesa textual. ¿En qué bloque del Canvas radica la verdadera barrera de defensa de «Raíces Andinas»?",
          "options": [
            "En el bloque 9 de costos: contar con costos operativos reducidos permite bajar precios y expulsar competidores del mercado.",
            "En el bloque 8 de socios clave: alianzas exclusivas y de confianza con asociaciones campesinas impiden la réplica de la cadena.",
            "En el bloque 2 de propuesta: cualquier texto publicitario que pueda transcribirse carece de diferenciación comercial genuina.",
            "En el bloque 5 de ingresos: la lealtad del cliente se asegura mediante tarifas de suscripción con descuento por pago anticipado."
          ],
          "correct": 1,
          "feedback": "La propuesta de valor escrita en papel es fácilmente copiable por cualquier imitador. La ventaja competitiva real reside en los bloques del lado izquierdo del lienzo: acuerdos de exclusividad, redes de abastecimiento y confianza histórica con comunidades productoras (Socios Clave), los cuales ningún competidor puede reproducir de la noche a la mañana."
        },
        {
          "id": "BMC.08",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "El marco ALAS advierte que incorporar IA como «adorno» devalúa la solidez del modelo de negocio. ¿Cuál de los siguientes casos ejemplifica claramente el uso de IA como adorno?",
          "options": [
            "Una plataforma de almuerzos universitarios que incrusta un chatbot genérico de saludo y preguntas frecuentes en su menú.",
            "Un sistema de visión artificial que detecta plagas en cultivos a partir de fotografías tomadas en campo por el agricultor.",
            "Un motor de optimización matemática que diseña rutas de despacho logístico en tiempo real según el congestionamiento vehicular.",
            "Una herramienta que escanea contratos de arrendamiento y extrae cláusulas de penalización financiera para ferreterías."
          ],
          "correct": 0,
          "feedback": "Un chatbot conversacional genérico colocado en una app de pedidos no interviene en la propuesta medular: la selección, compra y entrega de comida se realizan exactamente igual con o sin él. En cambio, en visión computacional o cálculo de rutas, la IA es el motor operativo indispensable sin el cual el servicio deja de existir."
        },
        {
          "id": "BMC.09",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "«Fiado Claro» anota en su bloque de Canales la frase «redes sociales». Desde una perspectiva operativa para el segmento de «tiendas de barrio tradicionales», ¿qué canal alternativo resulta técnica y comercialmente coherente?",
          "options": [
            "Campañas pagadas de pauta digital en TikTok e Instagram geolocalizadas alrededor de las principales zonas comerciales de Quito.",
            "Una página web corporativa con landing page informativa y formulario de registro para agendar demostraciones virtuales.",
            "Distribución masiva de material publicitario impreso en ferias de innovación y congresos empresariales de la ciudad.",
            "Distribuidores mayoristas y camiones de bebidas que ya visitan semanalmente a los tenderos en sus propios establecimientos."
          ],
          "correct": 3,
          "feedback": "El canal debe interceptar al segmento en su rutina cotidiana. Los tenderos tradicionales no buscan aplicaciones de gestión financiera en Instagram, pero reciben semanalmente a los repartidores mayoristas de bebidas y alimentos con quienes ya mantienen un canal de confianza establecido. Acoplarse a esa logística existente reduce drásticamente el costo de captación."
        },
        {
          "id": "BMC.10",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "«BiciCampus» elige como canal: «Estaciones físicas en los accesos peatonales del campus junto con una aplicación móvil de reserva». ¿Qué ventaja estratégica sustenta esta combinación para estudiantes a menos de 3 km?",
          "options": [
            "Intervención en el punto de paso: intercepta al estudiante en su trayecto habitual y la app agiliza el desbloqueo sin demoras.",
            "Asegura cobertura 100 % digital: prescinde por completo de infraestructura física y suprime los costos de mantenimiento mecánico a nivel de campus.",
            "Exclusividad de canal: los estudiantes universitarios rechazan cualquier contacto comercial que no sea enteramente físico.",
            "Eliminación de intermediarios: permite cobrar en efectivo en las estaciones y elude el cobro de comisiones bancarias."
          ],
          "correct": 0,
          "feedback": "La combinación física y digital (phygital) coloca el servicio exactamente donde ocurre la necesidad (el acceso peatonal al campus por donde el estudiante transita a pie) y utiliza la herramienta digital para eliminar la fricción de filas y trámites de entrega, facilitando la adopción inmediata."
        },
        {
          "id": "BMC.11",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "Una startup comercializa software veterinario por suscripción de 8 dólares mensuales y establece como único canal la «visita presencial puerta a puerta». Evaluando la viabilidad económica del canal, ¿qué inconsistencia presenta?",
          "options": [
            "La venta presencial puerta a puerta está restringida metodológicamente a bienes industriales tangibles de alto tonelaje.",
            "El costo de adquisición de clientes (CAC) por visita presencial superará ampliamente el valor de vida del cliente (LTV).",
            "Las clínicas veterinarias rechazan sistemáticamente cualquier demostración comercial que se realice en su establecimiento.",
            "El software veterinario exige obligatoriamente esquemas de comercialización mediante licenciamiento perpetuo y no suscripción."
          ],
          "correct": 1,
          "feedback": "Un canal presencial puerta a puerta implica gastos de traslado y tiempo de un asesor que superan con creces los 8 dólares mensuales de la suscripción. Si el Costo de Adquisición de Clientes (CAC) es mayor al margen aportado por el cliente en el tiempo (LTV), el modelo quema capital y se vuelve inviable financieramente."
        },
        {
          "id": "BMC.12",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "Considerando que «el canal es la tubería que transporta la propuesta de valor hasta el cliente», ¿cuál de las siguientes startups evidencia la mayor desconexión entre su canal y su segmento objetivo?",
          "options": [
            "«AlmuerzoListo»: app universitaria que utiliza grupos de mensajería estudiantil y carteleras del campus como vía de captación.",
            "«Fiado Claro»: aplicación móvil para tenderos que capacita y distribuye mediante los proveedores de abarrotes de la zona.",
            "«TutorYa»: plataforma 100 % digital de tutorías remotas que renta un local en un centro comercial exclusivo para afiliar alumnos.",
            "«BiciCampus»: servicio de bicicletas compartidas que instala tótems informativos y puntos de entrega en las facultades periféricas."
          ],
          "correct": 2,
          "feedback": "Una plataforma tecnológica de alcance digital que alquila un local físico costoso en un centro comercial para reclutar usuarios comete un error grave de costos y coherencia: incrementa costos fijos innecesarios y restringe su alcance a quienes transitan por ese centro comercial, perdiendo toda la ventaja de escala de un negocio digital."
        },
        {
          "id": "BMC.13",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "«Fiado Claro» define su bloque 4 como: «Envío automático por WhatsApp de un reporte semanal consolidado con el saldo y cobros pendientes de cada vecino». ¿Qué propósito estratégico cumple esta acción en el Canvas?",
          "options": [
            "Actúa como canal de captación: WhatsApp es la vía promocional obligatoria mediante la cual nuevos comercios descubren las bondades del servicio en el barrio.",
            "Fomenta la retención recurrente: genera un hábito semanal de uso que vincula al comerciante sin exigir visitas presenciales.",
            "Constituye un recurso clave: los mensajes salientes representan el principal costo de infraestructura en telecomunicaciones.",
            "Define la propuesta de valor: el reporte impreso o digital constituye el bien final por el que paga el cliente."
          ],
          "correct": 1,
          "feedback": "El bloque de Relaciones con Clientes define los mecanismos para retener y fidelizar al cliente. Un reporte automatizado que llega puntualmente cada semana soluciona una necesidad crítica (gestión de cobros), crea un hábito de consulta sistemático y reduce la tasa de cancelación (churn), asegurando retención sin costo operativo humano."
        },
        {
          "id": "BMC.14",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "El principio de escalabilidad estipula que «el modelo debe operar con la misma efectividad atendiendo a 10 que a 1 000 usuarios». En software, ¿qué mecanismo de relación con clientes presenta mayor escalabilidad?",
          "options": [
            "Comunidad autogestionada de usuarios y base de conocimiento interactiva donde los clientes resuelven dudas entre pares.",
            "Llamadas semanales personalizadas de los fundadores para asesorar individualmente a cada cliente en su proceso de adopción tecnológica y operativa.",
            "Asignación de un ejecutivo de cuenta dedicado las 24 horas para brindar soporte telefónico en cada transacción.",
            "Visitas presenciales bimensuales del equipo técnico a las instalaciones del cliente para capacitar al nuevo personal."
          ],
          "correct": 0,
          "feedback": "Una comunidad de usuarios respaldada por tutoriales y bases de conocimiento escala a costo marginal cercano a cero: el soporte no requiere incrementar la nómina proporcionalmente al ingreso de nuevos clientes. Las visitas presenciales y ejecutivos dedicados generan costos lineales que impiden la escalabilidad de una startup tecnológica."
        },
        {
          "id": "BMC.15",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "«TutorYa» define su relación con clientes indicando únicamente: «Los estudiantes califican con estrellas al tutor al término de cada clase». Desde el diseño del modelo de negocio, ¿qué limitación presenta esta definición?",
          "options": [
            "Confunde categorías: las valoraciones numéricas son activos de propiedad intelectual que pertenecen al bloque 6 de recursos.",
            "Es técnicamente inoperante: las calificaciones de usuario requieren certificaciones notariales para tener validez comercial.",
            "Es una acción transaccional pasiva: recoge retroalimentación posterior, pero no formula un mecanismo activo para que el alumno regrese.",
            "Genera sobrecosto informático: almacenar reseñas de texto en bases de datos relacionales satura la infraestructura tecnológica del servidor central en horas pico."
          ],
          "correct": 2,
          "feedback": "Una encuesta de satisfacción o calificación por estrellas evalúa el servicio brindado, pero no explica cómo la plataforma retiene activamente al estudiante para su próxima necesidad académica. Un mecanismo de relación robusto contemplaría alertas previas a semanas de exámenes, planes de seguimiento académico continuo o incentivos de recompra."
        },
        {
          "id": "BMC.16",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "Una startup de inventario para ferreterías ofrece «capacitación presencial individual al momento de la venta». Cuenta con 50 clientes y proyecta alcanzar 300. ¿Qué transformación debe ejecutar en el bloque 4 para sostener el crecimiento?",
          "options": [
            "Contratar un asesor de campo adicional por cada cinco ferreterías incorporadas para mantener inalterable el estándar de atención presencial personalizada.",
            "Establecer una tarifa arancelaria obligatoria a la capacitación física para financiar los viáticos del equipo promotor.",
            "Suprimir todo material de inducción bajo la premisa de que un software intuitivo no demanda explicación operativa alguna.",
            "Migrar hacia un esquema de autoservicio (onboarding digital interactivo, microvideos explicativos y asistencia por chatbot)."
          ],
          "correct": 3,
          "feedback": "Para multiplicar por seis la base de clientes sin disparar la estructura de costos fijos, el modelo de relación debe evolucionar de la atención personal presencial al autoservicio guiado digitalmente (onboarding automatizado, videos y autosoporte). Mantener inducciones físicas causaría cuellos de botella operativos y pérdidas financieras."
        },
        {
          "id": "BMC.17",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«TutorYa» fija una suscripción mensual fija de 120 dólares por acceso ilimitado a tutorías, orientada a estudiantes universitarios de pregrado. ¿Qué falla estructural de modelo de negocio comete este planteamiento?",
          "options": [
            "Incoherencia entre precio y capacidad de pago: el monto excede el presupuesto disponible del estudiante para gastos académicos.",
            "Tarifa subvalorada: un precio de 120 dólares impide remunerar dignamente a profesores universitarios con grado doctoral.",
            "Modelo contractual equivocado: la suscripción fija mensual debió estructurarse bajo un esquema freemium monetizado mediante pauta publicitaria de terceros.",
            "Falla de distribución: el problema no reside en la tarifa, sino en la ausencia de alianzas bancarias para diferir el cobro."
          ],
          "correct": 0,
          "feedback": "El bloque de ingresos debe alinearse rigurosamente con la disposición y capacidad real de pago del segmento. Un estudiante promedio dispone de presupuestos acotados y demanda ayuda en momentos específicos (exámenes). Exigir 120 dólares fijos al mes genera rechazo inmediato; un esquema por sesión (6 a 10 dólares) o paquetes para parciales resulta coherente."
        },
        {
          "id": "BMC.18",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«Fiado Claro» monetiza así: «Registro gratuito para las primeras 20 cuentas fiadas; a partir del cliente número 21 se cobra una suscripción de 5 dólares mensuales». ¿Qué arquitectura de ingresos describe esta propuesta?",
          "options": [
            "Licenciamiento perpetuo: el comerciante adquiere la propiedad del software mediante un único abono inicial de apertura.",
            "Esquema freemium: ofrece una capa de entrada sin costo para generar adopción del hábito y tarifa mensual al expandir la capacidad.",
            "Monetización publicitaria: el servicio se sustenta insertando anuncios comerciales de distribuidores en la interfaz gratuita.",
            "Intermediación transaccional: la plataforma tecnológica retiene una comisión porcentual regulada sobre el importe monetario de cada deuda recuperada en ventanilla."
          ],
          "correct": 1,
          "feedback": "La estructura descrita corresponde a un modelo freemium basado en volumen: la versión básica gratuita permite comprobar el valor de la herramienta y consolidar el hábito en la tienda; al crecer la base de clientes fiadores y aumentar la dependencia operativa del sistema, se activa el cobro de la suscripción mensual."
        },
        {
          "id": "BMC.19",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "Una startup de gestión de inventarios para ferreterías cobra 15 dólares mensuales por local. El costo variable por uso de IA es de 3 dólares mensuales por local. Sus costos fijos operativos suman 180 dólares al mes. ¿Cuántas ferreterías activas necesita para alcanzar el punto de equilibrio?",
          "options": [
            "12 ferreterías: cálculo resultante de dividir el costo fijo total para la tarifa bruta mensual del servicio ofertado.",
            "18 ferreterías: cálculo que sobrestima la meta al añadir indebidamente el costo de la IA al numerador de los costos fijos.",
            "60 ferreterías: cálculo distorsionado que divide el costo fijo únicamente para el costo variable unitario de la IA.",
            "15 ferreterías: cálculo exacto que divide los costos fijos ($180) para la contribución marginal neta ($15 − $3 = $12)."
          ],
          "correct": 3,
          "feedback": "La fórmula del punto de equilibrio operativo es: Costos Fijos ÷ (Precio − Costo Variable Unitario). Aplicando las cifras del caso: $180 ÷ ($15 − $3) = $180 ÷ $12 = 15 ferreterías. Con 15 locales se obtienen $225 de ingresos brutos, los cuales cubren con exactitud los $180 de costos fijos más los $45 de costo variable de IA."
        },
        {
          "id": "BMC.20",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«Raíces Andinas» comercializa canastas de hortalizas a 25 dólares. Eroga 14 dólares en compras directas al agricultor y 4 dólares en despacho motorizado. ¿Qué margen unitario deja cada canasta y cómo se denomina en el Canvas?",
          "options": [
            "7 dólares de utilidad neta definitiva: cifra contable que refleja el remanente libre de gravámenes tras deducir los impuestos corporativos anuales correspondientes.",
            "11 dólares de margen comercial bruto: resultado contable de restar únicamente los insumos agrícolas al precio de venta final.",
            "7 dólares de margen de contribución: excedente unitario ($25 − $18) destinado a absorber la estructura de costos fijos del negocio.",
            "25 dólares de flujo operativo bruto: importe que representa el ingreso disponible al no considerar la logística de despacho."
          ],
          "correct": 2,
          "feedback": "El margen de contribución unitario equivale al precio de venta menos los costos directamente variables vinculados a la entrega de una unidad ($25 − $14 − $4 = $7). Este excedente no constituye utilidad neta todavía; representa la cuota con la que cada canasta vendida financia los costos fijos del emprendimiento (servidores, salarios, administración)."
        },
        {
          "id": "BMC.21",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "«Fiado Claro» enumera en su bloque 6 los siguientes elementos: (1) modelo entrenado de reconocimiento óptico de caracteres; (2) base de datos histórica de cuentas fiadas; (3) flotilla de bicicletas eléctricas de BiciCampus. ¿Qué elemento representa un error de asignación?",
          "options": [
            "Los elementos (1) y (3): los algoritmos de visión representan egresos computacionales y nunca activos de la empresa.",
            "El elemento (3): las bicicletas constituyen activos de una empresa ajena sin relación operativa con la gestión del fiado.",
            "El elemento (2): el historial de adeudos pertenece jurídicamente al comerciante y no califica como recurso del sistema.",
            "Ningún elemento: cualquier herramienta o activo físico dentro de la incubadora universitaria puede compartirse libremente."
          ],
          "correct": 1,
          "feedback": "Los Recursos Clave son los activos propios indispensables para fabricar y sostener la propuesta de valor. La flotilla de bicicletas eléctricas pertenece al modelo de BiciCampus y no tiene función en una app de registro de deudas. En cambio, el algoritmo de IA (1) y la base de datos de comportamiento crediticio (2) son los activos estratégicos medulares de Fiado Claro."
        },
        {
          "id": "BMC.22",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "Siguiendo el principio de «empacar solo lo indispensable para una expedición», una startup de diagnóstico botánico mediante IA evalúa tres elementos: (A) red neuronal entrenada con 50 000 imágenes agrícolas; (B) app móvil de captura fotográfica; (C) oficina física corporativa en Quito. ¿Cuál elemento NO es indispensable en fase temprana?",
          "options": [
            "La red neuronal de visión (A): el reconocimiento botánico de plagas en sembríos puede delegarse provisionalmente a consultas manuales con agrónomos certificados.",
            "La aplicación móvil (B): los agricultores pueden enviar sus fotografías impresas mediante servicios de encomienda postal.",
            "Todos resultan indispensables: una empresa tecnológica no puede constituirse formalmente sin instalaciones inmobiliarias.",
            "La oficina física corporativa (C): el servicio algorítmico y la distribución operan de forma digital y remota sin requerir un local."
          ],
          "correct": 3,
          "feedback": "La red neuronal especializada y la app móvil son los recursos técnicos neurálgicos: sin ellos el diagnóstico instantáneo es imposible. Una oficina física con sala de reuniones no aporta a la captura ni al análisis de imágenes; en etapa inicial genera un costo fijo improductivo que drena liquidez sin mejorar la propuesta de valor."
        },
        {
          "id": "BMC.23",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "Una startup de entregas ultrarrápidas gestiona una flota propia de 200 repartidores vinculados contractualmente para despachar pedidos en menos de 2 horas. Dentro de la taxonomía del Canvas, ¿en qué bloque se clasifica este componente?",
          "options": [
            "En el bloque 6 de recursos clave: la red humana propia constituye el activo logístico medular que hace posible la promesa de entrega.",
            "En el bloque 7 de actividades clave: despachar pedidos representa la faena operativa diaria que ejecuta continuamente el personal contratado por la empresa.",
            "En el bloque 8 de socios clave: los repartidores son siempre proveedores externos independientes sin vínculo con el negocio.",
            "En el bloque 3 de canales: la persona que entrega el paquete representa la vía publicitaria mediante la cual se expone la marca."
          ],
          "correct": 0,
          "feedback": "Cuando una organización cuenta con una red de personal propio que constituye el pilar operativo de su diferenciación (cumplir entregas en menos de 2 horas), dicho activo califica como Recurso Clave de carácter humano (Bloque 6). Si los repartidores pertenecieran a una empresa de encomiendas subcontratada, se clasificarían como Socios Clave (Bloque 8)."
        },
        {
          "id": "BMC.24",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "En el ámbito de las startups impulsadas por inteligencia artificial, ¿por qué los datos históricos y estructurados de clientes representan un recurso clave más estratégico que el código de la plataforma?",
          "options": [
            "Porque las normas internacionales de propiedad intelectual blindan las bases de datos indefinidamente, mientras que las patentes de código expiran a corto plazo.",
            "Porque almacenar megabytes en repositorios cloud resulta más económico que contratar ingenieros de sistemas seniors.",
            "Porque el software es replicable por competidores, mientras que la data de comportamiento real crea barreras de entrada únicas.",
            "Porque poseer grandes volúmenes de registros contables habilita cobrar tarifas arancelarias premium a los clientes."
          ],
          "correct": 2,
          "feedback": "El código fuente de una plataforma puede reconstruirse o imitarse con suficiente capital. En cambio, los datos reales de comportamiento, morosidad y consumo recolectados a lo largo de meses no se compran en un almacén; alimentan y afinan la precisión de los modelos de IA, generando una ventaja competitiva sostenible e insustituible."
        },
        {
          "id": "BMC.25",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "«Fiado Claro» enumera sus tareas semanales: (1) optimizar los algoritmos de detección de caligrafía difícil; (2) afiliar activamente nuevos comercios de barrio; (3) rediseñar la paleta de colores y el logotipo corporativo. ¿Qué tarea es MENOS crítica para validar el modelo?",
          "options": [
            "La tarea (1): perfeccionar el modelo informático representa una labor técnica especializada de ingeniería que debe subcontratarse de manera obligatoria.",
            "La tarea (3): rediseñar elementos estéticos de marca no incide en la exactitud de lectura ni en la tracción de nuevos usuarios.",
            "La tarea (2): incorporar comercios no aporta valor al tratarse de una gestión comercial ajena al desarrollo informático.",
            "Ninguna tarea: las tres actividades exigen idéntica dedicación horaria para asegurar la supervivencia del negocio."
          ],
          "correct": 1,
          "feedback": "Las Actividades Clave son aquellas que sostienen la propuesta de valor y la viabilidad del negocio. Entrenar el algoritmo garantiza que el producto funcione y afiliar tiendas garantiza ingresos. El rediseño cosmético de isotipos o paletas de colores en fase inicial consume tiempo valioso sin impactar en la solución del dolor ni en la validación comercial."
        },
        {
          "id": "BMC.26",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Una plataforma de tutorías académicas identifica tres procesos operativos: (A) algoritmo de emparejamiento automatizado tutor-alumno; (B) evaluación y filtrado de competencias docentes; (C) publicación de infografías en redes sociales. ¿Qué conjunto constituye su núcleo de actividades clave?",
          "options": [
            "Las actividades A y C: optimizar el emparejamiento algorítmico y sostener presencia masiva en redes sociales captan el volumen de alumnos indispensable.",
            "Las actividades B y C: validar conocimientos y sostener presencia publicitaria compensan cualquier deficiencia de software.",
            "Las actividades A y B: asegurar emparejamiento veloz y certificar la calidad docente sostienen la promesa sustancial del servicio.",
            "Únicamente la actividad A: el algoritmo automatizado de búsqueda representa la única ventaja competitiva de la empresa."
          ],
          "correct": 2,
          "feedback": "La promesa medular de una plataforma educativa descansa en conectar rápidamente con tutores realmente calificados. Si el tutor no domina la materia (falla en B) o la asignación demora días (falla en A), el usuario no regresa. La gestión publicitaria en redes (C) es importante para difusión, pero no define la entrega sustancial del valor educativo."
        },
        {
          "id": "BMC.27",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Las actividades clave corresponden a las tareas sistemáticas que el equipo debe ejecutar periódicamente para cumplir su promesa. ¿Cuál de los siguientes casos presenta una actividad que NO corresponde a su etapa operativa medular?",
          "options": [
            "«Raíces Andinas»: fiscalización técnica periódica de la inocuidad y empaque de hortalizas antes de coordinar los despachos logísticos a hogares suscriptores.",
            "«BiciCampus»: revisión técnica preventiva, recarga energética y lubricación continua de las unidades de transporte.",
            "«AlmuerzoListo»: confirmación diaria y conciliación de platos disponibles con los administradores de los comedores.",
            "«Fiado Claro»: negociación de fusiones y adquisiciones corporativas con consorcios bancarios multinacionales de crédito."
          ],
          "correct": 3,
          "feedback": "Para una startup en validación temprana como Fiado Claro, negociar fusiones o adquisiciones bancarias internacionales es una expectativa especulativa de largo plazo, no una actividad operativa semanal indispensable. El control de canastas, el mantenimiento de bicicletas y la coordinación diaria de menús son tareas operativas críticas sin las cuales el servicio colapsa."
        },
        {
          "id": "BMC.28",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Para garantizar la escalabilidad operativa de un modelo de negocio, ¿qué condición deben cumplir las actividades clave al pasar de 10 a 500 transacciones?",
          "options": [
            "Estar estandarizadas y automatizadas mediante procesos documentados y software para no depender de ejecución artesanal.",
            "Exigir que los fundadores dupliquen sus jornadas laborales presenciales para supervisar cada transacción de forma directa.",
            "Incrementar el personal operativo de oficina en idéntica proporción matemática al incremento porcentual de los pedidos.",
            "Postergar toda estandarización metodológica hasta consolidar un fondo de inversión formal que financie consultorías externas."
          ],
          "correct": 0,
          "feedback": "La escalabilidad radica en la capacidad de procesar mayor demanda sin incurrir en incrementos equivalentes de costos ni esfuerzo manual. Si los procesos están documentados y soportados por software (como una receta estandarizada), la operación funciona con la misma fluidez y calidad atendiendo a diez clientes que a un millar, evitando colapsos operativos."
        },
        {
          "id": "BMC.29",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "«Fiado Claro» incluye en su bloque 8 a tres participantes: (1) distribuidores de bebidas de consumo masivo; (2) proveedor del servicio en la nube para la API de visión; (3) los pequeños tenderos de barrio que instalan la app. ¿Cuál de ellos está mal categorizado?",
          "options": [
            "El participante (1): los distribuidores mayoristas representan competidores directos en el abastecimiento físico y no pueden aliarse con plataformas digitales.",
            "El participante (2): los proveedores de infraestructura tecnológica califican exclusivamente como egresos de capital fijo.",
            "El participante (3): los tenderos corresponden al segmento de clientes del bloque 1, puesto que son los destinatarios del valor.",
            "Ninguno: toda entidad o persona física que sostenga interacción contractual califica automáticamente como socio clave."
          ],
          "correct": 2,
          "feedback": "Los socios clave son organizaciones o aliados estratégicos externos que cooperan en la infraestructura del negocio. Los tenderos de barrio son los usuarios y pagadores directos del servicio; por definición conceptual pertenecen al Bloque 1 (Segmentos de Clientes). Ubicarlos en el bloque 8 confunde la demanda con el suministro."
        },
        {
          "id": "BMC.30",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "«Raíces Andinas» establece acuerdos con: asociaciones de pequeños agricultores, empresas de encomiendas motorizadas, pasarela de pago digital y una ONG ambiental. ¿Qué criterio metodológico define que sean socios clave y no recursos propios?",
          "options": [
            "Son socios clave porque son indispensables para la propuesta, pero corresponden a entidades externas ajenas al control directo.",
            "Son socios clave porque formalizan convenios de cooperación interinstitucional con cláusulas notariales de aporte forzoso a los fondos de reserva patrimonial.",
            "Son socios clave porque asumen voluntariamente el pago de las comisiones bancarias generadas por cada transacción del servicio.",
            "Son socios clave porque brindan horas de trabajo comunitario gratuito a cambio de menciones publicitarias en redes sociales."
          ],
          "correct": 0,
          "feedback": "El Canvas delimita claramente los recursos (lo que la empresa posee internamente o controla) de los socios (capacidades y activos que necesita pero que pertenecen a terceros). Raíces Andinas no es propietaria de las parcelas agrícolas ni de las motos de despacho; accede a ellos mediante alianzas estratégicas con organizaciones independientes."
        },
        {
          "id": "BMC.31",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "Una startup que comercializa software de citas médicas para clínicas dentales anota en su bloque de socios clave: «El Ministerio de Salud Pública». ¿Qué debilidad metodológica presenta esta definición?",
          "options": [
            "El Ministerio de Salud Pública encaja formalmente como cliente corporativo institucional y debió tabularse dentro del bloque de segmentos prioritarios de mercado.",
            "El Ministerio de Salud Pública califica como un recurso humano propio porque sus inspectores auditan el establecimiento.",
            "No presenta objeción alguna: todo ministerio gubernamental constituye formalmente un socio estratégico de pleno derecho.",
            "Es un actor regulador institucional del sector, por lo que su mención sin un rol operativo preciso vuelve vago el modelo."
          ],
          "correct": 3,
          "feedback": "Un socio clave no puede ser una mención institucional abstracta. Un ministerio actúa como ente regulador estatal, no como aliado operativo de una startup privada, a menos que exista un convenio explícito (por ejemplo, «homologación del estándar de historia clínica electrónica»). Incluir entidades estatales sin compromiso específico debilita el Canvas."
        },
        {
          "id": "BMC.32",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "Los socios clave permiten cubrir brechas técnicas o capacidades que el equipo fundador «no sabe o no puede hacer por sí solo». Si un equipo de agrotecnología carece de experiencia en entrenamiento de redes neuronales, ¿cuál es el socio más estratégico?",
          "options": [
            "Un estudio de consultoría en experiencia de usuario para rediseñar íntegramente la paleta tipográfica y la iconografía accesible de las interfaces móviles.",
            "Un laboratorio universitario de inteligencia artificial con capacidad de computación para cocrear el modelo algorítmico.",
            "Una asociación comercial gremial para obtener descuentos en stands promocionales en ferias de emprendimiento local.",
            "Una agencia de marketing digital para pautar anuncios patrocinados en canales de mensajería y redes de video."
          ],
          "correct": 1,
          "feedback": "La carencia crítica que compromete la viabilidad técnica de la empresa radica en el desarrollo del modelo de inteligencia artificial. Un laboratorio universitario de investigación en IA resuelve directamente esa falencia crítica mediante investigadores y capacidad de cómputo GPU. Los servicios de publicidad o diseño abordan aspectos periféricos que no resuelven la inviabilidad algorítmica."
        },
        {
          "id": "BMC.33",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "«Fiado Claro» incurre en: servidor en la nube de 50 dólares mensuales, consumo de API de IA de 0,50 dólares por tienda activa y nómina operativa básica de 300 dólares mensuales. Si registra 80 tiendas afiliadas a una tarifa de 5 dólares cada una, ¿cuál es el balance mensual?",
          "options": [
            "Pierde 10 dólares al mes: el costo fijo de $350 supera el margen bruto obtenido tras deducir la infraestructura tecnológica.",
            "Gana 50 dólares al mes: los $400 de ingresos cubren holgadamente el servidor y la nómina sin considerar gastos variables.",
            "Presenta punto de equilibrio nulo: los $400 facturados coinciden matemáticamente con los compromisos devengados en el período.",
            "Gana 10 dólares al mes: ingresos brutos de $400 frente a costos totales de $390 ($350 fijos más $40 de consumo de IA)."
          ],
          "correct": 3,
          "feedback": "Costos fijos totales: servidor ($50) + nómina ($300) = $350 mensuales. Costos variables totales: 80 tiendas × $0,50 = $40 mensuales. Costo total de operación: $350 + $40 = $390 al mes. Ingresos brutos: 80 tiendas × $5 = $400 al mes. Balance neto: $400 − $390 = +$10 mensuales de beneficio operativo."
        },
        {
          "id": "BMC.34",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "En modelos de negocio que integran inteligencia artificial, ¿por qué constituye un error conceptual crítico ignorar los costos de cómputo de la IA dentro del bloque 9?",
          "options": [
            "Porque los fondos de inversión internacionales establecen como requisito contractual vinculante que el cómputo de IA represente la mayoría del presupuesto operativo.",
            "Porque las plataformas de IA constituyen el único concepto de gasto financiero admisible en estados de pérdidas de software.",
            "Porque los servicios de inferencia se tarifican por consumo (tokens o llamadas API), escalando con los usuarios y erosionando el margen.",
            "Porque sin el desglose contable de la IA resulta matemáticamente inviable tramitar patentes de invención en el país."
          ],
          "correct": 2,
          "feedback": "Los servicios de inteligencia artificial de frontera (APIs de visión computacional, modelos de lenguaje, etc.) se facturan bajo demanda (por token procesado, imagen analizada o volumen de peticiones). Si no se presupuestan como costo variable unitario, a medida que la startup capta más usuarios el costo técnico crece exponencialmente, pudiendo volver deficitario un negocio que aparentaba ser rentable."
        },
        {
          "id": "BMC.35",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "Una startup registra costos fijos de 240 dólares mensuales y comercializa un servicio a 12 dólares por usuario. El costo variable de inferencia por IA es de 2 dólares por usuario. El equipo calcula su punto de equilibrio como 240 ÷ 12 = 20 usuarios. ¿Qué error cometió?",
          "options": [
            "Omitió aplicar la retención del impuesto a la renta correspondiente sobre las ventas mensuales facturadas antes de determinar el volumen de equilibrio fiscal.",
            "Dividió para el precio bruto en lugar de la contribución marginal ($12 − $2 = $10); la meta correcta es 240 ÷ 10 = 24 usuarios.",
            "Debió consolidar el valor unitario de la IA dentro de los costos fijos mensuales elevando el numerador a 242 dólares.",
            "Multiplicó equivocadamente los costos fijos por la cantidad de clientes activos en lugar de efectuar una división ordinaria."
          ],
          "correct": 1,
          "feedback": "El punto de equilibrio se calcula dividiendo los costos fijos para el margen de contribución unitario (Precio de venta − Costos variables unitarios). El equipo dividió para el precio de venta completo ($12), omitiendo que cada usuario consume $2 de IA. La ecuación real es: 240 ÷ (12 − 2) = 240 ÷ 10 = 24 usuarios necesarios para no perder dinero."
        },
        {
          "id": "BMC.36",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "De acuerdo con las directrices académicas del Business Model Canvas, ¿qué tres elementos deben figurar explícitamente en el bloque 9 para considerar completa su formulación?",
          "options": [
            "Los costos fijos basales, los costos variables unitarios (incluyendo IA) y el cálculo matemático explícito del punto de equilibrio.",
            "El detalle exclusivo de gastos de pauta en motores de búsqueda, el arriendo de oficinas y la provisión de indemnizaciones laborales.",
            "El balance general auditado del ejercicio fiscal anterior, el desglose de amortizaciones patrimoniales y el flujo de caja descontado.",
            "La nómina salarial íntegra de los fundadores, las cotizaciones de seguros de riesgo y el presupuesto de viajes internacionales."
          ],
          "correct": 0,
          "feedback": "Una estructura de costos rigurosa en el Canvas exige identificar los egresos fijos (aquellos independientes del volumen de ventas como servidores o sueldos mínimos), los egresos variables directos por cliente (como consumo de API de IA o empaques) y el cálculo transparente del punto de equilibrio en unidades de clientes o ventas necesarias para alcanzar la sostenibilidad."
        }
      ]
    },
    {
      "id": "design_thinking_40",
      "titulo": "Design Thinking: Emprender con IA (40 Preguntas)",
      "categorias": [
        {
          "value": "all",
          "label": "Todas las Fases (40 Preguntas)"
        },
        {
          "value": "cap1",
          "label": "Cap. 1 · Por qué Design Thinking"
        },
        {
          "value": "cap2",
          "label": "Cap. 2 · Fase Empatizar e IA"
        },
        {
          "value": "cap3",
          "label": "Cap. 3 · Fase Definir, JTBD y Filtros"
        },
        {
          "value": "cap4",
          "label": "Cap. 4 · Fase Idear y 3 Lentes"
        },
        {
          "value": "cap5",
          "label": "Cap. 5 · Fase Prototipar"
        },
        {
          "value": "cap6",
          "label": "Cap. 6 · Fase Testear y Métricas"
        },
        {
          "value": "cap7",
          "label": "Cap. 7 · Prototipo al Negocio (Unit Economics)"
        },
        {
          "value": "cap8_11",
          "label": "Cap. 8-11 · Roadmap, Riesgos y Casos"
        },
        {
          "value": "incorrect",
          "label": "Solo Preguntas Erradas"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas (Dudas)"
        }
      ],
      "preguntas": [
        {
          "id": "DT.01",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "Un ingeniero lleva seis meses construyendo una plataforma de pedidos para el restaurante de Rosa, sin haber hablado con ella ni con sus clientes. Al lanzar, obtiene cero descargas. Según el libro, ¿qué diagnóstico es el más acertado?",
          "options": [
            "Confundió el placer de programar con crear valor; construyó sin verificar que el problema existía.",
            "Falló en la ejecución técnica: la plataforma tenía bugs que espantaron a los usuarios.",
            "Eligió mal el canal de distribución: debió lanzar en redes sociales antes que en tiendas de apps.",
            "Le faltó un cofundador de negocio: el ingeniero solitario no puede vender sin un comercial."
          ],
          "correct": 0,
          "feedback": "El libro describe exactamente este caso como 'el síndrome del programador solitario': se confunde el placer de programar con crear valor para alguien. Saltar al código sin investigar es análogo a un médico que receta sin preguntar qué duele. El problema no fue técnico sino de mercado."
        },
        {
          "id": "DT.02",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "El libro compara a un ingeniero que lanza sin investigar con un médico que receta a los 30 segundos sin preguntar qué duele. ¿Qué conclusión pedagógica es la más defendible según el texto?",
          "options": [
            "Ambos casos terminan bien si el profesional tiene suficiente experiencia acumulada.",
            "En ambos casos el riesgo principal es de mercado o de diagnóstico, no de ejecución.",
            "El problema de ambos es la falta de herramientas técnicas actualizadas.",
            "La analogía falla: la medicina tiene protocolos rígidos y el software no los necesita."
          ],
          "correct": 1,
          "feedback": "El libro usa la analogía médica para ilustrar que el riesgo no es técnico sino de diagnóstico: el médico puede recetar perfectamente un medicamento equivocado, y el ingeniero puede programar perfectamente la solución incorrecta. El riesgo central es identificar mal el problema."
        },
        {
          "id": "DT.03",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "Hace una década levantar una plataforma exigía un equipo grande y el riesgo era técnico. Hoy una persona con IA arma un prototipo en una tarde. Según el libro, ¿qué cambio de riesgo describe esa afirmación?",
          "options": [
            "El riesgo técnico desapareció; ahora el único riesgo es legal y regulatorio.",
            "El riesgo pasó de técnico a financiero: los costos de las APIs de IA son impredecibles.",
            "El riesgo pasó de técnico a de mercado: como construir es fácil, el peligro es construir lo equivocado.",
            "El riesgo se mantuvo igual; solo cambió quién puede asumirlo, de equipos a individuos."
          ],
          "correct": 2,
          "feedback": "El libro lo dice literalmente: 'el riesgo pasó a ser de mercado. Como construir es tan fácil, el peligro real es construir lo equivocado.' La facilidad de construcción no elimina el riesgo, sino que lo desplaza desde lo técnico hacia la validación del problema y del mercado."
        },
        {
          "id": "DT.04",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "Un equipo que trabaja con peluquerías formula estas preguntas para sus entrevistas: (P1) '¿Usarías una app de turnos?'; (P2) '¿Cuánto gastas hoy en resolver los turnos perdidos?'; (P3) '¿No te parece que perder turnos es un problema?'; (P4) 'Cuéntame la última vez que un cliente no llegó.' Según el Mom Test aplicado en el libro, ¿cuáles son las dos preguntas correctas?",
          "options": [
            "P1 y P3: son directas y obtienen una respuesta clara en poco tiempo.",
            "P1 y P2: preguntan sobre el futuro y el presente, cubriendo ambos horizontes temporales.",
            "P2 y P4: preguntan por hechos del pasado o por gastos reales, sin sugerir la respuesta.",
            "P3 y P4: la primera contextualiza el problema y la segunda pide un ejemplo concreto."
          ],
          "correct": 2,
          "feedback": "La regla de oro del Mom Test, tal como la describe el libro, es preguntar por el pasado y por hechos, nunca por el futuro ni por opiniones sobre tu idea. P2 ('¿cuánto gastas hoy?') pide datos de comportamiento real. P4 ('cuéntame la última vez') pide un hecho del pasado. P1 y P3 invitan a responder lo que el entrevistado cree que quieres oír."
        },
        {
          "id": "DT.05",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "El ingeniero entrevistó a Rosa y a sus clientes, y pasó dos mediodías observando el local. Descubrió que Rosa pierde casi una hora diaria con un cuaderno y que nadie menciona la app de pedidos que el ingeniero había imaginado. ¿Qué herramienta de empatía complementó la entrevista con un dato que la entrevista sola no habría revelado?",
          "options": [
            "El mapa de afinidad: agrupó respuestas similares de distintos entrevistados.",
            "La observación directa en el ambiente: mostró la diferencia entre lo que Rosa dice y lo que hace.",
            "La inmersi�n: el ingeniero hizo los pedidos como cliente para sentir el dolor en carne propia.",
            "El guion de entrevista del Anexo A: estructuró las preguntas para evitar sesgos de confirmación."
          ],
          "correct": 1,
          "feedback": "El libro describe tres herramientas de empatía: entrevista, observación e inmersión. La observación es la que revela la diferencia entre lo que la persona dice y lo que hace. En el caso de Rosa, las entrevistas le decían que el dolor era de otra índole, pero la observación durante dos mediodías confirmó dónde estaba realmente el problema: el cuaderno de cuentas, no el proceso de pedidos."
        },
        {
          "id": "DT.06",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "Un equipo de cinco estudiantes entrevistó a 12 dueños de librerías y le pidió a Claude que 'simulara' 8 entrevistados más para completar 20 casos. Según el libro, ¿qué conclusión es la más defendible sobre esa decisión?",
          "options": [
            "Es válido si el equipo indica claramente qué datos son reales y cuáles son simulados.",
            "Invalida la evidencia: un usuario inventado no te va a pagar ni a revelar contradicciones reales.",
            "Reduce el esfuerzo sin afectar la calidad porque la IA usa patrones estadísticos reales.",
            "Es aceptable solo para la fase de ideación, no para la de definición del problema."
          ],
          "correct": 1,
          "feedback": "El libro es explícito: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia. Un usuario inventado no te va a pagar.' La IA puede transcribir, agrupar y resumir, pero nunca reemplazar el contacto con personas reales. Los datos simulados dejan la sección de evidencia en cero."
        },
        {
          "id": "DT.07",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "En el mapa de empatía de Rosa, el cuadrante 'dice' registra: «Nunca sé si gané o perdí plata hasta fin de mes». El cuadrante 'hace' muestra que anota compras y ventas en un cuaderno cada noche. ¿Qué valor tiene la contradicción entre ambos cuadrantes, según el libro?",
          "options": [
            "Es la pista más valiosa: revela que Rosa revisa los números diario pero no los entiende como ganancia.",
            "Confirma que Rosa miente: dice que no sabe pero en realidad sí registra los datos.",
            "Es una contradicción inútil porque ambas acciones ocurren en momentos distintos del día.",
            "Indica que la entrevista fue mal hecha y debe repetirse con preguntas más precisas."
          ],
          "correct": 0,
          "feedback": "El libro dice que 'las contradicciones entre cuadrantes son oro'. En el caso de Rosa, dice que no sabe si gana pero hace un registro diario. Eso revela el insight real: el problema no es la falta de datos, sino que el formato del cuaderno no le da la respuesta que busca (ganancia del día). Esa contradicción fue la que orientó toda la solución."
        },
        {
          "id": "DT.08",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo tiene 47 notas de entrevista sobre comerciantes de un mercado municipal. Antes de idear, el facilitador les pide que agrupen las notas por similitud en FigJam. Rosa anota tres: 'no saben cuánto ganan', 'pierden tiempo en el cuaderno', 'tiran comida por comprar de más'. ¿Qué herramienta están aplicando y cuál es su objetivo?",
          "options": [
            "El diagrama de afinidad; el objetivo es que emerjan 3 a 6 temas repetidos entre personas distintas.",
            "El mapa de empatía; el objetivo es identificar qué dice, piensa, hace y siente cada comerciante.",
            "El Lean Canvas; el objetivo es definir el segmento de clientes antes de idear soluciones.",
            "Los cuatro filtros; el objetivo es descartar temas que no cumplan frecuencia e intensidad mínimas."
          ],
          "correct": 0,
          "feedback": "El libro describe el diagrama de afinidad en el Capítulo 3 como el primer paso de la fase Definir: escribir cada hallazgo en un post-it y agruparlos por parecido para que aparezcan 3 a 6 temas que se repiten entre personas distintas. Esos temas son los candidatos a problema central. El mapa de empatía se hace antes, por persona; el diagrama de afinidad cruza personas."
        },
        {
          "id": "DT.09",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo escribe este POV: «Los dueños de restaurantes necesitan una app de contabilidad porque llevan las cuentas en cuadernos». ¿Qué corrección es la adecuada según el libro?",
          "options": [
            "Cambiar 'restaurantes' por un segmento más específico con datos demográficos precisos.",
            "Reemplazar la necesidad por el insight real: el problema es no saber la ganancia diaria, no la herramienta.",
            "El POV ya es correcto: menciona usuario, necesidad y causa observada en campo.",
            "Quitar la causa ('porque') para que el POV no sugiera solución antes de idear."
          ],
          "correct": 1,
          "feedback": "El libro muestra que un POV mal definido tiene la solución disfrazada de necesidad. Escribir 'necesitan una app de contabilidad' ya es una solución, no una necesidad. El insight de Rosa no es la herramienta sino la desconfianza: 'no confían en números que no ven todos los días'. El POV correcto plantea la necesidad sin nombrar la tecnología."
        },
        {
          "id": "DT.10",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "De tres preguntas '¿Cómo podríamos...?' generadas por un equipo, ¿cuál es la correcta según los criterios del libro? (1) '¿Cómo podríamos digitalizar la contabilidad de restaurantes?', (2) '¿Cómo podríamos hacer que Rosa sepa cuánto ganó hoy sin escribir nada extra?', (3) '¿Cómo podríamos construir un dashboard en React para restaurantes?'",
          "options": [
            "La (1): es suficientemente amplia para dejar espacio a muchas ideas de solución.",
            "La (3): tiene el mayor nivel de detalle técnico y por eso guía mejor al equipo de ingeniería.",
            "Las tres son válidas para distintas fases: (1) para idear, (2) para prototipar y (3) para construir.",
            "La (2): es concreta sobre el dolor pero no menciona tecnología, dejando abierta la solución."
          ],
          "correct": 3,
          "feedback": "El libro lo explica con el caso de Rosa: la pregunta correcta 'no menciona tecnología. Deja abierta la solución, pero es lo bastante concreta como para saber si la resolviste.' La pregunta demasiado amplia (1) produce ideas genéricas. La pregunta técnica (3) ya es una solución, no una invitación a idear."
        },
        {
          "id": "DT.11",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo evalúa el problema 'elegir qué ropa ponerse cada mañana' con los cuatro filtros. Frecuencia: 5. Intensidad: 1. Gasto actual: 1. Alcance: 4. Total: 11/20. ¿Qué decisión es la más defendible según el libro?",
          "options": [
            "Pasar a ideación: un total de 11/20 supera el umbral mínimo de 10 para emprender.",
            "Refinar el segmento: el alcance es 4, así que hay mercado aunque el problema sea menor.",
            "Descartar el problema: dos filtros sacan 1 o menos, lo que indica que no duele lo suficiente.",
            "Validar con más entrevistas: con 20 casos adicionales la intensidad podría subir a 3."
          ],
          "correct": 2,
          "feedback": "El libro advierte: 'lo que decide son los mínimos: si dos o más filtros sacan 2 o menos, busca otro problema antes de gastar tiempo en ideas.' En este caso la intensidad y el gasto actual son 1, lo que señala que la gente no sufre lo suficiente ni gasta nada en resolverlo. La frecuencia alta engaña: lo frecuente que no duele no se paga."
        },
        {
          "id": "DT.12",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo califica el problema 'saber cuánto gana Rosa al día' así: Frecuencia: 5 (diario), Intensidad: 5 (pierde dinero), Gasto actual: 4 (casi una hora con el cuaderno), Alcance: 5 (miles de restaurantes pequeños). Total: 19/20. El problema 'app para elegir ropa' obtuvo 11/20. ¿Qué explica la diferencia que más engaña a los emprendedores, según el libro?",
          "options": [
            "El alcance: hay más gente eligiendo ropa que usando cuadernos de restaurante.",
            "La frecuencia: los problemas diarios siempre superan a los esporádicos en valor de mercado.",
            "El total: cualquier problema con más de 15 puntos garantiza tracción en el mercado.",
            "La intensidad y el gasto actual: si nadie gasta nada hoy en resolverlo, probablemente no le importa tanto como dice."
          ],
          "correct": 3,
          "feedback": "El libro dice literalmente: 'Este último es el filtro que más engaña: si nadie hace nada hoy para resolver algo, probablemente no le importa tanto como dice.' La frecuencia y el alcance de la app de ropa son altos, pero la intensidad es 1 y el gasto actual es 1: nadie paga nada ni dedica tiempo. Ese es el engaño clásico del emprendedor."
        },
        {
          "id": "DT.13",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Jobs to Be Done)",
          "text": "Un equipo describe el trabajo de Rosa así: «Necesita una app que lea facturas por foto». ¿Qué formulación respeta mejor el marco Jobs to Be Done según el libro?",
          "options": [
            "«Necesita que la IA lea sus facturas por foto y le diga el total de gastos del día.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Quiero una aplicación móvil que centralice ventas, compras y ganancia en un solo panel.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Cuando lleva las cuentas, Rosa quiere un sistema contable digital para reemplazar el cuaderno.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Cuando cierro el local cada noche, quiero saber en dos minutos cuánto gané y qué comprar mañana, para no perder plata ni tirar comida.»"
          ],
          "correct": 3,
          "feedback": "El libro muestra la fórmula de JTBD: 'Cuando [situación], quiero [motivación], para [resultado esperado]'. Esta formulación cumple exactamente la estructura: define la situación ('cuando cierro el local'), la motivación ('quiero saber en dos minutos cuánto gané') y el resultado esperado ('para no perder plata ni tirar comida'). No menciona tecnología ni soluciones técnicas; se enfoca en el progreso que el usuario busca."
        },
        {
          "id": "DT.14",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "En una sesión de Crazy 8s con el caso de Rosa, un integrante propone conectar la caja registradora al sistema. Otro critica de inmediato: 'Rosa no tiene caja electrónica, eso no sirve'. ¿Qué juicio es el más acertado según las reglas del libro?",
          "options": [
            "La crítica fue correcta y oportuna: descartó una idea inviable antes de perder tiempo.",
            "La crítica violó una regla básica de ideación: durante la generación no se critica nada.",
            "La crítica fue válida porque el libro dice que las ideas absurdas solo retrasan el proceso.",
            "Ambos actuaron bien: el primero ideó y el segundo aplicó el filtro de factibilidad en tiempo real."
          ],
          "correct": 1,
          "feedback": "El libro dice explícitamente: 'Durante la generación no se critica nada. Se busca cantidad, se construye sobre las ideas de otros y se permiten ideas absurdas, porque a veces una idea loca, ajustada, termina siendo la ganadora.' La evaluación viene después de la generación. Criticar en la generación mata la energía creativa del equipo."
        },
        {
          "id": "DT.15",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "El equipo generó 34 ideas para el caso de Rosa. La restricción 'solo por WhatsApp' fue la que desbloqueó la solución ganadora. Según el libro, ¿por qué esta restricción funcionó mejor que las otras?",
          "options": [
            "Porque WhatsApp tiene la mayor base de usuarios en Ecuador, garantizando adopción masiva.",
            "Porque es la plataforma más barata para integrar APIs de IA según los precios de mercado actuales.",
            "Porque coincidía con lo que Rosa ya hace todo el día: pasa horas en WhatsApp con sus proveedores.",
            "Porque el libro recomienda WhatsApp como canal primario para negocios B2C en Latinoamérica."
          ],
          "correct": 2,
          "feedback": "El libro lo explica: 'La restricción «solo por WhatsApp» fue la que destrabó todo, porque coincide con lo que Rosa ya hace todo el día: pasa horas en WhatsApp hablando con sus proveedores de verduras y carne.' La restricción ganó por la evidencia de las entrevistas, no por estadísticas de mercado. Es un ejemplo de que el insight de campo supera al análisis de datos."
        },
        {
          "id": "DT.16",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "Cuatro ideas del equipo de Rosa sobre la matriz impacto-esfuerzo: (I1) nota de voz y resumen nocturno, impacto 5 esfuerzo 2; (I2) foto de factura leída por IA, impacto 5 esfuerzo 4; (I3) copia semanal al contador, impacto 2 esfuerzo 1; (I4) tablero en tablet para la cocina, impacto 2 esfuerzo 4. ¿Cuál es la acción correcta para cada idea, según el libro?",
          "options": [
            "I1 descártala, I2 planifícala, I3 hazla primero, I4 mejora rápida.",
            "I1 y I2 hazlas primero porque ambas tienen impacto 5, I3 e I4 descártalas.",
            "I2 hazla primero por su mayor impacto técnico, I1 planifícala, I3 e I4 descártalas.",
            "I1 hazla primero, I2 planifícala, I3 mejora rápida, I4 descártala."
          ],
          "correct": 3,
          "feedback": "Según el libro, la lógica de la matriz es: mucho impacto + poco esfuerzo = hazlo primero (I1); mucho impacto + mucho esfuerzo = planifícalo (I2); poco impacto + poco esfuerzo = mejora rápida (I3); poco impacto + mucho esfuerzo = descártalo (I4). I1 es la nota de voz, que el caso describe como la ganadora inicial."
        },
        {
          "id": "DT.17",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (Tres Lentes)",
          "text": "Tras el Crazy 8s del caso de Rosa, la idea 'app de contabilidad' quedó en el cuadrante 'mucho impacto, mucho esfuerzo'. Al aplicarle las tres lentes, el resultado es: Deseable = 1 (Rosa no usa las que ya existen), Factible = 5, Viable = 3. ¿Qué acción recomienda el libro para esta idea?",
          "options": [
            "Lanzarla igual: la factibilidad técnica garantiza el éxito a largo plazo si se invierte en marketing.",
            "Descartarla definitivamente: fallar en cualquier lente implica volver a la fase de empatizar.",
            "No se descarta: falla en la lente de deseable, así que se ajusta el segmento o la propuesta de valor.",
            "Pivotar hacia B2B: las apps de contabilidad funcionan con empresas grandes, no con restaurantes."
          ],
          "correct": 2,
          "feedback": "El libro dice: 'Si una idea falla en una lente, no se descarta: se ajusta. Si falla en dos, vuelve a la matriz.' La app falla solo en Deseable (Rosa no la usa). La acción correcta es ajustar: cambiar el formato, el segmento o la propuesta de valor. Descartar definitivamente sería prematuro con solo una lente fallida."
        },
        {
          "id": "DT.18",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo quiere saber si los dueños de talleres mecánicos entenderían, sin ayuda, cómo registrar un pedido de repuesto en tres pantallas. Tiene 5 días y cero presupuesto. ¿Qué nivel de prototipo resuelve esa duda con el menor esfuerzo, según la tabla del libro?",
          "options": [
            "Maqueta clickable en Figma: verifica si entienden la interfaz sin explicación, en un día.",
            "MVP funcional con no-code (Bubble): permite probar el flujo real con datos verdaderos.",
            "Concierge: el equipo hace manualmente cada pedido para comprobar si los talleres pagan.",
            "Mago de Oz: un integrante responde a mano para simular la IA y comprobar si el servicio genera valor."
          ],
          "correct": 0,
          "feedback": "El libro muestra la tabla de niveles de fidelidad. La maqueta clickable (Figma o equivalente) sirve específicamente para aprender 'si entienden la interfaz sin explicación' y toma un día. El MVP funcional tomaría semanas; el Concierge respondería si pagan, no si entienden la interfaz; el Mago de Oz respondería si el servicio genera valor antes de automatizar."
        },
        {
          "id": "DT.19",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "El primer prototipo del caso de Rosa fue un Mago de Oz: ella enviaba por WhatsApp la foto de la factura y una nota de voz, y el ingeniero respondía a mano con la ganancia del día. Costo: cero. Tiempo: una tarde. ¿Qué pregunta concreta respondía ese prototipo?",
          "options": [
            "¿El formato de tres líneas (ganancia, plato top, compras mañana) genera valor real antes de automatizar?",
            "¿El servicio es técnicamente escalable con una API de IA real a 500 restaurantes?",
            "¿Rosa pagaría $15 al mes si tuviera la versión automatizada con n8n y WhatsApp Business?",
            "¿Cuántos restaurantes más recomendaría Rosa si el servicio funcionara bien por un mes?"
          ],
          "correct": 0,
          "feedback": "El libro describe el Mago de Oz como el nivel que responde 'si el servicio genera valor antes de automatizarlo'. En el caso de Rosa, la pregunta era si el formato de tres líneas nocturnas era lo que ella quería, antes de gastar un dólar en servidores o integraciones. Las preguntas de escalabilidad (A), precio (C) y referidos (D) son del nivel MVP y de la fase de negocio."
        },
        {
          "id": "DT.20",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo construyó en dos semanas un MVP funcional con login con redes sociales, modo oscuro, panel de administración y reporte mensual. Su primer usuario aún no existe. Según el libro, ¿qué diagnóstico es el correcto?",
          "options": [
            "El equipo fue eficiente: construir todo desde el inicio evita rediseñar funciones después.",
            "Faltó investigación de mercado: deberían publicar una landing page antes de construir.",
            "El MVP no es mínimo: tiene funciones que no responden ninguna pregunta de aprendizaje urgente.",
            "El error fue tecnológico: eligieron un stack demasiado complejo para un equipo sin experiencia."
          ],
          "correct": 2,
          "feedback": "El libro dice: 'Si tu MVP tiene login con redes sociales, modo oscuro y panel de administración antes de tener un usuario, no es mínimo.' Mínimo significa una sola función central que resuelva el dolor principal. El error no fue tecnológico ni de investigación: fue confundir el MVP con el producto terminado, construyendo funciones que no responden preguntas de aprendizaje."
        },
        {
          "id": "DT.21",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Durante la prueba del prototipo con Rosa, el facilitador le da la tarea 'registra lo que compraste hoy' y observa en silencio. Rosa toca tres veces un botón equivocado y dice 'esto es confuso'. El facilitador anota: 'el prototipo falló, no Rosa'. ¿Qué principio del libro aplica esa anotación?",
          "options": [
            "La prueba no evalúa al usuario; evalúa la idea. Si alguien se confunde, el prototipo falló.",
            "El principio de neutralidad: el facilitador no debe defender ni atacar al prototipo.",
            "El principio de observación pasiva: el facilitador nunca interviene aunque el usuario se equivoque.",
            "El principio de métricas: solo cuenta la tasa de error, no la opinión del usuario."
          ],
          "correct": 0,
          "feedback": "El libro lo dice con precisión: 'La prueba no evalúa al usuario, evalúa tu idea. Si alguien se confunde, el error es del diseño, no del usuario.' Esta opción es la que refleja este principio pedagógico. Culpar al usuario de 'no ser el perfil' o 'no entender' invalida el aprendizaje de la prueba."
        },
        {
          "id": "DT.22",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Tras cuatro semanas del MVP con Rosa y 11 restaurantes más, 9 siguen usando el sistema. Los dueños piden el resumen a las 10 p. m., no a las 9; el dato más valorado es 'qué comprar mañana'; dos piden que llegue también al contador. Siete aceptan pagar $15. ¿Qué acción es la más adecuada según el libro?",
          "options": [
            "Pivotar: el dato de 'qué comprar mañana' no era el valor central del diseño original, así que hay que volver a empatizar.",
            "Parar: solo 7 de 12 aceptan pagar, lo que está por debajo del mínimo aceptable para continuar.",
            "Escalar directamente a los 300 restaurantes de Quito: 9 de 12 es retención suficiente para crecer.",
            "Iterar: la idea funciona y hay datos nuevos (hora, dato favorito, contador) para ajustar detalles."
          ],
          "correct": 3,
          "feedback": "El libro describe tres caminos después de testear: 'Iteras cuando la idea funciona pero hay que ajustar detalles. Pivotas cuando descubres que el valor está en otro lado y cambias una parte grande.' Los datos muestran que la idea funciona (9 de 12 retienen, 7 pagan), con ajustes de detalle (hora, dato top, contador). No es un cambio de dirección grande, sino ajuste de detalles: iterar."
        },
        {
          "id": "DT.23",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "El equipo de CierreYa define como meta inicial de activación que el 60 % de nuevos restaurantes reciba su primer resumen. Tras el primer mes, solo el 35 % lo recibió. ¿Qué paso sigue según el marco de testeo del libro?",
          "options": [
            "Escalar el gasto en adquisición: más restaurantes compensarán el bajo porcentaje de activación.",
            "Cambiar la métrica de éxito: el 35 % es un resultado razonable para un MVP en fase temprana.",
            "Analizar dónde abandona la gente antes de recibir el primer resumen y ajustar ese paso.",
            "Parar: el 35 % está 25 puntos por debajo de la meta y eso prueba que el producto no funciona."
          ],
          "correct": 2,
          "feedback": "El libro recomienda instrumentar desde el día uno y analizar en qué paso abandona la gente (el embudo de métricas). Si la activación es baja, el problema está en el paso de onboarding, no en la adquisición. Escalar sin arreglar la activación multiplica el desperdicio. Parar sería prematuro sin investigar dónde está el punto de falla."
        },
        {
          "id": "DT.24",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "Doce restaurantes prueban CierreYa un mes. La prueba más honesta de valor real, según el libro, es pedir un compromiso antes de continuar. ¿Cuál de estas opciones representa ese compromiso de la forma más sólida?",
          "options": [
            "Que los 12 respondan una encuesta de satisfacción con puntaje mayor a 8 de 10.",
            "Que al menos 7 paguen $15 por el primer mes o firmen una carta de intención.",
            "Que al menos 7 digan en una entrevista que «les encantó» y «lo recomendarían».",
            "Que los 12 sigan activos en la semana 4 sin que el equipo los contacte."
          ],
          "correct": 1,
          "feedback": "El libro dice: 'La prueba más honesta es pedir dinero o un compromiso real: una preventa, un pago del primer mes, una carta de intención firmada. Si dicen que les encanta pero no pagan ni $5, todavía no tienes un negocio.' Las encuestas de satisfacción (A) y los cumplidos en entrevista (B) son 'opiniones que valen poco'. El uso sostenido (D) mide retención, no disposición a pagar."
        },
        {
          "id": "DT.25",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Lean Canvas)",
          "text": "El equipo de CierreYa llena el bloque 'Ventaja injusta' del Lean Canvas con: 'Nuestro equipo es apasionado y trabaja 16 horas al día'. Según el libro, ¿qué corrección es la adecuada?",
          "options": [
            "La pasión es una ventaja válida si va acompañada de un fundador con experiencia técnica probada.",
            "La ventaja injusta debe ser algo que no se puede copiar fácilmente; la pasión no cumple eso.",
            "Cambiarla por 'tecnología propia': el software propietario siempre es una ventaja injusta válida.",
            "Moverla al bloque de Equipo: la pasión es un atributo del equipo, no de la propuesta de valor."
          ],
          "correct": 1,
          "feedback": "El Lean Canvas del libro define la Ventaja Injusta como 'lo que no se puede copiar fácil'. Los ejemplos que da son: datos acumulados de precios del mercado y red de referidos. La pasión es copiable el primer día por cualquier competidor. La tecnología propia también puede copiarse con suficiente inversión; los datos acumulados y las redes son más difíciles de replicar."
        },
        {
          "id": "DT.26",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Modelos de ingreso)",
          "text": "CierreYa necesita dinero rápido para pagar los costos de la API en el mes 1. No tiene usuarios todavía. Un inversor propone tres modelos: (M1) suscripción mensual de $15; (M2) pago por uso ($0,50 por resumen enviado); (M3) servicio productizado: 'te instalo el sistema en 7 días por $400'. ¿Cuál es la forma más rápida de facturar, según el libro?",
          "options": [
            "M3: el servicio productizado es la forma más rápida de facturar con alcance y precio fijos.",
            "M1: la suscripción mensual es el modelo más valorado por los inversionistas según el libro.",
            "M2: el pago por uso alinea el costo con el valor entregado y no requiere compromiso del cliente.",
            "Una combinación de M1 y M3: la suscripción da previsibilidad y el servicio da flujo inmediato."
          ],
          "correct": 0,
          "feedback": "El libro dice textualmente: 'Servicio productizado: un servicio con alcance y precio fijos. Es la forma más rápida de facturar.' El M1 (SaaS) da ingresos predecibles pero tarda meses en crecer. El M2 requiere usuarios activos. El M3 permite cobrar una sola vez desde la primera instalación, que es lo que se necesita para cubrir costos iniciales sin base de usuarios."
        },
        {
          "id": "DT.27",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Precio)",
          "text": "El equipo de CierreYa calcula que el servicio le ahorra a Rosa 25 horas al mes (a $3/hora) y le evita tirar $120 de comida. El costo de atender a Rosa es $4 al mes. El libro propone cobrar entre el 10 % y el 20 % del valor generado. ¿Cuál es el rango de precio correcto y por qué el piso es mayor que el costo?",
          "options": [
            "Rango: $10 a $20. El piso es el costo ($4), redondeado; el techo es lo que el mercado tolera.",
            "Rango: $15 a $30. El piso es el costo × 3 y el techo es el 20 % del valor generado.",
            "Rango: $19,50 a $39. El cliente debe sentir que recibe entre 5 y 10 veces lo que paga; el piso es costo ÷ 0,30.",
            "Rango: $4 a $10. El precio siempre se fija entre el costo y un margen razonable del 150 %."
          ],
          "correct": 2,
          "feedback": "El libro calcula para Rosa: valor mensual = 25h × $3 + $120 = $195. Rango = 10 % a 20 % = $19,50 a $39. El precio mínimo es costo ÷ 0,30 = $4 ÷ 0,30 ≈ $13, para mantener un margen bruto de al menos 70 %. El precio final de $15 está dentro del rango ($13 a $39), aunque por debajo del rango estricto del 10 %. El libro justifica el 10-20 % porque el cliente debe sentir que recibe entre 5 y 10 veces lo que paga."
        },
        {
          "id": "DT.28",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (LTV/CAC)",
          "text": "CierreYa cobra $15/mes, tiene un margen bruto de 80 % y una tasa de cancelación mensual de 5 %. Conseguir un restaurante cuesta $40 en tiempo y referidos. El libro usa la fórmula LTV = (precio mensual × margen bruto) ÷ tasa de cancelación. ¿Cuál es la relación LTV/CAC y cómo la califica el libro?",
          "options": [
            "LTV = $240; LTV/CAC = 6. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $180; LTV/CAC = 4,5. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $300; LTV/CAC = 7,5. Es excelente porque supera el doble de la referencia.",
            "LTV = $200; LTV/CAC = 5. Es suficiente para cualquier modelo SaaS en la región."
          ],
          "correct": 0,
          "feedback": "El libro calcula exactamente: LTV = $15 × 0,80 ÷ 0,05 = $240. CAC = $40. LTV/CAC = 6. Y dice: 'la regla de oro es LTV/CAC > 3'. Esta respuesta tiene los dos valores correctos y la conclusión correcta. Un ratio de 6 es excelente para una startup."
        },
        {
          "id": "DT.29",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (LTV/CAC)",
          "text": "Un servicio de tutorías cobra $30/mes, tiene margen bruto del 60 % y tasa de cancelación del 20 % mensual. Conseguir cada estudiante cuesta $35 en publicidad digital. ¿Qué conclusión es la más defendible?",
          "options": [
            "El negocio es viable: LTV = $90, LTV/CAC = 2,57, y con economía de escala mejorará.",
            "El negocio no sobrevive: LTV = $90, LTV/CAC = 2,57; está por debajo de la referencia de 3.",
            "El negocio es viable porque el precio de $30 es mayor al CAC de $35 a largo plazo.",
            "El negocio necesita más datos: con solo una métrica no se puede calificar la viabilidad."
          ],
          "correct": 1,
          "feedback": "LTV = $30 × 0,60 ÷ 0,20 = $90. LTV/CAC = $90 ÷ $35 = 2,57. El libro establece que la referencia es mayor a 3: por debajo, cada cliente cuesta más de lo que rinde. Esta opción identifica correctamente que el ratio 2,57 es inviable con CAC de $35: el negocio quema caja y no sobrevive."
        },
        {
          "id": "DT.30",
          "category": "cap8_11",
          "categoryName": "Cap. 8 — Hoja de ruta (CitaClara)",
          "text": "CitaClara, una app de recordatorios de cita médica, planea lanzar en todas las ciudades de Ecuador desde el primer día para 'no dejar espacio a competidores'. Según el libro y los principios de la hoja de ruta del caso, ¿qué lectura es la más defendible?",
          "options": [
            "Es prematura: lanzar en toda la ciudad antes de dominar un nicho diluye la energía y los recursos.",
            "La estrategia es correcta: el primero que llega a escala en un mercado emergente lo domina.",
            "Es válida si tienen suficiente capital para contratar un equipo de ventas en cada ciudad.",
            "Depende del modelo de ingreso: la cobertura nacional solo es viable con un modelo freemium."
          ],
          "correct": 0,
          "feedback": "El libro describe la hoja de ruta de CitaClara comenzando por un solo nicho (consultorios de medicina general en un solo barrio) antes de expandir. En el libro se aplican los principios de De cero a uno: dominar un nicho pequeño primero. Escalar antes de tener el modelo probado en un nicho diluye recursos. La lógica de 'no dejar espacio' aplica cuando ya tienes tracción comprobada, no al inicio."
        },
        {
          "id": "DT.31",
          "category": "cap8_11",
          "categoryName": "Cap. 9 — Riesgos",
          "text": "El equipo de CitaClara identifica que los médicos podrían negarse a que el sistema contacte a sus pacientes sin autorización. Lo registran en el formato de riesgos en la columna de mitigación como 'hablar con los médicos antes del piloto'. Según el libro, ¿cuándo debía haberse gestionado ese riesgo?",
          "options": [
            "En la fase de testeo: es el momento donde los riesgos legales se confirman con datos reales.",
            "Después del lanzamiento: el mercado indica si la regulación es realmente una barrera.",
            "En la fase 1 (semanas 1-4): los trámites legales y de consentimiento van desde el piloto.",
            "Al obtener el primer pago: un cliente que paga valida que el riesgo legal no es bloqueante."
          ],
          "correct": 2,
          "feedback": "El libro es explícito para el caso de CitaClara: 'Los trámites legales se dejan para el final: saca el RUC y redacta el consentimiento en la fase 1, porque desde el piloto manejas teléfonos y datos de pacientes.' El manejo de datos personales y médicos requiere consentimiento desde la primera prueba, no después. Es un riesgo que debe mitigarse antes de tener el primer paciente en el sistema."
        },
        {
          "id": "DT.32",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo",
          "text": "Un equipo evalúa dos problemas con los cuatro filtros. Problema A: 'coordinar reuniones de equipo remoto'; Problema B: 'cuadrar el inventario de una ferretería al cierre de día'. Cada uno saca: A (Frecuencia 5, Intensidad 2, Gasto actual 1, Alcance 5 = 13), B (Frecuencia 5, Intensidad 5, Gasto actual 4, Alcance 4 = 18). ¿Cuál de las dos afirmaciones sobre los resultados es la más defendible?",
          "options": [
            "El Problema A es viable: 13/20 supera el umbral y la frecuencia alta garantiza adopción.",
            "Ambos pasan: la suma de los dos supera 20 y el libro no establece un umbral individual por filtro.",
            "El Problema A es mejor: el alcance de 5 es el filtro más importante porque define el tamaño del mercado.",
            "El Problema B pasa a ideación y el A se descarta: el A falla en intensidad y gasto actual (ambos ≤ 2)."
          ],
          "correct": 3,
          "feedback": "El libro establece: 'si dos o más filtros sacan 2 o menos, busca otro problema.' El Problema A tiene Intensidad 1 y Gasto actual 1: dos filtros por debajo de 2. Eso lo descarta. El total de 13 engaña porque la frecuencia y el alcance son altos. El Problema B tiene todos los filtros en 4 o más (18/20) y pasa claramente a ideación."
        },
        {
          "id": "DT.33",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo (Precio)",
          "text": "Un equipo calcula que su servicio de IA le ahorra 8 horas semanales a una clínica veterinaria (a $5/hora) y evita llamadas perdidas por valor de $200 al mes. El costo de atender a la clínica es $6 al mes. ¿Cuál es el rango de precio correcto según la fórmula del libro?",
          "options": [
            "Rango: $6 a $12. El precio siempre debe duplicar el costo para garantizar margen.",
            "Rango: $18 a $36. El valor mensual es $200 de llamadas; el tiempo no se considera.",
            "Rango: $36 a $72. El valor mensual es $360; el rango es 10 % a 20 % de ese valor.",
            "Rango: $60 a $120. El precio correcto multiplica el costo por 10 para startups tecnológicas."
          ],
          "correct": 2,
          "feedback": "Siguiendo la fórmula del libro: valor mensual = (8h × 4 semanas × $5) + $200 = $160 + $200 = $360. Rango de precio justo = 10 % a 20 % = $36 a $72. Esta opción aplica correctamente las dos partes de la fórmula: calcula el valor total mensual generado y extrae el rango del 10 % al 20 %."
        },
        {
          "id": "DT.34",
          "category": "cap1",
          "categoryName": "Cap. 11 — Formatos",
          "text": "Un estudiante llena el formato de mapa de empatía de un mecánico y escribe en el cuadrante 'piensa': «Cree que necesita una app de pedidos para ser más eficiente». En el cuadrante 'dice' escribe: «Siempre tardo mucho buscando los repuestos». ¿Qué error identifica el libro en este llenado?",
          "options": [
            "El error está en 'dice': la frase no es textual, sino una paráfrasis del entrevistador.",
            "El error está en 'piensa': el estudiante anotó su propia solución, no lo que el mecánico piensa.",
            "Ambos cuadrantes están mal: el mapa de empatía solo acepta frases literales del entrevistado.",
            "No hay error: 'piensa' puede contener deducciones del equipo basadas en las respuestas observadas."
          ],
          "correct": 1,
          "feedback": "El libro advierte: 'Error frecuente: llenar «piensa» y «siente» con lo que tú pensarías o sentirías en su lugar.' Escribir 'cree que necesita una app de pedidos' es la solución del estudiante disfrazada de pensamiento del mecánico. El cuadrante 'piensa' debe contener lo que se deduce que el mecánico cree, no lo que el estudiante quiere construir. Es la trampa clásica que contamina el proceso desde la empatía."
        },
        {
          "id": "DT.35",
          "category": "cap1",
          "categoryName": "Cap. 11 — Formatos",
          "text": "Un equipo anota en el guion de entrevista, después de hablar con un contador de una PYME, estas tres notas: (N1) 'Le parece que un sistema contable sería útil', (N2) 'Pierde casi 2 horas cada tarde cruzando facturas con la hoja de Excel', (N3) «Nunca cierro el mes antes del día 12». ¿Cuáles son las notas bien escritas según el libro?",
          "options": [
            "N1 y N2: la primera registra su opinión y la segunda un hecho medible.",
            "N2 y N3: ambas son hechos con cifras o frases textuales que se pueden verificar.",
            "Solo N3: es la única frase textual entre comillas, que es el único formato válido.",
            "Las tres son válidas: el libro acepta opiniones, hechos y frases textuales en el guion."
          ],
          "correct": 1,
          "feedback": "El libro muestra la tabla de notas bien y mal escritas. Las notas bien escritas tienen hechos con cifras (N2: 'casi 2 horas cada tarde') o frases textuales entre comillas (N3: «Nunca cierro el mes antes del día 12»). N1 ('le parece que sería útil') es exactamente el ejemplo de nota mal escrita que el libro da: 'Le parece que una app sería útil'. El error es anotar la interpretación en vez de lo que dijo."
        },
        {
          "id": "DT.36",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar (IA en el proceso)",
          "text": "Un equipo está en la fase de empatía y propone este flujo de trabajo con IA: (1) graba las entrevistas con permiso; (2) transcribe con Whisper; (3) le pide a Claude que resuma cada entrevista y agrupe frases repetidas; (4) le pide a Claude que simule dos entrevistados adicionales para completar 10. ¿Qué paso viola el uso correcto de la IA según el libro?",
          "options": [
            "El paso (2): Whisper comete errores de transcripción que sesgan el análisis posterior.",
            "El paso (3): la IA puede inventar grupos que no existen en los datos reales.",
            "Los pasos (2) y (3): toda la transcripción y el resumen deben hacerse a mano para no perder matices.",
            "El paso (4): simular usuarios es el único uso de IA que el libro prohíbe explícitamente en empatía."
          ],
          "correct": 3,
          "feedback": "El libro acepta el uso de IA para transcribir, resumir y agrupar (pasos 1-3), pero dice textualmente: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia.' El paso (4) es el único prohibido. Un usuario inventado no paga, no muestra contradicciones reales y deja la evidencia en cero."
        },
        {
          "id": "DT.37",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (IA como compañera)",
          "text": "Un equipo le pide a Claude 30 ideas para su pregunta '¿Cómo podríamos...?'. Claude devuelve una lista con soluciones muy similares entre sí y ninguna usa el insight de las entrevistas (que Rosa desconfía del software). Según el libro, ¿qué ajuste es el más adecuado?",
          "options": [
            "Cambiar de modelo: GPT-4 genera ideas más diversas que Claude en tareas de ideación.",
            "Descartar la lista de la IA y hacer solo un Crazy 8s manual para recuperar la creatividad.",
            "Aceptar la lista: la IA propone lo que el mercado ya conoce, que es la base más segura para empezar.",
            "Pedir 30 ideas más que 'no se parezcan a las anteriores' y aportar el insight de las entrevistas."
          ],
          "correct": 3,
          "feedback": "El libro dice: 'la IA tiende a proponer lo promedio. Tú aportas el insight que viene de tus entrevistas; y no te quedes con la primera lista, insiste. Pídele 30 ideas más que no se parezcan a las anteriores, luego que aplique SCAMPER a tu mejor idea.' El insight de la desconfianza de Rosa hacia el software es el diferenciador que la IA no tiene; el equipo debe inyectarlo."
        },
        {
          "id": "DT.38",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar (Herramientas)",
          "text": "Un equipo quiere construir un MVP de automatización que conecte WhatsApp con un modelo de IA para leer notas de voz y responder con un resumen. No quieren escribir código de servidor. Según la lista de herramientas del libro para 2026, ¿qué combinación es la más adecuada?",
          "options": [
            "n8n o Make + WhatsApp Business API + modelo de IA para voz a texto: automatización sin servidor propio.",
            "React Native + Firebase + OpenAI API: el stack más completo para apps móviles con IA.",
            "Bubble + Typeform + Zapier: herramientas no-code para captar datos sin programación.",
            "Flutter + Supabase + Claude API: código asistido con base de datos lista y autenticación incluida."
          ],
          "correct": 0,
          "feedback": "El libro lista específicamente: 'Automatización: n8n, Make o Zapier para conectar WhatsApp, correo, hojas y modelos de IA sin servidor propio.' Y el caso de Rosa lo confirma: el MVP funcional usó 'n8n, la API de WhatsApp Business, un modelo de IA para leer facturas y notas de voz, y una hoja de Google como base de datos. Dos semanas de trabajo.' Bubble (C) es para apps web; Flutter/React Native (A y D) requieren código y servidor."
        },
        {
          "id": "DT.39",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Prueba con usuarios)",
          "text": "Un facilitador prueba el prototipo de CitaClara con cinco médicos. Cuando uno no sabe cómo avanzar en la pantalla de confirmar cita, el facilitador dice: 'toca el botón verde'. Según el libro, ¿qué error cometió el facilitador?",
          "options": [
            "Ninguno: ayudar al usuario en una prueba de concepto es parte del método concierge.",
            "Eligió mal la tarea: debió decirle 'confirma la cita' en lugar de 'toca el botón verde'.",
            "Interrumpió el pensamiento en voz alta: el facilitador debe esperar al final para hacer preguntas.",
            "Violó la regla de observar sin ayudar: cuando el usuario pide ayuda, la respuesta correcta es devolverle la pregunta."
          ],
          "correct": 3,
          "feedback": "El libro es explícito en el paso 4 de la prueba: 'Calla. Cuando quiera ayuda, devuélvele la pregunta: «¿qué crees que deberías hacer?».' Dar la respuesta al usuario elimina el aprendizaje sobre usabilidad. Si el médico no encontró el botón verde, ese es exactamente el dato que el equipo necesita para mejorar el diseño. Ayudar invalida ese dato."
        },
        {
          "id": "DT.40",
          "category": "cap8_11",
          "categoryName": "Integrador — Caso CitaClara",
          "text": "CitaClara atiende recordatorios de citas médicas. Su meta de la semana 8 es tener 10 consultorios activos que paguen $20/mes. Al cerrar la semana 8 tienen 7 que pagan y 3 que usan gratis porque 'quieren ver más funciones antes de comprometerse'. Su margen bruto es 75 % y la cancelación mensual es 8 %. Según el libro, ¿qué decisión es la más defendible?",
          "options": [
            "Continuar: 7 de 10 que pagan es el 70 %, lo que supera cualquier referencia de conversión a pago del libro.",
            "Agregar las funciones pedidas: si 3 consultorios esperan más funciones para pagar, la prioridad es construirlas.",
            "Escalar a otros barrios: 7 pagadores en la semana 8 es tracción suficiente para salir del nicho inicial.",
            "Analizar si los 3 'gratis' son señal de un problema de precio o de valor; calcular LTV con los 7 que sí pagan."
          ],
          "correct": 3,
          "feedback": "El libro enseña a distinguir entre señales de valor y señales de precio. Los 3 que piden 'más funciones' antes de pagar pueden ser: (a) usuarios que valoran el producto pero no al precio actual (problema de precio) o (b) usuarios que no ven el valor suficiente (problema de propuesta de valor). LTV de los 7 que sí pagan = $20 × 0,75 ÷ 0,08 = $187,50. Ese dato orienta si escalar o ajustar. Construir funciones sin saber la causa es la trampa del ingeniero que salta al código sin investigar."
        }
      ]
    },
    {
      "id": "formatos_dt_56",
      "titulo": "Formatos Design Thinking PUCE (56 Preguntas)",
      "categorias": [
        {
          "value": "all",
          "label": "Todos los Formatos (56 Preguntas)"
        },
        {
          "value": "incorrect",
          "label": "Solo Preguntas Erradas"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas (Dudas)"
        },
        {
          "value": "fmt1",
          "label": "Formato 1 — Guion de entrevista (The Mom Test)"
        },
        {
          "value": "fmt2",
          "label": "Formato 2 — Mapa de empatia"
        },
        {
          "value": "fmt3",
          "label": "Formato 3 — Ficha de persona"
        },
        {
          "value": "fmt4",
          "label": "Formato 4 — Del hallazgo al insight"
        },
        {
          "value": "fmt5",
          "label": "Formato 5 — JTBD, POV y Como podriamos"
        },
        {
          "value": "fmt6",
          "label": "Formato 6 — Los cuatro filtros"
        },
        {
          "value": "fmt7",
          "label": "Formato 7 — Crazy 8s"
        },
        {
          "value": "fmt8",
          "label": "Formato 8 — SCAMPER"
        },
        {
          "value": "fmt9",
          "label": "Formato 9 — Matriz impacto-esfuerzo y tres lentes"
        },
        {
          "value": "fmt10",
          "label": "Formato 10 — Plan de prototipo Mago de Oz"
        },
        {
          "value": "fmt11",
          "label": "Formato 11 — Registro de prueba con usuarios"
        },
        {
          "value": "fmt12",
          "label": "Formato 12 — Lean Canvas"
        },
        {
          "value": "fmt13",
          "label": "Formato 13 — Calculo de precio y LTV/CAC"
        },
        {
          "value": "fmt14",
          "label": "Formato 14 — Registro de riesgos"
        }
      ],
      "preguntas": [
        {
          "id": "F01.01",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo que trabaja con veterinarias redacta cuatro preguntas: P1 Usarias una app que avise cuando vacunar a tu mascota; P2 Cuanto gastaste el ultimo ano en visitas de emergencia; P3 No crees que la mayoria de duenos olvida las vacunas; P4 Cuentame la ultima vez que tu mascota tuvo un problema de salud. Segun el Mom Test cuales dos preguntas son correctas?",
          "options": [
            "P2 y P4: preguntan por hechos del pasado y datos reales, sin sugerir la respuesta al entrevistado.",
            "P1 y P3: son directas y obtienen una respuesta clara en poco tiempo de la entrevista realizada.",
            "P1 y P2: cubren el futuro y el presente, los dos horizontes temporales que el Mom Test valida.",
            "P3 y P4: la primera contextualiza el problema y la segunda pide un ejemplo concreto del pasado."
          ],
          "correct": 0,
          "feedback": "El Mom Test exige preguntar por hechos del pasado. P2 pide dato economico real. P4 pide hecho especifico del pasado. P1 pregunta por intencion futura y P3 induce la respuesta deseada."
        },
        {
          "id": "F01.02",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo pregunta a duenos de lavanderias: Cuando fue la ultima vez que un cliente se quejo porque su ropa salio tarde. El entrevistado responde: El martes pasado una senora llego a las 6pm y su pedido no estaba; tuvimos que devolverle 12 dolares y perdimos al cliente. Segun el Mom Test que tipo de dato es ese?",
          "options": [
            "Es un cumplido tipo C: el entrevistado revela el problema sin que se lo pidan directamente.",
            "Es dato real del pasado tipo D: muestra conducta verificable, no intencion hipotetica del futuro.",
            "Es precio hipotetico tipo P: cuantifica el costo del problema con un monto especifico y concreto.",
            "Es abstraccion tipo A: generaliza el comportamiento de todos los duenos de lavanderias del barrio."
          ],
          "correct": 1,
          "feedback": "Un dato tipo D incluye fecha especifica el martes, accion concreta devolucion de 12 dolares y consecuencia real perdida del cliente. A diferencia de una encuesta que mide intencion, este dato evidencia comportamiento ya ocurrido."
        },
        {
          "id": "F01.03",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Al cierre de una entrevista con la duena de una pasteleria el equipo le dice: Muchas gracias su tiempo fue valioso. La entrevistada responde espontaneamente: Seguro que su app seria muy util para nosotros. Segun el Mom Test que diagnostico es el mas acertado?",
          "options": [
            "El equipo revelo su idea antes del cierre y obtuvo un cumplido sin valor; faltaron datos del pasado.",
            "El cierre fue correcto; el comentario espontaneo de la duena equivale a una intencion de compra real.",
            "El error fue no preguntar el precio que pagaria; sin ese dato no hay validacion de demanda economica.",
            "El error fue no grabar la entrevista; los datos verbales sin registro no son verificables como evidencia."
          ],
          "correct": 0,
          "feedback": "El Mom Test advierte: evitar preguntas de intencion futura porque todos dicen que si por cortesia. Seria muy util es un cumplido generico tipo C sin valor. El equipo revelo la idea y recibio validacion social en vez de datos de comportamiento real."
        },
        {
          "id": "F01.04",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Rosa dice en entrevista: Siempre me pasa que al final del dia no se si gane o perdi plata. El equipo anota esta frase como hallazgo principal. Segun el Formato 1 pregunta 4 del guion que pregunta de seguimiento deberia haber hecho inmediatamente despues?",
          "options": [
            "Cuentame la ultima vez que te paso eso que hiciste: pide un hecho concreto del pasado real.",
            "Usarias una app que te de ese resumen automaticamente: explora la solucion propuesta al usuario.",
            "Cuantas personas conoces con este problema: estima el tamano del mercado potencial total.",
            "Pagarias unos 15 dolares al mes por resolverlo: valida la disposicion de pago directamente."
          ],
          "correct": 0,
          "feedback": "La pregunta 4 del guion del Formato 1 pide exactamente: Cuentame la ultima vez que te paso el problema, que hiciste. Obliga al entrevistado a dar un dato del pasado tipo D con fechas, acciones y consecuencias concretas. Las demas preguntan por el futuro o por la solucion, violando el Mom Test."
        },
        {
          "id": "F01.05",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo pregunta a un mecanico: Con que frecuencia pierdes tiempo buscando repuestos. El mecanico responde: Siempre; casi todos los dias sale algo. Segun las categorias del Mom Test C G F P D A cual es el diagnostico correcto?",
          "options": [
            "Es dato real tipo D: la palabra siempre indica una conducta medible y verificable en el tiempo.",
            "Es un cumplido tipo C: el mecanico valida implicitamente el problema sin comprometerse a nada.",
            "Es respuesta generica tipo G: describe lo que suele pasar en general, no un hecho concreto del pasado.",
            "Es abstraccion tipo A: habla del gremio de mecanicos en general, no de su propia experiencia personal."
          ],
          "correct": 2,
          "feedback": "Tipo G Generico describe lo que suele pasar sin anclar a una fecha, lugar o monto concreto. Casi todos los dias sale algo no dice cuando, que repuesto, ni cuanto costo. Un dato tipo D seria: El jueves sali dos horas al norte por un rodamiento y pague 15 dolares en taxi."
        },
        {
          "id": "F02.01",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "Un equipo llena el mapa de empatia de la secretaria de un consultorio dental y escribe en la celda HACE: Dice que prefiere confirmar las citas por WhatsApp porque es mas rapido. Que error cometio el equipo y que debia escribir en esa celda?",
          "options": [
            "El error es usar comillas; en el mapa de empatia las celdas deben ir en tercera persona sin citar al entrevistado.",
            "La frase es correcta para HACE; la distincion entre DICE y HACE no aplica cuando las dos coinciden exactamente.",
            "Coloco en HACE una frase del DICE; en HACE va la conducta observada: llama a cada paciente por telefono antes de las 8am.",
            "Debio colocarla en PIENSA porque revela una creencia interna sobre su herramienta de trabajo diario."
          ],
          "correct": 2,
          "feedback": "La celda HACE registra conductas observadas directamente, no lo que el entrevistado dice que hace. La frase dice que prefiere es una declaracion DICE. El Formato 2 senala que las contradicciones entre lo que la persona dice y lo que hace son las mejores pistas."
        },
        {
          "id": "F02.02",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "En el mapa de empatia de Rosa el equipo detecta: en DICE escribe yo controlo mis numeros y en HACE escribe anota ventas en un cuaderno al final del dia sin revisar nunca el total. Segun el Formato 2 que valor tiene esa contradiccion?",
          "options": [
            "Indica que el equipo entrevisto mal; si hubiese preguntado mejor las celdas no se contradecidrian nunca.",
            "No es relevante; lo que importa es la celda SIENTE que revela la motivacion emocional real del usuario.",
            "Significa que Rosa no es el usuario correcto; el sistema deberia dirigirse al contador externo del restaurante.",
            "Es la mejor pista para un insight: revela por que Rosa no usa software aunque quiera control de sus numeros."
          ],
          "correct": 3,
          "feedback": "El Formato 2 afirma: Las contradicciones entre lo que dice y lo que hace son las mejores pistas. En Rosa, querer control pero no usar Excel revela el insight: no confia en numeros que no puede revisar linea por linea."
        },
        {
          "id": "F02.03",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "Cuatro equipos interpretan el Formato 2 al detectar una contradiccion entre DICE y HACE. Cual de los cuatro equipos usa el formato correctamente?",
          "options": [
            "El equipo B: descarta la contradiccion porque el entrevistado pudo haber malintendido la pregunta del guion.",
            "El equipo C: copia la contradiccion en PIENSA porque refleja la creencia interna mas probable del usuario.",
            "El equipo D: reporta la contradiccion como error de investigacion que invalida toda la entrevista realizada.",
            "El equipo A: anota la contradiccion en el campo Contradicciones y la convierte en entrada para el Formato 4."
          ],
          "correct": 3,
          "feedback": "El Formato 2 tiene un campo explicito de Contradicciones que encontre. La instruccion es anotarlas ahi y usarlas como entrada para el Formato 4 donde se busca el insight. Descartar las contradicciones vacia el mapa de su valor diagnostico principal."
        },
        {
          "id": "F02.04",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "El equipo llena la celda SIENTE del mapa de empatia de un contador con: Presionado porque tiene 40 clientes y cada uno usa una plantilla distinta. Otro equipo dice que la causa pertenece a DOLORES no a SIENTE. Cual tiene razon y por que?",
          "options": [
            "El primer equipo: SIENTE puede incluir contexto porque la emocion no se entiende sin su causa especifica.",
            "El segundo equipo: en SIENTE va la emocion presionado; en DOLORES va la causa 40 clientes plantillas distintas.",
            "Ambos tienen razon: el mapa no requiere distincion estricta entre celdas; lo importante es capturar el dato.",
            "Ninguno: la frase pertenece a DICE si el contador la pronuncio textualmente durante la entrevista realizada."
          ],
          "correct": 1,
          "feedback": "SIENTE captura emociones angustia presion entusiasmo y DOLORES registra causas concretas de frustracion. Mezclarlas hace que el equipo pierda la separacion que permite encontrar el insight: por que una persona sensata se siente asi?"
        },
        {
          "id": "F03.01",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "Un equipo describe a su persona asi: Mujer entre 30 y 50 anos tecnologica emprendedora que valora su tiempo. Que diagnostico es el mas acertado segun el Formato 3?",
          "options": [
            "No sirve: es imaginada no basada en entrevistas; falta ocupacion contexto real y frase textual verificable.",
            "Es suficiente: con la franja etaria y el perfil tecnologico ya se puede avanzar al Formato 5 de JTBD.",
            "Le falta solo la frase textual; los demas campos son validos para una ficha de primera etapa de investigacion.",
            "Es buena para el inicio; se completa con datos reales despues de las primeras tres entrevistas de campo."
          ],
          "correct": 0,
          "feedback": "El Formato 3 advierte: Si un campo no tiene respaldo en una entrevista dejalo vacio y vuelve a preguntar. La descripcion dada no tiene respaldo en ninguna entrevista. Sin ocupacion, contexto ni frase textual real, la ficha no puede conectar con el insight ni con el JTBD."
        },
        {
          "id": "F03.02",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "El Formato 3 exige que si un campo no tiene respaldo en entrevistas se deje vacio. Un equipo llena Tecnologia que usa hoy con probablemente WhatsApp porque no lo preguntaron. Cual es el problema y el paso correcto?",
          "options": [
            "No hay problema; probablemente WhatsApp es una hipotesis valida mientras se valida en campo.",
            "El error es solo la redaccion; basta poner WhatsApp sin el probablemente para que sea valido.",
            "Estan inventando el perfil; deben dejar el campo vacio y agregar esa pregunta a la proxima entrevista.",
            "Pueden deducirlo del segmento: si son pequenos comerciantes WhatsApp es un supuesto seguro y fundado."
          ],
          "correct": 2,
          "feedback": "La instruccion del Formato 3 es terminante: Si un campo no tiene respaldo en una entrevista dejalo vacio. Escribir probablemente convierte un dato de investigacion en una suposicion del equipo que puede sesgar todo el proceso posterior."
        },
        {
          "id": "F03.03",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "Rosa tiene 47 anos duena de un restaurante de 40 mesas con 6 empleados. Anota todo en un cuaderno cada noche y dice: Nunca se si gane o perdi plata hasta fin de mes. En que campo de la Ficha de Persona va esa cita y que aporta que un resumen del equipo no aportaria?",
          "options": [
            "Va en Frase textual que la define: revela la motivacion en palabras del usuario sin filtro del equipo.",
            "Va en Frustraciones: sintetiza el dolor principal del usuario con sus propios terminos emocionales.",
            "Va en Objetivos: expresa directamente lo que Rosa quiere conseguir con una herramienta de control.",
            "Va en Un dia tipico: describe la rutina nocturna de anotacion que la persona vive cada noche al cerrar."
          ],
          "correct": 0,
          "feedback": "El Formato 3 tiene un campo especifico llamado Frase textual que la define. Su valor radica en que esta en las palabras propias del usuario sin filtro del equipo. Una parafrasis del equipo pierde la autenticidad que conecta con la audiencia."
        },
        {
          "id": "F04.01",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Tres de cuatro duenos de restaurantes entrevistados anotan ventas en un cuaderno aunque tienen Excel instalado en el celular. El equipo escribe como insight: Los duenos prefieren el cuaderno porque es mas facil. Que problema tiene esa formulacion?",
          "options": [
            "No es insight sino repeticion del hallazgo; el insight debe explicar por que: No confian en cifras que no pueden revisar linea por linea.",
            "El insight es valido; mas facil es la razon no obvia que la competencia no conoce todavia en el mercado.",
            "El problema es la muestra: con 3 de 4 personas no se puede formular un insight sin mas entrevistas adicionales.",
            "Deberia ir en PIENSA del mapa de empatia, no en el Formato 4, porque es una creencia interna del usuario."
          ],
          "correct": 0,
          "feedback": "El Formato 4 distingue hallazgo de insight con la pregunta: Por que una persona sensata haria esto. El hallazgo es el dato observado. El insight es la razon no obvia: no confian en numeros que no pueden revisar linea por linea. Es mas facil es otra descripcion del sintoma, no la causa raiz."
        },
        {
          "id": "F04.02",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Un equipo trabaja con peluquerias y observa que los duenos cobran en efectivo aunque pierden de 15 a 30 minutos diarios contando billetes. Cual de las cuatro opciones es el insight y no un hallazgo repetido?",
          "options": [
            "Los duenos de peluqueria usan efectivo y pierden de 15 a 30 minutos diarios haciendo el cuadre de caja.",
            "Desconfian de los lectores de tarjeta porque creen que los datos del cliente quedaran expuestos a terceros.",
            "El 80 por ciento de los clientes entrevistados paga en efectivo segun el conteo del equipo de campo.",
            "La mayoria de duenos prefiere efectivo porque les resulta mas comodo que aprender nueva tecnologia digital."
          ],
          "correct": 1,
          "feedback": "El hallazgo es lo observado: cobran en efectivo mas pierden 15-30 min. El insight es la razon no obvia: Desconfian de la exposicion de datos. Esa razon sorprende y abre una oportunidad de diseno real. Las demas opciones reformulan el hallazgo observado."
        },
        {
          "id": "F04.03",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "El equipo detecta el hallazgo: 5 de 6 mecanicos guardan pedidos de repuestos en notas de WhatsApp no en el sistema de inventario. El instructor dice que eso es hallazgo no insight. Por que y cual seria el insight correcto?",
          "options": [
            "El instructor se equivoca: un hallazgo cuantificado con 5 de 6 personas ya es un insight valido y accionable.",
            "Para ser insight basta agregar la contradiccion: guardan en WhatsApp aunque tienen sistema instalado.",
            "El hallazgo describe lo observado; el insight explica la causa: El sistema exige datos que el mecanico no tiene en el momento del pedido.",
            "El insight requiere la pregunta como podriamos al final; sin ella es solo un hallazgo parcial."
          ],
          "correct": 2,
          "feedback": "El Formato 4 dice: Un hallazgo es un dato; un insight es la razon no obvia que la competencia no conoce. 5 de 6 es un conteo. El insight responde POR QUE: el sistema exige numero de parte exacto que el mecanico no tiene hasta ver el repuesto en persona."
        },
        {
          "id": "F04.04",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Antes de llenar el Formato 4 el equipo agrupa 12 notas de entrevista en tres categorias con un diagrama de afinidad: tiempo perdido dinero perdido y verguenza. Para que sirve ese agrupamiento dentro del proceso del Formato 4?",
          "options": [
            "Para calcular el puntaje de Frecuencia del Formato 6 antes de decidir si el problema vale la pena abordar.",
            "Para dividir el trabajo: cada integrante analiza una categoria de manera independiente y separada del equipo.",
            "Para identificar que hallazgo se repite en mas entrevistas y merece el esfuerzo de explicar su por que.",
            "Para decidir cual de los tres dolores fue mencionado con mayor carga emocional en las entrevistas hechas."
          ],
          "correct": 2,
          "feedback": "El Formato 4 instruye: Agrupa primero los hallazgos repetidos diagrama de afinidad. El proposito es encontrar el patron con mas respaldo empirico antes de buscar la explicacion insight. Un hallazgo en 7 de 10 entrevistas merece mas analisis que uno que aparecio una sola vez."
        },
        {
          "id": "F05.01",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo formula el JTBD de una madre asi: Cuando estoy en el grupo de WhatsApp del colegio quiero una app con notificaciones inteligentes para no perderme los avisos de tareas. Que diagnostico es el mas acertado?",
          "options": [
            "Falla porque menciona tecnologia: una app con notificaciones es la solucion no el trabajo por hacer.",
            "Es correcta: tiene las tres partes de la formula situacion motivacion resultado y sigue la estructura.",
            "El error es solo el resultado; deberia decir para estar tranquila no una funcion de la aplicacion.",
            "Es valida en esta etapa; el Formato 5 permite mencionar tecnologia si el usuario ya la usa habitualmente."
          ],
          "correct": 0,
          "feedback": "El Formato 5 tiene una lista de verificacion: No menciona tecnologia nada de una app ni un dashboard. El JTBD describe el trabajo que la persona necesita hacer no la solucion. Version correcta: Cuando reviso el grupo del colegio quiero saber que debe llevar mi hijo manana para no pasarme el dia pendiente del celular."
        },
        {
          "id": "F05.02",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Rosa cierra su restaurante cada noche y quiere saber en dos minutos cuanto gano y que comprar manana. El equipo formula el POV: Duenos de restaurantes necesitan una app de contabilidad porque no saben sus ganancias. Que correccion es necesaria?",
          "options": [
            "El POV es correcto; no saben sus ganancias es el insight descubierto en las entrevistas realizadas.",
            "El error esta en la necesidad; deberia decir necesitan automatizar el registro para ser mas accionable.",
            "El POV es valido; basta agregar el nombre Rosa al inicio para personalizarlo y cumplir el Formato 5.",
            "El POV debe conectar usuario mas necesidad mas insight: porque no confian en cifras que no pueden revisar linea por linea."
          ],
          "correct": 3,
          "feedback": "La formula del POV es: Usuario necesita necesidad porque insight. No saben sus ganancias sigue siendo el hallazgo. El insight es la razon no obvia: no confian en numeros que no pueden revisar linea por linea. Ademas mencionar una app viola la regla de no mencionar tecnologia."
        },
        {
          "id": "F05.03",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo formula tres versiones de Como podriamos para Rosa: 1 Como podriamos hacer que Rosa sepa cuanto gano sin escribir nada extra; 2 Como podriamos crear una app de contabilidad para restaurantes; 3 Como podriamos digitalizar los restaurantes pequenos de Ecuador. Cual cumple los tres criterios del Formato 5?",
          "options": [
            "La 2: menciona la tecnologia correcta y el segmento exacto donde debe operar la solucion final.",
            "La 3: tiene el mayor alcance de mercado y permite explorar mas soluciones diversas al problema.",
            "La 1: no menciona tecnologia es concreta y no es tan amplia como para ser irresoluble en una sesion.",
            "La 2 y la 1: la primera para el MVP inicial y la segunda para la version completa del producto final."
          ],
          "correct": 2,
          "feedback": "El Formato 5 tiene tres criterios: no menciona tecnologia es concreta y no es tan amplia. La version 1 cumple las tres: no dice app es medible Rosa sabe cuanto gano y esta acotada. La 2 menciona la app y la 3 es demasiado amplia para guiar una sesion de ideacion enfocada."
        },
        {
          "id": "F05.04",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "El equipo de CitaClara redacta: Como podriamos usar inteligencia artificial para confirmar citas medicas. El instructor la rechaza. Por que y cual seria la version correcta segun el Formato 5?",
          "options": [
            "Es demasiado corta; debe incluir el segmento objetivo para que el equipo no se desvie al idear.",
            "Menciona IA que es tecnologia; la correcta seria: Como podriamos hacer que ningun paciente olvide su cita.",
            "El problema es confirmar citas; deberia decir agendar citas para cubrir todo el proceso completo.",
            "Es tecnicamente correcta; el instructor la rechaza porque no menciona el presupuesto disponible del equipo."
          ],
          "correct": 1,
          "feedback": "La lista de verificacion del Formato 5: No menciona tecnologia nada de una app ni un dashboard. La IA es tecnologia. La version correcta se enfoca en el resultado no olvidar la cita sin prescribir como lograrlo permitiendo que los Formatos 7 y 8 generen soluciones diversas."
        },
        {
          "id": "F05.05",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo tiene tres preguntas Como podriamos validas y debe elegir una para el Formato 7 Crazy 8s. Que criterio determina cual pasa primero segun el proceso del documento de formatos?",
          "options": [
            "La que responda directamente al insight mas frecuente y doloroso encontrado en las entrevistas realizadas.",
            "La que el equipo sepa construir con sus habilidades tecnicas actuales disponibles en una semana de trabajo.",
            "La que el mayor numero de integrantes voto al terminar la sesion de definicion del POV compartido.",
            "La que sea mas facil de probar con un Mago de Oz para obtener datos rapidos de comportamiento real."
          ],
          "correct": 0,
          "feedback": "El Formato 5 conecta con el insight del Formato 4. La pregunta que pasa a Idear es la que responde al hallazgo mas frecuente y doloroso garantizando que el equipo resuelva el problema real. La factibilidad se evalua en el Formato 9 tres lentes no antes de idear."
        },
        {
          "id": "F06.01",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Tres problemas detectados en consultorios odontologicos: A se pierden 45 minutos diarios confirmando citas por telefono pagados con horas de secretaria; B la sala de espera a veces huele mal y los pacientes lo comentan; C el dentista olvida actualizar la carpeta fiscal una vez al ano. En la Matriz de Cuatro Filtros cual va a la Zona de Oro?",
          "options": [
            "El B: alta intensidad emocional porque afecta la primera impresion del consultorio con cada paciente nuevo.",
            "El C: alta intensidad porque un problema fiscal puede cerrar el negocio aunque ocurra solo una vez al ano.",
            "El A: alta frecuencia diaria alta intensidad 45 min mas costo real de secretaria y gasto actual verificable.",
            "El B y el C juntos: sumados superan al A en impacto total sobre la reputacion general del consultorio."
          ],
          "correct": 2,
          "feedback": "La Zona de Oro es Alta Frecuencia mas Alta Intensidad. El problema A ocurre diariamente genera costo medible ya existe gasto actual y afecta a todo el segmento. El B es de baja frecuencia. El C es muy baja frecuencia 1 vez por ano. Solo el A cumple los cuatro filtros con puntajes altos."
        },
        {
          "id": "F06.02",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Un equipo puntua el problema los duenos de peluqueria no saben cuanto ganaron hasta las 10 p.m.: Frecuencia 5 Intensidad 3 Gasto actual 2 Alcance 2. Que conclusion es la mas defendible segun el Formato 6?",
          "options": [
            "Pueden seguir: el total de 12 sobre 20 supera el umbral minimo aceptable para avanzar a la fase siguiente.",
            "Deben buscar otro problema: dos filtros sacan 2 lo que activa la regla de descarte del Formato 6.",
            "Solo deben mejorar Alcance: las peluquerias en Ecuador son miles y el puntaje 2 esta subestimado.",
            "Deben ponderar: Frecuencia e Intensidad pesan mas; un 5 y un 3 compensan los dos puntajes bajos."
          ],
          "correct": 1,
          "feedback": "El Formato 6 establece: Si dos o mas filtros sacan 2 o menos busca otro problema. El equipo tiene Gasto actual y Alcance en 2 activando la regla independientemente del total. El total de 12/20 no es la regla; son los puntajes individuales bajos los que determinan el descarte."
        },
        {
          "id": "F06.03",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Equipo 1: Frecuencia 4 Intensidad 4 Gasto actual 3 Alcance 4 total 15/20. Equipo 2: Frecuencia 5 Intensidad 1 Gasto actual 5 Alcance 5 total 16/20. Cual de los dos debe detenerse segun el Formato 6?",
          "options": [
            "Ninguno: ambos superan 14 puntos sobre 20 el umbral documentado para avanzar en el proceso completo.",
            "El equipo 2: tiene Intensidad en 1 lo que activa la regla de descarte aunque los demas filtros sean altos.",
            "El equipo 1: con 15/20 esta mas cerca del limite y tiene mayor riesgo de que el problema no sea viable.",
            "El equipo 2 debe hacer mas entrevistas: Intensidad en 1 puede corregirse con mas datos del segmento."
          ],
          "correct": 1,
          "feedback": "La regla del Formato 6: Si dos o mas filtros sacan 2 o menos busca otro problema. El equipo 2 tiene Intensidad en 1 menor a 2. Un problema frecuente pero de muy baja intensidad es una molestia cronica no una oportunidad de negocio. El total de 16/20 no importa si un filtro falla con puntaje de 1."
        },
        {
          "id": "F06.04",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "El Formato 6 pide calificar Gasto actual con: Ya gasta tiempo o dinero en resolverlo. Para el caso de Rosa que pierde casi una hora diaria anotando en el cuaderno que informacion adicional subiria mas el puntaje de ese filtro?",
          "options": [
            "Que Rosa ya paga a alguien para ayudarle con las cuentas o compra cuadernos especiales cada mes.",
            "Que Rosa lleva 3 anos con ese cuaderno porque la antiguedad del habito confirma la frecuencia del problema.",
            "Que 4 de 4 restaurantes entrevistados tienen el mismo cuaderno porque multiplica el alcance del problema.",
            "Que Rosa dice sentir angustia al cerrar el local porque la emocion sube el puntaje de Intensidad verificada."
          ],
          "correct": 0,
          "feedback": "El filtro Gasto actual busca evidencia de que el usuario ya invierte dinero hoy en resolver el problema. Si Rosa ya paga a alguien o compra insumos especiales ese gasto en dinero prueba disposicion de pago real elevando el puntaje de ese filtro de forma decisiva."
        },
        {
          "id": "F07.01",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Al iniciar los Crazy 8s un equipo escribe descripciones con palabras en vez de dibujar y dedica 4 de los 8 minutos a redactar justificacion de la primera idea. Cual es el diagnostico mas acertado segun el Formato 7?",
          "options": [
            "No hay problema: si el equipo no sabe dibujar las palabras cumplen exactamente el mismo proposito creativo.",
            "El error es solo el tiempo: 4 minutos en una idea impide llegar a 8 pero el formato verbal es igual de valido.",
            "Viola el espiritu pero no la regla: el Formato 7 no especifica dibujar explicitamente solo pide rapidez.",
            "Viola el proposito: dibujar rompe el bloqueo linguistico y fuerza ideas visuales que las palabras inhiben."
          ],
          "correct": 3,
          "feedback": "El Formato 7 especifica: Dibujas no escribes. No se critica nada mientras dibujas. La instruccion de dibujar es intencional: suprime el filtro racional interno. Las palabras activan el juicio y producen ideas mas convencionales. El formato visual es parte del mecanismo no un detalle opcional."
        },
        {
          "id": "F07.02",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Despues de los Crazy 8s el equipo tiene 8 bocetos. El instructor les pide elegir uno para el Formato 9. Cual es el criterio correcto para elegir segun el proceso del documento de formatos?",
          "options": [
            "El boceto que el equipo pueda construir mas rapido con sus habilidades tecnicas actuales esta semana.",
            "El boceto que obtuvo mas votos del equipo al finalizar los 8 minutos de ideacion sin critica alguna.",
            "El boceto que el instructor senale como mas innovador segun su experiencia con otros proyectos similares.",
            "El boceto que mejor responda a la pregunta Como podriamos definida en el Formato 5."
          ],
          "correct": 3,
          "feedback": "El Crazy 8s responde a la pregunta Como podriamos del Formato 5. El criterio de seleccion es la alineacion con esa pregunta que esta anclada al insight mas relevante del Formato 4. La factibilidad tecnica se evalua en el Formato 9 tres lentes no como criterio de seleccion inmediato."
        },
        {
          "id": "F07.03",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Un equipo genera 4 ideas en Crazy 8s: 1 app con dashboard; 2 resumen por WhatsApp a las 9 pm; 3 chatbot integrado a caja registradora; 4 QR en mesa que registra pedidos. Cual principio del Formato 7 respalda no descartar ninguna durante los 8 minutos?",
          "options": [
            "No se critica nada mientras se dibuja: el juicio sobre factibilidad llega en el Formato 9 no durante la ideacion.",
            "Solo pasan las ideas factibles: el equipo debe marcarlas antes de terminar la sesion de Crazy 8s.",
            "Se presenta la mejor idea al instructor para recibir retroalimentacion inmediata y ajustar antes de seguir.",
            "Cada boceto necesita una frase de justificacion antes de pasar al Formato 9 para ser evaluado correctamente."
          ],
          "correct": 0,
          "feedback": "La regla central del Formato 7 es No se critica nada mientras se dibuja. Todas las ideas tienen el mismo estatus durante los 8 minutos. La idea mas absurda puede inspirar la mas brillante. El juicio llega en el Formato 9 donde la Matriz impacto-esfuerzo y las tres lentes filtran las ideas."
        },
        {
          "id": "F08.01",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "El equipo de Rosa aplica la accion E Eliminar del SCAMPER a su idea de app de contabilidad. Cual de las siguientes respuestas aplica correctamente esa accion segun el Formato 8?",
          "options": [
            "Eliminar el modulo de reportes: reduce el tiempo de desarrollo en al menos dos semanas de trabajo.",
            "Eliminar el costo de la API: buscar un proveedor gratuito para bajar el costo por cliente al mes.",
            "Eliminar la pantalla de login: mejora la experiencia de usuario y reduce la tasa de abandono inicial.",
            "Eliminar la app y entregar el servicio por WhatsApp: quita la barrera de instalacion para el usuario."
          ],
          "correct": 3,
          "feedback": "La accion E del SCAMPER pregunta: Que quito sin perder valor. En el ejemplo del Formato 8 la respuesta es exactamente: Eliminar la app todo por WhatsApp. Esto quita la barrera de instalacion sin perder el valor del resumen diario. Las otras opciones eliminan componentes internos del producto."
        },
        {
          "id": "F08.02",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "Aplicando A Adaptar del SCAMPER a CitaClara un equipo propone: Adaptar el modelo de resumen nocturno de los bancos el sistema le escribe al consultorio cada noche con las citas del dia siguiente. Que evalua esa accion y cual es su ventaja frente a las otras seis letras?",
          "options": [
            "Sustituye un componente del sistema; es la mas potente porque reemplaza el elemento mas critico actual.",
            "Copia una practica de otra industria: reduce el riesgo porque ya se sabe que funciona en otro contexto.",
            "Combina dos productos existentes; es la mas creativa porque el resultado no existe en ningun mercado.",
            "Modifica el formato del mensaje; cambia la experiencia sin tocar la logica del negocio subyacente."
          ],
          "correct": 1,
          "feedback": "La accion A del SCAMPER pregunta: Que idea de otra industria puedo copiar. El ejemplo del Formato 8 es: El resumen nocturno de un banco. La ventaja de Adaptar es tomar algo que ya funciona en un contexto diferente reduciendo la incertidumbre de la innovacion."
        },
        {
          "id": "F08.03",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "Un equipo aplica R Reordenar o invertir del SCAMPER a su sistema de pedidos y propone: En vez de que el mecanico busque el repuesto el sistema pregunta que carro esta reparando y genera la lista automaticamente. Por que es un ejemplo valido de la accion R?",
          "options": [
            "Sustituye la interfaz por un formulario de datos tecnicos del vehiculo que se llena automaticamente.",
            "Combina el catalogo de repuestos con el historial del auto uniendo dos fuentes de datos distintas.",
            "Invierte el flujo: antes el mecanico iniciaba la busqueda; ahora el sistema toma la iniciativa del proceso.",
            "Modifica el numero de pasos: reduce de 5 a 2 pasos al simplificar toda la cadena de pedido actual."
          ],
          "correct": 2,
          "feedback": "La accion R pregunta: Que pasa si cambio el orden o lo invierto. El Formato 8 ejemplifica: Que el sistema le escriba a Rosa no ella al sistema. La idea propuesta invierte el mismo principio: el mecanico ya no inicia la busqueda ahora el sistema toma la iniciativa. Es una inversion del flujo."
        },
        {
          "id": "F08.04",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "El instructor revisa el SCAMPER del equipo y nota que las columnas Mis ideas estan vacias en 4 de las 7 acciones. Cual es el diagnostico mas acertado?",
          "options": [
            "Es aceptable: completar S C y A las tres primeras acciones es suficiente para pasar al Formato 9.",
            "El SCAMPER no cumplio su proposito: con 4 acciones vacias no se exploro el espacio de ideas completo.",
            "El equipo debe usar IA para completar las 4 acciones restantes antes de la siguiente sesion del proyecto.",
            "No hay problema: el SCAMPER es una guia no un formulario; se pueden saltar acciones irrelevantes."
          ],
          "correct": 1,
          "feedback": "El Formato 8 tiene 7 acciones porque cada una activa un mecanismo creativo diferente. La accion E puede revelar que el canal entero sobra; la R puede generar el producto mas innovador. Dejar 4 vacias significa usar solo 3 palancas creativas de 7 disponibles reduciendo el espacio de ideas explorado."
        },
        {
          "id": "F09.01",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Un equipo ubica en la matriz tres ideas: A resumen nocturno por WhatsApp bajo esfuerzo y alto impacto; B integracion con caja registradora alto esfuerzo y alto impacto; C cambiar la hora del mensaje bajo esfuerzo y bajo impacto. Cual debe prototiparsela primero y por que?",
          "options": [
            "La A: esta en el cuadrante Hazlo primero que prioriza bajo esfuerzo con alto impacto simultaneamente.",
            "La B: el alto impacto justifica el esfuerzo aunque tome mas tiempo y recursos de implementacion.",
            "La C: el bajo esfuerzo permite aprender algo rapido y ajustar el rumbo antes de pasar a las otras dos.",
            "La A y la C juntas: comparten el bajo esfuerzo y juntas maximizan el aprendizaje inicial de la iteracion."
          ],
          "correct": 0,
          "feedback": "En el Formato 9 el cuadrante Hazlo primero bajo esfuerzo mas alto impacto es la prioridad de prototipado. El ejemplo del documento es exactamente Resumen nocturno por WhatsApp. La B es Planificalo. La C es Mejoras rapidas bajo impacto mas bajo esfuerzo. Solo la A justifica comenzar inmediatamente."
        },
        {
          "id": "F09.02",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Una idea esta en el cuadrante Hazlo primero de la matriz pero falla en el filtro Factible la puedo construir de las tres lentes. Cual es el paso correcto segun el Formato 9?",
          "options": [
            "Pasa a prototipo con restricciones: se construye la parte factible y se deja el resto para fase posterior.",
            "Se revisa la matriz: una idea no factible debe reubicarse en Alto esfuerzo y reevaluarse en el cuadrante.",
            "No pasa a prototipo: si falla cualquiera de las tres lentes la idea se descarta o ajusta antes de construir.",
            "Se acepta si pasa las otras dos: Deseable y Viable pesan mas que Factible en la primera iteracion."
          ],
          "correct": 2,
          "feedback": "El Formato 9 muestra que la columna Pasa a prototipo solo dice Si cuando las tres lentes marcan Si. Si cualquiera falla la respuesta es No. Factible es condicion necesaria: una idea deseada y pagada pero no construible no puede prototipase. Se debe ajustar la idea o descartarla."
        },
        {
          "id": "F09.03",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Las tres lentes de IDEO evaluan: Deseable la quieren Factible la puedo construir y Viable alguien la paga. Un equipo tiene: Deseable Si Factible Si Viable No. Que conclusion es la mas defendible?",
          "options": [
            "La idea pasa igual: si es deseable y factible el modelo de negocio se resuelve despues del lanzamiento.",
            "La idea se descarta definitivamente: si nadie paga no hay mercado y no vale la pena construirla nunca.",
            "La idea pasa con condicion: se lanza gratis para ganar usuarios y luego se monetiza con publicidad.",
            "La idea no pasa a prototipo aun: primero hay que entender quien pagaria y cuanto o ajustar el modelo."
          ],
          "correct": 3,
          "feedback": "El Formato 9 exige que las tres lentes digan Si para que Pasa a prototipo sea afirmativa. Viable No significa que el equipo no sabe quien paga ni cuanto. El paso correcto es resolver eso antes de construir hablando con potenciales clientes sobre precio Formato 13."
        },
        {
          "id": "F09.04",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Un equipo ubica en Descartalo bajo impacto alto esfuerzo la idea app nativa para iPad con modo oscuro autenticacion biometrica y login con Google. El Formato 10 tambien menciona ese tipo de idea con una advertencia. Que principio comparten ambos formatos?",
          "options": [
            "El modo oscuro y la biometria son funciones deseables; el problema real es que iPad tiene bajo mercado.",
            "Las apps nativas tienen alto esfuerzo y siempre deben esperar a que el equipo consiga mas inversion.",
            "Si el impacto no justifica el esfuerzo las funciones premium distraen del problema central a resolver.",
            "La idea puede reubicarse en Planificalo si se elimina el login biometrico y se simplifica la autenticacion."
          ],
          "correct": 2,
          "feedback": "El Formato 9 descarta lo que tiene bajo impacto y alto esfuerzo. El Formato 10 advierte: Si tu MVP tiene modo oscuro y login con Google antes de tener un solo usuario no es minimo. Ambos expresan el principio de Lean Startup: el esfuerzo debe ser proporcional a la hipotesis que se prueba."
        },
        {
          "id": "F10.01",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El equipo de Rosa disena este prototipo: Rosa manda una foto de sus facturas por WhatsApp el equipo las revisa a mano con Claude y le envia un resumen de tres lineas a las 9 p.m. La metrica de exito es responde al menos 5 de 7 noches. Que pregunta responde concretamente este prototipo segun el Formato 10?",
          "options": [
            "Si la IA puede procesar fotos de facturas con exactitud superior al 90 por ciento en condiciones reales.",
            "Si el precio de 15 dolares al mes es aceptable para los duenos de restaurantes del segmento de 40 mesas.",
            "Si Rosa usa el resumen diario y si ese dato le sirve para tomar decisiones de compra al dia siguiente.",
            "Si Rosa recomendaria activamente el servicio a otros duenos de restaurantes conocidos de la zona norte."
          ],
          "correct": 2,
          "feedback": "El Formato 10 inicia con el campo Pregunta que quiero responder. En el ejemplo del documento es exactamente: Rosa usa el resumen diario y le sirve para comprar. El Mago de Oz prueba si el usuario adopta el comportamiento no si la tecnologia funciona tecnicamente."
        },
        {
          "id": "F10.02",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "Un equipo llena el campo Que hago yo detras a mano del Formato 10 con: Programar un script en Python que conecta con la API de OpenAI para procesar los datos automaticamente. Cual es el diagnostico mas acertado?",
          "options": [
            "Es correcto: el script corre en el servidor del equipo y el usuario nunca lo ve cumpliendo la premisa.",
            "Es valido si el script se construye en menos de 4 horas; la complejidad no define el tipo de prototipo.",
            "El error es usar OpenAI: el costo variable impredecible afecta la metrica de costo del Formato 10.",
            "No es un Mago de Oz: si el trabajo de atras requiere programacion ya es un MVP tecnico no simulacion manual."
          ],
          "correct": 3,
          "feedback": "En un Mago de Oz el equipo hace el trabajo a mano; el usuario cree que hay un sistema automatico. Si el cliente sabe que lo atiende una persona, es atencion al cliente manual, a diferencia de un Mago de Oz real donde la interfaz simula total automatizacion."
        },
        {
          "id": "F10.03",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El Formato 10 establece que la metrica de exito debe definirse antes de empezar. El equipo de CitaClara propone medirla segun como vaya saliendo durante las dos semanas del piloto. Cual es el problema con ese enfoque?",
          "options": [
            "Sin metrica previa el equipo inevitablemente ajustara el criterio para que el experimento sea un exito.",
            "No hay problema si el equipo es honesto; la metrica puede afinarse a medida que llegan los datos reales.",
            "El error es el plazo de dos semanas; con mas tiempo el equipo podria definir la metrica con mas datos.",
            "La metrica de exito la debe definir el usuario no el equipo para evitar el sesgo interno del prototipo."
          ],
          "correct": 0,
          "feedback": "Definir la metrica antes de empezar es el principio del Criterio de abandono de Lean Startup. Si se define despues de ver los resultados el equipo inconscientemente mueve el umbral para que la hipotesis sobreviva sesgo de confirmacion. El Formato 10 y el Formato 11 son explicitos en este punto."
        },
        {
          "id": "F10.04",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El equipo de CitaClara disena un Mago de Oz donde la secretaria manda manualmente mensajes de confirmacion de cita desde una plantilla de WhatsApp. Cual de las siguientes metricas de exito cumple los criterios del Formato 10?",
          "options": [
            "Los pacientes estan satisfechos con el servicio de confirmacion del consultorio en la encuesta final.",
            "La secretaria tarda menos tiempo confirmando citas que antes de usar la plantilla de WhatsApp manual.",
            "Al menos 8 de cada 10 pacientes confirman la cita dentro de las 2 horas siguientes al mensaje enviado.",
            "El consultorio reduce el numero de citas perdidas en el siguiente mes completo de operacion normal."
          ],
          "correct": 2,
          "feedback": "Una metrica valida debe ser numerica 8 de 10 medible antes de que termine el experimento en 2 horas y ligada directamente a la hipotesis. Las opciones B C y D son metricas de proceso que no responden la pregunta del prototipo: el usuario adopta el comportamiento que valida la propuesta de valor."
        },
        {
          "id": "F11.01",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El equipo observa a Rosa usando el prototipo y anota: Rosa dijo que le gusta mucho el resumen nocturno y que lo encuentra muy util para su negocio. El instructor tacha esa nota. Cual es el diagnostico correcto?",
          "options": [
            "El error es la redaccion; debe citarse textualmente entre comillas para que la nota sea valida en el registro.",
            "La nota es valida si Rosa la dijo espontaneamente y sin que le preguntaran directamente sobre el servicio.",
            "El instructor se equivoca: las opiniones positivas documentadas ayudan a argumentar el pitch del proyecto.",
            "En el Formato 11 van comportamientos observados no opiniones; lo valido es: Rosa volvio a usarlo 6 de 7 noches."
          ],
          "correct": 3,
          "feedback": "El Formato 11 pide: Anota lo que la gente hace con tu prototipo no lo que opina. La columna clave es el hecho verificable: pago o volvio. El comportamiento real volvio pago predice la adopcion; la opinion positiva no lo hace."
        },
        {
          "id": "F11.02",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El Formato 11 incluye cuatro metricas: Activacion Retencion Conversion a pago y Recomendacion. Un equipo tiene: 20 prueban 14 vuelven la semana siguiente 11 lo recomiendan pero ninguno ha pagado aun. Cual metrica esta en riesgo?",
          "options": [
            "Retencion: 14 de 20 es solo el 70 por ciento justo en el limite; cualquier semana de baja los deja debajo.",
            "Conversion a pago: saben que retienen y recomiendan pero no han probado si alguien pagara por ello.",
            "Activacion: si 20 prueban pero 6 no vuelven esos 6 nunca llegaron al primer momento de valor real.",
            "Recomendacion: 11 de 20 es el 55 por ciento lo que indica que el producto aun no genera entusiasmo genuino."
          ],
          "correct": 1,
          "feedback": "Tener retencion y recomendacion sin ninguna conversion a pago es una senal critica: el producto puede ser valioso gratuitamente pero no sostenible. El Formato 13 LTV/CAC no puede calcularse sin al menos un pago real. La pregunta que el equipo debe hacerse es: Que impediria que alguien pague."
        },
        {
          "id": "F11.03",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "La metrica de exito era 7 de 10 completan la tarea sin ayuda. Solo 4 de 10 lo lograron pero todos fallaron exactamente en el mismo punto: la pantalla 2 del flujo. Segun el Formato 11 cual es la decision mas defendible?",
          "options": [
            "Iterar: el problema esta localizado en un paso especifico no en la propuesta de valor del producto completo.",
            "Pivotar: si mas de la mitad falla la hipotesis de que el producto es usable esta refutada definitivamente.",
            "Parar: un resultado de 4 de 10 con la metrica en 7 demuestra que el producto no es viable para el mercado.",
            "Repetir la prueba con usuarios distintos para confirmar si el problema es de diseno o de muestra estadistica."
          ],
          "correct": 0,
          "feedback": "El Formato 11 ofrece tres opciones: Iterar Pivotar o Parar. Que todos fallen en el mismo punto es senal de un problema de diseno de interfaz pantalla 2 confusa no de propuesta de valor equivocada. Pivotar o Parar implica que la hipotesis central fallo lo que aqui no es el caso."
        },
        {
          "id": "F11.04",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El Formato 11 pide dar al usuario una tarea y pedirle que piense en voz alta sin ayudarle. Un equipo ayuda al tercer usuario porque lleva 5 minutos atascado y parece frustrado. Cual es el diagnostico correcto?",
          "options": [
            "Hicieron bien: un usuario frustrado durante 5 minutos ya aporto datos suficientes para el registro.",
            "Depende: si la ayuda fue minima senalar la pantalla correcta el dato puede conservarse con una nota.",
            "El Formato 11 no prohibe ayudar; prohibe opinar; senalar donde hacer clic no contamina el experimento.",
            "Invalidaron el dato: cada ayuda elimina la evidencia de usabilidad que el Formato 11 busca capturar."
          ],
          "correct": 3,
          "feedback": "El Formato 11 dice: Dale una tarea pidele que piense en voz alta y no la ayudes. Cada ayuda elimina una instancia de dato de usabilidad. El punto donde se tranca el tiempo que tarda y lo que dice son exactamente los datos valiosos. La frustracion visible ES el dato no un problema a resolver en ese momento."
        },
        {
          "id": "F12.01",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "Un equipo llena el bloque 1 Problema del Lean Canvas de CitaClara con: Crear una app de gestion de citas medicas para consultorios pequenos de la ciudad. Que correccion es necesaria?",
          "options": [
            "La descripcion es valida si se anade el segmento objetivo al inicio de la frase para contextualizarla.",
            "El error es la extension; el bloque 1 admite maximo diez palabras descriptivas del problema central.",
            "La frase pertenece al bloque 4 Solucion; basta moverla para que el Canvas quede estructuralmente correcto.",
            "Eso es la solucion no el problema; en el bloque 1 va: Los consultorios pierden el 15 por ciento de citas por falta de confirmacion."
          ],
          "correct": 3,
          "feedback": "El Lean Canvas tiene 9 bloques con funciones distintas. El bloque 1 es el Problema de los clientes. Crear una app describe la solucion no el problema. Colocar la solucion en el bloque de problema indica que el equipo no definio que duele solo que quiere construir."
        },
        {
          "id": "F12.02",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "Ash Maurya diseno el Lean Canvas para llenarlo en 20 minutos y tratar cada bloque como una hipotesis por validar. Cual es la consecuencia practica mas importante de ese principio para el equipo?",
          "options": [
            "Deben completar los 9 bloques antes de hacer una sola entrevista o experimento en campo con usuarios.",
            "Deben actualizar el Canvas cuando la evidencia de campo contradiga cualquiera de los nueve bloques.",
            "El Canvas reemplaza al plan de negocios y no necesita revisarse despues del primer lanzamiento del producto.",
            "Solo los bloques 1 2 y 3 son hipotesis; los demas reflejan datos establecidos del modelo de negocio."
          ],
          "correct": 1,
          "feedback": "El Formato 12 dice: Trata cada bloque como una hipotesis por validar. Si una hipotesis se refuta con datos reales por ejemplo el canal de ventas no funciona el bloque debe actualizarse. El Lean Canvas no es estatico: es un mapa de suposiciones que el equipo va confirmando o descartando con evidencia."
        },
        {
          "id": "F12.03",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "El bloque 8 Metricas clave del Lean Canvas de CierreYa incluye restaurantes activos retencion mensual y resumenes leidos. Un miembro propone agregar numero total de descargas de la app como metrica principal. Que diagnostico es el mas acertado?",
          "options": [
            "Las descargas son metricas de vanidad: miden intencion no comportamiento real de uso o de pago efectivo.",
            "Las descargas son validas como metrica de adquisicion; el problema es que CierreYa opera por WhatsApp.",
            "Las descargas son la metrica de Activacion del Formato 11; colocarlas en el Canvas las duplicaria.",
            "Son utiles en la etapa inicial para demostrar traccion a inversores; luego se reemplazan por metricas reales."
          ],
          "correct": 0,
          "feedback": "Las metricas clave de CierreYa miden comportamiento: activos siguen usando retencion vuelven a pagar y resumenes leidos consumen el valor. Las descargas miden si alguien instalo la app no si la uso ni si pago. Una app con 10000 descargas y 0 usuarios activos tiene metricas de vanidad perfectas."
        },
        {
          "id": "F12.04",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "El bloque 9 Ventaja injusta del Lean Canvas de CierreYa dice: Precios del mercado acumulados y red de referidos. Un miembro dice que la red de referidos deberia ir en el bloque 5 Canales. Cual tiene razon y por que?",
          "options": [
            "El miembro del equipo: los referidos son un canal de adquisicion y pertenecen al bloque 5 de distribucion.",
            "Ambos tienen razon: el Lean Canvas permite que un elemento aparezca en dos bloques si cumple dos funciones.",
            "Ninguno: los referidos pertenecen al bloque 8 Metricas porque la tasa de recomendacion es medible.",
            "El documento original: la red acumulada es una ventaja que la competencia nueva no puede copiar rapidamente."
          ],
          "correct": 3,
          "feedback": "Los referidos como canal bloque 5 son el mecanismo de distribucion actual. Los referidos como ventaja injusta bloque 9 son la red acumulada de clientes satisfechos algo que un competidor nuevo no puede tener de inmediato. Es el activo relacional construido con el tiempo no solo el canal."
        },
        {
          "id": "F13.01",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "CitaClara genera a un consultorio 9 citas confirmadas adicionales al mes a 30 dolares cada cita y ahorra 22 horas de secretaria a 3 dolares la hora. El cobro mensual es 50 dolares. Segun el Formato 13 el precio esta dentro del rango recomendado?",
          "options": [
            "No: 50 dolares supera el 15 por ciento del valor generado 336 por 0.15 igual 50.40 que es el limite superior estricto.",
            "Si pero al limite: 50 dolares es el 85 por ciento del rango maximo y deja poco margen para aumentar el precio despues.",
            "No: las 22 horas de secretaria 66 dolares no deben sumarse porque son costos internos del consultorio mismo.",
            "Si: el valor mensual es 336 dolares; el rango recomendado es 34 a 67 dolares 10 a 20 por ciento del valor y 50 cae dentro."
          ],
          "correct": 3,
          "feedback": "El Formato 13 calcula: Valor mensual igual 9 citas por 30 mas 22h por 3 igual 270 mas 66 igual 336. Rango igual 336 por 0.10 a 336 por 0.20 igual 33.60 a 67.20. El precio de 50 cae dentro. El formato incluye las horas de secretaria porque son dinero real que el consultorio deja de perder."
        },
        {
          "id": "F13.02",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "CitaClara cobra 50 dolares al mes tiene un costo por cliente de 10 dolares y una cancelacion mensual del 5 por ciento. Cual es el LTV correcto y que nos dice sobre la salud del negocio?",
          "options": [
            "1000 dolares: precio 50 dividido cancelacion 5 por ciento sin aplicar el margen bruto al calculo de largo plazo.",
            "500 dolares: diferencia precio-costo 40 dividido cancelacion 5 por ciento sin ponderar por el precio mensual.",
            "800 dolares: precio 50 por margen bruto 80 por ciento dividido cancelacion 5 por ciento; con CAC de 100 LTV/CAC es 8: negocio sano.",
            "480 dolares: precio anual 600 por margen bruto 80 por ciento sin dividir para la cancelacion mensual acumulada."
          ],
          "correct": 2,
          "feedback": "Formula del Formato 13: LTV igual Precio por margen bruto dividido cancelacion mensual. Margen bruto: 50 menos 10 igual 40. LTV igual 40 dividido 0.05 igual 800 dolares. El cálculo correcto deduce el margen bruto real antes de dividir."
        },
        {
          "id": "F13.03",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "El precio minimo segun el Formato 13 se calcula como: Costo por cliente dividido 0.30 para asegurar margen bruto del 70 por ciento. Si el costo por cliente de CierreYa es 5 dolares al mes cual es el precio minimo y que significa?",
          "options": [
            "5 dolares: el precio minimo siempre iguala al costo por cliente; el margen se calcula sobre esa base inicial.",
            "3.50 dolares: el 70 por ciento del costo por cliente es el precio minimo para garantizar la rentabilidad operativa.",
            "16.67 dolares: por debajo de ese valor CierreYa no puede sostener sus costos con el margen minimo del 70 por ciento.",
            "50 dolares: el precio minimo se multiplica por el factor de mercado estandar x10 para el precio de lanzamiento."
          ],
          "correct": 2,
          "feedback": "Formula del Formato 13: Precio minimo igual Costo por cliente dividido 0.30. Para CierreYa: 5 dividido 0.30 igual 16.67. Cobrar menos de 16.67 hace que el margen bruto sea menor al 70 por ciento requerido. En el ejemplo del documento el costo de CitaClara es aprox 10 y el precio minimo es 33 el dato exacto de la tabla."
        },
        {
          "id": "F13.04",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "Un equipo calcula LTV de su cliente en 200 dolares y CAC en 80 dolares. Que conclusion es la mas defendible segun el Formato 13?",
          "options": [
            "LTV/CAC es 2.5: es un buen resultado porque supera 1 lo que garantiza que el negocio no pierde dinero.",
            "LTV/CAC es 2.5: esta por debajo de 3 lo que indica riesgo; deben reducir el CAC o aumentar la retencion.",
            "El CAC debe reducirse a 40 dolares para que LTV/CAC llegue a 5 el estandar ideal de la industria SaaS global.",
            "El dato no es concluyente: solo importa LTV/CAC cuando el negocio tiene mas de 100 clientes activos."
          ],
          "correct": 1,
          "feedback": "El Formato 13 establece: LTV dividido CAC debe ser mayor a 3. Con 200 dividido 80 igual 2.5 el ratio esta por debajo. No significa que el negocio pierde dinero 2.5 mayor a 1 pero el margen de recuperacion de inversion en adquisicion es insuficiente. El equipo tiene dos palancas: aumentar la retencion o reducir el CAC."
        },
        {
          "id": "F13.05",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "Un servicio genera 336 dolares de valor mensual al cliente. La alternativa actual secretaria manual cuesta 90 dolares al mes. El costo por cliente del equipo es 10 dolares. Segun el Formato 13 entre que rango debe estar el precio?",
          "options": [
            "Debe igualarse a la alternativa de 90 dolares para capturar todo el valor diferencial que la competencia deja.",
            "Entre 33 dolares piso 10 dividido 0.30 y 67 dolares 20 por ciento de 336 considerando que la alternativa cuesta 90.",
            "Puede llegar hasta 336 dolares porque ese es el valor total generado y el cliente deberia pagar por el valor real.",
            "Debe ser 10 dolares menos que la alternativa 80 dolares para ganar mercado exclusivamente por diferencial de precio."
          ],
          "correct": 1,
          "feedback": "El Formato 13 establece tres referencias: el piso costo dividido 0.30 igual 33 el techo valor por 0.20 igual 67.20 y la alternativa del cliente 90 dolares. Como la alternativa cuesta 90 y el precio maximo recomendado es 67 cobrar dentro de ese rango es consistente con las tres variables del formato."
        },
        {
          "id": "F14.01",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El Formato 14 clasifica los riesgos en tres tipos: Plataforma Tecnico y Legal. Un equipo agrega el equipo no tiene tiempo para dar soporte el fin de semana y lo clasifica como Tecnico. Cual es el diagnostico mas acertado?",
          "options": [
            "Es correcto clasificarlo como Tecnico porque el soporte depende de la infraestructura del sistema tecnologico.",
            "No es un riesgo relevante para este formato; solo se registran riesgos externos al equipo y al proyecto.",
            "Es un riesgo de Plataforma porque el soporte usa WhatsApp Business que es una herramienta de terceros.",
            "Es un riesgo operativo o de equipo no Tecnico; el Formato 14 cubre fallas de plataformas IA y tramites legales."
          ],
          "correct": 3,
          "feedback": "El Formato 14 documenta tres tipos: Plataforma dependencia de terceros Tecnico la IA puede dar informacion incorrecta y Legal tramites consentimiento. El riesgo de capacidad operativa del equipo no encaja en ninguna categoria del Formato 14: es un riesgo de recursos humanos o gestion de proyecto."
        },
        {
          "id": "F14.02",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El Formato 14 incluye en la Lista de control: Toda conversacion sensible pasa a una persona al instante. Para un proyecto como CitaClara que procesa datos de pacientes con IA por que ese item es el mas critico?",
          "options": [
            "La regulacion ecuatoriana exige revision humana de todos los mensajes de salud antes de enviarlos al usuario.",
            "La IA puede generar informacion medica incorrecta; una persona humana evita que ese error llegue al paciente.",
            "Sin revision humana la IA no puede personalizar el mensaje segun el historial clinico del paciente.",
            "El costo de las APIs aumenta exponencialmente si la IA procesa conversaciones medicas sin limite de tiempo."
          ],
          "correct": 1,
          "feedback": "El Formato 14 lista como riesgo Tecnico: La IA inventa un consejo medico clinico. La accion de prevencion es: Acotarla a un documento base; lo clinico pasa a la recepcionista. Una IA mal configurada puede fabricar informacion medica plausible pero incorrecta alucinaciones generando dano clinico real."
        },
        {
          "id": "F14.03",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El equipo de CierreYa identifica el riesgo Meta bloquea o demora el numero de WhatsApp Business con Probabilidad M media e Impacto A alto. Que accion de prevencion es mas coherente con el ejemplo del Formato 14?",
          "options": [
            "Esperar al lanzamiento para iniciar la aprobacion; Meta aprueba mas rapido cuando hay usuarios activos.",
            "Iniciar la aprobacion del numero en la semana 4 del proyecto y tener un canal de respaldo por SMS o correo.",
            "Usar el numero personal del equipo hasta que Meta apruebe; la transicion es sencilla despues del lanzamiento.",
            "Cambiar el canal principal a Telegram para eliminar completamente la dependencia de las plataformas de Meta."
          ],
          "correct": 1,
          "feedback": "El Formato 14 documenta exactamente ese riesgo con esa accion: Iniciar la aprobacion en la semana 4; solo pacientes que aceptaron; respaldo por SMS o correo. La prevencion combina accion proactiva temprana y canal de respaldo alternativo. Esperar al lanzamiento es el error mas comun: Meta puede tardar semanas."
        }
      ]
    },
    {
      "id": "todos_combinados_132",
      "titulo": "🚀 Examen Completo RDA2 (132 Preguntas)",
      "categorias": [
        {
          "value": "all",
          "label": "Todo el Temario Completo (132 Preguntas)"
        },
        {
          "value": "incorrect",
          "label": "Solo Preguntas Erradas"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas (Dudas)"
        },
        {
          "value": "dt_libro",
          "label": "─── 📘 Libro Design Thinking (40) ───"
        },
        {
          "value": "formatos_p",
          "label": "─── 📋 Formatos DT PUCE (56) ───"
        },
        {
          "value": "canvas_p",
          "label": "─── 📊 Business Model Canvas (36) ───"
        },
        {
          "value": "cap1",
          "label": "Cap. 1 — Por qué Design Thinking"
        },
        {
          "value": "cap2",
          "label": "Cap. 2 — Empatizar"
        },
        {
          "value": "cap3",
          "label": "Cap. 3 — Definir"
        },
        {
          "value": "cap4",
          "label": "Cap. 4 — Idear"
        },
        {
          "value": "cap5",
          "label": "Cap. 5 — Prototipar"
        },
        {
          "value": "cap6",
          "label": "Cap. 6 — Testear"
        },
        {
          "value": "cap7",
          "label": "Cap. 7 — Del prototipo al negocio (Lean Canvas)"
        },
        {
          "value": "cap8_11",
          "label": "Cap. 8 — Hoja de ruta (CitaClara)"
        },
        {
          "value": "fmt1",
          "label": "Formato 1 — Guion de entrevista (The Mom Test)"
        },
        {
          "value": "fmt2",
          "label": "Formato 2 — Mapa de empatia"
        },
        {
          "value": "fmt3",
          "label": "Formato 3 — Ficha de persona"
        },
        {
          "value": "fmt4",
          "label": "Formato 4 — Del hallazgo al insight"
        },
        {
          "value": "fmt5",
          "label": "Formato 5 — JTBD, POV y Como podriamos"
        },
        {
          "value": "fmt6",
          "label": "Formato 6 — Los cuatro filtros"
        },
        {
          "value": "fmt7",
          "label": "Formato 7 — Crazy 8s"
        },
        {
          "value": "fmt8",
          "label": "Formato 8 — SCAMPER"
        },
        {
          "value": "fmt9",
          "label": "Formato 9 — Matriz impacto-esfuerzo y tres lentes"
        },
        {
          "value": "fmt10",
          "label": "Formato 10 — Plan de prototipo Mago de Oz"
        },
        {
          "value": "fmt11",
          "label": "Formato 11 — Registro de prueba con usuarios"
        },
        {
          "value": "fmt12",
          "label": "Formato 12 — Lean Canvas"
        },
        {
          "value": "fmt13",
          "label": "Formato 13 — Calculo de precio y LTV/CAC"
        },
        {
          "value": "fmt14",
          "label": "Formato 14 — Registro de riesgos"
        },
        {
          "value": "bloque1",
          "label": "Bloque 1 — Segmento de Clientes"
        },
        {
          "value": "bloque2",
          "label": "Bloque 2 — Propuesta de Valor"
        },
        {
          "value": "bloque3",
          "label": "Bloque 3 — Canales"
        },
        {
          "value": "bloque4",
          "label": "Bloque 4 — Relación con Clientes"
        },
        {
          "value": "bloque5",
          "label": "Bloque 5 — Fuentes de Ingresos"
        },
        {
          "value": "bloque6",
          "label": "Bloque 6 — Recursos Clave"
        },
        {
          "value": "bloque7",
          "label": "Bloque 7 — Actividades Clave"
        },
        {
          "value": "bloque8",
          "label": "Bloque 8 — Socios Clave"
        },
        {
          "value": "bloque9",
          "label": "Bloque 9 — Estructura de Costos"
        }
      ],
      "preguntas": [
        {
          "id": "DT.01",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "Un ingeniero lleva seis meses construyendo una plataforma de pedidos para el restaurante de Rosa, sin haber hablado con ella ni con sus clientes. Al lanzar, obtiene cero descargas. Según el libro, ¿qué diagnóstico es el más acertado?",
          "options": [
            "Confundió el placer de programar con crear valor; construyó sin verificar que el problema existía.",
            "Falló en la ejecución técnica: la plataforma tenía bugs que espantaron a los usuarios.",
            "Eligió mal el canal de distribución: debió lanzar en redes sociales antes que en tiendas de apps.",
            "Le faltó un cofundador de negocio: el ingeniero solitario no puede vender sin un comercial."
          ],
          "correct": 0,
          "feedback": "El libro describe exactamente este caso como 'el síndrome del programador solitario': se confunde el placer de programar con crear valor para alguien. Saltar al código sin investigar es análogo a un médico que receta sin preguntar qué duele. El problema no fue técnico sino de mercado."
        },
        {
          "id": "DT.02",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "El libro compara a un ingeniero que lanza sin investigar con un médico que receta a los 30 segundos sin preguntar qué duele. ¿Qué conclusión pedagógica es la más defendible según el texto?",
          "options": [
            "Ambos casos terminan bien si el profesional tiene suficiente experiencia acumulada.",
            "En ambos casos el riesgo principal es de mercado o de diagnóstico, no de ejecución.",
            "El problema de ambos es la falta de herramientas técnicas actualizadas.",
            "La analogía falla: la medicina tiene protocolos rígidos y el software no los necesita."
          ],
          "correct": 1,
          "feedback": "El libro usa la analogía médica para ilustrar que el riesgo no es técnico sino de diagnóstico: el médico puede recetar perfectamente un medicamento equivocado, y el ingeniero puede programar perfectamente la solución incorrecta. El riesgo central es identificar mal el problema."
        },
        {
          "id": "DT.03",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "Hace una década levantar una plataforma exigía un equipo grande y el riesgo era técnico. Hoy una persona con IA arma un prototipo en una tarde. Según el libro, ¿qué cambio de riesgo describe esa afirmación?",
          "options": [
            "El riesgo técnico desapareció; ahora el único riesgo es legal y regulatorio.",
            "El riesgo pasó de técnico a financiero: los costos de las APIs de IA son impredecibles.",
            "El riesgo pasó de técnico a de mercado: como construir es fácil, el peligro es construir lo equivocado.",
            "El riesgo se mantuvo igual; solo cambió quién puede asumirlo, de equipos a individuos."
          ],
          "correct": 2,
          "feedback": "El libro lo dice literalmente: 'el riesgo pasó a ser de mercado. Como construir es tan fácil, el peligro real es construir lo equivocado.' La facilidad de construcción no elimina el riesgo, sino que lo desplaza desde lo técnico hacia la validación del problema y del mercado."
        },
        {
          "id": "DT.04",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "Un equipo que trabaja con peluquerías formula estas preguntas para sus entrevistas: (P1) '¿Usarías una app de turnos?'; (P2) '¿Cuánto gastas hoy en resolver los turnos perdidos?'; (P3) '¿No te parece que perder turnos es un problema?'; (P4) 'Cuéntame la última vez que un cliente no llegó.' Según el Mom Test aplicado en el libro, ¿cuáles son las dos preguntas correctas?",
          "options": [
            "P1 y P3: son directas y obtienen una respuesta clara en poco tiempo.",
            "P1 y P2: preguntan sobre el futuro y el presente, cubriendo ambos horizontes temporales.",
            "P2 y P4: preguntan por hechos del pasado o por gastos reales, sin sugerir la respuesta.",
            "P3 y P4: la primera contextualiza el problema y la segunda pide un ejemplo concreto."
          ],
          "correct": 2,
          "feedback": "La regla de oro del Mom Test, tal como la describe el libro, es preguntar por el pasado y por hechos, nunca por el futuro ni por opiniones sobre tu idea. P2 ('¿cuánto gastas hoy?') pide datos de comportamiento real. P4 ('cuéntame la última vez') pide un hecho del pasado. P1 y P3 invitan a responder lo que el entrevistado cree que quieres oír."
        },
        {
          "id": "DT.05",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "El ingeniero entrevistó a Rosa y a sus clientes, y pasó dos mediodías observando el local. Descubrió que Rosa pierde casi una hora diaria con un cuaderno y que nadie menciona la app de pedidos que el ingeniero había imaginado. ¿Qué herramienta de empatía complementó la entrevista con un dato que la entrevista sola no habría revelado?",
          "options": [
            "El mapa de afinidad: agrupó respuestas similares de distintos entrevistados.",
            "La observación directa en el ambiente: mostró la diferencia entre lo que Rosa dice y lo que hace.",
            "La inmersi�n: el ingeniero hizo los pedidos como cliente para sentir el dolor en carne propia.",
            "El guion de entrevista del Anexo A: estructuró las preguntas para evitar sesgos de confirmación."
          ],
          "correct": 1,
          "feedback": "El libro describe tres herramientas de empatía: entrevista, observación e inmersión. La observación es la que revela la diferencia entre lo que la persona dice y lo que hace. En el caso de Rosa, las entrevistas le decían que el dolor era de otra índole, pero la observación durante dos mediodías confirmó dónde estaba realmente el problema: el cuaderno de cuentas, no el proceso de pedidos."
        },
        {
          "id": "DT.06",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "Un equipo de cinco estudiantes entrevistó a 12 dueños de librerías y le pidió a Claude que 'simulara' 8 entrevistados más para completar 20 casos. Según el libro, ¿qué conclusión es la más defendible sobre esa decisión?",
          "options": [
            "Es válido si el equipo indica claramente qué datos son reales y cuáles son simulados.",
            "Invalida la evidencia: un usuario inventado no te va a pagar ni a revelar contradicciones reales.",
            "Reduce el esfuerzo sin afectar la calidad porque la IA usa patrones estadísticos reales.",
            "Es aceptable solo para la fase de ideación, no para la de definición del problema."
          ],
          "correct": 1,
          "feedback": "El libro es explícito: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia. Un usuario inventado no te va a pagar.' La IA puede transcribir, agrupar y resumir, pero nunca reemplazar el contacto con personas reales. Los datos simulados dejan la sección de evidencia en cero."
        },
        {
          "id": "DT.07",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "En el mapa de empatía de Rosa, el cuadrante 'dice' registra: «Nunca sé si gané o perdí plata hasta fin de mes». El cuadrante 'hace' muestra que anota compras y ventas en un cuaderno cada noche. ¿Qué valor tiene la contradicción entre ambos cuadrantes, según el libro?",
          "options": [
            "Es la pista más valiosa: revela que Rosa revisa los números diario pero no los entiende como ganancia.",
            "Confirma que Rosa miente: dice que no sabe pero en realidad sí registra los datos.",
            "Es una contradicción inútil porque ambas acciones ocurren en momentos distintos del día.",
            "Indica que la entrevista fue mal hecha y debe repetirse con preguntas más precisas."
          ],
          "correct": 0,
          "feedback": "El libro dice que 'las contradicciones entre cuadrantes son oro'. En el caso de Rosa, dice que no sabe si gana pero hace un registro diario. Eso revela el insight real: el problema no es la falta de datos, sino que el formato del cuaderno no le da la respuesta que busca (ganancia del día). Esa contradicción fue la que orientó toda la solución."
        },
        {
          "id": "DT.08",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo tiene 47 notas de entrevista sobre comerciantes de un mercado municipal. Antes de idear, el facilitador les pide que agrupen las notas por similitud en FigJam. Rosa anota tres: 'no saben cuánto ganan', 'pierden tiempo en el cuaderno', 'tiran comida por comprar de más'. ¿Qué herramienta están aplicando y cuál es su objetivo?",
          "options": [
            "El diagrama de afinidad; el objetivo es que emerjan 3 a 6 temas repetidos entre personas distintas.",
            "El mapa de empatía; el objetivo es identificar qué dice, piensa, hace y siente cada comerciante.",
            "El Lean Canvas; el objetivo es definir el segmento de clientes antes de idear soluciones.",
            "Los cuatro filtros; el objetivo es descartar temas que no cumplan frecuencia e intensidad mínimas."
          ],
          "correct": 0,
          "feedback": "El libro describe el diagrama de afinidad en el Capítulo 3 como el primer paso de la fase Definir: escribir cada hallazgo en un post-it y agruparlos por parecido para que aparezcan 3 a 6 temas que se repiten entre personas distintas. Esos temas son los candidatos a problema central. El mapa de empatía se hace antes, por persona; el diagrama de afinidad cruza personas."
        },
        {
          "id": "DT.09",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo escribe este POV: «Los dueños de restaurantes necesitan una app de contabilidad porque llevan las cuentas en cuadernos». ¿Qué corrección es la adecuada según el libro?",
          "options": [
            "Cambiar 'restaurantes' por un segmento más específico con datos demográficos precisos.",
            "Reemplazar la necesidad por el insight real: el problema es no saber la ganancia diaria, no la herramienta.",
            "El POV ya es correcto: menciona usuario, necesidad y causa observada en campo.",
            "Quitar la causa ('porque') para que el POV no sugiera solución antes de idear."
          ],
          "correct": 1,
          "feedback": "El libro muestra que un POV mal definido tiene la solución disfrazada de necesidad. Escribir 'necesitan una app de contabilidad' ya es una solución, no una necesidad. El insight de Rosa no es la herramienta sino la desconfianza: 'no confían en números que no ven todos los días'. El POV correcto plantea la necesidad sin nombrar la tecnología."
        },
        {
          "id": "DT.10",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "De tres preguntas '¿Cómo podríamos...?' generadas por un equipo, ¿cuál es la correcta según los criterios del libro? (1) '¿Cómo podríamos digitalizar la contabilidad de restaurantes?', (2) '¿Cómo podríamos hacer que Rosa sepa cuánto ganó hoy sin escribir nada extra?', (3) '¿Cómo podríamos construir un dashboard en React para restaurantes?'",
          "options": [
            "La (1): es suficientemente amplia para dejar espacio a muchas ideas de solución.",
            "La (3): tiene el mayor nivel de detalle técnico y por eso guía mejor al equipo de ingeniería.",
            "Las tres son válidas para distintas fases: (1) para idear, (2) para prototipar y (3) para construir.",
            "La (2): es concreta sobre el dolor pero no menciona tecnología, dejando abierta la solución."
          ],
          "correct": 3,
          "feedback": "El libro lo explica con el caso de Rosa: la pregunta correcta 'no menciona tecnología. Deja abierta la solución, pero es lo bastante concreta como para saber si la resolviste.' La pregunta demasiado amplia (1) produce ideas genéricas. La pregunta técnica (3) ya es una solución, no una invitación a idear."
        },
        {
          "id": "DT.11",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo evalúa el problema 'elegir qué ropa ponerse cada mañana' con los cuatro filtros. Frecuencia: 5. Intensidad: 1. Gasto actual: 1. Alcance: 4. Total: 11/20. ¿Qué decisión es la más defendible según el libro?",
          "options": [
            "Pasar a ideación: un total de 11/20 supera el umbral mínimo de 10 para emprender.",
            "Refinar el segmento: el alcance es 4, así que hay mercado aunque el problema sea menor.",
            "Descartar el problema: dos filtros sacan 1 o menos, lo que indica que no duele lo suficiente.",
            "Validar con más entrevistas: con 20 casos adicionales la intensidad podría subir a 3."
          ],
          "correct": 2,
          "feedback": "El libro advierte: 'lo que decide son los mínimos: si dos o más filtros sacan 2 o menos, busca otro problema antes de gastar tiempo en ideas.' En este caso la intensidad y el gasto actual son 1, lo que señala que la gente no sufre lo suficiente ni gasta nada en resolverlo. La frecuencia alta engaña: lo frecuente que no duele no se paga."
        },
        {
          "id": "DT.12",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo califica el problema 'saber cuánto gana Rosa al día' así: Frecuencia: 5 (diario), Intensidad: 5 (pierde dinero), Gasto actual: 4 (casi una hora con el cuaderno), Alcance: 5 (miles de restaurantes pequeños). Total: 19/20. El problema 'app para elegir ropa' obtuvo 11/20. ¿Qué explica la diferencia que más engaña a los emprendedores, según el libro?",
          "options": [
            "El alcance: hay más gente eligiendo ropa que usando cuadernos de restaurante.",
            "La frecuencia: los problemas diarios siempre superan a los esporádicos en valor de mercado.",
            "El total: cualquier problema con más de 15 puntos garantiza tracción en el mercado.",
            "La intensidad y el gasto actual: si nadie gasta nada hoy en resolverlo, probablemente no le importa tanto como dice."
          ],
          "correct": 3,
          "feedback": "El libro dice literalmente: 'Este último es el filtro que más engaña: si nadie hace nada hoy para resolver algo, probablemente no le importa tanto como dice.' La frecuencia y el alcance de la app de ropa son altos, pero la intensidad es 1 y el gasto actual es 1: nadie paga nada ni dedica tiempo. Ese es el engaño clásico del emprendedor."
        },
        {
          "id": "DT.13",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Jobs to Be Done)",
          "text": "Un equipo describe el trabajo de Rosa así: «Necesita una app que lea facturas por foto». ¿Qué formulación respeta mejor el marco Jobs to Be Done según el libro?",
          "options": [
            "«Necesita que la IA lea sus facturas por foto y le diga el total de gastos del día.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Quiero una aplicación móvil que centralice ventas, compras y ganancia en un solo panel.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Cuando lleva las cuentas, Rosa quiere un sistema contable digital para reemplazar el cuaderno.» para gestionar su negocio de forma automática y sin retrasos.",
            "«Cuando cierro el local cada noche, quiero saber en dos minutos cuánto gané y qué comprar mañana, para no perder plata ni tirar comida.»"
          ],
          "correct": 3,
          "feedback": "El libro muestra la fórmula de JTBD: 'Cuando [situación], quiero [motivación], para [resultado esperado]'. Esta formulación cumple exactamente la estructura: define la situación ('cuando cierro el local'), la motivación ('quiero saber en dos minutos cuánto gané') y el resultado esperado ('para no perder plata ni tirar comida'). No menciona tecnología ni soluciones técnicas; se enfoca en el progreso que el usuario busca."
        },
        {
          "id": "DT.14",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "En una sesión de Crazy 8s con el caso de Rosa, un integrante propone conectar la caja registradora al sistema. Otro critica de inmediato: 'Rosa no tiene caja electrónica, eso no sirve'. ¿Qué juicio es el más acertado según las reglas del libro?",
          "options": [
            "La crítica fue correcta y oportuna: descartó una idea inviable antes de perder tiempo.",
            "La crítica violó una regla básica de ideación: durante la generación no se critica nada.",
            "La crítica fue válida porque el libro dice que las ideas absurdas solo retrasan el proceso.",
            "Ambos actuaron bien: el primero ideó y el segundo aplicó el filtro de factibilidad en tiempo real."
          ],
          "correct": 1,
          "feedback": "El libro dice explícitamente: 'Durante la generación no se critica nada. Se busca cantidad, se construye sobre las ideas de otros y se permiten ideas absurdas, porque a veces una idea loca, ajustada, termina siendo la ganadora.' La evaluación viene después de la generación. Criticar en la generación mata la energía creativa del equipo."
        },
        {
          "id": "DT.15",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "El equipo generó 34 ideas para el caso de Rosa. La restricción 'solo por WhatsApp' fue la que desbloqueó la solución ganadora. Según el libro, ¿por qué esta restricción funcionó mejor que las otras?",
          "options": [
            "Porque WhatsApp tiene la mayor base de usuarios en Ecuador, garantizando adopción masiva.",
            "Porque es la plataforma más barata para integrar APIs de IA según los precios de mercado actuales.",
            "Porque coincidía con lo que Rosa ya hace todo el día: pasa horas en WhatsApp con sus proveedores.",
            "Porque el libro recomienda WhatsApp como canal primario para negocios B2C en Latinoamérica."
          ],
          "correct": 2,
          "feedback": "El libro lo explica: 'La restricción «solo por WhatsApp» fue la que destrabó todo, porque coincide con lo que Rosa ya hace todo el día: pasa horas en WhatsApp hablando con sus proveedores de verduras y carne.' La restricción ganó por la evidencia de las entrevistas, no por estadísticas de mercado. Es un ejemplo de que el insight de campo supera al análisis de datos."
        },
        {
          "id": "DT.16",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear",
          "text": "Cuatro ideas del equipo de Rosa sobre la matriz impacto-esfuerzo: (I1) nota de voz y resumen nocturno, impacto 5 esfuerzo 2; (I2) foto de factura leída por IA, impacto 5 esfuerzo 4; (I3) copia semanal al contador, impacto 2 esfuerzo 1; (I4) tablero en tablet para la cocina, impacto 2 esfuerzo 4. ¿Cuál es la acción correcta para cada idea, según el libro?",
          "options": [
            "I1 descártala, I2 planifícala, I3 hazla primero, I4 mejora rápida.",
            "I1 y I2 hazlas primero porque ambas tienen impacto 5, I3 e I4 descártalas.",
            "I2 hazla primero por su mayor impacto técnico, I1 planifícala, I3 e I4 descártalas.",
            "I1 hazla primero, I2 planifícala, I3 mejora rápida, I4 descártala."
          ],
          "correct": 3,
          "feedback": "Según el libro, la lógica de la matriz es: mucho impacto + poco esfuerzo = hazlo primero (I1); mucho impacto + mucho esfuerzo = planifícalo (I2); poco impacto + poco esfuerzo = mejora rápida (I3); poco impacto + mucho esfuerzo = descártalo (I4). I1 es la nota de voz, que el caso describe como la ganadora inicial."
        },
        {
          "id": "DT.17",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (Tres Lentes)",
          "text": "Tras el Crazy 8s del caso de Rosa, la idea 'app de contabilidad' quedó en el cuadrante 'mucho impacto, mucho esfuerzo'. Al aplicarle las tres lentes, el resultado es: Deseable = 1 (Rosa no usa las que ya existen), Factible = 5, Viable = 3. ¿Qué acción recomienda el libro para esta idea?",
          "options": [
            "Lanzarla igual: la factibilidad técnica garantiza el éxito a largo plazo si se invierte en marketing.",
            "Descartarla definitivamente: fallar en cualquier lente implica volver a la fase de empatizar.",
            "No se descarta: falla en la lente de deseable, así que se ajusta el segmento o la propuesta de valor.",
            "Pivotar hacia B2B: las apps de contabilidad funcionan con empresas grandes, no con restaurantes."
          ],
          "correct": 2,
          "feedback": "El libro dice: 'Si una idea falla en una lente, no se descarta: se ajusta. Si falla en dos, vuelve a la matriz.' La app falla solo en Deseable (Rosa no la usa). La acción correcta es ajustar: cambiar el formato, el segmento o la propuesta de valor. Descartar definitivamente sería prematuro con solo una lente fallida."
        },
        {
          "id": "DT.18",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo quiere saber si los dueños de talleres mecánicos entenderían, sin ayuda, cómo registrar un pedido de repuesto en tres pantallas. Tiene 5 días y cero presupuesto. ¿Qué nivel de prototipo resuelve esa duda con el menor esfuerzo, según la tabla del libro?",
          "options": [
            "Maqueta clickable en Figma: verifica si entienden la interfaz sin explicación, en un día.",
            "MVP funcional con no-code (Bubble): permite probar el flujo real con datos verdaderos.",
            "Concierge: el equipo hace manualmente cada pedido para comprobar si los talleres pagan.",
            "Mago de Oz: un integrante responde a mano para simular la IA y comprobar si el servicio genera valor."
          ],
          "correct": 0,
          "feedback": "El libro muestra la tabla de niveles de fidelidad. La maqueta clickable (Figma o equivalente) sirve específicamente para aprender 'si entienden la interfaz sin explicación' y toma un día. El MVP funcional tomaría semanas; el Concierge respondería si pagan, no si entienden la interfaz; el Mago de Oz respondería si el servicio genera valor antes de automatizar."
        },
        {
          "id": "DT.19",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "El primer prototipo del caso de Rosa fue un Mago de Oz: ella enviaba por WhatsApp la foto de la factura y una nota de voz, y el ingeniero respondía a mano con la ganancia del día. Costo: cero. Tiempo: una tarde. ¿Qué pregunta concreta respondía ese prototipo?",
          "options": [
            "¿El formato de tres líneas (ganancia, plato top, compras mañana) genera valor real antes de automatizar?",
            "¿El servicio es técnicamente escalable con una API de IA real a 500 restaurantes?",
            "¿Rosa pagaría $15 al mes si tuviera la versión automatizada con n8n y WhatsApp Business?",
            "¿Cuántos restaurantes más recomendaría Rosa si el servicio funcionara bien por un mes?"
          ],
          "correct": 0,
          "feedback": "El libro describe el Mago de Oz como el nivel que responde 'si el servicio genera valor antes de automatizarlo'. En el caso de Rosa, la pregunta era si el formato de tres líneas nocturnas era lo que ella quería, antes de gastar un dólar en servidores o integraciones. Las preguntas de escalabilidad (A), precio (C) y referidos (D) son del nivel MVP y de la fase de negocio."
        },
        {
          "id": "DT.20",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo construyó en dos semanas un MVP funcional con login con redes sociales, modo oscuro, panel de administración y reporte mensual. Su primer usuario aún no existe. Según el libro, ¿qué diagnóstico es el correcto?",
          "options": [
            "El equipo fue eficiente: construir todo desde el inicio evita rediseñar funciones después.",
            "Faltó investigación de mercado: deberían publicar una landing page antes de construir.",
            "El MVP no es mínimo: tiene funciones que no responden ninguna pregunta de aprendizaje urgente.",
            "El error fue tecnológico: eligieron un stack demasiado complejo para un equipo sin experiencia."
          ],
          "correct": 2,
          "feedback": "El libro dice: 'Si tu MVP tiene login con redes sociales, modo oscuro y panel de administración antes de tener un usuario, no es mínimo.' Mínimo significa una sola función central que resuelva el dolor principal. El error no fue tecnológico ni de investigación: fue confundir el MVP con el producto terminado, construyendo funciones que no responden preguntas de aprendizaje."
        },
        {
          "id": "DT.21",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Durante la prueba del prototipo con Rosa, el facilitador le da la tarea 'registra lo que compraste hoy' y observa en silencio. Rosa toca tres veces un botón equivocado y dice 'esto es confuso'. El facilitador anota: 'el prototipo falló, no Rosa'. ¿Qué principio del libro aplica esa anotación?",
          "options": [
            "La prueba no evalúa al usuario; evalúa la idea. Si alguien se confunde, el prototipo falló.",
            "El principio de neutralidad: el facilitador no debe defender ni atacar al prototipo.",
            "El principio de observación pasiva: el facilitador nunca interviene aunque el usuario se equivoque.",
            "El principio de métricas: solo cuenta la tasa de error, no la opinión del usuario."
          ],
          "correct": 0,
          "feedback": "El libro lo dice con precisión: 'La prueba no evalúa al usuario, evalúa tu idea. Si alguien se confunde, el error es del diseño, no del usuario.' Esta opción es la que refleja este principio pedagógico. Culpar al usuario de 'no ser el perfil' o 'no entender' invalida el aprendizaje de la prueba."
        },
        {
          "id": "DT.22",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Tras cuatro semanas del MVP con Rosa y 11 restaurantes más, 9 siguen usando el sistema. Los dueños piden el resumen a las 10 p. m., no a las 9; el dato más valorado es 'qué comprar mañana'; dos piden que llegue también al contador. Siete aceptan pagar $15. ¿Qué acción es la más adecuada según el libro?",
          "options": [
            "Pivotar: el dato de 'qué comprar mañana' no era el valor central del diseño original, así que hay que volver a empatizar.",
            "Parar: solo 7 de 12 aceptan pagar, lo que está por debajo del mínimo aceptable para continuar.",
            "Escalar directamente a los 300 restaurantes de Quito: 9 de 12 es retención suficiente para crecer.",
            "Iterar: la idea funciona y hay datos nuevos (hora, dato favorito, contador) para ajustar detalles."
          ],
          "correct": 3,
          "feedback": "El libro describe tres caminos después de testear: 'Iteras cuando la idea funciona pero hay que ajustar detalles. Pivotas cuando descubres que el valor está en otro lado y cambias una parte grande.' Los datos muestran que la idea funciona (9 de 12 retienen, 7 pagan), con ajustes de detalle (hora, dato top, contador). No es un cambio de dirección grande, sino ajuste de detalles: iterar."
        },
        {
          "id": "DT.23",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "El equipo de CierreYa define como meta inicial de activación que el 60 % de nuevos restaurantes reciba su primer resumen. Tras el primer mes, solo el 35 % lo recibió. ¿Qué paso sigue según el marco de testeo del libro?",
          "options": [
            "Escalar el gasto en adquisición: más restaurantes compensarán el bajo porcentaje de activación.",
            "Cambiar la métrica de éxito: el 35 % es un resultado razonable para un MVP en fase temprana.",
            "Analizar dónde abandona la gente antes de recibir el primer resumen y ajustar ese paso.",
            "Parar: el 35 % está 25 puntos por debajo de la meta y eso prueba que el producto no funciona."
          ],
          "correct": 2,
          "feedback": "El libro recomienda instrumentar desde el día uno y analizar en qué paso abandona la gente (el embudo de métricas). Si la activación es baja, el problema está en el paso de onboarding, no en la adquisición. Escalar sin arreglar la activación multiplica el desperdicio. Parar sería prematuro sin investigar dónde está el punto de falla."
        },
        {
          "id": "DT.24",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "Doce restaurantes prueban CierreYa un mes. La prueba más honesta de valor real, según el libro, es pedir un compromiso antes de continuar. ¿Cuál de estas opciones representa ese compromiso de la forma más sólida?",
          "options": [
            "Que los 12 respondan una encuesta de satisfacción con puntaje mayor a 8 de 10.",
            "Que al menos 7 paguen $15 por el primer mes o firmen una carta de intención.",
            "Que al menos 7 digan en una entrevista que «les encantó» y «lo recomendarían».",
            "Que los 12 sigan activos en la semana 4 sin que el equipo los contacte."
          ],
          "correct": 1,
          "feedback": "El libro dice: 'La prueba más honesta es pedir dinero o un compromiso real: una preventa, un pago del primer mes, una carta de intención firmada. Si dicen que les encanta pero no pagan ni $5, todavía no tienes un negocio.' Las encuestas de satisfacción (A) y los cumplidos en entrevista (B) son 'opiniones que valen poco'. El uso sostenido (D) mide retención, no disposición a pagar."
        },
        {
          "id": "DT.25",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Lean Canvas)",
          "text": "El equipo de CierreYa llena el bloque 'Ventaja injusta' del Lean Canvas con: 'Nuestro equipo es apasionado y trabaja 16 horas al día'. Según el libro, ¿qué corrección es la adecuada?",
          "options": [
            "La pasión es una ventaja válida si va acompañada de un fundador con experiencia técnica probada.",
            "La ventaja injusta debe ser algo que no se puede copiar fácilmente; la pasión no cumple eso.",
            "Cambiarla por 'tecnología propia': el software propietario siempre es una ventaja injusta válida.",
            "Moverla al bloque de Equipo: la pasión es un atributo del equipo, no de la propuesta de valor."
          ],
          "correct": 1,
          "feedback": "El Lean Canvas del libro define la Ventaja Injusta como 'lo que no se puede copiar fácil'. Los ejemplos que da son: datos acumulados de precios del mercado y red de referidos. La pasión es copiable el primer día por cualquier competidor. La tecnología propia también puede copiarse con suficiente inversión; los datos acumulados y las redes son más difíciles de replicar."
        },
        {
          "id": "DT.26",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Modelos de ingreso)",
          "text": "CierreYa necesita dinero rápido para pagar los costos de la API en el mes 1. No tiene usuarios todavía. Un inversor propone tres modelos: (M1) suscripción mensual de $15; (M2) pago por uso ($0,50 por resumen enviado); (M3) servicio productizado: 'te instalo el sistema en 7 días por $400'. ¿Cuál es la forma más rápida de facturar, según el libro?",
          "options": [
            "M3: el servicio productizado es la forma más rápida de facturar con alcance y precio fijos.",
            "M1: la suscripción mensual es el modelo más valorado por los inversionistas según el libro.",
            "M2: el pago por uso alinea el costo con el valor entregado y no requiere compromiso del cliente.",
            "Una combinación de M1 y M3: la suscripción da previsibilidad y el servicio da flujo inmediato."
          ],
          "correct": 0,
          "feedback": "El libro dice textualmente: 'Servicio productizado: un servicio con alcance y precio fijos. Es la forma más rápida de facturar.' El M1 (SaaS) da ingresos predecibles pero tarda meses en crecer. El M2 requiere usuarios activos. El M3 permite cobrar una sola vez desde la primera instalación, que es lo que se necesita para cubrir costos iniciales sin base de usuarios."
        },
        {
          "id": "DT.27",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Precio)",
          "text": "El equipo de CierreYa calcula que el servicio le ahorra a Rosa 25 horas al mes (a $3/hora) y le evita tirar $120 de comida. El costo de atender a Rosa es $4 al mes. El libro propone cobrar entre el 10 % y el 20 % del valor generado. ¿Cuál es el rango de precio correcto y por qué el piso es mayor que el costo?",
          "options": [
            "Rango: $10 a $20. El piso es el costo ($4), redondeado; el techo es lo que el mercado tolera.",
            "Rango: $15 a $30. El piso es el costo × 3 y el techo es el 20 % del valor generado.",
            "Rango: $19,50 a $39. El cliente debe sentir que recibe entre 5 y 10 veces lo que paga; el piso es costo ÷ 0,30.",
            "Rango: $4 a $10. El precio siempre se fija entre el costo y un margen razonable del 150 %."
          ],
          "correct": 2,
          "feedback": "El libro calcula para Rosa: valor mensual = 25h × $3 + $120 = $195. Rango = 10 % a 20 % = $19,50 a $39. El precio mínimo es costo ÷ 0,30 = $4 ÷ 0,30 ≈ $13, para mantener un margen bruto de al menos 70 %. El precio final de $15 está dentro del rango ($13 a $39), aunque por debajo del rango estricto del 10 %. El libro justifica el 10-20 % porque el cliente debe sentir que recibe entre 5 y 10 veces lo que paga."
        },
        {
          "id": "DT.28",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (LTV/CAC)",
          "text": "CierreYa cobra $15/mes, tiene un margen bruto de 80 % y una tasa de cancelación mensual de 5 %. Conseguir un restaurante cuesta $40 en tiempo y referidos. El libro usa la fórmula LTV = (precio mensual × margen bruto) ÷ tasa de cancelación. ¿Cuál es la relación LTV/CAC y cómo la califica el libro?",
          "options": [
            "LTV = $240; LTV/CAC = 6. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $180; LTV/CAC = 4,5. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $300; LTV/CAC = 7,5. Es excelente porque supera el doble de la referencia.",
            "LTV = $200; LTV/CAC = 5. Es suficiente para cualquier modelo SaaS en la región."
          ],
          "correct": 0,
          "feedback": "El libro calcula exactamente: LTV = $15 × 0,80 ÷ 0,05 = $240. CAC = $40. LTV/CAC = 6. Y dice: 'la regla de oro es LTV/CAC > 3'. Esta respuesta tiene los dos valores correctos y la conclusión correcta. Un ratio de 6 es excelente para una startup."
        },
        {
          "id": "DT.29",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (LTV/CAC)",
          "text": "Un servicio de tutorías cobra $30/mes, tiene margen bruto del 60 % y tasa de cancelación del 20 % mensual. Conseguir cada estudiante cuesta $35 en publicidad digital. ¿Qué conclusión es la más defendible?",
          "options": [
            "El negocio es viable: LTV = $90, LTV/CAC = 2,57, y con economía de escala mejorará.",
            "El negocio no sobrevive: LTV = $90, LTV/CAC = 2,57; está por debajo de la referencia de 3.",
            "El negocio es viable porque el precio de $30 es mayor al CAC de $35 a largo plazo.",
            "El negocio necesita más datos: con solo una métrica no se puede calificar la viabilidad."
          ],
          "correct": 1,
          "feedback": "LTV = $30 × 0,60 ÷ 0,20 = $90. LTV/CAC = $90 ÷ $35 = 2,57. El libro establece que la referencia es mayor a 3: por debajo, cada cliente cuesta más de lo que rinde. Esta opción identifica correctamente que el ratio 2,57 es inviable con CAC de $35: el negocio quema caja y no sobrevive."
        },
        {
          "id": "DT.30",
          "category": "cap8_11",
          "categoryName": "Cap. 8 — Hoja de ruta (CitaClara)",
          "text": "CitaClara, una app de recordatorios de cita médica, planea lanzar en todas las ciudades de Ecuador desde el primer día para 'no dejar espacio a competidores'. Según el libro y los principios de la hoja de ruta del caso, ¿qué lectura es la más defendible?",
          "options": [
            "Es prematura: lanzar en toda la ciudad antes de dominar un nicho diluye la energía y los recursos.",
            "La estrategia es correcta: el primero que llega a escala en un mercado emergente lo domina.",
            "Es válida si tienen suficiente capital para contratar un equipo de ventas en cada ciudad.",
            "Depende del modelo de ingreso: la cobertura nacional solo es viable con un modelo freemium."
          ],
          "correct": 0,
          "feedback": "El libro describe la hoja de ruta de CitaClara comenzando por un solo nicho (consultorios de medicina general en un solo barrio) antes de expandir. En el libro se aplican los principios de De cero a uno: dominar un nicho pequeño primero. Escalar antes de tener el modelo probado en un nicho diluye recursos. La lógica de 'no dejar espacio' aplica cuando ya tienes tracción comprobada, no al inicio."
        },
        {
          "id": "DT.31",
          "category": "cap8_11",
          "categoryName": "Cap. 9 — Riesgos",
          "text": "El equipo de CitaClara identifica que los médicos podrían negarse a que el sistema contacte a sus pacientes sin autorización. Lo registran en el formato de riesgos en la columna de mitigación como 'hablar con los médicos antes del piloto'. Según el libro, ¿cuándo debía haberse gestionado ese riesgo?",
          "options": [
            "En la fase de testeo: es el momento donde los riesgos legales se confirman con datos reales.",
            "Después del lanzamiento: el mercado indica si la regulación es realmente una barrera.",
            "En la fase 1 (semanas 1-4): los trámites legales y de consentimiento van desde el piloto.",
            "Al obtener el primer pago: un cliente que paga valida que el riesgo legal no es bloqueante."
          ],
          "correct": 2,
          "feedback": "El libro es explícito para el caso de CitaClara: 'Los trámites legales se dejan para el final: saca el RUC y redacta el consentimiento en la fase 1, porque desde el piloto manejas teléfonos y datos de pacientes.' El manejo de datos personales y médicos requiere consentimiento desde la primera prueba, no después. Es un riesgo que debe mitigarse antes de tener el primer paciente en el sistema."
        },
        {
          "id": "DT.32",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo",
          "text": "Un equipo evalúa dos problemas con los cuatro filtros. Problema A: 'coordinar reuniones de equipo remoto'; Problema B: 'cuadrar el inventario de una ferretería al cierre de día'. Cada uno saca: A (Frecuencia 5, Intensidad 2, Gasto actual 1, Alcance 5 = 13), B (Frecuencia 5, Intensidad 5, Gasto actual 4, Alcance 4 = 18). ¿Cuál de las dos afirmaciones sobre los resultados es la más defendible?",
          "options": [
            "El Problema A es viable: 13/20 supera el umbral y la frecuencia alta garantiza adopción.",
            "Ambos pasan: la suma de los dos supera 20 y el libro no establece un umbral individual por filtro.",
            "El Problema A es mejor: el alcance de 5 es el filtro más importante porque define el tamaño del mercado.",
            "El Problema B pasa a ideación y el A se descarta: el A falla en intensidad y gasto actual (ambos ≤ 2)."
          ],
          "correct": 3,
          "feedback": "El libro establece: 'si dos o más filtros sacan 2 o menos, busca otro problema.' El Problema A tiene Intensidad 1 y Gasto actual 1: dos filtros por debajo de 2. Eso lo descarta. El total de 13 engaña porque la frecuencia y el alcance son altos. El Problema B tiene todos los filtros en 4 o más (18/20) y pasa claramente a ideación."
        },
        {
          "id": "DT.33",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo (Precio)",
          "text": "Un equipo calcula que su servicio de IA le ahorra 8 horas semanales a una clínica veterinaria (a $5/hora) y evita llamadas perdidas por valor de $200 al mes. El costo de atender a la clínica es $6 al mes. ¿Cuál es el rango de precio correcto según la fórmula del libro?",
          "options": [
            "Rango: $6 a $12. El precio siempre debe duplicar el costo para garantizar margen.",
            "Rango: $18 a $36. El valor mensual es $200 de llamadas; el tiempo no se considera.",
            "Rango: $36 a $72. El valor mensual es $360; el rango es 10 % a 20 % de ese valor.",
            "Rango: $60 a $120. El precio correcto multiplica el costo por 10 para startups tecnológicas."
          ],
          "correct": 2,
          "feedback": "Siguiendo la fórmula del libro: valor mensual = (8h × 4 semanas × $5) + $200 = $160 + $200 = $360. Rango de precio justo = 10 % a 20 % = $36 a $72. Esta opción aplica correctamente las dos partes de la fórmula: calcula el valor total mensual generado y extrae el rango del 10 % al 20 %."
        },
        {
          "id": "DT.34",
          "category": "cap1",
          "categoryName": "Cap. 11 — Formatos",
          "text": "Un estudiante llena el formato de mapa de empatía de un mecánico y escribe en el cuadrante 'piensa': «Cree que necesita una app de pedidos para ser más eficiente». En el cuadrante 'dice' escribe: «Siempre tardo mucho buscando los repuestos». ¿Qué error identifica el libro en este llenado?",
          "options": [
            "El error está en 'dice': la frase no es textual, sino una paráfrasis del entrevistador.",
            "El error está en 'piensa': el estudiante anotó su propia solución, no lo que el mecánico piensa.",
            "Ambos cuadrantes están mal: el mapa de empatía solo acepta frases literales del entrevistado.",
            "No hay error: 'piensa' puede contener deducciones del equipo basadas en las respuestas observadas."
          ],
          "correct": 1,
          "feedback": "El libro advierte: 'Error frecuente: llenar «piensa» y «siente» con lo que tú pensarías o sentirías en su lugar.' Escribir 'cree que necesita una app de pedidos' es la solución del estudiante disfrazada de pensamiento del mecánico. El cuadrante 'piensa' debe contener lo que se deduce que el mecánico cree, no lo que el estudiante quiere construir. Es la trampa clásica que contamina el proceso desde la empatía."
        },
        {
          "id": "DT.35",
          "category": "cap1",
          "categoryName": "Cap. 11 — Formatos",
          "text": "Un equipo anota en el guion de entrevista, después de hablar con un contador de una PYME, estas tres notas: (N1) 'Le parece que un sistema contable sería útil', (N2) 'Pierde casi 2 horas cada tarde cruzando facturas con la hoja de Excel', (N3) «Nunca cierro el mes antes del día 12». ¿Cuáles son las notas bien escritas según el libro?",
          "options": [
            "N1 y N2: la primera registra su opinión y la segunda un hecho medible.",
            "N2 y N3: ambas son hechos con cifras o frases textuales que se pueden verificar.",
            "Solo N3: es la única frase textual entre comillas, que es el único formato válido.",
            "Las tres son válidas: el libro acepta opiniones, hechos y frases textuales en el guion."
          ],
          "correct": 1,
          "feedback": "El libro muestra la tabla de notas bien y mal escritas. Las notas bien escritas tienen hechos con cifras (N2: 'casi 2 horas cada tarde') o frases textuales entre comillas (N3: «Nunca cierro el mes antes del día 12»). N1 ('le parece que sería útil') es exactamente el ejemplo de nota mal escrita que el libro da: 'Le parece que una app sería útil'. El error es anotar la interpretación en vez de lo que dijo."
        },
        {
          "id": "DT.36",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar (IA en el proceso)",
          "text": "Un equipo está en la fase de empatía y propone este flujo de trabajo con IA: (1) graba las entrevistas con permiso; (2) transcribe con Whisper; (3) le pide a Claude que resuma cada entrevista y agrupe frases repetidas; (4) le pide a Claude que simule dos entrevistados adicionales para completar 10. ¿Qué paso viola el uso correcto de la IA según el libro?",
          "options": [
            "El paso (2): Whisper comete errores de transcripción que sesgan el análisis posterior.",
            "El paso (3): la IA puede inventar grupos que no existen en los datos reales.",
            "Los pasos (2) y (3): toda la transcripción y el resumen deben hacerse a mano para no perder matices.",
            "El paso (4): simular usuarios es el único uso de IA que el libro prohíbe explícitamente en empatía."
          ],
          "correct": 3,
          "feedback": "El libro acepta el uso de IA para transcribir, resumir y agrupar (pasos 1-3), pero dice textualmente: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia.' El paso (4) es el único prohibido. Un usuario inventado no paga, no muestra contradicciones reales y deja la evidencia en cero."
        },
        {
          "id": "DT.37",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (IA como compañera)",
          "text": "Un equipo le pide a Claude 30 ideas para su pregunta '¿Cómo podríamos...?'. Claude devuelve una lista con soluciones muy similares entre sí y ninguna usa el insight de las entrevistas (que Rosa desconfía del software). Según el libro, ¿qué ajuste es el más adecuado?",
          "options": [
            "Cambiar de modelo: GPT-4 genera ideas más diversas que Claude en tareas de ideación.",
            "Descartar la lista de la IA y hacer solo un Crazy 8s manual para recuperar la creatividad.",
            "Aceptar la lista: la IA propone lo que el mercado ya conoce, que es la base más segura para empezar.",
            "Pedir 30 ideas más que 'no se parezcan a las anteriores' y aportar el insight de las entrevistas."
          ],
          "correct": 3,
          "feedback": "El libro dice: 'la IA tiende a proponer lo promedio. Tú aportas el insight que viene de tus entrevistas; y no te quedes con la primera lista, insiste. Pídele 30 ideas más que no se parezcan a las anteriores, luego que aplique SCAMPER a tu mejor idea.' El insight de la desconfianza de Rosa hacia el software es el diferenciador que la IA no tiene; el equipo debe inyectarlo."
        },
        {
          "id": "DT.38",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar (Herramientas)",
          "text": "Un equipo quiere construir un MVP de automatización que conecte WhatsApp con un modelo de IA para leer notas de voz y responder con un resumen. No quieren escribir código de servidor. Según la lista de herramientas del libro para 2026, ¿qué combinación es la más adecuada?",
          "options": [
            "n8n o Make + WhatsApp Business API + modelo de IA para voz a texto: automatización sin servidor propio.",
            "React Native + Firebase + OpenAI API: el stack más completo para apps móviles con IA.",
            "Bubble + Typeform + Zapier: herramientas no-code para captar datos sin programación.",
            "Flutter + Supabase + Claude API: código asistido con base de datos lista y autenticación incluida."
          ],
          "correct": 0,
          "feedback": "El libro lista específicamente: 'Automatización: n8n, Make o Zapier para conectar WhatsApp, correo, hojas y modelos de IA sin servidor propio.' Y el caso de Rosa lo confirma: el MVP funcional usó 'n8n, la API de WhatsApp Business, un modelo de IA para leer facturas y notas de voz, y una hoja de Google como base de datos. Dos semanas de trabajo.' Bubble (C) es para apps web; Flutter/React Native (A y D) requieren código y servidor."
        },
        {
          "id": "DT.39",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Prueba con usuarios)",
          "text": "Un facilitador prueba el prototipo de CitaClara con cinco médicos. Cuando uno no sabe cómo avanzar en la pantalla de confirmar cita, el facilitador dice: 'toca el botón verde'. Según el libro, ¿qué error cometió el facilitador?",
          "options": [
            "Ninguno: ayudar al usuario en una prueba de concepto es parte del método concierge.",
            "Eligió mal la tarea: debió decirle 'confirma la cita' en lugar de 'toca el botón verde'.",
            "Interrumpió el pensamiento en voz alta: el facilitador debe esperar al final para hacer preguntas.",
            "Violó la regla de observar sin ayudar: cuando el usuario pide ayuda, la respuesta correcta es devolverle la pregunta."
          ],
          "correct": 3,
          "feedback": "El libro es explícito en el paso 4 de la prueba: 'Calla. Cuando quiera ayuda, devuélvele la pregunta: «¿qué crees que deberías hacer?».' Dar la respuesta al usuario elimina el aprendizaje sobre usabilidad. Si el médico no encontró el botón verde, ese es exactamente el dato que el equipo necesita para mejorar el diseño. Ayudar invalida ese dato."
        },
        {
          "id": "DT.40",
          "category": "cap8_11",
          "categoryName": "Integrador — Caso CitaClara",
          "text": "CitaClara atiende recordatorios de citas médicas. Su meta de la semana 8 es tener 10 consultorios activos que paguen $20/mes. Al cerrar la semana 8 tienen 7 que pagan y 3 que usan gratis porque 'quieren ver más funciones antes de comprometerse'. Su margen bruto es 75 % y la cancelación mensual es 8 %. Según el libro, ¿qué decisión es la más defendible?",
          "options": [
            "Continuar: 7 de 10 que pagan es el 70 %, lo que supera cualquier referencia de conversión a pago del libro.",
            "Agregar las funciones pedidas: si 3 consultorios esperan más funciones para pagar, la prioridad es construirlas.",
            "Escalar a otros barrios: 7 pagadores en la semana 8 es tracción suficiente para salir del nicho inicial.",
            "Analizar si los 3 'gratis' son señal de un problema de precio o de valor; calcular LTV con los 7 que sí pagan."
          ],
          "correct": 3,
          "feedback": "El libro enseña a distinguir entre señales de valor y señales de precio. Los 3 que piden 'más funciones' antes de pagar pueden ser: (a) usuarios que valoran el producto pero no al precio actual (problema de precio) o (b) usuarios que no ven el valor suficiente (problema de propuesta de valor). LTV de los 7 que sí pagan = $20 × 0,75 ÷ 0,08 = $187,50. Ese dato orienta si escalar o ajustar. Construir funciones sin saber la causa es la trampa del ingeniero que salta al código sin investigar."
        },
        {
          "id": "F01.01",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo que trabaja con veterinarias redacta cuatro preguntas: P1 Usarias una app que avise cuando vacunar a tu mascota; P2 Cuanto gastaste el ultimo ano en visitas de emergencia; P3 No crees que la mayoria de duenos olvida las vacunas; P4 Cuentame la ultima vez que tu mascota tuvo un problema de salud. Segun el Mom Test cuales dos preguntas son correctas?",
          "options": [
            "P2 y P4: preguntan por hechos del pasado y datos reales, sin sugerir la respuesta al entrevistado.",
            "P1 y P3: son directas y obtienen una respuesta clara en poco tiempo de la entrevista realizada.",
            "P1 y P2: cubren el futuro y el presente, los dos horizontes temporales que el Mom Test valida.",
            "P3 y P4: la primera contextualiza el problema y la segunda pide un ejemplo concreto del pasado."
          ],
          "correct": 0,
          "feedback": "El Mom Test exige preguntar por hechos del pasado. P2 pide dato economico real. P4 pide hecho especifico del pasado. P1 pregunta por intencion futura y P3 induce la respuesta deseada."
        },
        {
          "id": "F01.02",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo pregunta a duenos de lavanderias: Cuando fue la ultima vez que un cliente se quejo porque su ropa salio tarde. El entrevistado responde: El martes pasado una senora llego a las 6pm y su pedido no estaba; tuvimos que devolverle 12 dolares y perdimos al cliente. Segun el Mom Test que tipo de dato es ese?",
          "options": [
            "Es un cumplido tipo C: el entrevistado revela el problema sin que se lo pidan directamente.",
            "Es dato real del pasado tipo D: muestra conducta verificable, no intencion hipotetica del futuro.",
            "Es precio hipotetico tipo P: cuantifica el costo del problema con un monto especifico y concreto.",
            "Es abstraccion tipo A: generaliza el comportamiento de todos los duenos de lavanderias del barrio."
          ],
          "correct": 1,
          "feedback": "Un dato tipo D incluye fecha especifica el martes, accion concreta devolucion de 12 dolares y consecuencia real perdida del cliente. A diferencia de una encuesta que mide intencion, este dato evidencia comportamiento ya ocurrido."
        },
        {
          "id": "F01.03",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Al cierre de una entrevista con la duena de una pasteleria el equipo le dice: Muchas gracias su tiempo fue valioso. La entrevistada responde espontaneamente: Seguro que su app seria muy util para nosotros. Segun el Mom Test que diagnostico es el mas acertado?",
          "options": [
            "El equipo revelo su idea antes del cierre y obtuvo un cumplido sin valor; faltaron datos del pasado.",
            "El cierre fue correcto; el comentario espontaneo de la duena equivale a una intencion de compra real.",
            "El error fue no preguntar el precio que pagaria; sin ese dato no hay validacion de demanda economica.",
            "El error fue no grabar la entrevista; los datos verbales sin registro no son verificables como evidencia."
          ],
          "correct": 0,
          "feedback": "El Mom Test advierte: evitar preguntas de intencion futura porque todos dicen que si por cortesia. Seria muy util es un cumplido generico tipo C sin valor. El equipo revelo la idea y recibio validacion social en vez de datos de comportamiento real."
        },
        {
          "id": "F01.04",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Rosa dice en entrevista: Siempre me pasa que al final del dia no se si gane o perdi plata. El equipo anota esta frase como hallazgo principal. Segun el Formato 1 pregunta 4 del guion que pregunta de seguimiento deberia haber hecho inmediatamente despues?",
          "options": [
            "Cuentame la ultima vez que te paso eso que hiciste: pide un hecho concreto del pasado real.",
            "Usarias una app que te de ese resumen automaticamente: explora la solucion propuesta al usuario.",
            "Cuantas personas conoces con este problema: estima el tamano del mercado potencial total.",
            "Pagarias unos 15 dolares al mes por resolverlo: valida la disposicion de pago directamente."
          ],
          "correct": 0,
          "feedback": "La pregunta 4 del guion del Formato 1 pide exactamente: Cuentame la ultima vez que te paso el problema, que hiciste. Obliga al entrevistado a dar un dato del pasado tipo D con fechas, acciones y consecuencias concretas. Las demas preguntan por el futuro o por la solucion, violando el Mom Test."
        },
        {
          "id": "F01.05",
          "category": "fmt1",
          "categoryName": "Formato 1 — Guion de entrevista (The Mom Test)",
          "text": "Un equipo pregunta a un mecanico: Con que frecuencia pierdes tiempo buscando repuestos. El mecanico responde: Siempre; casi todos los dias sale algo. Segun las categorias del Mom Test C G F P D A cual es el diagnostico correcto?",
          "options": [
            "Es dato real tipo D: la palabra siempre indica una conducta medible y verificable en el tiempo.",
            "Es un cumplido tipo C: el mecanico valida implicitamente el problema sin comprometerse a nada.",
            "Es respuesta generica tipo G: describe lo que suele pasar en general, no un hecho concreto del pasado.",
            "Es abstraccion tipo A: habla del gremio de mecanicos en general, no de su propia experiencia personal."
          ],
          "correct": 2,
          "feedback": "Tipo G Generico describe lo que suele pasar sin anclar a una fecha, lugar o monto concreto. Casi todos los dias sale algo no dice cuando, que repuesto, ni cuanto costo. Un dato tipo D seria: El jueves sali dos horas al norte por un rodamiento y pague 15 dolares en taxi."
        },
        {
          "id": "F02.01",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "Un equipo llena el mapa de empatia de la secretaria de un consultorio dental y escribe en la celda HACE: Dice que prefiere confirmar las citas por WhatsApp porque es mas rapido. Que error cometio el equipo y que debia escribir en esa celda?",
          "options": [
            "El error es usar comillas; en el mapa de empatia las celdas deben ir en tercera persona sin citar al entrevistado.",
            "La frase es correcta para HACE; la distincion entre DICE y HACE no aplica cuando las dos coinciden exactamente.",
            "Coloco en HACE una frase del DICE; en HACE va la conducta observada: llama a cada paciente por telefono antes de las 8am.",
            "Debio colocarla en PIENSA porque revela una creencia interna sobre su herramienta de trabajo diario."
          ],
          "correct": 2,
          "feedback": "La celda HACE registra conductas observadas directamente, no lo que el entrevistado dice que hace. La frase dice que prefiere es una declaracion DICE. El Formato 2 senala que las contradicciones entre lo que la persona dice y lo que hace son las mejores pistas."
        },
        {
          "id": "F02.02",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "En el mapa de empatia de Rosa el equipo detecta: en DICE escribe yo controlo mis numeros y en HACE escribe anota ventas en un cuaderno al final del dia sin revisar nunca el total. Segun el Formato 2 que valor tiene esa contradiccion?",
          "options": [
            "Indica que el equipo entrevisto mal; si hubiese preguntado mejor las celdas no se contradecidrian nunca.",
            "No es relevante; lo que importa es la celda SIENTE que revela la motivacion emocional real del usuario.",
            "Significa que Rosa no es el usuario correcto; el sistema deberia dirigirse al contador externo del restaurante.",
            "Es la mejor pista para un insight: revela por que Rosa no usa software aunque quiera control de sus numeros."
          ],
          "correct": 3,
          "feedback": "El Formato 2 afirma: Las contradicciones entre lo que dice y lo que hace son las mejores pistas. En Rosa, querer control pero no usar Excel revela el insight: no confia en numeros que no puede revisar linea por linea."
        },
        {
          "id": "F02.03",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "Cuatro equipos interpretan el Formato 2 al detectar una contradiccion entre DICE y HACE. Cual de los cuatro equipos usa el formato correctamente?",
          "options": [
            "El equipo B: descarta la contradiccion porque el entrevistado pudo haber malintendido la pregunta del guion.",
            "El equipo C: copia la contradiccion en PIENSA porque refleja la creencia interna mas probable del usuario.",
            "El equipo D: reporta la contradiccion como error de investigacion que invalida toda la entrevista realizada.",
            "El equipo A: anota la contradiccion en el campo Contradicciones y la convierte en entrada para el Formato 4."
          ],
          "correct": 3,
          "feedback": "El Formato 2 tiene un campo explicito de Contradicciones que encontre. La instruccion es anotarlas ahi y usarlas como entrada para el Formato 4 donde se busca el insight. Descartar las contradicciones vacia el mapa de su valor diagnostico principal."
        },
        {
          "id": "F02.04",
          "category": "fmt2",
          "categoryName": "Formato 2 — Mapa de empatia",
          "text": "El equipo llena la celda SIENTE del mapa de empatia de un contador con: Presionado porque tiene 40 clientes y cada uno usa una plantilla distinta. Otro equipo dice que la causa pertenece a DOLORES no a SIENTE. Cual tiene razon y por que?",
          "options": [
            "El primer equipo: SIENTE puede incluir contexto porque la emocion no se entiende sin su causa especifica.",
            "El segundo equipo: en SIENTE va la emocion presionado; en DOLORES va la causa 40 clientes plantillas distintas.",
            "Ambos tienen razon: el mapa no requiere distincion estricta entre celdas; lo importante es capturar el dato.",
            "Ninguno: la frase pertenece a DICE si el contador la pronuncio textualmente durante la entrevista realizada."
          ],
          "correct": 1,
          "feedback": "SIENTE captura emociones angustia presion entusiasmo y DOLORES registra causas concretas de frustracion. Mezclarlas hace que el equipo pierda la separacion que permite encontrar el insight: por que una persona sensata se siente asi?"
        },
        {
          "id": "F03.01",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "Un equipo describe a su persona asi: Mujer entre 30 y 50 anos tecnologica emprendedora que valora su tiempo. Que diagnostico es el mas acertado segun el Formato 3?",
          "options": [
            "No sirve: es imaginada no basada en entrevistas; falta ocupacion contexto real y frase textual verificable.",
            "Es suficiente: con la franja etaria y el perfil tecnologico ya se puede avanzar al Formato 5 de JTBD.",
            "Le falta solo la frase textual; los demas campos son validos para una ficha de primera etapa de investigacion.",
            "Es buena para el inicio; se completa con datos reales despues de las primeras tres entrevistas de campo."
          ],
          "correct": 0,
          "feedback": "El Formato 3 advierte: Si un campo no tiene respaldo en una entrevista dejalo vacio y vuelve a preguntar. La descripcion dada no tiene respaldo en ninguna entrevista. Sin ocupacion, contexto ni frase textual real, la ficha no puede conectar con el insight ni con el JTBD."
        },
        {
          "id": "F03.02",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "El Formato 3 exige que si un campo no tiene respaldo en entrevistas se deje vacio. Un equipo llena Tecnologia que usa hoy con probablemente WhatsApp porque no lo preguntaron. Cual es el problema y el paso correcto?",
          "options": [
            "No hay problema; probablemente WhatsApp es una hipotesis valida mientras se valida en campo.",
            "El error es solo la redaccion; basta poner WhatsApp sin el probablemente para que sea valido.",
            "Estan inventando el perfil; deben dejar el campo vacio y agregar esa pregunta a la proxima entrevista.",
            "Pueden deducirlo del segmento: si son pequenos comerciantes WhatsApp es un supuesto seguro y fundado."
          ],
          "correct": 2,
          "feedback": "La instruccion del Formato 3 es terminante: Si un campo no tiene respaldo en una entrevista dejalo vacio. Escribir probablemente convierte un dato de investigacion en una suposicion del equipo que puede sesgar todo el proceso posterior."
        },
        {
          "id": "F03.03",
          "category": "fmt3",
          "categoryName": "Formato 3 — Ficha de persona",
          "text": "Rosa tiene 47 anos duena de un restaurante de 40 mesas con 6 empleados. Anota todo en un cuaderno cada noche y dice: Nunca se si gane o perdi plata hasta fin de mes. En que campo de la Ficha de Persona va esa cita y que aporta que un resumen del equipo no aportaria?",
          "options": [
            "Va en Frase textual que la define: revela la motivacion en palabras del usuario sin filtro del equipo.",
            "Va en Frustraciones: sintetiza el dolor principal del usuario con sus propios terminos emocionales.",
            "Va en Objetivos: expresa directamente lo que Rosa quiere conseguir con una herramienta de control.",
            "Va en Un dia tipico: describe la rutina nocturna de anotacion que la persona vive cada noche al cerrar."
          ],
          "correct": 0,
          "feedback": "El Formato 3 tiene un campo especifico llamado Frase textual que la define. Su valor radica en que esta en las palabras propias del usuario sin filtro del equipo. Una parafrasis del equipo pierde la autenticidad que conecta con la audiencia."
        },
        {
          "id": "F04.01",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Tres de cuatro duenos de restaurantes entrevistados anotan ventas en un cuaderno aunque tienen Excel instalado en el celular. El equipo escribe como insight: Los duenos prefieren el cuaderno porque es mas facil. Que problema tiene esa formulacion?",
          "options": [
            "No es insight sino repeticion del hallazgo; el insight debe explicar por que: No confian en cifras que no pueden revisar linea por linea.",
            "El insight es valido; mas facil es la razon no obvia que la competencia no conoce todavia en el mercado.",
            "El problema es la muestra: con 3 de 4 personas no se puede formular un insight sin mas entrevistas adicionales.",
            "Deberia ir en PIENSA del mapa de empatia, no en el Formato 4, porque es una creencia interna del usuario."
          ],
          "correct": 0,
          "feedback": "El Formato 4 distingue hallazgo de insight con la pregunta: Por que una persona sensata haria esto. El hallazgo es el dato observado. El insight es la razon no obvia: no confian en numeros que no pueden revisar linea por linea. Es mas facil es otra descripcion del sintoma, no la causa raiz."
        },
        {
          "id": "F04.02",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Un equipo trabaja con peluquerias y observa que los duenos cobran en efectivo aunque pierden de 15 a 30 minutos diarios contando billetes. Cual de las cuatro opciones es el insight y no un hallazgo repetido?",
          "options": [
            "Los duenos de peluqueria usan efectivo y pierden de 15 a 30 minutos diarios haciendo el cuadre de caja.",
            "Desconfian de los lectores de tarjeta porque creen que los datos del cliente quedaran expuestos a terceros.",
            "El 80 por ciento de los clientes entrevistados paga en efectivo segun el conteo del equipo de campo.",
            "La mayoria de duenos prefiere efectivo porque les resulta mas comodo que aprender nueva tecnologia digital."
          ],
          "correct": 1,
          "feedback": "El hallazgo es lo observado: cobran en efectivo mas pierden 15-30 min. El insight es la razon no obvia: Desconfian de la exposicion de datos. Esa razon sorprende y abre una oportunidad de diseno real. Las demas opciones reformulan el hallazgo observado."
        },
        {
          "id": "F04.03",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "El equipo detecta el hallazgo: 5 de 6 mecanicos guardan pedidos de repuestos en notas de WhatsApp no en el sistema de inventario. El instructor dice que eso es hallazgo no insight. Por que y cual seria el insight correcto?",
          "options": [
            "El instructor se equivoca: un hallazgo cuantificado con 5 de 6 personas ya es un insight valido y accionable.",
            "Para ser insight basta agregar la contradiccion: guardan en WhatsApp aunque tienen sistema instalado.",
            "El hallazgo describe lo observado; el insight explica la causa: El sistema exige datos que el mecanico no tiene en el momento del pedido.",
            "El insight requiere la pregunta como podriamos al final; sin ella es solo un hallazgo parcial."
          ],
          "correct": 2,
          "feedback": "El Formato 4 dice: Un hallazgo es un dato; un insight es la razon no obvia que la competencia no conoce. 5 de 6 es un conteo. El insight responde POR QUE: el sistema exige numero de parte exacto que el mecanico no tiene hasta ver el repuesto en persona."
        },
        {
          "id": "F04.04",
          "category": "fmt4",
          "categoryName": "Formato 4 — Del hallazgo al insight",
          "text": "Antes de llenar el Formato 4 el equipo agrupa 12 notas de entrevista en tres categorias con un diagrama de afinidad: tiempo perdido dinero perdido y verguenza. Para que sirve ese agrupamiento dentro del proceso del Formato 4?",
          "options": [
            "Para calcular el puntaje de Frecuencia del Formato 6 antes de decidir si el problema vale la pena abordar.",
            "Para dividir el trabajo: cada integrante analiza una categoria de manera independiente y separada del equipo.",
            "Para identificar que hallazgo se repite en mas entrevistas y merece el esfuerzo de explicar su por que.",
            "Para decidir cual de los tres dolores fue mencionado con mayor carga emocional en las entrevistas hechas."
          ],
          "correct": 2,
          "feedback": "El Formato 4 instruye: Agrupa primero los hallazgos repetidos diagrama de afinidad. El proposito es encontrar el patron con mas respaldo empirico antes de buscar la explicacion insight. Un hallazgo en 7 de 10 entrevistas merece mas analisis que uno que aparecio una sola vez."
        },
        {
          "id": "F05.01",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo formula el JTBD de una madre asi: Cuando estoy en el grupo de WhatsApp del colegio quiero una app con notificaciones inteligentes para no perderme los avisos de tareas. Que diagnostico es el mas acertado?",
          "options": [
            "Falla porque menciona tecnologia: una app con notificaciones es la solucion no el trabajo por hacer.",
            "Es correcta: tiene las tres partes de la formula situacion motivacion resultado y sigue la estructura.",
            "El error es solo el resultado; deberia decir para estar tranquila no una funcion de la aplicacion.",
            "Es valida en esta etapa; el Formato 5 permite mencionar tecnologia si el usuario ya la usa habitualmente."
          ],
          "correct": 0,
          "feedback": "El Formato 5 tiene una lista de verificacion: No menciona tecnologia nada de una app ni un dashboard. El JTBD describe el trabajo que la persona necesita hacer no la solucion. Version correcta: Cuando reviso el grupo del colegio quiero saber que debe llevar mi hijo manana para no pasarme el dia pendiente del celular."
        },
        {
          "id": "F05.02",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Rosa cierra su restaurante cada noche y quiere saber en dos minutos cuanto gano y que comprar manana. El equipo formula el POV: Duenos de restaurantes necesitan una app de contabilidad porque no saben sus ganancias. Que correccion es necesaria?",
          "options": [
            "El POV es correcto; no saben sus ganancias es el insight descubierto en las entrevistas realizadas.",
            "El error esta en la necesidad; deberia decir necesitan automatizar el registro para ser mas accionable.",
            "El POV es valido; basta agregar el nombre Rosa al inicio para personalizarlo y cumplir el Formato 5.",
            "El POV debe conectar usuario mas necesidad mas insight: porque no confian en cifras que no pueden revisar linea por linea."
          ],
          "correct": 3,
          "feedback": "La formula del POV es: Usuario necesita necesidad porque insight. No saben sus ganancias sigue siendo el hallazgo. El insight es la razon no obvia: no confian en numeros que no pueden revisar linea por linea. Ademas mencionar una app viola la regla de no mencionar tecnologia."
        },
        {
          "id": "F05.03",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo formula tres versiones de Como podriamos para Rosa: 1 Como podriamos hacer que Rosa sepa cuanto gano sin escribir nada extra; 2 Como podriamos crear una app de contabilidad para restaurantes; 3 Como podriamos digitalizar los restaurantes pequenos de Ecuador. Cual cumple los tres criterios del Formato 5?",
          "options": [
            "La 2: menciona la tecnologia correcta y el segmento exacto donde debe operar la solucion final.",
            "La 3: tiene el mayor alcance de mercado y permite explorar mas soluciones diversas al problema.",
            "La 1: no menciona tecnologia es concreta y no es tan amplia como para ser irresoluble en una sesion.",
            "La 2 y la 1: la primera para el MVP inicial y la segunda para la version completa del producto final."
          ],
          "correct": 2,
          "feedback": "El Formato 5 tiene tres criterios: no menciona tecnologia es concreta y no es tan amplia. La version 1 cumple las tres: no dice app es medible Rosa sabe cuanto gano y esta acotada. La 2 menciona la app y la 3 es demasiado amplia para guiar una sesion de ideacion enfocada."
        },
        {
          "id": "F05.04",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "El equipo de CitaClara redacta: Como podriamos usar inteligencia artificial para confirmar citas medicas. El instructor la rechaza. Por que y cual seria la version correcta segun el Formato 5?",
          "options": [
            "Es demasiado corta; debe incluir el segmento objetivo para que el equipo no se desvie al idear.",
            "Menciona IA que es tecnologia; la correcta seria: Como podriamos hacer que ningun paciente olvide su cita.",
            "El problema es confirmar citas; deberia decir agendar citas para cubrir todo el proceso completo.",
            "Es tecnicamente correcta; el instructor la rechaza porque no menciona el presupuesto disponible del equipo."
          ],
          "correct": 1,
          "feedback": "La lista de verificacion del Formato 5: No menciona tecnologia nada de una app ni un dashboard. La IA es tecnologia. La version correcta se enfoca en el resultado no olvidar la cita sin prescribir como lograrlo permitiendo que los Formatos 7 y 8 generen soluciones diversas."
        },
        {
          "id": "F05.05",
          "category": "fmt5",
          "categoryName": "Formato 5 — JTBD, POV y Como podriamos",
          "text": "Un equipo tiene tres preguntas Como podriamos validas y debe elegir una para el Formato 7 Crazy 8s. Que criterio determina cual pasa primero segun el proceso del documento de formatos?",
          "options": [
            "La que responda directamente al insight mas frecuente y doloroso encontrado en las entrevistas realizadas.",
            "La que el equipo sepa construir con sus habilidades tecnicas actuales disponibles en una semana de trabajo.",
            "La que el mayor numero de integrantes voto al terminar la sesion de definicion del POV compartido.",
            "La que sea mas facil de probar con un Mago de Oz para obtener datos rapidos de comportamiento real."
          ],
          "correct": 0,
          "feedback": "El Formato 5 conecta con el insight del Formato 4. La pregunta que pasa a Idear es la que responde al hallazgo mas frecuente y doloroso garantizando que el equipo resuelva el problema real. La factibilidad se evalua en el Formato 9 tres lentes no antes de idear."
        },
        {
          "id": "F06.01",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Tres problemas detectados en consultorios odontologicos: A se pierden 45 minutos diarios confirmando citas por telefono pagados con horas de secretaria; B la sala de espera a veces huele mal y los pacientes lo comentan; C el dentista olvida actualizar la carpeta fiscal una vez al ano. En la Matriz de Cuatro Filtros cual va a la Zona de Oro?",
          "options": [
            "El B: alta intensidad emocional porque afecta la primera impresion del consultorio con cada paciente nuevo.",
            "El C: alta intensidad porque un problema fiscal puede cerrar el negocio aunque ocurra solo una vez al ano.",
            "El A: alta frecuencia diaria alta intensidad 45 min mas costo real de secretaria y gasto actual verificable.",
            "El B y el C juntos: sumados superan al A en impacto total sobre la reputacion general del consultorio."
          ],
          "correct": 2,
          "feedback": "La Zona de Oro es Alta Frecuencia mas Alta Intensidad. El problema A ocurre diariamente genera costo medible ya existe gasto actual y afecta a todo el segmento. El B es de baja frecuencia. El C es muy baja frecuencia 1 vez por ano. Solo el A cumple los cuatro filtros con puntajes altos."
        },
        {
          "id": "F06.02",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Un equipo puntua el problema los duenos de peluqueria no saben cuanto ganaron hasta las 10 p.m.: Frecuencia 5 Intensidad 3 Gasto actual 2 Alcance 2. Que conclusion es la mas defendible segun el Formato 6?",
          "options": [
            "Pueden seguir: el total de 12 sobre 20 supera el umbral minimo aceptable para avanzar a la fase siguiente.",
            "Deben buscar otro problema: dos filtros sacan 2 lo que activa la regla de descarte del Formato 6.",
            "Solo deben mejorar Alcance: las peluquerias en Ecuador son miles y el puntaje 2 esta subestimado.",
            "Deben ponderar: Frecuencia e Intensidad pesan mas; un 5 y un 3 compensan los dos puntajes bajos."
          ],
          "correct": 1,
          "feedback": "El Formato 6 establece: Si dos o mas filtros sacan 2 o menos busca otro problema. El equipo tiene Gasto actual y Alcance en 2 activando la regla independientemente del total. El total de 12/20 no es la regla; son los puntajes individuales bajos los que determinan el descarte."
        },
        {
          "id": "F06.03",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "Equipo 1: Frecuencia 4 Intensidad 4 Gasto actual 3 Alcance 4 total 15/20. Equipo 2: Frecuencia 5 Intensidad 1 Gasto actual 5 Alcance 5 total 16/20. Cual de los dos debe detenerse segun el Formato 6?",
          "options": [
            "Ninguno: ambos superan 14 puntos sobre 20 el umbral documentado para avanzar en el proceso completo.",
            "El equipo 2: tiene Intensidad en 1 lo que activa la regla de descarte aunque los demas filtros sean altos.",
            "El equipo 1: con 15/20 esta mas cerca del limite y tiene mayor riesgo de que el problema no sea viable.",
            "El equipo 2 debe hacer mas entrevistas: Intensidad en 1 puede corregirse con mas datos del segmento."
          ],
          "correct": 1,
          "feedback": "La regla del Formato 6: Si dos o mas filtros sacan 2 o menos busca otro problema. El equipo 2 tiene Intensidad en 1 menor a 2. Un problema frecuente pero de muy baja intensidad es una molestia cronica no una oportunidad de negocio. El total de 16/20 no importa si un filtro falla con puntaje de 1."
        },
        {
          "id": "F06.04",
          "category": "fmt6",
          "categoryName": "Formato 6 — Los cuatro filtros",
          "text": "El Formato 6 pide calificar Gasto actual con: Ya gasta tiempo o dinero en resolverlo. Para el caso de Rosa que pierde casi una hora diaria anotando en el cuaderno que informacion adicional subiria mas el puntaje de ese filtro?",
          "options": [
            "Que Rosa ya paga a alguien para ayudarle con las cuentas o compra cuadernos especiales cada mes.",
            "Que Rosa lleva 3 anos con ese cuaderno porque la antiguedad del habito confirma la frecuencia del problema.",
            "Que 4 de 4 restaurantes entrevistados tienen el mismo cuaderno porque multiplica el alcance del problema.",
            "Que Rosa dice sentir angustia al cerrar el local porque la emocion sube el puntaje de Intensidad verificada."
          ],
          "correct": 0,
          "feedback": "El filtro Gasto actual busca evidencia de que el usuario ya invierte dinero hoy en resolver el problema. Si Rosa ya paga a alguien o compra insumos especiales ese gasto en dinero prueba disposicion de pago real elevando el puntaje de ese filtro de forma decisiva."
        },
        {
          "id": "F07.01",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Al iniciar los Crazy 8s un equipo escribe descripciones con palabras en vez de dibujar y dedica 4 de los 8 minutos a redactar justificacion de la primera idea. Cual es el diagnostico mas acertado segun el Formato 7?",
          "options": [
            "No hay problema: si el equipo no sabe dibujar las palabras cumplen exactamente el mismo proposito creativo.",
            "El error es solo el tiempo: 4 minutos en una idea impide llegar a 8 pero el formato verbal es igual de valido.",
            "Viola el espiritu pero no la regla: el Formato 7 no especifica dibujar explicitamente solo pide rapidez.",
            "Viola el proposito: dibujar rompe el bloqueo linguistico y fuerza ideas visuales que las palabras inhiben."
          ],
          "correct": 3,
          "feedback": "El Formato 7 especifica: Dibujas no escribes. No se critica nada mientras dibujas. La instruccion de dibujar es intencional: suprime el filtro racional interno. Las palabras activan el juicio y producen ideas mas convencionales. El formato visual es parte del mecanismo no un detalle opcional."
        },
        {
          "id": "F07.02",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Despues de los Crazy 8s el equipo tiene 8 bocetos. El instructor les pide elegir uno para el Formato 9. Cual es el criterio correcto para elegir segun el proceso del documento de formatos?",
          "options": [
            "El boceto que el equipo pueda construir mas rapido con sus habilidades tecnicas actuales esta semana.",
            "El boceto que obtuvo mas votos del equipo al finalizar los 8 minutos de ideacion sin critica alguna.",
            "El boceto que el instructor senale como mas innovador segun su experiencia con otros proyectos similares.",
            "El boceto que mejor responda a la pregunta Como podriamos definida en el Formato 5."
          ],
          "correct": 3,
          "feedback": "El Crazy 8s responde a la pregunta Como podriamos del Formato 5. El criterio de seleccion es la alineacion con esa pregunta que esta anclada al insight mas relevante del Formato 4. La factibilidad tecnica se evalua en el Formato 9 tres lentes no como criterio de seleccion inmediato."
        },
        {
          "id": "F07.03",
          "category": "fmt7",
          "categoryName": "Formato 7 — Crazy 8s",
          "text": "Un equipo genera 4 ideas en Crazy 8s: 1 app con dashboard; 2 resumen por WhatsApp a las 9 pm; 3 chatbot integrado a caja registradora; 4 QR en mesa que registra pedidos. Cual principio del Formato 7 respalda no descartar ninguna durante los 8 minutos?",
          "options": [
            "No se critica nada mientras se dibuja: el juicio sobre factibilidad llega en el Formato 9 no durante la ideacion.",
            "Solo pasan las ideas factibles: el equipo debe marcarlas antes de terminar la sesion de Crazy 8s.",
            "Se presenta la mejor idea al instructor para recibir retroalimentacion inmediata y ajustar antes de seguir.",
            "Cada boceto necesita una frase de justificacion antes de pasar al Formato 9 para ser evaluado correctamente."
          ],
          "correct": 0,
          "feedback": "La regla central del Formato 7 es No se critica nada mientras se dibuja. Todas las ideas tienen el mismo estatus durante los 8 minutos. La idea mas absurda puede inspirar la mas brillante. El juicio llega en el Formato 9 donde la Matriz impacto-esfuerzo y las tres lentes filtran las ideas."
        },
        {
          "id": "F08.01",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "El equipo de Rosa aplica la accion E Eliminar del SCAMPER a su idea de app de contabilidad. Cual de las siguientes respuestas aplica correctamente esa accion segun el Formato 8?",
          "options": [
            "Eliminar el modulo de reportes: reduce el tiempo de desarrollo en al menos dos semanas de trabajo.",
            "Eliminar el costo de la API: buscar un proveedor gratuito para bajar el costo por cliente al mes.",
            "Eliminar la pantalla de login: mejora la experiencia de usuario y reduce la tasa de abandono inicial.",
            "Eliminar la app y entregar el servicio por WhatsApp: quita la barrera de instalacion para el usuario."
          ],
          "correct": 3,
          "feedback": "La accion E del SCAMPER pregunta: Que quito sin perder valor. En el ejemplo del Formato 8 la respuesta es exactamente: Eliminar la app todo por WhatsApp. Esto quita la barrera de instalacion sin perder el valor del resumen diario. Las otras opciones eliminan componentes internos del producto."
        },
        {
          "id": "F08.02",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "Aplicando A Adaptar del SCAMPER a CitaClara un equipo propone: Adaptar el modelo de resumen nocturno de los bancos el sistema le escribe al consultorio cada noche con las citas del dia siguiente. Que evalua esa accion y cual es su ventaja frente a las otras seis letras?",
          "options": [
            "Sustituye un componente del sistema; es la mas potente porque reemplaza el elemento mas critico actual.",
            "Copia una practica de otra industria: reduce el riesgo porque ya se sabe que funciona en otro contexto.",
            "Combina dos productos existentes; es la mas creativa porque el resultado no existe en ningun mercado.",
            "Modifica el formato del mensaje; cambia la experiencia sin tocar la logica del negocio subyacente."
          ],
          "correct": 1,
          "feedback": "La accion A del SCAMPER pregunta: Que idea de otra industria puedo copiar. El ejemplo del Formato 8 es: El resumen nocturno de un banco. La ventaja de Adaptar es tomar algo que ya funciona en un contexto diferente reduciendo la incertidumbre de la innovacion."
        },
        {
          "id": "F08.03",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "Un equipo aplica R Reordenar o invertir del SCAMPER a su sistema de pedidos y propone: En vez de que el mecanico busque el repuesto el sistema pregunta que carro esta reparando y genera la lista automaticamente. Por que es un ejemplo valido de la accion R?",
          "options": [
            "Sustituye la interfaz por un formulario de datos tecnicos del vehiculo que se llena automaticamente.",
            "Combina el catalogo de repuestos con el historial del auto uniendo dos fuentes de datos distintas.",
            "Invierte el flujo: antes el mecanico iniciaba la busqueda; ahora el sistema toma la iniciativa del proceso.",
            "Modifica el numero de pasos: reduce de 5 a 2 pasos al simplificar toda la cadena de pedido actual."
          ],
          "correct": 2,
          "feedback": "La accion R pregunta: Que pasa si cambio el orden o lo invierto. El Formato 8 ejemplifica: Que el sistema le escriba a Rosa no ella al sistema. La idea propuesta invierte el mismo principio: el mecanico ya no inicia la busqueda ahora el sistema toma la iniciativa. Es una inversion del flujo."
        },
        {
          "id": "F08.04",
          "category": "fmt8",
          "categoryName": "Formato 8 — SCAMPER",
          "text": "El instructor revisa el SCAMPER del equipo y nota que las columnas Mis ideas estan vacias en 4 de las 7 acciones. Cual es el diagnostico mas acertado?",
          "options": [
            "Es aceptable: completar S C y A las tres primeras acciones es suficiente para pasar al Formato 9.",
            "El SCAMPER no cumplio su proposito: con 4 acciones vacias no se exploro el espacio de ideas completo.",
            "El equipo debe usar IA para completar las 4 acciones restantes antes de la siguiente sesion del proyecto.",
            "No hay problema: el SCAMPER es una guia no un formulario; se pueden saltar acciones irrelevantes."
          ],
          "correct": 1,
          "feedback": "El Formato 8 tiene 7 acciones porque cada una activa un mecanismo creativo diferente. La accion E puede revelar que el canal entero sobra; la R puede generar el producto mas innovador. Dejar 4 vacias significa usar solo 3 palancas creativas de 7 disponibles reduciendo el espacio de ideas explorado."
        },
        {
          "id": "F09.01",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Un equipo ubica en la matriz tres ideas: A resumen nocturno por WhatsApp bajo esfuerzo y alto impacto; B integracion con caja registradora alto esfuerzo y alto impacto; C cambiar la hora del mensaje bajo esfuerzo y bajo impacto. Cual debe prototiparsela primero y por que?",
          "options": [
            "La A: esta en el cuadrante Hazlo primero que prioriza bajo esfuerzo con alto impacto simultaneamente.",
            "La B: el alto impacto justifica el esfuerzo aunque tome mas tiempo y recursos de implementacion.",
            "La C: el bajo esfuerzo permite aprender algo rapido y ajustar el rumbo antes de pasar a las otras dos.",
            "La A y la C juntas: comparten el bajo esfuerzo y juntas maximizan el aprendizaje inicial de la iteracion."
          ],
          "correct": 0,
          "feedback": "En el Formato 9 el cuadrante Hazlo primero bajo esfuerzo mas alto impacto es la prioridad de prototipado. El ejemplo del documento es exactamente Resumen nocturno por WhatsApp. La B es Planificalo. La C es Mejoras rapidas bajo impacto mas bajo esfuerzo. Solo la A justifica comenzar inmediatamente."
        },
        {
          "id": "F09.02",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Una idea esta en el cuadrante Hazlo primero de la matriz pero falla en el filtro Factible la puedo construir de las tres lentes. Cual es el paso correcto segun el Formato 9?",
          "options": [
            "Pasa a prototipo con restricciones: se construye la parte factible y se deja el resto para fase posterior.",
            "Se revisa la matriz: una idea no factible debe reubicarse en Alto esfuerzo y reevaluarse en el cuadrante.",
            "No pasa a prototipo: si falla cualquiera de las tres lentes la idea se descarta o ajusta antes de construir.",
            "Se acepta si pasa las otras dos: Deseable y Viable pesan mas que Factible en la primera iteracion."
          ],
          "correct": 2,
          "feedback": "El Formato 9 muestra que la columna Pasa a prototipo solo dice Si cuando las tres lentes marcan Si. Si cualquiera falla la respuesta es No. Factible es condicion necesaria: una idea deseada y pagada pero no construible no puede prototipase. Se debe ajustar la idea o descartarla."
        },
        {
          "id": "F09.03",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Las tres lentes de IDEO evaluan: Deseable la quieren Factible la puedo construir y Viable alguien la paga. Un equipo tiene: Deseable Si Factible Si Viable No. Que conclusion es la mas defendible?",
          "options": [
            "La idea pasa igual: si es deseable y factible el modelo de negocio se resuelve despues del lanzamiento.",
            "La idea se descarta definitivamente: si nadie paga no hay mercado y no vale la pena construirla nunca.",
            "La idea pasa con condicion: se lanza gratis para ganar usuarios y luego se monetiza con publicidad.",
            "La idea no pasa a prototipo aun: primero hay que entender quien pagaria y cuanto o ajustar el modelo."
          ],
          "correct": 3,
          "feedback": "El Formato 9 exige que las tres lentes digan Si para que Pasa a prototipo sea afirmativa. Viable No significa que el equipo no sabe quien paga ni cuanto. El paso correcto es resolver eso antes de construir hablando con potenciales clientes sobre precio Formato 13."
        },
        {
          "id": "F09.04",
          "category": "fmt9",
          "categoryName": "Formato 9 — Matriz impacto-esfuerzo y tres lentes",
          "text": "Un equipo ubica en Descartalo bajo impacto alto esfuerzo la idea app nativa para iPad con modo oscuro autenticacion biometrica y login con Google. El Formato 10 tambien menciona ese tipo de idea con una advertencia. Que principio comparten ambos formatos?",
          "options": [
            "El modo oscuro y la biometria son funciones deseables; el problema real es que iPad tiene bajo mercado.",
            "Las apps nativas tienen alto esfuerzo y siempre deben esperar a que el equipo consiga mas inversion.",
            "Si el impacto no justifica el esfuerzo las funciones premium distraen del problema central a resolver.",
            "La idea puede reubicarse en Planificalo si se elimina el login biometrico y se simplifica la autenticacion."
          ],
          "correct": 2,
          "feedback": "El Formato 9 descarta lo que tiene bajo impacto y alto esfuerzo. El Formato 10 advierte: Si tu MVP tiene modo oscuro y login con Google antes de tener un solo usuario no es minimo. Ambos expresan el principio de Lean Startup: el esfuerzo debe ser proporcional a la hipotesis que se prueba."
        },
        {
          "id": "F10.01",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El equipo de Rosa disena este prototipo: Rosa manda una foto de sus facturas por WhatsApp el equipo las revisa a mano con Claude y le envia un resumen de tres lineas a las 9 p.m. La metrica de exito es responde al menos 5 de 7 noches. Que pregunta responde concretamente este prototipo segun el Formato 10?",
          "options": [
            "Si la IA puede procesar fotos de facturas con exactitud superior al 90 por ciento en condiciones reales.",
            "Si el precio de 15 dolares al mes es aceptable para los duenos de restaurantes del segmento de 40 mesas.",
            "Si Rosa usa el resumen diario y si ese dato le sirve para tomar decisiones de compra al dia siguiente.",
            "Si Rosa recomendaria activamente el servicio a otros duenos de restaurantes conocidos de la zona norte."
          ],
          "correct": 2,
          "feedback": "El Formato 10 inicia con el campo Pregunta que quiero responder. En el ejemplo del documento es exactamente: Rosa usa el resumen diario y le sirve para comprar. El Mago de Oz prueba si el usuario adopta el comportamiento no si la tecnologia funciona tecnicamente."
        },
        {
          "id": "F10.02",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "Un equipo llena el campo Que hago yo detras a mano del Formato 10 con: Programar un script en Python que conecta con la API de OpenAI para procesar los datos automaticamente. Cual es el diagnostico mas acertado?",
          "options": [
            "Es correcto: el script corre en el servidor del equipo y el usuario nunca lo ve cumpliendo la premisa.",
            "Es valido si el script se construye en menos de 4 horas; la complejidad no define el tipo de prototipo.",
            "El error es usar OpenAI: el costo variable impredecible afecta la metrica de costo del Formato 10.",
            "No es un Mago de Oz: si el trabajo de atras requiere programacion ya es un MVP tecnico no simulacion manual."
          ],
          "correct": 3,
          "feedback": "En un Mago de Oz el equipo hace el trabajo a mano; el usuario cree que hay un sistema automatico. Si el cliente sabe que lo atiende una persona, es atencion al cliente manual, a diferencia de un Mago de Oz real donde la interfaz simula total automatizacion."
        },
        {
          "id": "F10.03",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El Formato 10 establece que la metrica de exito debe definirse antes de empezar. El equipo de CitaClara propone medirla segun como vaya saliendo durante las dos semanas del piloto. Cual es el problema con ese enfoque?",
          "options": [
            "Sin metrica previa el equipo inevitablemente ajustara el criterio para que el experimento sea un exito.",
            "No hay problema si el equipo es honesto; la metrica puede afinarse a medida que llegan los datos reales.",
            "El error es el plazo de dos semanas; con mas tiempo el equipo podria definir la metrica con mas datos.",
            "La metrica de exito la debe definir el usuario no el equipo para evitar el sesgo interno del prototipo."
          ],
          "correct": 0,
          "feedback": "Definir la metrica antes de empezar es el principio del Criterio de abandono de Lean Startup. Si se define despues de ver los resultados el equipo inconscientemente mueve el umbral para que la hipotesis sobreviva sesgo de confirmacion. El Formato 10 y el Formato 11 son explicitos en este punto."
        },
        {
          "id": "F10.04",
          "category": "fmt10",
          "categoryName": "Formato 10 — Plan de prototipo Mago de Oz",
          "text": "El equipo de CitaClara disena un Mago de Oz donde la secretaria manda manualmente mensajes de confirmacion de cita desde una plantilla de WhatsApp. Cual de las siguientes metricas de exito cumple los criterios del Formato 10?",
          "options": [
            "Los pacientes estan satisfechos con el servicio de confirmacion del consultorio en la encuesta final.",
            "La secretaria tarda menos tiempo confirmando citas que antes de usar la plantilla de WhatsApp manual.",
            "Al menos 8 de cada 10 pacientes confirman la cita dentro de las 2 horas siguientes al mensaje enviado.",
            "El consultorio reduce el numero de citas perdidas en el siguiente mes completo de operacion normal."
          ],
          "correct": 2,
          "feedback": "Una metrica valida debe ser numerica 8 de 10 medible antes de que termine el experimento en 2 horas y ligada directamente a la hipotesis. Las opciones B C y D son metricas de proceso que no responden la pregunta del prototipo: el usuario adopta el comportamiento que valida la propuesta de valor."
        },
        {
          "id": "F11.01",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El equipo observa a Rosa usando el prototipo y anota: Rosa dijo que le gusta mucho el resumen nocturno y que lo encuentra muy util para su negocio. El instructor tacha esa nota. Cual es el diagnostico correcto?",
          "options": [
            "El error es la redaccion; debe citarse textualmente entre comillas para que la nota sea valida en el registro.",
            "La nota es valida si Rosa la dijo espontaneamente y sin que le preguntaran directamente sobre el servicio.",
            "El instructor se equivoca: las opiniones positivas documentadas ayudan a argumentar el pitch del proyecto.",
            "En el Formato 11 van comportamientos observados no opiniones; lo valido es: Rosa volvio a usarlo 6 de 7 noches."
          ],
          "correct": 3,
          "feedback": "El Formato 11 pide: Anota lo que la gente hace con tu prototipo no lo que opina. La columna clave es el hecho verificable: pago o volvio. El comportamiento real volvio pago predice la adopcion; la opinion positiva no lo hace."
        },
        {
          "id": "F11.02",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El Formato 11 incluye cuatro metricas: Activacion Retencion Conversion a pago y Recomendacion. Un equipo tiene: 20 prueban 14 vuelven la semana siguiente 11 lo recomiendan pero ninguno ha pagado aun. Cual metrica esta en riesgo?",
          "options": [
            "Retencion: 14 de 20 es solo el 70 por ciento justo en el limite; cualquier semana de baja los deja debajo.",
            "Conversion a pago: saben que retienen y recomiendan pero no han probado si alguien pagara por ello.",
            "Activacion: si 20 prueban pero 6 no vuelven esos 6 nunca llegaron al primer momento de valor real.",
            "Recomendacion: 11 de 20 es el 55 por ciento lo que indica que el producto aun no genera entusiasmo genuino."
          ],
          "correct": 1,
          "feedback": "Tener retencion y recomendacion sin ninguna conversion a pago es una senal critica: el producto puede ser valioso gratuitamente pero no sostenible. El Formato 13 LTV/CAC no puede calcularse sin al menos un pago real. La pregunta que el equipo debe hacerse es: Que impediria que alguien pague."
        },
        {
          "id": "F11.03",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "La metrica de exito era 7 de 10 completan la tarea sin ayuda. Solo 4 de 10 lo lograron pero todos fallaron exactamente en el mismo punto: la pantalla 2 del flujo. Segun el Formato 11 cual es la decision mas defendible?",
          "options": [
            "Iterar: el problema esta localizado en un paso especifico no en la propuesta de valor del producto completo.",
            "Pivotar: si mas de la mitad falla la hipotesis de que el producto es usable esta refutada definitivamente.",
            "Parar: un resultado de 4 de 10 con la metrica en 7 demuestra que el producto no es viable para el mercado.",
            "Repetir la prueba con usuarios distintos para confirmar si el problema es de diseno o de muestra estadistica."
          ],
          "correct": 0,
          "feedback": "El Formato 11 ofrece tres opciones: Iterar Pivotar o Parar. Que todos fallen en el mismo punto es senal de un problema de diseno de interfaz pantalla 2 confusa no de propuesta de valor equivocada. Pivotar o Parar implica que la hipotesis central fallo lo que aqui no es el caso."
        },
        {
          "id": "F11.04",
          "category": "fmt11",
          "categoryName": "Formato 11 — Registro de prueba con usuarios",
          "text": "El Formato 11 pide dar al usuario una tarea y pedirle que piense en voz alta sin ayudarle. Un equipo ayuda al tercer usuario porque lleva 5 minutos atascado y parece frustrado. Cual es el diagnostico correcto?",
          "options": [
            "Hicieron bien: un usuario frustrado durante 5 minutos ya aporto datos suficientes para el registro.",
            "Depende: si la ayuda fue minima senalar la pantalla correcta el dato puede conservarse con una nota.",
            "El Formato 11 no prohibe ayudar; prohibe opinar; senalar donde hacer clic no contamina el experimento.",
            "Invalidaron el dato: cada ayuda elimina la evidencia de usabilidad que el Formato 11 busca capturar."
          ],
          "correct": 3,
          "feedback": "El Formato 11 dice: Dale una tarea pidele que piense en voz alta y no la ayudes. Cada ayuda elimina una instancia de dato de usabilidad. El punto donde se tranca el tiempo que tarda y lo que dice son exactamente los datos valiosos. La frustracion visible ES el dato no un problema a resolver en ese momento."
        },
        {
          "id": "F12.01",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "Un equipo llena el bloque 1 Problema del Lean Canvas de CitaClara con: Crear una app de gestion de citas medicas para consultorios pequenos de la ciudad. Que correccion es necesaria?",
          "options": [
            "La descripcion es valida si se anade el segmento objetivo al inicio de la frase para contextualizarla.",
            "El error es la extension; el bloque 1 admite maximo diez palabras descriptivas del problema central.",
            "La frase pertenece al bloque 4 Solucion; basta moverla para que el Canvas quede estructuralmente correcto.",
            "Eso es la solucion no el problema; en el bloque 1 va: Los consultorios pierden el 15 por ciento de citas por falta de confirmacion."
          ],
          "correct": 3,
          "feedback": "El Lean Canvas tiene 9 bloques con funciones distintas. El bloque 1 es el Problema de los clientes. Crear una app describe la solucion no el problema. Colocar la solucion en el bloque de problema indica que el equipo no definio que duele solo que quiere construir."
        },
        {
          "id": "F12.02",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "Ash Maurya diseno el Lean Canvas para llenarlo en 20 minutos y tratar cada bloque como una hipotesis por validar. Cual es la consecuencia practica mas importante de ese principio para el equipo?",
          "options": [
            "Deben completar los 9 bloques antes de hacer una sola entrevista o experimento en campo con usuarios.",
            "Deben actualizar el Canvas cuando la evidencia de campo contradiga cualquiera de los nueve bloques.",
            "El Canvas reemplaza al plan de negocios y no necesita revisarse despues del primer lanzamiento del producto.",
            "Solo los bloques 1 2 y 3 son hipotesis; los demas reflejan datos establecidos del modelo de negocio."
          ],
          "correct": 1,
          "feedback": "El Formato 12 dice: Trata cada bloque como una hipotesis por validar. Si una hipotesis se refuta con datos reales por ejemplo el canal de ventas no funciona el bloque debe actualizarse. El Lean Canvas no es estatico: es un mapa de suposiciones que el equipo va confirmando o descartando con evidencia."
        },
        {
          "id": "F12.03",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "El bloque 8 Metricas clave del Lean Canvas de CierreYa incluye restaurantes activos retencion mensual y resumenes leidos. Un miembro propone agregar numero total de descargas de la app como metrica principal. Que diagnostico es el mas acertado?",
          "options": [
            "Las descargas son metricas de vanidad: miden intencion no comportamiento real de uso o de pago efectivo.",
            "Las descargas son validas como metrica de adquisicion; el problema es que CierreYa opera por WhatsApp.",
            "Las descargas son la metrica de Activacion del Formato 11; colocarlas en el Canvas las duplicaria.",
            "Son utiles en la etapa inicial para demostrar traccion a inversores; luego se reemplazan por metricas reales."
          ],
          "correct": 0,
          "feedback": "Las metricas clave de CierreYa miden comportamiento: activos siguen usando retencion vuelven a pagar y resumenes leidos consumen el valor. Las descargas miden si alguien instalo la app no si la uso ni si pago. Una app con 10000 descargas y 0 usuarios activos tiene metricas de vanidad perfectas."
        },
        {
          "id": "F12.04",
          "category": "fmt12",
          "categoryName": "Formato 12 — Lean Canvas",
          "text": "El bloque 9 Ventaja injusta del Lean Canvas de CierreYa dice: Precios del mercado acumulados y red de referidos. Un miembro dice que la red de referidos deberia ir en el bloque 5 Canales. Cual tiene razon y por que?",
          "options": [
            "El miembro del equipo: los referidos son un canal de adquisicion y pertenecen al bloque 5 de distribucion.",
            "Ambos tienen razon: el Lean Canvas permite que un elemento aparezca en dos bloques si cumple dos funciones.",
            "Ninguno: los referidos pertenecen al bloque 8 Metricas porque la tasa de recomendacion es medible.",
            "El documento original: la red acumulada es una ventaja que la competencia nueva no puede copiar rapidamente."
          ],
          "correct": 3,
          "feedback": "Los referidos como canal bloque 5 son el mecanismo de distribucion actual. Los referidos como ventaja injusta bloque 9 son la red acumulada de clientes satisfechos algo que un competidor nuevo no puede tener de inmediato. Es el activo relacional construido con el tiempo no solo el canal."
        },
        {
          "id": "F13.01",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "CitaClara genera a un consultorio 9 citas confirmadas adicionales al mes a 30 dolares cada cita y ahorra 22 horas de secretaria a 3 dolares la hora. El cobro mensual es 50 dolares. Segun el Formato 13 el precio esta dentro del rango recomendado?",
          "options": [
            "No: 50 dolares supera el 15 por ciento del valor generado 336 por 0.15 igual 50.40 que es el limite superior estricto.",
            "Si pero al limite: 50 dolares es el 85 por ciento del rango maximo y deja poco margen para aumentar el precio despues.",
            "No: las 22 horas de secretaria 66 dolares no deben sumarse porque son costos internos del consultorio mismo.",
            "Si: el valor mensual es 336 dolares; el rango recomendado es 34 a 67 dolares 10 a 20 por ciento del valor y 50 cae dentro."
          ],
          "correct": 3,
          "feedback": "El Formato 13 calcula: Valor mensual igual 9 citas por 30 mas 22h por 3 igual 270 mas 66 igual 336. Rango igual 336 por 0.10 a 336 por 0.20 igual 33.60 a 67.20. El precio de 50 cae dentro. El formato incluye las horas de secretaria porque son dinero real que el consultorio deja de perder."
        },
        {
          "id": "F13.02",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "CitaClara cobra 50 dolares al mes tiene un costo por cliente de 10 dolares y una cancelacion mensual del 5 por ciento. Cual es el LTV correcto y que nos dice sobre la salud del negocio?",
          "options": [
            "1000 dolares: precio 50 dividido cancelacion 5 por ciento sin aplicar el margen bruto al calculo de largo plazo.",
            "500 dolares: diferencia precio-costo 40 dividido cancelacion 5 por ciento sin ponderar por el precio mensual.",
            "800 dolares: precio 50 por margen bruto 80 por ciento dividido cancelacion 5 por ciento; con CAC de 100 LTV/CAC es 8: negocio sano.",
            "480 dolares: precio anual 600 por margen bruto 80 por ciento sin dividir para la cancelacion mensual acumulada."
          ],
          "correct": 2,
          "feedback": "Formula del Formato 13: LTV igual Precio por margen bruto dividido cancelacion mensual. Margen bruto: 50 menos 10 igual 40. LTV igual 40 dividido 0.05 igual 800 dolares. El cálculo correcto deduce el margen bruto real antes de dividir."
        },
        {
          "id": "F13.03",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "El precio minimo segun el Formato 13 se calcula como: Costo por cliente dividido 0.30 para asegurar margen bruto del 70 por ciento. Si el costo por cliente de CierreYa es 5 dolares al mes cual es el precio minimo y que significa?",
          "options": [
            "5 dolares: el precio minimo siempre iguala al costo por cliente; el margen se calcula sobre esa base inicial.",
            "3.50 dolares: el 70 por ciento del costo por cliente es el precio minimo para garantizar la rentabilidad operativa.",
            "16.67 dolares: por debajo de ese valor CierreYa no puede sostener sus costos con el margen minimo del 70 por ciento.",
            "50 dolares: el precio minimo se multiplica por el factor de mercado estandar x10 para el precio de lanzamiento."
          ],
          "correct": 2,
          "feedback": "Formula del Formato 13: Precio minimo igual Costo por cliente dividido 0.30. Para CierreYa: 5 dividido 0.30 igual 16.67. Cobrar menos de 16.67 hace que el margen bruto sea menor al 70 por ciento requerido. En el ejemplo del documento el costo de CitaClara es aprox 10 y el precio minimo es 33 el dato exacto de la tabla."
        },
        {
          "id": "F13.04",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "Un equipo calcula LTV de su cliente en 200 dolares y CAC en 80 dolares. Que conclusion es la mas defendible segun el Formato 13?",
          "options": [
            "LTV/CAC es 2.5: es un buen resultado porque supera 1 lo que garantiza que el negocio no pierde dinero.",
            "LTV/CAC es 2.5: esta por debajo de 3 lo que indica riesgo; deben reducir el CAC o aumentar la retencion.",
            "El CAC debe reducirse a 40 dolares para que LTV/CAC llegue a 5 el estandar ideal de la industria SaaS global.",
            "El dato no es concluyente: solo importa LTV/CAC cuando el negocio tiene mas de 100 clientes activos."
          ],
          "correct": 1,
          "feedback": "El Formato 13 establece: LTV dividido CAC debe ser mayor a 3. Con 200 dividido 80 igual 2.5 el ratio esta por debajo. No significa que el negocio pierde dinero 2.5 mayor a 1 pero el margen de recuperacion de inversion en adquisicion es insuficiente. El equipo tiene dos palancas: aumentar la retencion o reducir el CAC."
        },
        {
          "id": "F13.05",
          "category": "fmt13",
          "categoryName": "Formato 13 — Calculo de precio y LTV/CAC",
          "text": "Un servicio genera 336 dolares de valor mensual al cliente. La alternativa actual secretaria manual cuesta 90 dolares al mes. El costo por cliente del equipo es 10 dolares. Segun el Formato 13 entre que rango debe estar el precio?",
          "options": [
            "Debe igualarse a la alternativa de 90 dolares para capturar todo el valor diferencial que la competencia deja.",
            "Entre 33 dolares piso 10 dividido 0.30 y 67 dolares 20 por ciento de 336 considerando que la alternativa cuesta 90.",
            "Puede llegar hasta 336 dolares porque ese es el valor total generado y el cliente deberia pagar por el valor real.",
            "Debe ser 10 dolares menos que la alternativa 80 dolares para ganar mercado exclusivamente por diferencial de precio."
          ],
          "correct": 1,
          "feedback": "El Formato 13 establece tres referencias: el piso costo dividido 0.30 igual 33 el techo valor por 0.20 igual 67.20 y la alternativa del cliente 90 dolares. Como la alternativa cuesta 90 y el precio maximo recomendado es 67 cobrar dentro de ese rango es consistente con las tres variables del formato."
        },
        {
          "id": "F14.01",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El Formato 14 clasifica los riesgos en tres tipos: Plataforma Tecnico y Legal. Un equipo agrega el equipo no tiene tiempo para dar soporte el fin de semana y lo clasifica como Tecnico. Cual es el diagnostico mas acertado?",
          "options": [
            "Es correcto clasificarlo como Tecnico porque el soporte depende de la infraestructura del sistema tecnologico.",
            "No es un riesgo relevante para este formato; solo se registran riesgos externos al equipo y al proyecto.",
            "Es un riesgo de Plataforma porque el soporte usa WhatsApp Business que es una herramienta de terceros.",
            "Es un riesgo operativo o de equipo no Tecnico; el Formato 14 cubre fallas de plataformas IA y tramites legales."
          ],
          "correct": 3,
          "feedback": "El Formato 14 documenta tres tipos: Plataforma dependencia de terceros Tecnico la IA puede dar informacion incorrecta y Legal tramites consentimiento. El riesgo de capacidad operativa del equipo no encaja en ninguna categoria del Formato 14: es un riesgo de recursos humanos o gestion de proyecto."
        },
        {
          "id": "F14.02",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El Formato 14 incluye en la Lista de control: Toda conversacion sensible pasa a una persona al instante. Para un proyecto como CitaClara que procesa datos de pacientes con IA por que ese item es el mas critico?",
          "options": [
            "La regulacion ecuatoriana exige revision humana de todos los mensajes de salud antes de enviarlos al usuario.",
            "La IA puede generar informacion medica incorrecta; una persona humana evita que ese error llegue al paciente.",
            "Sin revision humana la IA no puede personalizar el mensaje segun el historial clinico del paciente.",
            "El costo de las APIs aumenta exponencialmente si la IA procesa conversaciones medicas sin limite de tiempo."
          ],
          "correct": 1,
          "feedback": "El Formato 14 lista como riesgo Tecnico: La IA inventa un consejo medico clinico. La accion de prevencion es: Acotarla a un documento base; lo clinico pasa a la recepcionista. Una IA mal configurada puede fabricar informacion medica plausible pero incorrecta alucinaciones generando dano clinico real."
        },
        {
          "id": "F14.03",
          "category": "fmt14",
          "categoryName": "Formato 14 — Registro de riesgos",
          "text": "El equipo de CierreYa identifica el riesgo Meta bloquea o demora el numero de WhatsApp Business con Probabilidad M media e Impacto A alto. Que accion de prevencion es mas coherente con el ejemplo del Formato 14?",
          "options": [
            "Esperar al lanzamiento para iniciar la aprobacion; Meta aprueba mas rapido cuando hay usuarios activos.",
            "Iniciar la aprobacion del numero en la semana 4 del proyecto y tener un canal de respaldo por SMS o correo.",
            "Usar el numero personal del equipo hasta que Meta apruebe; la transicion es sencilla despues del lanzamiento.",
            "Cambiar el canal principal a Telegram para eliminar completamente la dependencia de las plataformas de Meta."
          ],
          "correct": 1,
          "feedback": "El Formato 14 documenta exactamente ese riesgo con esa accion: Iniciar la aprobacion en la semana 4; solo pacientes que aceptaron; respaldo por SMS o correo. La prevencion combina accion proactiva temprana y canal de respaldo alternativo. Esperar al lanzamiento es el error mas comun: Meta puede tardar semanas."
        },
        {
          "id": "BMC.01",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "El equipo de «Fiado Claro» escribe en su bloque de Segmento: «Pequeños comerciantes de 30 a 60 años de Ecuador». Según los criterios del Canvas, ¿qué diagnóstico técnico describe mejor esta formulación?",
          "options": [
            "Es válido y suficiente: la edad delimita la madurez comercial y el país define el marco legal del mercado.",
            "Es demográfico pero no accionable: describe quiénes son, pero omite dónde ubicarlos y qué conducta tienen con el fiado.",
            "Es excesivamente estrecho: restringir el segmento a Ecuador frena el potencial de escalamiento regional en etapas tempranas.",
            "Es incompleto por omisión de género: añadir la distinción hombre/mujer basta para convertirlo en un segmento operativo."
          ],
          "correct": 1,
          "feedback": "El Canvas distingue un segmento meramente demográfico de uno accionable. «Comerciantes de 30 a 60 años» indica edad y país, pero no define su comportamiento observable ni cómo localizarlos. Un segmento accionable como «tiendas de barrio de Quito que fían en cuaderno y cobran semanalmente» permite salir a buscarlos y validar de inmediato."
        },
        {
          "id": "BMC.02",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "«BiciCampus» ofrece alquiler de bicicletas eléctricas en la universidad. En el bloque 1 escribe: «Estudiantes que viven a menos de 3 km del campus y que hoy llegan en taxi». ¿Qué juicio técnico es el más acertado sobre este segmento?",
          "options": [
            "Es demográfico básico: debería incorporar obligatoriamente el rango de edad y la facultad del estudiante para tener utilidad práctica.",
            "Es incompleto por confusión de roles: clasifica al usuario final sin identificar al padre de familia como pagador principal.",
            "Es excesivamente restrictivo: limitar el radio a 3 km excluye a la mayor parte del mercado universitario potencial.",
            "Es accionable y preciso: delimita ubicación geográfica, conducta de movilidad actual y un costo alternativo real a sustituir."
          ],
          "correct": 3,
          "feedback": "La formulación es accionable porque combina cercanía geográfica (menos de 3 km), comportamiento actual (llegar en taxi) y un dolor económico medible (gasto recurrente en pasajes). Esto permite salir a buscarlos en paradas y accesos del campus. La clase enseña que un nicho acotado y observable es superior a un público masivo e indeterminado."
        },
        {
          "id": "BMC.03",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "«AlmuerzoListo» es una app de pedidos anticipados en el campus universitario. El equipo identifica dos actores: (A) el estudiante que realiza y paga el pedido; (B) los bares del campus que preparan y entregan la comida. Según el Canvas, ¿cómo se clasifican técnicamente?",
          "options": [
            "A es pagador y B es usuario: ambos deben consolidarse formalmente dentro del bloque 1 como clientes de doble cara del sistema.",
            "Ambos son clientes equivalentes: se debe formular un lienzo Canvas independiente para cada uno de ellos.",
            "A es cliente en el bloque 1 (usuario y pagador); B es socio clave en el bloque 8, no segmento de clientes.",
            "B es el cliente principal porque elabora el menú; A es únicamente un beneficiario secundario del sistema."
          ],
          "correct": 2,
          "feedback": "En el Canvas, el bloque 1 agrupa a quienes reciben la propuesta de valor y pagan por ella (el estudiante). Los bares universitarios preparan el menú y operan como socios clave (bloque 8) o aliados de entrega, no como el destinatario que demanda la solución. Confundir aliados de suministro con clientes en el bloque 1 es un error metodológico recurrente."
        },
        {
          "id": "BMC.04",
          "category": "bloque1",
          "categoryName": "Bloque 1 — Segmento de Clientes",
          "text": "Una startup de tutorías universitarias escribe en su bloque 1: «Todos los estudiantes universitarios de Ecuador». Cuenta con un presupuesto piloto de 200 dólares. Según la metodología del Canvas, ¿cuál es la decisión inicial correcta?",
          "options": [
            "Acotar a un nicho accionable: enfocarse en estudiantes de Ingeniería de la PUCE con dificultades antes de exámenes parciales.",
            "Lanzar la campaña nacional de inmediato: un mercado masivo atrae rondas de capital semilla y valida la propuesta comercial con mayor rapidez.",
            "Detener la validación hasta conseguir mayor presupuesto: 200 dólares impiden abarcar un segmento representativo.",
            "Registrar la marca institucionalmente: proteger la propiedad intelectual antes de seleccionar una facultad específica."
          ],
          "correct": 0,
          "feedback": "Con un presupuesto inicial de 200 dólares es inviable captar un mercado nacional. La metodología exige comenzar con un segmento de playa (beachhead market) claramente localizable (estudiantes de Ingeniería de una facultad específica ante exámenes parciales). Esto permite entrevistas presenciales, feedback rápido y validación de tracción antes de expandirse a otras universidades."
        },
        {
          "id": "BMC.05",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "«Fiado Claro» define su bloque 2 como: «App móvil con IA que reconoce la caligrafía del cuaderno de fiado y actualiza los saldos de cada vecino automáticamente». Según los niveles de adopción tecnológica (adorno, ayuda, núcleo), ¿en qué nivel opera esta IA?",
          "options": [
            "Adorno superficial: si la IA se desconecta, el registro manual de cobros en papel cumple la misma función sin pérdidas.",
            "Ayuda complementaria: agiliza la digitación de nombres, pero el tendero podría transcribirlos en Excel con igual resultado.",
            "Núcleo condicional: solo califica como núcleo tecnológico si la precisión algorítmica de lectura automatizada supera el 99 % en condiciones reales de baja luz.",
            "Núcleo estructural: sin el modelo de visión artificial es inviable procesar miles de notas manuscritas con inmediatez y sin error."
          ],
          "correct": 3,
          "feedback": "La inteligencia artificial es núcleo cuando constituye la esencia misma de la propuesta y no puede suprimirse sin destruir el valor ofrecido. La lectura instantánea de cuadernos con caligrafías heterogéneas es humanamente inabarcable en tiempo real; si se retira la IA, la promesa de eliminar la digitación manual desaparece."
        },
        {
          "id": "BMC.06",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "Se evalúan cuatro redacciones de propuesta de valor para una app de tutorías. ¿Cuál aplica con mayor rigor la estructura estándar: «Ayudamos a [segmento] que [problema], con [solución], a diferencia de [alternativa]»?",
          "options": [
            "«La plataforma líder en Ecuador que conecta alumnos universitarios con tutores altamente calificados a tarifas sumamente accesibles y planes de financiamiento directo.»",
            "«Ayudamos a estudiantes universitarios con dudas en materias difíciles, con tutores expertos, a diferencia de estudiar solos.»",
            "«Ayudamos a estudiantes de Ingeniería de la PUCE que reprueban Cálculo, con tutorías de pares en 24 h, a diferencia de videos de YouTube sin interacción.»",
            "«Conectamos tutores destacados con estudiantes rezagados de forma eficiente mediante algoritmos de emparejamiento inteligente.»"
          ],
          "correct": 2,
          "feedback": "La formulación técnica rigurosa exige los cuatro componentes definidos: segmento concreto (alumnos de Ingeniería PUCE), dolor agudo (reprobar Cálculo), solución específica (tutorías de pares en 24 horas) y alternativa actual insatisfactoria (videos estáticos de YouTube sin retroalimentación). Las demás formulaciones son lemas comerciales genéricos."
        },
        {
          "id": "BMC.07",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "«Raíces Andinas» comercializa canastas agroecológicas: «Comida fresca a domicilio; pago directo al agricultor; trazabilidad del cultivo». Un competidor nuevo publica idéntica promesa textual. ¿En qué bloque del Canvas radica la verdadera barrera de defensa de «Raíces Andinas»?",
          "options": [
            "En el bloque 9 de costos: contar con costos operativos reducidos permite bajar precios y expulsar competidores del mercado.",
            "En el bloque 8 de socios clave: alianzas exclusivas y de confianza con asociaciones campesinas impiden la réplica de la cadena.",
            "En el bloque 2 de propuesta: cualquier texto publicitario que pueda transcribirse carece de diferenciación comercial genuina.",
            "En el bloque 5 de ingresos: la lealtad del cliente se asegura mediante tarifas de suscripción con descuento por pago anticipado."
          ],
          "correct": 1,
          "feedback": "La propuesta de valor escrita en papel es fácilmente copiable por cualquier imitador. La ventaja competitiva real reside en los bloques del lado izquierdo del lienzo: acuerdos de exclusividad, redes de abastecimiento y confianza histórica con comunidades productoras (Socios Clave), los cuales ningún competidor puede reproducir de la noche a la mañana."
        },
        {
          "id": "BMC.08",
          "category": "bloque2",
          "categoryName": "Bloque 2 — Propuesta de Valor",
          "text": "El marco ALAS advierte que incorporar IA como «adorno» devalúa la solidez del modelo de negocio. ¿Cuál de los siguientes casos ejemplifica claramente el uso de IA como adorno?",
          "options": [
            "Una plataforma de almuerzos universitarios que incrusta un chatbot genérico de saludo y preguntas frecuentes en su menú.",
            "Un sistema de visión artificial que detecta plagas en cultivos a partir de fotografías tomadas en campo por el agricultor.",
            "Un motor de optimización matemática que diseña rutas de despacho logístico en tiempo real según el congestionamiento vehicular.",
            "Una herramienta que escanea contratos de arrendamiento y extrae cláusulas de penalización financiera para ferreterías."
          ],
          "correct": 0,
          "feedback": "Un chatbot conversacional genérico colocado en una app de pedidos no interviene en la propuesta medular: la selección, compra y entrega de comida se realizan exactamente igual con o sin él. En cambio, en visión computacional o cálculo de rutas, la IA es el motor operativo indispensable sin el cual el servicio deja de existir."
        },
        {
          "id": "BMC.09",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "«Fiado Claro» anota en su bloque de Canales la frase «redes sociales». Desde una perspectiva operativa para el segmento de «tiendas de barrio tradicionales», ¿qué canal alternativo resulta técnica y comercialmente coherente?",
          "options": [
            "Campañas pagadas de pauta digital en TikTok e Instagram geolocalizadas alrededor de las principales zonas comerciales de Quito.",
            "Una página web corporativa con landing page informativa y formulario de registro para agendar demostraciones virtuales.",
            "Distribución masiva de material publicitario impreso en ferias de innovación y congresos empresariales de la ciudad.",
            "Distribuidores mayoristas y camiones de bebidas que ya visitan semanalmente a los tenderos en sus propios establecimientos."
          ],
          "correct": 3,
          "feedback": "El canal debe interceptar al segmento en su rutina cotidiana. Los tenderos tradicionales no buscan aplicaciones de gestión financiera en Instagram, pero reciben semanalmente a los repartidores mayoristas de bebidas y alimentos con quienes ya mantienen un canal de confianza establecido. Acoplarse a esa logística existente reduce drásticamente el costo de captación."
        },
        {
          "id": "BMC.10",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "«BiciCampus» elige como canal: «Estaciones físicas en los accesos peatonales del campus junto con una aplicación móvil de reserva». ¿Qué ventaja estratégica sustenta esta combinación para estudiantes a menos de 3 km?",
          "options": [
            "Intervención en el punto de paso: intercepta al estudiante en su trayecto habitual y la app agiliza el desbloqueo sin demoras.",
            "Asegura cobertura 100 % digital: prescinde por completo de infraestructura física y suprime los costos de mantenimiento mecánico a nivel de campus.",
            "Exclusividad de canal: los estudiantes universitarios rechazan cualquier contacto comercial que no sea enteramente físico.",
            "Eliminación de intermediarios: permite cobrar en efectivo en las estaciones y elude el cobro de comisiones bancarias."
          ],
          "correct": 0,
          "feedback": "La combinación física y digital (phygital) coloca el servicio exactamente donde ocurre la necesidad (el acceso peatonal al campus por donde el estudiante transita a pie) y utiliza la herramienta digital para eliminar la fricción de filas y trámites de entrega, facilitando la adopción inmediata."
        },
        {
          "id": "BMC.11",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "Una startup comercializa software veterinario por suscripción de 8 dólares mensuales y establece como único canal la «visita presencial puerta a puerta». Evaluando la viabilidad económica del canal, ¿qué inconsistencia presenta?",
          "options": [
            "La venta presencial puerta a puerta está restringida metodológicamente a bienes industriales tangibles de alto tonelaje.",
            "El costo de adquisición de clientes (CAC) por visita presencial superará ampliamente el valor de vida del cliente (LTV).",
            "Las clínicas veterinarias rechazan sistemáticamente cualquier demostración comercial que se realice en su establecimiento.",
            "El software veterinario exige obligatoriamente esquemas de comercialización mediante licenciamiento perpetuo y no suscripción."
          ],
          "correct": 1,
          "feedback": "Un canal presencial puerta a puerta implica gastos de traslado y tiempo de un asesor que superan con creces los 8 dólares mensuales de la suscripción. Si el Costo de Adquisición de Clientes (CAC) es mayor al margen aportado por el cliente en el tiempo (LTV), el modelo quema capital y se vuelve inviable financieramente."
        },
        {
          "id": "BMC.12",
          "category": "bloque3",
          "categoryName": "Bloque 3 — Canales",
          "text": "Considerando que «el canal es la tubería que transporta la propuesta de valor hasta el cliente», ¿cuál de las siguientes startups evidencia la mayor desconexión entre su canal y su segmento objetivo?",
          "options": [
            "«AlmuerzoListo»: app universitaria que utiliza grupos de mensajería estudiantil y carteleras del campus como vía de captación.",
            "«Fiado Claro»: aplicación móvil para tenderos que capacita y distribuye mediante los proveedores de abarrotes de la zona.",
            "«TutorYa»: plataforma 100 % digital de tutorías remotas que renta un local en un centro comercial exclusivo para afiliar alumnos.",
            "«BiciCampus»: servicio de bicicletas compartidas que instala tótems informativos y puntos de entrega en las facultades periféricas."
          ],
          "correct": 2,
          "feedback": "Una plataforma tecnológica de alcance digital que alquila un local físico costoso en un centro comercial para reclutar usuarios comete un error grave de costos y coherencia: incrementa costos fijos innecesarios y restringe su alcance a quienes transitan por ese centro comercial, perdiendo toda la ventaja de escala de un negocio digital."
        },
        {
          "id": "BMC.13",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "«Fiado Claro» define su bloque 4 como: «Envío automático por WhatsApp de un reporte semanal consolidado con el saldo y cobros pendientes de cada vecino». ¿Qué propósito estratégico cumple esta acción en el Canvas?",
          "options": [
            "Actúa como canal de captación: WhatsApp es la vía promocional obligatoria mediante la cual nuevos comercios descubren las bondades del servicio en el barrio.",
            "Fomenta la retención recurrente: genera un hábito semanal de uso que vincula al comerciante sin exigir visitas presenciales.",
            "Constituye un recurso clave: los mensajes salientes representan el principal costo de infraestructura en telecomunicaciones.",
            "Define la propuesta de valor: el reporte impreso o digital constituye el bien final por el que paga el cliente."
          ],
          "correct": 1,
          "feedback": "El bloque de Relaciones con Clientes define los mecanismos para retener y fidelizar al cliente. Un reporte automatizado que llega puntualmente cada semana soluciona una necesidad crítica (gestión de cobros), crea un hábito de consulta sistemático y reduce la tasa de cancelación (churn), asegurando retención sin costo operativo humano."
        },
        {
          "id": "BMC.14",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "El principio de escalabilidad estipula que «el modelo debe operar con la misma efectividad atendiendo a 10 que a 1 000 usuarios». En software, ¿qué mecanismo de relación con clientes presenta mayor escalabilidad?",
          "options": [
            "Comunidad autogestionada de usuarios y base de conocimiento interactiva donde los clientes resuelven dudas entre pares.",
            "Llamadas semanales personalizadas de los fundadores para asesorar individualmente a cada cliente en su proceso de adopción tecnológica y operativa.",
            "Asignación de un ejecutivo de cuenta dedicado las 24 horas para brindar soporte telefónico en cada transacción.",
            "Visitas presenciales bimensuales del equipo técnico a las instalaciones del cliente para capacitar al nuevo personal."
          ],
          "correct": 0,
          "feedback": "Una comunidad de usuarios respaldada por tutoriales y bases de conocimiento escala a costo marginal cercano a cero: el soporte no requiere incrementar la nómina proporcionalmente al ingreso de nuevos clientes. Las visitas presenciales y ejecutivos dedicados generan costos lineales que impiden la escalabilidad de una startup tecnológica."
        },
        {
          "id": "BMC.15",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "«TutorYa» define su relación con clientes indicando únicamente: «Los estudiantes califican con estrellas al tutor al término de cada clase». Desde el diseño del modelo de negocio, ¿qué limitación presenta esta definición?",
          "options": [
            "Confunde categorías: las valoraciones numéricas son activos de propiedad intelectual que pertenecen al bloque 6 de recursos.",
            "Es técnicamente inoperante: las calificaciones de usuario requieren certificaciones notariales para tener validez comercial.",
            "Es una acción transaccional pasiva: recoge retroalimentación posterior, pero no formula un mecanismo activo para que el alumno regrese.",
            "Genera sobrecosto informático: almacenar reseñas de texto en bases de datos relacionales satura la infraestructura tecnológica del servidor central en horas pico."
          ],
          "correct": 2,
          "feedback": "Una encuesta de satisfacción o calificación por estrellas evalúa el servicio brindado, pero no explica cómo la plataforma retiene activamente al estudiante para su próxima necesidad académica. Un mecanismo de relación robusto contemplaría alertas previas a semanas de exámenes, planes de seguimiento académico continuo o incentivos de recompra."
        },
        {
          "id": "BMC.16",
          "category": "bloque4",
          "categoryName": "Bloque 4 — Relación con Clientes",
          "text": "Una startup de inventario para ferreterías ofrece «capacitación presencial individual al momento de la venta». Cuenta con 50 clientes y proyecta alcanzar 300. ¿Qué transformación debe ejecutar en el bloque 4 para sostener el crecimiento?",
          "options": [
            "Contratar un asesor de campo adicional por cada cinco ferreterías incorporadas para mantener inalterable el estándar de atención presencial personalizada.",
            "Establecer una tarifa arancelaria obligatoria a la capacitación física para financiar los viáticos del equipo promotor.",
            "Suprimir todo material de inducción bajo la premisa de que un software intuitivo no demanda explicación operativa alguna.",
            "Migrar hacia un esquema de autoservicio (onboarding digital interactivo, microvideos explicativos y asistencia por chatbot)."
          ],
          "correct": 3,
          "feedback": "Para multiplicar por seis la base de clientes sin disparar la estructura de costos fijos, el modelo de relación debe evolucionar de la atención personal presencial al autoservicio guiado digitalmente (onboarding automatizado, videos y autosoporte). Mantener inducciones físicas causaría cuellos de botella operativos y pérdidas financieras."
        },
        {
          "id": "BMC.17",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«TutorYa» fija una suscripción mensual fija de 120 dólares por acceso ilimitado a tutorías, orientada a estudiantes universitarios de pregrado. ¿Qué falla estructural de modelo de negocio comete este planteamiento?",
          "options": [
            "Incoherencia entre precio y capacidad de pago: el monto excede el presupuesto disponible del estudiante para gastos académicos.",
            "Tarifa subvalorada: un precio de 120 dólares impide remunerar dignamente a profesores universitarios con grado doctoral.",
            "Modelo contractual equivocado: la suscripción fija mensual debió estructurarse bajo un esquema freemium monetizado mediante pauta publicitaria de terceros.",
            "Falla de distribución: el problema no reside en la tarifa, sino en la ausencia de alianzas bancarias para diferir el cobro."
          ],
          "correct": 0,
          "feedback": "El bloque de ingresos debe alinearse rigurosamente con la disposición y capacidad real de pago del segmento. Un estudiante promedio dispone de presupuestos acotados y demanda ayuda en momentos específicos (exámenes). Exigir 120 dólares fijos al mes genera rechazo inmediato; un esquema por sesión (6 a 10 dólares) o paquetes para parciales resulta coherente."
        },
        {
          "id": "BMC.18",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«Fiado Claro» monetiza así: «Registro gratuito para las primeras 20 cuentas fiadas; a partir del cliente número 21 se cobra una suscripción de 5 dólares mensuales». ¿Qué arquitectura de ingresos describe esta propuesta?",
          "options": [
            "Licenciamiento perpetuo: el comerciante adquiere la propiedad del software mediante un único abono inicial de apertura.",
            "Esquema freemium: ofrece una capa de entrada sin costo para generar adopción del hábito y tarifa mensual al expandir la capacidad.",
            "Monetización publicitaria: el servicio se sustenta insertando anuncios comerciales de distribuidores en la interfaz gratuita.",
            "Intermediación transaccional: la plataforma tecnológica retiene una comisión porcentual regulada sobre el importe monetario de cada deuda recuperada en ventanilla."
          ],
          "correct": 1,
          "feedback": "La estructura descrita corresponde a un modelo freemium basado en volumen: la versión básica gratuita permite comprobar el valor de la herramienta y consolidar el hábito en la tienda; al crecer la base de clientes fiadores y aumentar la dependencia operativa del sistema, se activa el cobro de la suscripción mensual."
        },
        {
          "id": "BMC.19",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "Una startup de gestión de inventarios para ferreterías cobra 15 dólares mensuales por local. El costo variable por uso de IA es de 3 dólares mensuales por local. Sus costos fijos operativos suman 180 dólares al mes. ¿Cuántas ferreterías activas necesita para alcanzar el punto de equilibrio?",
          "options": [
            "12 ferreterías: cálculo resultante de dividir el costo fijo total para la tarifa bruta mensual del servicio ofertado.",
            "18 ferreterías: cálculo que sobrestima la meta al añadir indebidamente el costo de la IA al numerador de los costos fijos.",
            "60 ferreterías: cálculo distorsionado que divide el costo fijo únicamente para el costo variable unitario de la IA.",
            "15 ferreterías: cálculo exacto que divide los costos fijos ($180) para la contribución marginal neta ($15 − $3 = $12)."
          ],
          "correct": 3,
          "feedback": "La fórmula del punto de equilibrio operativo es: Costos Fijos ÷ (Precio − Costo Variable Unitario). Aplicando las cifras del caso: $180 ÷ ($15 − $3) = $180 ÷ $12 = 15 ferreterías. Con 15 locales se obtienen $225 de ingresos brutos, los cuales cubren con exactitud los $180 de costos fijos más los $45 de costo variable de IA."
        },
        {
          "id": "BMC.20",
          "category": "bloque5",
          "categoryName": "Bloque 5 — Fuentes de Ingresos",
          "text": "«Raíces Andinas» comercializa canastas de hortalizas a 25 dólares. Eroga 14 dólares en compras directas al agricultor y 4 dólares en despacho motorizado. ¿Qué margen unitario deja cada canasta y cómo se denomina en el Canvas?",
          "options": [
            "7 dólares de utilidad neta definitiva: cifra contable que refleja el remanente libre de gravámenes tras deducir los impuestos corporativos anuales correspondientes.",
            "11 dólares de margen comercial bruto: resultado contable de restar únicamente los insumos agrícolas al precio de venta final.",
            "7 dólares de margen de contribución: excedente unitario ($25 − $18) destinado a absorber la estructura de costos fijos del negocio.",
            "25 dólares de flujo operativo bruto: importe que representa el ingreso disponible al no considerar la logística de despacho."
          ],
          "correct": 2,
          "feedback": "El margen de contribución unitario equivale al precio de venta menos los costos directamente variables vinculados a la entrega de una unidad ($25 − $14 − $4 = $7). Este excedente no constituye utilidad neta todavía; representa la cuota con la que cada canasta vendida financia los costos fijos del emprendimiento (servidores, salarios, administración)."
        },
        {
          "id": "BMC.21",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "«Fiado Claro» enumera en su bloque 6 los siguientes elementos: (1) modelo entrenado de reconocimiento óptico de caracteres; (2) base de datos histórica de cuentas fiadas; (3) flotilla de bicicletas eléctricas de BiciCampus. ¿Qué elemento representa un error de asignación?",
          "options": [
            "Los elementos (1) y (3): los algoritmos de visión representan egresos computacionales y nunca activos de la empresa.",
            "El elemento (3): las bicicletas constituyen activos de una empresa ajena sin relación operativa con la gestión del fiado.",
            "El elemento (2): el historial de adeudos pertenece jurídicamente al comerciante y no califica como recurso del sistema.",
            "Ningún elemento: cualquier herramienta o activo físico dentro de la incubadora universitaria puede compartirse libremente."
          ],
          "correct": 1,
          "feedback": "Los Recursos Clave son los activos propios indispensables para fabricar y sostener la propuesta de valor. La flotilla de bicicletas eléctricas pertenece al modelo de BiciCampus y no tiene función en una app de registro de deudas. En cambio, el algoritmo de IA (1) y la base de datos de comportamiento crediticio (2) son los activos estratégicos medulares de Fiado Claro."
        },
        {
          "id": "BMC.22",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "Siguiendo el principio de «empacar solo lo indispensable para una expedición», una startup de diagnóstico botánico mediante IA evalúa tres elementos: (A) red neuronal entrenada con 50 000 imágenes agrícolas; (B) app móvil de captura fotográfica; (C) oficina física corporativa en Quito. ¿Cuál elemento NO es indispensable en fase temprana?",
          "options": [
            "La red neuronal de visión (A): el reconocimiento botánico de plagas en sembríos puede delegarse provisionalmente a consultas manuales con agrónomos certificados.",
            "La aplicación móvil (B): los agricultores pueden enviar sus fotografías impresas mediante servicios de encomienda postal.",
            "Todos resultan indispensables: una empresa tecnológica no puede constituirse formalmente sin instalaciones inmobiliarias.",
            "La oficina física corporativa (C): el servicio algorítmico y la distribución operan de forma digital y remota sin requerir un local."
          ],
          "correct": 3,
          "feedback": "La red neuronal especializada y la app móvil son los recursos técnicos neurálgicos: sin ellos el diagnóstico instantáneo es imposible. Una oficina física con sala de reuniones no aporta a la captura ni al análisis de imágenes; en etapa inicial genera un costo fijo improductivo que drena liquidez sin mejorar la propuesta de valor."
        },
        {
          "id": "BMC.23",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "Una startup de entregas ultrarrápidas gestiona una flota propia de 200 repartidores vinculados contractualmente para despachar pedidos en menos de 2 horas. Dentro de la taxonomía del Canvas, ¿en qué bloque se clasifica este componente?",
          "options": [
            "En el bloque 6 de recursos clave: la red humana propia constituye el activo logístico medular que hace posible la promesa de entrega.",
            "En el bloque 7 de actividades clave: despachar pedidos representa la faena operativa diaria que ejecuta continuamente el personal contratado por la empresa.",
            "En el bloque 8 de socios clave: los repartidores son siempre proveedores externos independientes sin vínculo con el negocio.",
            "En el bloque 3 de canales: la persona que entrega el paquete representa la vía publicitaria mediante la cual se expone la marca."
          ],
          "correct": 0,
          "feedback": "Cuando una organización cuenta con una red de personal propio que constituye el pilar operativo de su diferenciación (cumplir entregas en menos de 2 horas), dicho activo califica como Recurso Clave de carácter humano (Bloque 6). Si los repartidores pertenecieran a una empresa de encomiendas subcontratada, se clasificarían como Socios Clave (Bloque 8)."
        },
        {
          "id": "BMC.24",
          "category": "bloque6",
          "categoryName": "Bloque 6 — Recursos Clave",
          "text": "En el ámbito de las startups impulsadas por inteligencia artificial, ¿por qué los datos históricos y estructurados de clientes representan un recurso clave más estratégico que el código de la plataforma?",
          "options": [
            "Porque las normas internacionales de propiedad intelectual blindan las bases de datos indefinidamente, mientras que las patentes de código expiran a corto plazo.",
            "Porque almacenar megabytes en repositorios cloud resulta más económico que contratar ingenieros de sistemas seniors.",
            "Porque el software es replicable por competidores, mientras que la data de comportamiento real crea barreras de entrada únicas.",
            "Porque poseer grandes volúmenes de registros contables habilita cobrar tarifas arancelarias premium a los clientes."
          ],
          "correct": 2,
          "feedback": "El código fuente de una plataforma puede reconstruirse o imitarse con suficiente capital. En cambio, los datos reales de comportamiento, morosidad y consumo recolectados a lo largo de meses no se compran en un almacén; alimentan y afinan la precisión de los modelos de IA, generando una ventaja competitiva sostenible e insustituible."
        },
        {
          "id": "BMC.25",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "«Fiado Claro» enumera sus tareas semanales: (1) optimizar los algoritmos de detección de caligrafía difícil; (2) afiliar activamente nuevos comercios de barrio; (3) rediseñar la paleta de colores y el logotipo corporativo. ¿Qué tarea es MENOS crítica para validar el modelo?",
          "options": [
            "La tarea (1): perfeccionar el modelo informático representa una labor técnica especializada de ingeniería que debe subcontratarse de manera obligatoria.",
            "La tarea (3): rediseñar elementos estéticos de marca no incide en la exactitud de lectura ni en la tracción de nuevos usuarios.",
            "La tarea (2): incorporar comercios no aporta valor al tratarse de una gestión comercial ajena al desarrollo informático.",
            "Ninguna tarea: las tres actividades exigen idéntica dedicación horaria para asegurar la supervivencia del negocio."
          ],
          "correct": 1,
          "feedback": "Las Actividades Clave son aquellas que sostienen la propuesta de valor y la viabilidad del negocio. Entrenar el algoritmo garantiza que el producto funcione y afiliar tiendas garantiza ingresos. El rediseño cosmético de isotipos o paletas de colores en fase inicial consume tiempo valioso sin impactar en la solución del dolor ni en la validación comercial."
        },
        {
          "id": "BMC.26",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Una plataforma de tutorías académicas identifica tres procesos operativos: (A) algoritmo de emparejamiento automatizado tutor-alumno; (B) evaluación y filtrado de competencias docentes; (C) publicación de infografías en redes sociales. ¿Qué conjunto constituye su núcleo de actividades clave?",
          "options": [
            "Las actividades A y C: optimizar el emparejamiento algorítmico y sostener presencia masiva en redes sociales captan el volumen de alumnos indispensable.",
            "Las actividades B y C: validar conocimientos y sostener presencia publicitaria compensan cualquier deficiencia de software.",
            "Las actividades A y B: asegurar emparejamiento veloz y certificar la calidad docente sostienen la promesa sustancial del servicio.",
            "Únicamente la actividad A: el algoritmo automatizado de búsqueda representa la única ventaja competitiva de la empresa."
          ],
          "correct": 2,
          "feedback": "La promesa medular de una plataforma educativa descansa en conectar rápidamente con tutores realmente calificados. Si el tutor no domina la materia (falla en B) o la asignación demora días (falla en A), el usuario no regresa. La gestión publicitaria en redes (C) es importante para difusión, pero no define la entrega sustancial del valor educativo."
        },
        {
          "id": "BMC.27",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Las actividades clave corresponden a las tareas sistemáticas que el equipo debe ejecutar periódicamente para cumplir su promesa. ¿Cuál de los siguientes casos presenta una actividad que NO corresponde a su etapa operativa medular?",
          "options": [
            "«Raíces Andinas»: fiscalización técnica periódica de la inocuidad y empaque de hortalizas antes de coordinar los despachos logísticos a hogares suscriptores.",
            "«BiciCampus»: revisión técnica preventiva, recarga energética y lubricación continua de las unidades de transporte.",
            "«AlmuerzoListo»: confirmación diaria y conciliación de platos disponibles con los administradores de los comedores.",
            "«Fiado Claro»: negociación de fusiones y adquisiciones corporativas con consorcios bancarios multinacionales de crédito."
          ],
          "correct": 3,
          "feedback": "Para una startup en validación temprana como Fiado Claro, negociar fusiones o adquisiciones bancarias internacionales es una expectativa especulativa de largo plazo, no una actividad operativa semanal indispensable. El control de canastas, el mantenimiento de bicicletas y la coordinación diaria de menús son tareas operativas críticas sin las cuales el servicio colapsa."
        },
        {
          "id": "BMC.28",
          "category": "bloque7",
          "categoryName": "Bloque 7 — Actividades Clave",
          "text": "Para garantizar la escalabilidad operativa de un modelo de negocio, ¿qué condición deben cumplir las actividades clave al pasar de 10 a 500 transacciones?",
          "options": [
            "Estar estandarizadas y automatizadas mediante procesos documentados y software para no depender de ejecución artesanal.",
            "Exigir que los fundadores dupliquen sus jornadas laborales presenciales para supervisar cada transacción de forma directa.",
            "Incrementar el personal operativo de oficina en idéntica proporción matemática al incremento porcentual de los pedidos.",
            "Postergar toda estandarización metodológica hasta consolidar un fondo de inversión formal que financie consultorías externas."
          ],
          "correct": 0,
          "feedback": "La escalabilidad radica en la capacidad de procesar mayor demanda sin incurrir en incrementos equivalentes de costos ni esfuerzo manual. Si los procesos están documentados y soportados por software (como una receta estandarizada), la operación funciona con la misma fluidez y calidad atendiendo a diez clientes que a un millar, evitando colapsos operativos."
        },
        {
          "id": "BMC.29",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "«Fiado Claro» incluye en su bloque 8 a tres participantes: (1) distribuidores de bebidas de consumo masivo; (2) proveedor del servicio en la nube para la API de visión; (3) los pequeños tenderos de barrio que instalan la app. ¿Cuál de ellos está mal categorizado?",
          "options": [
            "El participante (1): los distribuidores mayoristas representan competidores directos en el abastecimiento físico y no pueden aliarse con plataformas digitales.",
            "El participante (2): los proveedores de infraestructura tecnológica califican exclusivamente como egresos de capital fijo.",
            "El participante (3): los tenderos corresponden al segmento de clientes del bloque 1, puesto que son los destinatarios del valor.",
            "Ninguno: toda entidad o persona física que sostenga interacción contractual califica automáticamente como socio clave."
          ],
          "correct": 2,
          "feedback": "Los socios clave son organizaciones o aliados estratégicos externos que cooperan en la infraestructura del negocio. Los tenderos de barrio son los usuarios y pagadores directos del servicio; por definición conceptual pertenecen al Bloque 1 (Segmentos de Clientes). Ubicarlos en el bloque 8 confunde la demanda con el suministro."
        },
        {
          "id": "BMC.30",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "«Raíces Andinas» establece acuerdos con: asociaciones de pequeños agricultores, empresas de encomiendas motorizadas, pasarela de pago digital y una ONG ambiental. ¿Qué criterio metodológico define que sean socios clave y no recursos propios?",
          "options": [
            "Son socios clave porque son indispensables para la propuesta, pero corresponden a entidades externas ajenas al control directo.",
            "Son socios clave porque formalizan convenios de cooperación interinstitucional con cláusulas notariales de aporte forzoso a los fondos de reserva patrimonial.",
            "Son socios clave porque asumen voluntariamente el pago de las comisiones bancarias generadas por cada transacción del servicio.",
            "Son socios clave porque brindan horas de trabajo comunitario gratuito a cambio de menciones publicitarias en redes sociales."
          ],
          "correct": 0,
          "feedback": "El Canvas delimita claramente los recursos (lo que la empresa posee internamente o controla) de los socios (capacidades y activos que necesita pero que pertenecen a terceros). Raíces Andinas no es propietaria de las parcelas agrícolas ni de las motos de despacho; accede a ellos mediante alianzas estratégicas con organizaciones independientes."
        },
        {
          "id": "BMC.31",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "Una startup que comercializa software de citas médicas para clínicas dentales anota en su bloque de socios clave: «El Ministerio de Salud Pública». ¿Qué debilidad metodológica presenta esta definición?",
          "options": [
            "El Ministerio de Salud Pública encaja formalmente como cliente corporativo institucional y debió tabularse dentro del bloque de segmentos prioritarios de mercado.",
            "El Ministerio de Salud Pública califica como un recurso humano propio porque sus inspectores auditan el establecimiento.",
            "No presenta objeción alguna: todo ministerio gubernamental constituye formalmente un socio estratégico de pleno derecho.",
            "Es un actor regulador institucional del sector, por lo que su mención sin un rol operativo preciso vuelve vago el modelo."
          ],
          "correct": 3,
          "feedback": "Un socio clave no puede ser una mención institucional abstracta. Un ministerio actúa como ente regulador estatal, no como aliado operativo de una startup privada, a menos que exista un convenio explícito (por ejemplo, «homologación del estándar de historia clínica electrónica»). Incluir entidades estatales sin compromiso específico debilita el Canvas."
        },
        {
          "id": "BMC.32",
          "category": "bloque8",
          "categoryName": "Bloque 8 — Socios Clave",
          "text": "Los socios clave permiten cubrir brechas técnicas o capacidades que el equipo fundador «no sabe o no puede hacer por sí solo». Si un equipo de agrotecnología carece de experiencia en entrenamiento de redes neuronales, ¿cuál es el socio más estratégico?",
          "options": [
            "Un estudio de consultoría en experiencia de usuario para rediseñar íntegramente la paleta tipográfica y la iconografía accesible de las interfaces móviles.",
            "Un laboratorio universitario de inteligencia artificial con capacidad de computación para cocrear el modelo algorítmico.",
            "Una asociación comercial gremial para obtener descuentos en stands promocionales en ferias de emprendimiento local.",
            "Una agencia de marketing digital para pautar anuncios patrocinados en canales de mensajería y redes de video."
          ],
          "correct": 1,
          "feedback": "La carencia crítica que compromete la viabilidad técnica de la empresa radica en el desarrollo del modelo de inteligencia artificial. Un laboratorio universitario de investigación en IA resuelve directamente esa falencia crítica mediante investigadores y capacidad de cómputo GPU. Los servicios de publicidad o diseño abordan aspectos periféricos que no resuelven la inviabilidad algorítmica."
        },
        {
          "id": "BMC.33",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "«Fiado Claro» incurre en: servidor en la nube de 50 dólares mensuales, consumo de API de IA de 0,50 dólares por tienda activa y nómina operativa básica de 300 dólares mensuales. Si registra 80 tiendas afiliadas a una tarifa de 5 dólares cada una, ¿cuál es el balance mensual?",
          "options": [
            "Pierde 10 dólares al mes: el costo fijo de $350 supera el margen bruto obtenido tras deducir la infraestructura tecnológica.",
            "Gana 50 dólares al mes: los $400 de ingresos cubren holgadamente el servidor y la nómina sin considerar gastos variables.",
            "Presenta punto de equilibrio nulo: los $400 facturados coinciden matemáticamente con los compromisos devengados en el período.",
            "Gana 10 dólares al mes: ingresos brutos de $400 frente a costos totales de $390 ($350 fijos más $40 de consumo de IA)."
          ],
          "correct": 3,
          "feedback": "Costos fijos totales: servidor ($50) + nómina ($300) = $350 mensuales. Costos variables totales: 80 tiendas × $0,50 = $40 mensuales. Costo total de operación: $350 + $40 = $390 al mes. Ingresos brutos: 80 tiendas × $5 = $400 al mes. Balance neto: $400 − $390 = +$10 mensuales de beneficio operativo."
        },
        {
          "id": "BMC.34",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "En modelos de negocio que integran inteligencia artificial, ¿por qué constituye un error conceptual crítico ignorar los costos de cómputo de la IA dentro del bloque 9?",
          "options": [
            "Porque los fondos de inversión internacionales establecen como requisito contractual vinculante que el cómputo de IA represente la mayoría del presupuesto operativo.",
            "Porque las plataformas de IA constituyen el único concepto de gasto financiero admisible en estados de pérdidas de software.",
            "Porque los servicios de inferencia se tarifican por consumo (tokens o llamadas API), escalando con los usuarios y erosionando el margen.",
            "Porque sin el desglose contable de la IA resulta matemáticamente inviable tramitar patentes de invención en el país."
          ],
          "correct": 2,
          "feedback": "Los servicios de inteligencia artificial de frontera (APIs de visión computacional, modelos de lenguaje, etc.) se facturan bajo demanda (por token procesado, imagen analizada o volumen de peticiones). Si no se presupuestan como costo variable unitario, a medida que la startup capta más usuarios el costo técnico crece exponencialmente, pudiendo volver deficitario un negocio que aparentaba ser rentable."
        },
        {
          "id": "BMC.35",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "Una startup registra costos fijos de 240 dólares mensuales y comercializa un servicio a 12 dólares por usuario. El costo variable de inferencia por IA es de 2 dólares por usuario. El equipo calcula su punto de equilibrio como 240 ÷ 12 = 20 usuarios. ¿Qué error cometió?",
          "options": [
            "Omitió aplicar la retención del impuesto a la renta correspondiente sobre las ventas mensuales facturadas antes de determinar el volumen de equilibrio fiscal.",
            "Dividió para el precio bruto en lugar de la contribución marginal ($12 − $2 = $10); la meta correcta es 240 ÷ 10 = 24 usuarios.",
            "Debió consolidar el valor unitario de la IA dentro de los costos fijos mensuales elevando el numerador a 242 dólares.",
            "Multiplicó equivocadamente los costos fijos por la cantidad de clientes activos en lugar de efectuar una división ordinaria."
          ],
          "correct": 1,
          "feedback": "El punto de equilibrio se calcula dividiendo los costos fijos para el margen de contribución unitario (Precio de venta − Costos variables unitarios). El equipo dividió para el precio de venta completo ($12), omitiendo que cada usuario consume $2 de IA. La ecuación real es: 240 ÷ (12 − 2) = 240 ÷ 10 = 24 usuarios necesarios para no perder dinero."
        },
        {
          "id": "BMC.36",
          "category": "bloque9",
          "categoryName": "Bloque 9 — Estructura de Costos",
          "text": "De acuerdo con las directrices académicas del Business Model Canvas, ¿qué tres elementos deben figurar explícitamente en el bloque 9 para considerar completa su formulación?",
          "options": [
            "Los costos fijos basales, los costos variables unitarios (incluyendo IA) y el cálculo matemático explícito del punto de equilibrio.",
            "El detalle exclusivo de gastos de pauta en motores de búsqueda, el arriendo de oficinas y la provisión de indemnizaciones laborales.",
            "El balance general auditado del ejercicio fiscal anterior, el desglose de amortizaciones patrimoniales y el flujo de caja descontado.",
            "La nómina salarial íntegra de los fundadores, las cotizaciones de seguros de riesgo y el presupuesto de viajes internacionales."
          ],
          "correct": 0,
          "feedback": "Una estructura de costos rigurosa en el Canvas exige identificar los egresos fijos (aquellos independientes del volumen de ventas como servidores o sueldos mínimos), los egresos variables directos por cliente (como consumo de API de IA o empaques) y el cálculo transparente del punto de equilibrio en unidades de clientes o ventas necesarias para alcanzar la sostenibilidad."
        }
      ]
    }
  ]
};
