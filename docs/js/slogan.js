window.addEventListener("load", () => {
    $("#slogan").vegas({
        transition: "fade", // transition type between slides like fading
        animation: "kenburns", // animation of zooming
        slides: [ // array of slides
            { src: "./data/images/main/main-background.jpg" }, // Path of the image.
            { src: "./data/images/main/main-background-3.png" }, // Path of the image.
            { src: "./data/images/main/main-background-6.jpeg"}, // Path of the image.
            { src: "./data/images/main/main-background-7.jpeg"} // Path of the image.
        ],
        overlay: './lib/vegas/overlays/06.png' // overlay 
    })
})