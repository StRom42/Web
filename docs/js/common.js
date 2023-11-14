( function() {
    function underlineCurrentLink(path2button) {
    let currentLocation = document.location.href;

    for (const [path, linkElem] of Object.entries(path2button)) {
        if (currentLocation.endsWith(path)) {
            linkElem.classList.add("current-link");
            break;
        }
    }
}

function doWhenWindowLoaded() {
    let path2button = {
        "artists.html": document.getElementsByClassName("artist-link")[0],
        "catalog.html": document.getElementsByClassName("catalog-link")[0],
        "delivery.html": document.getElementsByClassName("delivery-link")[0]
    };

    underlineCurrentLink(path2button);
}

window.addEventListener('load', doWhenWindowLoaded);

}());

(function() {

    window.addEventListener('load', function () {
        let time = performance.measure("time-measure").duration;

        this.document.getElementById("speedtest-holder").textContent = `Loading speed is ${time} ms`
    });
  }());