// Banco de Preguntas Design Thinking - Emprendimiento RDA2
// Libro: Design Thinking - Emprender con Inteligencia Artificial (Francisco Rodríguez Clavijo)
window.QUIZ_DATA = {
  "RDA2": [
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
            "Falló en la ejecución técnica: la plataforma tenía bugs que espantaron a los usuarios.",
            "Confundió el placer de programar con crear valor; construyó sin verificar que el problema existía.",
            "Eligió mal el canal de distribución: debió lanzar en redes sociales antes que en tiendas de apps.",
            "Le faltó un cofundador de negocio: el ingeniero solitario no puede vender sin un comercial."
          ],
          "correct": 1,
          "feedback": "El libro describe exactamente este caso como 'el síndrome del programador solitario': se confunde el placer de programar con crear valor para alguien. Saltar al código sin investigar es análogo a un médico que receta sin preguntar qué duele. El problema no fue técnico sino de mercado."
        },
        {
          "id": "DT.02",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "El libro compara a un ingeniero que lanza sin investigar con un médico que receta a los 30 segundos sin preguntar qué duele. ¿Qué conclusión pedagógica es la más defendible según el texto?",
          "options": [
            "Ambos casos terminan bien si el profesional tiene suficiente experiencia acumulada.",
            "El problema de ambos es la falta de herramientas técnicas actualizadas.",
            "En ambos casos el riesgo principal es de mercado o de diagnóstico, no de ejecución.",
            "La analogía falla: la medicina tiene protocolos rígidos y el software no los necesita."
          ],
          "correct": 2,
          "feedback": "El libro usa la analogía médica para ilustrar que el riesgo no es técnico sino de diagnóstico: el médico puede recetar perfectamente un medicamento equivocado, y el ingeniero puede programar perfectamente la solución incorrecta. El riesgo central es identificar mal el problema."
        },
        {
          "id": "DT.03",
          "category": "cap1",
          "categoryName": "Cap. 1 — Por qué Design Thinking",
          "text": "Hace una década levantar una plataforma exigía un equipo grande y el riesgo era técnico. Hoy una persona con IA arma un prototipo en una tarde. Según el libro, ¿qué cambio de riesgo describe esa afirmación?",
          "options": [
            "El riesgo técnico desapareció; ahora el único riesgo es legal y regulatorio.",
            "El riesgo pasó de técnico a de mercado: como construir es fácil, el peligro es construir lo equivocado.",
            "El riesgo pasó de técnico a financiero: los costos de las APIs de IA son impredecibles.",
            "El riesgo se mantuvo igual; solo cambió quién puede asumirlo, de equipos a individuos."
          ],
          "correct": 1,
          "feedback": "El libro lo dice literalmente: 'el riesgo pasó a ser de mercado. Como construir es tan fácil, el peligro real es construir lo equivocado.' La facilidad de construcción no elimina el riesgo, sino que lo desplaza desde lo técnico hacia la validación del problema y del mercado."
        },
        {
          "id": "DT.04",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "Un equipo que trabaja con peluquerías formula estas preguntas para sus entrevistas: (P1) '¿Usarías una app de turnos?'; (P2) '¿Cuánto gastas hoy en resolver los turnos perdidos?'; (P3) '¿No te parece que perder turnos es un problema?'; (P4) 'Cuéntame la última vez que un cliente no llegó.' Según el Mom Test aplicado en el libro, ¿cuáles son las dos preguntas correctas?",
          "options": [
            "P1 y P3: son directas y obtienen una respuesta clara en poco tiempo.",
            "P2 y P4: preguntan por hechos del pasado o por gastos reales, sin sugerir la respuesta.",
            "P1 y P2: preguntan sobre el futuro y el presente, cubriendo ambos horizontes temporales.",
            "P3 y P4: la primera contextualiza el problema y la segunda pide un ejemplo concreto."
          ],
          "correct": 1,
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
            "Reduce el esfuerzo sin afectar la calidad porque la IA usa patrones estadísticos reales.",
            "Invalida la evidencia: un usuario inventado no te va a pagar ni a revelar contradicciones reales.",
            "Es aceptable solo para la fase de ideación, no para la de definición del problema."
          ],
          "correct": 2,
          "feedback": "El libro es explícito: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia. Un usuario inventado no te va a pagar.' La IA puede transcribir, agrupar y resumir, pero nunca reemplazar el contacto con personas reales. Los datos simulados dejan la sección de evidencia en cero."
        },
        {
          "id": "DT.07",
          "category": "cap2",
          "categoryName": "Cap. 2 — Empatizar",
          "text": "En el mapa de empatía de Rosa, el cuadrante 'dice' registra: «Nunca sé si gané o perdí plata hasta fin de mes». El cuadrante 'hace' muestra que anota compras y ventas en un cuaderno cada noche. ¿Qué valor tiene la contradicción entre ambos cuadrantes, según el libro?",
          "options": [
            "Confirma que Rosa miente: dice que no sabe pero en realidad sí registra los datos.",
            "Es una contradicción inútil porque ambas acciones ocurren en momentos distintos del día.",
            "Es la pista más valiosa: revela que Rosa revisa los números diario pero no los entiende como ganancia.",
            "Indica que la entrevista fue mal hecha y debe repetirse con preguntas más precisas."
          ],
          "correct": 2,
          "feedback": "El libro dice que 'las contradicciones entre cuadrantes son oro'. En el caso de Rosa, dice que no sabe si gana pero hace un registro diario. Eso revela el insight real: el problema no es la falta de datos, sino que el formato del cuaderno no le da la respuesta que busca (ganancia del día). Esa contradicción fue la que orientó toda la solución."
        },
        {
          "id": "DT.08",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo tiene 47 notas de entrevista sobre comerciantes de un mercado municipal. Antes de idear, el facilitador les pide que agrupen las notas por similitud en FigJam. Rosa anota tres: 'no saben cuánto ganan', 'pierden tiempo en el cuaderno', 'tiran comida por comprar de más'. ¿Qué herramienta están aplicando y cuál es su objetivo?",
          "options": [
            "El mapa de empatía; el objetivo es identificar qué dice, piensa, hace y siente cada comerciante.",
            "El diagrama de afinidad; el objetivo es que emerjan 3 a 6 temas repetidos entre personas distintas.",
            "El Lean Canvas; el objetivo es definir el segmento de clientes antes de idear soluciones.",
            "Los cuatro filtros; el objetivo es descartar temas que no cumplan frecuencia e intensidad mínimas."
          ],
          "correct": 1,
          "feedback": "El libro describe el diagrama de afinidad en el Capítulo 3 como el primer paso de la fase Definir: escribir cada hallazgo en un post-it y agruparlos por parecido para que aparezcan 3 a 6 temas que se repiten entre personas distintas. Esos temas son los candidatos a problema central. El mapa de empatía se hace antes, por persona; el diagrama de afinidad cruza personas."
        },
        {
          "id": "DT.09",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir",
          "text": "Un equipo escribe este POV: «Los dueños de restaurantes necesitan una app de contabilidad porque llevan las cuentas en cuadernos». ¿Qué corrección es la adecuada según el libro?",
          "options": [
            "Cambiar 'restaurantes' por un segmento más específico con datos demográficos precisos.",
            "El POV ya es correcto: menciona usuario, necesidad y causa observada en campo.",
            "Reemplazar la necesidad por el insight real: el problema es no saber la ganancia diaria, no la herramienta.",
            "Quitar la causa ('porque') para que el POV no sugiera solución antes de idear."
          ],
          "correct": 2,
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
            "La (2): es concreta sobre el dolor pero no menciona tecnología, dejando abierta la solución.",
            "Las tres son válidas para distintas fases: (1) para idear, (2) para prototipar y (3) para construir."
          ],
          "correct": 2,
          "feedback": "El libro lo explica con el caso de Rosa: la pregunta correcta 'no menciona tecnología. Deja abierta la solución, pero es lo bastante concreta como para saber si la resolviste.' La pregunta demasiado amplia (1) produce ideas genéricas. La pregunta técnica (3) ya es una solución, no una invitación a idear."
        },
        {
          "id": "DT.11",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo evalúa el problema 'elegir qué ropa ponerse cada mañana' con los cuatro filtros. Frecuencia: 5. Intensidad: 1. Gasto actual: 1. Alcance: 4. Total: 11/20. ¿Qué decisión es la más defendible según el libro?",
          "options": [
            "Pasar a ideación: un total de 11/20 supera el umbral mínimo de 10 para emprender.",
            "Descartar el problema: dos filtros sacan 1 o menos, lo que indica que no duele lo suficiente.",
            "Refinar el segmento: el alcance es 4, así que hay mercado aunque el problema sea menor.",
            "Validar con más entrevistas: con 20 casos adicionales la intensidad podría subir a 3."
          ],
          "correct": 1,
          "feedback": "El libro advierte: 'lo que decide son los mínimos: si dos o más filtros sacan 2 o menos, busca otro problema antes de gastar tiempo en ideas.' En este caso la intensidad y el gasto actual son 1, lo que señala que la gente no sufre lo suficiente ni gasta nada en resolverlo. La frecuencia alta engaña: lo frecuente que no duele no se paga."
        },
        {
          "id": "DT.12",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Cuatro Filtros)",
          "text": "Un equipo califica el problema 'saber cuánto gana Rosa al día' así: Frecuencia: 5 (diario), Intensidad: 5 (pierde dinero), Gasto actual: 4 (casi una hora con el cuaderno), Alcance: 5 (miles de restaurantes pequeños). Total: 19/20. El problema 'app para elegir ropa' obtuvo 11/20. ¿Qué explica la diferencia que más engaña a los emprendedores, según el libro?",
          "options": [
            "El alcance: hay más gente eligiendo ropa que usando cuadernos de restaurante.",
            "La intensidad y el gasto actual: si nadie gasta nada hoy en resolverlo, probablemente no le importa tanto como dice.",
            "La frecuencia: los problemas diarios siempre superan a los esporádicos en valor de mercado.",
            "El total: cualquier problema con más de 15 puntos garantiza tracción en el mercado."
          ],
          "correct": 1,
          "feedback": "El libro dice literalmente: 'Este último es el filtro que más engaña: si nadie hace nada hoy para resolver algo, probablemente no le importa tanto como dice.' La frecuencia y el alcance de la app de ropa son altos, pero la intensidad es 1 y el gasto actual es 1: nadie paga nada ni dedica tiempo. Ese es el engaño clásico del emprendedor."
        },
        {
          "id": "DT.13",
          "category": "cap3",
          "categoryName": "Cap. 3 — Definir (Jobs to Be Done)",
          "text": "Un equipo describe el trabajo de Rosa así: «Necesita una app que lea facturas por foto». ¿Qué formulación respeta mejor el marco Jobs to Be Done según el libro?",
          "options": [
            "«Cuando cierro el local cada noche, quiero saber en dos minutos cuánto gané y qué comprar mañana, para no perder plata ni tirar comida.»",
            "«Necesita que la IA lea sus facturas por foto y le diga el total de gastos del día.»",
            "«Quiero una aplicación móvil que centralice ventas, compras y ganancia en un solo panel.»",
            "«Cuando lleva las cuentas, Rosa quiere un sistema contable digital para reemplazar el cuaderno.»"
          ],
          "correct": 0,
          "feedback": "El libro muestra la fórmula de JTBD: 'Cuando [situación], quiero [motivación], para [resultado esperado].' La opción A respeta las tres partes: la situación (cerrar el local cada noche), la motivación (saber cuánto ganó y qué comprar) y el resultado esperado (no perder plata ni tirar comida). Las otras opciones nombran tecnología o herramientas, no el trabajo del usuario."
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
            "I1 hazla primero, I2 planifícala, I3 mejora rápida, I4 descártala.",
            "I1 y I2 hazlas primero porque ambas tienen impacto 5, I3 e I4 descártalas.",
            "I2 hazla primero por su mayor impacto técnico, I1 planifícala, I3 e I4 descártalas."
          ],
          "correct": 1,
          "feedback": "Según el libro, la lógica de la matriz es: mucho impacto + poco esfuerzo = hazlo primero (I1); mucho impacto + mucho esfuerzo = planifícalo (I2); poco impacto + poco esfuerzo = mejora rápida (I3); poco impacto + mucho esfuerzo = descártalo (I4). I1 es la nota de voz, que el caso describe como la ganadora inicial."
        },
        {
          "id": "DT.17",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (Tres Lentes)",
          "text": "Tras el Crazy 8s del caso de Rosa, la idea 'app de contabilidad' quedó en el cuadrante 'mucho impacto, mucho esfuerzo'. Al aplicarle las tres lentes, el resultado es: Deseable = 1 (Rosa no usa las que ya existen), Factible = 5, Viable = 3. ¿Qué acción recomienda el libro para esta idea?",
          "options": [
            "Lanzarla igual: la factibilidad técnica garantiza el éxito a largo plazo si se invierte en marketing.",
            "No se descarta: falla en la lente de deseable, así que se ajusta el segmento o la propuesta de valor.",
            "Descartarla definitivamente: fallar en cualquier lente implica volver a la fase de empatizar.",
            "Pivotar hacia B2B: las apps de contabilidad funcionan con empresas grandes, no con restaurantes."
          ],
          "correct": 1,
          "feedback": "El libro dice: 'Si una idea falla en una lente, no se descarta: se ajusta. Si falla en dos, vuelve a la matriz.' La app falla solo en Deseable (Rosa no la usa). La acción correcta es ajustar: cambiar el formato, el segmento o la propuesta de valor. Descartar definitivamente sería prematuro con solo una lente fallida."
        },
        {
          "id": "DT.18",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo quiere saber si los dueños de talleres mecánicos entenderían, sin ayuda, cómo registrar un pedido de repuesto en tres pantallas. Tiene 5 días y cero presupuesto. ¿Qué nivel de prototipo resuelve esa duda con el menor esfuerzo, según la tabla del libro?",
          "options": [
            "MVP funcional con no-code (Bubble): permite probar el flujo real con datos verdaderos.",
            "Concierge: el equipo hace manualmente cada pedido para comprobar si los talleres pagan.",
            "Maqueta clickable en Figma: verifica si entienden la interfaz sin explicación, en un día.",
            "Mago de Oz: un integrante responde a mano para simular la IA y comprobar si el servicio genera valor."
          ],
          "correct": 2,
          "feedback": "El libro muestra la tabla de niveles de fidelidad. La maqueta clickable (Figma o equivalente) sirve específicamente para aprender 'si entienden la interfaz sin explicación' y toma un día. El MVP funcional tomaría semanas; el Concierge respondería si pagan, no si entienden la interfaz; el Mago de Oz respondería si el servicio genera valor antes de automatizar."
        },
        {
          "id": "DT.19",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "El primer prototipo del caso de Rosa fue un Mago de Oz: ella enviaba por WhatsApp la foto de la factura y una nota de voz, y el ingeniero respondía a mano con la ganancia del día. Costo: cero. Tiempo: una tarde. ¿Qué pregunta concreta respondía ese prototipo?",
          "options": [
            "¿El servicio es técnicamente escalable con una API de IA real a 500 restaurantes?",
            "¿El formato de tres líneas (ganancia, plato top, compras mañana) genera valor real antes de automatizar?",
            "¿Rosa pagaría $15 al mes si tuviera la versión automatizada con n8n y WhatsApp Business?",
            "¿Cuántos restaurantes más recomendaría Rosa si el servicio funcionara bien por un mes?"
          ],
          "correct": 1,
          "feedback": "El libro describe el Mago de Oz como el nivel que responde 'si el servicio genera valor antes de automatizarlo'. En el caso de Rosa, la pregunta era si el formato de tres líneas nocturnas era lo que ella quería, antes de gastar un dólar en servidores o integraciones. Las preguntas de escalabilidad (A), precio (C) y referidos (D) son del nivel MVP y de la fase de negocio."
        },
        {
          "id": "DT.20",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar",
          "text": "Un equipo construyó en dos semanas un MVP funcional con login con redes sociales, modo oscuro, panel de administración y reporte mensual. Su primer usuario aún no existe. Según el libro, ¿qué diagnóstico es el correcto?",
          "options": [
            "El equipo fue eficiente: construir todo desde el inicio evita rediseñar funciones después.",
            "El MVP no es mínimo: tiene funciones que no responden ninguna pregunta de aprendizaje urgente.",
            "Faltó investigación de mercado: deberían publicar una landing page antes de construir.",
            "El error fue tecnológico: eligieron un stack demasiado complejo para un equipo sin experiencia."
          ],
          "correct": 1,
          "feedback": "El libro dice: 'Si tu MVP tiene login con redes sociales, modo oscuro y panel de administración antes de tener un usuario, no es mínimo.' Mínimo significa una sola función central que resuelva el dolor principal. El error no fue tecnológico ni de investigación: fue confundir el MVP con el producto terminado, construyendo funciones que no responden preguntas de aprendizaje."
        },
        {
          "id": "DT.21",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Durante la prueba del prototipo con Rosa, el facilitador le da la tarea 'registra lo que compraste hoy' y observa en silencio. Rosa toca tres veces un botón equivocado y dice 'esto es confuso'. El facilitador anota: 'el prototipo falló, no Rosa'. ¿Qué principio del libro aplica esa anotación?",
          "options": [
            "El principio de neutralidad: el facilitador no debe defender ni atacar al prototipo.",
            "La prueba no evalúa al usuario; evalúa la idea. Si alguien se confunde, el prototipo falló.",
            "El principio de observación pasiva: el facilitador nunca interviene aunque el usuario se equivoque.",
            "El principio de métricas: solo cuenta la tasa de error, no la opinión del usuario."
          ],
          "correct": 1,
          "feedback": "El libro lo dice con precisión: 'La prueba no evalúa al usuario, evalúa tu idea. Si alguien se confunde, el prototipo falló, no la persona.' Este principio evita que el equipo culpe a los usuarios de 'no entender' y los obliga a mejorar el diseño. La opción A (neutralidad) es real pero no captura el principio específico del libro."
        },
        {
          "id": "DT.22",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear",
          "text": "Tras cuatro semanas del MVP con Rosa y 11 restaurantes más, 9 siguen usando el sistema. Los dueños piden el resumen a las 10 p. m., no a las 9; el dato más valorado es 'qué comprar mañana'; dos piden que llegue también al contador. Siete aceptan pagar $15. ¿Qué acción es la más adecuada según el libro?",
          "options": [
            "Pivotar: el dato de 'qué comprar mañana' no era el valor central del diseño original, así que hay que volver a empatizar.",
            "Parar: solo 7 de 12 aceptan pagar, lo que está por debajo del mínimo aceptable para continuar.",
            "Iterar: la idea funciona y hay datos nuevos (hora, dato favorito, contador) para ajustar detalles.",
            "Escalar directamente a los 300 restaurantes de Quito: 9 de 12 es retención suficiente para crecer."
          ],
          "correct": 2,
          "feedback": "El libro describe tres caminos después de testear: 'Iteras cuando la idea funciona pero hay que ajustar detalles. Pivotas cuando descubres que el valor está en otro lado y cambias una parte grande.' Los datos muestran que la idea funciona (9 de 12 retienen, 7 pagan), con ajustes de detalle (hora, dato top, contador). No es un cambio de dirección grande, sino ajuste de detalles: iterar."
        },
        {
          "id": "DT.23",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "El equipo de CierreYa define como meta inicial de activación que el 60 % de nuevos restaurantes reciba su primer resumen. Tras el primer mes, solo el 35 % lo recibió. ¿Qué paso sigue según el marco de testeo del libro?",
          "options": [
            "Escalar el gasto en adquisición: más restaurantes compensarán el bajo porcentaje de activación.",
            "Analizar dónde abandona la gente antes de recibir el primer resumen y ajustar ese paso.",
            "Cambiar la métrica de éxito: el 35 % es un resultado razonable para un MVP en fase temprana.",
            "Parar: el 35 % está 25 puntos por debajo de la meta y eso prueba que el producto no funciona."
          ],
          "correct": 1,
          "feedback": "El libro recomienda instrumentar desde el día uno y analizar en qué paso abandona la gente (el embudo de métricas). Si la activación es baja, el problema está en el paso de onboarding, no en la adquisición. Escalar sin arreglar la activación multiplica el desperdicio. Parar sería prematuro sin investigar dónde está el punto de falla."
        },
        {
          "id": "DT.24",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Métricas)",
          "text": "Doce restaurantes prueban CierreYa un mes. La prueba más honesta de valor real, según el libro, es pedir un compromiso antes de continuar. ¿Cuál de estas opciones representa ese compromiso de la forma más sólida?",
          "options": [
            "Que los 12 respondan una encuesta de satisfacción con puntaje mayor a 8 de 10.",
            "Que al menos 7 digan en una entrevista que «les encantó» y «lo recomendarían».",
            "Que al menos 7 paguen $15 por el primer mes o firmen una carta de intención.",
            "Que los 12 sigan activos en la semana 4 sin que el equipo los contacte."
          ],
          "correct": 2,
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
            "M1: la suscripción mensual es el modelo más valorado por los inversionistas según el libro.",
            "M2: el pago por uso alinea el costo con el valor entregado y no requiere compromiso del cliente.",
            "M3: el servicio productizado es la forma más rápida de facturar con alcance y precio fijos.",
            "Una combinación de M1 y M3: la suscripción da previsibilidad y el servicio da flujo inmediato."
          ],
          "correct": 2,
          "feedback": "El libro dice textualmente: 'Servicio productizado: un servicio con alcance y precio fijos. Es la forma más rápida de facturar.' El M1 (SaaS) da ingresos predecibles pero tarda meses en crecer. El M2 requiere usuarios activos. El M3 permite cobrar una sola vez desde la primera instalación, que es lo que se necesita para cubrir costos iniciales sin base de usuarios."
        },
        {
          "id": "DT.27",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (Precio)",
          "text": "El equipo de CierreYa calcula que el servicio le ahorra a Rosa 25 horas al mes (a $3/hora) y le evita tirar $120 de comida. El costo de atender a Rosa es $4 al mes. El libro propone cobrar entre el 10 % y el 20 % del valor generado. ¿Cuál es el rango de precio correcto y por qué el piso es mayor que el costo?",
          "options": [
            "Rango: $10 a $20. El piso es el costo ($4), redondeado; el techo es lo que el mercado tolera.",
            "Rango: $19,50 a $39. El cliente debe sentir que recibe entre 5 y 10 veces lo que paga; el piso es costo ÷ 0,30.",
            "Rango: $15 a $30. El piso es el costo × 3 y el techo es el 20 % del valor generado.",
            "Rango: $4 a $10. El precio siempre se fija entre el costo y un margen razonable del 150 %."
          ],
          "correct": 1,
          "feedback": "El libro calcula para Rosa: valor mensual = 25h × $3 + $120 = $195. Rango = 10 % a 20 % = $19,50 a $39. El precio mínimo es costo ÷ 0,30 = $4 ÷ 0,30 ≈ $13, para mantener un margen bruto de al menos 70 %. El precio final de $15 está dentro del rango ($13 a $39), aunque por debajo del rango estricto del 10 %. El libro justifica el 10-20 % porque el cliente debe sentir que recibe entre 5 y 10 veces lo que paga."
        },
        {
          "id": "DT.28",
          "category": "cap7",
          "categoryName": "Cap. 7 — Del prototipo al negocio (LTV/CAC)",
          "text": "CierreYa cobra $15/mes, tiene un margen bruto de 80 % y una tasa de cancelación mensual de 5 %. Conseguir un restaurante cuesta $40 en tiempo y referidos. El libro usa la fórmula LTV = (precio mensual × margen bruto) ÷ tasa de cancelación. ¿Cuál es la relación LTV/CAC y cómo la califica el libro?",
          "options": [
            "LTV = $180; LTV/CAC = 4,5. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $240; LTV/CAC = 6. El libro dice que una relación mayor a 3 es sana.",
            "LTV = $300; LTV/CAC = 7,5. Es excelente porque supera el doble de la referencia.",
            "LTV = $200; LTV/CAC = 5. Es suficiente para cualquier modelo SaaS en la región."
          ],
          "correct": 1,
          "feedback": "El libro calcula exactamente: LTV = $15 × 0,80 ÷ 0,05 = $240. CAC = $40. LTV/CAC = 6. Y dice: 'la referencia habitual es que sea mayor a 3.' Si LTV/CAC es menor a 1, el negocio pierde dinero con cada cliente nuevo. La opción B reproduce el cálculo exacto del libro con los datos del caso de Rosa."
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
          "feedback": "LTV = $30 × 0,60 ÷ 0,20 = $90. LTV/CAC = $90 ÷ $35 = 2,57. El libro establece que la referencia es mayor a 3. La opción A llega al mismo número pero concluye que 'mejorará con escala', lo cual no es la conclusión del libro (si el modelo ya pierde con cada cliente, escalar amplifica la pérdida). La opción C confunde precio mensual con valor de vida."
        },
        {
          "id": "DT.30",
          "category": "cap8_11",
          "categoryName": "Cap. 8 — Hoja de ruta (CitaClara)",
          "text": "CitaClara, una app de recordatorios de cita médica, planea lanzar en todas las ciudades de Ecuador desde el primer día para 'no dejar espacio a competidores'. Según el libro y los principios de la hoja de ruta del caso, ¿qué lectura es la más defendible?",
          "options": [
            "La estrategia es correcta: el primero que llega a escala en un mercado emergente lo domina.",
            "Es prematura: lanzar en toda la ciudad antes de dominar un nicho diluye la energía y los recursos.",
            "Es válida si tienen suficiente capital para contratar un equipo de ventas en cada ciudad.",
            "Depende del modelo de ingreso: la cobertura nacional solo es viable con un modelo freemium."
          ],
          "correct": 1,
          "feedback": "El libro describe la hoja de ruta de CitaClara comenzando por un solo nicho (consultorios de medicina general en un solo barrio) antes de expandir. En el libro se aplican los principios de De cero a uno: dominar un nicho pequeño primero. Escalar antes de tener el modelo probado en un nicho diluye recursos. La lógica de 'no dejar espacio' aplica cuando ya tienes tracción comprobada, no al inicio."
        },
        {
          "id": "DT.31",
          "category": "cap8_11",
          "categoryName": "Cap. 9 — Riesgos",
          "text": "El equipo de CitaClara identifica que los médicos podrían negarse a que el sistema contacte a sus pacientes sin autorización. Lo registran en el formato de riesgos en la columna de mitigación como 'hablar con los médicos antes del piloto'. Según el libro, ¿cuándo debía haberse gestionado ese riesgo?",
          "options": [
            "En la fase de testeo: es el momento donde los riesgos legales se confirman con datos reales.",
            "En la fase 1 (semanas 1-4): los trámites legales y de consentimiento van desde el piloto.",
            "Después del lanzamiento: el mercado indica si la regulación es realmente una barrera.",
            "Al obtener el primer pago: un cliente que paga valida que el riesgo legal no es bloqueante."
          ],
          "correct": 1,
          "feedback": "El libro es explícito para el caso de CitaClara: 'Los trámites legales se dejan para el final: saca el RUC y redacta el consentimiento en la fase 1, porque desde el piloto manejas teléfonos y datos de pacientes.' El manejo de datos personales y médicos requiere consentimiento desde la primera prueba, no después. Es un riesgo que debe mitigarse antes de tener el primer paciente en el sistema."
        },
        {
          "id": "DT.32",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo",
          "text": "Un equipo evalúa dos problemas con los cuatro filtros. Problema A: 'coordinar reuniones de equipo remoto'; Problema B: 'cuadrar el inventario de una ferretería al cierre de día'. Cada uno saca: A (Frecuencia 5, Intensidad 2, Gasto actual 1, Alcance 5 = 13), B (Frecuencia 5, Intensidad 5, Gasto actual 4, Alcance 4 = 18). ¿Cuál de las dos afirmaciones sobre los resultados es la más defendible?",
          "options": [
            "El Problema A es viable: 13/20 supera el umbral y la frecuencia alta garantiza adopción.",
            "El Problema B pasa a ideación y el A se descarta: el A falla en intensidad y gasto actual (ambos ≤ 2).",
            "Ambos pasan: la suma de los dos supera 20 y el libro no establece un umbral individual por filtro.",
            "El Problema A es mejor: el alcance de 5 es el filtro más importante porque define el tamaño del mercado."
          ],
          "correct": 1,
          "feedback": "El libro establece: 'si dos o más filtros sacan 2 o menos, busca otro problema.' El Problema A tiene Intensidad 1 y Gasto actual 1: dos filtros por debajo de 2. Eso lo descarta. El total de 13 engaña porque la frecuencia y el alcance son altos. El Problema B tiene todos los filtros en 4 o más (18/20) y pasa claramente a ideación."
        },
        {
          "id": "DT.33",
          "category": "cap1",
          "categoryName": "Cap. 10 — Herramientas a fondo (Precio)",
          "text": "Un equipo calcula que su servicio de IA le ahorra 8 horas semanales a una clínica veterinaria (a $5/hora) y evita llamadas perdidas por valor de $200 al mes. El costo de atender a la clínica es $6 al mes. ¿Cuál es el rango de precio correcto según la fórmula del libro?",
          "options": [
            "Rango: $6 a $12. El precio siempre debe duplicar el costo para garantizar margen.",
            "Rango: $36 a $72. El valor mensual es $360; el rango es 10 % a 20 % de ese valor.",
            "Rango: $18 a $36. El valor mensual es $200 de llamadas; el tiempo no se considera.",
            "Rango: $60 a $120. El precio correcto multiplica el costo por 10 para startups tecnológicas."
          ],
          "correct": 1,
          "feedback": "Siguiendo la fórmula del libro: valor mensual = (8h × 4 semanas × $5) + $200 = $160 + $200 = $360. Rango = 10 % a 20 % = $36 a $72. El precio mínimo por costo = $6 ÷ 0,30 = $20. El precio final debería estar entre $36 y $72, sobre el piso de $20. La opción C ignora el valor del tiempo, que es parte explícita del cálculo del libro."
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
            "El paso (4): simular usuarios es el único uso de IA que el libro prohíbe explícitamente en empatía.",
            "Los pasos (2) y (3): toda la transcripción y el resumen deben hacerse a mano para no perder matices."
          ],
          "correct": 2,
          "feedback": "El libro acepta el uso de IA para transcribir, resumir y agrupar (pasos 1-3), pero dice textualmente: 'Lo que nunca debes hacer es pedirle a la IA que simule usuarios y tomar eso como evidencia.' El paso (4) es el único prohibido. Un usuario inventado no paga, no muestra contradicciones reales y deja la evidencia en cero."
        },
        {
          "id": "DT.37",
          "category": "cap4",
          "categoryName": "Cap. 4 — Idear (IA como compañera)",
          "text": "Un equipo le pide a Claude 30 ideas para su pregunta '¿Cómo podríamos...?'. Claude devuelve una lista con soluciones muy similares entre sí y ninguna usa el insight de las entrevistas (que Rosa desconfía del software). Según el libro, ¿qué ajuste es el más adecuado?",
          "options": [
            "Cambiar de modelo: GPT-4 genera ideas más diversas que Claude en tareas de ideación.",
            "Pedir 30 ideas más que 'no se parezcan a las anteriores' y aportar el insight de las entrevistas.",
            "Descartar la lista de la IA y hacer solo un Crazy 8s manual para recuperar la creatividad.",
            "Aceptar la lista: la IA propone lo que el mercado ya conoce, que es la base más segura para empezar."
          ],
          "correct": 1,
          "feedback": "El libro dice: 'la IA tiende a proponer lo promedio. Tú aportas el insight que viene de tus entrevistas; y no te quedes con la primera lista, insiste. Pídele 30 ideas más que no se parezcan a las anteriores, luego que aplique SCAMPER a tu mejor idea.' El insight de la desconfianza de Rosa hacia el software es el diferenciador que la IA no tiene; el equipo debe inyectarlo."
        },
        {
          "id": "DT.38",
          "category": "cap5",
          "categoryName": "Cap. 5 — Prototipar (Herramientas)",
          "text": "Un equipo quiere construir un MVP de automatización que conecte WhatsApp con un modelo de IA para leer notas de voz y responder con un resumen. No quieren escribir código de servidor. Según la lista de herramientas del libro para 2026, ¿qué combinación es la más adecuada?",
          "options": [
            "React Native + Firebase + OpenAI API: el stack más completo para apps móviles con IA.",
            "n8n o Make + WhatsApp Business API + modelo de IA para voz a texto: automatización sin servidor propio.",
            "Bubble + Typeform + Zapier: herramientas no-code para captar datos sin programación.",
            "Flutter + Supabase + Claude API: código asistido con base de datos lista y autenticación incluida."
          ],
          "correct": 1,
          "feedback": "El libro lista específicamente: 'Automatización: n8n, Make o Zapier para conectar WhatsApp, correo, hojas y modelos de IA sin servidor propio.' Y el caso de Rosa lo confirma: el MVP funcional usó 'n8n, la API de WhatsApp Business, un modelo de IA para leer facturas y notas de voz, y una hoja de Google como base de datos. Dos semanas de trabajo.' Bubble (C) es para apps web; Flutter/React Native (A y D) requieren código y servidor."
        },
        {
          "id": "DT.39",
          "category": "cap6",
          "categoryName": "Cap. 6 — Testear (Prueba con usuarios)",
          "text": "Un facilitador prueba el prototipo de CitaClara con cinco médicos. Cuando uno no sabe cómo avanzar en la pantalla de confirmar cita, el facilitador dice: 'toca el botón verde'. Según el libro, ¿qué error cometió el facilitador?",
          "options": [
            "Ninguno: ayudar al usuario en una prueba de concepto es parte del método concierge.",
            "Violó la regla de observar sin ayudar: cuando el usuario pide ayuda, la respuesta correcta es devolverle la pregunta.",
            "Eligió mal la tarea: debió decirle 'confirma la cita' en lugar de 'toca el botón verde'.",
            "Interrumpió el pensamiento en voz alta: el facilitador debe esperar al final para hacer preguntas."
          ],
          "correct": 1,
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
            "Analizar si los 3 'gratis' son señal de un problema de precio o de valor; calcular LTV con los 7 que sí pagan.",
            "Escalar a otros barrios: 7 pagadores en la semana 8 es tracción suficiente para salir del nicho inicial."
          ],
          "correct": 2,
          "feedback": "El libro enseña a distinguir entre señales de valor y señales de precio. Los 3 que piden 'más funciones' antes de pagar pueden ser: (a) usuarios que valoran el producto pero no al precio actual (problema de precio) o (b) usuarios que no ven el valor suficiente (problema de propuesta de valor). LTV de los 7 que sí pagan = $20 × 0,75 ÷ 0,08 = $187,50. Ese dato orienta si escalar o ajustar. Construir funciones sin saber la causa es la trampa del ingeniero que salta al código sin investigar."
        }
      ]
    }
  ]
};
