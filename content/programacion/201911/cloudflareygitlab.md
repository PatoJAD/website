---
title: "Configurar GitLab Pages con CloudFlare"
date: "2019-11-06"
description: "Muchas personas preguntan como hice el blog, aqui una parte mas de como configurar CloudFlare para el dominio del GitLab Pages."
type: "programacion"
tags: ["GitLab","CloudFlare","Pages","Dominio"]
category: ["Programacion"]
img:  "https://i.ytimg.com/vi/TWqh9MtT4Bg/maxresdefault.jpg"
authors: ["PatoJAD"]
---

Hoy vamos a ver cómo realizar la configuración entre Cloudflare y Gitlab. Antes que nada, recomiendo leer {{< textlink url="https://patojad.com.ar/programacion/2019/10/gitlab-pages/" text="porque elegimos Gitlab" >}} y Porque elegimos {{< textlink text="Cloudflare" url="https://patojad.com.ar/programacion/2019/10/cloudflare-que-es-ventajas-y-desventajas/">}}. Una vez visto esto vamos a explicar cómo hacer para que nuestro dominio alojado el CloudFlare previamente realizado aquí.

Una vez habilitado el dominio en Cloudflare procedemos a crear los certificados para poder generar los registros correctamente.

{{< br >}}

## Certificado

{{< br >}}
{{< img src="https://i.postimg.cc/59C3kM1T/cert.png" >}}
{{< br >}}

Nos dirigimos a SSL/TLS ahí dentro vamos a Origin Server Y podemos crear el Certificado. Para esto debemos elegir los dominios a los cuales apelara ese Certificado y el tiempo de duración de los mismos.

{{< br >}}
{{< img src="https://i.postimg.cc/yNxhmMvf/cert1.png" >}}
{{< br >}}

Y esto nos generara las respectivas claves que utilizaremos para asegurar la conexión. Esto es lo que nos certifica la seguridad del servidor al que se envían.

{{< br >}}
{{< img src="https://i.postimg.cc/zfQC0xQq/cert2.png" >}}
{{< br >}}

En donde se encuentran los cuadros blancos verán su respectivo certificado y clave los cuales debemos guardar para utilizarlos en GitLab

{{< br >}}
{{< publicidad >}}
{{< br >}}

## Agregar Dominio a Gitlab

{{< br >}}

Dentro de nuestro proyecto en gitlab, (entendiendo que ya se encuentran configurados los CI para habilitar la sección Paginas) Nos dirigimos a configuración y a la sección de páginas.

{{< br >}}
{{< img src="https://i.postimg.cc/WzLMPhjK/glab.png" >}}
{{< br >}}

Ahí seleccionamos nuevo Dominio y completamos los campos como vemos a continuación. Es importante recalcar que el dominio va sin http ni https y que no gestionamos los certificados automáticamente (Ya que lo hacemos por cloudflare manualmente)

{{< br >}}
{{< img src="https://i.postimg.cc/Gmcx28Yn/glab1.png" >}}
{{< br >}}

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

{{< br >}}
{{< img src="https://i.postimg.cc/3NX2rYxw/glab3.png" >}}
{{< br >}}

Una vez finalizado esto vamos a ver lo siguiente lo cual nos da el registro txt que debemos agregar a nuestro cloudflare para completar con éxito la redirección.

{{< br >}}

## DNS

{{< br >}}
{{< img src="https://i.postimg.cc/28dxrF1x/dns.png" >}}
{{< br >}}

Por ultimo debemos configurar los DNS para concretar la redirección. Esto debemos hacerlo desde Clodflare en la sección DNS

Y debemos completar primero la IP hacían donde va mirar nuestro dominio, en este caso estoy configurando https://patojad.com.ar/ lo cual seria mi dominio principal por lo cual el name del registro seria @ haciendo referencia a root. En caso de querer configurar un subdominio (por ejemplo https://compartelibre.patojad.com.ar) debemos poner solo el subdominio ej compartelibre.

{{< br >}}
{{< img src="https://i.postimg.cc/rF29BYwm/dns1.png" >}}
{{< br >}}

Una vez agregada la IP debemos agregar el registro TXT que nos dio gitlab.

{{< br >}}
{{< img src="https://i.postimg.cc/dV4mTsmk/dns2.png" >}}
{{< br >}}

Una vez agregado solo debemos volver a gitlab y verificarlo, si realizamos todo correctamente vamos a ver la siguiente pantalla. (ATENCION es posible que desde que agregue los registros pasen minutos hasta que la verificación se concluya.)

{{< br >}}
{{< img src="https://i.postimg.cc/ZRyrgrkp/glab4.png" >}}
{{< br >}}

Cuando concluimos con esto en pocas horas la redirección será exitosa.
