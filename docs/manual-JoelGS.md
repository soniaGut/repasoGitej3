Modelos de servicio Cloud: IaaS vs PaaS

Los servicios Cloud permiten utilizar recursos informáticos a través de Internet sin tener que gestionar toda la infraestructura físicamente.

Característica	IaaS (Infrastructure as a Service)	PaaS (Platform as a Service)
¿Qué ofrece?	Infraestructura virtual: servidores, almacenamiento, redes, etc.	Una plataforma preparada para desarrollar y ejecutar aplicaciones.
Gestión del usuario	Debe gestionar el sistema operativo, aplicaciones y configuración.	Se centra principalmente en el desarrollo y configuración de la aplicación.
Flexibilidad	Muy alta, permite configurar gran parte de la infraestructura.	Menor flexibilidad, pero simplifica el desarrollo.
Mantenimiento	El usuario tiene una mayor responsabilidad sobre la infraestructura.	El proveedor se encarga de gran parte del mantenimiento.
Uso habitual	Servidores virtuales, almacenamiento y redes personalizadas.	Desarrollo, pruebas y despliegue de aplicaciones.
Ejemplos	Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.	Heroku, Google App Engine, Azure App Service.
Publicación de la aplicación en GitHub Pages

Los siguientes comandos permiten publicar una aplicación estática en GitHub Pages utilizando Git:

git init
git add .
git commit -m "Publicar aplicación"
git branch -M main
git remote add origin https://github.com/soniaGut/repasoGitej3.git
git push -u origin main