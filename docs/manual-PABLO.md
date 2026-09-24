# Modelos de Servicio Cloud y Comandos Git

## Modelos de Servicio Cloud

La siguiente tabla compara los dos modelos principales de servicios en la nube para entender la diferencia en la gestión de la infraestructura:

| Característica | IaaS (Infraestructura como Servicio) | PaaS (Plataforma como Servicio) |
| :--- | :--- | :--- |
| **Definición** | Proporciona recursos de computación fundamentales (servidores virtuales, almacenamiento y redes) bajo demanda. | Proporciona un entorno de desarrollo y despliegue completo en la nube, con sistemas operativos y herramientas listas. |
| **Control del Usuario** | Alto. El usuario gestiona el sistema operativo, el middleware, el entorno de ejecución y las aplicaciones. | Medio-Bajo. El proveedor gestiona el sistema operativo y la infraestructura; el usuario solo controla la aplicación. |
| **Responsabilidad** | El usuario es responsable de parches de seguridad del S.O., mantenimiento y escalabilidad del software. | El proveedor gestiona el mantenimiento del servidor, actualizaciones de seguridad y el escalado automático. |
| **Ejemplos** | Amazon EC2, Google Compute Engine, Microsoft Azure VMs. | Heroku, Google App Engine, AWS Elastic Beanstalk. |

## Comandos Git Utilizados en el Ejercicio

A continuación se detallan los comandos de Bash empleados para el control de versiones del proyecto:

```bash
# Inicializar el repositorio local
git init

# Vincular el repositorio local con el repositorio remoto en GitHub
git remote add origin https://github.com

# Añadir todos los archivos modificados al área de preparación (Staging)
git add .

# Confirmar los cambios guardados con un mensaje descriptivo
git commit -m "Feat: Finalizado ejercicio de modelos Cloud y documentación"

# Subir los cambios a la rama principal en el repositorio remoto
git push -u origin main
```
