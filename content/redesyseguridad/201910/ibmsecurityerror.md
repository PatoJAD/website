---
title: 'Security Directory Server vulnerabilidades'
date: '2019-10-02'
description: 'Security Directory Server esta enfrentando 5 vulnerabilidades que pueden ser critias. Actualiza tu version YA!'
type: 'redesyseguridad'
tags: ["IBM","Security Directory Server","issus"]
category: ["redesyseguridad"]
img: 'http://webspherepundit.com/wp-content/uploads/2015/09/InstallTDS11.png'
authors: ["PatoJAD"]
---


## Recursos afectados:

Security Directory Server, versión 6.4.0.


## Descripción:

El equipo X-Force Ethical Hacking de IBM ha descubierto cinco vulnerabilidades, tres con criticidades altas y dos con criticidades medias, de las cuales no indagaremos a profundo en este momento. De las cuales un atacante remoto podría revelar información sensible, modificar archivos, robo de credenciales u obtener información del sistema. Por lo cual es altamente recomendable para todos los usuarios actualizar a las nuevas versiones donde estos inconvenientes se encuentran suplidos.


 


## Solución:

Actualizar a la versión 6.4.0.19-ISS-ISDS-IF0019.


## Las vulnerabilidades con criticidades altas:



* Un uso inadecuado de los ajustes de cierre de cuenta podría permitir a un atacante remoto obtener información de la cuenta de usuario mediante ataques de fuerza bruta. Se ha reservado el identificador {{< textlink url="https://nvd.nist.gov/vuln/detail/CVE-2019-4520" text="CVE-2019-4520">}} en el cual podemos ver los detalles tecnicos del inconveniente.
* Un ataque de redireccionamiento abierto podría permitir a un atacante remoto realizar un phishing y persuadir a la víctima para obtener información sensible. Se ha reservado el identificador {{< textlink url="https://nvd.nist.gov/vuln/detail/CVE-2019-4538" text="CVE-2019-4538" >}} en el cual podemos ver los detalles tecnicos del inconveniente.
* Al procesar archivos XML, es posible no neutralizar correctamente ciertos elementos. Un atacante podría realizar modificaciones en la sintaxis, contenido o comandos en los XML antes de ser procesados por el sistema final. Se ha reservado el identificador {{< textlink text="CVE-2019-4539" url="https://nvd.nist.gov/vuln/detail/CVE-2019-4539" >}} en el cual podemos ver los detalles tecnicos del inconveniente.



Para las vulnerabilidades con criticidades medias, se han reservado los identificadores {{< textlink url="https://nvd.nist.gov/vuln/detail/CVE-2019-4542" text="CVE-2019-4542" >}} y {{< textlink url="https://nvd.nist.gov/vuln/detail/CVE-2019-4549" text="CVE-2019-4549" >}}. Donde podremos leer mas sobre esto. No se olviden de visitar la {{< textlink url="https://www.incibe-cert.es/alerta-temprana/avisos-seguridad/multiples-vulnerabilidades-security-directory-server-ibm" text="publicacion original" >}} sobre la cual se baso esta publicacion. Y dejanos tu comentario.
