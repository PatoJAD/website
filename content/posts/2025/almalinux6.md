---
title: "Configurar Firewall en AlmaLinux con firewalld: Guía de Seguridad 2025"
date: "2025-05-03 10:00:00.00"
description: "Aprende a proteger tu servidor AlmaLinux con firewalld. Configura reglas para HTTP/HTTPS, restricción por IP y monitoreo de conexiones. Incluye ejemplos prácticos para entornos productivos."
type: video
videoId: ehd-0wp8qBM
tags:
  [
    firewalld,
    almalinux seguridad,
    firewall linux,
    configurar firewalld,
    almalinux 2025,
    seguridad servidores,
    firewalld tutorial,
    zonas firewalld,
    reglas firewall,
    linux hardening,
    sysadmin,
    administración sistemas,
    firewalld ssh,
    firewalld http,
    firewalld https,
    monitoreo firewall,
  ]
categories: [Linux, Seguridad, Redes, Programacion]
img: https://i.postimg.cc/ncB6Lycx/almalinux6.webp
authors: [PatoJAD]
---

**firewalld** es el firewall predeterminado en AlmaLinux/RHEL porque:

- ✅ Gestión dinámica de reglas sin reiniciar servicios
- ✅ Soporte para zonas de red (pública, DMZ, etc.)
- ✅ Integración nativa con systemd y NetworkManager
- ✅ Compatibilidad con IPv4/IPv6

> 📊 **Dato clave**: Reduce ataques bruteforce en un 72% cuando se configura correctamente (Fuente: Red Hat Security Report 2025)

## 🛠️ Configuración Básica

### 1. Verificar estado

```bash
sudo systemctl status firewalld
sudo firewall-cmd --state
```

### 2. Habilitar e iniciar

```bash
sudo systemctl enable --now firewalld
```

### 3. Zonas predeterminadas

```bash
sudo firewall-cmd --list-all-zones
```

## 🌐 Reglas para Servicios Web

### Permitir HTTP/HTTPS y SSH

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
```

### Verificar reglas activas

```bash
sudo firewall-cmd --list-all
```

## 🔒 Reglas Avanzadas

### 1. Restricción por IP para SSH

```bash
sudo firewall-cmd --permanent --remove-service=ssh
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="192.168.1.100" service name="ssh" accept'
```

### 2. Abrir puerto personalizado (Ej: 3000 para Node.js)

```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
```

### 3. Bloquear país completo (Requiere ipset)

```bash
sudo firewall-cmd --permanent --zone=drop --add-source=country:cn
```

## 📊 Monitoreo y Troubleshooting

### Conexiones activas

```bash
sudo ss -tulnp
```

### Tráfico bloqueado

```bash
sudo journalctl -u firewalld --no-pager | grep DROP
```
### Resetear configuración

```bash
sudo firewall-cmd --reset-to-defaults
```

## 📌 Tabla de Servicios Comunes

| Servicio | Puerto | Comando firewalld |
|----------|--------|-------------------|
| HTTP     | 80     | --add-service=http |
| HTTPS    | 443    | --add-service=https |
| SSH      | 22     | --add-service=ssh |
| MySQL    | 3306   | --add-service=mysql |
| PostgreSQL| 5432  | --add-service=postgresql |


## 🚨 Solución de Problemas

### Error: "FirewallD is not running"

```bash
sudo systemctl start firewalld
```

### Reglas no persisten

```bash
sudo firewall-cmd --runtime-to-permanent
```

## 📌 Conclusión

Con esta guía has aprendido a:

- Configurar reglas básicas y avanzadas
- Restringir acceso por IP/país
- Monitorear conexiones sospechosas
- Solucionar errores comunes
- Próximo paso: Hardening avanzado con SELinux

> 💡 Tip profesional: Usa `--timeout=300` en reglas temporales para pruebas (ej: `sudo firewall-cmd --add-port=8080/tcp --timeout=300`)