# Feature: Gestión de Recetas

## Objetivo

Permitir al administrador crear, editar, publicar y archivar recetas para que puedan ser consultadas desde el sitio público.

Las recetas representan la unidad principal del sistema y constituyen el contenido del sitio.

---

## Descripción

Cada receta corresponde a una preparación que fue realizada y validada por el autor.

La información publicada no necesariamente coincide con la receta original, sino con la versión que el autor considera definitiva luego de haber realizado modificaciones según su experiencia.

El objetivo no es almacenar la mayor cantidad posible de recetas, sino aquellas que realmente fueron cocinadas y que vale la pena volver a preparar.

---

## Campos

### Título

- Obligatorio.
- No necesariamente debe ser único.
- Máximo 120 caracteres.

Ejemplo:

- Pizza Napolitana
- Focaccia de Romero

---

### Slug

- Se genera automáticamente a partir del título.
- Debe ser único.
- Se utiliza para construir la URL pública.

Ejemplos:

/recetas/pizza-napolitana

/recetas/focaccia-de-romero

Si el slug ya existe, el sistema deberá generar uno alternativo.

---

### Categoría

Obligatoria.

Valores permitidos para el MVP:

- Dulce
- Salada

---

### Descripción

Opcional.

Breve introducción de la receta.

Se utiliza como resumen en el listado de recetas.

Máximo sugerido: 500 caracteres.

---

### Ingredientes

Obligatorio.

Campo de texto multilínea.

El administrador puede escribir libremente la lista de ingredientes.

No existe una estructura fija para cantidades o unidades.

Ejemplo:

- 500 g harina 000
- 10 g sal
- 325 ml agua

---

### Preparación

Obligatorio.

Campo de texto multilínea.

Describe paso a paso cómo realizar la receta.

No existe un límite de pasos.

---

### Mis modificaciones / Consejos

Opcional.

Espacio destinado a registrar cambios respecto de la receta original, consejos personales o recomendaciones obtenidas durante la preparación.

Esta sección constituye uno de los principales diferenciales del sitio.

---

### Fuente

Opcional.

Puede contener:

- nombre de una persona
- nombre de un sitio web
- nombre de un libro
- enlace a una página

Ejemplos:

- Paulina Cocina
- Mi mamá
- Libro Larousse
- https://...

---

### Tiempo de preparación

Opcional.

Texto libre.

Ejemplos:

- 30 minutos
- 2 horas
- 24 horas (incluyendo levado)

---

### Porciones

Opcional.

Texto libre.

Ejemplos:

- 4 personas
- 8 porciones
- 2 pizzas grandes

---

### Foto principal

Obligatorio.

Una única imagen.

Será utilizada:

- en la portada
- en los listados
- en la página de detalle

---

### Estado

Valores posibles:

- Borrador
- Publicada
- Archivada

Solo las recetas publicadas serán visibles para el público.

---

## Reglas de negocio

- El slug debe ser único.
- El slug se genera automáticamente.
- Una receta puede editarse en cualquier momento.
- Solo las recetas publicadas son visibles en el sitio público.
- Una receta puede guardarse como borrador antes de publicarse.
- Una receta puede archivarse. Las recetas archivadas no son visibles para el público y no aparecen en el listado del administrador por defecto, aunque pueden restaurarse en cualquier momento.

---

## Ordenamiento

Las recetas públicas se mostrarán por fecha de publicación descendente (las más nuevas primero).

En futuras versiones podrá modificarse este criterio.

---

## Fuera del alcance del MVP

No forman parte de esta funcionalidad:

- Comentarios.
- Valoraciones.
- Favoritos.
- Múltiples imágenes.
- Videos.
- Etiquetas.
- Historial de versiones.
- Recetas relacionadas.