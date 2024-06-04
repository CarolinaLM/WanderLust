export function obterCategorias() {
    return [
        {
            "nome": "Pode selecionar quantos quiser:",
            "itens": ["Aventura", "Relaxamento", "Vista Bonita", "Hotéis de Luxo",
                "Trilhas", "Museus", "Parapente", "Paramotor", "Helicóptero", "Utv/Quadriciclo", "Bug", "Jetski", "Pontos Turístico", "Passeios de Barco"
            ],
            "img": "tipo_de_viagem.png"
        },
    ]
}

export function obterDestinos() {
    return [
        // Rio de Janeiro
        {
            "nome": "Rio de Janeiro - RJ",
            "itens": [
                "Aventura",
            ],
            "descricao": "Mil aventuras para viver nessa cidade maravilhosa.",
            "img": "rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Pedra Bonita",
            "itens": [
                "Vista Bonita",
                "Trilhas"
            ],
            "descricao": "Trilha tranquila e uma vista surreal!",
            "img": "pedra_bonita.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Parapente",
            "itens": [
                "Aventura",
                "Parapente"
            ],
            "descricao": "Voo livre que proporciona a você uma experiência única de liberdade e prazer.",
            "img": "parapente_rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Helicóptero",
            "itens": [
                "Aventura",
                "Vista Bonita",
                "Helicóptero"
            ],
            "descricao": "Uma experiência extraordinária e uma vista de tirar o fôlego!",
            "img": "helicoptero_rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Cristo Redentor",
            "itens": [
                "Pontos Turístico",
                "Vista Bonita",
            ],
            "descricao": "Uma estátua que retrata Jesus Cristo localizada no topo do morro do Corcovado com uma incrível vista panorâmica da Cidade.",
            "img": "cristo_rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Bondinho Pão de Açúcar",
            "itens": [
                "Pontos Turístico",
                "Vista Bonita",
            ],
            "descricao": "Teleférico localizado no bairro da Urca. É uma das principais atrações turísticas da cidade.",
            "img": "bondinho_rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Escadaria Selarón",
            "itens": [
                "Pontos Turístico"
            ],
            "descricao": "Uma obra arquitetônica localizada entre os bairros de Santa Teresa e Lapa.",
            "img": "Escadaria_Selarón_RJ.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Hotel Grand Hyatt",
            "itens": [
                "Hotéis de Luxo",
            ],
            "descricao": "Hotel luxuoso à beira-mar, incrível!!",
            "img": "Grand_Hyatt_Rio_de_Janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Hotel CDesign",
            "itens": [
                "Hotéis de Luxo",
            ],
            "descricao": "Hotel luxuoso à beira-mar, incrível!!",
            "img": "CDesign_rio_de_janeiro.png"
        },
        {
            "nome": "Rio de Janeiro RJ - Museu do Amanhã",
            "itens": [
                "Museus",
            ],
            "descricao": "Artístico e histórico.",
            "img": "museo_do_amanha_RJ.png"
        },
        // Fim Rio de Janeiro

        // Guarujá
        {
            "nome": "Guarujá SP - Jetski",
            "itens": [
                "Jetski",
            ],
            "descricao": "Um passeio refrescante e divertido.",
            "img": "jetski_guaruja.png"
        },
        {
            "nome": "Guarujá SP - Morro do maluf",
            "itens": [
                "Pontos Turístico"
            ],
            "descricao": "Uma vista linda do morro para visitar.",
            "img": "morro_do_maulf_guaruja.png"
        },
        {
            "nome": "Guarujá SP - Hotel Doral",
            "itens": [
                "Relaxamento",
            ],
            "descricao": "Ótimo para relaxar e aproveitar a piscina.",
            "img": "doral_guaruja.png"
        },
        {
            "nome": "Guarujá SP - Hotel Jequitimar",
            "itens": [
                "Relaxamento",
            ],
            "descricao": "Ótimo para relaxar e aproveitar a piscina com uma vista para o mar.",
            "img": "jequiti_guaruja.png"
        },
        // Fim Guarujá

        // Ilhabella
        {
            "nome": "Ilhabella SP - DPNY Beach Hotel e SPA",
            "itens": [
                "Relaxamento",
                "Vista Bonita",
                "Hotéis de Luxo"
            ],
            "descricao": "Hotel e SPA chique e uma vista lindíssima!",
            "img": "dpny_ilha_bella.png"
        },
        // Fim Ilhabella

        // Taiba
        {
            "nome": "Carmel Taíba Exclusive Resort CE",
            "itens": [
                "Relaxamento",
                "Vista Bonita",
                "Hotéis de Luxo"
            ],
            "descricao": "Hotel luxuoso e atendimento exclusivo com uma vista surreal e uma decoração de tirar o fôlego!!",
            "img": "carmel_taiba.png"
        },
        {
            "nome": "Taiba CE - Utv/Quadriciclo",
            "itens": [
                "Aventura",
                "Utv/Quadriciclo",
            ],
            "descricao": "Um passeio divertido e exclusivo nas Dunas.",
            "img": "taiba_dunas.png"
        },
        // Fim Taiba

        // Cumbuco
        {
            "nome": "Cumbuco CE - Alchymist Lagoa Encantada",
            "itens": [
                "Relaxamento",
            ],
            "descricao": "Um passeio para relaxar e aproveitar.",
            "img": "Alchymist_Lagoa_Encantada.png"
        },
        {
            "nome": "Cumbuco CE - Lagoa da Banana - Jetski",
            "itens": [
                "Jetski",
            ],
            "descricao": "Um passeio para aproveitar o lago",
            "img": "lagoa_da_banana_cumbuco.png"
        },

        // Fim Cumbuco

        // Porto de Galinhas
        {
            "nome": "Porto de Galinhas PE",
            "itens": [
                "Vista Bonita",
            ],
            "descricao": "Piscinas naturais e trilhas ecológicas se destacam nesta praia famosa com águas cristalinas e agradáveis. ",
            "img": "porto_de_galinhas.png"
        },
        {
            "nome": "Porto de Galinhas PE - Paramotor",
            "itens": [
                "Paramotor",
            ],
            "descricao": "Sensação inesquecível de voar com a paisagem maravilhosa!",
            "img": "paramotor_porto_de_galinhas.png"
        },
        {
            "nome": "Porto de Galinhas PE - Passeio de Bug",
            "itens": [
                "Bug",
            ],
            "descricao": "Você percorre 16km de praias em Porto de Galinhas, conhecendo o melhor do litoral sul pernambucano.",
            "img": "bug_porto_de_galinhas.png"
        },
        {
            "nome": "Porto de Galinhas PE - Passeio de Jangada",
            "itens": [
                "Passeios de Barco",
            ],
            "descricao": "Um passeio relaxante e divertido.",
            "img": "jangada_porto_de_galinhas.png"
        },
        {
            "nome": "Porto de Galinhas PE - Hotel Marupiara",
            "itens": [
                "Relaxamento",
                "Vista Bonita"
            ],
            "descricao": "Um hotel com uma vista linda da praia!",
            "img": "marupiara_porto_de_galinhas.png"
        },
        {
            "nome": "Porto de Galinhas PE - Centrinho",
            "itens": [
                "Pontos Turístico"
            ],
            "descricao": "O Centrinho possui várias lojas, artesanatos, bares e restaurantes.",
            "img": "centrinho_porto_de_galinhas.png"
        },
        // Fim Porto de Galinhas

        // Maragogi
        {
            "nome": "Maragogi PE",
            "itens": [
                "Vista Bonita"
            ],
            "descricao": "Belezas naturais e praias de águas cristalinas, Maragogi é conhecida como o caribe brasileiro.",
            "img": "maragogi.png"
        },
        {
            "nome": "Maragogi PE - Caminho de Moises",
            "itens": [
                "Pontos Turístico"
            ],
            "descricao": "Faixa de areia estreita que atravessa águas rasas durante a maré baixa com redes e balanços para fotos.",
            "img": "caminho_de_moises_maragogi.png"
        },
        {
            "nome": "Maragogi PE - Passeio de Lancha",
            "itens": [
                "Passeios de Barco"
            ],
            "descricao": "Passeio de lancha para as piscinas naturais, incrível!",
            "img": "lancha_maragogi.png"
        },
        {
            "nome": "Maragogi PE - Nadar com os peixes",
            "itens": [
                "Aventura"
            ],
            "descricao": "Você pode nadar com os peixes e tirar foto.",
            "img": "peixes_maragogi.png"
        },
        {
            "nome": "Maragogi PE - Zoológico Ecopark Sol e Mar",
            "itens": [
                "Aventura"
            ],
            "descricao": "Você pode vê diversos animais e tirar fotos com cobra, coruja, arara e etc.",
            "img": "ecoPark_maragogi.png"
        },
        // Fim Maragogi

        // Thermas dos Laranjais
        {
            "nome": "Thermas dos Laranjais - SP",
            "itens": [
                "Aventura"
            ],
            "descricao": "Um parque aquático super divertido.",
            "img": "thermas_dos_laranjais_sp.png"
        },
    ]
}