// Funzione Ricerca Pullman (punto 9 del progetto)
function calcBus() {
    const dest = document.getElementById('bus-dest').value.trim();
    const resultDiv = document.getElementById('bus-res');
    
    // Cerca nel database dei trasporti
    let found = false;
    for (let key in DB.transport) {
        if (dest.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(dest.toLowerCase())) {
            resultDiv.innerHTML = `
                <div class="bg-blue-50 p-4 rounded-2xl border border-blue-200">
                    <p class="font-black text-blue-700 text-[10px] uppercase">Percorso Migliore:</p>
                    <p class="text-xs font-bold mt-1">Per ${key}: prendi ${DB.transport[key]}</p>
                </div>`;
            found = true;
            break;
        }
    }
    if (!found) resultDiv.innerHTML = `<p class="text-xs text-red-500 italic text-center">Destinazione non trovata. Prova 'San Nicola' o 'Stazione'.</p>`;
}

// Funzione Visualizzazione Progressi (Soglie premi 50, 100, 200, 300)
function renderProfile() {
    const currentPts = parseInt(document.getElementById('user-points').innerText);
    const container = document.getElementById('profile');
    
    let nextReward = DB.rewards.find(r => r.threshold > currentPts) || {gift: "Massimo livello raggiunto!"};

    container.innerHTML = `
        <h2 class="text-xl font-black italic uppercase mb-4">Mio Diario</h2>
        <div class="bg-white p-5 rounded-[30px] shadow-sm mb-6">
            <p class="text-[10px] font-black text-gray-400 uppercase">Prossimo Obiettivo</p>
            <p class="text-sm font-black">${nextReward.gift}</p>
            <div class="w-full bg-gray-100 h-2 rounded-full mt-2">
                <div class="bg-yellow-400 h-2 rounded-full" style="width: ${(currentPts / 300) * 100}%"></div>
            </div>
        </div>
        <div id="diary-grid" class="grid grid-cols-2 gap-2"></div>
    `;
    renderDiary();
}
