---
title: 'Proyectos de Xcode infectados de malware'
date: '2020-08-21 12:17:00'
description: 'Los investigadores han detectado una campaña dirigida a los usuarios de Mac con la intención de robar las contraseñas, datos financieros y personales de los usuarios afectados.'
type: 'redesyseguridad'
tags: ["xcode","mac","macos","payloads","XCSSET","vulnerado","virus","ransomware","apple","vulnerabilidad","maleware"]
category: ["redesyseguridad"]
img: 'https://i2.wp.com/unaaldia.hispasec.com/wp-content/uploads/2020/08/mac-malware.jpg'
authors: ["PatoJAD"]
---



Muchas veces escuchamos que MacOS es uno de los sistemas más seguros que existen e incluso escuche que *no tiene virus* sin embargo esto no es real para ningún sistema operativo existente dado que todos y cada uno de ellos puede ser **fácilmente vulnerado** esto es también lo que mantiene vivo el desarrollo de los mismos…


{{< img src="https://support.apple.com/library/content/dam/edam/applecare/images/es_ES/iOS/ios13-setup-restore-from-icloud-hero.jpg" >}}


En esta oportunidad vamos a hablar de un ataque que está ocurriendo para estos equipos que contienen dicho sistema, y en especial para quienes usan el navegador que viene incorporado…




## ¿Qué pasa?



Una campaña dirigida específicamente a usuarios de Mac está distribuyendo el malware **XCSSET** que tiene, entre otras, la capacidad de inyectar diferentes *payloads* en el navegador Safari, propiciando así el robo de contraseñas, datos financieros y personales, etc. Al igual que la ejecución de ransomware.




## ¿Cómo se propaga?



La manera de propagación es poco usual en este ámbito, ya que utiliza proyectos de **Xcode**, una suite de desarrollo para dispositivos de Apple. El proyecto de Xcode es infectado con código malicioso, que se ejecuta durante la compilación del mismo.


{{< img src="https://www.iclarified.com/images/news/73707/73707/73707-1280.jpg" >}}


El riesgo aumenta exponencialmente cuando los desarrolladores afectados por dicho código malicioso comparten sus proyectos en plataformas como GitLab (o similares), lo que afecta a otros desarrolladores, que dependen de estos repositorios para sus propios proyectos.




## ¿Cómo funciona?¿Que hace?



El malware **genera un paquete de aplicación, que simula ser una aplicación legítima**, como puede ser el navegador Safari, reemplazando el icono de la misma, de manera que los usuarios, al abrirla, están en realidad ejecutando el malware propiamente dicho.


{{< img src="https://i.blogs.es/402463/safari_preview/450_1000.jpg" >}}


Una vez activo, el malware **es capaz de desplegar una serie de módulos específicos**, para tomar posesión de navegadores, robar información de otras aplicaciones, ejecutar ransomware, etc. Para lograr este objetivo utiliza una vulnerabilidad 0-day del Data Vault de macOS, que le permite acceder a las cookies del navegador, lo que permitiría a su vez suplantar al usuario en numerosos servicios web en los que estuviese en sesión.




---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
