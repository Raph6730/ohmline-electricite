/* Menu latéral, commun aux 3 pages */
(function(){
  const d=document.getElementById("drawer"), o=document.getElementById("drawer-overlay");
  const openB=document.getElementById("menu-open"), closeB=document.getElementById("menu-close");
  if(!d||!openB) return;
  const page=(location.pathname.split("/").pop()||"index.html").replace(".html","")||"index";
  d.querySelectorAll("[data-page]").forEach(a=>{ if(a.dataset.page===page) a.setAttribute("aria-current","page"); });
  const open=()=>{ o.hidden=false; requestAnimationFrame(()=>{ d.classList.add("open"); o.classList.add("open"); });
    d.setAttribute("aria-hidden","false"); openB.setAttribute("aria-expanded","true"); document.body.style.overflow="hidden"; closeB.focus(); };
  const close=()=>{ d.classList.remove("open"); o.classList.remove("open"); d.setAttribute("aria-hidden","true");
    openB.setAttribute("aria-expanded","false"); document.body.style.overflow=""; setTimeout(()=>{o.hidden=true},250); };
  openB.addEventListener("click",open); closeB.addEventListener("click",close); o.addEventListener("click",close);
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&d.classList.contains("open")) close(); });
  d.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
})();
