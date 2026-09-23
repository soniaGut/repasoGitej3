\# Manual — Gestor de Tareas (práctica Git y GitHub)



\## Modelos de servicio Cloud: IaaS vs PaaS



| Característica | IaaS (Infrastructure as a Service) | PaaS (Platform as a Service) |

|---|---|---|

| Qué ofrece | Infraestructura virtualizada básica: servidores, almacenamiento y redes | Una plataforma completa lista para desarrollar y ejecutar aplicaciones |

| Qué gestiona el proveedor | Hardware, virtualización, conectividad de red | Todo lo anterior + sistema operativo, middleware y runtime |

| Qué gestiona el usuario | Sistema operativo, middleware, runtime, datos y aplicaciones | Solo el código y los datos de la aplicación |

| Flexibilidad | Muy alta, control total sobre el entorno | Menor, limitada a lo que soporta la plataforma |

| Curva de aprendizaje | Más alta, requiere conocimientos de administración de sistemas | Más baja, orientada a desarrolladores |

| Ejemplos | Amazon EC2, Google Compute Engine, Microsoft Azure VM | GitHub Pages, Heroku, Google App Engine |

| Caso de uso típico | Aplicaciones que requieren configuración personalizada del servidor | Despliegue rápido de aplicaciones sin gestionar infraestructura |



\## Visualizar la app en local sin servidor



El \*\*Gestor de Tareas\*\* es una aplicación estática (HTML + CSS + JavaScript) sin backend ni dependencias, por lo que no necesita un servidor para ejecutarse: basta con abrir el archivo `index.html` directamente en el navegador.



```bash

\# 1. Clona el repositorio (si aún no lo tienes)

git clone https://github.com/<usuario>/repasoGitej3.git



\# 2. Entra en la carpeta del proyecto

cd repasoGitej3



\# 3. Abre index.html directamente en el navegador

\#    En Linux:

xdg-open index.html

\#    En macOS:

open index.html

\#    En Windows:

start index.html

```



Al abrirse `index.html` en el navegador, la aplicación carga `css/style.css` y `js/app.js` de forma local y las tareas se guardan en `localStorage`, por lo que persisten entre recargas de la página sin necesidad de ningún servidor.

