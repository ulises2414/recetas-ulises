# Data Model

## Objetivo

Este documento describe el modelo de datos conceptual del sistema.

No representa el esquema físico de la base de datos ni una implementación específica de PostgreSQL.

Su objetivo es definir las entidades persistentes, sus atributos, relaciones y restricciones para servir como base de la implementación.

---

# Entidades

## Receta

Representa una receta publicada o en proceso de edición por el administrador.

### Atributos

| Campo | Tipo conceptual | Obligatorio | Observaciones |
|--------|-----------------|-------------|---------------|
| id | UUID | Sí | Identificador único generado por el sistema. |
| titulo | Texto | Sí | 
| slug | Texto | Sí | Generado automáticamente a partir del título. Debe ser único. |
| categoria | Enum | Sí | Dulce o Salada. |
| descripcion | Texto largo | No | Resumen mostrado en el listado de recetas. |
| ingredientes | Texto largo | Sí | Lista de ingredientes en formato libre. |
| preparacion | Texto largo | Sí | Instrucciones de preparación. |
| modificaciones | Texto largo | No | Consejos o modificaciones personales respecto de la receta original. |
| fuente | Texto | No | Referencia a la receta original o su autor. |
| tiempoPreparacion | Texto | No | Ej.: "45 minutos". |
| porciones | Texto | No | Ej.: "4 personas". |
| fotoPrincipal | Texto | Sí | Ruta o identificador de la imagen almacenada. |
| estado | Enum | Sí | Borrador, Publicada o Archivada. |
| createdAt | Fecha/Hora | Sí | Generado automáticamente. |
| updatedAt | Fecha/Hora | Sí | Actualizado automáticamente. |
| publishedAt | Fecha/Hora | No | Se establece automáticamente cuando la receta se publica por primera vez. |

---

# Relaciones

## Categoría

Durante el MVP no existe como entidad.

Se representa mediante un valor enumerado.

Valores permitidos:

- DULCE
- SALADA

---

## Usuario Administrador

Durante el MVP existirá un único usuario administrador autenticado mediante Supabase Auth.

Las recetas no almacenarán referencia explícita al usuario creador.

Esta relación podrá incorporarse en futuras versiones si el sistema soporta múltiples administradores.

---

# Restricciones

## Unicidad

Debe existir un único:

- id
- slug

---

## Obligatoriedad

Una receta publicada deberá tener:

- título
- categoría
- ingredientes
- preparación
- foto principal

---

## Estados válidos

Los estados posibles son:

- BORRADOR
- PUBLICADA
- ARCHIVADA

---

## Transiciones permitidas

BORRADOR
→ PUBLICADA

PUBLICADA
→ ARCHIVADA

ARCHIVADA
→ PUBLICADA

Una receta publicada puede editarse sin modificar su estado.

---

# Índices sugeridos

Deberán indexarse al menos los siguientes campos:

- slug
- categoria
- estado
- publishedAt

---

# Eliminación

Las recetas no se eliminan físicamente desde la aplicación.

El archivado constituye el mecanismo oficial para retirar contenido del sitio.

---

# Modelo futuro

No forman parte del MVP pero fueron considerados durante el diseño:

- Comentarios.
- Sugerencias de recetas.
- Múltiples imágenes.
- Etiquetas.
- Favoritos.
- Historial de modificaciones.
- Versionado de recetas.