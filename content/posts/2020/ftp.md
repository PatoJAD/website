---
title: 'Servidor FTP qué es, instalando nuestro propio servidor'
date: '2020-02-04 09:10:00'
description: 'Seguimos viendo un poco mas sobre redes, hoy nos toca un protocolo de comunicacion conocido como FTP'
type: 'redesyseguridad'
tags: ['ftp', 'red', 'internet']
category: ['redesyseguridad']
img: 'https://www.redeszone.net/app/uploads-redeszone.net/2019/10/protocolo-ftp.jpg'
authors: ['PatoJAD']
---

Los servidores FTP son uno de los tipos de servidores mas comunes intercambiar archivos entre dos ordenadores. Si eres webmaster, o tienes en mente crear una web en el futuro casi con total probabilidad tendrás que usar uno de ellos para subir los archivos a tu sitio web.

FTP como tal es un protocolo de intercambio de información, pero comunmente llamamos servidores FTP a aquellos que tilizan dicho protocolo para hacer el intercambio de archivos. Estos servidores en su inicio no utilizaban ningún tipo de cifrado con la consecuencia de que cuando nos logeamos en un servidor de este tipo nuestros datos (usuario y contraseña) viajan por la red en texto plano y son legibles por cualquiera que sepa cómo interceptar la conexión.

Actualmente conviven tanto el protocolo FTP como el protocolo SFTP que es igual pero utillizando cifado asimétrico, lo cual nos hace ganar y mucho en seguridad, aunque no nos garantiza la protección total frente a ataques.

## Instalar nuestro propio servidor FTP

En nuestro proyecto primará siempre la práctica frente a la teoría, así que nada mejor para ver cómo funciona un servidor FTP que instalando nostros mismos uno en local y juando un poco con el. Tenemos tanto servidores de pago como servidores ftp gratis y nosotros siempre os vamos a mostrar herramientas gratuitas frente a herramientas privadas. Así que vamos a ellos.

### Paso 1 – Instalar Vsftpd

Siempre antes de comenzar cualquier tipo de instalacion es importante tener actualizado el sistema para eso basta con un simple:

    sudo apt update

(En este caso vamos a dar los comandos para debian/ubuntu pero los paquetes seran los mismos para todas las distribuciones) Cuando termines con esto, instala el daemon vsftpd usando el siguiente comando:

    sudo apt-get install vsftpd

Una vez completada la instalación, haz una copia de seguridad del archivo original para que podamos comenzar nuestro trabajo con un archivo de configuración en blanco:

    sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.original

Ahora estamos listos para dar el siguiente paso y configurar el firewall.

### Paso 2 – Permitir el tráfico FTP desde el firewall

Para permitir que el servidor FTP de nuestro linux se comunique con el mundo exterior, tiene que abrirse paso a través del firewall(nosotros veremos los firewall de la maquina, los del router los puede ver cada uno por su lado, en caso de dudas estamos en el grupo de Telegram). Primero veamos si el firewall está habilitado en la máquina o no. Ejecuta el siguiente comando para verificar el estado:

    sudo ufw status

Si ves el siguiente mensaje:

    ufw: command not found

Significa que el firewall no está instalado y puedes continuar con el siguiente paso.

Sin embargo, si el resultado muestra algunas reglas definidas o un mensaje de que el estado del firewall es activo, deberás verificar si el tráfico FTP funcionará. Avancemos y abramos los puertos 20 y 21 para el tráfico FTP; los puertos 40000-50000 serán los reservados para el rango de puertos pasivos que eventualmente se establecerán en el archivo de configuración y el puerto 990 se usará cuando se habilite el TLS. Ejecuta los siguientes comandos para hacerlo:

    sudo ufw allow 20/tcp

    sudo ufw allow 21/tcp

    sudo ufw allow 990/tcp

    sudo ufw allow 40000:50000/tcp

Ahora veamos el estado de nuevo:

    sudo ufw status

El resultado debería ser algo así:

    Status: active

    To                         Action      From

    --                              ------      ----

    990/tcp                    ALLOW       Anywhere

    20/tcp                     ALLOW       Anywhere

    21/tcp                     ALLOW       Anywhere

    40000:50000/tcp            ALLOW       Anywhere

    20/tcp (v6)                ALLOW       Anywhere (v6)

    21/tcp (v6)                ALLOW       Anywhere (v6)

    990/tcp (v6)               ALLOW       Anywhere (v6)

    40000:50000/tcp (v6)       ALLOW       Anywhere (v6)

Ahora que tenemos todos los puertos necesarios abiertos y disponibles para nosotros, podemos pasar al siguiente paso.

### Paso 3 – Crear el directorio de usuarios

En el tercer paso para crear un servidor FTP, tendremos que seleccionar el usuario que va a utilizar el acceso FTP. Solo para mostrar cómo se hace, agregaremos un nuevo usuario. Para crearlo, usa el siguiente comando:

    sudo adduser pato

Cuando el sistema te pregunte, ingresa una contraseña para el usuario y completa todos los demás detalles. Lo ideal es que el FTP se restrinja a un directorio específico por motivos de seguridad. Vsftpd usa jaulas chroot para lograr esto. Con chroot habilitado, un usuario local está restringido a su directorio de inicio (por defecto). Sin embargo, es posible que debido a la seguridad de vsftpd, un usuario no pueda escribir en el directorio. No eliminaremos los privilegios de escritura de la carpeta de inicio; en su lugar, crearemos un directorio ftp que actuará como chroot junto con un directorio de archivos modificables que será responsable de mantener los archivos pertinentes. Usa el siguiente comando para crear la carpeta FTP:

    sudo mkdir /home/pato/ftp

Establece la propiedad usando:

    sudo chown nobody:nogroup /home/pato/ftp

Finalmente, elimina los permisos de escritura:

    sudo chmod a-w /home/pato/ftp

Ahora, usa el siguiente comando para verificar los permisos:

    sudo ls -la /home/pato/ftp

El resultado debería ser algo así:

    total 8
    dr-xr-xr-x 2 nobody nogroup 4096 Jun 29 11:32 .
    drwxr-xr-x 3 pato   pato    4096 Jun 29 11:32 ..

Como paso siguiente, crearemos el directorio contenedor de archivos y asignaremos la propiedad:

    sudo mkdir /home/pato/ftp/files
    sudo chown pato:pato /home/pato/ftp/files

Finalmente, agrega un archivo de prueba al directorio el cual se usará cuando probemos todo más adelante:

    echo "vsftpd sample file" | sudo tee /home/pato/ftp/files/sample.txt

### Paso 4 – Configurar vsftpd

El siguiente paso en nuestra apuesta por configurar un servidor FTP, es configurar vsftpd y nuestro acceso FTP. En este tutorial, permitiremos que un solo usuario se conecte con FTP utilizando una cuenta shell local. Las dos configuraciones clave requeridas para esto ya están establecidas en el archivo de configuración (vsftpd.conf). En primer lugar, verifica que el archivo de configuración tenga una configuración que coincida con las mencionadas a continuación utilizando el comando nano (se puede usar vi o vim tambien):

    sudo nano /etc/vsftpd.conf



    . . .
    # Allow anonymous FTP? (Disabled by default).
    anonymous_enable=NO
    #
    # Uncomment this to allow local users to log in.
    local_enable=YES
    . . .

En el mismo archivo, procederemos a eliminar # y a habilitar el write_enable:

    . . .
    write_enable=YES
    . . .

Chroot tampoco se comentará para garantizar que el usuario conectado a través de FTP solo acceda a los archivos dentro del directorio permitido:

    . . .
    chroot_local_user=YES
    . . .

También se deben agregar manualmente algunos valores nuevos. Simplemente puedes pegarlos en la parte inferior del archivo. En primer lugar, se agregará un user_sub_token en la ruta del directorio local_root. Esto permitirá que la configuración funcione con el usuario actual y con cualquier otro usuario que se agregue posteriormente:

    user_sub_token=$USER
    local_root=/home/$USER/ftp

Para garantizar que haya una cantidad considerable de conexiones disponibles, limitaremos la cantidad de puertos utilizados en el archivo de configuración:

    pasv_min_port = 40000
    pasv_max_port = 50000

En este tutorial, planeamos permitir el acceso caso por caso, así que ajustemos la configuración de forma tal que el acceso solo se otorgue a los usuarios que se hayan agregado explícitamente a una lista:

    userlist_enable=YES
    userlist_file=/etc/vsftpd.userlist
    userlist_deny=NO

El flag userlist_deny es el responsable de alternar la lógica; cuando se establece en «NO», solo se permitirá el acceso a los usuarios especificados en la lista. Una vez hecho esto, haz clic en CTRL+X y confirma los cambios del archivo.

Por último, procederemos con la creación y adición de nuestro usuario al archivo:

    echo "pato" | sudo tee -a /etc/vsftpd.userlist

Verifica que el usuario esté realmente activo ejecutando el siguiente comando:

    cat /etc/vsftpd.userlist

El resultado debe ser «pato». Reinicia el daemon utilizando el siguiente comando para cargar los cambios de configuración:

    sudo systemctl restart vsftpd

### Paso 5 – Hacer que el FTP sea seguro

Por defecto, FTP no hace ninguna encriptación de datos, por eso utilizaremos TTL/SSL para garantizar la seguridad. En primer lugar, debemos crear el certificado SSL y usarlo para proteger el servidor FTP de Ubuntu. Para comenzar, usa el siguiente comando:

    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/private/vsftpd.pem

El flag -days hace que el certificado sea válido por un año y hemos incluido una clave privada RSA de 2048 bits en el mismo comando. Una vez sean solicitados, ingresa los datos personales correspondientes en el campo provisto.

Cuando termines de crear el certificado, abre nuevamente el archivo de configuración:

    sudo nano /etc/vsftpd.conf

El final del archivo debe contener dos líneas que comiencen con «\_rsa«. Comenta ambas líneas así:

    # rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
    # rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key

En lugar de eso, apuntemos el archivo de configuración al certificado que acabamos de crear. Agrega las siguientes líneas:

    rsa_cert_file=/etc/ssl/private/vsftpd.pem
    rsa_private_key_file=/etc/ssl/private/vsftpd.pem

Ahora habilitaremos SSL y nos aseguraremos de que solo los clientes que tengan SSL habilitados nos puedan contactar. Cambia el valor de ssl_enable a YES:

    ssl_enable=YES

Ahora agrega las siguientes líneas para mayor protección: (Esto no permitirá conexiones anónimas a través de SSL)

    allow_anon_ssl=NO
    force_local_data_ssl=YES
    force_local_logins_ssl=YES

Configura el servidor para usar TLS usando:

    ssl_tlsv1=YES
    ssl_sslv2=NO
    ssl_sslv3=NO

Aquí agregaremos 2 opciones más. En primer lugar, no será necesario reutilizar SSL porque puede ocasionar que muchos clientes de FTP se averíen. En segundo lugar, utilizaremos suites de encriptación de alto cifrado, lo que significa que las longitudes de claves son iguales o superiores a 128 bits.

    require_ssl_reuse=NO
    ssl_ciphers=HIGH

Comencemos una vez más para aplicar las nuevas configuraciones:

    sudo systemctl restart vsftpd

¡Buen trabajo! Has configurado el servidor FTP en tu Linux para que funcione con el protocolo SSL/TLS. Cualquier duda o inconveniente nos vemos en el grupo de Telegram.
