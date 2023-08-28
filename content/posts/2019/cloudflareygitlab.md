---
title: 'Configurar GitLab Pages con CloudFlare'
date: '2019-11-06'
description: 'Muchas personas preguntan como hice el blog, aqui una parte mas de como configurar CloudFlare para el dominio del GitLab Pages.'
type: 'post'
tags:
    [
        'gitlab',
        'cloudflare',
        'pages',
        'dominio',
        'dns',
        'certificado',
        'ssl',
        'https',
        'http',
        'configurar',
        'configuracion',
        'patojad',
        'patojad.com.ar',
        'patojad.com',
        'glpages',
        'gitlabpages',
        'gitlab pages',
        'gitlab pages cloudflare',
        'gitlab pages dominio',
        'gitlab pages dns',
        'gitlab pages certificado',
        'gitlab pages ssl',
        'gitlab pages https',
        'gitlab pages http',
        'gitlab pages configurar',
        'gitlab pages configuracion',
        'gitlab pages patojad',
        'gitlab pages patojad.com.ar',
        'gitlab pages patojad.com',
        'gitlab pages glpages',
        'gitlab pages gitlabpages',
        'gitlab pages gitlab pages',
    ]
categories: ['Programacion', 'Redes']
img: 'https://i.postimg.cc/fLMYjSZM/cloudflaregitlab.webp'
authors: ['PatoJAD']
---

Vamos a ver cómo realizar la configuración entre Cloudflare y Gitlab. Antes que nada, recomiendo leer porque elegimos [Gitlab](/post/2019/10/gitlab-pages/) y Porque elegimos [Cloudflare](/post/2019/10/cloudflare-que-es-ventajas-y-desventajas/). Una vez visto esto vamos a explicar cómo hacer para que nuestro dominio alojado el CloudFlare previamente realizado aquí.

Una vez habilitado el dominio en Cloudflare procedemos a crear los certificados para poder generar los registros correctamente.

## Certificado

![](https://i.postimg.cc/59C3kM1T/cert.png)

Nos dirigimos a SSL/TLS ahí dentro vamos a Origin Server Y podemos crear el Certificado. Para esto debemos elegir los dominios a los cuales apelara ese Certificado y el tiempo de duración de los mismos.

![](https://i.postimg.cc/yNxhmMvf/cert1.png)

Y esto nos generara las respectivas claves que utilizaremos para asegurar la conexión. Esto es lo que nos certifica la seguridad del servidor al que se envían.

![](https://i.postimg.cc/zfQC0xQq/cert2.png)

En donde se encuentran los cuadros blancos verán su respectivo certificado y clave los cuales debemos guardar para utilizarlos en GitLab

## Agregar Dominio a Gitlab

Dentro de nuestro proyecto en gitlab, (entendiendo que ya se encuentran configurados los CI para habilitar la sección Paginas) Nos dirigimos a configuración y a la sección de páginas.

![](https://i.postimg.cc/WzLMPhjK/glab.png)

Ahí seleccionamos nuevo Dominio y completamos los campos como vemos a continuación. Es importante recalcar que el dominio va sin http ni https y que no gestionamos los certificados automáticamente (Ya que lo hacemos por cloudflare manualmente)

![](https://i.postimg.cc/Gmcx28Yn/glab1.png)

Como requiere todos los certificados no olvidemos poner el del servidor de cloudflare el cual les dejo a continuación

    -----BEGIN CERTIFICATE-----
    MIIEADCCAuigAwIBAgIID+rOSdTGfGcwDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNV
    BAYTAlVTMRkwFwYDVQQKExBDbG91ZEZsYXJlLCBJbmMuMTQwMgYDVQQLEytDbG91
    ZEZsYXJlIE9yaWdpbiBTU0wgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MRYwFAYDVQQH
    Ew1TYW4gRnJhbmNpc2NvMRMwEQYDVQQIEwpDYWxpZm9ybmlhMB4XDTE5MDgyMzIx
    MDgwMFoXDTI5MDgxNTE3MDAwMFowgYsxCzAJBgNVBAYTAlVTMRkwFwYDVQQKExBD
    bG91ZEZsYXJlLCBJbmMuMTQwMgYDVQQLEytDbG91ZEZsYXJlIE9yaWdpbiBTU0wg
    Q2VydGlmaWNhdGUgQXV0aG9yaXR5MRYwFAYDVQQHEw1TYW4gRnJhbmNpc2NvMRMw
    EQYDVQQIEwpDYWxpZm9ybmlhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
    AQEAwEiVZ/UoQpHmFsHvk5isBxRehukP8DG9JhFev3WZtG76WoTthvLJFRKFCHXm
    V6Z5/66Z4S09mgsUuFwvJzMnE6Ej6yIsYNCb9r9QORa8BdhrkNn6kdTly3mdnykb
    OomnwbUfLlExVgNdlP0XoRoeMwbQ4598foiHblO2B/LKuNfJzAMfS7oZe34b+vLB
    yrP/1bgCSLdc1AxQc1AC0EsQQhgcyTJNgnG4va1c7ogPlwKyhbDyZ4e59N5lbYPJ
    SmXI/cAe3jXj1FBLJZkwnoDKe0v13xeF+nF32smSH0qB7aJX2tBMW4TWtFPmzs5I
    lwrFSySWAdwYdgxw180yKU0dvwIDAQABo2YwZDAOBgNVHQ8BAf8EBAMCAQYwEgYD
    VR0TAQH/BAgwBgEB/wIBAjAdBgNVHQ4EFgQUJOhTV118NECHqeuU27rhFnj8KaQw
    HwYDVR0jBBgwFoAUJOhTV118NECHqeuU27rhFnj8KaQwDQYJKoZIhvcNAQELBQAD
    ggEBAHwOf9Ur1l0Ar5vFE6PNrZWrDfQIMyEfdgSKofCdTckbqXNTiXdgbHs+TWoQ
    wAB0pfJDAHJDXOTCWRyTeXOseeOi5Btj5CnEuw3P0oXqdqevM1/+uWp0CM35zgZ8
    VD4aITxity0djzE6Qnx3Syzz+ZkoBgTnNum7d9A66/V636x4vTeqbZFBr9erJzgz
    hhurjcoacvRNhnjtDRM0dPeiCJ50CP3wEYuvUzDHUaowOsnLCjQIkWbR7Ni6KEIk
    MOz2U0OBSif3FTkhCgZWQKOOLo1P42jHC3ssUZAtVNXrCk3fw9/E15k8NPkBazZ6
    0iykLhH1trywrKRMVw67F44IE8Y=
    -----END CERTIFICATE-----

![](https://i.postimg.cc/3NX2rYxw/glab3.png)

Una vez finalizado esto vamos a ver lo siguiente lo cual nos da el registro txt que debemos agregar a nuestro cloudflare para completar con éxito la redirección.

## DNS

![](https://i.postimg.cc/28dxrF1x/dns.png)

Por ultimo debemos configurar los DNS para concretar la redirección. Esto debemos hacerlo desde Clodflare en la sección DNS

Y debemos completar primero la IP hacían donde va mirar nuestro dominio, en este caso estoy configurando https://patojad.com.ar/ lo cual seria mi dominio principal por lo cual el name del registro seria @ haciendo referencia a root. En caso de querer configurar un subdominio (por ejemplo https://compartelibre.patojad.com.ar) debemos poner solo el subdominio ej compartelibre.

![](https://i.postimg.cc/rF29BYwm/dns1.png)

Una vez agregada la IP debemos agregar el registro TXT que nos dio gitlab.

![](https://i.postimg.cc/dV4mTsmk/dns2.png)

Una vez agregado solo debemos volver a gitlab y verificarlo, si realizamos todo correctamente vamos a ver la siguiente pantalla. (ATENCION es posible que desde que agregue los registros pasen minutos hasta que la verificación se concluya.)

![](https://i.postimg.cc/ZRyrgrkp/glab4.png)

Cuando concluimos con esto en pocas horas la redirección será exitosa.
