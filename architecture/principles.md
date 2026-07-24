# Architecture Principles

Este documento define los principios que guían el diseño y la evolución del proyecto.

No describe tecnologías específicas, sino criterios para tomar decisiones de arquitectura durante el desarrollo.

---

# 1. Priorizar simplicidad

Siempre se elegirá la solución más simple que resuelva correctamente el problema actual.

No se incorporará complejidad anticipada.

---

# 2. YAGNI (You Aren't Gonna Need It)

Las funcionalidades se implementarán únicamente cuando exista una necesidad concreta.

No se desarrollarán características "por si algún día hacen falta".

---

# 3. Evolución incremental

El proyecto crecerá mediante iteraciones pequeñas.

Cada versión deberá dejar el sistema funcionando y en un estado desplegable.

---

# 4. Documentación antes que implementación

Toda funcionalidad comenzará con una especificación funcional.

La implementación será consecuencia de la documentación, no al revés.

---

# 5. Separación de responsabilidades

Cada componente deberá tener una única responsabilidad clara.

La interfaz de usuario no contendrá lógica de negocio.

La persistencia no estará acoplada a la interfaz.

---

# 6. Desacoplamiento tecnológico

La lógica del dominio no dependerá de Supabase, Next.js ni de ninguna otra herramienta específica.

Las tecnologías son implementaciones.

El dominio representa el negocio.

---

# 7. Arquitectura pragmática

Se evitarán patrones y capas innecesarias.

La arquitectura deberá responder a las necesidades reales del proyecto.

---

# 8. Convención sobre configuración

Siempre que sea posible se respetarán las convenciones del framework.

Solo se personalizará aquello que aporte un beneficio claro.

---

# 9. Código legible

El código debe ser fácil de leer antes que ingenioso.

Se privilegiarán nombres descriptivos y estructuras simples.

---

# 10. Pensar primero, programar después

Antes de implementar una funcionalidad se deberá comprender completamente el problema que intenta resolver.

Las decisiones de diseño tendrán prioridad sobre la velocidad de implementación.

# 11. Uso responsable de IA

Las herramientas de IA forman parte del proceso de desarrollo, pero ninguna decisión de diseño o implementación se incorporará sin ser comprendida y validada.

La IA asiste en la generación de código, documentación y propuestas, mientras que la responsabilidad final sobre el diseño y la calidad del software recae en el desarrollador.