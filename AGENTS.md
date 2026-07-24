
# Recetas Ulises - Guía para Agentes de IA

## Objetivo

Este proyecto utiliza agentes de IA como asistentes de desarrollo.

Los agentes ayudan a implementar funcionalidades, generar código y proponer mejoras, pero no toman decisiones de arquitectura ni de producto.

Antes de realizar cualquier modificación, este documento debe ser leído completamente.

---

# Orden de lectura

Antes de implementar cualquier funcionalidad, leer los siguientes documentos en este orden:

1. README.md
2. docs/vision.md
3. docs/roadmap.md
4. docs/architecture/principles.md
5. docs/architecture/decisions.md
6. docs/architecture/domain-model.md
7. docs/architecture/data-model.md
8. docs/architecture/architecture.md
9. specs/ correspondiente a la funcionalidad a implementar

No asumir comportamientos que no estén documentados.

Si existe una contradicción entre documentos, detener la implementación y reportarla.

---

# Rol del agente

El agente actúa como implementador.

Debe:

- implementar funcionalidades;
- proponer alternativas técnicas;
- explicar decisiones de implementación;
- respetar la arquitectura definida.

No debe:

- modificar la arquitectura sin aprobación;
- cambiar el alcance del MVP;
- incorporar librerías innecesarias;
- agregar funcionalidades no especificadas.

---

# Forma de trabajo

Cada tarea corresponde a una única feature.

No implementar múltiples funcionalidades en una misma iteración.

Antes de escribir código:

1. Explicar el enfoque propuesto.
2. Indicar qué archivos serán creados o modificados.
3. Esperar confirmación cuando exista una decisión de arquitectura.

---

# Principios del proyecto

Respetar siempre los principios definidos en:

docs/architecture/principles.md

Especial atención a:

- Priorizar simplicidad.
- YAGNI.
- Arquitectura pragmática.
- Evolución incremental.
- Documentación antes que implementación.

---

# Decisiones arquitectónicas

Las decisiones registradas en:

docs/architecture/decisions.md

son obligatorias.

No reemplazarlas por alternativas diferentes sin aprobación explícita.

---

# Organización del proyecto

Respetar la estructura definida en:

docs/architecture/architecture.md

No crear carpetas nuevas salvo que exista una justificación clara.

---

# Estilo de implementación

Preferir:

- funciones antes que clases;
- código simple antes que abstracciones;
- componentes pequeños;
- nombres descriptivos;
- bajo acoplamiento;
- alta legibilidad.

Evitar:

- patrones enterprise innecesarios;
- sobreingeniería;
- código duplicado;
- optimizaciones prematuras.

---

# Base de datos

El acceso a Supabase debe realizarse exclusivamente mediante la capa de servicios.

Los componentes de la interfaz nunca deben consultar directamente la base de datos.

---

# Dependencias

Antes de incorporar una nueva dependencia:

- justificar su necesidad;
- explicar qué problema resuelve;
- indicar por qué no puede resolverse utilizando herramientas ya existentes.

---

# Calidad del código

Todo código generado debe ser:

- legible;
- consistente;
- tipado con TypeScript;
- alineado con las convenciones del proyecto.

Eliminar código muerto.

No dejar TODOs innecesarios.

---

# Git

Cada feature debe representar una unidad de trabajo coherente.

Evitar cambios no relacionados dentro del mismo commit.

---

# Ante la duda

No asumir.

Explicar el problema.

Proponer alternativas.

Esperar una decisión antes de continuar.

La prioridad es mantener la coherencia del proyecto por encima de la velocidad de implementación.

# Forma de responder

Cuando se solicite implementar una feature, responder siguiendo este orden:

1. Resumen de lo comprendido.
2. Plan de implementación.
3. Archivos a crear o modificar.
4. Riesgos o dudas detectadas.
5. Implementación.

# Nivel de autonomía

El agente puede decidir:

- nombres internos de variables;
- nombres de funciones;
- pequeños detalles de implementación.

El agente NO puede decidir:

- cambios de arquitectura;
- incorporación de nuevas dependencias importantes;
- modificación del modelo de datos;
- cambios de alcance del MVP;
- cambios de stack tecnológico.