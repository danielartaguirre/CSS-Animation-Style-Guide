/*  No production JS required – CSS handles initial animations */


/* =====  DEV‑ONLY JS – keep inline on style‑guide page  ===== */
(() => {
  const map = {
    'fade-in': 'fadeIn',
    'slide-up': 'slideUp',
    'slide-left': 'slideLeft',
    'slide-right': 'slideRight'
  };
  const selector = Object.keys(map).map(c=>'.'+c).join(',');

  function replay(container){
    const items = container.querySelectorAll(selector);
    items.forEach((el,i)=>{
      const cls = [...el.classList].find(c=>map[c]);
      if(!cls) return;
      el.style.animation='none';
      void el.offsetWidth;
      el.style.animation = `${map[cls]} .8s ease-out forwards`;
      el.style.animationDelay = `${i*0.25}s`;
    });
  }


document.querySelectorAll('.play-btn').forEach(btn=>{
  btn.addEventListener('click', () => replay(btn.parentElement));
});


  window.addEventListener('load',()=>{
    document.querySelectorAll('.dev-sandbox .dev-row').forEach(replay);
  });
})();
