# Architecture

## Objetivo

Este documento describe la arquitectura general del proyecto.

Define el stack tecnológico, la organización de la aplicación y la interacción entre sus componentes.

Los principios arquitectónicos se encuentran en `principles.md`.

Las decisiones de diseño se documentan en `decisions.md`.

El modelo de dominio y el modelo de datos se describen en `domain-model.md` y `data-model.md`.

---

# Stack tecnológico

## Frontend

- Next.js
- React
- TypeScript

## Backend

- Next.js Server Components
- Route Handlers

## Persistencia

- Supabase
    - PostgreSQL
    - Authentication
    - Storage

## Hosting

- Vercel

---

# Arquitectura general

La aplicación sigue una arquitectura monolítica.

Frontend y backend conviven dentro del mismo proyecto Next.js.

Toda la lógica del negocio se implementa mediante una capa de servicios.

La interfaz nunca interactúa directamente con Supabase.


                   Browser
                      │
                      ▼
                Next.js App Router
                      │
          ┌───────────┴────────────┐
          │                        │
          ▼                        ▼
     Server Components      Route Handlers
          │                        │
          └───────────┬────────────┘
                      ▼
                 Service Layer
                      │
                      ▼
                  Supabase
        ┌─────────┼──────────┐
        ▼         ▼          ▼
   PostgreSQL   Storage     Auth

   ## Organización del proyecto

   src/

    app/

    components/

    features/

    recetas/

        components/

        services/

        types/

        utils/

    lib/

    admin/


## Flujo de una request

    Browser

↓

Page

↓

Feature

↓

Service

↓

Supabase


## Manejo de estado

El proyecto utilizará el estado local de React y las capacidades nativas de Next.js. No se incorporarán librerías de manejo de estado global mientras no exista una necesidad concreta.


## Manejo de imagenes

Administrador

↓

Sube imagen

↓

Supabase Storage

↓

Se obtiene URL

↓

La receta almacena esa referencia


## Seguridad

Sitio público
↓
No requiere login

Panel administrador
↓
Requiere autenticación
↓
Supabase Auth


## Despliegue

GitHub

↓

Vercel

↓

Producción


## Posibles evoluciones

La arquitectura fue diseñada para permitir incorporar en el futuro:

- Comentarios.
- Sugerencias de recetas.
- Búsquedas avanzadas.
- Múltiples administradores.
- Múltiples imágenes.
- Editor enriquecido.


## Lógica de negocio

La lógica de negocio se implementará mediante funciones organizadas por feature, evitando clases y patrones innecesarios para el alcance del proyecto.