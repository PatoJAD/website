---
title: 'Manipulando archivos y directorios'
date: '2020-09-03 10:12:00'
description: 'En esta oportunidad vamos a profundizar algunos comandos populares y algo sobre los comodines'
type: 'post'
tags:
    [
        'terminal',
        'consola',
        'linux',
        'mv',
        'cp',
        'rm',
        'comodin',
        'comodines',
        'shell',
        'globbing',
        'mkdir',
    ]
categories: ['Linux']
img: 'https://docs.microsoft.com/es-es/windows/terminal/images/overview.png'
authors: ['PatoJAD']
---

Seguimos trabajando con la terminal, vamos despacio pero avanzamos firme, en esta oportunidad vamos a aumentar los comandos que vamos a ir usando en el dia a dia.

## Comodines

Antes de empezar a usar nuestros comandos, necesitamos hablar sobre una característica del shell que hace a estos comandos muy potentes. Como el shell utiliza mucho los nombres de archivo, ofrece caracteres especiales para ayudarnos a especificar rápidamente grupos de nombres de archivo. Estos caracteres especiales se llaman comodines (wildcards). Utilizar comodines (también conocido como globbing) te permite seleccionar nombres de archivo basados en patrones de caracteres. La siguiente tabla lista los comodines y lo que seleccionan:

-   **\*** Cualquier carácter
-   **?** Cualquier carácter individual
-   **[caracteres]** Cualquier carácter que sea miembro del grupo caracteres
-   **[!caracteres]** Cualquier carácter que no sea miembro del grupo caracteres
-   **[[:clase:]]** Cualquier carácter que sea miembro de la clase especificada

La lista las clases de caracteres más comúnmente usadas:

-   **[:alnum:]** Cualquier carácter alfanumérico
-   **[:alpha:]** Cualquier carácter alfabético
-   **[:digit:]** Cualquier dígito numérico
-   **[:lower:]** Cualquier letra minúscula
-   **[:upper:]** Cualquier letra mayúscula

Utilizar comodines posibilita construir criterios de selección muy sofisticados para los nombres de archivos. Aquí tienes algunos ejemplos de patrones y qué indican:

-   **\*** Todos los archivos
-   **g\*** Todos los archivos que empiezan por “g”
-   **b\*.txt** Todos los archivos que empiecen por “b” seguido de cualquier carácter y terminados en “.txt”
-   **Data???** Todos los archivos que empiezan por “Data” seguido de, exactamente, tres caracteres
-   **[abc]\*** Todos los archivos que empiezan por “a”, “b” o “c”
-   **BACKUP.[0-9][0-9][0-9]** Todos los archivos que empiezan por “BACKUP.” seguido de, exactamente, tres números
-   **[[:upper:]]\*** Todos los archivos que empiezan por una letra mayúscula
-   **[![:digit:]]\*** Todos los archivos que no empiezan por un número
-   **\*[[:lower:]123]** Todos los archivos que terminan por una letra minúscula o por los números “1”, “2” o “3”

Los comodines pueden usarse con cualquier comando que acepte nombres de archivo como argumento, pero hablaremos más sobre ello más adelante.

## Rangos de caracteres

Si vienes de otros entornos tipo Unix o has estado leyendo otros libros sobre el asunto, puede que hayas encontrado las notaciones de rango de caracteres **[A -Z]** o **[a – z]**. Son notaciones tradicionales de Unix y funcionaban en las versiones antiguas de Linux también. Pueden funcionar todavía, pero tienes que ser muy cuidadoso con ellas porque no producirán los resultados esperados a menos que estén adecuadamente configuradas. Por ahora, deberías evitar utilizarlas y usar las clases de caracteres en su lugar.

## mkdir – Crear directorios

El comando mkdir se utiliza para crear directorios. Funciona así:

    mkdir directorio...

**Una nota sobre la notación:** Cuando tres puntos siguen a un argumento en la descripción de un comando (como el de arriba), significa que el argumento puede ser repetido, por lo tanto:

    mkdir dir1

crearía un único directorio llamado “dir1”, mientras

    mkdir dir1 dir2 dir3

crearía tres directorios llamados “dir1”, “dir2” y “dir3”.

## cp – Copiar archivos y directorios

El comando cp copia archivos o directorios. Puede usarse de dos formas diferentes:

    cp item1 item2

Para copiar el archivo o directorio “item1” al archivo o directorio “item2” y:

    cp item... directorio

para copiar múltiples elementos (tanto archivos como directorios) a un directorio.

### Opciones útiles y ejemplos

Aquí tenemos algunas de las opciones más usadas (la opción corta y la opción larga equivalente) para cp:

-   **-a, --archive** Copia los archivos y directorios y todos sus atributos, incluyendo propietarios y permisos. Normalmente, las copias toman los atributos por defecto del usuario que realiza la copia.
-   **-i, --interactive** Antes de sobrescribir un archivo existente, pide al usuario confirmación. Si esta opción no es especificada, cp sobrescribirá silenciosamente los archivos.
-   **-r, --recursive** Copia recursivamente los directorios y su contenido. Esta opción (o la opción -a) se requiere cuando se copian directorios.
-   **-u, --update** Cuando copiamos archivos de un directorio a otro, sólo copia archivos que, o no existan, o sean más nuevos que los archivos correspondientes existentes en el directorio de destino.
-   **-v, --verbose** Muestra mensajes informativos a medida que se realiza la copia.

    cp archivo1 archivo2

Copia el archivo1 al archivo2. Si el archivo2 existe, se sobrescribe con el contenido del archivo1. Si el archivo2 no existe, se crea.

    cp -i archivo1 archivo2

Igual que el anterior, salvo que si el archivo2 existe, el usuario es preguntado antes de que sea sobrescrito.

    cp archivo1 archivo2 directorio1

Copia el archivo1 y el archivo2 en el directorio1. El directorio1 debe existir.

    cp directorio1/* directorio2

Usando un comodín, todos los archivos en directorio1 se copian a directorio2. directorio2 debe existir.

    cp -r directorio1 directorio2

Copia el contenido del directorio1 al directorio2. Si el directorio2 no existe, se crea y, después de la copia, contendrá los mismos elementos que el directorio1.
Si el directorio2 existe, entonces el directorio1 (y su contenido) se copiará dentro de directorio2.

## mv – Mover y renombrar archivos

El comando mv tanto mueve como renombra archivos, dependiendo de cómo se use. En ambos casos, el nombre de archivo original no existirá tras la operación. mv se usa de forma muy parecida a cp:

    mv item1 item2

para mover o renombrar el archivo o directorio “item1” a “item2” o:

    mv item... directorio

para mover uno o más elementos de un directorio a otro.

### Opciones útiles y ejemplos

mv comparte muchas de las mismas opciones que cp:

-   **-i, --interactive** Antes de sobrescribir un archivo existente, pide confirmación al usuario. Si esta opción no está especificada, mv sobrescribirá silenciosamente los archivos.
-   **-u, --update** Cuando movemos archivos de un directorio a otro, sólo mueve archivos que, o no existen, o son más nuevos que los archivos correspondientes existentes en el directorio de destino.
-   **-v, --verbose** Muestra mensajes informativos a medida que se realiza el movimiento.

    mv archivo1 archivo2

Mueve el archivo1 al archivo2. Si el archivo2 existe, se sobrescribe con el contenido de archivo1. Si archivo2 no existe, se crea. En ambos casos, archivo1 deja de existir.

    mv -i archivo1 archivo2

Igual que el anterior, excepto que si el archivo2 existe, el usuario es preguntado antes de que sea sobrescrito.

    mv archivo1 archivo2 directorio1

Mueve archivo1 y archivo2 al directorio1. directorio1 tiene que existir previamente.

    mv directorio1 directorio2

Si el directorio2 no existe, crea el directorio2 y mueve el contenido de directorio1 dentro de directorio2 y borra el directorio1.
Si directorio2 existe, mueve directorio1 (y su contenido) dentro del directorio2.

## rm – Eliminar archivos y directorios

El comando rm se utiliza para eliminar (borrar) archivos y directorios:

    rm elemento...

donde “elemento” es uno o más archivos o directorios.

### Opciones útiles y ejemplos

Aquí tienes algunas de las opciones más comunes de rm:

-   **-i, --interactive** Antes de borrar un archivo existente, pide la confirmación del usuario. Si esta opción no es especificada, rm borrará silenciosamente los archivos.
-   **-r, --recursive** Borra directorios recursivamente. Esto significa que si un directorio que estamos borrando contiene subirectorios, los borra también. Para borrar un directorio, esta opción debe ser especificada.
-   **-f, --force** Ignora archivos no existentes y no pregunta. Esto prevalece sobre la opción –-interactive.
-   **-v, --verbose** Muestra mensajes informativos a medida que se realiza el borrado.

    rm archivo1

Borra el archivo1 silenciosamente

    rm -i archivo1

Igual que antes, excepto que pide confirmación al usuario antes de borrarlo.

    rm -r archivo1 directorio1

Borra el archivo1 y el directorio1 y su contenido

    rm -rf archivo1 directorio1

Igual que antes, excepto que si archivo1 o directorio1 no existen, rm continuará silenciosamente.

## ¡Ten cuidado con rm!

Los sistemas operativos tipo Unix, por ejemplo Linux, no tienen un comando para restaurar archivos. Una vez que borras algo con rm, se ha ido. Linux asume que eres listo y sabes lo que haces.

Ten especial cuidado con los comodines. Piensa en este ejemplo clásico. Digamos que quieres borrar sólo los archivos HTML en un directorio. Para hacerlo, escribes:

    rm *.html

lo cual es correcto, pero si accidentalmente dejas un espacio entre el “\*” y el “.html” como aquí:

    rm * .html

el comando rm borrará todos los archivos en el directorio y luego se quejará de que no hay ningún archivo llamado “.html”.

**Aquí tienes un práctico consejo**. Cada vez que uses comodines con rm (¡además de comprobar cuidadosamente tu escritura!), prueba el comodín primero con ls. Esto te permitirá ver los archivos que van a ser borrados. Entonces pulsa la tecla de la flecha hacia arriba para recuperar el comando y reemplaza el ls con rm.
