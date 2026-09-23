# Manual de Despliegue y Conceptos Cloud

## Comparativa de Modelos de Servicio Cloud

| Característica | IaaS (Infraestructura como Servicio) | PaaS (Plataforma como Servicio) |
| :--- | :--- | :--- |
| **Definición** | Ofrece recursos de computación básicos (servidores virtuales, red, almacenamiento). | Proporciona un entorno completo de desarrollo y despliegue sin gestionar la infraestructura. |
| **Control** | Alto: el usuario gestiona el sistema operativo, el software y la configuración. | Medio/Bajo: la plataforma gestiona el SO y el entorno; el usuario gestiona la aplicación y los datos. |
| **Mantenimiento** | Requiere mantenimiento del sistema operativo, parches de seguridad y redes. | El proveedor se encarga de las actualizaciones, parches y escalado automático. |
| **Ejemplos** | AWS EC2, Google Compute Engine, Microsoft Azure VMs. | GitHub Pages, Heroku, AWS Elastic Beanstalk, Vercel. |

---

## Publicación de la Aplicación en GitHub Pages

Para publicar una aplicación estática en GitHub Pages directamente desde la línea de comandos, ejecuta los siguientes comandos Bash:

```bash
# 1. Iniciar el repositorio local (si no está iniciado)
git init

# 2. Añadir los cambios y hacer el primer commit
git add .
git commit -m "Initial commit"

# 3. Renombrar la rama principal a main
git branch -M main

# 4. Vincular el repositorio remoto (sustituye TU-USUARIO y TU-REPOSO)
git remote add origin [https://github.com/TU-USUARIO/TU-REPOSITORIO.git](https://github.com/TU-USUARIO/TU-REPOSITORIO.git)

# 5. Enviar el código a la rama main
git push -u origin main

# 6. Crear y enviar la rama 'gh-pages' para publicar el sitio
git checkout -b gh-pages
git push origin gh-pages# Manual de Despliegue y Conceptos Cloud

## Comparativa de Modelos de Servicio Cloud

| Característica | IaaS (Infraestructura como Servicio) | PaaS (Plataforma como Servicio) |
| :--- | :--- | :--- |
| **Definición** | Ofrece recursos de computación básicos (servidores virtuales, red, almacenamiento). | Proporciona un entorno completo de desarrollo y despliegue sin gestionar la infraestructura. |
| **Control** | Alto: el usuario gestiona el sistema operativo, el software y la configuración. | Medio/Bajo: la plataforma gestiona el SO y el entorno; el usuario gestiona la aplicación y los datos. |
| **Mantenimiento** | Requiere mantenimiento del sistema operativo, parches de seguridad y redes. | El proveedor se encarga de las actualizaciones, parches y escalado automático. |
| **Ejemplos** | AWS EC2, Google Compute Engine, Microsoft Azure VMs. | GitHub Pages, Heroku, AWS Elastic Beanstalk, Vercel. |

---

## Publicación de la Aplicación en GitHub Pages

Para publicar una aplicación estática en GitHub Pages directamente desde la línea de comandos, ejecuta los siguientes comandos Bash:

```bash
# 1. Iniciar el repositorio local (si no está iniciado)
git init

# 2. Añadir los cambios y hacer el primer commit
git add .
git commit -m "Initial commit"

# 3. Renombrar la rama principal a main
git branch -M main

# 4. Vincular el repositorio remoto (sustituye TU-USUARIO y TU-REPOSO)
git remote add origin [https://github.com/TU-USUARIO/TU-REPOSITORIO.git](https://github.com/TU-USUARIO/TU-REPOSITORIO.git)

# 5. Enviar el código a la rama main
git push -u origin main

# 6. Crear y enviar la rama 'gh-pages' para publicar el sitio
git checkout -b gh-pages
git push origin gh-pages
