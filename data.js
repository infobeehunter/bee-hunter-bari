const DB = {
    // 8️⃣ Sistema Punti e Premi
    rewards: [
        { threshold: 50, gift: "Gadget locale piccolo", icon: "🎁" },
        { threshold: 100, gift: "Coupon sconto 15-20%", icon: "🎟️" },
        { threshold: 200, gift: "Mini-tour gastronomico", icon: "🍲" },
        { threshold: 300, gift: "Titolo: Bari Food Master", icon: "🏆" }
    ],

    // 4️⃣ Mappa e Punti (Obiettivi del giorno)
    locations: [
        { id: 1, n: "Basilica San Nicola", cat: "Culturale", pts: 20, desc: "Sblocca il badge 'Culture' e scopri la storia del Santo.", type: "monument" },
        { id: 2, n: "Panificio Fiore", cat: "Produttore", pts: 20, desc: "Prova la focaccia e sblocca la micro-storia.", type: "food" },
        { id: 3, n: "Mercato Arco Basso", cat: "Mercato", pts: 10, desc: "Badge 'Fresh Catch' tra le signore delle orecchiette.", type: "market" }
    ],

    // Itinerari (Bari in Bici - 3 Euro)
    tours: [
        { 
            id: 'bike-tour', 
            n: 'Bari in Bici', 
            price: 3, 
            desc: 'Tour su due ruote tra lungomare e borgo antico.',
            mete: [
                { t: 'Punto Noleggio', d: 'Ritira la tua bici convenzionata.', dist: '0m' },
                { t: 'Lungomare Nazario Sauro', d: 'Pedala ammirando l\'Adriatico.', dist: '500m' },
                { t: 'Pane e Pomodoro', d: 'Tappa relax in spiaggia.', dist: '2.5km' }
            ]
        }
    ],

    // Trasporti e Ricerca
    transport: {
        "San Nicola": "Linea 12/ o Navetta A",
        "Stazione Centrale": "Tutte le linee (Fermata Piazza Moro)",
        "Fiera del Levante": "Linea 53 o 2/",
        "Pane e Pomodoro": "Linea 12 o 42"
    }
};
