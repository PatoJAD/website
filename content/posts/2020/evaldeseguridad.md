---
title: 'Evaluaciones de Seguridad'
date: '2020-09-12 09:24:00'
description: 'Avanzamos un poco en la seguridad Informatica y tocamos el tema de Evaluaciones'
tags: ['seguridad', 'fede', 'federico', 'pacheco', 'evaluaciones', 'motivacion']
type: 'post'
categories: ['Seguridad']
img: 'http://www.prakmatic.com/wp-content/uploads/seguridad-TI-empresa.jpg'
authors: ['PatoJAD']
---

**ATENCION: Antes de seguir te recomiendo que te pases por {{< textlink url="/post/2020/09/que-es-la-seguridad-informática/" text="la siguiente pulbicacion" >}} dado que damos esto por entendido**

Las evaluaciones de seguridad deben tener una periodicidad regular que permite mantener una correlación de la los datos en los cuales se puedan obtener resultados, por ejemplo aquellas personas que sacan fotos todos los meses a sus bebés para luego ver el crecimiento… De nada serviría tener una foto de un dia, la otra del otro dia y la otra dentro de 10 años. Para poder ver correctamente el crecimiento debemos mantener un periodo regular de imágenes.

## Motivación

Este tipo de regulación se da gracias a una “motivación” que técnicamente suelen ser homologaciones, normas, o puede ser mantener la seguridad de nuestros sistemas. Esto podemos compararlo con la motivación de las personas que buscan ver su cuerpo “esbelto” y para esto todas las semanas se pesan o se sacan fotos para poder ver el cambio. Las principales motivaciones dentro de la seguridad son:

-   Cumplimiento de leyes, normas, etc.
-   Obtencion de Informacion para la gestión de seguridad
-   Identificación de **riesgos de negocio**.

## Conocimiento sobre el Objetivo

El conocimiento sobre el objetivo es realmente importante y podemos dividirlo en 3 tipos: Black Box (Sin conocimiento), Grey Box (Algunos conocimientos) y White Box (Con un conocimiento completo). Por ejemplo, un White Box es analizar el código fuente (Dado que al tenerlo tenemos todo el conocimiento) Y un ejemplo de Black Box es buscar vulnerabilidades de una empresa X que no conocemos de nada.

También Influye el conocimiento de la empresa que nos piden evaluar, dado que si la empresa sabe que vamos a evaluarla podría duplicar o triplicar la gente esperando un ataque lo cual no daría valores normales. Esto también podemos dividirlo en 3 tipos Double blind (Cuando no son notificados de lo que va a ocurrir), Blind (Cuando saben la fecha pero no que va a pasar o viseversa) o Transparent (Cuando saben que va a pasar y cuando)

## Ámbito de aplicación de las evaluaciones.

En esta oportunidad vamos a ver en que ámbitos podemos aplicarlo (Esto puede ir variando pero tenemos que tener una estructura para poder organizarlo mejor)

### Sistemas y redes

Dentro de este ámbito podemos analizar diferentes cosas:

-   **Análisis de vulnerabilidades:** En este caso solo identificamos vulnerabilidades “conocidas” en un software conocido. Suele ser fácil de automatizar. Y existen diferentes áreas: Sobre SO, Apps o configuraciones.
-   **Penetration Test:** También conocido como Ethical Hacking (Aunque pueden llegar a encontrarse diferencias a terminos practicos es similar) A diferencia del análisis acá estamos induciendo la penetración para lograr el objetivo incluyendo diferentes formas de ataques. Esta área no es netamente técnica, aquí podemos analizar vulnerabilidades que se generan por las personas, por ejemplo, el mal uso de datos. Para llevarse a cabo requiere el uso de una metodología, por lo cual se lleva a cabo por Pentesters o Ethical Hackers.
-   **Auditoría de Seguridad:** La auditoría se diferencia principalmente porque no es ofensiva como las otras. Estas auditorías pueden referirse también a procesos, sistemas o productos. Y suele estar basado en guías, checklist, entre otras cosas.
-   **Análisis de Infraestructura:** Estos análisis son exclusivos de Redes: protocolos, dispositivos y servicios. Suele hacerse sobre vulnerabilidades conocidas.
-   **Test de plataformas específicas:** Estos análisis suelen ser de plataformas que utilizan las empresas donde los errores suelen estar en configuraciones, niveles de permisos, errores de implementación entre muchos otros temas. Esta área abarcar estos sistemas tan grandes

### Software

Dentro de Software vamos a mostrar los 3 tipos que vamos a discriminar en esta oportunidad:

-   **Software Testing tradicional:** En este caso lo que se verifican requerimientos funcionales con “casos de uso” verificando que el software cumpla la función para la que fue desarrollado (Sólo verifica eso, no verifica que no tenga errores) Estos requerimientos no suelen estar muy relacionados con la seguridad y si lo hacen es en pequeñas cosas.
-   **Security Testing:** Busca determinar el nivel de seguridad de un Software desde su exterior (Lo que definimos como **Back Box**) A diferencia del tradicional este intenta evitar errores o inseguridades. En este caso a diferencia de los casos de uso se construyen patrones de ataque. Puede incluirse ingeniería inversa y/o técnicas específicas.
-   **Auditoría de Código fuente:** Este es un caso de **White Box** donde analizamos el código estático en busca de errores o fallas. Esto puede hacerse manualmente aunque hoy en día es casi imposible analizar miles líneas de código. Pero esto también puede hacerse buscando cosas más específicas como funciones peligrosas.

### Procesos

Si bien en procesos podríamos explicarlo como una sola cosa está bueno generar divisiones para poder realizar un mejor análisis y particionarlo mejor:

-   **Análisis funcional específico:** Este análisis consta en desgranar lo mayor posible un procedimiento como para poder ver cada parte y para comprender dónde se puede generar el error. No suele estar basado en aspectos técnicos.
-   **Análisis diferencia:** Este análisis, también conocido como Gap Analysis, es mucho más estructurado. Se establece un nivel que debe ser cumplido y se compara con el estado actual. Suele realizarse con reuniones con los responsables de los procesos.

### Entorno físico

En este caso se buscan determinar vulnerabilidades físicas y/o ambientales. Para esto se requiere un equipo especializado en el tema que puede ser interno, o externo. Si bien esto puede estar encarado como un Pentest no debe confundirse con tal. En detalle esto evalúa cerraduras, puertas, ventanas, equipamentos electrónicos, infraestructura, cableados, etc.

## Red Team test

Este tipo de análisis es muy similar al pentest pero es muchisimo mas realista dado que nosotros ejecutamos un “hackeo” completamente realista donde el cliente desconoce por completo estos ataques. Estos equipos suelen ser multidisciplinarios. Si bien son guiados por equipos internos puede contener colaboradores externos de ser requerido.

Puede existir Blue team un equipo que se dedica a defender, con una serie de reglas de juegos que permite dar más dinamismo.

---

Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
