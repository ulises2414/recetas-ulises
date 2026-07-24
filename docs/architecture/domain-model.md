# Modelo de Dominio

## Entidades

### Receta

Representa una preparación culinaria que fue realizada y validada por el autor.

Es la entidad principal del sistema.

---

## Responsabilidades

Una receta puede:

- Crearse.
- Editarse.
- Publicarse.
- Archivarse.
- Restaurarse desde un estado archivado.

---

## Estados

- Borrador
- Publicada
- Archivada

---

## Reglas

- Una receta publicada debe tener un título.
- Una receta publicada debe tener una categoría.
- Una receta publicada debe tener ingredientes.
- Una receta publicada debe tener preparación.
- Una receta publicada debe tener una foto principal.

---

## Relaciones

Una receta:

- pertenece a una categoría;
- posee una foto principal;
- es administrada por un usuario administrador.