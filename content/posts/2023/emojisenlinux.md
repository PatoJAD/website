---
title: 'Cómo ver emojis correctamente en aplicaciones y sitios web'
date: '2023-11-14 14:06:00'
description: 'Aprende a solucionar problemas con la visualización de emojis en tu distro de Linux. Instala las fuentes necesarias para disfrutar de emojis en aplicaciones y sitios web.'
type: 'post'
tags:
    [
        'emojis',
        'solución',
        'solucion',
        'noto-fonts-emoji',
        'noto-fonts',
        'noto-fonts-emoji-flags',
        'problemas',
        'visualizar',
        'no se ven emojis',
        'error',
        'error al ver emojis',
        'error al visualizar emojis',
        'no carga emojis',
        'arch',
        'archlinux',
        'arch linux',
    ]
categories: ['Linux']
img: 'https://i.postimg.cc/qBGKyDLF/erroremojisw-eb.webp'
authors: ['PatoJAD']
---

Últimamente, me di cuenta de un problema después de la última instalación de mi sistema operativo: no podía ver correctamente los emojis en varios sitios web. Este inconveniente no solo afectaba a las plataformas en línea, sino también a las aplicaciones instaladas. A menudo, estas aplicaciones asumen que tenemos ciertos elementos instalados, pero no los marcan como dependencias.

![error en los iconos](https://i.postimg.cc/tgVP6XSd/erroremoji.webp)

Así que decidí documentar una solución para asegurarnos de tener todo lo necesario instalado y poder disfrutar de emojis perfectamente visibles tanto en aplicaciones como en sitios web.

## Emojis

Comencemos instalando la compatibilidad global de emojis, utilizando noto-fonts-emoji, uno de los proveedores de fuentes más importantes. Puedes instalarlo fácilmente desde tu gestor de paquetes con el siguiente comando:

```zsh
yay -Sy noto-fonts-emoji
```

![instalacion de emojis](https://i.postimg.cc/K8WB4KNv/emojis.webp)

## Banderas

Además de los emojis tradicionales, es común encontrarse con banderas, especialmente en sitios web con múltiples idiomas. Para esto, necesitamos instalar el paquete específico que contiene emojis de banderas: noto-fonts-emoji-flags.

```zsh
yay -Sy noto-fonts-emoji-flags
```

![instalacion de banderas](https://i.postimg.cc/wjMD65DG/flags.webp)

## Resumen

Una vez que hayas instalado ambos paquetes sugeridos, simplemente reinicia tu aplicación o navegador. ¡Ahora podrás disfrutar de todos los emojis en los sitios web y aplicaciones sin problemas!

![emojis ok](https://i.postimg.cc/4dVzDJp4/flagok.webp)