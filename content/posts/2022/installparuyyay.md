---
title: 'Instalar PARU y YAY'
date: '2022-01-27 15:12:00'
description: 'Vemos la forma más fácil y cómoda de instalar YAY y PARU los dos AURHelpers más populares en la actualidad en cualquier distribución basada en Arch. En este caso Artix.'
type: 'aplicaciones'
tags:
    [
        'paru',
        'yay',
        'aur',
        'helper',
        'artix',
        'arch',
        'manjaro',
        'endeavour',
        'instalacion',
        'pacman',
        'pacaur',
    ]
category: ['Aplicaciones']
img: 'https://i.postimg.cc/FmTBQKnf/Sin-nombre.png'
authors: ['PatoJAD']
---

Ya hablamos con anterioridad sobre {{< textlink url="/aplicaciones/2022/01/paru-vs-yay-cual-elegir/" text="PARU y YAY" >}}. En esa oportunidad di mi opinión sobre cuál deberíamos elegir, aunque esto siempre es a gusto y placer de la persona que lo utilice. Por eso en esta oportunidad vamos a ver la manera más simple de instalar ambas aplicaciones.

### Requisitos previos

Para poder realizar la instalación tenemos unos requisitos previos para que todo salga mas que bien, te dejo a continuación ambos links que explicaran como hacer esto (El primero no es obligatorio pero está bueno saber cual elegir antes de instalar alguno)

-   {{< textlink url="/aplicaciones/2022/01/paru-vs-yay-cual-elegir/" text="Paru VS YAY ¿Cual elegir?" >}} (Opcional)
-   {{< textlink url="/linux/2022/01/instalar-chaotic-aur/" text="Instalar Chaotic AUR" >}} (Obligatorio)

### Video

Claramente siempre genero un pequeño video para poder ser un poco más gráfico, de todas formas en la parte inferior voy a dejar los comandos utilizados. Es muy importante tener los repositorios de chaotic para poder instalarlo de esta manera.

{{< youtube id="DF8IAz5WoXg" >}}

{{< info text="Si el video te sirvió pegale una subscribirda al canal que es muchísimo apoyo y es totalmente gratuito." >}}

### Comandos

Para la instalación de yay:

```zsh
sudo pacman -Sy yay
```

Para la instalación de paru:

```zsh
sudo pacman -Sy paru
```

En caso de que vayamos a instalar los 2 podemos hacerlo de una sola vez usando:

```zsh
sudo pacman -Sy yay paru
```

Para desinstalar yay:

```zsh
sudo pacman -Rs yay
```

Para desinstalar paru:

```zsh
sudo pacman -Rs paru
```

Para desinstalar ambos:

```zsh
sudo pacman -Rs yay paru
```
