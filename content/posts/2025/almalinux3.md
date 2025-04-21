---
title: "Gestión de Paquetes en AlmaLinux con DNF: Guía Completa 2025"
date: "2025-04-14 09:13:00.00"
description: "Domina el gestor DNF en AlmaLinux: instala, actualiza y elimina paquetes, gestiona repositorios (EPEL/CRB) y usa comandos avanzados. Incluye ejemplos prácticos y solución de errores."
type: video
videoId: 6cpakprDBUI
tags:
  [
    dnf almalinux,
    gestión paquetes almalinux,
    comandos dnf,
    repositorios epel,
    almalinux 2025,
    dnf comandos avanzados,
    dnf tutorial,
    linux para servidores,
    dnf vs yum,
    dnf tutorial 2025,
    dnf comandos básicos,
    dnf gestión de paquetes,
    almalinux,
    linux,
    software libre,
    comandos linux,
    administración de sistemas,
    sysadmin,
    dnf,
    yum,
  ]
categories: [Linux, Redes]
img: https://i.postimg.cc/QNKpXnrZ/almalinux3.webp
authors: [PatoJAD]
---

**DNF** (Dandified YUM) es el gestor de paquetes moderno en **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**, heredero de **YUM** pero más rápido y eficiente. En esta guía aprenderás:

- Comandos esenciales para gestión de software
- Cómo trabajar con repositorios (**EPEL**/**CRB**)
- Trucos avanzados para administradores de sistemas
- Solución a errores comunes

## 📦 Comandos Básicos de **DNF**

### Actualización del sistema

```bash
sudo dnf update
```

Actualiza todos los paquetes instalados y sus dependencias.

### Instalación de paquetes

```bash
sudo dnf install nginx mysql-server
```

Instala múltiples paquetes en un solo comando.

### Búsqueda de paquetes

```bash
dnf search python3
```

Encuentra paquetes disponibles en los repositorios.

### Eliminación de paquetes

```bash
sudo dnf remove httpd
```

Elimina paquetes y sus dependencias no requeridas.

## 🔌 Gestión de Repositorios

### Repositorio **EPEL**

```bash
sudo dnf install epel-release
sudo dnf config-manager --set-enabled epel
```

### Repositorio **CRB**

```bash
sudo dnf config-manager --set-enabled crb
```

### Tabla comparativa de repositorios

| Repositorio | Contenido            | Comando para habilitar                      |
| ----------- | -------------------- | ------------------------------------------- |
| Base        | Paquetes esenciales  | Activado por defecto                        |
| EPEL        | Paquetes adicionales | `sudo dnf install epel-release`             |
| CRB         | Paquetes de build    | `sudo dnf config-manager --set-enabled crb` |

## ⚡ Comandos Avanzados

### Limpieza del sistema

```bash
sudo dnf autoremove  # Elimina paquetes huérfanos
sudo dnf clean all   # Limpia la caché
```

### Historial de transacciones

```bash
sudo dnf history
sudo dnf history info 3
sudo dnf history undo 3  # Revierte la transacción 3
```

## 🚀 Caso Práctico: Instalación de **LAMP**

```bash
sudo dnf install httpd mariadb-server php php-mysqlnd
sudo systemctl enable --now httpd mariadb # No visto en video aun
```

## 🔍 Solución de Problemas Comunes

### Error: "No hay paquetes disponibles"

Verifica los repositorios habilitados:

```bash
sudo dnf repolist
```

Limpia la caché:

```bash
sudo dnf clean all && sudo dnf makecache
```

## 📌 Conclusión

Dominar **DNF** es esencial para cualquier usuario de **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**. Con esta guía puedes:

- Gestionar software eficientemente
- Configurar repositorios adicionales
- Solucionar problemas comunes
