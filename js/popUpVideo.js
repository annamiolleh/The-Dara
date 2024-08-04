const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTlinks = document.querySelectorAll(".examples-work__block");
const YTPlayerPopup = document.querySelector(".youtube-player-popup iframe");
const YTPlayerClose = document.querySelector(".youtube-player-close");

YTlinks.forEach(link => {
    link.addEventListener("click", () => {
        YTPlayerOverlay.classList.add("active");
        let videoLink = `https://www.youtube.com/embed/${link.dataset.link}`;
        YTPlayerPopup.src = videoLink;
    });
});

YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});

YTPlayerClose.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});

const closePopup = () => {
    YTPlayerOverlay.classList.remove("active");
    YTPlayerPopup.src = "";  // Сбрасываем src, чтобы остановить видео
};

YTPlayerOverlay.addEventListener("click", closePopup);
YTPlayerClose.addEventListener("click", closePopup);