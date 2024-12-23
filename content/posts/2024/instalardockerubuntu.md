---
title: "Cómo instalar Docker en Ubuntu 22.04"
date: "2024-12-23 19:18:00.00"
description: Veamos cómo instalar Docker en Ubuntu 22.04 paso a paso. En este tutorial, aprenderás a configurar Docker en tu sistema, ya sea la version de servidores o la de escritorio.
type: video
videoId: Rf9B3OEt3XQ
tags:
  [
    ubuntu,
    Docker,
    docker,
    instalar,
    ubuntu 22.04,
    linux,
    servidor,
    escritorio,
    desarrollo,
    programacion,
    tutorial,
    guia,
    server,
    ubuntu server,
    "22.04",
  ]
categories: [Linux, Programacion, Aplicaciones]
img: https://i.postimg.cc/tJDt7yTf/dockerubuntu.webp
authors: [PatoJAD]
---

A continuacion dejo los pasos que seguimos en el video para instalar Docker en Ubuntu 22.04. El mismo procedimiento puede ser aplicado a otras versiones de Ubuntu y distribuciones basadas en Ubuntu. 

## Paso 1: Actualizar el sistema

Antes de instalar Docker, es recomendable actualizar el sistema para asegurarse de que todos los paquetes estén al día. Para ello, ejecuta los siguientes comandos en la terminal:

```bash
sudo apt update
sudo apt upgrade
```

## Paso 2: Preparar entorno

Docker requiere algunas dependencias para funcionar correctamente. Puedes instalarlas ejecutando el siguiente comando:

```bash
# Add Docker's official GPG key:
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
```

## Paso 3: Instalar Docker

Una vez que hayas configurado el entorno, puedes instalar Docker en Ubuntu 22.04 con el siguiente comando:

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Paso 4: Verificar la instalación

Para verificar que Docker se haya instalado correctamente, puedes ejecutar el siguiente comando:

```bash
docker --version
```
