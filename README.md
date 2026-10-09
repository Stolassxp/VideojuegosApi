# VideojuegosApi

Web API en C# (.NET 10) con controladores y Entity Framework Core (SQLite) que permite realizar operaciones CRUD sobre una lista de videojuegos.

## Video de demostración

[Ver video del funcionamiento](https://drive.google.com/file/d/1hPZfCMw9n3mIZhd2NOeiE3w3DTJBW1d8/view?usp=sharing)

## Tecnologías

- C# / .NET 10
- ASP.NET Core Web API (controladores)
- Entity Framework Core con SQLite

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/videojuegos` | Obtiene todos los videojuegos (SELECT) |
| GET | `/api/videojuegos/{id}` | Obtiene un videojuego por Id (SELECT) |
| POST | `/api/videojuegos` | Crea un videojuego (INSERT) |
| PUT | `/api/videojuegos/{id}` | Actualiza un videojuego (UPDATE) |

## Cómo ejecutarlo

1. Clonar el repositorio.
2. Abrir la solución en Visual Studio.
3. Ejecutar `Update-Database` en la Consola del administrador de paquetes.
4. Presionar F5 y probar con el archivo `VideojuegosApi.http`.

## Nombre

[Hanz Alexander Chanchavac Gonzalez]