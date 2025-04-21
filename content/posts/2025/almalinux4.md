---
title: "Configurar Nginx con SSL en AlmaLinux: Guía Definitiva 2025"
date: "2025-04-21 09:13:00.00"
description: "Guía completa para configurar nginx como servidor web en AlmaLinux, con ssl automático usando let's encrypt y optimización profesional para producción."
type: video
videoId: nUsl0aMu-a4
tags:
  [
    almalinux,
    nginx,
    nginx ssl,
    nginx https,
    nginx tutorial,
    nginx configuración,
    nginx automatización,     
    nginx vs apache,
    nginx optimización,
    nginx instalación,
    nginx administración,
    almalinux 2025,
    linux,
    software libre,
    almalinux nginx,
    administración de sistemas,
    sysadmin,
    nginx certbot,
    nginx let's encrypt,
    nginx rendimiento,
    nginx errores,
    nginx solución problemas,
    nginx configuración básica,
  ]
categories: [Linux, Redes, Aplicaciones]
img: https://i.postimg.cc/c4C6Sd1y/nginxalmalinux.webp
authors: [PatoJAD]
---

Nginx es uno de los servidores web más rápidos y eficientes para entornos Linux. En esta guía aprenderás a:

- Instalar y configurar Nginx en **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**
- Habilitar HTTPS con Let's Encrypt
- Optimizar el rendimiento para producción
- Solucionar errores comunes

## 🛠️ Instalación de Nginx

1. Instalar desde repositorios
   ```bash
   sudo dnf install nginx -y
   ```
2. Iniciar y habilitar el servicio
   ```bash
   sudo systemctl enable --now nginx
   ```
3. Verificar instalación
   ```bash
   curl -I localhost
   ```
   Deberías ver: HTTP/1.1 200 OK

## 📂 Configuración Básica

### Estructura de archivos clave

| Ruta | Propósito |
| ---- | --------- |
| /etc/nginx/nginx.conf | Configuración principal |
| /etc/nginx/conf.d/ | Configs de sitios adicionales |
| /var/www/html/ | Directorio raíz por defecto |

### Ejemplo de configuración mínima

```conf
# /etc/nginx/conf.d/tusitio.conf

server {
listen 80;
server_name tusitio.com www.tusitio.com;
root /var/www/html;

    location / {
        try_files $uri $uri/ =404;
    }

}
```
Verificar y recargar:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 🔒 Certificado SSL con Let's Encrypt

1. Instalar Certbot
   ```bash
   sudo dnf install certbot python3-certbot-nginx -y
   ```
2. Obtener certificado
   ```bash
   sudo certbot --nginx -d tusitio.com -d www.tusitio.com
   ```
3. Renovación automática
   Añadir al cron:
   ```bash
   0 3 \* \* \* /usr/bin/certbot renew --quiet
   ```

## ⚡ Optimización de Rendimiento

### Ajustes recomendados en /etc/nginx/nginx.conf
```conf
worker_processes auto;
worker_connections 1024;
keepalive_timeout 30;
gzip on;
gzip_types text/css application/javascript;
```

### Comandos útiles

```bash
# Reinicio seguro

sudo systemctl restart nginx

# Ver estado

sudo systemctl status nginx

# Monitorear peticiones

sudo tail -f /var/log/nginx/access.log
```

## 🚨 Solución de Problemas Comunes

### Error: "Port 80 already in use"
```bash
sudo netstat -tulnp | grep :80
sudo kill -9 <PID>
```
### Error: "SSL handshake failed"

Verificar que el puerto 443 esté abierto:

```bash
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --reload
```

## 📊 Comparativa Nginx vs Apache

| Característica | Nginx | Apache |
| -------------- | ----- | ------ |
| Velocidad      | Rapido | Lento  |
| Rendimiento    | Alto   | Medio  |
| Consumo RAM    | Bajo   | Moderado |
| Facilidad      | Intermedia | Sencilla |
| Soporte .htaccess | No | Sí |

## 📌 Conclusión

Con esta guía has aprendido a:
- Desplegar Nginx en **[AlmaLinux](/post/2025/03/almalinux-guía-definitiva-historia-ventajas-y-comparativa-vs-rhelcentos/)**
- Configurar sitios virtuales 
- Implementar HTTPS automático
- Optimizar para entornos productivos
