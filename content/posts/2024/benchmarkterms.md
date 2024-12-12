---
title: "Benchmark: Emuladores de terminal en MacOS y GNU/Linux"
date: "2024-04-19 11:13:00.00"
description: Revisa esta exhaustiva comparativa en MacOS y GNU/Linux. Conoce cómo medimos el consumo de energía, la latencia del teclado a la pantalla y el procesamiento de datos para encontrar el mejor emulador de terminal.
type: video
videoID: LxibfDJJ3S4
tags:
  [
    rendimiento de emulador de terminal,
    kitty,
    warp,
    apple terminal,
    macos,
    linux,
    consumo de energía,
    latencia del teclado,
    procesamiento de datos,
    gnu,
    gnu linux,
    benchmark,
    comparativa,
    terminales,
    emuladores,
    terminal,
    rendimiento,
    medición,
    pruebas,
    testeo,
    calidad,
    calidad de software,
    tester oficial,
    pruebas de software,
    desarrollo de software,
    testing de terminales,
    testing de emuladores de terminal,
    emulador,
    terminal,
    rendimiento de terminal,
    rendimiento de emulador,
    rendimiento de terminal en MacOS,
    rendimiento de terminal en GNU/Linux,
    rendimiento de emulador en MacOS,
    rendimiento de emulador en GNU/Linux,
    rendimiento de terminal en MacOS y GNU/Linux,
    rendimiento de emulador en MacOS y GNU/Linux,
    comparativa de terminales,
    comparativa de emuladores de terminal,
    comparativa de terminal en MacOS y GNU/Linux,
    comparativa de emulador en MacOS y GNU/Linux,
    comparativa de terminal en MacOS y GNU/Linux,
    comparativa de emulador en MacOS y GNU/Linux,
  ]
categories: [Linux, MacOS, Aplicaciones, Programacion]
img: https://i.postimg.cc/c6Gy4gbt/benchmarkterm.webp
authors: [PatoJAD]
---

<script>
window.onload = function () {

const linuxbench = new CanvasJS.Chart("linuxCharts", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Terminales Linux Benchmark - 2014"
	},
	subtitles: [{
		text: "Terminales de GNU/Linux usadas para el benchmark en 2014 "
	}], 
	axisX: {
		title: "States"
	},
	axisY: {
		title: "Demora - segundos",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC",
		includeZero: true
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Warp",
		showInLegend: true,      
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII",  y: 3.45 },
			{ label: "Caracteres Unicode", y: 3.48 },
			{ label: "Códigos CSI con pocos caracteres", y: 2.59 },
			{ label: "Códigos de escape largos",  y: 8.21 },
			{ label: "Imágenes",  y: 2.75 }
		]
	},
	{
		type: "column",
		name: "kgx",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII", y: 1.28 },
			{ label: "Caracteres Unicode", y: 1.67 },
			{ label: "Códigos CSI con pocos caracteres", y: 3.05 },
			{ label: "Códigos de escape largos", y: 5.37 },
			{ label: "Imágenes", y: 3.46 }
		]
	},
	{
		type: "column",
		name: "Kitty",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII", y: 3.29 },
			{ label: "Caracteres Unicode", y: 3.04 },
			{ label: "Códigos CSI con pocos caracteres", y: 1.67 },
			{ label: "Códigos de escape largos", y: 2.4 },
			{ label: "Imágenes", y: 1.81 }
		]
	}
  ]
});

const macosbench = new CanvasJS.Chart("macosCharts", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Terminales MacOS Benchmark - 2014"
	},
	subtitles: [{
		text: "Terminales de MacOS usadas para el benchmark en 2014 "
	}], 
	axisX: {
		title: "States"
	},
	axisY: {
		title: "Demora - segundos",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC",
		includeZero: true
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Warp",
		showInLegend: true,      
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII",  y: 3.02 },
			{ label: "Caracteres Unicode", y: 2.55 },
			{ label: "Códigos CSI con pocos caracteres", y: 2.38 },
			{ label: "Códigos de escape largos",  y: 7.08 },
			{ label: "Imágenes",  y: 2.67 }
		]
	},
	{
		type: "column",
		name: "Apple Terminal",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII", y: 7.2 },
			{ label: "Caracteres Unicode", y: 4.43 },
			{ label: "Códigos CSI con pocos caracteres", y: 3.71 },
			{ label: "Códigos de escape largos", y: 28.22 },
			{ label: "Imágenes", y: 9.07 }
		]
	},
	{
		type: "column",
		name: "Kitty",
		axisYType: "secondary",
		showInLegend: true,
		yValueFormatString: "#,##0.# s",
		dataPoints: [
			{ label: "Solo caracteres ASCII", y: 1.68 },
			{ label: "Caracteres Unicode", y: 2.77 },
			{ label: "Códigos CSI con pocos caracteres", y: 2 },
			{ label: "Códigos de escape largos", y: 3.41 },
			{ label: "Imágenes", y: 2.41 }
		]
	}
  ]
});

linuxbench.render();
macosbench.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}
</script>

Medir el rendimiento del emulador de terminal es fundamental para los usuarios que buscan una experiencia fluida y eficiente. En este sentido, se centra en tres aspectos principales: el consumo de energía en tareas habituales, la latencia del teclado a la pantalla y el rendimiento al procesar grandes cantidades de datos.

Kitty tiene un "kitten" integrado para medir el rendimiento de transferencia. Funciona mediante la carga de grandes cantidades de datos de diferentes tipos en el dispositivo tty y midiendo qué tan rápido el terminal analiza y responde a ellos. Las mediciones a continuación se realizaron con la misma fuente, tamaño de fuente y tamaño de ventana para todos los terminales, y con la configuración predeterminada, en la misma computadora.

## Replicar el proceso

Para replicar el proceso de medición de rendimiento, primero necesitas instalar `kitty` en tu sistema. Luego, ejecuta el siguiente comando en tu terminal:

```zsh
kitten __benchmark__ --render
```

## Entendiéndo los resultados

Los resultados de las pruebas se dividen en cinco categorías: solo caracteres ASCII, caracteres Unicode, códigos CSI con pocos caracteres, códigos de escape largos e imágenes. Cada categoría representa un tipo diferente de datos que se procesan en el terminal.

### Solo caracteres ASCII

Los caracteres ASCII son aquellos que pertenecen al conjunto de caracteres ASCII estándar, que incluye letras, números, signos de puntuación y algunos caracteres especiales. Estos caracteres se representan mediante un código numérico de 7 bits. Se utilizan comúnmente en la entrada y salida de datos en la mayoría de los entornos de terminal y son compatibles con una amplia gama de dispositivos y sistemas.

### Caracteres Unicode

Los caracteres Unicode son aquellos que pertenecen al estándar Unicode, que es un estándar de codificación de caracteres que permite representar la mayoría de los sistemas de escritura del mundo, así como símbolos y caracteres especiales. Los caracteres Unicode se utilizan cuando se necesita admitir una amplia variedad de idiomas y símbolos en la entrada y salida de datos en la terminal.

### Códigos CSI con pocos caracteres

Los códigos CSI (Control Sequence Introducer) son secuencias de escape que se utilizan para controlar aspectos de la apariencia y el comportamiento de la terminal. Los códigos CSI con pocos caracteres son aquellos que consisten en una secuencia de escape de control simple que realiza una acción específica, como cambiar el color del texto o mover el cursor a una posición específica en la pantalla.

### Códigos de escape largos

Los códigos de escape largos son secuencias de escape más complejas que los códigos CSI con pocos caracteres. Estos códigos pueden realizar acciones más avanzadas, como cambiar las propiedades de la terminal, realizar operaciones de formato de texto más complejas o controlar dispositivos periféricos conectados a la terminal.

### Imágenes

En algunas terminales avanzadas, es posible mostrar imágenes directamente en la pantalla utilizando códigos de escape específicos. Estas imágenes pueden ser gráficos simples, como iconos o logotipos, y se utilizan para mejorar la experiencia visual del usuario en la terminal.
En resumen, cada uno de estos tipos se utiliza en la terminal para diferentes propósitos, desde la representación de caracteres básicos hasta el control avanzado de la apariencia y el comportamiento de la terminal, e incluso la visualización de imágenes directamente en la pantalla. Su uso depende de las necesidades específicas de la aplicación o del entorno de trabajo en la terminal.

## Resultados en MacOS

En MacOS se realizaron las pruebas con los siguientes terminales: Warp, Apple Terminal y Kitty. Sirviendo Kitty y Warp para comparar con las pruebas realizadas en GNU/Linux. A continuación, se presentan los resultados obtenidos:

| Terminal       | Solo caracteres ASCII | Caracteres Unicode | Códigos CSI con pocos caracteres | Códigos de escape largos | Imágenes |
| -------------- | --------------------- | ------------------ | -------------------------------- | ------------------------ | -------- |
| Warp           | 3.02                  | 2.55               | 2.38                             | 7.08                     | 2.67     |
| Apple Terminal | 7.2                   | 4.43               | 3.71                             | 28.22                    | 9.07     |
| Kitty          | 1.68                  | 2.77               | 2                                | 3.41                     | 2.41     |

En esta tabla, cada columna representa diferentes tipos de datos. La columna CSI es para datos que consisten en una combinación de códigos de escape de formato típicos y algo de texto solo ASCII.

<div id="macosCharts" style="height: 600px; width: 100%;"></div>

## Resultados en GNU/Linux

En GNU/Linux se realizaron las pruebas con los siguientes terminales: Warp, kgx y Kitty. Siendo kgx la relativamente _nueva_ terminal de Gnome. A continuación, se presentan los resultados obtenidos:

| Terminal | Solo caracteres ASCII | Caracteres Unicode | Códigos CSI con pocos caracteres | Códigos de escape largos | Imágenes |
| -------- | --------------------- | ------------------ | -------------------------------- | ------------------------ | -------- |
| Warp     | 3.45                  | 3.48               | 2.59                             | 8.21                     | 2.75     |
| kgx      | 1.28                  | 1.67               | 3.05                             | 5.37                     | 3.46     |
| Kitty    | 3.29                  | 3.04               | 1.67                             | 2.4                      | 1.81     |

En esta tabla, cada columna representa diferentes tipos de datos. La columna CSI es para datos que consisten en una combinación de códigos de escape de formato típicos y algo de texto solo ASCII.

<div id="linuxCharts" style="height: 600px; width: 100%;"></div>

## Conclusión

Los resultados de nuestra comparativa demuestran que Kitty destaca en términos de rendimiento en ambos sistemas operativos. Con tiempos de procesamiento más rápidos y una menor latencia, Kitty ofrece una experiencia superior en la mayoría de las métricas evaluadas. Si buscas un emulador de terminal que priorice el rendimiento, Kitty es una opción sólida tanto en MacOS como en GNU/Linux.

<script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
