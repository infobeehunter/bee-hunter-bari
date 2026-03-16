const DB = {
    buses: ['1', '12/', '53', 'CPJ', '22', '2/'],
    
    passes: [
        { 
            id: 'Light', 
            n: 'LIGHT TOUR', 
            price: 5, 
            desc: '4 tappe essenziali in 1 ora.',
            mete: [
                { t: 'Basilica San Nicola', d: 'La chiesa del Santo Patrono.', dist: '150m' },
                { t: 'Arco delle Meraviglie', d: 'Angolo suggestivo di Bari Vecchia.', dist: '300m' }
            ]
        },
        { 
            id: 'Discovery', 
            n: 'DISCOVERY TOUR', 
            price: 10, 
            desc: '7 tappe storiche complete.',
            mete: [
                { t: 'Castello Svevo', d: 'Antica fortezza normanna.', dist: '100m' },
                { t: 'Teatro Petruzzelli', d: 'Il tempio della lirica.', dist: '850m' }
            ]
        }
    ],

    partners: [
        { n: 'Panificio Fiore', icon: '🥨', desc: 'Sconto 10% sulla focaccia' },
        { n: 'Mastro Ciccio', icon: '🍔', desc: 'Bibita omaggio' }
    ]
};
