var fuse;
var showButton = document.getElementById("search-button");
var showButtonMobile = document.getElementById("search-button-mobile");
var hideButton = document.getElementById("close-search-button");
var wrapper = document.getElementById("search-wrapper");
var modal = document.getElementById("search-modal");
var input = document.getElementById("search-query");
var output = document.getElementById("search-results");
var first = output.firstChild;
var last = output.lastChild;
var searchVisible = false;
var indexed = false;
var hasResults = false;
var closeDelayMs = 300;
var closeTimer;

// Listen for events
showButton ? showButton.addEventListener("click", displaySearch) : null;
showButtonMobile ? showButtonMobile.addEventListener("click", displaySearch) : null;
hideButton.addEventListener("click", hideSearch);
wrapper.addEventListener("click", hideSearch);
modal.addEventListener("click", function (event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
});
document.addEventListener("keydown", function (event) {
  // Forward slash to open search wrapper
  if (event.key == "/") {
    if (!searchVisible) {
      event.preventDefault();
      displaySearch();
    }
  }

  // Esc to close search wrapper
  if (event.key == "Escape") {
    hideSearch();
  }

  // Navegación por teclado entre las cards de resultados
  if (searchVisible && hasResults && (event.key == "ArrowDown" || event.key == "ArrowUp" || event.key == "Enter")) {
    var links = Array.prototype.slice.call(output.querySelectorAll("a[data-result]"));
    if (links.length) {
      var idx = links.indexOf(document.activeElement);
      if (event.key == "ArrowDown") {
        event.preventDefault();
        (idx < 0 ? links[0] : links[Math.min(idx + 1, links.length - 1)]).focus();
      } else if (event.key == "ArrowUp") {
        event.preventDefault();
        if (idx <= 0) input.focus(); else links[idx - 1].focus();
      } else { // Enter
        event.preventDefault();
        if (document.activeElement == input) links[0].focus();
        else document.activeElement.click();
      }
    }
  }

});

// Update search on each keypress
input.onkeyup = function (event) {
  executeQuery(this.value);
};

function displaySearch() {
  if (!indexed) {
    buildIndex();
  }
  if (!searchVisible) {
    document.body.style.overflow = "hidden";
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = undefined;
    }
    wrapper.classList.remove("invisible", "pointer-events-none", "opacity-0");
    wrapper.classList.add("opacity-100");
    requestAnimationFrame(function () {
      modal.classList.remove("opacity-0", "translate-y-4");
      modal.classList.add("opacity-100", "translate-y-0");
    });
    input.focus();
    searchVisible = true;
  }
}

function hideSearch() {
  if (searchVisible) {
    document.body.style.overflow = "visible";
    modal.classList.remove("opacity-100", "translate-y-0");
    modal.classList.add("opacity-0", "translate-y-4");
    wrapper.classList.remove("opacity-100");
    wrapper.classList.add("opacity-0");
    closeTimer = window.setTimeout(function () {
      wrapper.classList.add("invisible", "pointer-events-none");
    }, closeDelayMs);
    input.value = "";
    output.innerHTML = "";
    document.activeElement.blur();
    searchVisible = false;
  }
}

function fetchJSON(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

function loadFuse(cb) {
  if (window.Fuse) { cb(); return; }
  var s = document.createElement("script");
  s.src = window.__fuseSrc;
  s.onload = cb;
  document.head.appendChild(s);
}

function buildIndex() {
  if (indexed || buildIndex.loading) return;
  buildIndex.loading = true;
  loadFuse(function () {
    var baseURL = wrapper.getAttribute("data-url");
    baseURL = baseURL.replace(/\/?$/, '/');
    fetchJSON(baseURL + "index.json", function (data) {
      var options = {
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.0,
      includeMatches: true,
      keys: [
        { name: "title", weight: 0.8 },
        { name: "summary", weight: 0.6 },
        { name: "content", weight: 0.4 },
      ],
    };
    /*var finalIndex = [];
    for (var i in data) {
      if(data[i].type != "users" && data[i].type != "tags" && data[i].type != "categories"){
        finalIndex.push(data[i]);
      }
    }*/
      fuse = new Fuse(data, options);
      indexed = true;
    });
  });
}

function executeQuery(term) {
  if (!fuse) return; // el índice todavía no cargó
  if (!term) { output.innerHTML = ""; hasResults = false; return; }
  var seen = {};
  let results = fuse.search(term).filter(function (v) {
    var p = v.item.permalink;
    if (seen[p]) return false;
    seen[p] = true;
    return true;
  }).slice(0, 30);
  let resultsHTML = "";

  if (results.length > 0) {
    results.forEach((value) => {
      var item = value.item;
      var div = document.createElement("div");
      div.innerHTML = item.summary || "";
      var summary = div.textContent || div.innerText || "";
      var title = item.externalUrl
        ? item.title + '<span class="text-xs ml-2 align-middle text-fuchsia-400">' + item.externalUrl + "</span>"
        : item.title;
      var linkconfig = item.externalUrl
        ? 'target="_blank" rel="noopener" href="' + item.externalUrl + '"'
        : 'href="' + item.permalink + '"';
      var media = item.img
        ? '<img src="' + item.img + '" alt="" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">'
        : '<div class="w-full h-full bg-gradient-to-br from-fuchsia-700/30 to-zinc-800"></div>';
      resultsHTML +=
        '<a data-result ' + linkconfig + ' tabindex="0" class="group background card-glow rounded-xl overflow-hidden flex flex-col">' +
          '<div class="aspect-video overflow-hidden bg-zinc-800/50">' + media + "</div>" +
          '<div class="p-4 flex flex-col grow">' +
            '<h3 class="text-base font-bold text-white group-hover:text-fuchsia-400 transition-colors line-clamp-2">' + title + "</h3>" +
            '<p class="text-sm text-white/60 line-clamp-2 mt-1 grow">' + summary + "</p>" +
            (item.date ? '<span class="text-xs text-white/50 mt-3"><em class="fas fa-calendar mr-1" aria-hidden="true"></em>' + item.date + "</span>" : "") +
          "</div>" +
        "</a>";
    });
    hasResults = true;
  } else {
    var safeTerm = String(term).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
    resultsHTML =
      '<div class="text-center py-12 text-white/60" style="grid-column: 1 / -1">' +
      '<em class="fas fa-search text-3xl text-white/30 mb-3 block" aria-hidden="true"></em>' +
      'Sin resultados para «<span class="text-white/80 font-semibold">' + safeTerm + '</span>»' +
      '</div>';
    hasResults = false;
  }

  output.innerHTML = resultsHTML;
}