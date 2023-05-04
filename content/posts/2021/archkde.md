---
title: '¿KDE? ¿Arch? ¿Problemas?'
date: '2021-03-09 09:21:00'
description: 'Problemas con aplicaciones como Kmail, Falkon, Konqueror, entre otras. Te contamos que esta pasando en Arch estos dias...'
type: 'linux'
tags:
    [
        'arch',
        'kde',
        'qt',
        'webengine',
        'chrome',
        'pyqt',
        '5.15.3-2',
        'network_service_instance_impl.cc',
        'network',
        'service',
        'crashed',
        'restarting',
        'error',
        'bug',
        'fix',
        'solucion',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/gjK49PGk/image.png'
authors: ['PatoJAD']
---

Si usas KDE en Arch seguramente tras la última actualización en tu sistema (después del sábado 6 de marzo) cuando se actualizo el qt5-webengine seguramente comenzaste a experimentar problemas en tu KDE con aplicaciones como Kmail, Falkon, Konqueror, entre otras. Todas estas aplicaciones que utilizan en visualizador web de QT están simplemente no mostrando nada.

## La terminal me confunde

Actualmente estoy en un proyecto con QT5-WebEngine y experimente exactamente el mismo problema, pase horas del domingo y el inicio del lunes intentando solucionar el error en base a la información que arroja la terminal:

```bash
[88642:88642:0308/160848.959329:ERROR:network_service_instance_impl.cc(286)] Network service crashed, restarting service.
[88642:88642:0308/160848.964451:ERROR:network_service_instance_impl.cc(286)] Network service crashed, restarting service.
[88642:88642:0308/160848.969386:ERROR:network_service_instance_impl.cc(286)] Network service crashed, restarting service.
```

Podemos ver si abrimos cualquiera de estas apps, que dejaron de funcionar correctamente, por terminal el error anteriormente mencionado como un bucle infinito. Este error no daba mucha información sobre el error.

## Nueva versión nuevo problema.

{{< img src="https://www.lancetalent.com/blog/wp-content/uploads/actualizar-wordpress.png" >}}

Se me dio por revisar la paqueteria de arch, donde siempre encuentro soluciones y esto sirvió para entender que el problema era de la versión qt5-webengine-5.15.3-2 que generaba este error en general. Por lo cual la solución no depende explícitamente de mi, o al menos hasta donde entendí.

## ¿Cómo lo soluciono?

{{< img src="https://i.postimg.cc/gjK49PGk/image.png" >}}

Así como el tiempo cura todas las heridas hay que esperar a que se actualice a la nueva versión donde este error este. Ya, en lo que a Arch respecta, hay un ticket cargado y hay alguien que está llevando y esperamos que pronto obtengamos la actualización que nos permita solventar este error.

{{< link url="https://bugs.archlinux.org/index.php?do=details&action=details.addvote&task_id=69902" text="Reporte del BUG" >}}
