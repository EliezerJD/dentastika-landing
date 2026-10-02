// Ajusta estas URLs a tus dominios reales.
export const APP_URL = 'https://app.dentastika.com';
export const LOGIN_URL = `${APP_URL}/login`;

// TODO: reemplaza el número de WhatsApp por el real (formato 52 + 10 dígitos).
export const WHATSAPP_NUMBER = '520000000000';
export const WAITLIST_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero unirme a la lista de espera de Dentastika')}`;
export const DEMO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero una demo de Dentastika')}`;

// Los precios aún no están definidos: la página muestra "Próximamente" en lugar del monto.
export const PLANS = [
  { name: 'Consultorio', desc: 'Para el dentista independiente.', cta: 'Quiero información', href: WAITLIST_URL,
    features: ['Agenda y citas', 'Registro de pacientes', 'Seguimientos automáticos', 'Portal del paciente', 'Recordatorios de cita'] },
  { name: 'Clínica', desc: 'Para equipos con varios doctores.', cta: 'Quiero información', href: WAITLIST_URL, featured: true,
    features: ['Todo lo de Consultorio', 'Horarios por doctor', 'Presupuestos, pagos y saldos', 'Inventario e instrumental', 'Tareas del equipo', 'Portal con la marca de tu clínica'] },
  { name: 'A tu medida', desc: 'Para clínicas con más volumen.', cta: 'Hablar con nosotros', href: DEMO_URL,
    features: ['Todo lo de Clínica', 'Laboratorios y proveedores', 'Acompañamiento en la implementación', 'Migración de tus pacientes'] },
];
