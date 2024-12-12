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
    wrapper.style.visibility = "visible";
    input.focus();
    searchVisible = true;
  }
}

function hideSearch() {
  if (searchVisible) {
    document.body.style.overflow = "visible";
    wrapper.style.visibility = "hidden";
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
      var title = value.item.externalUrl ? value.item.title + '<span class="text-xs ml-2 align-center cursor-default text-amber-500">' + value.item.externalUrl + '</span>' : value.item.title;
      var linkconfig = value.item.externalUrl ? 'target="_blank" rel="noopener" href="' + value.item.externalUrl + '"' : 'href="' + value.item.permalink + '"';
      resultsHTML =
        resultsHTML +
        `<div class="mb-2 bg-cover bg-center bg-no-repeat p-3 rounded-xl" style="background-image: url(${value.item.img});" id="result-${key}">
          <a class="flex items-center px-3 py-2 rounded-md appearance-none bg-gray-200 dark:bg-gray-900 focus:outline-dotted focus:outline-transparent focus:outline-2 opacity-80" 
          ${linkconfig} tabindex="0">
            <div class="grow">
              <div class="-mb-1 text-lg font-bold text-amber-500">
                ${title}
              </div>
              <div class="text-sm text-gray-500"><span class="px-2 text-amber-500"><em class="fas fa-calendar"></em></span>${value.item.date ? value.item.date : ""}</span></div>
              <div class="text-sm italic">${value.item.summary}</div>
            </div>
            <div class="ml-2 ltr:block rtl:hidden text-gray-500">&rarr;</div>
            <div class="mr-2 ltr:hidden rtl:block text-gray-500">&larr;</div>
          </a>
        </div>`;
    });
    hasResults = true;
  } else {
    resultsHTML = "";
    hasResults = false;
  }

  output.innerHTML = resultsHTML;
  if (results.length > 0) {
    first = output.firstChild.firstElementChild;
    last = output.lastChild.firstElementChild;
  }
}