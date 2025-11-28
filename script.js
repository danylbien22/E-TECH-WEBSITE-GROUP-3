const projects = [
  { id:'proj-1', title:'Danyl Bien Narisma', subject:'', image:'images/bien/etech group 3.jpg', folder:'images/bien', galleryFiles: [
      'els.jpg',
      'els1.jpg',
      'etech ggg.jpg',
      'etech group 3.jpg',
      'etech ie.jpg',
      'kkomnampn.jpg',
      'kompaaannn.jpg',
      'kompaan.jpg',
      'kompan.jpg',
      'kompannit.jpg',
      'kompanot.jpg',
      'math lolol.jpg',
      'occ.jpg',
      'peh.jpg',
      'pehh.jpg',
      'prog cpt pt pt.jpg',
      'prog cpt pt.jpg',
      'prog cpt.jpg',
      'prog mp.jpg',
      'prog.jpg',
      'proggramming.jpg',
      'rob g.jpg',
      'ucsp.jpg'
    ], type:'Portfolio' },
  { id:'proj-2', title:'Yvho Andrei Tamondong', subject:'', image:'images/yvho/etech group 3.jpg', folder:'images/yvho', galleryFiles: [
      'els.jpg',
      'elss.jpg',
      'etech group 3.jpg',
      'etechhh.jpg',
      'kompan.jpg',
      'kompann.jpg',
      'math d.jpg',
      'math g ibo ace.jpg',
      'math g ibo aceg.jpg',
      'math.jpg',
      'occ.jpg',
      'peh.jpg',
      'pehh.jpg',
      'prog.jpg',
      'robottics.jpg',
      'ucsp g bo al.jpg',
      'uscp.jpg'
    ], type:'Portfolio' },
  { id:'proj-3', title:'Aldrin Sornilla', subject:'', image:'images/sornilla/etech group 3.jpg', folder:'images/sornilla', galleryFiles: [
      'etech group 3.jpg',
      'math.jpg',
      'mathh.jpg',
      'mathhh.jpg',
      'prog.jpg',
      'ucsp g bo al.jpg'
    ], type:'Portfolio' },
  { id:'proj-4', title:'Ace Carreon Gacelan', subject:'', image:'images/gacelan/etech group 3.jpg', folder:'images/gacelan', galleryFiles: [
      'ELS.jpg',
      'ETEC.jpg',
      'etech group 3.jpg',
      'math d.jpg',
      'math g ibo ace.jpg',
      'MATH.jpg',
      'OCC.jpg',
      'peh.jpg',
      'PROGRAM.jpg',
      'ROBOT.jpg',
      'ROBOTICS.jpg',
      'ROBOTT.jpg',
      'UCSP.jpg'
    ], type:'Portfolio' }
];

const SUBJECTS = ['GenMath','KomPan','OCC','Robotics','ETECH','Programming','ELS','PEH'];
const subjectsEl = document.getElementById('subjects');

function folderBase(folder){ if(!folder) return ''; const parts = folder.split('/'); return parts[parts.length-1]; }
function prettyLabel(s){ if(!s) return s; return s.replace(/[-_]/g,' ').replace(/\b\w/g,ch=>ch.toUpperCase()); }
const projectTabs = projects.map(p => ({ id: p.id, label: prettyLabel(folderBase(p.folder) || p.title) }));
let activeProjectId = projectTabs[0] ? projectTabs[0].id : null;

const subjectImageIndex = {};
const subjectTokens = {
  'genmath': ['math','genmath','mathd','math '],
  'kompan': ['kompan','kompaan','kompaa','kkomnampn','kompannit','kompanot','kompaaannn','kompaaannn','kompann'],
  'occ': ['occ','oral','oralcommunication','oral communication'],
  'robotics': ['robot','robotics','robott','robotg','robottics','rob'],
  'etech': ['etech','etec','etechgroup','etechg','etech group','etechgroup3','etechhh','etech g'],
  'programming': ['prog','program','programming','proggramming','prog cpt','prog cpt pt','prog mp'],
  'els': ['els'],
  'peh': ['peh']
};

const THEMES = [
  {
    id: 'white',
    label: 'White',
    variables: {
      '--bg': '#ffffff',
      '--text': '#111111',
      '--muted': '#6b7280',
      '--accent': '#0b6ef6',
      '--card': '#f8f9fb',
      '--border': '#eef2f6',
      '--btn-bg': '#ffffff',
      '--btn-color': '#0b6ef6',
      '--btn-border': 'transparent',
      '--chip-bg': '#f1f5fb',
      '--chip-color': '#0f172a',
      '--chip-border': 'rgba(15,23,42,0.08)',
      '--chip-active-bg': '#0b6ef6',
      '--chip-active-color': '#ffffff',
      '--hero-bg': 'linear-gradient(135deg,#f8fbff,#eef6ff)',
      '--modal-bg': '#ffffff',
      '--modal-border': '#e6eefb',
      '--modal-shadow': '0 10px 30px rgba(2,6,23,0.12)',
      '--bg-gradient': 'linear-gradient(120deg,#f8fbff 0%, #eef6ff 30%, #fff7fb 60%, #f5fbff 100%)',
      '--bg-overlay-gradient': 'linear-gradient(100deg, rgba(11,110,246,0.08), rgba(102,51,204,0.05), rgba(0,200,150,0.05))',
      '--floating-part-1': 'radial-gradient(circle at 30% 30%, rgba(11,110,246,0.28), transparent 72%)',
      '--floating-part-2': 'radial-gradient(circle at 60% 40%, rgba(255,102,102,0.24), transparent 70%)',
      '--floating-part-3': 'radial-gradient(circle at 40% 60%, rgba(0,200,150,0.22), transparent 68%)',
      '--floating-part-4': 'radial-gradient(circle at 20% 60%, rgba(249,115,22,0.2), transparent 75%)',
      '--welcome-overlay-bg': 'rgba(10,19,40,0.55)',
      '--welcome-bg': 'rgba(255,255,255,0.88)',
      '--welcome-border': 'rgba(230,238,251,0.8)',
      '--welcome-shadow': '0 22px 48px rgba(8,21,51,0.18)',
      '--welcome-text': '#0b2540',
      '--welcome-lead': '#1f2937',
      '--welcome-close-bg': 'rgba(255,255,255,0.4)',
      '--welcome-close-hover-bg': 'rgba(255,255,255,0.7)',
      '--welcome-close-color': '#0f172a',
      '--welcome-close-border': 'rgba(15,23,42,0.05)',
      '--accent-shadow': 'rgba(11,110,246,0.18)',
      '--input-bg': '#ffffff',
      '--input-border': '#e5e7eb',
      '--input-color': '#111111',
      '--input-placeholder': '#94a3b8',
      '--headline-color': '#111111',
      '--headline-shadow': '0 2px 10px rgba(15,23,42,0.35)',
      '--headline-backdrop': 'rgba(255,255,255,0.92)'
    }
  },
  {
    id: 'ocean',
    label: 'Ocean',
    variables: {
      '--bg': '#0b1d2d',
      '--text': '#f5f7ff',
      '--muted': '#b5d4ff',
      '--accent': '#5ee7df',
      '--card': '#122639',
      '--border': 'rgba(94,231,223,0.25)',
      '--btn-bg': '#132635',
      '--btn-color': '#c6f7ff',
      '--btn-border': 'rgba(94,231,223,0.3)',
      '--chip-bg': '#102335',
      '--chip-color': '#d4f3ff',
      '--chip-border': 'rgba(94,231,223,0.35)',
      '--chip-active-bg': '#5ee7df',
      '--chip-active-color': '#042027',
      '--hero-bg': 'linear-gradient(135deg,#0d1f2f,#143248)',
      '--modal-bg': '#131e2b',
      '--modal-border': 'rgba(94,231,223,0.4)',
      '--modal-shadow': '0 18px 40px rgba(4,10,18,0.7)',
      '--bg-gradient': 'linear-gradient(120deg,#0b1d2d 0%, #0e2a3f 35%, #152f4a 60%, #0d1d2f 100%)',
      '--bg-overlay-gradient': 'linear-gradient(100deg, rgba(94,231,223,0.3), rgba(14,165,233,0.25), rgba(2,132,199,0.2))',
      '--floating-part-1': 'radial-gradient(circle at 30% 30%, rgba(94,231,223,0.35), transparent 72%)',
      '--floating-part-2': 'radial-gradient(circle at 60% 40%, rgba(14,165,233,0.28), transparent 70%)',
      '--floating-part-3': 'radial-gradient(circle at 40% 60%, rgba(6,182,212,0.24), transparent 68%)',
      '--floating-part-4': 'radial-gradient(circle at 70% 20%, rgba(94,231,223,0.25), transparent 65%)',
      '--welcome-overlay-bg': 'rgba(2,10,24,0.85)',
      '--welcome-bg': 'rgba(7,23,39,0.94)',
      '--welcome-border': 'rgba(56,189,248,0.4)',
      '--welcome-shadow': '0 22px 48px rgba(2,6,20,0.85)',
      '--welcome-text': '#e0f2ff',
      '--welcome-lead': '#a3c7e6',
      '--welcome-close-bg': 'rgba(255,255,255,0.08)',
      '--welcome-close-hover-bg': 'rgba(255,255,255,0.2)',
      '--welcome-close-color': '#e0f2ff',
      '--welcome-close-border': 'rgba(255,255,255,0.2)',
      '--accent-shadow': 'rgba(56,189,248,0.25)',
      '--input-bg': '#021729',
      '--input-border': 'rgba(56,189,248,0.45)',
      '--input-color': '#e0f2ff',
      '--input-placeholder': '#94c6eb',
      '--headline-color': '#f2f9ff',
      '--headline-shadow': '0 2px 16px rgba(4,7,25,0.7)',
      '--headline-backdrop': 'rgba(14,33,60,0.7)'
    }
  },
  {
    id: 'dark',
    label: 'Dark',
    variables: {
      '--bg': '#0c1220',
      '--text': '#f5f7ff',
      '--muted': '#ced5ff',
      '--accent': '#a855f7',
      '--card': '#14182d',
      '--border': 'rgba(227,226,255,0.2)',
      '--btn-bg': '#13142a',
      '--btn-color': '#f8d7ff',
      '--btn-border': 'rgba(168,85,247,0.3)',
      '--chip-bg': '#161630',
      '--chip-color': '#f5e5ff',
      '--chip-border': 'rgba(168,85,247,0.35)',
      '--chip-active-bg': '#c084fc',
      '--chip-active-color': '#160f27',
      '--hero-bg': 'linear-gradient(135deg,#10162a,#191b36)',
      '--modal-bg': '#151a2d',
      '--modal-border': 'rgba(168,85,247,0.4)',
      '--modal-shadow': '0 20px 36px rgba(3,7,20,0.75)',
      '--bg-gradient': 'linear-gradient(120deg,#0c1220 0%, #11162a 35%, #1c1f3a 60%, #0b0e1d 100%)',
      '--bg-overlay-gradient': 'linear-gradient(100deg, rgba(168,85,247,0.3), rgba(14,165,233,0.2), rgba(59,130,246,0.18))',
      '--floating-part-1': 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.35), transparent 72%)',
      '--floating-part-2': 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.3), transparent 70%)',
      '--floating-part-3': 'radial-gradient(circle at 40% 60%, rgba(14,165,233,0.28), transparent 68%)',
      '--floating-part-4': 'radial-gradient(circle at 30% 65%, rgba(59,130,246,0.25), transparent 74%)',
      '--welcome-overlay-bg': 'rgba(1,5,19,0.82)',
      '--welcome-bg': 'rgba(17,21,39,0.92)',
      '--welcome-border': 'rgba(255,255,255,0.12)',
      '--welcome-shadow': '0 22px 48px rgba(0,0,0,0.75)',
      '--welcome-text': '#f8fafc',
      '--welcome-lead': '#cbd5f5',
      '--welcome-close-bg': 'rgba(255,255,255,0.08)',
      '--welcome-close-hover-bg': 'rgba(255,255,255,0.2)',
      '--welcome-close-color': '#f8fafc',
      '--welcome-close-border': 'rgba(255,255,255,0.2)',
      '--accent-shadow': 'rgba(124,58,237,0.35)',
      '--input-bg': '#0b111d',
      '--input-border': 'rgba(148,163,184,0.5)',
      '--input-color': '#f8fafc',
      '--input-placeholder': '#94a3b8',
      '--headline-color': '#f8fafc',
      '--headline-shadow': '0 2px 16px rgba(6,8,24,0.8)',
      '--headline-backdrop': 'rgba(17,23,39,0.85)'
    }
  }
];

function normalizeKey(s){ return String(s).toLowerCase().replace(/[^a-z0-9]/g,''); }
function resolveGalleryPaths(project){
  const folder = project.folder ? project.folder + '/' : '';
  return (project.galleryFiles || []).map(f => folder + f);
}

const previewSourcesCache = new Map();

function resolvePreviewSources(project, subject){
  const normalizedSubject = subject ? subject.trim() : '';
  const cacheKey = `${project.id}|${normalizedSubject}`;
  if(previewSourcesCache.has(cacheKey)){
    return previewSourcesCache.get(cacheKey);
  }
  const paths = resolveGalleryPaths(project);
  let resolved = [];
  if(normalizedSubject){
    const key = normalizeKey(normalizedSubject);
    const matches = paths.filter(path => {
      const lower = path.toLowerCase();
      const tokens = subjectTokens[key];
      if(tokens && tokens.length){
        return tokens.some(token => lower.includes(token));
      }
      return key && lower.includes(key);
    });
    if(matches.length){
      resolved = matches;
    }
  }
  if(resolved.length === 0){
    if(paths.length){
      resolved = paths;
    } else {
      const fallback = project.image ? [(project.folder ? project.folder + '/' : '') + project.image] : [];
      resolved = fallback;
    }
  }
  previewSourcesCache.set(cacheKey, resolved);
  return resolved;
}

function updateCardPreview(card, previewImg, previewGrid, project){
  if(!previewImg) return;
  const subject = card.dataset.selectedSubject;
  const sources = resolvePreviewSources(project, subject);
  const src = sources[0] || '';
  const previewAlt = subject ? `${subject} preview` : `${project.title} preview`;
  if(src && previewImg.src !== src){ previewImg.src = src; }
  previewImg.alt = previewAlt;
  card.dataset.previewSource = src || '';
  if(previewGrid){
    previewGrid.innerHTML = '';
    sources.slice(0, 8).forEach((thumbSrc, index) => {
      const thumb = document.createElement('img');
      thumb.src = thumbSrc;
      thumb.alt = previewAlt;
      thumb.className = 'subject-preview-thumb';
      if(index === 0){ thumb.classList.add('active'); }
      thumb.addEventListener('click', () => {
        previewImg.src = thumbSrc;
        card.dataset.previewSource = thumbSrc;
        previewGrid.querySelectorAll('.subject-preview-thumb').forEach(el => el.classList.remove('active'));
        thumb.classList.add('active');
      });
      previewGrid.appendChild(thumb);
    });
  }
}
Object.keys(subjectTokens).forEach(k=> subjectImageIndex[k]=[]);
projects.forEach(p=>{
  const folder = p.folder || '';
  (p.galleryFiles || []).forEach(f => {
    const filename = f.toLowerCase();
    const path = (folder ? folder + '/' : '') + f;
    Object.keys(subjectTokens).forEach(sk => {
      const tokens = subjectTokens[sk];
      if(tokens.some(t => filename.includes(t))){
        subjectImageIndex[sk].push(path);
      }
    });
  });
});

function renderSubjects(){
  subjectsEl.innerHTML = '';
  projectTabs.forEach(t=>{
    const btn = document.createElement('button');
    btn.className = 'subject' + (t.id === activeProjectId ? ' active' : '');
    btn.textContent = t.label;
    btn.onclick = () => {
      activeProjectId = t.id;
      renderSubjects();
      render();
    };
    subjectsEl.appendChild(btn);
  });
}

const projectsEl = document.getElementById('projects');
const membersEl = document.getElementById('members');

function triggerNameAnimation(el){
  if(!el) return;
  el.classList.remove('name-click');
  void el.offsetWidth;
  el.classList.add('name-click');
  const cleanup = () => {
    el.classList.remove('name-click');
    el.removeEventListener('animationend', cleanup);
  };
  el.addEventListener('animationend', cleanup);
}

function renderMembers(){
  if(!membersEl) return;
  membersEl.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'member-card';
    const avatar = document.createElement('img');
    const profilePathLocal = (p.folder ? p.folder + '/' : '') + 'profile.jpg';
    const base = folderBase(p.folder) || (p.title || '').split(' ')[0].toLowerCase();
    const profilePathShared = encodeURI('members picture/' + (base || '').toLowerCase() + '.jpg');
    avatar.src = profilePathLocal;
    avatar.alt = p.title + ' profile';
    avatar.loading = 'lazy';
    avatar.onerror = () => {
      avatar.onerror = null;
      avatar.src = profilePathShared;
      avatar.addEventListener('error', () => {
        avatar.removeEventListener('error', arguments.callee);
        avatar.src = p.image || (p.folder ? p.folder + '/' + (p.galleryFiles && p.galleryFiles[0] ? p.galleryFiles[0] : '') : '');
      }, { once: true });
    };
    avatar.className = 'avatar';

    const name = document.createElement('div');
    name.className = 'member-name';
    name.textContent = p.title;

    card.appendChild(avatar);
    card.appendChild(name);
    avatar.style.cursor = 'pointer';
    name.style.cursor = 'pointer';
    avatar.addEventListener('click', (e)=>{ e.stopPropagation(); openGallery(p.id); });
    name.addEventListener('click', (e)=>{ e.stopPropagation(); triggerNameAnimation(name); openGallery(p.id); });
    membersEl.appendChild(card);
  });
}

function render(){
  projectsEl.innerHTML = '';
  let filtered;
  if(activeProjectId){
    filtered = projects.filter(p => p.id === activeProjectId);
  } else {
    filtered = projects.slice();
  }
  if(filtered.length === 0){
    projectsEl.innerHTML = '<p style="color:var(--muted)">No projects match.</p>';
    return;
  }
  const subjectList = SUBJECTS;
  for(const p of filtered){
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = p.id;
    card.innerHTML = `
        <h3><span class="title-link">${escapeHtml(p.title)}</span></h3>
        <div class="subject-buttons" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px"></div>
        <div class="subject-preview" aria-live="polite" aria-label="Subject preview">
          <img class="subject-preview-image" src="" alt="${escapeHtml(p.title)} preview" loading="lazy">
          <div class="subject-preview-grid" role="list"></div>
          <button type="button" class="btn primary preview-fullscreen">View fullscreen</button>
        </div>
    `;
    const titleEl = card.querySelector('.title-link');
    if(titleEl){
      titleEl.addEventListener('click', (e)=>{ e.stopPropagation(); triggerNameAnimation(titleEl); openProject(p.id); });
      titleEl.setAttribute('role','button');
      titleEl.tabIndex = 0;
      titleEl.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerNameAnimation(titleEl); openProject(p.id); } });
    }
    const buttonsContainer = card.querySelector('.subject-buttons');
    const previewImage = card.querySelector('.subject-preview-image');
    const previewGrid = card.querySelector('.subject-preview-grid');
    const previewButton = card.querySelector('.preview-fullscreen');
    const refreshPreview = () => updateCardPreview(card, previewImage, previewGrid, p);
    const openCurrentPreviewOverlay = () => {
      const src = card.dataset.previewSource || (previewImage ? previewImage.src : '');
      const alt = previewImage ? previewImage.alt : p.title || 'Preview image';
      if(src){
        showPreviewFullscreen(src, alt);
        return true;
      }
      return false;
    };
    const availableSubjects = [];
    subjectList.forEach(sub => {
      const b = document.createElement('button');
      b.className = 'subject';
      b.style.fontSize = '0.78rem';
      const key = normalizeKey(sub);
      const folder = p.folder || '';
      const perProjectMatches = (p.galleryFiles || []).filter(f => {
        const lower = f.toLowerCase();
        if(subjectTokens[key]){
          return subjectTokens[key].some(t => lower.includes(t));
        }
        return lower.includes(sub.toLowerCase().replace(/\s+/g,'')) || lower.includes(sub.toLowerCase());
      }).map(f=> (folder?folder+'/' : '') + f);

      if(perProjectMatches.length === 0){
        b.textContent = sub + ' - empty';
        b.classList.add('empty');
        b.title = 'No images for this subject';
        b.setAttribute('disabled','true');
        b.setAttribute('aria-disabled','true');
        b.addEventListener('click', (e)=>{ e.stopPropagation(); });
      } else {
        b.textContent = sub;
        availableSubjects.push(sub);
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          Array.from(buttonsContainer.children).forEach(ch => ch.classList.remove('active'));
          const willActive = !b.classList.contains('active');
          if(willActive) {
            b.classList.add('active');
            card.dataset.selectedSubject = sub;
          } else {
            b.classList.remove('active');
            delete card.dataset.selectedSubject;
          }
          refreshPreview();
        });
      }
      buttonsContainer.appendChild(b);
    });

    if(card.dataset.selectedSubject && !availableSubjects.includes(card.dataset.selectedSubject)){
      delete card.dataset.selectedSubject;
    }


    projectsEl.appendChild(card);
    if(previewButton){
      previewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(!openCurrentPreviewOverlay()){
          const selection = card.dataset.selectedSubject;
          openGallery(p.id, selection);
        }
      });
    }
    if(previewImage){
      previewImage.addEventListener('click', (e) => {
        e.stopPropagation();
        openCurrentPreviewOverlay();
      });
    }
    refreshPreview();
  }
}

const highlightSection = document.getElementById('highlightReel');
const highlightImage = document.getElementById('highlightImage');
const highlightMedia = document.querySelector('.highlight-media');
const highlightTitle = document.getElementById('highlightTitle');
const highlightCaption = document.getElementById('highlightCaption');
const highlightPrev = document.getElementById('highlightPrev');
const highlightNext = document.getElementById('highlightNext');
const highlightIntervalMs = 6500;
let highlightTimer;
let highlightIndex = 0;
const highlightItems = projects.map(p => {
  const src = resolvePreviewSources(p)[0] || (p.image ? ((p.folder ? p.folder + '/' : '') + p.image) : '');
  if(!src) return null;
  return {
    src,
    title: p.title,
    caption: p.type ? `${p.type} spotlight` : 'Project showcase'
  };
}).filter(Boolean);

function renderHighlight(index = highlightIndex){
  if(!highlightImage || !highlightTitle || !highlightCaption || !highlightItems.length) return;
  const item = highlightItems[index];
  highlightMedia?.classList.add('loading');
  highlightImage.src = item.src;
  highlightImage.alt = `${item.title} highlight`;
  highlightTitle.textContent = item.title;
  highlightCaption.textContent = item.caption;
}

function scheduleHighlight(){
  clearInterval(highlightTimer);
  if(!highlightItems.length) return;
  highlightTimer = window.setInterval(() => {
    highlightIndex = (highlightIndex + 1) % highlightItems.length;
    renderHighlight();
  }, highlightIntervalMs);
}

if(highlightItems.length === 0 && highlightSection){
  highlightSection.style.display = 'none';
}
renderHighlight();
scheduleHighlight();

if(highlightItems.length && highlightPrev){
  highlightPrev.addEventListener('click', () => {
    highlightIndex = (highlightIndex - 1 + highlightItems.length) % highlightItems.length;
    renderHighlight();
    scheduleHighlight();
  });
}
if(highlightItems.length && highlightNext){
  highlightNext.addEventListener('click', () => {
    highlightIndex = (highlightIndex + 1) % highlightItems.length;
    renderHighlight();
    scheduleHighlight();
  });
}
if(highlightImage && highlightMedia){
  highlightImage.addEventListener('load', () => {
    highlightMedia.classList.remove('loading');
  });
}

const spotlightContainer = document.querySelector('.spotlight-cards');
const spotlightQuotes = [
  'I love breaking complex problems into beautiful, functional interfaces.',
  'Collaboration is the heart of each project we ship.',
  'We prototype fast, then polish with intention.',
  'Storytelling through visuals makes technical work feel human.',
  'Every piece of code is a promise to the team and the audience.'
];
const spotlightItems = projects.map((p, idx) => ({
  name: p.title,
  quote: spotlightQuotes[idx % spotlightQuotes.length],
  role: p.type || 'Portfolio'
}));

if(spotlightContainer && spotlightItems.length){
  spotlightItems.forEach(item => {
    const card = document.createElement('article');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <p>${escapeHtml(item.quote)}</p>
      <div class="spotlight-name">${escapeHtml(item.name)}</div>
      <small>${escapeHtml(item.role)}</small>
    `;
    spotlightContainer.appendChild(card);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.35 });
  spotlightContainer.querySelectorAll('.spotlight-card').forEach(card => observer.observe(card));
}

const backgroundAudio = document.getElementById('backgroundAudio');
const audioPlayPause = document.getElementById('audioPlayPause');
const audioMute = document.getElementById('audioMute');
const audioVolume = document.getElementById('audioVolume');
const audioTrackButtons = document.querySelectorAll('.track-option');
const audioDisc = document.querySelector('.audio-disc');
const audioPlayerEl = document.querySelector('.audio-player');
const audioStatusDot = document.querySelector('.audio-status-dot');
const audioStatusText = document.querySelector('.audio-status-text');
const audioQuietToggle = document.getElementById('audioQuietToggle');
const audioConsent = document.getElementById('audioConsent');
const audioConsentPlay = document.getElementById('audioConsentPlay');
const audioConsentDecline = document.getElementById('audioConsentDecline');
const audioWarningText = document.getElementById('audioWarningText');
const AUDIO_PREFERENCE_KEY = 'etech-audio-preference';
const MUSIC_CONSENT_KEY = 'etech-music-consent';
const DEFAULT_TRACK_SRC = 'audio/1st song.mp3';
let audioSilentPreference = false;
let audioConsentStatus = null;

function setPlayState(isPlaying){
  if(!audioPlayPause || !audioDisc) return;
  if(audioSilentPreference){
    audioPlayerEl?.classList.remove('music-playing');
    audioDisc.classList.remove('spinning');
    if(audioStatusDot){
      audioStatusDot.classList.remove('active');
    }
    if(audioStatusText){
      audioStatusText.textContent = 'Silent';
    }
    audioPlayPause.textContent = 'Play music';
    audioPlayPause.setAttribute('aria-pressed', 'false');
    return;
  }
  audioPlayerEl?.classList.toggle('music-playing', isPlaying);
  audioPlayPause.textContent = isPlaying ? 'Pause music' : 'Play music';
  audioPlayPause.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
  audioDisc.classList.toggle('spinning', isPlaying);
  if(audioStatusDot){
    audioStatusDot.classList.toggle('active', isPlaying);
  }
  if(audioStatusText){
    audioStatusText.textContent = isPlaying ? 'Playing' : 'Paused';
  }
}

function updateVolumeFromSlider(){
  if(audioSilentPreference) return;
  if(!backgroundAudio || !audioVolume) return;
  const vol = Math.min(1, Math.max(0, parseFloat(audioVolume.value)));
  backgroundAudio.volume = vol;
  if(vol > 0 && backgroundAudio.muted){
    backgroundAudio.muted = false;
  }
  if(audioMute){
    const isMuted = vol <= 0 || backgroundAudio.muted;
    audioMute.textContent = isMuted ? 'Unmute' : 'Mute';
    audioMute.setAttribute('aria-pressed', isMuted ? 'true' : 'false');
  }
}

function readConsent(){
  try {
    return localStorage.getItem(MUSIC_CONSENT_KEY);
  } catch (err){
    console.warn('Unable to read music consent', err);
    return null;
  }
}

function writeConsent(value){
  try {
    if(value){
      localStorage.setItem(MUSIC_CONSENT_KEY, value);
    } else {
      localStorage.removeItem(MUSIC_CONSENT_KEY);
    }
  } catch (err){
    console.warn('Unable to write music consent', err);
  }
  audioConsentStatus = value;
  if(audioConsent){
    audioConsent.classList.remove('attention');
  }
  updateConsentUI();
}

function ensureDefaultTrack(){
  if(!backgroundAudio) return;
  if(!backgroundAudio.src || backgroundAudio.src.trim() === ''){
    backgroundAudio.src = DEFAULT_TRACK_SRC;
  }
}

function updateConsentUI(){
  if(!audioConsent) return;
  const granted = audioConsentStatus === 'granted';
  const denied = audioConsentStatus === 'denied';
  audioConsent.classList.toggle('hidden', granted);
  audioConsent.classList.toggle('declined', denied && !granted);
  if(audioWarningText){
    if(denied){
      audioWarningText.textContent = 'You previously chose not to play the song. Tap "Play song anyway" to listen.';
    } else {
      audioWarningText.textContent = 'Warning: playing this song may expose you to copyright claims. Do you want to proceed?';
    }
  }
}

function readAudioPreference(){
  const raw = safeStorageGet(AUDIO_PREFERENCE_KEY);
  if(!raw) return false;
  try {
    const parsed = JSON.parse(raw);
    return parsed && parsed.silent === true;
  } catch (err){
    console.warn('Unable to read audio preference', err);
    return false;
  }
}

function persistAudioPreference(){
  safeStorageSet(AUDIO_PREFERENCE_KEY, JSON.stringify({ silent: audioSilentPreference }));
}

function updateAudioControlStates(){
  if(audioPlayPause){
    audioPlayPause.disabled = audioSilentPreference;
    if(audioSilentPreference){
      audioPlayPause.setAttribute('aria-disabled','true');
      audioPlayPause.textContent = 'Play music';
      audioPlayPause.setAttribute('aria-pressed','false');
    } else {
      audioPlayPause.removeAttribute('aria-disabled');
    }
  }
  if(audioMute){
    audioMute.disabled = audioSilentPreference;
  }
  if(audioVolume){
    audioVolume.disabled = audioSilentPreference;
  }
  if(audioQuietToggle){
    audioQuietToggle.textContent = audioSilentPreference ? 'Allow music' : 'Keep silent';
    audioQuietToggle.setAttribute('aria-pressed', audioSilentPreference ? 'true' : 'false');
  }
  audioPlayerEl?.classList.toggle('silent-mode', audioSilentPreference);
}

function applySilentPreference(enabled, options = {}){
  const next = !!enabled;
  audioSilentPreference = next;
  updateAudioControlStates();
  if(backgroundAudio){
    if(audioSilentPreference){
      backgroundAudio.pause();
      backgroundAudio.muted = true;
    } else {
      backgroundAudio.muted = false;
      if(audioVolume && !audioVolume.disabled){
        const vol = parseFloat(audioVolume.value);
        if(!Number.isNaN(vol)){
          backgroundAudio.volume = vol;
        }
      }
    }
  }
  if(!options.skipStatus){
    setPlayState(!backgroundAudio?.paused);
  }
  if(options.persist !== false){
    persistAudioPreference();
  }
}

function selectTrack(button, options = {}){
  if(!backgroundAudio || !button) return;
  audioTrackButtons.forEach(btn => btn.classList.toggle('active', btn === button));
  const src = button.dataset && button.dataset.src;
  if(!src) return;
  backgroundAudio.src = src;
  backgroundAudio.load();
  if(options.resume){
    backgroundAudio.play().catch(() => {});
  }
}

audioSilentPreference = readAudioPreference();
audioConsentStatus = readConsent();
updateAudioControlStates();
updateConsentUI();

if(backgroundAudio){
  ensureDefaultTrack();
  backgroundAudio.volume = audioVolume ? parseFloat(audioVolume.value) : 0.6;
  backgroundAudio.addEventListener('play', () => setPlayState(true));
  backgroundAudio.addEventListener('pause', () => setPlayState(false));
  applySilentPreference(audioSilentPreference, { persist:false, skipStatus:true });
  if(audioConsentStatus === 'granted' && !audioSilentPreference){
    backgroundAudio.play().catch(() => {});
  }
  setPlayState(!backgroundAudio.paused);
}

if(audioPlayPause && backgroundAudio){
  audioPlayPause.addEventListener('click', () => {
    if(audioConsentStatus !== 'granted'){
      audioConsent?.classList.add('attention');
      audioConsentPlay?.focus();
      if(audioConsentStatus === 'denied'){
        writeConsent(null);
      }
      return;
    }
    if(audioSilentPreference) return;
    if(backgroundAudio.paused){
      backgroundAudio.play().catch(() => {});
    } else {
      backgroundAudio.pause();
    }
  });
}

if(audioMute && backgroundAudio){
  audioMute.addEventListener('click', () => {
    if(audioSilentPreference) return;
    const toggled = !backgroundAudio.muted;
    backgroundAudio.muted = toggled;
    audioMute.textContent = toggled ? 'Unmute' : 'Mute';
    audioMute.setAttribute('aria-pressed', toggled ? 'true' : 'false');
    if(audioVolume){
      audioVolume.value = toggled ? '0' : backgroundAudio.volume.toString();
    }
  });
}

if(audioVolume && backgroundAudio){
  audioVolume.addEventListener('input', () => updateVolumeFromSlider());
  audioVolume.addEventListener('change', () => updateVolumeFromSlider());
}

if(audioQuietToggle){
  audioQuietToggle.addEventListener('click', () => {
    applySilentPreference(!audioSilentPreference);
    if(!audioSilentPreference){
      backgroundAudio?.play().catch(() => {});
    }
  });
}

if(audioConsentPlay){
  audioConsentPlay.addEventListener('click', () => {
    writeConsent('granted');
    applySilentPreference(false);
    backgroundAudio?.play().catch(() => {});
  });
}
if(audioConsentDecline){
  audioConsentDecline.addEventListener('click', () => {
    writeConsent('denied');
    applySilentPreference(true);
  });
}

if(audioTrackButtons && audioTrackButtons.length){
  selectTrack(audioTrackButtons[0]);
  audioTrackButtons.forEach(button => {
    button.addEventListener('click', () => {
      const wasPlaying = !backgroundAudio.paused;
      selectTrack(button, {resume: wasPlaying});
    });
  });
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalProjects = document.getElementById('modalProjects');
const modalClose = document.getElementById('modalClose');
const modalGallery = document.getElementById('modalGallery');
const modalViewer = document.getElementById('modalViewer');
let modalState = { images: [], currentIndex: 0, label: '' };

function openProject(id){ openGallery(id); }

function setModalViewerIndex(index){
  if(!modalGallery || !modalViewer || !modalState.images.length) return;
  const total = modalState.images.length;
  const normalized = ((index % total) + total) % total;
  modalState.currentIndex = normalized;
  const src = modalState.images[normalized];
  modalViewer.src = src;
  modalViewer.alt = `${modalState.label || 'Gallery'} (${normalized + 1}/${total})`;
  modalGallery.querySelectorAll('.thumb').forEach((thumb, idx) => thumb.classList.toggle('active', idx === normalized));
  const activeThumb = modalGallery.querySelector(`[data-thumb-index="${normalized}"]`);
  if(activeThumb && typeof activeThumb.scrollIntoView === 'function'){
    activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function buildModalGallery(images, label){
  if(!modalGallery || !modalViewer) return;
  modalGallery.innerHTML = '';
  modalState.images = (images || []).slice();
  modalState.label = label || '';
  if(modalState.images.length === 0){
    modalGallery.innerHTML = '<p style="color:var(--muted)">No images in this gallery yet.</p>';
    modalViewer.src = '';
    return;
  }
  modalState.images.forEach((src, idx) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = modalState.label || 'Gallery image';
    thumb.className = 'thumb';
    thumb.tabIndex = 0;
    thumb.dataset.thumbIndex = idx;
    thumb.setAttribute('role', 'button');
    thumb.addEventListener('click', () => setModalViewerIndex(idx));
    thumb.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        setModalViewerIndex(idx);
      }
    });
    const wrap = document.createElement('div');
    wrap.appendChild(thumb);
    modalGallery.appendChild(wrap);
  });
  setModalViewerIndex(0);
}

function handleModalKeyNav(event){
  if(!modal || modal.getAttribute('aria-hidden') === 'true') return;
  if(event.key === 'ArrowRight' || event.key === 'ArrowLeft'){
    event.preventDefault();
    setModalViewerIndex(modalState.currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
}
document.addEventListener('keydown', handleModalKeyNav);

function openGallery(id, subjectFilter){
  const p = projects.find(x=>x.id===id);
  if(!p) return;
  modalTitle.textContent = p.title;
  modalType.textContent = p.type || '';
  modalProjects.style.display = 'none';
  modalProjects.href = '#';
  modalProjects.onclick = function(e){ e.preventDefault(); /* no-op while modal open */ };
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
  const folder = p.folder || '';
  const files = p.galleryFiles || [];
  let imgs = [];

  if(subjectFilter){
    const norm = subjectFilter.toLowerCase().replace(/\s+/g,'');
    imgs = files.filter(f => f.toLowerCase().replace(/\s+/g,'').includes(norm)).map(f=> (folder?folder+'/' : '')+f);
    if(imgs.length === 0){
      const words = subjectFilter.toLowerCase().split(/\s+/).filter(Boolean);
      imgs = files.filter(f => words.every(w => f.toLowerCase().includes(w))).map(f=> (folder?folder+'/' : '')+f);
    }
    if(imgs.length === 0){
      const exts = ['.jpg','.jpeg','.png','.gif','.webp'];
      for(const ext of exts){
        if(files.some(f=> f.toLowerCase() === (subjectFilter + ext).toLowerCase())){ imgs = [(folder?folder+'/' : '') + subjectFilter + ext]; break; }
      }
    }
    if(imgs.length === 0){ imgs = files.length ? files.map(f=> (folder?folder+'/' : '')+f) : (p.image ? [p.image] : []); }
  } else {
    imgs = files.length ? files.map(f=> (folder?folder+'/' : '')+f) : (p.image ? [p.image] : []);
  }

  if(!modalGallery || !modalViewer){
    if(imgs.length) window.open(imgs[0], '_blank');
    return;
  }
  buildModalGallery(imgs, p.title || 'Gallery');
}

function closeModal(){
  modalState.images = [];
  modalState.currentIndex = 0;
  modalState.label = '';
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  try{ modalProjects.style.display = ''; } catch(e){}
}

function openGalleryWithList(projectId, imgList, subjectLabel){
  const p = projects.find(x=>x.id===projectId) || {};
  modalTitle.textContent = p.title || subjectLabel || 'Gallery';
  modalType.textContent = subjectLabel || p.type || '';
  modalProjects.style.display = 'none';
  const images = imgList || [];
  if(modalGallery && modalViewer){
    buildModalGallery(images, subjectLabel || p.title || 'Gallery');
  } else if(images.length){
    window.open(images[0], '_blank');
  }
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=> { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') closeModal(); });

document.getElementById('year').textContent = new Date().getFullYear();

renderSubjects();
renderMembers();
render();

const themeControlEl = document.getElementById('themeControl');
const themeToggleButton = document.getElementById('themeToggle');
const themeControlWrapper = document.querySelector('.theme-control');
const themeMoodBadge = document.getElementById('themeMoodBadge');
const themeMoodLabel = themeMoodBadge ? themeMoodBadge.querySelector('.badge-label') : null;
const themeMoodColor = themeMoodBadge ? themeMoodBadge.querySelector('.badge-color') : null;
const THEME_STORAGE_KEY = 'etech-selected-theme';
let activeThemeId = THEMES[0] ? THEMES[0].id : null;

function setThemeOptionsVisibility(open){
  if(!themeControlEl || !themeToggleButton || !themeControlWrapper) return;
  const isOpen = themeControlWrapper.classList.contains('open');
  if(open === undefined){
    open = !isOpen;
  }
  if(open){
    themeControlWrapper.classList.add('open');
    themeControlEl.setAttribute('aria-hidden','false');
    themeToggleButton.setAttribute('aria-expanded','true');
    document.body.classList.add('theme-menu-open');
  } else {
    themeControlWrapper.classList.remove('open');
    themeControlEl.setAttribute('aria-hidden','true');
    themeToggleButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('theme-menu-open');
  }
}

function safeStorageGet(key){
  try { return localStorage.getItem(key); } catch(e){ console.warn('Unable to read localStorage for', key, e); return null; }
}

function safeStorageSet(key, value){
  try { localStorage.setItem(key, value); } catch(e){ console.warn('Unable to write localStorage for', key, e); }
}

function updateThemeButtons(){
  if(!themeControlEl) return;
  Array.from(themeControlEl.children).forEach(btn => {
    const isActive = btn.dataset && btn.dataset.themeId === activeThemeId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

const bodyEl = document.body;
let themeTransitionTimer;

function applyTheme(theme, options = {}){
  if(!theme || !theme.variables) return;
  const root = document.documentElement;
  if(bodyEl){
    bodyEl.classList.remove('theme-transitioning');
    void bodyEl.offsetWidth;
    bodyEl.classList.add('theme-transitioning');
    clearTimeout(themeTransitionTimer);
    themeTransitionTimer = setTimeout(() => bodyEl.classList.remove('theme-transitioning'), 650);
  }
  Object.entries(theme.variables).forEach(([prop, value]) => root.style.setProperty(prop, value));
  root.dataset.theme = theme.id;
  if(bodyEl){ bodyEl.dataset.theme = theme.id; }
  activeThemeId = theme.id;
  updateThemeButtons();
  updateThemeBadge(theme);
  if(options.persist !== false){
    safeStorageSet(THEME_STORAGE_KEY, theme.id);
  }
}

function updateThemeBadge(theme){
  if(!themeMoodBadge || !themeMoodLabel) return;
  themeMoodLabel.textContent = theme.label;
  if(themeMoodColor){
    const top = theme.variables['--chip-bg'] || theme.variables['--bg'] || '#fff';
    const bottom = theme.variables['--card'] || theme.variables['--btn-bg'] || '#fff';
    themeMoodColor.style.background = `linear-gradient(135deg, ${top}, ${bottom})`;
  }
}

function renderThemeOptions(){
  if(!themeControlEl) return;
  themeControlEl.innerHTML = '';
  THEMES.forEach(theme => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-option';
    btn.textContent = theme.label;
    btn.dataset.themeId = theme.id;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTheme(theme);
      setThemeOptionsVisibility(false);
    });
    themeControlEl.appendChild(btn);
  });
  updateThemeButtons();
}

renderThemeOptions();
setThemeOptionsVisibility(false);
const storedThemeId = safeStorageGet(THEME_STORAGE_KEY);
const DEFAULT_THEME_ID = 'dark';
const startingTheme = THEMES.find(t => t.id === storedThemeId) || THEMES.find(t => t.id === DEFAULT_THEME_ID) || THEMES[0];
applyTheme(startingTheme, {persist:false});

if(themeToggleButton){
  themeToggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    setThemeOptionsVisibility();
  });
}
document.addEventListener('click', (e) => {
  if(themeControlWrapper && !themeControlWrapper.contains(e.target)){
    setThemeOptionsVisibility(false);
  }
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    setThemeOptionsVisibility(false);
  }
});

if(themeMoodBadge){
  themeMoodBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    setThemeOptionsVisibility(true);
    themeToggleButton?.focus();
  });
}

const welcomeOverlay = document.getElementById('welcomeOverlay');
const welcomeEnter = document.getElementById('welcomeEnter');
const welcomeDismiss = document.getElementById('welcomeDismiss');

if(welcomeOverlay && welcomeEnter && welcomeDismiss){
  const welcomeKey = 'etech-welcome-dismissed';
  let storageAvailable = false;
  let shouldSkipOverlay = false;

  try {
    const testKey = '__etech_welcome_test__';
    sessionStorage.setItem(testKey, '1');
    sessionStorage.removeItem(testKey);
    storageAvailable = true;
    shouldSkipOverlay = sessionStorage.getItem(welcomeKey) === '1';
  } catch(err){
    storageAvailable = false;
    shouldSkipOverlay = false;
    console.warn('Welcome overlay storage unavailable:', err);
  }

  const hideOverlay = () => {
    welcomeOverlay.classList.add('hide');
    welcomeOverlay.classList.remove('show');
    welcomeOverlay.setAttribute('aria-hidden','true');
    if(storageAvailable){
      try { sessionStorage.setItem(welcomeKey, '1'); } catch(err){ console.warn('Unable to persist welcome overlay state:', err); }
    }
    window.setTimeout(() => {
      if(welcomeOverlay && welcomeOverlay.parentNode){ welcomeOverlay.parentNode.removeChild(welcomeOverlay); }
    }, 500);
  };

  if(shouldSkipOverlay){
    if(welcomeOverlay.parentNode){ welcomeOverlay.parentNode.removeChild(welcomeOverlay); }
  } else {
    welcomeOverlay.classList.add('show');
    welcomeOverlay.classList.remove('hide');
    welcomeOverlay.setAttribute('aria-hidden','false');
    welcomeEnter.addEventListener('click', hideOverlay);
    welcomeDismiss.addEventListener('click', hideOverlay);
  }
}

const previewOverlay = document.getElementById('previewFullscreenOverlay');
const previewFullscreenImage = document.getElementById('previewFullscreenImage');
const previewFullscreenClose = document.getElementById('previewFullscreenClose');

function showPreviewFullscreen(src, alt){
  if(!previewOverlay || !previewFullscreenImage || !src) return;
  previewFullscreenImage.src = src;
  previewFullscreenImage.alt = alt || 'Preview image';
  previewOverlay.classList.add('show');
  previewOverlay.setAttribute('aria-hidden','false');
}

function hidePreviewFullscreen(){
  if(!previewOverlay) return;
  previewOverlay.classList.remove('show');
  previewOverlay.setAttribute('aria-hidden','true');
}

if(previewOverlay){
  previewOverlay.addEventListener('click', (e) => { if(e.target === previewOverlay) hidePreviewFullscreen(); });
}
if(previewFullscreenClose){ previewFullscreenClose.addEventListener('click', hidePreviewFullscreen); }
