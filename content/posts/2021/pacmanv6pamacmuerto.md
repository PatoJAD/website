---
title: 'LLegó pacman v6 y pamac quedó anonadado'
date: '2021-06-02 09:10:00'
description: 'Te contamos todas las novedades en de la nueva versión de pacman y que es lo que está pasando con la mítica GUI pamac'
type: 'post'
tags:
    [
        'arch',
        'artix',
        'pacman',
        'pamac',
        'gui',
        'terminal',
        'cli',
        'pacmanv6',
        'pacman6',
        'pacmanv6pamacmuerto',
    ]
categories: ['Noticias', 'Linux']
img: 'https://i.postimg.cc/DwNCYM02/image.png'
authors: ['PatoJAD']
---

El día jueves 20 del mes de Mayo se liberó la versión Oficial de pacman 6 el cual viene repleta de novedades que ya podemos disfrutar en todas las distribuciones basadas en Arch.

## Changelog

![](https://i.postimg.cc/DwNCYM02/image.png)

Seguramente te estás preguntando qué cambio y aca te dejo la lista de cambios que impactaron en la versión V6:

-   El descargador interno puede recuperar archivos en paralelo
-   Se agrega una barra de progreso adicional para rastrear la descarga total Progreso. Esto reemplaza la opción anterior TotalDownload.
-   Corregir las tasas de descarga que se vuelven negativas
-   Omitir servidores espejo con demasiados errores
-   Las firmas del paquete siempre se recuperan incluso si la firma es incrustado en la base de datos de repositorios o el paquete está en la caché
-   Las firmas de paquetes independientes que se encuentran en CacheDir se pueden usar para verificar los paquetes si la firma no está en la base de datos. También verificar las sumas de comprobación de los paquetes desde la base de datos del repositorio cuando se usa detached firmas.
-   Agregar soporte para múltiples valores de _'Arquitectura'_
-   _-Qkk_ ahora valida las sumas de verificación de archivos además de la fecha / tamaño
-   El resumen de actualización en color ahora atenúa los números de versión para el contraste
-   Las interfaces libalpm ahora pueden proporcionar contexto a las devoluciones de llamada
-   Soporte xattr al extraer paquetes
-   Permitir la configuración --noprogressbar en pacman.conf -
-   Corregir la alineación de salida para el texto traducido de CJK
-   Corrige los objetivos de lectura de stdin cuando se usa _--sysroot_
-   Corregir la eliminación de firmas para bases de datos existentes con _-Sc_
-   Comprobar y prohibir la descarga de nombres de archivos duplicados
-   _-Fx_ ahora informa de un error por expresiones regulares no válidas
-   Eliminar el soporte para el sistema de compilación de autotools
-   Meson: compila correctamente los símbolos internos como ocultos
-   Meson: make -uninstalled.pc correcto
-   Corregir errores de compilación en sistemas como **FreeBSD**
-   **makepkg**:
    -   Agregar soporte de optimización de tiempo de enlace a makepkg
    -   Agregar soporte para fuentes que usan el VCS fósil
    -   Permitir especificar comandos de autenticación alternativos cuando ejecutando pacman como root
    -   Soporte de descompresión zstd para fuentes
    -   _strip_: corrige la eliminación de atributos de archivo como xattr
    -   Cambiar a CRC como suma de verificación de integridad predeterminada
    -   Record _$startdir_ para compilaciones reproducibles
    -   Registrar el nombre de la herramienta de orquestación de compilación para compilaciones reproducibles
    -   Arreglar la firma de paquetes fuente
    -   Agregar soporte de argumento opcional a parseopts
    -   Reducir la dependencia del archivo para detectar archivos _ELF_
    -   Eliminar la dependencia de GNU sed
    -   Evitar espacios en blanco finales en la salida --printsrcinfo
    -   _libprovides_: no proporcione versiones tanto con versión como sin versión sonames
    -   No _distcc_ de doble capa en ccache
    -   Corregir la detección de nombres de archivos de origen para paquetes de depuración con _gcc 11_
    -   **strip**: silencia las advertencias emitidas por readelf mientras detecta nombres de archivo de origen
    -   Corregir el uso de espacios en el cambio de nombre del archivo fuente
-   **pacman-key**:
    -   _--refresh-keys_ consulta WKD antes del servidor de claves
    -   Sea menos ruidoso al llenar el llavero
    -   Advierte sobre el tiempo necesario para la generación de la clave maestra
-   **repo-add**:
    -   Admite los mismos métodos de compresión que _makepkg_
-   Finalización de _zsh_: agregue soporte _pacman-conf_
-   Varias actualizaciones de documentación
-   Después de una década y media de documentación prometedora de _libalpm.3_ **"una vez que logremos realizar una buena documentación de Doxygen", ¡pasó!**

## Pamac no pudo soportar la emocion

Tantas novedades nos emociona a todos incluso a nuestro querido GUI pamac que desde que actualices a la versión 6 de pacman quedará tan emocionado que no volverá a abrir.

![](https://c2.staticflickr.com/2/1739/40662649560_57b7477f00_o.png)

Lamentablemente toda esta actualización generó discompatibilidad con pamac y ya no podemos usar este gestor gráfico por un tiempo hasta que se actualice… Claramente que no va a actualizarse por sí solo por lo cual te dejamos un comando que vas a ir pegando en la terminal dia a dia hasta que entre la actualización se encuentre pamac

> ATENCIÓN: Si pamac lo instalaste desde aur tendrás que usar yay en vez de pacman para actualizar

```bash
yay -Syu
```

```bash
pacman -Syu
```
