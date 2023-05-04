---
title: 'Cambiando los permisos de un archivo'
date: '2021-01-11 09:20:00'
description: 'Para cambiar el modo (los permisos) de un archivo o un directorio, se utiliza el comando chmod.'
type: 'linux'
tags:
    [
        'octales',
        'chmod',
        'terminal',
        'consola',
        'shell',
        'permisos',
        'modo',
        'accesos',
        'cambiar',
    ]
categories: ['Linux']
img: 'https://www.linuxadictos.com/wp-content/uploads/permisos-linux.jpg'
authors: ['PatoJAD']
---

Para cambiar el modo (los permisos) de un archivo o un directorio, se utiliza el comando chmod. chmod soporta dos formas distintas de especificar los cambios de permisos: representación en números octales o representación simbólica.

## Números octales

Con la notación octal usamos números octales para especificar el patrón de los permisos que queremos. Como cada dígito en un número octal representa tres dígitos binarios, esto coincide muy bien con la forma de almacenar los permisos de archivo. Esta tabla muestra lo que queremos decir:

| Octal | Binario | Permisos de archivo |
| :---: | :-----: | :-----------------: |
|   0   |   000   |         ---         |
|   1   |   001   |         --x         |
|   2   |   010   |         -w-         |
|   3   |   011   |         -wx         |
|   4   |   100   |         r--         |
|   5   |   101   |         r-x         |
|   6   |   110   |         rw-         |
|   7   |   111   |         rwx         |

Usando tres dígitos octales, podemos establecer los permisos de archivo para el propietario, el grupo propietario y el mundo:

```bash
> foo.txt
ls -l foo.txt

-rw-rw-r-- 1 me me 0 2008-03-06 14:52 foo.txt

chmod 600 foo.txt
ls -l foo.txt

-rw------- 1 me me 0 2008-03-06 14:52 foo.txt
```

Pasándole el argumento “600”, podemos establecer los permisos del propietario para leer y escribir mientras borramos todos los permisos para el grupo propietario y el mundo. Aunque recordar la correspondencia entre octal y binario puede parecer un inconveniente, normalmente sólo tendrás que usar algunos muy comunes: 7(rwx), 6(rw-), 5(r-x), 4(r--), y 0(---).

## Notación simbólica

chmod también soporta notación simbólica para especificar los permisos de archivo. La notación simbólica se divide en tres partes: a quién afecta el cambio, qué operaciónes se realizarán, y qué permisos se establecerán. Para especificar quién se ve afectado se usa una combinación de los caracteres “u”, “g”, “o” y “a” de la siguiente manera:

| Símbolo |                                     Significado                                     |
| :-----: | :---------------------------------------------------------------------------------: |
|    u    | Abreviatura de “usuario” pero significa el propietario del archivo o el directorio. |
|    g    |                                El grupo propietario.                                |
|    o    |                  Abreviatura de “otros”, pero se refiere al mundo.                  |
|    a    |          Abreviatura de “all” (todos). Es la combinación de “u”, “g” y “o”          |

Si no se especifica ningún carácter, se asume “all”. La operación puede ser un “+” indicando que un permiso ha de ser añadido, un “-” indicando que un permiso ha de ser retirado, o un “=” indicando que sólo los permisos especificados deben ser aplicados y todos los demás han de ser eliminados.

Los permisos se especifican con los caracteres “r”, “w” y “x”. Aquí tenemos algunos ejemplos de la notación simbólica:

|  Notación  |                                                                                                         Significado                                                                                                         |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    u+x     |                                                                                       Añade permisos de ejecución para el propietario                                                                                       |
|    u-x     |                                                                                        Elimina permisos de ejecución del propietario                                                                                        |
|     +x     |                                                                   Añade permisos de ejecución para el propietario, el grupo y el mundo. Equivalente a a+x                                                                   |
|    o-rw    |                                                   Elimina los permisos de lectura y escritura para cualquier persona, que no sea el propietario ni el grupo propietario.                                                    |
|   go=rw    | Configura al grupo propietario y a cualquier persona, que no sea el propietario, para que tengan permisos de lectura y escritura. Si el grupo propietario o el mundo previamente tenían permisos de ejecución, los elimina. |
| u+x, go=rx |                   Añade permisos de ejecución para el propietario y establece los permisos para el grupo y para otros de lectura y ejecución. Múltiples especificaciones pueden ser separadas por comas.                    |

Algunos prefieren usar la notación octal, otros prefieren la simbólica. La notación simbólica ofrece la ventaja de permitirte establecer un atributo individual sin molestar a los otros.

Échale un vistazo a la {{< textlink url="/post/2019/01/man-tu-manual-para-linux/" text="man page" >}} de chmod para más detalles y una lista de opciones. Una advertencia con respecto a la opción “--recursive”: actúa tanto en archivos como en directorios, así que no es tan útil como uno esperaría, rara vez queremos que archivos y directorios tengan los mismos permisos.
