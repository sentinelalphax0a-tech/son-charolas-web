# Son Charolas — Web Oficial + Pedidos Online

## Descripción
Web oficial de **Son Charolas**, negocio de comida estilo Sonora fundado por
el youtuber/influencer **Juanito Martínez** (Juan Carlos Martínez, @juanitocmp1292,
719K seguidores en Instagram). Ubicado en Zapopan/Guadalajara, Jalisco, México.
Especialidad: charolas de botanas salseadas estilo Sonora, bebidas de clamato,
limonadas artesanales y fresas con crema.

## Objetivo de la web
1. **Menú visual** — Que la gente vea los productos y se antoje (fotos reales, no stock)
2. **Pedidos online** — Integrar con Rappi/Didi o carrito propio con Stripe
3. **Sucursales** — Mapa con ubicaciones y horarios
4. **Marca personal** — Conectar con el perfil de Juanito (@juanitocmp1292) y redes
5. **Promos** — Sección de promociones (ej: "Jueves 2da a mitad de precio")

## Target
- Audiencia joven mexicana (16-30 años), fans de Juanito y de la comida callejera
- Usuarios 95% en móvil (Instagram → link en bio → web)
- Zona: Guadalajara metropolitana (Zapopan, Tlaquepaque, Chapalita)

## Stack Tecnológico

### Frontend
- Framework: Next.js 15 (App Router)
- Lenguaje: TypeScript estricto
- Estilos: Tailwind CSS 4 + Framer Motion para animaciones
- Componentes UI: shadcn/ui personalizado con identidad mexicana
- Estado: Zustand para carrito, React Query para menú/sucursales
- Formularios: React Hook Form + Zod

### Backend
- API: Next.js Route Handlers
- Base de datos: Supabase (productos, pedidos, sucursales, promos)
- Autenticación: NO necesaria para ver menú. Opcional para historial de pedidos.
- Pagos: Stripe Checkout (si carrito propio) o links a Rappi/Didi
- Email: Resend para confirmación de pedidos

### Infraestructura
- Hosting: Vercel
- Dominio: soncharolas.com (por confirmar)
- Analytics: Plausible (privacidad-first, no cookies)

## Datos del negocio

### Sucursales
1. **Valdepeñas (Zapopan)** — C. Rinconada de Camichín & Av. Valdepeñas, Zapopan, Jal.
2. **Rancho Blanco (Tlaquepaque)** — C. 5 de Febrero 2696, Rancho Blanco, 44890 GDL, Jal.
3. Instagram sucursal Tlaquepaque: @soncharolastlaq

### Redes sociales (mostrar en el footer y enlazar SIEMPRE)
- Instagram principal: https://instagram.com/soncharolas (51.6K seguidores)
- Instagram Juanito: https://instagram.com/juanitocmp1292 (719K seguidores)
- Google Maps: https://maps.app.goo.gl/THSCrHLweWpgrJWs6
- Rappi: Disponible para pedidos a domicilio
- YouTube de Juanito: canal de autos y lifestyle

### Menú completo (precios de Rappi, actualizar si cambian)

#### 🔥 Charolas (el producto estrella)
| Producto | Descripción | Precio |
|----------|-------------|--------|
| Juanicharola | Sabritas, pepino, rielitos, cacahuates, camarón, carne seca, salseado Sonora | $239 MXN |
| Charoson | Papas, carne seca, rielitos, cacahuates, pepino, salseado Sonora | $269 MXN |
| Charofish | Papas, pepino, cacahuate, rielitos, camarón, salseado Sonora | $219 MXN |
| Special Charofish | Versión premium del Charofish | (confirmar precio) |
| Charola para Fiestas | Papas, pepino, cacahuate, rielitos, dulces tamarindo, banderillas, salseado | $499 MXN |
| Salseada | Papas, pepino, cacahuates, rielitos, salseado Sonora | $129 MXN |

#### 🥤 Bebidas
| Producto | Descripción | Precio |
|----------|-------------|--------|
| Clamatazo | Camarones, papas, carne seca Sonora, cacahuate, rielitos, pepino, banderilla | $222 MXN |
| Clamafish | Versión con camarón del clamato | (confirmar) |
| Mango Tango | Frapeado de mango, chamoy, gomitas de tamarindo | $129 MXN |
| Limonada de Moras | Limonada con agua mineral sabor moras | $72 MXN |
| Úvola | Bebida uva y limón, mineralizada | $72 MXN |
| Cereza | Bebida agua mineral sabor cereza | $72 MXN |

#### 🍓 Fresas con Crema
| Producto | Descripción | Precio |
|----------|-------------|--------|
| Fresas con Crema | Clásicas | $135 MXN |
| Fresas Oreo | Con galleta Oreo y chocolate | $172 MXN |
| Fresas Pingüino | Con Pingüino y chocolate | $172 MXN |
| Fresas Gansito | Sabor Gansito con chocolate | $172 MXN |

### Contacto
- Email publicidad: jcmp1208@gmail.com
- DMs por Instagram: @soncharolas

## Filosofía de Diseño

### IDENTIDAD VISUAL — ESTO ES LO MÁS IMPORTANTE

La marca de Son Charolas ya tiene una estética MUY definida en Instagram:
**colores vibrantes mexicanos, fondo amarillo-naranja, tipografía bold,
fotos de comida que se te antojan, energía joven y callejera.**

La web debe sentirse como una extensión de su Instagram, no como un
sitio corporativo genérico.

### Paleta de colores (extraída de su branding real)
- Primario: #E63946 (rojo Son Charolas — el color dominante en su logo y promos)
- Secundario: #F4A100 (amarillo/naranja vibrante — su fondo estrella en Instagram)
- Acento: #2D5016 (verde chile — para CTAs y detalles)
- Fondo principal: #FFF8F0 (crema cálido — light mode)
- Fondo dark: #1A0A00 (marrón muy oscuro, NO negro puro)
- Texto principal: #1C1917 (marrón oscuro)
- Texto sobre fondo oscuro: #FFF8F0

### Tipografía
- Headings: **Dela Gothic One** o **Archivo Black** (bold, impactante,
  tipo poster mexicano — como sus posts de Instagram "CHAROLAS", "PROMO")
- Body: **Plus Jakarta Sans** (moderna, legible en móvil)
- Mono: JetBrains Mono (solo si hay código, que no lo habrá)

### Estilo visual
- **Comida callejera premium** — no fine dining, no fast food corporativo.
  Es la esquina mexicana más cool, elevada a marca.
- **Fotos reales de sus productos** — NUNCA stock photos. Usar fotos
  de su Instagram o sesión de fotos propia. Los productos ya son
  fotogénicos (charolas llenas de colores, bebidas con chamoy).
- **Energía de Instagram** — la web debe sentirse como scrollear su feed.
  Transiciones rápidas, colores vivos, tipografía grande y bold.
- **Orgullo sonorense** — salpicaduras de salsa, texturas de chile,
  elementos gráficos mexicanos pero modernos (no clipart de sombreros).

### Anti-patrones ESPECÍFICOS para este proyecto
- NO usar estética minimalista tech (esto es comida mexicana, no un SaaS)
- NO usar fondo blanco puro (demasiado frío para comida)
- NO usar tipografía delgada/light (la marca es BOLD y en-tu-cara)
- NO hacer un grid de cards iguales para el menú (cada producto
  tiene su personalidad — charolas grandes, bebidas en formato diferente)
- NO poner un hero genérico "Welcome to Son Charolas" (mejor una foto
  full-width de la Juanicharola con salsa escurriendo y un "¡PRUÉBALA!")
- NO separar completamente la marca de Juanito — él ES la marca,
  su cara/nombre deben aparecer pero sin opacar los productos

### Inspiración de diseño
- Sus propios posts de Instagram (USAR como referencia directa)
- Apps de delivery mexicanas (Rappi, Didi Food) para el flujo de pedidos
- Webs de streetfood brands como Takis, Valentina, Hot Cheetos
  (colores explosivos, tipografía gruesa, energía joven)

## Estructura del Proyecto
```
web-soncharolas/
├── CLAUDE.md
├── .mcp.json
├── .claude/
│   ├── skills/
│   ├── agents/
│   └── settings.json
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing: hero + menú destacado + sucursales
│   │   ├── menu/page.tsx         # Menú completo con categorías
│   │   ├── sucursales/page.tsx   # Mapa + info de cada sucursal
│   │   ├── promos/page.tsx       # Promociones activas
│   │   ├── nosotros/page.tsx     # Historia + Juanito + la marca
│   │   ├── api/                  # Route handlers (pedidos, contacto)
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                   # Button, Input, Card personalizados
│   │   ├── layout/               # Header, Footer, MobileNav
│   │   ├── menu/                 # ProductCard, CategoryFilter, MenuGrid
│   │   ├── sucursales/           # MapEmbed, SucursalCard
│   │   └── promo/                # PromoBanner, PromoCard
│   ├── lib/
│   │   ├── supabase/
│   │   ├── utils.ts
│   │   └── menu-data.ts          # Datos del menú (hardcoded o Supabase)
│   ├── hooks/
│   ├── types/
│   └── styles/
│       ├── globals.css
│       └── animations.css
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── productos/            # Fotos de cada producto
│   │   ├── sucursales/           # Fotos de los locales
│   │   └── juanito/              # Fotos de Juanito con los productos
│   └── og/                       # Open Graph images
└── tests/
```

## Páginas principales

### 1. Landing (/) — La más importante
- Hero: foto FULL WIDTH de la Juanicharola o Clamatazo, con texto
  grande superpuesto "ESTILO SONORA" y CTA "Ver menú" / "Pedir ahora"
- Sección productos destacados: 3-4 productos estrella con scroll
  horizontal en móvil (NO grid de cards, sino carrusel de fotos grandes)
- Promo activa: banner de la promo vigente
- Sucursales: mapa pequeño + "Encuéntranos"
- Reseñas: las estrellas y quotes de clientes reales (como en su IG)
- Footer: redes sociales, contacto, links

### 2. Menú (/menu)
- Filtro por categoría: Charolas | Bebidas | Fresas con Crema
- Cada producto: foto grande, nombre, descripción, precio, botón de pedido
- Los productos deben verse APETITOSOS — la foto es el 70% de la venta

### 3. Sucursales (/sucursales)
- Google Maps embed con pins
- Card por sucursal: foto, dirección, horarios, link a Maps

### 4. Nosotros (/nosotros)
- Historia de Son Charolas
- Quién es Juanito (embed de IG o foto + bio corta)
- "Estilo Sonora" — qué significa, de dónde viene la receta

## Comandos
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Reglas de Negocio Críticas
- Los precios SIEMPRE en pesos mexicanos (MXN) con símbolo $
- Las fotos de productos son el activo #1 — optimizar pero no comprimir
  tanto que pierdan calidad. Formatos WebP con fallback a JPEG.
- El flujo de pedido debe ser MUY simple: ver producto → botón que lleve
  a Rappi/WhatsApp/carrito (definir cuál). Máximo 2 clics para pedir.
- El menú puede cambiar (promos, temporadas) — diseñar para que sea
  fácil actualizar precios y añadir/quitar productos
- La web DEBE funcionar perfectamente en móvil con conexión 4G promedio
  mexicana — optimizar imágenes y bundle agresivamente

## SEO
- Idioma: español (México) — `<html lang="es-MX">`
- Keywords: "charolas estilo sonora Guadalajara", "son charolas menú",
  "Juanito Martínez comida", "charolas Zapopan", "comida sonorense GDL"
- Local SEO: Schema.org Restaurant para cada sucursal
- Open Graph: fotos de productos (no logo) — que al compartir en
  WhatsApp/Instagram se vea comida apetitosa

## Estado Actual
- En progreso: Diseño y desarrollo inicial
- Pendiente: Fotos profesionales de productos, definir flujo de pedidos
- Por confirmar: Dominio, integración con delivery (Rappi/propia)