---
title: 'Como instalar MongoDB en GNU/Linux'
date: '2023-04-19 13:45:00.00'
description: 'Vamos a ver como instalar mongo (o MongoDB) en nuestra distro de GNU/Linux preferida.'
type: 'linux'
tags:
    [
        'mongo',
        'mongodb',
        'db',
        'ubuntu',
        'debian',
        'arch',
        'mx linux',
        'antix',
        'artix',
        'paquetes',
        'universal',
        'redhat',
        'suse',
        'centos',
        'oracle',
        'rocky',
        'almalinux',
    ]
category: ['Linux']
img: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png'
authors: ['PatoJAD']
---

Vamos a ver como realizar la instalacion de **MongoDB** en nuestra distribucion de GNU/Linux preferida.

## Video

En el video sigo los pasos para la instalacion en cualquier distribucion base Arch linux que es la que utilizo yo, sin embargo en la parte de abajo dejare la forma de realizarlo en distintas distribuciones

{{< youtube code="tQk0Q8rBkHY" >}}

## Comando para Arch Linux

En arch linux la instalacion es tan simple como podemos ver en el video utilizando:

```zsh
yay -Sy mongodb-bin
```

## Debian y derivadas como ubuntu

Debemos asegurarnos de tener `gnupg` para poder instalar las llaves necesarias, podemos instalarlo de la siguiente manera:

```zsh
sudo apt-get install gnupg
```

y una ves instalado procedemos a realizar la descarga e instalacion de las llaves de la siguiente manera:

```zsh
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

creamos el archivo `/etc/apt/sources.list.d/mongodb-org-6.0.list` para agregar el repositorio, esto lo podemos hacer de la siguiente manera:

```zsh
nano /etc/apt/sources.list.d/mongodb-org-6.0.list
```

guardamos y cerramos el archivo limpio para luego dentro agregar el repositorio segun corresponda.

### Debian 10

```zsh
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] http://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Debian 11

```zsh
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Ubuntu 18.4

```zsh
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Ubuntu 20.4

```zsh
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

### Ubuntu 22.4

```zsh
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

---

Una vez creado el archivo procedemos a instalar el paquete de la siguiente manera:

```zsh
sudo apt update && sudo apt install -y mongodb-org
```

## RHEL / CentOS / Oracle / Rocky / AlmaLinux

Vamos a crear el archivo `/etc/yum.repos.d/mongodb-org-6.0.repo` que nos permitira agregar el repositorio para la instalacion y dentro vamos a agregar lo siguiente:

```conf
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Una vez creado el archivo procedemos a instalar el paquete de la siguiente manera:

```zsh
sudo yum install -y mongodb-org
```

---

Fuente: [https://www.mongodb.com/docs/manual/administration/install-on-linux/](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

{{< link url="https://community.vasak.net.ar/topic/52/como-instalar-mongodb-en-gnu-linux" text="Debatir en el Foro" >}}
