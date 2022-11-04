---
title: "Hugo CMS - Un Buscador en nuestro sitio"
date: "2020-06-11 08:14:00"
description: "Nuevamente gracias a Tehuel traemos un buscador para nuestro sitio, es completamente funcional y muy útil"
type: "programacion"
tags: ["hugo","cms","search","buscador"]
category: ["Programacion"]
img: "https://i.postimg.cc/50tTSNG2/mqdefault.jpg"
authors: ["PatoJAD"]
---

En este video vamos a ver como agregar un buscador a nuestro sitio web con Hugo CMS algo realmente util para que nuestros usuarios busquen con facilidad




## Video


{{< youtube code="-IGOrQpXVM8" >}}



## Info Util



Voy a dejar a mano los *codigos* que usamos a lo largo del video por si no se llegan a ver bien en el mismo por la velocidad.  



*Imports en footer*

    <script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.4.5/fuse.min.js">
    </script>
    <script src="/js/search.js"></script>



*search.html* (En este caso el aside y demas son por estilos del theme)

    <aside class="single_sidebar_widget search_widget">
      <form action="#">
        <div id="search-section" class="form-group">
          <div id="search-form" class="input-group mb-3">
            <input
              id="search-input"
              type="text"
              class="form-control"
              placeholder='Busqueda'>
            <div class="input-group-append">
              <button class="btn" type="button">
                <em class="fa fa-search" aria-hidden="true"></em>
              </button>
            </div>
          </div>
        </div>
        <div id="search-results-box">
          <ul class="unordered-list" id="search-results-list"></ul>
          <div id="search-results-noresults" class="notification is-info">
            No se encontraron resultados.
          </div>
        </div>
      </form>
    </aside>




*search.js*

    let searchDataURL = "/index.json";
    let searchResultsBox = document.querySelector("#search-results-box");
    let searchResultsList = document.querySelector("#search-results-list");
    let searchResultsAlert = document.querySelector("#search-results-noresults");
    let searchIndex = null;
    let fuse = null
    let fuseOptions = {
      shouldSort: true,
      includeMatches: true,
      threshold: 0.0,
      tokenize:true,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {name:"title",weight:0.8},
        {name:"contents",weight:0.5},
      ]
    };

    // define some utilitary functions
    const hideResultsBox = () => {
        searchResultsBox.style.display = 'none';
    };

    const showResultsBox = () => {
        searchResultsBox.style.display = '';
    };

    const hideResultsList = () => {
        searchResultsList.style.display = 'none';
    };

    const showResultsList = () => {
        searchResultsList.style.display = '';
    };

    const hideResultsAlert = () => {
        searchResultsAlert.style.display = 'none';
    };

    const showResultsAlert = () => {
        searchResultsAlert.style.display = '';
    };

    const displayResults = (results) => {
        // console.warn(results);
        searchResultsList.innerHTML = "";
        results.forEach((el, i) => {
            var template = document.createRange().createContextualFragment(`<li><a href="${el.item.permalink}"><span class="is-size-6">${el.item.title}</span></a></li>`);
            searchResultsList.appendChild(template);
        });
    };

    const executeSearch = (searchQuery) => {
        // console.log("executeSearch", searchQuery);
        if (!searchQuery) {
            return;
        }
        var fuseResult = fuse.search(searchQuery);
        showResultsBox();

        if(fuseResult.length > 0){
            // console.log("display results");
            displayResults(fuseResult);
            showResultsBox();
            showResultsList();
            hideResultsAlert();
        }else{
            // console.log("display no results");
            showResultsBox();
            hideResultsList();
            showResultsAlert();
        }
    };

    const initializeSearch = () => {
        var request = new XMLHttpRequest();

        request.open('GET', searchDataURL, true);
        request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            searchIndex = JSON.parse(this.response);
            fuse = new Fuse(searchIndex, fuseOptions);
            // console.log("search initialized");
          }
        };
        request.send();
        hideResultsBox();
    }

    // initialize search on "DOMContentLoaded"
    document.addEventListener("DOMContentLoaded", function(event) {
        initializeSearch();
        document.querySelector('#search-input').addEventListener("input", function(event){
            let value = event.target.value;
            if (!value) {
                // console.log("closes search results list");
                hideResultsBox();
            } else {
                executeSearch(value);
            }
        });
    });






*index.json*

    {{- $.Scratch.Add "index" slice -}}
    {{- range .Site.RegularPages -}}
        {{- $.Scratch.Add "index" (dict "title" .Title "contents" .Plain "permalink" .Permalink) -}}
    {{- end -}}
    {{- $.Scratch.Get "index" | jsonify -}}





*config.toml*

    [outputs]
      page = ["HTML"]
      section = ["HTML"]
      home = ["JSON","HTML","RSS"]





---



Recorda **apoyarnos** en nuestras redes para poder seguir adelante con todo lo que implica PatoJAD es un proyecto que poco a poco crece e intenta estar al lado de todos de los usuarios dándoles dia a dia herramientas o funcionalidades. Mostranos tu apoyo con pequeños gestos, desactivando el bloqueador de anuncios, apoyándonos en las redes sociales, donando o compartiendo el contenido, esto solo es posible gracias a cada lector y cada persona que demuestra su agradecimiento
