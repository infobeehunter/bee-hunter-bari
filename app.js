let myPasses = [];
let diary = [];
let stream = null;

// Navigazione tra pagine
function nav(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    document.querySelectorAll('nav button').forEach(btn => btn.classList.replace('nav-active', 'text-gray-400'));
    const activeBtn = document.getElementById('n-' + id);
    if(activeBtn) activeBtn.classList.replace('text-gray-400', 'nav-active');
    
    if(id !== 'camera') stopCamera();
    
    // Se entriamo in pagine dinamiche, carichiamole
    if(id === 'pass-shop') renderShop();
    if(id === 'bus-page') renderBusPage();
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

// Rendering dello Shop (Prende dati da data.js)
function renderShop() {
    const container = document.getElementById('pass-shop');
    container.innerHTML = `<h2 class="text-xl font-black uppercase mb-4">Shop Guide</h2>` + 
    DB.passes.map(p => `
        <div class="bg-white p-6 rounded-[35px] shadow-sm mb-4 border border-gray-100">
            <h3 class="font-black italic text-lg">${p.n} - €${p.price}</h3>
            <p class="text-xs text-gray-500 my-2">${p.desc}</p>
            <button onclick="buyPass('${p.id}')" class="w-full bg-yellow-400 py-3 rounded-2xl font-black text-xs uppercase">Acquista</button>
        </div>
    `).join('');
}

function buyPass(id) {
    const pass = DB.passes.find(p => p.id === id);
    myPasses.push(pass);
    alert('Pass acquistato!');
}

// Logica Camera
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        document.getElementById('video').srcObject = stream;
    } catch (err) { alert("Attiva permessi!"); }
}

function stopCamera() {
    if(stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
}

function takePhoto() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    diary.push(canvas.toDataURL('image/png'));
    renderDiary();
    alert("Foto salvata!");
}

function renderDiary() {
    document.getElementById('diary-grid').innerHTML = diary.map(img => `
        <img src="${img}" class="w-full h-32 object-cover rounded-2xl shadow-sm">
    `).join('');
}
