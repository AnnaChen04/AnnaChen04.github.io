/* Lightbox for figures, posters and photos. Progressive: without JS everything
   still renders, and posters/CV remain downloadable as ordinary links. */
(function () {
  var box = null;

  function close() {
    if (!box) return;
    box.remove();
    box = null;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) { if (e.key === 'Escape') close(); }

  function open(src, alt, allowZoom) {
    close();
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', alt || 'Enlarged image');

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';

    var btn = document.createElement('button');
    btn.className = 'lb-close';
    btn.type = 'button';
    btn.textContent = 'CLOSE ✕';
    btn.addEventListener('click', close);

    box.appendChild(img);
    box.appendChild(btn);

    if (allowZoom) {
      var hint = document.createElement('div');
      hint.className = 'lb-hint';
      hint.textContent = 'Click the image to zoom in · Esc to close';
      box.appendChild(hint);
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function (e) {
        e.stopPropagation();
        box.classList.toggle('zoomed');
        img.style.cursor = box.classList.contains('zoomed') ? 'zoom-out' : 'zoom-in';
        hint.textContent = box.classList.contains('zoomed')
          ? 'Scroll to explore · click to zoom out · Esc to close'
          : 'Click the image to zoom in · Esc to close';
      });
    }

    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-zoom]');
    if (!t) return;
    e.preventDefault();
    var src = t.getAttribute('data-zoom');
    var img = t.querySelector('img');
    open(src, t.getAttribute('data-zoom-alt') || (img && img.alt), t.hasAttribute('data-zoom-deep'));
  });

  // Mark the current page in the nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) a.setAttribute('aria-current', 'page');
  });
})();
