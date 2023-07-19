---
title: 'Tilix un gran emulador de terminal'
date: '2021-02-18 09:13:00'
description: 'En linux somos muchos los que usamos terminal, diría que la gran mayoría y cada uno tiene sus propias diferencias o elecciones'
type: 'aplicaciones'
tags:
    [
        'tilix',
        'terminal',
        'emulador',
        'consola',
        'shell',
        'debian',
        'arch',
        'fedora',
        'instalar',
        'ubuntu',
    ]
categories: ['Aplicaciones', 'Linux']
img: 'https://es.linux-console.net/common-images/tilix-gtk3-tiling-terminal-emulator-for-linux/tilix-with-multiple-tabs.png'
authors: ['PatoJAD']
---

En linux somos muchos los que usamos terminal, diría que la gran mayoría y cada uno tiene sus propias diferencias o elecciones, pero como siempre digo, esto no debería obnubilarlos para poder conocer “nuevas” apps. En este caso voy a compartir un emulador de terminal que si bien escuche hablar mucho no lo hubiera usado de no ser por Pipe que me lo recomendó fuertemente.

## ¿Que ofrece?

Eventualmente siempre buscamos que ofrece A o que ofrece B, muchas veces la gran lista de cosas desarrolladas no son tan importantes como las propias obtenidas por los usuarios, aun así dejamos esa lista de cosas que ofrece segun su repositorio de GIT:

![](https://camo.githubusercontent.com/829c1c31ee4acdd88e55585d638e33202bdc3c947c9426c597d133cf7734bb95/68747470733a2f2f676e756e6e312e6769746875622e696f2f74696c69782d7765622f6173736574732f696d616765732f67616c6c6572792f74696c69782d73637265656e73686f742d312e706e67)

-   Diseñe los terminales de cualquier manera dividiéndolos horizontal o verticalmente
-   Los terminales se pueden reorganizar usando arrastrar y soltar tanto dentro como entre ventanas
-   Los terminales se pueden separar en una nueva ventana mediante arrastrar y soltar
-   Las pestañas o la barra lateral enumeran las sesiones actuales
-   La entrada se puede sincronizar entre terminales, por lo que los comandos escritos en un terminal se replican en los demás.
-   La agrupación de terminales se puede guardar y cargar desde el disco
-   Los terminales admiten títulos personalizados
-   Los esquemas de color se almacenan en archivos y se pueden crear esquemas de color personalizados simplemente creando un nuevo archivo
-   Fondo transparente
-   Imágenes de fondo
-   Soporte del modo Quake (es decir, terminal desplegable)
-   Hipervínculos personalizados
-   Cambios de perfil automáticos (activados) basados ​​en el nombre de host y el directorio
-   Admite notificaciones cuando los procesos se completan fuera de la vista.
-   Soporte de disparador experimental (requiere VTE parcheado)
-   Soporte de insignia experimental (requiere VTE parcheado)

Sin embargo como dije antes puede llegar a ser enriquecedora la experiencia de los usuarios y por eso quiero contar como me sirvio a mi esto.

## Mi experiencia

Para empezar cuando elegí usarlo fue solo porque realmente es un emulador rápido, nunca demoró en abrir y siempre pude usarlo cómodamente. Sin embargo, en lo personal, me simplificó el trabajo con servidores. Muchas veces tuve que actualizar múltiples servidores, instalar nuevas “apps” o actualizar, quizas compilar algunas… Todo esto podía hacer escribiendo una sola vez ya que se replicaba en todas las terminales que tenía organizadas de una forma cómoda gracias a su método “tilling”.

Es muy útil si trabajamos con múltiples apps locales para desarrollar también dado que elimina el número de ventanas levantadas y obviamente mantiene una excelente performance.

## Instalación

Esta hermosa “terminal” se encuentra en todas las distros de GNU/Linux, o al menos en la gran mayoría. Por lo cual siempre se puede instalar desde los repositorios de la siguiente forma. Recordemos que estos comandos funcionan también con las derivadas.

#### Debian/Ubuntu

```bash
sudo apt install tilix
```

#### Fedora

```bash
sudo dnf install tilix
```

#### Arch

```bash
sudo pacman -S tilix
```

O con yay

```bash
sudo yay -S tilix/
```
