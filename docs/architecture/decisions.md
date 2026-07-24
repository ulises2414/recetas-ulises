# Architecture Decisions

Este documento registra las principales decisiones de arquitectura tomadas durante el desarrollo del proyecto.

Cada decisión busca mantener el proyecto simple, escalable y fácil de mantener, priorizando siempre el objetivo del MVP.

---

# ADR-001 - Arquitectura Monolítica

## Estado

Aceptada

## Decisión

La aplicación será un monolito construido con Next.js.

No existirán proyectos separados para frontend y backend.

## Justificación

Para un proyecto personal no aporta valor mantener dos aplicaciones independientes.

Next.js permite implementar la interfaz de usuario y la lógica del servidor dentro del mismo proyecto, simplificando el desarrollo y el despliegue.

---

# ADR-002 - Uso de TypeScript

## Estado

Aceptada

## Decisión

Todo el proyecto será desarrollado utilizando TypeScript.

## Justificación

TypeScript proporciona mayor seguridad durante el desarrollo, mejor autocompletado y una experiencia más cercana a lenguajes fuertemente tipados como Java.

Aunque aumenta ligeramente la complejidad inicial, reduce errores y facilita el mantenimiento a largo plazo.

---

# ADR-003 - Acceso a datos mediante una capa de servicios

## Estado

Aceptada

## Decisión

Los componentes de la interfaz no accederán directamente a Supabase.

Toda interacción con la persistencia se realizará mediante una capa de servicios.

Ejemplo:

Page
→ Service
→ Supabase

## Justificación

Esta separación desacopla la lógica del negocio del proveedor de persistencia.

Permite reemplazar Supabase en el futuro con un impacto mínimo sobre el resto de la aplicación.

Además mantiene una estructura familiar para desarrolladores provenientes del backend tradicional.

---

# ADR-004 - Persistencia con Supabase

## Estado

Aceptada

## Decisión

La base de datos será PostgreSQL utilizando Supabase.

También se utilizarán sus servicios de autenticación y almacenamiento de imágenes.

## Justificación

Supabase ofrece una excelente integración con Next.js y un plan gratuito suficiente para el alcance del proyecto.

Reduce significativamente el tiempo necesario para construir infraestructura.

---

# ADR-005 - Categorías simples durante el MVP

## Estado

Aceptada

## Decisión

Las categorías no serán una entidad independiente.

Durante el MVP únicamente existirán dos valores posibles:

- Dulce
- Salada

## Justificación

No existe una necesidad real de administrar categorías dinámicamente.

Evitar una tabla adicional simplifica tanto el modelo como la interfaz de administración.

Si el proyecto evoluciona, las categorías podrán convertirse en una entidad propia.

---

# ADR-006 - Archivado en lugar de eliminación

## Estado

Aceptada

## Decisión

Las recetas no se eliminarán desde la interfaz de administración.

En su lugar podrán archivarse y restaurarse posteriormente.

## Justificación

Evita pérdidas accidentales de información.

Permite mantener el historial del contenido sin afectar la experiencia pública del sitio.

---

# ADR-007 - Una única imagen por receta

## Estado

Aceptada

## Decisión

Durante el MVP cada receta tendrá únicamente una foto principal.

No existirá una galería de imágenes.

## Justificación

Una imagen es suficiente para cumplir los objetivos iniciales del proyecto.

Las galerías podrán incorporarse en versiones futuras sin afectar el modelo funcional del MVP.

---

# ADR-008 – Especificaciones antes que implementación

## Estado

Aceptada

## Decisión

Toda funcionalidad nueva deberá comenzar con una especificación funcional en la carpeta specs/ antes de escribir código.

## Justificación

La especificación actúa como fuente de verdad para el proyecto y mejora la calidad del contexto que reciben las herramientas de IA. Además, separa claramente las decisiones de producto de las decisiones técnicas.

---

# ADR-009 – MVP antes que optimización

## Estado

Aceptada

## Decisión

Ante varias alternativas técnicamente válidas, se elegirá la que permita entregar el MVP con menor complejidad, aunque no sea la solución más flexible.

## Justificación

El objetivo principal del proyecto es construir un producto funcional y aprender el stack moderno. La optimización y las abstracciones adicionales se incorporarán únicamente cuando exista una necesidad concreta.

---

# ADR-010 - Arquitectura pragmática

## Estado

Aceptada

## Decisión

El proyecto seguirá una arquitectura pragmática, evitando capas y abstracciones innecesarias para el alcance del MVP.

La estructura deberá ser simple, fácil de entender y evolucionar.

## Justificación

El objetivo del proyecto no es replicar la arquitectura de un sistema enterprise, sino construir una aplicación mantenible utilizando tecnologías modernas.

Las abstracciones solo se incorporarán cuando resuelvan un problema real.

Se priorizará la legibilidad y la velocidad de desarrollo por sobre la sofisticación técnica.

---

# ADR-011 - Ordenamiento por fecha de publicación

## Estado

Aceptada

## Decisión

Las recetas públicas se ordenarán por la fecha de publicación (`publishedAt`) y no por la fecha de creación.

## Justificación

Una receta puede permanecer como borrador durante un tiempo antes de hacerse pública.

Ordenar por `publishedAt` refleja mejor la experiencia esperada por los visitantes del sitio y evita que recetas antiguas aparezcan como nuevas únicamente porque fueron creadas antes.

---


# Principios generales

Además de las decisiones anteriores, el proyecto seguirá los siguientes principios:

- Priorizar simplicidad sobre flexibilidad.
- Evitar complejidad anticipada (YAGNI).
- Documentar cada funcionalidad antes de implementarla.
- Mantener desacoplada la lógica de negocio de la tecnología utilizada.
- Construir funcionalidades pequeñas e iterativas.