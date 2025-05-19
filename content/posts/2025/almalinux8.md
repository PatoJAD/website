---
title: "Hardening Avanzado en AlmaLinux: Guía CIS Benchmark 2025"
date: "2025-05-19 10:00:00.00"
description: "Protege tu servidor AlmaLinux con estándares empresariales. Incluye configuración de kernel, seguridad SSH, detección de intrusos con AIDE y cumplimiento CIS."
type: video
videoId: GjSc-KzDm0s
tags:
  [
    hardening linux,
    almalinux seguridad,
    cis benchmark,
    seguridad servidores,
    aide linux,
    kernel hardening,
    ssh seguro,
    almalinux 2025,
    cgroups v2,
    detección intrusos,
    lynis,
    compliance linux,
    seguridad sistemas,
    administración avanzada,
  ]
categories: [Linux, Seguridad]
img: https://i.postimg.cc/xd97ctXH/hardening.webp
authors: [PatoJAD]
---

El hardening transforma tu AlmaLinux en un sistema resistente a:

- ✅ Ataques automatizados (bots)
- ✅ Exploits de día cero
- ✅ Brechas por configuración incorrecta
- ✅ Cumplir con normativas (ISO 27001, PCI-DSS)

> 📊 **Estadística**: Servidores sin hardening son comprometidos 5x más rápido (Fuente: CIS Security Report 2025)

## 🛠️ Auditoría Inicial

### Escaneo con Lynis

```bash
sudo dnf install lynis -y
sudo lynis audit system --quick
```

### Actualizando CVEs conocidos

```bash
sudo dnf update --security"
```

## 🔐 Hardening Básico

Seguridad de Paquetes

```bash
# Actualizaciones críticas
sudo dnf update --security -y

# Eliminar servicios inseguros
sudo dnf remove xinetd telnet rsh -y
```

### SSH Seguro (/etc/ssh/sshd_config)

```ini
Port 2222
PermitRootLogin no
PasswordAuthentication no
AllowUsers admin
Protocol 2
```

## ⚡ Hardening Avanzado

### Kernel Hardening (/etc/sysctl.d/99-hardening.conf)

```ini
kernel.kptr_restrict = 2
vm.swappiness = 10
net.ipv4.icmp_echo_ignore_all = 1
fs.protected_hardlinks = 1
```

```bash
sudo sysctl -p
```

### Control de Procesos (cgroups v2)

```bash
sudo grubby --update-kernel=ALL --args="systemd.unified_cgroup_hierarchy=1"
```

### Detección de Intrusos (AIDE)

```bash
sudo dnf install aide -y
sudo aideinit
sudo aide --check
```

## 📋 Tabla de Comandos Esenciales

| Comando                 | Descripción                |
| ----------------------- | -------------------------- |
| auditctl -l             | Listar reglas de auditoría |
| sestatus                | Ver estado SELinux         |
| firewall-cmd --list-all | Reglas de firewall         |
| lastb                   | Intentos de login fallidos |

## 🚨 Solución de Problemas

### "Servicio no funciona después de hardening"

Verificar logs:

```bash
sudo journalctl -u nombre_servicio --no-pager
```

Modo diagnóstico:

```bash
sudo setenforce 0
sudo systemctl stop firewalld
```

## 📌 Checklist de Seguridad

- Actualizaciones automáticas habilitadas
- Root login desactivado
- Partición /tmp con nosuid,noexec
- Logs centralizados configurados
- Copias de seguridad automatizadas

## 📊 Resultados Esperados

| Métrica             | Antes | Después |
| ------------------- | ----- | ------- |
| Puntuación Lynis    | <50   | >85     |
| CVEs conocidos      | 10+   | 0-2     |
| Servicios expuestos | 5+    | 1-2     |

## 📌 Conclusión

Con esta guía has implementado:

* Protección a nivel kernel
* Configuración SSH segura
* Detección de cambios no autorizados
* Cumplimiento con CIS Benchmark

> 💡 Tip profesional: Usa oscap para evaluar automáticamente el cumplimiento CIS:
>
> ```bash
> sudo dnf install openscap-scanner -y
> sudo oscap xccdf eval --profile cis_level2 /usr/share/xml/scap/ssg/content/ssg-almalinux9-ds.xml
> ```