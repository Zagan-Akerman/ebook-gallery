/* ============================================================
       DATOS — Edita este array para agregar o modificar ebooks.

       Campos:
         title       — Título del ebook (obligatorio)
         description — Descripción corta (obligatorio)
         year        — Año de publicación (número)
         pages       — Número de páginas (número)
         cover       — Ruta a la imagen de portada, ej: "covers/mi-libro.jpg"
                       Deja "" para mostrar el ícono placeholder.
         links       — Array de botones. Cada uno tiene:
                         url    — Enlace (Drive, Dropbox, web, PDF, etc.)
                         type   — "download" | "view" | "buy"
                         label  — Texto del botón, ej: "Descargar", "Ver online", "Comprar"
    ============================================================ */
const ebooks = [
  {
    title: "Torchbound: El caballero & La sombra",
    description:
      "Un caballero armado con una antorcha debe atravesar una peligrosa mazmorra antes de que la oscuridad lo envuelva todo a su paso. Un juego de papel simple. Proyecto realizado para el curso Introducción al diseño de juegos de CalArts en Coursera.",
    year: 2026,
    pages: 14,
    cover:
      "img/torchbound.png",
    links: [
      {
        url: "https://codepen.io/Zagan-Akerman/full/ByLYjzM",
        type: "view",
        label: "Jugar demo"
      }
    ]
  },
    {
    title: "Sketchbook 2025",
    description:
      "35 ilustraciones realizadas durante 2025 y 2026 como parte de mi sketchbook anual. Una recopilación de ideas, ejercicios y exploraciones gráficas desarrolladas mediante diferentes técnicas.",
    year: 2026,
    pages: 42,
    cover: "img/Sketchbook2025.png",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/gvfqkn3t6dyoycitll059/Sketchbook-2025.pdf?rlkey=xrfbbhrpy33f6hojanayoauzq&st=qy2yun1h&dl=0",
        type: "download",
        label: "Descargar"
      },
      {
        url: "https://youtu.be/NaGC4omNDsA",
        type: "video",
        label: "Ver en video"
      }
    ]
  },
  {
    title: "Pelo de verduras",
    description:
      "En la escuela Valverde, los niños detestan las verduras, hasta que una bruja cocinera les da una lección mágica que les pondrá los pelos de punta. Pelo de Verduras es una divertida historia sobre probar cosas nuevas y descubrir lo delicioso de lo inesperado.",
    year: 2025,
    pages: 36,
    cover: "img/Pelo_de_Verduras.png",
    links: [
      {
        url: "https://pelodeverduras.carrd.co/",
        type: "view",
        label: "Ver sitio web"
      },
      {
        url: "https://youtu.be/7sL_FSszJf4",
        type: "video",
        label: "Ver en video"
      }
    ]
  },
  {
    title: "Portafolio 2025",
    description:
      "Una colección de proyectos que reúne mi trabajo reciente en diseño, ilustración y exploración visual.",
    year: 2025,
    pages: 34,
    cover: "img/Portafolio-2025.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/26eniup58dx4z809hjfy9/Portafolio-D-Nicolas-Garcia-Barrera-2025.pdf?rlkey=lf7t523pjwdgcxfie75lvj9bm&e=1&st=b1evbk3c&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
    {
    title: "Guardianes de Tinto Terra",
    description:
      "Fanzine que cuenta la historia de los Guardianes del café y el té. Una colaboración con Tinto Cósmico con ocasión del SOFA2024 y su iniciativa de Ciudad de artistas.",
    year: 2024,
    pages: 16,
    cover: "img/guadianes_tinto_terra.png",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/j4j9hehvjrhmhpn6b1qub/Guardianes_de_Tintoterra.pdf?rlkey=y9twzclg2n2cnfj01iiifcr9d&st=00jofx3d&dl=0",
        type: "download",
        label: "Descargar"
      },
        {
        url: "https://www.instagram.com/tintocosmico/",
        type: "view",
        label: "Ver sitio web"
      }
    ]
  },
  {
    title: "Sketchbook 2024",
    description:
      "98 ilustraciones realizadas a lo largo de 2024 como parte de mi cuaderno de dibujo anual. Un registro visual de ideas, experimentos y momentos del año.",
    year: 2024,
    pages: 106,
    cover: "img/Sketchbook2024.png",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/kqucq6ond3gclmzjdzlsr/Sketchbook-2024.pdf?rlkey=gmyyr6olrov6spn411xths0cq&st=bqe8p1es&dl=0",
        type: "download",
        label: "Descargar"
      },
      {
        url: "https://youtu.be/nxSaKC1murc",
        type: "video",
        label: "Ver en video"
      }
    ]
  },
  {
    title: "Ink 2023",
    description:
      "31 exploraciones en tinta a partir de palabras, historias y referencias. Una colección marcada especialmente por la obra de Roald Dahl, Perrault y H. G. Wells.",
    year: 2023,
    pages: 68,
    cover: "img/ink2023.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/fv5vu55j9r4e0nqz2scda/Ink2023-Nicolas-Garcia-Barrera.pdf?rlkey=3yvsjbgt42qwao8o03zdw1sni&st=38jnkm95&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
  {
    title: "Ink 2022",
    description:
      "Palabras, textos e imágenes convertidos en 31 dibujos a tinta. Un año especialmente influenciado por la obra de Lovecraft, Matheson y el Heavy metal.",
    year: 2022,
    pages: 68,
    cover: "img/ink2022.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/n1efqrv4d26dwuhdlh5ob/Ink2022-Nicolas-Garcia-Barrera.pdf?rlkey=my2gkqso2f3oz98h4kyetelpd&st=n2tmtwsd&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
  {
    title: "Ink 2021",
    description:
      "Un recorrido de 31 ilustraciones construidas a partir de palabras, historias y referencias visuales, con Ray Bradbury, L. Frank Baum y Baudelaire como las principales influencias.",
    year: 2021,
    pages: 68,
    cover: "img/ink2021.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/1selhtx2d26szefaw04px/Ink2021-Nicolas-Garcia-Barrera.pdf?rlkey=31dtxp4xcde15jt9o3ngo8c9f&st=iqxblvnw&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
  {
    title: "Ink 2020",
    description:
      "31 días de tinta, interpretación y experimentación. Una colección atravesada por distintas referencias, entre ellas la obra de Tolkien, Orwell y King.",
    year: 2020,
    pages: 68,
    cover: "img/ink2020.png",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/2z3a5zxcvh05amvmfn0nz/Ink2020-Nicolas-Garcia-Barrera.pdf?rlkey=avtrc7trnrs4v5fqti1nmfrr2&st=ls5zq2r8&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
  {
    title: "Ink 2019",
    description:
      "Mi primer Inktober: un punto de partida para explorar la tinta a través de palabras, historias y referencias. Una colección de 31 ilustraciones que dio inicio a esta serie.",
    year: 2019,
    pages: 68,
    cover: "img/ink2019.png",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/yv6mzae691gx5oteumzfm/Ink2019-Nicolas-Garcia-Barrera.pdf?rlkey=qswvqz7munfbz6em4p39eq4dm&st=vbrksmk2&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  },
  {
    title: "El ABC del Metal",
    description:
      "Un abecedario ilustrado que recorre el metal a través de algunas de sus bandas más representativas, desde sus clásicos hasta sus distintas vertientes y sonidos.",
    year: 2019,
    pages: 57,
    cover: "img/abc_del_metal.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/p1x099vw70vaxdifyj5no/El-ABC-del-Metal_Nicolas-Garcia-Barrera.pdf?rlkey=x0bvwqb15z5jrptec8pd3hbie&st=tqz7qv60&dl=0",
        type: "download",
        label: "Descargar"
      },
      {
        url: "https://youtu.be/WLF23wocaqU",
        type: "video",
        label: "Ver en video"
      }
    ]
  },
  {
    title: "Zuze & Zagan: Volando sin paracaídas",
    description:
      "La primera recopilación de las aventuras de Zuze & Zagan en un solo volumen. Una colección que reúne sus historias y añade bocetos, curiosidades y material extra.",
    year: 2018,
    pages: 168,
    cover:
      "img/zuze_y_zagan_volando_sin_paracaidas.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/l05rnbr7esjg75tes7yzo/Zuze-Zagan-Volando-sin-paraca-das.pdf?rlkey=pnuxxledrt21regzj0vkrr4bd&st=h6knlbvh&dl=0",
        type: "download",
        label: "Descargar"
      },
        {
        url: "https://zuzeyzagan.tumblr.com/",
        type: "view",
        label: "Ver sitio web"
      }
    ]
  },
  {
    title: "Zuze & Zagan: Piedras y Estrellas",
    description:
      "La primera aventura de Zuze & Zagan en formato cómic: 21 páginas a todo color para descubrir cómo empezó todo.",
    year: 2017,
    pages: 21,
    cover: "img/zuze_y_zagan_comic.jpg",
    links: [
      {
        url: "https://www.dropbox.com/scl/fi/bwp5thkxglm8aqtliaks9/Zuze-Zagan-Comic-01.pdf?rlkey=xp7lec2mpodtcitbbhatk2fvn&st=bn6taqfu&dl=0",
        type: "download",
        label: "Descargar"
      }
    ]
  }
  /* Agrega más ebooks aquí siguiendo el mismo formato ↑ */
];

/* ============================================================
       ICONOS por tipo de botón
    ============================================================ */
const icons = {
  download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  view: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  buy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61H19a2 2 0 001.98-1.69L23 6H6"/></svg>`,
  video: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`
};

/* ============================================================
       RENDERIZADO — No necesitas editar nada debajo de esta línea.
    ============================================================ */
function buildCard(book) {
  const coverHTML = book.cover
    ? `<div class="card-cover-wrap"><img class="card-cover" src="${book.cover}" alt="Portada de ${book.title}" loading="lazy"></div>`
    : `<div class="card-cover-placeholder" aria-hidden="true">
             <div class="cover-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#9cc2ff" stroke-width="1.5" stroke-linecap="round">
                 <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
               </svg>
             </div>
           </div>`;

  const buttonsHTML = (book.links || [])
    .map(
      (link) => `
        <a class="btn-action btn-${link.type}" href="${link.url}" target="_blank" rel="noopener">
          ${icons[link.type] || ""}
          ${link.label}
        </a>`
    )
    .join("");

  return `
        <article class="ebook-card">
          ${coverHTML}
          <div class="card-body">
            <div class="card-meta">
              <span class="badge">${book.year}</span>
              <span class="badge">${book.pages} págs.</span>
            </div>
            <h2 class="card-title">${book.title}</h2>
            <p class="card-desc">${book.description}</p>
            <div class="card-footer">
              <div class="card-actions">${buttonsHTML}</div>
            </div>
          </div>
        </article>`;
}

document.getElementById("gallery").innerHTML = ebooks.map(buildCard).join("");
