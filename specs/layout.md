# Feature 1.1 - Layout Base

## Objetivo

Crear la estructura visual base del sitio sobre la cual se desarrollarán todas las funcionalidades posteriores.

Esta feature establece el marco general de navegación y presentación del sitio, pero no implementa lógica de negocio ni acceso a datos.

---

# Alcance

El sitio deberá contar con:

- Header.
- Navegación principal.
- Área de contenido.
- Footer.

Debe utilizar el sistema de Layout de Next.js (App Router).

---

# Header

El header deberá contener:

- Nombre del sitio: **Recetas Ulises**
- Navegación principal

Opciones de navegación:

- Inicio
- Dulces
- Saladas

En esta etapa no se implementan:

- Buscador
- Login
- Menú hamburguesa
- Dropdowns
- Iconos

---

# Contenido Principal

La Home será el listado principal de recetas.

Como durante esta etapa todavía no existen recetas cargadas, deberá mostrarse un estado vacío con un mensaje similar a:

"Todavía no hay recetas publicadas."

y un breve texto indicando que próximamente aparecerán allí.

Este contenido será reemplazado automáticamente cuando exista la Feature de listado de recetas.

---

# Footer

El footer será simple.

Debe contener:

- Nombre del sitio.
- Texto indicando que es un proyecto personal.
- Año actual.

No agregar enlaces externos en esta etapa.

---

# Responsive

El sitio debe visualizarse correctamente en:

- Desktop
- Tablet
- Mobile

Para el MVP:

- No implementar menú hamburguesa.
- La navegación puede mantenerse horizontal mientras resulte cómoda.

---

# Estilo Visual

El objetivo es priorizar la simplicidad y la legibilidad.

Utilizar:

- fondo claro;
- texto oscuro;
- una única paleta de acento discreta;
- espacios amplios;
- buena separación entre secciones.

No dedicar tiempo a una identidad visual definitiva.

---

# Tipografía

Utilizar la tipografía **Geist** provista por Next.js.

No incorporar tipografías externas.

---

# Layout

El contenido deberá mostrarse centrado.

Utilizar un ancho máximo para mejorar la lectura en pantallas grandes.

El header y el footer deberán mantenerse consistentes en todas las páginas.

---

# Estilos

Utilizar **CSS Modules**.

No utilizar Tailwind CSS.

No incorporar librerías de componentes.

---

# Accesibilidad

Aplicar buenas prácticas básicas:

- HTML semántico.
- Navegación clara.
- Contraste adecuado.
- Uso correcto de encabezados.

No es necesario realizar optimizaciones avanzadas en esta etapa.

---

# Fuera de alcance

Esta feature NO incluye:

- Supabase
- Base de datos
- Login
- Administración
- CRUD de recetas
- Comentarios
- Sugerencias
- Buscador
- Filtros
- Categorías dinámicas