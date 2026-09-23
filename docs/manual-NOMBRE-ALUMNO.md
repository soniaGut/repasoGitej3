# Manual del Proyecto

## Modelos de servicio Cloud: IaaS vs PaaS

| Característica         | IaaS (Infrastructure as a Service)       | PaaS (Platform as a Service)              |
|-------------------------|-------------------------------------------|---------------------------------------------|
| ¿Qué ofrece?            | Infraestructura virtualizada (servidores, redes, almacenamiento) | Plataforma completa para desarrollar y desplegar apps |
| Control del usuario     | Alto (gestiona el sistema operativo y el software) | Medio (solo gestiona la aplicación y sus datos) |
| Responsabilidad del proveedor | Hardware, virtualización, red        | Hardware, red, sistema operativo, entorno de ejecución |
| Ejemplos                | Amazon EC2, Google Compute Engine, Azure VM | Heroku, Google App Engine, Azure App Service |
| Uso típico               | Empresas que necesitan control total sobre la infraestructura | Desarrolladores que quieren centrarse solo en el código |

## Cómo publicar la aplicación en GitHub Pages

\`\`\`bash
# 1. Asegúrate de tener un repositorio remoto en GitHub y súbelo si aún no lo has hecho
git remote add origin https://github.com/usuario/nombre-repositorio.git
git push -u origin main

# 2. Crea (o cambia a) una rama llamada gh-pages
git checkout -b gh-pages

# 3. Sube esa rama al repositorio remoto
git push origin gh-pages

# 4. Activa GitHub Pages desde la web:
#    Repositorio > Settings > Pages
#    En "Source", selecciona la rama "gh-pages" y la carpeta "/ (root)"
#    Guarda los cambios

# 5. Tras unos minutos, la app estará disponible en:
#    https://usuario.github.io/nombre-repositorio/
\`\`\`
EOF