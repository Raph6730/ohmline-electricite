/* Script commun aux pages Réalisations et Elax */
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  /* thème clair / sombre (même réglage que la page d'accueil) */
  const root = document.documentElement;
  try{ const t = localStorage.getItem("ohm-theme"); if(t) root.dataset.theme = t; }catch(e){}
  const tb = $("#theme");
  if(tb) tb.addEventListener("click", ()=>{
    const dark = root.dataset.theme ? root.dataset.theme==="dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try{ localStorage.setItem("ohm-theme", root.dataset.theme); }catch(e){}
  });

  /* apparition douce au défilement */
  const els = $$(".reveal");
  if(!("IntersectionObserver" in window)) els.forEach(e=>e.classList.add("in"));
  else {
    const io = new IntersectionObserver(en=>en.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target); } }),{threshold:.08});
    els.forEach(e=>io.observe(e));
  }

  /* agrandissement des photos */
  const lb = $("#lightbox");
  if(lb){
    document.addEventListener("click", e=>{
      const b = e.target.closest("[data-zoom]"); if(!b) return;
      $("img",lb).src = b.dataset.zoom; $("img",lb).alt = b.dataset.t || ""; $("p",lb).textContent = b.dataset.t || "";
      lb.classList.add("open"); $("button",lb).focus();
    });
    const close = ()=> lb.classList.remove("open");
    lb.addEventListener("click", e=>{ if(e.target===lb || e.target.closest("button")) close(); });
    document.addEventListener("keydown", e=>{ if(e.key==="Escape") close(); });
  }

  /* filtres de la galerie */
  const f = $("#filters");
  if(f) f.addEventListener("click", e=>{
    const b = e.target.closest(".chip"); if(!b) return;
    $$(".chip",f).forEach(c=>c.setAttribute("aria-pressed", c===b));
    $$(".photo-card").forEach(c=> c.hidden = !(b.dataset.cat==="Tout" || c.dataset.cat===b.dataset.cat));
    const n = $$(".photo-card").filter(c=>!c.hidden).length;
    const cnt = $("#count"); if(cnt) cnt.textContent = n + (n>1 ? " réalisations" : " réalisation");
  });

  const y = $("#year"); if(y) y.textContent = new Date().getFullYear();
})();
