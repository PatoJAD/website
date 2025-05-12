---
title: "Dominar SELinux en AlmaLinux: Guía Definitiva 2025"
date: "2025-05-12 09:00:00.00"
description: "Aprende a configurar y solucionar problemas con SELinux en AlmaLinux. Incluye gestión de políticas, solución de errores comunes y comandos esenciales para administradores de sistemas."
type: video
videoId: xrwkP3_lJsw
tags:
  [
    selinux,
    almalinux seguridad,
    hardening linux,
    políticas selinux,
    selinux enforcing,
    selinux troubleshooting,
    almalinux 2025,
    seguridad servidores,
    contextos selinux,
    semanage,
    audit2allow,
    administración sistemas,
    linux avanzado,
    apache selinux,
    nginx selinux,
  ]
categories: [Linux, Seguridad]
img: https://i.postimg.cc/RhKxDHXN/selinux.webp
authors: [PatoJAD]
---

**SELinux** (Security-Enhanced Linux) es una característica de seguridad avanzada en sistemas Linux, especialmente en distribuciones como AlmaLinux. En 2025, su uso se ha vuelto esencial para proteger servidores y aplicaciones críticas.

## 🔍 ¿Por qué SELinux es crucial en 2025?

**Security-Enhanced Linux (SELinux)** proporciona:
- ✅ Control de acceso obligatorio (MAC)
- ✅ Aislamiento de procesos y archivos
- ✅ Protección contra exploits zero-day
- ✅ Cumplimiento de normativas (HIPAA, PCI DSS)

> 📊 **Dato**: El 78% de las brechas de seguridad en servidores sin SELinux ocurren por permisos incorrectos (Fuente: Red Hat Security Report 2025)

## 🛠️ Configuración Básica

### Estados de SELinux

```bash
# Ver estado actual
sudo getenforce

# Cambiar temporalmente a Permissive
sudo setenforce 0

# Hacer cambio permanente (en /etc/selinux/config)
sudo sed -i 's/SELINUX=.*/SELINUX=enforcing/' /etc/selinux/config
```

## 🚨 Casos Prácticos Comunes

### Error: "HTTPD no puede acceder a archivos"
```bash
# Diagnosticar
sudo ausearch -m avc -ts recent | grep httpd
# Solución (cambiar contexto)
sudo semanage fcontext -a -t httpd_sys_content_t "/ruta/a/tu/app(/.*)?"
sudo restorecon -Rv /ruta/a/tu/app
```
### Servicio no puede usar puerto personalizado
```bash
# Permitir a Nginx usar puerto 3000
sudo semanage port -a -t http_port_t -p tcp 3000
```

## 📋 Comandos Esenciales

| Comando	| Descripción	| Ejemplo |
| ---	| ---	| --- |
| `chcon`	| Cambiar contexto	| `chcon -t httpd_sys_content_t archivo.html` |
| `semanage`	| Gestionar políticas	| `semanage port -l \| grep http` |
| `audit2allow`	| Crear módulos	| `grep denied /var/log/audit/audit.log \| audit2allow -M mi_politica` |

## 🔧 Troubleshooting Avanzado

### Analizar logs con sealert
 
```bash
sudo sealert -a /var/log/audit/audit.log
```

### Crear política personalizada

```bash
grep "avc: denied" /var/log/audit/audit.log | audit2allow -M mi_politica
sudo semodule -i mi_politica.pp
```

### 📌 Tabla de Contextos Comunes

| Contexto | Uso Típico |
| ---	| --- |
| `httpd_sys_content_t`	| Archivos web estáticos |
| `mysqld_db_t`	| Bases de datos MySQL |
| `user_home_t`	| Archivos en `/home` |
| `var_log_t`	| Archivos de logs |

## ⚠️ Solución de Problemas

### "SELinux está bloqueando mi aplicación"
Identificar el error:
```bash
sudo grep "avc: denied" /var/log/audit/audit.log
```

Solución temporal (solo para pruebas):

```bash
sudo setenforce 0
```

Solución permanente:

```bash
# Usar las recomendaciones de sealert
sudo sealert -l "*" | grep -A 10 "Sugerencia"
```

## 📌 Conclusión

Con esta guía has aprendido a:
* Configurar SELinux en modo enforcing
* Diagnosticar y solucionar errores comunes
* Crear políticas personalizadas
* Trabajar con contextos de archivos
* Próximo paso: Hardening avanzado de AlmaLinux

> 💡 Tip profesional: Usa restorecon -Rv después de instalar nuevas aplicaciones para resetear contextos.
