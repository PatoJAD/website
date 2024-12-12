---
title: 'Como Desfragmentar nuestro GNU/Linux'
date: '2023-01-25 08:47:00.00'
description: 'Si bien muchas personas creen que no es necesario desfragmentar en linux hoy vamos a ver como realizar este útil proceso.'
type: 'video'
videoId: 'YE4HwerZuOA'
tags:
    [
        'ext4',
        'desfragmentar',
        'disco',
        'ubuntu',
        'debian',
        'arch',
        'mx linux',
        'antix',
        'artix',
    ]
categories: ['Linux']
img: 'https://www.solvetic.com/uploads/tutorials/monthly_01_2018/e59d1d31ab38713f3530b2648845ca7d.png'
authors: ['PatoJAD']
---

A lo largo y ancho de mi experiencia en múltiples ámbitos escuche que en **GNU/Linux** no es necesario desfragmentar. La realidad es que si bien los índices de fragmentación son más bajos que en **Windows** es realmente importante desfragmentar nuestro disco, más cuando interactuamos mucho (descargar, borrar, editar, subir) diferentes archivos y aún más si estos son pesados.

## e2fsprogs

Para poder realizar esto tenemos muchas herramientas, hoy vamos a usar una que viene incluida en el paquete `e2fsprogs` y que podemos instalar de la siguiente manera:

### Arch y derivadas

Usando `pacman` o usando `yay`:

```bash
yay -Sy e2fsprogs
```

```bash
sudo pacman -Sy e2fsprogs
```

### Debian/Ubuntu y derivadas

Podemos usar `apt` o cualquier variante anterior a esta

```bash
sudo apt install e2fsprogs
```

```bash
sudo apt-get install e2fsprogs
```

### Fedora y familia

Podemos usar tanto `dnf` o `yum` dependiendo la disponibilidad

```bash
sudo dnf -y install e2fsprogs
```

```bash
sudo yum -y install e2fsprogs
```

## Desfragmentar

Una vez que tengamos todo instalado basta con ejecutar el siguiente comando en una terminal. en el caso donde yo pongo `/etc` debemos poner la ‘carpeta’ que queremos desfragmentar. y ahí podemos elegir, por ejemplo, `/` el directorio raíz que desfragmentaría todo.

```bash
sudo e4defrag /etc
```
