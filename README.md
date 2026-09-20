# Gestor de Tareas — Proyecto base

Pequeña aplicación web (HTML + CSS + JavaScript, sin frameworks ni backend) que sirve como **repositorio base** para practicar el flujo de trabajo con Git y GitHub: clonado, ramas, `.gitignore`, commits y Pull Requests.

## ¿Qué hace la aplicación?

Un gestor de tareas que se ejecuta directamente en el navegador:

- Añadir tareas.
- Marcarlas como completadas.
- Eliminarlas.
- Las tareas se guardan en `localStorage`, así que persisten entre recargas de la página.

El código es intencionadamente sencillo: lo importante de esta práctica no es la lógica de la aplicación, sino el **flujo de trabajo colaborativo con Git**.

## Puesta en marcha

No requiere instalación ni dependencias. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
# Con la extensión "Live Server" de VS Code, o bien:
npx serve .
```

## Estructura del proyecto

```
proyecto-git-daw/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── docs/
│   └── README.md      # Aquí irán los manuales que aporte cada alumno/a
└── .gitignore
```

## Cómo contribuir (resumen)

1. Clona el repositorio y pide que te añadan como colaborador/a.
2. Crea los archivos locales indicados en el enunciado (`config.env`, `logs/server.log`, `dist/app.min.js`) y actualiza `.gitignore` para que Git los ignore.
3. Crea tu propia rama: `git checkout -b docs/instalacion-NOMBRE-ALUMNO`.
4. Añade tu manual en `docs/manual-NOMBRE-ALUMNO.md`.
5. Haz commit siguiendo la convención acordada en clase (por ejemplo, [Conventional Commits](https://www.conventionalcommits.org/)).
6. Sube tu rama (`git push origin docs/instalacion-NOMBRE-ALUMNO`) y abre una Pull Request hacia `main`, asignando a la profesora como revisora.

Consulta el enunciado completo de la práctica proporcionado en clase para todos los detalles.
