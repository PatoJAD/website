// define some global variables
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
    searchResultsList.innerHTML = "";
    results.forEach((el, i) => {
        const template = document.createRange().createContextualFragment(`
          <div class="col-6">
            <a href="${el.item.permalink}" title="${el.item.title}" >
              <div class="row g-0">
                <div class="col-md-6">
                  <img
                    src="${el.item.imagen}"
                    class="img-fluid rounded-start"
                    alt="${el.item.title}"
                    title="${el.item.title}"/>
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">${el.item.title}</h5>
                  </div>
                </div>
                <span class="label">

                </span>
              </div>
            </a>
          </div>
        `);
        searchResultsList.appendChild(template);
    });
};

const executeSearch = (searchQuery) => {
    if (!searchQuery) {
        return;
    }
    const fuseResult = fuse.search(searchQuery);
    showResultsBox();

    if(fuseResult.length > 0){
        displayResults(fuseResult);
        showResultsBox();
        showResultsList();
        hideResultsAlert();
    }else{
        showResultsBox();
        hideResultsList();
        showResultsAlert();
    }
};

const initializeSearch = () => {
    const request = new XMLHttpRequest();

    request.open('GET', searchDataURL, true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        searchIndex = JSON.parse(this.response);
        fuse = new Fuse(searchIndex, fuseOptions);
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
            hideResultsBox();
        } else {
            executeSearch(value);
        }
    });
});
