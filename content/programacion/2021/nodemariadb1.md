---
title: "Webservice NodeJS y MariaDB 1 - Instalacion de NodeJS NPM y MariaDB"
date: "2021-07-29 09:50:00"
description: "Instalacion de NodeJS NPM y MariaDB"
type: "programacion"
tags: ["nodejs","instalacion","mariadb","npm","webservice", "curso"]
category: ["Programacion"]
img: "https://i.postimg.cc/xdNP76sz/curso-1.png"
authors: ["PatoJAD"]
---

En esta primera etapa del curso vamos a instalar las dependencias necesarias para poder realizar el curso. En mi caso estoy usando una distribución basada en arch, pero en caso de que dispongan de otra distribucion voy a dejar la documentación de como instalar las dependencias

{{< youtube code="qWyRs1Zlevk" >}}

### Ubuntu

```bash
sudo apt update && sudo apt install -y build-essential
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs mariadb
```

### RHEL

```bash
sudo yum install gcc-c++ make mariadb
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
```

### Arch Linux y derivadas

Los paquetes para Node.js y npm están disponibles en el repositorio de la Comunidad.

```bash
pacman -S nodejs npm mariadb
```

### Gentoo

Node.js está disponible en portage.

```bash
emerge nodejs mariadb
```

### Void Linux

Void Linux incluye la versión estable de Node.js en el repositorio principal.

```bash
xbps-install -Sy nodejs mariadb
```

### SNAP (No recomendado)

```bash
sudo snap install node --classic --channel=8
```

## Chequear las instalaciones

para poder chequear las instalaciones debemos correr el siguiente comando que nos retornara las versiones de npm nodejs y mariadb:

```bash
npm --version && node --version && mariadb --version
```
