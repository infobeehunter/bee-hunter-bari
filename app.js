let myPasses = [];
let diary = [];
let stream = null;

function nav(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    document.querySelectorAll('nav button').forEach(btn => btn.classList.replace('nav-active', 'text-gray-400'));
    const activeBtn = document.getElementById('n-' + id);
    if(activeBtn) activeBtn.classList.replace('text-gray-400', 'nav-active');
    
    if(id !== 'camera') stopCamera();
    
    // Caricamento dinamico delle sezioni
    if(id === 'pass-shop') renderShop();
    if(id === 'bus-page') renderBusPage();
    if(id === 'my-passes') renderMyPasses();
    if(id === 'partners') renderPartners();
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function renderShop() {
    const container = document.getElementById('pass-shop');
    container.innerHTML = `<h2 class="text-xl font-black italic uppercase mb-4">Acquista Pass</h2>` + 
    DB.passes.map(p => `
        <div class="bg-white p-6 rounded-[35px] shadow-sm mb-4 border border-gray-100">
            <h3 class="font-black italic text-lg uppercase">${p.n} - €${p.price}</h3>
            <p class="text-[10px] text-gray-500 my-2 italic">${p.desc}</p>
            <button onclick="buyPass('${p.id}')" class="w-full bg-yellow-400 text-white py-3 rounded-2xl font-black text-xs uppercase mt-2">Acquista</button>
        </div>
    `).join('');
}

function buyPass(id) {
    const pass = DB.passes.find(p => p.id === id);
    myPasses.push(pass);
    alert('Pass acquistato con successo!');
}

function renderMyPasses() {
    const container = document.getElementById('my-passes');
    if(myPasses.length === 0) {
        container.innerHTML = `<h2 class="text-xl font-black italic uppercase">I Miei Pass</h2><p class="mt-10 text-center text-gray-400 font-bold uppercase text-[10px]">Nessun pass acquistato.</p>`;
        return;
    }
    container.innerHTML = `<h2 class="text-xl font-black italic uppercase mb-4">I Tuoi Itinerari</h2>` +
    myPasses.map(p => `
        <div class="bg-white p-6 rounded-[35px] shadow-sm border-t-8 border-yellow-400 mb-4 text-left">
            <h3 class="font-black uppercase text-sm mb-4">${p.n}</h3>
            <div class="space-y-4">
                ${p.mete.map(m => `
                    <div class="border-l-4 border-gray-100 pl-4">
                        <p class="font-black text-xs uppercase">${m.t} <span class="text-yellow-500">(${m.dist})</span></p>
                        <p class="text-[10px] text-gray-400 mt-1 italic">${m.d}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderBusPage() {
    const container = document.getElementById('bus-page');
    container.innerHTML = `
        <h2 class="text-xl font-black italic uppercase text-blue-600">Bus & Percorsi</h2>
        <div class="bg-white p-5 rounded-[30px] shadow-sm space-y-4">
            <p class="text-[10px] font-black uppercase text-gray-400">Dove vuoi andare?</p>
            <input type="text" id="bus-dest" placeholder="Es: San Nicola" class="w-full p-4 bg-gray-100 rounded-2xl text-xs outline-none">
            <button onclick="calcBus()" class="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase">Trova Percorso</button>
        </div>
        <div id="bus-res" class="mt-4"></div>
        <p class="text-[10px] font-black uppercase text-gray-400 mt-6">Tutte le Linee</p>
        <div class="grid grid-cols-4 gap-2">${DB.buses.map(b => `<div class="bg-gray-100 p-3 rounded-xl text-center font-black text-xs">${b}</div>`).join('')}</div>
    `;
}

function calcBus() {
    const dest = document.getElementById('bus-dest').value;
    document.getElementById('bus-res').innerHTML = `<div class="bg-blue-50 p-4 rounded-2xl border border-blue-100 italic text-xs">Per ${dest} prendi la linea 12/ da Piazza Moro.</div>`;
}

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        document.getElementById('video').srcObject = stream;
    } catch (err) { alert("Attiva permessi!"); }
}

function stopCamera() { if(stream) { stream.getTracks().forEach(t => t.stop()); stream = null; } }

function takePhoto() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    diary.push(canvas.toDataURL('image/png'));
    renderDiary();
    alert("Salvata nel Diario!");
}

function renderDiary() {
    document.getElementById('diary-grid').innerHTML = diary.map(img => `<img src="${img}" class="w-full h-32 object-cover rounded-2xl shadow-sm border-2 border-white">`).join('');
}
