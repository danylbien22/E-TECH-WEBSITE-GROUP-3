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

function normalizeKey(s){ return String(s).toLowerCase().replace(/[^a-z0-9]/g,''); }
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
    name.addEventListener('click', (e)=>{ e.stopPropagation(); openGallery(p.id); });
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
        <div class="links" style="margin-top:10px">
          <a class="btn" href="#" onclick="openGallery('${p.id}');return false;">Open CPT/PT</a>
        </div>
    `;
    const titleEl = card.querySelector('.title-link');
    if(titleEl){
      titleEl.addEventListener('click', (e)=>{ e.stopPropagation(); openProject(p.id); });
      titleEl.setAttribute('role','button');
      titleEl.tabIndex = 0;
      titleEl.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(p.id); } });
    }
    const buttonsContainer = card.querySelector('.subject-buttons');
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
        });
      }
      buttonsContainer.appendChild(b);
    });

    if(card.dataset.selectedSubject && !availableSubjects.includes(card.dataset.selectedSubject)){
      delete card.dataset.selectedSubject;
    }

    const projLink = card.querySelector('.links a');
    if(projLink){
      projLink.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const sel = card.dataset.selectedSubject || undefined;
        if(sel){
          const key = normalizeKey(sel);
          const folder = p.folder || '';
          const perProject = (p.galleryFiles || []).filter(f => {
            const lower = f.toLowerCase();
            if(subjectTokens[key]){ return subjectTokens[key].some(t => lower.includes(t)); }
            return lower.includes(sel.toLowerCase().replace(/\s+/g,'')) || lower.includes(sel.toLowerCase());
          }).map(f => (folder?folder+'/' : '') + f);

          if(perProject.length){ openGalleryWithList(p.id, perProject, sel); return; }
          const global = subjectImageIndex[key] || [];
          if(global.length){ openGalleryWithList(p.id, global, sel); return; }
        }
        openGallery(p.id, sel);
      });
    }

    projectsEl.appendChild(card);
  }
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalProjects = document.getElementById('modalProjects');
const modalClose = document.getElementById('modalClose');

function openProject(id){ openGallery(id); }

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

  const gallery = document.getElementById('modalGallery');
  const viewer = document.getElementById('modalViewer');
  if(!gallery || !viewer){ if(imgs.length) window.open(imgs[0], '_blank'); return; }
  gallery.innerHTML = '';
  if(imgs.length === 0){ gallery.innerHTML = '<p style="color:var(--muted)">No images in this gallery yet.</p>'; viewer.src = ''; }
  else {
    viewer.src = imgs[0]; viewer.alt = p.title || 'Project image';
    imgs.forEach(src=>{
      const t = document.createElement('img');
      t.src = src; t.alt = p.title || '';
      t.className = 'thumb';
      t.addEventListener('click', ()=>{ viewer.src = src; });
      const wrap = document.createElement('div'); wrap.appendChild(t);
      gallery.appendChild(wrap);
    });
  }
}

function closeModal(){
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  try{ modalProjects.style.display = ''; } catch(e){}
}

function openGalleryWithList(projectId, imgList, subjectLabel){
  const p = projects.find(x=>x.id===projectId) || {};
  modalTitle.textContent = p.title || subjectLabel || 'Gallery';
  modalType.textContent = subjectLabel || p.type || '';
  modalProjects.style.display = 'none';
  const gallery = document.getElementById('modalGallery');
  const viewer = document.getElementById('modalViewer');
  gallery.innerHTML = '';
  if(!imgList || imgList.length === 0){ gallery.innerHTML = '<p style="color:var(--muted)">No images for this subject.</p>'; viewer.src = ''; }
  else {
    viewer.src = imgList[0]; viewer.alt = modalTitle.textContent || '';
    imgList.forEach(src=>{
      const t = document.createElement('img');
      t.src = src; t.alt = modalTitle.textContent || '';
      t.className = 'thumb';
      t.addEventListener('click', ()=>{ viewer.src = src; });
      const wrap = document.createElement('div'); wrap.appendChild(t);
      gallery.appendChild(wrap);
    });
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
