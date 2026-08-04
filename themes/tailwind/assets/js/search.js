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

  // Down arrow to move down results list
  if (event.key == "ArrowDown") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else if (document.activeElement == last) {
        last.focus();
      } else {
        document.activeElement.parentElement.nextSibling.firstElementChild.focus();
      }
    }
  }

  // Up arrow to move up results list
  if (event.key == "ArrowUp") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        input.focus();
      } else if (document.activeElement == first) {
        input.focus();
      } else {
        document.activeElement.parentElement.previousSibling.firstElementChild.focus();
      }
    }
  }

  // Enter to get to results
  if (event.key == "Enter") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else {
        document.activeElement.click();
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

function buildIndex() {
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
}

function executeQuery(term) {
  let results = fuse.search(term);
  let resultsHTML = "";

  if (results.length > 0) {
    results.forEach((value, key) => {
      var html = value.item.summary;
      var div = document.createElement("div");
      div.innerHTML = html;
      value.item.summary = div.textContent || div.innerText || "";
      var title = value.item.externalUrl ? value.item.title + '<span class="text-xs ml-2 align-center cursor-default text-fuchsia-700">' + value.item.externalUrl + '</span>' : value.item.title;
      var linkconfig = value.item.externalUrl ? 'target="_blank" rel="noopener" href="' + value.item.externalUrl + '"' : 'href="' + value.item.permalink + '"';
      resultsHTML =
        resultsHTML +
        `<div class="mb-2 bg-cover bg-center bg-no-repeat p-3 rounded-2xl" style="background-image: url(${value.item.img});" id="result-${key}">
          <a class="flex items-center px-3 py-2 rounded-2xl appearance-none background opacity-90 hover:opacity-100 transition-opacity"
          ${linkconfig} tabindex="0">
            <div class="grow">
              <div class="-mb-1 text-lg font-bold text-fuchsia-700">
                ${title}
              </div>
              <div class="text-sm text-white/60"><span class="px-2 text-fuchsia-700"><em class="fas fa-calendar" aria-hidden="true"></em></span>${value.item.date ? value.item.date : ""}</div>
              <div class="text-sm italic text-white/70">${value.item.summary}</div>
            </div>
            <div class="ml-2 ltr:block rtl:hidden text-white/50" aria-hidden="true">&rarr;</div>
            <div class="mr-2 ltr:hidden rtl:block text-white/50" aria-hidden="true">&larr;</div>
          </a>
        </div>`;
    });
    hasResults = true;
  } else {
    var safeTerm = String(term).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
    resultsHTML =
      '<div class="text-center py-10 text-white/60">' +
      '<em class="fas fa-search text-3xl text-white/30 mb-3 block" aria-hidden="true"></em>' +
      'Sin resultados para «<span class="text-white/80 font-semibold">' + safeTerm + '</span>»' +
      '</div>';
    hasResults = false;
  }

  output.innerHTML = resultsHTML;
  if (results.length > 0) {
    first = output.firstChild.firstElementChild;
    last = output.lastChild.firstElementChild;
  }
}