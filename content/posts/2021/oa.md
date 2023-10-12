---
title: 'Open Assistant un asistente Open Source'
date: '2021-07-05 10:17:00'
description: 'Hoy hablamos de un gran asistente Open Source en Python'
type: 'aplicaciones'
tags:
    [
        'python',
        'arch',
        'debian',
        'ubuntu',
        'open',
        'assistant',
        'asistente',
        'virtual',
        'siri',
        'google',
        'cortana',
        'openassistant',
        'openassistant.org',
        'openassistant-org',
    ]
categories: ['Aplicaciones', 'Linux', 'Windows', 'MacOS']
img: 'https://medevel.com/content/images/2019/08/openassistant-org--2019-08-11_7_32.jpg'
authors: ['PatoJAD']
---

Siempre se habla de los asistentes, muchos sistemas tienen su sistema y en linux, por alguna extraña razón no es altamente explotado. En cuanto a Windows podemos encontrar a Cortana, que por suerte ya no viene por defecto en Windows 11. Para Android, tenemos a Google Assistant que no va tan mal. Y los que tienen el dinero como para regocijarse en Apple tienen a Siri, un asistente que es de los más humanizados que existe. Y existen varios más, pero hoy vamos a hablar de uno que no escuche mucho nombrar...

## Mi punto de vista

Yo no soy un gran fanatico de los asistentes, no pude nunca sacarle el jugo que quiero, porque los asistentes que probé no se integraban bien desde mi perspectiva. Claramente no soy un gran conocedor pero debo admitir que es cómodo poder estar haciendo algo con el teclado (Ejemplo codeando como un campeón) Y pedirle al asistente que cambie la canción que estamos escuchando. Por esto creo que los asistentes (Siempre y cuando no sean como Cortana que te lentea hasta una master race) son una muy buena herramienta para tener instaladas y acostumbrarnos a utilizarlo. Además mientras más mañana nos demos y más curioso seamos existen algunos asistentes que pueden volverse muy útiles y muy manipulables para obtener mejores resultados.

## OA

**OA** o también conocido como Open Assistant es un asistente, que claramente corre en GNU/Linux, escrito en python, que tiene la particularidad de ser completamente extensible. Esto nos permite tener un asistente con un lenguaje que casi cualquier persona pueda extender.

### Instalar OA

Lo primero que debemos hacer es instalar las dependencias necesarias para poder correr OA de la siguiente manera:

##### Ubuntu/Debian

```bash
sudo apt-get install -y python3 python3-dev python3-pip build-essential swig git libpulse-dev espeak libasound2-dev
```

##### Arch

```bash
sudo pacman -S swig espeak python
```

Una vez que tengamos las dependencias instaladas debemos descargar el paquete y descomprimirlo, para descargarlo podemos hacerlo desde el siguiente link:

{{< link url="https://github.com/openassistant/oa-core/archive/master.zip" text="Descargar OA" >}}

Una ves que lo descomprimimos pasamos a la carpeta e instalamos las dependencias de python que necesita el proyecto, esto lo podemos hacer con el siguiente comando:

```bash
pip install -r requirements.txt
```

{{< info text="En caso de estar en Debian, Ubuntu o derivadas. Deben sustituir pip por pip3 para ejecutarlo con esta versión en especifico" >}}

A continuación de esto, ya podemos iniciar el proyecto, para esto lo podemos hacer de la siguiente manera:

```bash
python -m oa
```

{{< info text="En caso de estar en Debian, Ubuntu o derivadas. Deben sustituir python por python3 para ejecutarlo con esta versión en especifico" >}}

Y ya estaría funcionando, para ver más sobre comandos o como agregar nuestros propios comandos por voz les dejo el link a su repo donde está la documentación.

{{< link url="https://github.com/openassistant/oa-core" text="Mas Info" >}}

{{< link url="https://openassistant.org/" text="La Web" >}}

## Tu opinión

Sabemos que no todos pensamos igual y siempre queremos conocer tu opinión sobre estos temas, ¿Que piensas sobre los asistentes virtuales? ¿Usas alguno? ¿Usarias OA?
