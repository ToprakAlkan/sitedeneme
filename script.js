document.getElementById("transferBtn").onclick = function () {
  window.open("transfer.html", "_blank");
};

document.getElementById("istatistikBtn").onclick = function () {
  window.open("istatistik.html", "_blank");
};

document.getElementById("temaBtn").onclick = function () {
    const root = document.documentElement;
  const styleId = 'dark-mode-style';

  function ensureStyle() {
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      html.dark-mode, body.dark-mode { background: #000 !important; color: #fff !important; }
      html.dark-mode a, body.dark-mode a { color: #ffffffff !important; }
      html.dark-mode input, html.dark-mode textarea, html.dark-mode select, html.dark-mode button { background: #111 !important; color: #fff !important; border-color: #333 !important; }
      html.dark-mode .card, html.dark-mode .box { background: #0a0a0a !important; border-color:#222 !important; }
    `;
    document.head.appendChild(style);
  }

  function setDarkMode(on) {
    if (on) {
      ensureStyle();
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', on ? '1' : '0');
  }

  const saved = localStorage.getItem('darkMode');
  if (saved === '1') setDarkMode(true);

  const temaBtn = document.getElementById("temaBtn");
  if (temaBtn) {
    temaBtn.addEventListener('click', function() {
      setDarkMode(!root.classList.contains('dark-mode'));
    });
  }
}

(function() {
  const root = document.documentElement;
  const styleId = 'dark-mode-style';

  function ensureStyle() {
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      html.dark-mode, body.dark-mode { background: #000 !important; color: #fff !important; }
      html.dark-mode a, body.dark-mode a { color: #ffffffff !important; }
      html.dark-mode input, html.dark-mode textarea, html.dark-mode select, html.dark-mode button { background: #111 !important; color: #fff !important; border-color: #333 !important; }
      html.dark-mode .card, html.dark-mode .box { background: #0a0a0a !important; border-color:#222 !important; }
    `;
    document.head.appendChild(style);
  }

  function toggleDarkMode() {
    const isDark = root.classList.toggle('dark-mode');
    if (isDark) ensureStyle();
  }

  const temaBtn = document.getElementById("temaBtn");
  if (temaBtn) temaBtn.addEventListener('click', toggleDarkMode);
})();