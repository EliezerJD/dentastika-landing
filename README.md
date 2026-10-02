# Dentastika — Landing (Astro)

Sitio estático de marketing para **dentastika.com**. La app vive aparte, en Angular, en **app.dentastika.com**.

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (HTML + CSS estáticos)
npm run preview  # sirve /dist localmente
```

Despliega `/dist` en Vercel, Netlify o Cloudflare Pages (comando de build: `npm run build`, carpeta: `dist`).

## Qué editar

| Archivo | Para qué |
| --- | --- |
| `src/config.ts` | URL de login, **número de WhatsApp** (lista de espera y demo) y los planes. Los precios aún no están definidos: la página muestra "Próximamente". |
| `src/components/*.astro` | Cada sección de la página: `Hero`, `AppWindow` (la vista del producto), `FollowUp` (seguimiento de pacientes), `Features`, `PatientPortal`, `HowItWorks`, `Pricing`, `Faq`, `FinalCta`, `Footer`. |
| `PROJECT_CONTEXT.md` | Alcance del producto y reglas de comunicación (qué se puede y no prometer en la landing). |
| `src/styles/tokens.css` | Tokens del design system Dentastika (colores claro/oscuro, espacios, radios, sombras, tipografía). |
| `src/styles/global.css` | Estilos base y componentes compartidos `.dt-btn`, `.dt-badge`, `.dt-card`, `.dt-plan`, `.dt-nav`. |

## Compartir estilos con la app Angular

Copia `src/styles/tokens.css` a la app (por ejemplo `src/styles/tokens.css`) e impórtalo en `styles.scss`
antes del tema de Angular Material. Así la landing y la app usan exactamente los mismos colores.
Si cambias un token, cámbialo en el Design System y copia el archivo a ambos proyectos
(o publícalo como paquete npm interno cuando tengas más de dos consumidores).

## Detalles

- Modo oscuro automático según el sistema operativo (`prefers-color-scheme`).
- Solo se envía JavaScript para la animación de aparición al hacer scroll (respeta `prefers-reduced-motion`).
- SEO: `title`, `description`, Open Graph, URL canónica y datos estructurados `FAQPage` para las preguntas frecuentes.
- Pendientes: logotipo definitivo, imagen Open Graph (`og:image`), páginas `/privacidad` y `/terminos`, analítica.
