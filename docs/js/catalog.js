(function() {
    const URL = "https://jsonplaceholder.typicode.com/photos";
    const PRELOADER_ID = "catalog-preloader";
    const CATALOG_ROW_ID = "catalog-row";
    const HIDDEN_CLASS = "hidden";

    function buildCatalogItem(paintingData) {
        return `
            <div class="thumbnail quarter-col">
                <div class="thumbnail__photo">
                    <img src="${paintingData.thumbnailUrl}" alt="">
                </div>
                <div class="thumbnail__description text-part">
                    <div class="text-part__title">
                        <span><b>${paintingData.title}</b></span>
                    </div>
                </div>
            </div>
        `;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function fetchCagalogItems(size) {
        const start = Math.floor(Math.random() * 2000);
        const url = URL + `?_start=${start}&_limit=${size}`;
        return fetch(url);
    }

    function buildBadLoading() {
        return `
            <div class="alert-message">
                <span>Упс, что-то пошло не так и картины не прогрузились</span>
            </div>
        `
    }

    function hidePreloader() {
        let preloader = document.getElementById(PRELOADER_ID);
        if (!preloader.classList.contains(HIDDEN_CLASS)) {
            preloader.classList.add(HIDDEN_CLASS);
        }
    }

    function processCatalogItemsResponse(responseData) {
        hidePreloader();
    
        let catalog_row = document.getElementById(CATALOG_ROW_ID);
        catalogItems = "";
        responseData.forEach(element => {
            catalogItems += buildCatalogItem(element);
        });
        catalog_row.innerHTML = catalogItems;
    }
    
    function processReject(reason) {
        hidePreloader();

        let catalog_row = document.getElementById(CATALOG_ROW_ID);
        catalog_row.innerHTML = buildBadLoading();
    }
    
    async function loadCatalogItems() {
        try {
            await sleep(2000);
            const fetchResult = await fetchCagalogItems(40);
            const response = await fetchResult;
            if (response.ok) {
                const responseData = await response.json();
                processCatalogItemsResponse(responseData);
            } else {
                throw Error(response.statusText);
            }
        } catch (e) {
            processReject(e);
        }
    }

    window.addEventListener("load", (event) => {
        loadCatalogItems();
    });
})();