---
title: "Instalación de AlmaLinux Paso a Paso"
date: "2025-04-07 15:45:00.00"
description: Aprende a instalar AlmaLinux desde cero en esta guía 2024. incluye requisitos, creación de usb booteable, particionado y configuración post-instalación. Ideal para devops y sysadmins.
type: video
videoId: goEAp4YV-co
tags: [
    instalación almalinux,
    almalinux 2024,
    guía almalinux,
    linux para servidores,
    migrar a almalinux,
    almalinux para principiantes,
    almalinux vs centos,
    instalación linux paso a paso
    instalar almalinux,
    almalinux,
    requisitos almalinux,
    instalar,
    instalacion,
    requisitos,
    software libre,
  ]
categories: [Linux, Redes]
img: https://i.postimg.cc/VkfSrks9/almalinux2.webp
authors: [PatoJAD]
---

**[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)** se ha consolidado como una de las mejores alternativas gratuitas a **RHEL** y **CentOS**. en este artículo, te guiaré paso a paso en su instalación, desde la descarga hasta la configuración inicial, ideal tanto para principiantes como para usuarios avanzados.

## 📥 Requisitos previos

Antes de comenzar, necesitarás:

- Mínimo 2 gb de ram (4 gb recomendado para entornos gráficos).
- 20 gb de espacio en disco.
- USB de 8 gb o más para crear el medio de instalación.
- Conexión a internet (opcional durante la instalación).

## 🔽 Paso 1: Descargar la ISO de **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**

- Visita el sitio oficial:[ almalinux.org/download](https://almalinux.org/download).
- Elige entre **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)** 9 (última versión estable) o 8 (para compatibilidad con software heredado).
- Descarga la iso según tu arquitectura (x86_64 para la mayoría de los casos).

{{< info text="💡 tip: verifica la integridad del archivo con el checksum sha256 proporcionado en el sitio." >}}

## 🛠️ Paso 2: Crear USB booteable

### Opción A: Usar balenaetcher (Windows/macOS/linux)

- Descarga e instala [balenaetcher](https://etcher.balena.io/#download-etcher).
- Selecciona la iso de **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)** y la usb.
- Haz clic en Flash! y espera a que termine.

### Opción B: Usar línea de comandos (linux)

```bash
sudo dd if=almalinux-9.x-x86_64.iso of=/dev/sdX bs=4M status=progress && sync  
```

{{< warning text="Importante: reemplaza /dev/sdX con la ruta correcta de tu usb (usa lsblk para identificarla)." >}}

### Uso de Ventoy

{{< youtube id="0BgO2y138oc" >}}

O tambien puedes verlo en su [articulo](/post/2021/04/ventoy-armando-un-usb-multiboot/)

## 💻 Paso 3: Instalar **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**

1. Arranca desde la usb (presiona F12/ESC/DEL según tu placa base para seleccionar el dispositivo).
2. Sigue estos pasos en el instalador:
  - Idioma/teclado: Elige español o inglés.
  - Particionado:
    - Automático: Recomendado para principiantes.
    - Manual: Para avanzados (crea /, /home, y swap).
  - Configuración de red: Actívala y asigna un nombre al equipo.
  - Usuario y contraseña: Crea un usuario con privilegios de administrador.
3. Inicia la instalación y espera a que finalice (≈10-15 minutos).

## ⚙️ Paso 4: Configuración post-instalación
Una vez instalado, ejecuta estos comandos esenciales:

```bash
# Actualizar el sistema  
sudo dnf update -y  

# Instalar herramientas básicas  
sudo dnf install -y nano git curl wget  

# Verificar la versión  
cat /etc/redhat-release
```
{{< info text="🔥 Consejo: si usas almalinux en un servidor, instala también fail2ban y configura el firewall." >}}

## 📌 Conclusión

Ahora tienes **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)** listo para usar. en el próximo artículo, exploraremos cómo gestionar paquetes con dnf y configurar repositorios adicionales.

### 🔗 Recursos útiles:

- [Documentación oficial de almalinux](https://wiki.almalinux.org/)
- [Foro de la comunidad](https://almalinux.org/community/)