'use strict';
/* Glassdeck site: point the main button at the right download, draw the ridgelines, play clips only while seen. */
(function () {
  const BASE = 'https://github.com/arjun-nair1090/glassdeck-releases/releases/latest/download/';
  const FILES = {
    win: ['Glassdeck-Setup.exe', 'Download for Windows', 'Windows 10 and 11. Free, about 20 MB.'],
    'mac-arm': ['Glassdeck-mac-arm64.dmg', 'Download for Mac', 'For Macs with Apple Silicon (M1 or later). Free.'],
    'mac-intel': ['Glassdeck-mac-intel.dmg', 'Download for Intel Mac', 'For Macs with an Intel processor. Free.'],
  };

  function guessOS() {
    const ua = navigator.userAgent || '';
    const plat = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    if (/iPhone|iPad|iPod|Android/i.test(ua)) return 'phone';
    if (/Win/i.test(plat) || /Windows/i.test(ua)) return 'win';
    if (/Mac/i.test(plat) || /Macintosh/i.test(ua)) {
      // Browsers report "Intel" on every Mac; the WebGL renderer names the real chip.
      try {
        const gl = document.createElement('canvas').getContext('webgl');
        const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
        const r = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '';
        if (/Intel|AMD|Radeon/i.test(r) && !/Apple/i.test(r)) return 'mac-intel';
      } catch (e) { /* fall through */ }
      return 'mac-arm';
    }
    return '';
  }

  const os = guessOS();
  const btn = document.getElementById('dl-main');
  const note = document.getElementById('dl-note');
  if (FILES[os]) {
    const [file, label, text] = FILES[os];
    btn.href = BASE + file;
    btn.textContent = label;
    note.innerHTML = text + ' <a href="#downloads">Other downloads</a>';
    const row = document.querySelector('.dl-list [data-os="' + os + '"]');
    if (row) row.classList.add('mine');
  } else if (os === 'phone') {
    note.textContent = 'Glassdeck installs on your computer. Open this page there; your phone connects to it after.';
  }

  // Version from the latest release, so the page never goes stale.
  fetch('https://api.github.com/repos/arjun-nair1090/glassdeck-releases/releases/latest')
    .then(r => (r.ok ? r.json() : null))
    .then(j => {
      if (!j || !j.tag_name) return;
      const v = j.tag_name.replace(/^v/, '');
      const d = new Date(j.published_at);
      const when = isNaN(d) ? '' : ', released ' + d.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
      document.getElementById('dl-version').textContent =
        'Version ' + v + when + '. Free, with no account and no ads. Glassdeck updates itself when a new version is out.';
    })
    .catch(() => {});

  // Ridgelines behind the phone, the same contour field as the app icon and the tour's last shot.
  const svg = document.getElementById('ridges');
  if (svg) {
    const W = 1600, H = 500, N = 16, paths = [];
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1);
      const y0 = 40 + (H - 50) * k;
      const amp = 40 + 95 * k;
      // peaks either side of the phone, so they show around it
      const a = W * (0.12 + 0.03 * Math.sin(i * 1.3)), b = W * (0.88 + 0.03 * Math.cos(i * 1.1));
      const g = (x, c, w) => Math.exp(-(((x - c) / w) ** 2));
      let d = '';
      for (let x = -10; x <= W + 10; x += 10) {
        const y = y0 - amp * (g(x, a, W * 0.07) + 0.8 * g(x, b, W * 0.09) + 0.3 * g(x, W * 0.5, W * 0.2));
        d += (x < 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1);
      }
      paths.push('<path d="' + d + '" style="opacity:' + (0.35 + 0.65 * k).toFixed(2) + '"/>');
    }
    svg.innerHTML = paths.join('');
  }

  // Clips play while on screen, unless the visitor prefers less motion (then the posters stay).
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vids = document.querySelectorAll('video.auto');
  if (!still && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        const v = e.target;
        if (e.isIntersecting) {
          if (v.preload === 'none') v.preload = 'auto';
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      }
    }, { threshold: 0.35 });
    vids.forEach(v => io.observe(v));
  }
})();
