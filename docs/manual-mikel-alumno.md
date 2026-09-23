# Manual Práctico de Modelos Cloud y Gestión del Proyecto

En este documento se resumen los conceptos clave relativos a los modelos de servicio en la nube (IaaS vs PaaS) y los comandos esenciales de Git utilizados durante el desarrollo de la práctica.

---

## Modelos de Servicio Cloud: IaaS vs. PaaS

| Criterio | Infraestructura como Servicio (IaaS) | Plataforma como Servicio (PaaS) |
| :--- | :--- | :--- |
| **Definición** | Proporciona recursos informáticos virtualizados a través de Internet (servidores, redes, almacenamiento). | Proporciona un entorno completo de desarrollo y despliegue gestionado por el proveedor. |
| **Control del usuario** | Alto. El usuario gestiona el sistema operativo, middleware, tiempos de ejecución y aplicaciones. | Medio/Bajo. El usuario solo gestiona el código y las configuraciones de la aplicación. |
| **Mantenimiento** | El cliente debe actualizar parches del SO, configurar redes y administrar la seguridad del sistema. | El proveedor se encarga de la infraestructura subyacente, SO, escalabilidad y parches de seguridad. |
| **Ejemplos habituales** | Amazon EC2, Google Compute Engine, Microsoft Azure VMs. | Heroku, Google App Engine, AWS Elastic Beanstalk. |
| **Caso de uso ideal** | Proyectos que requieren control total del entorno o arquitecturas heredadas complejas. | Desarrollo ágil donde los desarrolladores quieren centrarse exclusivamente en el código. |

---

## Comandos Git Utilizados en el Ejercicio

A continuación, se detalla el bloque de comandos Bash necesarios para inicializar el repositorio, registrar los cambios del proyecto y subirlos al servidor remoto:

```bash
# 1. Inicializar el repositorio local
git init

# 2. Comprobar el estado de los archivos del proyecto
git status

# 3. Añadir todos los archivos modificados al área de preparación (staging)
git add .

# 4. Confirmar los cambios con un mensaje descriptivo
git commit -m "feat: añadir manual explicativo con comparativa cloud y comandos git"

# 5. Crear o renombrar la rama principal a 'main'
git branch -M main

# 6. Vincular el repositorio local con el repositorio remoto de GitHub
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# 7. Subir los cambios a la rama remota
git push -u origin main
```