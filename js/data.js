/* ==========================================================
   CONTENIDO DEL SITIO  (único archivo que hay que editar)
   ----------------------------------------------------------
   VIDEOS  -> se muestran en la grilla de index.html
     id    : ID de YouTube (o pegá la URL completa, también sirve)
     img   : nombre del archivo en /img  (ej: "bonie.jpg")
     title : nombre de la campaña (se usa como texto alternativo)

   PREMIOS -> se muestran en about.html
     img   : nombre del archivo en /img/awards
     title : nombre del festival
     url   : sitio web del festival

   Para agregar un item: copiá una línea, pegala al final de la
   lista y cambiá los valores. Para quitarlo: borrá la línea.
   El orden de la lista es el orden en pantalla.
   ========================================================== */

window.SITE_DATA = {
  // Grilla principal de index.html
  videos: [
    { id: "3Niyq7czhZY", img: "siemprevivas.jpg",    title: "Siempre vivas" },
    { id: "P8yvpqM_z-c", img: "super24cientas.jpg",  title: "Super24cientas" },
    { id: "465gBGueM5Y", img: "whopper_chase.jpg",   title: "Whopper Chase" },
    { id: "rBilOt9iRdQ", img: "bonie.jpg",           title: "Bonie" },
    { id: "dlbrQpf-DNU", img: "embajada.jpg",        title: "Embajada zona 18" },
    { id: "DXBeVJk_Re0", img: "irtra.jpg",           title: "IRTRA" },
    { id: "zix3XgDvb6U", img: "burger_king.png",     title: "DYMW?" },
    { id: "o_8oZz4srxI", img: "Lejitos.jpg",         title: "Lejitos" },
    { id: "eUoo12hnzSE", img: "volcan.jpg",          title: "Volcán" },
  ],

  // Sección "Retro" de index.html
  retro: [
    { id: "f1ZAnyLWMbA", img: "macromercdo.jpg",     title: "Macro mercado" },
    { id: "rMMq08eKSwM", img: "sabroson.png",        title: "Aceite Sabrosón" },
    { id: "r7BNhLTlBqE", img: "campero.jpg",         title: "Pollo Campero" },
    { id: "xLD9lVytOJ0", img: "shinny_lessons.jpg",  title: "Shiny Lessons" },
  ],

  // Logos de festivales en about.html
  awards: [
    { img: "premio1.jpg", title: "Cannes Lions",         url: "https://www.canneslions.com/" },
    { img: "premio2.jpg", title: "D&AD",                 url: "https://www.dandad.org/" },
    { img: "premio3.jpg", title: "El Sol",               url: "https://elsolfestival.com/" },
    { img: "premio4.jpg", title: "FIAP",                 url: "https://www.fiapawards.com/" },
    { img: "premio5.jpg", title: "Effie Latam",          url: "http://www.latameffie.com/" },
    { img: "premio6.jpg", title: "Ojo de Iberoamérica",  url: "https://www.elojodeiberoamerica.com/" },
    { img: "premio7.jpg", title: "Clio",                 url: "https://clios.com/" },
    { img: "premio8.jpg", title: "LIA",                  url: "https://www.liaawards.com/" },
  ],
};
