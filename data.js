const DB = {
    points: { monument: 20, food: 15, market: 10, event: 20, social: 5 },
    
    rewards: [
        { threshold: 50, gift: "Gadget locale piccolo", icon: "🎁" },
        { threshold: 100, gift: "Coupon sconto 15-20%", icon: "🎟️" },
        { threshold: 200, gift: "Mini-tour gastronomico", icon: "🍲" },
        { threshold: 300, gift: "Titolo: Bari Food Master", icon: "🏆" }
    ],

    locations: [
        { id: 1, n: "Castello Svevo", cat: "Culture", pts: 20, desc: "Trova il simbolo normanno.", type: "monument" },
        { id: 2, n: "Panificio Fiore", cat: "Foodie", pts: 15, desc: "Assaggia la vera focaccia.", type: "food" },
        { id: 3, n: "Mercato Arco Basso", cat: "Explorer", pts: 10, desc: "Le orecchiette fatte a mano.", type: "market" }
    ],

    passes: [
        { id: 'bike', n: 'Bari in Bici', price: 3, desc: 'Tour in bici con tappe e itinerario incluso.', mete: [{t:'Lungomare', d:'Pedalata vista mare.', dist:'500m'}] },
        { id: 'light', n: 'Light Tour', price: 5, desc: '4 tappe nel cuore di Bari Vecchia.', mete: [{t:'San Nicola', d:'Storia del Santo.', dist:'200m'}] }
    ],

    transport: {
        "san nicola": "Linea 12/ o Navetta A",
        "stazione": "Tutte le linee (Piazza Moro)",
        "fiera": "Linea 53 o 2/",
        "pane e pomodoro": "Linea 12 o 42"
    }
};
