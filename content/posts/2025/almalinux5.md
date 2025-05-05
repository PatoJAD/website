---
title: "Configurar Apache HTTPD en AlmaLinux: Stack LAMP Completo 2025"
date: "2025-04-28 08:30:00.00"
description: "Guía definitiva para instalar y configurar Apache HTTPD en AlmaLinux con soporte para PHP y MySQL. Incluye comparativa técnica con Nginx y optimización para producción."
type: video
videoId: kw4JQQNST_0
tags:
  [
    almalinux,
    apache,
    httpd,
    lamp stack,
    apache vs nginx,
    apache php,
    apache mysql,
    apache tutorial,
    apache configuración,
    almalinux 2025,
    linux web server,
    administración de sistemas,
    sysadmin,
    apache optimización,
    apache virtual hosts,
    apache rendimiento,
  ]
categories: [Linux, Redes, Programacion]
img: https://i.postimg.cc/ydqNyp0n/almalinux-apache.webp
authors: [PatoJAD]
---

Apache HTTPD sigue siendo relevante para:
- **Compatibilidad**: Soporte nativo para .htaccess y aplicaciones legacy
- **Flexibilidad**: Módulos dinámicos (PHP, Python, Perl)
- **Soporte empresarial**: Ideal para sistemas con software antiguo
- **Facilidad de uso**: Configuración más intuitiva que Nginx

> 📊 **Estadística**: 31% de los sitios web usan Apache según Netcraft (2025)

## 🛠️ Instalación Básica de Apache

### Instalar paquetes necesarios
```bash
sudo dnf install httpd httpd-tools -y
```

### Iniciar y habilitar el servicio

```bash
sudo systemctl enable --now httpd
```

### Verificar estado

```bash
sudo systemctl status httpd
```

Salida esperada: `Active: active (running)`

## 📂 Estructura de Directorios Clave

| Ruta | Propósito |
|------|-----------|
| `/etc/httpd/conf/httpd.conf` | Configuración principal |
| `/etc/httpd/conf.d/` | Configs adicionales |
| `/var/www/html/` | Contenido web por defecto |
| `/var/log/httpd/` | Logs de acceso/errores |

## 🖥️ Configurar Virtual Hosts

Ejemplo básico (/etc/httpd/conf.d/misitio.conf):

```apache
<VirtualHost *:80>
    ServerName misitio.com
    DocumentRoot /var/www/html/misitio
    <Directory /var/www/html/misitio>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Comandos para aplicar cambios:

```bash
sudo systemctl restart httpd
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
```

## 🧩 Stack LAMP Completo

### Instalar PHP y MySQL

```bash
sudo dnf install php php-mysqlnd php-json mariadb-server -y
```

### Configurar MariaDB

```bash
sudo systemctl enable --now mariadb
sudo mysql_secure_installation
```

### Probar PHP

```bash
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/misitio/info.php
```

## ⚖️ Comparativa Apache vs Nginx (2025)

| Característica	| Apache	| Nginx |
|----------------|---------|------- |
| Modo de trabajo	| Proceso/Thread	| Evento |
| Rendimiento PHP	| 7,200 req/seg	| 8,500 req/seg |
| Consumo memoria	| 350MB (10K conex)	| 120MB |
| Facilidad config	| ★★★★★	| ★★★☆☆ |
| Soporte .htaccess	| Nativo	| Require rewrite |
| HTTP/3	| Experimental	| Soporte completo |

## ⚡ Optimización de Apache

Ajustes en `/etc/httpd/conf/httpd.conf`:

```apache
KeepAlive On
MaxKeepAliveRequests 100
KeepAliveTimeout 5
StartServers 5
MinSpareServers 5
MaxSpareServers 10
```

## 🚨 Solución de Problemas Comunes

### Error: "Could not reliably determine..."
```bash
echo "ServerName localhost" | sudo tee -a /etc/httpd/conf/httpd.conf
```

### Error: "403 Forbidden"

```bash
sudo chown -R apache:apache /var/www/html/misitio
sudo chmod -R 755 /var/www/html
```

## 📌 Conclusión

Con esta guía has aprendido a:

* Instalar Apache HTTPD en AlmaLinux
* Configurar hosts virtuales
* Implementar stack LAMP completo
* Optimizar para entornos productivos

Próximo paso: Proteger tu servidor con `firewalld` y `fail2ban`.

> 💡 Dato técnico: Apache soporta más de 60 módulos dinámicos, incluyendo mod_wsgi para Python y mod_perl.