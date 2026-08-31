const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Bem-vindo ao jogo O Embaixador! O destino do país está em suas mãos. Suas decisões moldarão a economia, a diplomacia e o bem-estar do povo. Você enfrentará dilemas profundos e perguntas desafiadoras ao longo dessa jornada. Prepare-se, faça suas escolhas com sabedoria e vamos ver como você se sai!",
        alternativas: [
            {
                texto: "Vamos começar!",
                afirmacao: "Essa foi sua trajetória como Embaixador:"
            },
            {
                texto: "Mas eu nem sei o que o Embaixador faz...",
                afirmacao: "Essa foi sua trajetória como Embaixador:"
            }
        ]
    },
    {
        enunciado: "Uma nação vizinha militarizou a fronteira sem aviso prévio, alegando exercícios de rotina.",
        alternativas: [
            {
                texto: "Exige publicamente a retirada imediata das tropas, ameaçando sanções econômicas severas.",
                afirmacao: "Ao peitar publicamente a ameaça na fronteira, seu país ganhou a reputação de destemido, embora tenha iniciado uma era de forte corrida armamentista na região."
            },
            {
                texto: "Ignora a provocação publicamente para não gerar mais pânico, mas reforça discretamente a segurança interna.",
                afirmacao: "Ao optar pelo silêncio e reforço discreto, você evitou um pânico geral e manteve a paz diplomática, deixando os vizinhos sem saber o real poder do seu exército."
            }
        ]
    },
    {
        enunciado: "Um recurso natural vital foi descoberto em território neutro. Uma superpotência quer exclusividade e oferece apoio financeiro ao seu país em troca do seu voto a favor deles no conselho.",
        alternativas: [
            {
                texto: "Aceita a proposta da superpotência; a economia do seu país precisa desse investimento agora.",
                afirmacao: "Sua aliança com a superpotência encheu os cofres da nação de investimentos, mas transformou seu país em um satélite dependente das decisões dessa grande potência."
            },
            {
                texto: "Cria uma coalizão com países menores para que juntos vocês explorem o recurso, batendo de frente com a superpotência.",
                afirmacao: "Liderar a coalizão de países menores desafiou a hegemonia global, criando um bloco econômico independente e muito unido, embora visado por embargos."
            }
        ]
    },
    {
        enunciado: "Documentos confidenciais do seu governo sobre espionagem de aliados foram vazados. A comunidade internacional está indignada.",
        alternativas: [
            {
                texto: "Nega veementemente a autenticidade dos documentos e acusa os rivais de tentarem sabotar sua nação.",
                afirmacao: "A postura agressiva de negar os vazamentos blindou o orgulho nacional internamente, mas azedou a confiança que antigos parceiros diplomáticos tinham em suas palavras."
            },
            {
                texto: "Mantém o silêncio diplomático enquanto foca em descobrir quem foi o responsável pelo vazamento.",
                afirmacao: "O silêncio calculado sobre a espionagem fez a poeira baixar sem grandes escândalos, embora tenha deixado o mistério pairando nos bastidores internacionais."
            }
        ]
    },
    {
        enunciado: "Um país vizinho sofreu um desastre natural e milhares de refugiados estão na sua fronteira buscando abrigo, mas seu país passa por uma recessão.",
        alternativas: [
            {
                texto: "Abre as fronteiras totalmente e redireciona fundos públicos para criar abrigos e assistência médica.",
                afirmacao: "A abertura total das fronteiras para os refugiados foi um marco histórico de empatia que quebrou a economia a curto prazo, mas garantiu cidadãos extremamente leais no futuro."
            },
            {
                texto: "Permite a entrada apenas de quem tem laços familiares no país e pede ajuda financeira internacional para lidar com o restante.",
                afirmacao: "A restrição controlada nas fronteiras protegeu a frágil economia interna, mas gerou duras críticas de organizações de direitos humanos globais."
            }
        ]
    },
    {
        enunciado: "Seu maior aliado histórico pede que você assine um tratado militar que praticamente obriga seu país a entrar em guerra caso eles sejam atacados.",
        alternativas: [
            {
                texto: "Propõe uma contraproposta: apoio logístico e diplomático em caso de guerra, mas sem envio de tropas.",
                afirmacao: "A contraproposta logística garantiu que nenhum soldado seu morresse por guerras alheias, consolidando sua nação como uma estrategista focada na autodefesa."
            },
            {
                texto: "Assina o tratado imediatamente; a lealdade aos velhos aliados é o que mantém seu país seguro.",
                afirmacao: "Ao assinar o tratado militar de lealdade irrestrita, seu país garantiu um escudo de proteção indestrutível, mas atrelou seu futuro diretamente aos conflitos do seu aliado."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();