# Dentastika — Project Context

## Qué es Dentastika

Dentastika es un SaaS para clínicas dentales desarrollado por **Voltaic Software**.

La idea es crear una plataforma moderna para ayudar a clínicas y consultorios dentales a administrar su operación diaria, mejorar el seguimiento de pacientes y ofrecer una experiencia digital más cómoda tanto para doctores como para pacientes.

El producto se plantea como una **PWA** para reducir costos de desarrollo y mantenimiento frente a aplicaciones móviles nativas.

La aplicación debe sentirse moderna, sencilla, clara y profesional. No debe verse como un sistema médico antiguo ni como un ERP pesado.

## Público objetivo

Dentastika está dirigido principalmente a:

- Consultorios dentales pequeños.
- Clínicas dentales con varios doctores.
- Dentistas independientes.
- Recepcionistas y personal administrativo.
- Pacientes de las clínicas que utilicen el sistema.

El mercado inicial es México.

## Enfoque actual del producto

La primera fase estará enfocada en la **gestión administrativa y operativa de la clínica**, sin integrar todavía el expediente clínico electrónico completo.

Esto es importante porque en México el expediente clínico electrónico implica requisitos regulatorios adicionales, entre ellos NOM-004, NOM-013 y NOM-024.

La landing actual NO debe presentar a Dentastika como:

- Expediente clínico electrónico.
- Software certificado NOM-024.
- Sistema de historia clínica digital.
- Plataforma para diagnósticos.
- Sistema de recetas médicas.
- Plataforma de radiografías o estudios clínicos.
- Sustituto del expediente clínico oficial.

Estas funciones podrán llegar en una segunda fase.

# Primera fase / MVP

## Agenda y citas

La clínica podrá:

- Consultar agenda diaria, semanal y mensual.
- Manejar horarios por doctor.
- Crear, modificar, cancelar y reprogramar citas.
- Bloquear horarios no disponibles.
- Definir duración de citas según tipo de servicio.
- Consultar espacios disponibles.
- Marcar estados de cita: pendiente, confirmada, atendida, cancelada o no asistió.
- Manejar lista de espera cuando se libere un horario.

Los pacientes podrán recibir recordatorios y confirmar o cancelar sus citas.

## Registro administrativo de pacientes

Se podrá registrar:

- Nombre.
- Teléfono.
- Correo.
- Fecha de nacimiento.
- Datos de contacto.

Desde el perfil administrativo se podrán consultar:

- Citas anteriores.
- Citas próximas.
- Presupuestos.
- Pagos.
- Saldos.
- Seguimientos programados.

Por ahora NO se debe incluir:

- Diagnósticos.
- Historia clínica.
- Odontograma.
- Notas de evolución.
- Radiografías clínicas.
- Fotografías clínicas.
- Recetas.
- Plan de tratamiento clínico.

## Seguimiento y recuperación de pacientes

Esta es una de las funciones más importantes del MVP.

Surgió directamente de una necesidad real de un dentista que actualmente revisa manualmente sus registros para recordar qué pacientes deberían regresar.

Ejemplo:

- Un paciente recibe una limpieza dental.
- El doctor quiere volver a contactarlo en 6 meses.
- Dentastika deja programado ese seguimiento.
- Cuando llega la fecha, el sistema avisa a la clínica.
- También puede enviar un recordatorio al paciente.

Tipos de seguimiento:

- Limpieza cada 6 meses.
- Revisión periódica.
- Control mensual.
- Fecha personalizada.

El sistema debe mostrar:

- Seguimientos de hoy.
- Seguimientos próximos.
- Seguimientos vencidos.

Desde ahí se podrá:

- Contactar al paciente.
- Enviar recordatorio.
- Agendar una nueva cita.
- Posponer seguimiento.
- Marcar seguimiento como realizado.

Esta función debe comunicarse comercialmente como una forma de ahorrar tiempo, evitar revisiones manuales, recuperar pacientes y generar citas recurrentes.

## Portal del paciente

El paciente tendrá acceso desde su celular a un portal personalizado de su clínica.

Podrá:

- Consultar próxima cita.
- Revisar citas anteriores.
- Confirmar cita.
- Solicitar reprogramación.
- Cancelar cita.
- Consultar presupuestos.
- Consultar pagos.
- Consultar saldo pendiente.
- Recibir recordatorios.
- Recibir avisos de seguimiento.
- Consultar información y contacto de la clínica.

## Presupuestos

La clínica podrá crear presupuestos administrativos con:

- Servicios.
- Precios.
- Descuentos.
- Vigencia.
- Total.
- Estado: pendiente, aceptado o rechazado.

El paciente podrá consultar el presupuesto desde su portal.

En esta primera fase el presupuesto es una herramienta administrativa y NO debe presentarse como plan de tratamiento clínico.

## Pagos y saldos

Por ahora NO habrá una caja general obligatoria.

En la primera fase sólo se plantea control básico por paciente:

- Cuánto se presupuestó.
- Cuánto ha pagado.
- Cuánto debe.
- Fecha de pago.
- Método de pago.

No incluir por ahora:

- Apertura de caja.
- Cierre de caja.
- Arqueos.
- Caja general obligatoria.
- Contabilidad formal.

## Inventario de insumos

El sistema permitirá controlar consumibles como:

- Guantes.
- Cubrebocas.
- Agujas.
- Anestesia.
- Resinas.
- Gasas.
- Material de impresión.
- Otros insumos.

Por producto:

- Existencia actual.
- Stock mínimo.
- Costo.
- Proveedor.
- Entradas.
- Salidas.
- Lote.
- Fecha de caducidad.

El sistema mostrará alertas de productos próximos a agotarse.

## Instrumental y equipo

Se podrá llevar control básico de:

- Pinzas.
- Espejos.
- Piezas de mano.
- Charolas.
- Autoclaves.
- Equipos.

Información posible:

- Cantidad.
- Ubicación.
- Estado.
- Disponible.
- En mantenimiento.
- Fuera de servicio.
- Próximo mantenimiento.

## Proveedores

El sistema podrá manejar:

- Nombre del proveedor.
- Contacto.
- Productos suministrados.
- Precios.
- Historial de compras.
- Pedidos pendientes.

## Tareas y pendientes

Sección simple para tareas internas.

Ejemplos:

- Comprar anestesia.
- Confirmar citas del viernes.
- Llamar a proveedor.
- Revisar pedido.
- Dar mantenimiento a equipo.

Cada tarea podrá tener responsable, prioridad, fecha límite y estado.

## Laboratorios dentales

Seguimiento administrativo de trabajos enviados a laboratorios externos.

Datos posibles:

- Paciente relacionado.
- Laboratorio.
- Tipo de trabajo.
- Fecha de envío.
- Fecha estimada de entrega.
- Costo.
- Estado.

Estados sugeridos:

- Pendiente de enviar.
- Enviado.
- En proceso.
- Recibido.
- Entregado.

## Dashboard principal

La pantalla inicial debe mostrar información útil del día:

- Citas de hoy.
- Citas pendientes de confirmar.
- Pacientes que necesitan seguimiento.
- Seguimientos vencidos.
- Productos con poco inventario.
- Tareas pendientes.
- Trabajos de laboratorio próximos a entrega.
- Pacientes con saldo pendiente.

# Personalización por clínica

Dentastika será una sola aplicación multi-tenant.

NO habrá una PWA diferente por cliente.

Cada clínica podrá cambiar:

- Logo.
- Nombre comercial.
- Colores.
- Imagen principal o portada.
- Icono.
- Datos de contacto.

La clínica NO podrá cambiar:

- Layout.
- Ubicación de menús.
- Estructura de pantallas.
- Componentes.
- CSS personalizado.
- Arquitectura visual completa.

La idea es mantener una sola base de código y permitir branding por tenant.

# Branding

Nombre del SaaS: **Dentastika**

Empresa desarrolladora: **Voltaic Software**

Presentación sugerida:

**Dentastika**  
by Voltaic Software

La marca debe sentirse:

- Moderna.
- Limpia.
- Confiable.
- Profesional.
- Fácil de usar.
- Cercana.
- No excesivamente médica.
- No corporativa o anticuada.

La marca puede ser amigable, pero no infantil.

# Mensaje comercial

La comunicación NO debe girar únicamente en torno a "agenda".

Dentastika debe venderse como una herramienta para organizar la operación diaria de una clínica dental.

Conceptos importantes:

- Organiza tu clínica.
- Automatiza el seguimiento de pacientes.
- Reduce tareas manuales.
- Mantén control de citas, inventario y pendientes.
- Mejora la experiencia del paciente.
- Recupera pacientes que deberían volver.
- Centraliza la operación de la clínica.

Ejemplos de mensajes posibles:

- "Tu clínica, mejor organizada."
- "Todo lo que necesitas para operar tu clínica dental."
- "Menos tareas manuales. Más tiempo para tus pacientes."
- "Agenda, seguimiento e inventario en un solo lugar."
- "No pierdas de vista a tus pacientes."
- "Convierte seguimientos pendientes en nuevas citas."

No es obligatorio usar literalmente estos textos; sirven como referencia de tono.

# Diferenciadores del MVP

## Seguimiento automático de pacientes

Ejemplo de comunicación:

"¿A qué pacientes les toca regresar por limpieza en 6 meses?"

Dentastika debe poder recordarlo automáticamente.

## Portal del paciente

El paciente podrá consultar y gestionar sus citas desde el celular.

## Branding por clínica

El portal del paciente puede mostrar la identidad visual de la clínica.

## Inventario pensado para clínica dental

Debe contemplar:

- Lotes.
- Caducidades.
- Stock mínimo.
- Instrumental.
- Equipo.

## Laboratorios

Seguimiento administrativo de trabajos enviados a laboratorio.

# Segunda fase

Estas funciones NO deben promocionarse como disponibles actualmente:

- Historia clínica.
- Expediente clínico electrónico.
- Odontograma.
- Notas de evolución.
- Procedimientos clínicos.
- Plan de tratamiento clínico.
- Recetas.
- Fotografías clínicas.
- Radiografías.
- Estudios.
- Archivos DICOM / tomografías.
- Consentimientos clínicos.

Antes de integrar esta etapa se deben revisar correctamente los requisitos regulatorios mexicanos.

# Regulación en México

El proyecto ha identificado que el expediente clínico electrónico puede involucrar:

- NOM-004-SSA3-2012.
- NOM-013-SSA2-2015.
- NOM-024-SSA3-2012.
- Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

La landing NO debe afirmar:

- "Cumple NOM-024."
- "Certificado NOM-024."
- "Expediente clínico electrónico certificado."
- "Cumplimiento médico garantizado."

A menos que esto sea cierto y exista documentación formal.

# Autenticación

## Personal de la clínica

Doctores, recepción y administradores utilizarán:

- Usuario o correo.
- Contraseña.

Más adelante se puede agregar MFA.

## Pacientes

Se plantea usar Firebase Authentication:

- Google.
- Apple.
- Acceso por correo / OTP o magic link.

Firebase sólo será proveedor de identidad para pacientes.

El backend seguirá siendo responsable de relacionar identidad, paciente, clínica, permisos y reglas de negocio.

# Notificaciones

La PWA podrá usar Firebase Cloud Messaging (FCM).

Casos iniciales:

- Recordatorio de cita.
- Confirmación.
- Cancelación.
- Reprogramación.
- Recordatorio de seguimiento.
- Aviso de próxima limpieza o revisión.

WhatsApp puede integrarse posteriormente.

# Dirección técnica general

La landing está desarrollada en Astro.

El sistema principal se ha discutido con una arquitectura aproximada de:

- Frontend: Angular PWA.
- Backend: NestJS.
- Base de datos: PostgreSQL.
- Archivos: Cloudflare R2 o AWS S3.
- Push notifications: Firebase Cloud Messaging.
- Auth de pacientes: Firebase Authentication.
- Cola de trabajos futura: Redis + BullMQ.

La landing pública NO necesita mostrar estas tecnologías salvo que exista una sección específica para ello.

# Tono de la landing

Evitar:

- Lenguaje demasiado técnico.
- Exceso de buzzwords.
- Frases tipo "revoluciona tu negocio con tecnología de vanguardia".
- Promesas exageradas.
- Lenguaje que parezca generado automáticamente.
- Terminología regulatoria innecesaria.

Preferir:

- Mensajes claros.
- Beneficios prácticos.
- Ejemplos reales.
- Frases cortas.
- Problemas cotidianos de la clínica.
- Lenguaje natural en español de México.

Ejemplo correcto:

"Deja de revisar paciente por paciente para saber quién debería regresar. Dentastika te recuerda automáticamente a quién le toca seguimiento."

Ejemplo a evitar:

"Transforma radicalmente la experiencia odontológica mediante una plataforma integral impulsada por tecnología de última generación."

# Objetivo de la landing

La landing debe lograr que un dentista entienda rápidamente:

1. Qué es Dentastika.
2. Qué problema resuelve.
3. Qué funciones incluye.
4. Por qué es útil para una clínica dental.
5. Cómo ayuda a recuperar pacientes.
6. Cómo mejora la organización interna.
7. Que el paciente también tiene una experiencia digital.
8. Que puede solicitar información, demo o unirse a una lista de espera.

La landing debe priorizar conversión y claridad antes que explicar todas las funciones.

# Estado actual

Dentastika se encuentra en etapa de definición y validación del producto.

Se está trabajando con al menos un dentista para obtener retroalimentación real sobre necesidades de clínica.

Una de las necesidades más claras detectadas hasta ahora es:

**automatizar el seguimiento periódico de pacientes**, especialmente recordatorios de limpiezas y revisiones cada cierto número de meses.

Esta función debe considerarse una pieza central del MVP y de la comunicación del producto.
