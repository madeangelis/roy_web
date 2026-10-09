/* Dibuja videos y premios a partir de js/data.js.
   No hace falta tocar este archivo para agregar contenido. */
(function () {
  var data = window.SITE_DATA || {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Acepta un ID o una URL completa de YouTube y devuelve solo el ID
  function youtubeId(value) {
    var v = String(value || "").trim();
    var m = v.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/);
    return m ? m[1] : v.split("?")[0];
  }

  function videoItem(v) {
    return (
      '<div class="col-md-4 col-sm-6">' +
        '<div class="portfolio-item" data-video="' + esc(youtubeId(v.id)) + '">' +
          '<div class="thumb"><div class="image">' +
            '<img src="./img/' + esc(v.img) + '" alt="' + esc(v.title) + '" />' +
            '<div class="overlay"><img src="./img/play_button.png" alt="Play button" /></div>' +
          "</div></div>" +
        "</div>" +
      "</div>"
    );
  }

  function awardItem(a) {
    return (
      '<div class="col-12 col-xs-6 col-md-3">' +
        '<div class="award-wrapper text-center">' +
          '<a href="' + esc(a.url) + '" target="_blank" rel="noopener noreferrer">' +
            '<img src="./img/awards/' + esc(a.img) + '" alt="' + esc(a.title) + ' logo" />' +
          "</a>" +
        "</div>" +
      "</div>"
    );
  }

  // Cada contenedor indica qué lista usar: data-videos="videos" | data-awards="awards"
  document.querySelectorAll("[data-videos]").forEach(function (el) {
    el.innerHTML = (data[el.getAttribute("data-videos")] || []).map(videoItem).join("");
  });
  document.querySelectorAll("[data-awards]").forEach(function (el) {
    el.innerHTML = (data[el.getAttribute("data-awards")] || []).map(awardItem).join("");
  });
})();
