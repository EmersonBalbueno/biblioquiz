// =====================================================================
// BIBLIOQUIZ — Banco de Perguntas
// Categorias: marrom=catalogação, verde=autores, amarelo=citações,
//             vermelho=geral, azul=ABNT, roxo=história, laranja=CDD,
//             cinza=mestrado-avançado, dourado=doutorado, branco=surpresa
// Níveis: graduacao, mestrado, doutorado
// Dificuldades: medio, dificil, muito_dificil
// =====================================================================

const QUESTIONS = {
  // ───────────────────────────── CATALOGAÇÃO (marrom) ─────────────────────────────
  catalogacao: {
    label: "Catalogação",
    cor: "#8B5E3C",
    corFonte: "#fff",
    emoji: "📋",
    descricao: "Descrição e representação formal de documentos",
    niveis: {
      graduacao: {
        medio: [
          { id:"c1", pergunta:"O que é o MARC 21?", opcoes:["A) Sistema de cores para lombadas","B) Formato padrão de metadados bibliográficos em máquina","C) Modelo de avaliação de coleções","D) Sigla de método de catalogação descritiva"], correta:1, referencia:"MARC Standards – Library of Congress. Disponível em: https://www.loc.gov/marc/", explicacao:"MARC 21 (Machine-Readable Cataloging) é o formato usado para criar registros bibliográficos legíveis por máquina, adotado mundialmente em sistemas de bibliotecas." },
          { id:"c2", pergunta:"Qual norma brasileira regula a catalogação de publicações monográficas?", opcoes:["A) ABNT NBR 6034","B) ABNT NBR 6023","C) ABNT NBR 10520","D) ABNT NBR 12899"], correta:3, referencia:"ABNT. NBR 12899:2003. Disponível via ABNT: https://www.abnt.org.br/", explicacao:"A ABNT NBR 12899 trata da apresentação de fichas catalográficas." },
          { id:"c3", pergunta:"Em catalogação, o que representa o campo 245 no MARC 21?", opcoes:["A) Nota de conteúdo","B) Cabeçalho de assunto","C) Título e declaração de responsabilidade","D) Número de controle"], correta:2, referencia:"MARC 21 Format for Bibliographic Data. https://www.loc.gov/marc/bibliographic/", explicacao:"O campo 245 registra o título próprio e as declarações de responsabilidade do documento catalogado." },
          { id:"c4", pergunta:"O que é a entrada principal em catalogação?", opcoes:["A) Primeiro item adquirido pelo acervo","B) Ponto de acesso principal pelo qual o registro é identificado","C) Número de registro no sistema","D) Página de rosto do documento"], correta:1, referencia:"MEY, Eliane; SILVEIRA, Naira. Catalogação no plural. Brasília: Briquet de Lemos, 2009.", explicacao:"A entrada principal é o ponto de acesso sob o qual o registro bibliográfico é organizado — geralmente o autor principal." },
          { id:"c5", pergunta:"O FRBR organiza as entidades bibliográficas em grupos. Qual destas pertence ao Grupo 1?", opcoes:["A) Pessoa e entidade coletiva","B) Obra, expressão, manifestação e item","C) Conceito, objeto, evento e lugar","D) Suporte, formato, idioma e edição"], correta:1, referencia:"IFLA. Functional Requirements for Bibliographic Records. https://www.ifla.org/publications/functional-requirements-for-bibliographic-records/", explicacao:"O Grupo 1 do FRBR inclui as entidades produto do esforço intelectual: obra, expressão, manifestação e item." },
          { id:"c6", pergunta:"RDA (Resource Description and Access) substitui qual código de catalogação anterior?", opcoes:["A) CDD","B) ISBD","C) AACR2","D) DDC"], correta:2, referencia:"RDA Toolkit. https://www.rdatoolkit.org/", explicacao:"O RDA foi desenvolvido para substituir o AACR2 (Anglo-American Cataloguing Rules, 2ª ed.), alinhando-se ao modelo FRBR." },
          { id:"c7", pergunta:"O que é a ficha catalográfica?", opcoes:["A) Etiqueta colada no livro","B) Registro padronizado com dados bibliográficos do documento","C) Formulário de aquisição de livros","D) Lista de autoridades da biblioteca"], correta:1, referencia:"FUNARO, Vânia. Diretrizes para apresentação de dissertações e teses da USP. https://www.teses.usp.br/", explicacao:"A ficha catalográfica é um registro padronizado que descreve a obra, elaborado conforme normas bibliográficas." },
          { id:"c8", pergunta:"Qual é o padrão internacional para a descrição bibliográfica?", opcoes:["A) ISBD – International Standard Bibliographic Description","B) ISO 9001","C) AACR2","D) MARC 21"], correta:0, referencia:"IFLA ISBD Review Group. https://www.ifla.org/units/isbd-rg/", explicacao:"A ISBD (International Standard Bibliographic Description) estabelece os elementos e a pontuação da descrição bibliográfica." },
          { id:"c9", pergunta:"Em catalogação, o que são 'pontos de acesso'?", opcoes:["A) Ícones no sistema de automação","B) Entradas sob as quais o catálogo permite recuperar um registro","C) Campos obrigatórios do MARC 21","D) Etiquetas de código de barras"], correta:1, referencia:"MEY; SILVEIRA, 2009, op. cit.", explicacao:"Pontos de acesso são os elementos (autor, título, assunto, etc.) pelos quais o usuário pode localizar registros no catálogo." },
          { id:"c10", pergunta:"A 'catalogação cooperativa' refere-se a:", opcoes:["A) Trabalho individual do bibliotecário","B) Compartilhamento de registros bibliográficos entre bibliotecas","C) Catalogação realizada pelo usuário","D) Uso de IA para catalogar automaticamente"], correta:1, referencia:"OCLC WorldCat. https://www.worldcat.org/", explicacao:"Na catalogação cooperativa, instituições compartilham registros, evitando a duplicação do trabalho catalográfico." }
        ],
        dificil: [
          { id:"cd1", pergunta:"Qual o significado do indicador '1' no campo 100 do MARC 21?", opcoes:["A) Nome de família (sobrenome primeiro)","B) Nome pessoal em ordem direta","C) Nome de entidade","D) Entrada sem indicador"], correta:0, referencia:"LC MARC 21. Field 100: https://www.loc.gov/marc/bibliographic/bd100.html", explicacao:"No campo 100 (entrada principal – nome pessoal), o indicador '1' indica que o nome é de família, registrado no formato sobrenome, nome." },
          { id:"cd2", pergunta:"O conceito de 'obra' no modelo LRM (IFLA Library Reference Model) é:", opcoes:["A) Um exemplar físico específico","B) Uma entidade distinta que pode ter múltiplas expressões","C) Qualquer arquivo digital","D) Um assunto de pesquisa"], correta:1, referencia:"IFLA LRM. https://www.ifla.org/publications/node/11412", explicacao:"No LRM, obra é uma entidade conceitual — o conteúdo intelectual que pode se manifestar em diversas expressões e suportes." },
          { id:"cd3", pergunta:"O que diferencia 'manifestação' de 'item' no modelo FRBR?", opcoes:["A) Manifestação é a edição específica; item é o exemplar único","B) Manifestação é digital; item é físico","C) Não há diferença prática","D) Item é a obra completa; manifestação é fragmento"], correta:0, referencia:"IFLA FRBR Final Report. https://www.ifla.org/publications/functional-requirements-for-bibliographic-records/", explicacao:"Manifestação é a publicação específica (edição, impressão); item é o exemplar individual e único que pode ter marcas particulares." },
          { id:"cd4", pergunta:"O campo MARC 21 650 com segundo indicador '0' indica que o assunto provém de:", opcoes:["A) LCSH – Library of Congress Subject Headings","B) Vocabulário local","C) MeSH – Medical Subject Headings","D) OCLC Fast"], correta:0, referencia:"LC MARC 21 Field 650: https://www.loc.gov/marc/bibliographic/bd650.html", explicacao:"O segundo indicador '0' no campo 650 indica que o cabeçalho de assunto é retirado da Lista de Cabeçalhos de Assunto da Biblioteca do Congresso (LCSH)." },
          { id:"cd5", pergunta:"Linked Data aplicado a bibliotecas busca principalmente:", opcoes:["A) Aumentar a velocidade do catálogo","B) Tornar dados bibliográficos legíveis por máquinas e interoperáveis na web","C) Eliminar metadados dos registros","D) Substituir o MARC por XML puro"], correta:1, referencia:"W3C Library Linked Data. https://www.w3.org/2005/Incubator/lld/XGR-lld/", explicacao:"Linked Data permite que dados bibliográficos sejam publicados na Web de Dados, interligados e reutilizados por sistemas diversos." }
        ],
        muito_dificil: [
          { id:"cmd1", pergunta:"No contexto do BIBFRAME (Bibliographic Framework Initiative), qual entidade substitui o conceito de 'obra' do FRBR?", opcoes:["A) Work","B) Instance","C) Item","D) Agent"], correta:0, referencia:"Library of Congress BIBFRAME. https://www.loc.gov/bibframe/", explicacao:"No BIBFRAME, a entidade 'Work' corresponde ao conceito intelectual da obra, alinhado ao FRBR/LRM, sendo o núcleo do modelo." },
          { id:"cmd2", pergunta:"O que é o VIAF (Virtual International Authority File)?", opcoes:["A) Sistema de catalogação da UNESCO","B) Arquivo virtual de autoridades internacionais reunindo dados de múltiplas agências bibliográficas","C) Formato de exportação do MARC 21","D) Vocabulário controlado médico"], correta:1, referencia:"VIAF. https://viaf.org/", explicacao:"O VIAF é um serviço colaborativo que agrega dados de arquivos de autoridade de dezenas de bibliotecas nacionais, tornando identidades bibliográficas interoperáveis." },
          { id:"cmd3", pergunta:"Qual é o propósito do campo MARC 21 041?", opcoes:["A) Código de idioma do documento (incluindo traduções e resumos)","B) Nota de dissertação","C) Localização do item","D) Número padrão internacional"], correta:0, referencia:"LC MARC 21 Field 041: https://www.loc.gov/marc/bibliographic/bd041.html", explicacao:"O campo 041 registra os idiomas do texto principal, dos resumos, das legendas e de outros componentes do documento." }
        ]
      },
      mestrado: {
        medio: [
          { id:"cm1", pergunta:"O modelo conceitual FRBR influenciou diretamente o desenvolvimento de:", opcoes:["A) CDD 23ª edição","B) RDA e o BIBFRAME","C) MARC 21 original","D) ISO 2709"], correta:1, referencia:"OLIVER, Chris. Introducing RDA: a guide to the basics. Chicago: ALA, 2010.", explicacao:"O FRBR serviu de base teórica para o RDA e para o BIBFRAME, ambos projetados para substituir o AACR2 e o MARC 21." },
          { id:"cm2", pergunta:"Metadados descritivos diferem de metadados administrativos em que:", opcoes:["A) Os descritivos identificam e localizam recursos; os administrativos gerenciam e preservam","B) Os descritivos são mais recentes","C) Metadados administrativos são usados apenas em repositórios digitais","D) Não há diferença prática entre eles"], correta:0, referencia:"NISO. Understanding Metadata. https://www.niso.org/publications/understanding-metadata-2017", explicacao:"Metadados descritivos (título, autor, assunto) servem para localizar e identificar recursos; os administrativos (direitos, proveniência, preservação) gerenciam o objeto digital." },
          { id:"cm3", pergunta:"O protocolo Z39.50 é utilizado em bibliotecas para:", opcoes:["A) Indexação automática de textos","B) Busca e recuperação de informação entre sistemas heterogêneos","C) Backup de registros MARC","D) Geração de fichas catalográficas automaticamente"], correta:1, referencia:"ANSI/NISO Z39.50 Standard. https://www.loc.gov/z3950/agency/", explicacao:"O Z39.50 é um protocolo cliente-servidor que permite que sistemas de diferentes fornecedores consultem catálogos remotamente de forma padronizada." }
        ],
        dificil: [
          { id:"cmd1m", pergunta:"Na arquitetura BIBFRAME, o que a entidade 'Instance' representa?", opcoes:["A) A edição/publicação específica de uma obra","B) O arquivo digital do registro","C) A pessoa responsável pela catalogação","D) O número de cópias do acervo"], correta:0, referencia:"LC BIBFRAME Model. https://www.loc.gov/bibframe/docs/bibframe2-model.html", explicacao:"No BIBFRAME, 'Instance' corresponde à publicação específica (edição, formato) de uma 'Work', similar à 'manifestação' no FRBR." },
          { id:"cmd2m", pergunta:"O modelo FRAD (Functional Requirements for Authority Data) trata de:", opcoes:["A) Requisitos funcionais para dados de autoridade bibliográfica","B) Normas de digitalização de documentos raros","C) Gerenciamento de dados administrativos","D) Recuperação de informação em redes federadas"], correta:0, referencia:"IFLA FRAD. https://www.ifla.org/publications/functional-requirements-for-authority-data/", explicacao:"O FRAD define as entidades, atributos e relações necessários para satisfazer as necessidades dos usuários em dados de autoridade (nomes de pessoas, entidades, obras etc.)." }
        ],
        muito_dificil: [
          { id:"cmmd1", pergunta:"Qual é a principal diferença entre o modelo FRBR e o IFLA LRM (Library Reference Model)?", opcoes:["A) O LRM unifica FRBR, FRAD e FRSAD em um modelo mais consistente e coerente","B) O LRM é exclusivo para recursos digitais","C) O FRBR é mais recente que o LRM","D) O LRM elimina os grupos de entidades do FRBR"], correta:0, referencia:"RIVA, Pat et al. IFLA Library Reference Model (LRM). IFLA, 2017. https://www.ifla.org/publications/node/11412", explicacao:"O LRM consolidou e substituiu os três modelos conceituais da IFLA (FRBR, FRAD, FRSAD), eliminando inconsistências e ampliando o escopo para incluir recursos de todos os tipos." }
        ]
      },
      doutorado: {
        medio: [
          { id:"cdo1", pergunta:"A ontologia BIBFRAME foi desenvolvida com base em qual tecnologia da Web Semântica?", opcoes:["A) XML Schema","B) RDF (Resource Description Framework)","C) JSON puro","D) HTML5"], correta:1, referencia:"LC BIBFRAME Overview. https://www.loc.gov/bibframe/docs/bibframe-overview.html", explicacao:"O BIBFRAME foi construído sobre RDF, tecnologia central da Web Semântica, permitindo que os dados bibliográficos sejam publicados como Linked Data." },
          { id:"cdo2", pergunta:"O conceito de 'catalogação de nível mínimo' (minimal level record) no MARC 21 está associado a:", opcoes:["A) Registros incompletos aceitos em situações específicas para ampliar o acesso","B) Erros de catalogação tolerados","C) Registros apenas com ISBN e título","D) Catalogação simplificada para materiais digitais"], correta:0, referencia:"LC Bibliographic Record. https://www.loc.gov/marc/", explicacao:"O minimal level record é um registro bibliográfico com um conjunto mínimo de campos definidos pela Library of Congress, aceitável para ampliar o acesso ao acervo quando recursos são limitados." }
        ],
        dificil: [
          { id:"cdod1", pergunta:"Em Linked Data para bibliotecas, o que significa 'dereferenceable URI'?", opcoes:["A) Uma URI que pode ser acessada via HTTP retornando dados sobre o recurso identificado","B) Uma URI criptografada de acervo digital","C) Um identificador apenas para uso interno de sistemas","D) Uma URL que aponta para uma ficha catalográfica em PDF"], correta:0, referencia:"Heath, Tom; Bizer, Christian. Linked Data: Evolving the Web into a Global Data Space. https://linkeddatabook.com/", explicacao:"Uma URI dereferenciável permite que sistemas a acessem via HTTP e recebam dados estruturados sobre o recurso, habilitando a interoperabilidade na Web de Dados." }
        ],
        muito_dificil: [
          { id:"cdomd1", pergunta:"Na teoria da catalogação contemporânea, o que Elaine Svenonius denomina 'objetivos bibliográficos'?", opcoes:["A) As metas que o catálogo deve cumprir para o usuário: encontrar, identificar, selecionar, obter e navegar","B) Os campos obrigatórios do MARC 21","C) A missão institucional da biblioteca nacional","D) Os indicadores de qualidade do registro catalográfico"], correta:0, referencia:"SVENONIUS, Elaine. The intellectual foundation of information organization. Cambridge: MIT Press, 2000.", explicacao:"Svenonius reformulou os objetivos de Cutter, definindo cinco funções do catálogo: encontrar (find), identificar (identify), selecionar (select), obter (obtain) e navegar (navigate)." }
        ]
      }
    }
  },

  // ───────────────────────────── AUTORES FAMOSOS (verde) ─────────────────────────────
  autores: {
    label: "Autores Famosos",
    cor: "#2E7D32",
    corFonte: "#fff",
    emoji: "✍️",
    descricao: "Grandes nomes da Biblioteconomia e Ciência da Informação",
    niveis: {
      graduacao: {
        medio: [
          { id:"a1", pergunta:"Quem criou o Sistema de Classificação Decimal de Dewey (CDD)?", opcoes:["A) Charles Cutter","B) S. R. Ranganathan","C) Melvil Dewey","D) Paul Otlet"], correta:2, referencia:"DEWEY, Melvil. A Classification and Subject Index. Amherst, 1876.", explicacao:"Melvil Dewey publicou o sistema CDD em 1876, aos 25 anos. É o sistema de classificação bibliográfica mais usado no mundo." },
          { id:"a2", pergunta:"S. R. Ranganathan é conhecido por formular:", opcoes:["A) As 5 leis da Biblioteconomia","B) A Classificação Decimal Universal","C) O código de catalogação AACR2","D) O conceito de biblioteca virtual"], correta:0, referencia:"RANGANATHAN, S. R. The Five Laws of Library Science. Madras: Madras Library Association, 1931.", explicacao:"As 5 Leis de Ranganathan (1931): 1. Livros são para uso; 2. A cada leitor seu livro; 3. A cada livro seu leitor; 4. Poupe o tempo do leitor; 5. A biblioteca é um organismo em crescimento." },
          { id:"a3", pergunta:"Paul Otlet é considerado o pai de qual disciplina?", opcoes:["A) Arquivologia","B) Documentação / Ciência da Informação","C) Museologia","D) Comunicação social"], correta:1, referencia:"OTLET, Paul. Traité de documentation. Bruxelles: Mundaneum, 1934.", explicacao:"Paul Otlet, junto com Henri La Fontaine, fundou o Mundaneum e é considerado pioneiro da Documentação e precursor da Ciência da Informação." },
          { id:"a4", pergunta:"Jesse Shera é associado ao conceito de:", opcoes:["A) Bibliometria","B) Epistemologia social e fundamentos filosóficos da Biblioteconomia","C) Tesauros e linguagens documentárias","D) Preservação digital"], correta:1, referencia:"SHERA, Jesse H. Libraries and the organization of knowledge. London: Crosby Lockwood, 1965.", explicacao:"Jesse Shera desenvolveu o conceito de epistemologia social, argumentando que a Biblioteconomia deve fundamentar-se no estudo social do conhecimento." },
          { id:"a5", pergunta:"Charles Ammi Cutter é reconhecido por criar:", opcoes:["A) A CDU","B) O sistema de expansive classification e as regras de catalogação","C) A primeira biblioteca pública","D) O conceito de indexação automática"], correta:1, referencia:"CUTTER, Charles Ammi. Rules for a dictionary catalog. Washington: GPO, 1876.", explicacao:"Cutter criou a Expansive Classification e as 'Rules for a Dictionary Catalog', definindo os objetivos do catálogo que influenciaram toda a catalogação moderna." },
          { id:"a6", pergunta:"Vannevar Bush é lembrado na Ciência da Informação por:", opcoes:["A) Criar a CDD","B) Propor o Memex, precursor conceitual da hipertextualidade","C) Fundar a IFLA","D) Desenvolver o protocolo Z39.50"], correta:1, referencia:"BUSH, Vannevar. As we may think. The Atlantic Monthly, 1945. https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/", explicacao:"O Memex, descrito por Bush em 1945, era uma máquina hipotética que permitiria associar documentos por trilhas, antecipando conceitos como hipertexto e a Web." },
          { id:"a7", pergunta:"Suzanne Briet é conhecida pela famosa proposição 'Uma antílope é um documento?' em qual obra?", opcoes:["A) Traité de Documentation","B) Qu'est-ce que la documentation?","C) The Five Laws","D) Information Science in Theory and Practice"], correta:1, referencia:"BRIET, Suzanne. Qu'est-ce que la documentation? Paris: EDIT, 1951.", explicacao:"Em 'Qu'est-ce que la documentation?' (1951), Briet expandiu o conceito de documento para qualquer evidência física que sirva como prova, incluindo animais em zoológicos." },
          { id:"a8", pergunta:"Elaine Svenonius escreveu a obra fundamental da organização do conhecimento:", opcoes:["A) The Library and Society","B) The Intellectual Foundation of Information Organization","C) Libraries in the Information Age","D) Cataloging and Classification"], correta:1, referencia:"SVENONIUS, Elaine. The intellectual foundation of information organization. Cambridge: MIT Press, 2000.", explicacao:"Esta obra é considerada um dos textos mais rigorosos sobre os fundamentos teóricos da organização bibliográfica." },
          { id:"a9", pergunta:"Tefko Saracevic é especialmente reconhecido por seus estudos sobre:", opcoes:["A) Arquitetura de informação","B) Relevância e recuperação da informação","C) Gestão de coleções","D) Bibliometria"], correta:1, referencia:"SARACEVIC, Tefko. Relevance: A review of and a framework for the thinking on the notion in information science. JASIST, 1975.", explicacao:"Saracevic é um dos maiores teóricos da recuperação da informação, com contribuições fundamentais ao conceito de relevância." },
          { id:"a10", pergunta:"Bertalanffy influenciou a Ciência da Informação através da:", opcoes:["A) Teoria da probabilidade","B) Teoria Geral dos Sistemas","C) Teoria da Comunicação","D) Teoria dos jogos"], correta:1, referencia:"VON BERTALANFFY, Ludwig. General System Theory. New York: Braziller, 1968.", explicacao:"A Teoria Geral dos Sistemas de Bertalanffy influenciou a visão sistêmica das bibliotecas e dos processos de informação." }
        ],
        dificil: [
          { id:"ad1", pergunta:"Michael Buckland identificou três significados para a palavra 'informação'. Qual dos seguintes NÃO é um deles?", opcoes:["A) Informação-como-processo","B) Informação-como-conhecimento","C) Informação-como-código","D) Informação-como-coisa"], correta:2, referencia:"BUCKLAND, Michael. Information as thing. JASIST, 42(5), 1991. https://doi.org/10.1002/(SICI)1097-4571(199106)42:5<351::AID-ASI5>3.0.CO;2-3", explicacao:"Buckland identificou três sentidos: informação-como-processo (ato de informar), informação-como-conhecimento (o que é comunicado) e informação-como-coisa (dados e documentos). 'Informação-como-código' não é um deles." },
          { id:"ad2", pergunta:"Henry Evelyn Bliss é conhecido por desenvolver:", opcoes:["A) A Bibliographic Classification (BC)","B) O tesauro ERIC","C) O protocolo OAI-PMH","D) O vocabulário LCSH"], correta:0, referencia:"BLISS, Henry E. The Organization of Knowledge in Libraries. New York: Wilson, 1933.", explicacao:"Bliss criou a Bibliographic Classification (BC), um sistema facetado que influenciou a BC2, ainda usada em bibliotecas do Reino Unido." }
        ],
        muito_dificil: [
          { id:"amd1", pergunta:"No contexto da filosofia da informação, Luciano Floridi define 'informação semântica bem fundamentada' como:", opcoes:["A) Dados com sentido e verdade (data + meaning + truth)","B) Qualquer dado armazenado em sistema digital","C) Informação verificada por peer review","D) Metadados estruturados em padrão aberto"], correta:0, referencia:"FLORIDI, Luciano. The Philosophy of Information. Oxford: Oxford University Press, 2011.", explicacao:"Para Floridi, informação semântica é constituída por dados (diferenças que fazem diferença), com sentido (meaningful) e que sejam verdadeiros (truthful) — GDI: General Definition of Information." }
        ]
      },
      mestrado: {
        medio: [
          { id:"am1", pergunta:"Birger Hjørland é associado ao conceito de:", opcoes:["A) Bibliometria aplicada","B) Análise de domínio como abordagem da Ciência da Informação","C) Gestão do conhecimento empresarial","D) Preservação de acervos digitais"], correta:1, referencia:"HJØRLAND, Birger; ALBRECHTSEN, Hanne. Toward a new horizon in information science: Domain-analysis. JASIST, 1995.", explicacao:"Hjørland propôs a análise de domínio como paradigma para a CI, argumentando que comunidades discursivas determinam o que é relevante e como a informação é organizada." }
        ],
        dificil: [
          { id:"amd1m", pergunta:"Patrick Wilson desenvolveu o conceito de 'controle bibliográfico' como:", opcoes:["A) Capacidade de localizar tudo que foi publicado sobre um dado tema ou por um dado autor","B) Método de restrição de acesso a documentos sigilosos","C) Técnica de avaliação da qualidade dos catálogos","D) Processo de catalogação retrospectiva"], correta:0, referencia:"WILSON, Patrick. Two kinds of power: An essay on bibliographical control. Berkeley: University of California Press, 1968.", explicacao:"Wilson definiu controle bibliográfico como o domínio sobre a literatura — a capacidade de identificar tudo que foi publicado sobre um assunto ou por um autor específico." }
        ],
        muito_dificil: [
          { id:"ammd1", pergunta:"A corrente teórica da Fenomenografia aplicada à Ciência da Informação está associada principalmente a:", opcoes:["A) Christine Bruce e o conceito de information literacy experiencial","B) Saracevic e modelos de recuperação da informação","C) Ranganathan e as leis da biblioteconomia","D) Otlet e a documentação"], correta:0, referencia:"BRUCE, Christine. The seven faces of information literacy. Adelaide: Auslib Press, 1997.", explicacao:"Bruce aplicou a Fenomenografia para descrever as diferentes maneiras pelas quais pessoas experienciam a competência informacional (information literacy), identificando 7 'faces'." }
        ]
      },
      doutorado: {
        medio: [
          { id:"ado1", pergunta:"A obra 'Social Epistemology' de Jesse Shera argumenta que a Biblioteconomia deve basear-se em:", opcoes:["A) Princípios matemáticos da recuperação da informação","B) Estudo do conhecimento como fenômeno social e sua transmissão cultural","C) Normas técnicas internacionais de catalogação","D) Indicadores bibliométricos de impacto científico"], correta:1, referencia:"SHERA, Jesse H. Sociological foundations of librarianship. New York: Asia Publishing House, 1970.", explicacao:"Para Shera, a Biblioteconomia só pode ser teoricamente fundamentada se compreender como o conhecimento é produzido, organizado e transmitido socialmente." }
        ],
        dificil: [
          { id:"adod1", pergunta:"Qual teórico desenvolveu a noção de 'warrant' (faculdade de autorização) para fundamentar a construção de vocabulários controlados?", opcoes:["A) Bliss com 'scientific and educational consensus'","B) Ranganathan com as facetas PMEST","C) Cutter com os objetivos do catálogo","D) Dewey com a notação decimal"], correta:0, referencia:"BLISS, Henry E. The organization of knowledge in libraries. New York: Wilson, 1933.", explicacao:"Bliss propôs que a organização do conhecimento deve basear-se no consenso científico e educacional (scientific warrant), princípio que fundamenta a legitimidade das escolhas classificatórias." }
        ],
        muito_dificil: [
          { id:"adomd1", pergunta:"No contexto da metateoría da Ciência da Informação, Rafael Capurro distingue os paradigmas físico, cognitivo e social. Qual paradigma critica a visão do usuário como processador de informação isolado?", opcoes:["A) O paradigma social (e posteriormente o hermenêutico)","B) O paradigma físico de Shannon","C) O paradigma cognitivo de Belkin","D) O paradigma bibliométrico de Pritchard"], correta:0, referencia:"CAPURRO, Rafael. Epistemology and information science. 1985; CAPURRO, R.; HJØRLAND, B. The concept of information. ARIST, 2003.", explicacao:"Capurro critica o paradigma cognitivo por tratar o usuário como sistema de processamento isolado, propondo o paradigma social (e hermenêutico) que situa a informação em contextos culturais e linguísticos." }
        ]
      }
    }
  },

  // ───────────────────────────── CITAÇÕES (amarelo) ─────────────────────────────
  citacoes: {
    label: "Citações Famosas",
    cor: "#F9A825",
    corFonte: "#333",
    emoji: "💬",
    descricao: "Identifique o autor de grandes citações da área",
    niveis: {
      graduacao: {
        medio: [
          { id:"ci1", pergunta:"'Uma biblioteca sem livros é como uma escola sem alunos.' Essa frase é atribuída a:", opcoes:["A) Melvil Dewey","B) Ranganathan","C) Autor desconhecido / provérbio popular","D) Paul Otlet"], correta:2, referencia:"Expressão popular da área de Biblioteconomia.", explicacao:"Esta é uma expressão popular muito citada na área, sem atribuição definitiva a um único autor específico." },
          { id:"ci2", pergunta:"'A biblioteca é um organismo vivo em crescimento.' Qual das 5 Leis de Ranganathan expressa essa ideia?", opcoes:["A) 1ª Lei","B) 3ª Lei","C) 5ª Lei","D) 2ª Lei"], correta:2, referencia:"RANGANATHAN, S.R. The Five Laws of Library Science. 1931.", explicacao:"A 5ª Lei de Ranganathan — 'A biblioteca é um organismo em crescimento' — enfatiza a natureza dinâmica e evolutiva das bibliotecas." },
          { id:"ci3", pergunta:"'Poupe o tempo do leitor' corresponde a qual Lei de Ranganathan?", opcoes:["A) 2ª Lei","B) 4ª Lei","C) 1ª Lei","D) 3ª Lei"], correta:1, referencia:"RANGANATHAN, 1931, op. cit.", explicacao:"A 4ª Lei — 'Poupe o tempo do leitor' — orienta que os serviços e sistemas de biblioteca devem ser ágeis e eficientes para o usuário." },
          { id:"ci4", pergunta:"'The time is when the library is a school and the librarian in the highest sense a teacher.' Quem disse isso?", opcoes:["A) Ranganathan","B) Paul Otlet","C) Melvil Dewey","D) Jesse Shera"], correta:2, referencia:"DEWEY, Melvil. The American Library Journal, 1876.", explicacao:"Melvil Dewey expressou essa visão educacional da biblioteca e do bibliotecário em artigo fundador de 1876." },
          { id:"ci5", pergunta:"'A cada leitor seu livro' refere-se à qual lei de Ranganathan?", opcoes:["A) 1ª Lei","B) 2ª Lei","C) 3ª Lei","D) 5ª Lei"], correta:1, referencia:"RANGANATHAN, 1931.", explicacao:"A 2ª Lei — 'A cada leitor seu livro' — orienta a personalização do serviço e o acesso igualitário à informação." },
          { id:"ci6", pergunta:"'Livros são para uso.' Essa frase expressa qual lei de Ranganathan?", opcoes:["A) 5ª Lei","B) 4ª Lei","C) 2ª Lei","D) 1ª Lei"], correta:3, referencia:"RANGANATHAN, 1931.", explicacao:"A 1ª Lei — 'Livros são para uso' — combate o tratamento da biblioteca como museu e defende o acesso ativo e a circulação do acervo." },
          { id:"ci7", pergunta:"'A cada livro seu leitor' é a:", opcoes:["A) 1ª Lei de Ranganathan","B) 2ª Lei de Ranganathan","C) 3ª Lei de Ranganathan","D) 4ª Lei de Ranganathan"], correta:2, referencia:"RANGANATHAN, 1931.", explicacao:"A 3ª Lei — 'A cada livro seu leitor' — defende que todo documento tem seu público potencial e a biblioteca deve aproximá-los." },
          { id:"ci8", pergunta:"'O verdadeiro tesouro da humanidade é a memória coletiva registrada nos documentos.' Essa ideia é central nas obras de:", opcoes:["A) Vannevar Bush","B) Paul Otlet","C) Melvil Dewey","D) Charles Cutter"], correta:1, referencia:"OTLET, Paul. Traité de documentation. 1934.", explicacao:"Otlet via os documentos como a memória organizada da humanidade, base de seu projeto do Mundaneum e do que chamou de 'Mundo do Livro'." },
          { id:"ci9", pergunta:"'As we may think' é o título de famoso artigo de 1945 que antecipou a Web. Seu autor é:", opcoes:["A) Norbert Wiener","B) Claude Shannon","C) Vannevar Bush","D) Alan Turing"], correta:2, referencia:"BUSH, Vannevar. As we may think. The Atlantic, jul. 1945. https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/", explicacao:"Vannevar Bush descreveu o Memex neste artigo — uma máquina que permitiria criar trilhas associativas entre documentos, antecipando o hipertexto e a Web." },
          { id:"ci10", pergunta:"A frase 'Há mais informação disponível do que pode ser usada' está ligada ao problema conhecido como:", opcoes:["A) Ilusão do conhecimento","B) Sobrecarga de informação (information overload)","C) Déficit cognitivo","D) Paradoxo bibliográfico"], correta:1, referencia:"TOFFLER, Alvin. Future Shock. 1970; BAWDEN, D.; ROBINSON, L. The dark side of information. JIS, 2009.", explicacao:"'Sobrecarga de informação' descreve o estado em que o volume de dados disponíveis excede a capacidade humana de processá-los, prejudicando a tomada de decisão." }
        ],
        dificil: [
          { id:"cid1", pergunta:"'The map is not the territory.' Essa proposição de Alfred Korzybski tem implicações para a CI porque:", opcoes:["A) Representa indexados não são os próprios documentos — o mapa bibliográfico representa, mas não é a realidade","B) Defende que apenas mapas geográficos são documentos","C) Critica o uso de metáforas na indexação","D) Apoia a classificação por forma física"], correta:0, referencia:"KORZYBSKI, Alfred. Science and Sanity. 1933; aplicado à CI por BUCKLAND, Michael.", explicacao:"Na CI, o princípio de Korzybski é usado para lembrar que registros, índices e catálogos são representações — não os próprios objetos do conhecimento." },
          { id:"cid2", pergunta:"'Information is the difference that makes a difference.' Essa definição de informação é atribuída a:", opcoes:["A) Gregory Bateson","B) Claude Shannon","C) Norbert Wiener","D) Luciano Floridi"], correta:0, referencia:"BATESON, Gregory. Steps to an ecology of mind. 1972.", explicacao:"Gregory Bateson definiu informação como 'a diferença que faz diferença', uma perspectiva pragmática e contextual amplamente citada na CI." }
        ],
        muito_dificil: [
          { id:"cimd1", pergunta:"'Le livre est un monument du passé mais aussi un instrument du présent et un outil de l'avenir.' Essa frase de Paul Otlet antecipa a visão do documento como:", opcoes:["A) Artefato estático de preservação","B) Interface dinâmica entre memória, uso presente e construção futura do conhecimento","C) Produto comercial da indústria editorial","D) Objeto de coleção museológica"], correta:1, referencia:"OTLET, Paul. Traité de documentation. Bruxelles: Mundaneum, 1934.", explicacao:"Otlet vislumbrava o documento como instrumento vivo — memória do passado, ferramenta do presente e semente do conhecimento futuro, antecipando o hipertexto e a interatividade." }
        ]
      },
      mestrado: {
        medio: [
          { id:"cim1", pergunta:"'Relevance is in the eye of the beholder.' Essa ideia central nos estudos de relevância é mais associada a:", opcoes:["A) Cranfield model","B) Perspectiva subjetiva e situacional da relevância (Saracevic, Schamber)","C) Modelo vetorial de recuperação","D) Teoria da busca ótima de informação"], correta:1, referencia:"SCHAMBER, Linda; EISENBERG, M.B.; NILAN, M.S. A re-examination of relevance: toward a dynamic, situational definition. Information Processing & Management, 1990.", explicacao:"Schamber e outros pesquisadores demonstraram que relevância é multidimensional, dinâmica e depende da situação e perspectiva de cada usuário." }
        ],
        dificil: [{ id:"cimd1m", pergunta:"'A biblioteca é uma instituição que garante a memória da sociedade e a base para a produção do conhecimento.' Essa concepção alinha-se principalmente a qual perspectiva teórica?", opcoes:["A) Funcionalismo estrutural em CI (bibliotecas como sistemas sociais funcionais)","B) Teoria crítica da informação","C) Perspectiva cognitivista da CI","D) Abordagem bibliométrica"], correta:0, referencia:"WIEGAND, Wayne; DAVIS, Donald Jr. (eds.). Encyclopedia of Library History. New York: Garland, 1994.", explicacao:"A visão da biblioteca como instituição garantidora da memória social é fundamentada no funcionalismo estrutural, que analisa as bibliotecas como sistemas que cumprem funções essenciais na reprodução cultural." }],
        muito_dificil: [{ id:"cimmd1", pergunta:"A proposição de Hjørland de que 'o significado de um documento é determinado por sua comunidade discursiva' fundamenta-se em qual corrente filosófica?", opcoes:["A) Pragmatismo e filosofia analítica da linguagem (especialmente Wittgenstein)","B) Idealismo kantiano","C) Positivismo lógico do Círculo de Viena","D) Fenomenologia husserliana"], correta:0, referencia:"HJØRLAND, Birger. Toward a theory of aboutness, subject, topicality, theme, domain, field, content... and relevance. JASIST, 2001.", explicacao:"Hjørland ancora sua análise de domínio no pragmatismo e na filosofia da linguagem de Wittgenstein ('significado é uso'), argumentando que o que conta como informação relevante é determinado pela prática da comunidade." }]
      },
      doutorado: {
        medio: [{ id:"cido1", pergunta:"'The library is not a shrine for the worship of books. It is not a temple where literary incense must be burned or where one's devotion to the bound book is expressed in ritual.' Essa crítica de Archibald MacLeish em 1940 antecipou:", opcoes:["A) O movimento de acesso aberto","B) A visão centrada no usuário e no uso da informação, contra o bibliocentrismo","C) A digitalização de acervos","D) A automação de catálogos"], correta:1, referencia:"MacLEISH, Archibald. The librarian and the democratic process. ALA Bulletin, 1940.", explicacao:"MacLeish criticava o bibliocentrismo — a adoração do livro como objeto — em favor de uma biblioteca voltada para as pessoas e para o uso democrático da informação." }],
        dificil: [{ id:"cdod1c", pergunta:"Qual a implicação teórica da frase de Wittgenstein 'Os limites da minha linguagem significam os limites do meu mundo' para a organização do conhecimento?", opcoes:["A) Vocabulários controlados limitam o acesso a conceitos fora de seus sistemas classificatórios","B) Apenas documentos escritos podem ser indexados","C) A linguagem natural é superior à linguagem documentária","D) Os sistemas de classificação devem ser monolíngues"], correta:0, referencia:"WITTGENSTEIN, Ludwig. Tractatus Logico-Philosophicus. 1921; aplicado à CI por HJØRLAND, Birger.", explicacao:"Para a OC, isso significa que qualquer sistema de classificação ou vocabulário controlado impõe limites ao que pode ser representado e recuperado — escolhas linguísticas são escolhas epistemológicas." }],
        muito_dificil: [{ id:"cdomd1c", pergunta:"A epistemologia de Gaston Bachelard, especialmente o conceito de 'obstáculo epistemológico', é aplicada à CI para explicar:", opcoes:["A) As resistências cognitivas e institucionais à mudança nos paradigmas de organização da informação","B) A dificuldade técnica da digitalização de documentos raros","C) Os limites de capacidade dos sistemas de recuperação","D) A inércia dos bibliotecários em adotar novas tecnologias"], correta:0, referencia:"BACHELARD, Gaston. La formation de l'esprit scientifique. Paris: Vrin, 1938; aplicações em CI por autores da escola francesa.", explicacao:"Os 'obstáculos epistemológicos' de Bachelard são usados na CI para compreender por que paradigmas ultrapassados (ex.: classificação universalista, visão física da informação) persistem mesmo após evidências de suas limitações." }]
      }
    }
  },

  // ───────────────────────────── ABNT (azul) ─────────────────────────────
  abnt: {
    label: "Normas ABNT",
    cor: "#1565C0",
    corFonte: "#fff",
    emoji: "📐",
    descricao: "Normas brasileiras de documentação e referências",
    niveis: {
      graduacao: {
        medio: [
          { id:"ab1", pergunta:"A ABNT NBR 6023:2018 trata de:", opcoes:["A) Apresentação de trabalhos acadêmicos","B) Elaboração de referências bibliográficas","C) Citações em documentos","D) Resumos de documentos"], correta:1, referencia:"ABNT. NBR 6023:2018 – Informação e documentação – Referências – Elaboração. https://www.abnt.org.br/", explicacao:"A NBR 6023:2018 define os critérios para elaboração e apresentação de referências bibliográficas em trabalhos acadêmicos e científicos." },
          { id:"ab2", pergunta:"Citações com mais de 3 linhas devem ser:", opcoes:["A) Colocadas entre aspas no corpo do texto","B) Destacadas em parágrafo próprio com recuo de 4 cm e letra menor","C) Colocadas em nota de rodapé","D) Omitidas e apenas referenciadas"], correta:1, referencia:"ABNT NBR 10520:2023 – Citações.", explicacao:"Citações diretas longas (mais de 3 linhas) devem ser destacadas com recuo de 4 cm da margem esquerda, em letra menor (geralmente 10pt), sem aspas, conforme NBR 10520." },
          { id:"ab3", pergunta:"Qual norma regula a apresentação de trabalhos acadêmicos (TCC, monografias, dissertações)?", opcoes:["A) ABNT NBR 6023","B) ABNT NBR 14724","C) ABNT NBR 10520","D) ABNT NBR 6028"], correta:1, referencia:"ABNT. NBR 14724:2011 – Trabalhos acadêmicos – Apresentação.", explicacao:"A NBR 14724:2011 estabelece os princípios gerais para apresentação de trabalhos acadêmicos — estrutura, formatação e elementos pré-textuais, textuais e pós-textuais." },
          { id:"ab4", pergunta:"Na referência ABNT, o título da obra deve estar em:", opcoes:["A) Itálico ou negrito (um dos dois, de forma consistente)","B) Letras maiúsculas em todo o título","C) Fonte diferente do restante","D) Entre aspas duplas"], correta:0, referencia:"ABNT NBR 6023:2018, seção 6.", explicacao:"A NBR 6023:2018 determina que o título da obra referenciada deve ser destacado em negrito ou itálico — o importante é a consistência ao longo do trabalho." },
          { id:"ab5", pergunta:"A ABNT NBR 6028 trata de:", opcoes:["A) Resumos","B) Referências","C) Citações","D) Sumários"], correta:0, referencia:"ABNT NBR 6028:2021 – Resumo, resenha e recensão.", explicacao:"A NBR 6028:2021 define os requisitos para redação de resumos (informativo, indicativo e crítico) em documentos e publicações." },
          { id:"ab6", pergunta:"Em uma referência de livro com dois autores, como devem ser grafados os nomes segundo a NBR 6023?", opcoes:["A) Apenas o primeiro autor, seguido de 'et al.'","B) Os dois autores, em maiúsculas, separados por ponto e vírgula","C) Os dois autores com vírgula após o sobrenome, separados por ponto e vírgula (ou 'e')","D) Somente os sobrenomes dos dois autores"], correta:2, referencia:"ABNT NBR 6023:2018, seção 6.2.1.", explicacao:"Para até 3 autores, todos devem ser indicados na referência, com o sobrenome em maiúsculas e separados por ponto e vírgula (;) conforme a NBR 6023:2018." },
          { id:"ab7", pergunta:"Para obras com mais de 3 autores, a NBR 6023:2018 determina:", opcoes:["A) Citar apenas o primeiro, seguido de 'et al.' (expressão em itálico)","B) Citar todos os autores obrigatoriamente","C) Usar 'e outros' no lugar de 'et al.'","D) Citar apenas os dois primeiros autores"], correta:0, referencia:"ABNT NBR 6023:2018, seção 6.2.1.", explicacao:"Com mais de 3 autores, indica-se o primeiro seguido de 'et al.' (em itálico), embora a norma permita a indicação de todos quando necessário para identificação da obra." },
          { id:"ab8", pergunta:"A margem superior de um trabalho acadêmico conforme ABNT deve ser de:", opcoes:["A) 3 cm","B) 2 cm","C) 4 cm","D) 2,5 cm"], correta:0, referencia:"ABNT NBR 14724:2011, seção 5.1.", explicacao:"A NBR 14724 estabelece margens superior e esquerda de 3 cm, e inferior e direita de 2 cm para trabalhos acadêmicos." },
          { id:"ab9", pergunta:"O espaçamento entre linhas padrão para o texto de trabalhos acadêmicos pela ABNT é:", opcoes:["A) Simples","B) 1,5","C) Duplo","D) 1,15"], correta:1, referencia:"ABNT NBR 14724:2011, seção 5.2.", explicacao:"O texto dos trabalhos acadêmicos deve ser digitado com espaçamento 1,5 entre linhas, conforme a NBR 14724:2011." },
          { id:"ab10", pergunta:"Qual é o recuo de parágrafo padrão em trabalhos acadêmicos ABNT?", opcoes:["A) 0,5 cm","B) 1,0 cm","C) 1,25 cm","D) 2,0 cm"], correta:2, referencia:"ABNT NBR 14724:2011.", explicacao:"O recuo de parágrafo recomendado é de 1,25 cm (equivalente a uma tabulação padrão), conforme orientações da NBR 14724." }
        ],
        dificil: [
          { id:"abd1", pergunta:"Na NBR 10520:2023, o sistema autor-data para citação indireta de obra de dois autores deve ser apresentado como:", opcoes:["A) (SILVA; SOUZA, 2020)","B) (SILVA e SOUZA, 2020)","C) (SILVA, SOUZA, 2020)","D) (SILVA & SOUZA, 2020)"], correta:0, referencia:"ABNT NBR 10520:2023 – Citações em documentos.", explicacao:"Na citação no texto (sistema autor-data), dois autores são separados por ponto e vírgula: (SILVA; SOUZA, 2020), conforme NBR 10520:2023." },
          { id:"abd2", pergunta:"Como referenciar um capítulo de livro organizado (coletânea) conforme NBR 6023:2018?", opcoes:["A) Igual a livro, sem distinção","B) AUTOR DO CAPÍTULO. Título do capítulo. In: AUTOR/ORGANIZADOR DO LIVRO. Título do livro. Local: Editora, ano. p. inicial-final.","C) Apenas o título do livro, sem mencionar o capítulo","D) ORGANIZADOR DO LIVRO. Título do capítulo. In: Título do livro. ano."], correta:1, referencia:"ABNT NBR 6023:2018, seção 7.3.", explicacao:"Capítulos de coletâneas são referenciados pela autoria do capítulo, seguida do 'In:' e dos dados completos do livro." }
        ],
        muito_dificil: [
          { id:"abmd1", pergunta:"A NBR 6023:2018 trouxe mudanças em relação à edição de 2002 no que se refere a documentos eletrônicos. A principal mudança foi:", opcoes:["A) Tornar obrigatória a indicação 'Disponível em:' e 'Acesso em:' apenas para recursos sem DOI; com DOI, apenas o DOI é suficiente","B) Eliminar completamente a exigência de indicar o URL","C) Exigir que todos os documentos tenham DOI","D) Separar documentos digitais em norma específica"], correta:0, referencia:"ABNT NBR 6023:2018, seção 7.12.", explicacao:"Na NBR 6023:2018, documentos com DOI dispensam a indicação de URL e data de acesso; para os sem DOI, a URL e a data de acesso permanecem obrigatórias." }
        ]
      },
      mestrado: {
        medio: [
          { id:"abm1", pergunta:"A ABNT NBR 15287 trata de:", opcoes:["A) Projetos de pesquisa – Apresentação","B) Teses e dissertações","C) Artigos científicos","D) Relatórios técnicos"], correta:0, referencia:"ABNT NBR 15287:2011 – Projeto de pesquisa – Apresentação.", explicacao:"A NBR 15287:2011 estabelece os princípios para a apresentação de projetos de pesquisa, diferindo da NBR 14724 que trata de trabalhos acadêmicos finais." }
        ],
        dificil: [
          { id:"abmd1m", pergunta:"No contexto da normalização bibliográfica, o DOI (Digital Object Identifier) é gerenciado por:", opcoes:["A) International DOI Foundation (IDF)","B) ABNT – Associação Brasileira de Normas Técnicas","C) IBICT – Instituto Brasileiro de Informação em Ciência e Tecnologia","D) ISO – International Organization for Standardization"], correta:0, referencia:"International DOI Foundation. https://www.doi.org/", explicacao:"O DOI é um sistema de identificação persistente gerenciado pela International DOI Foundation (IDF), que delega operações a agências de registro como a Crossref." }
        ],
        muito_dificil: [
          { id:"abmmd1", pergunta:"No âmbito da interoperabilidade de metadados, o padrão Dublin Core Metadata Initiative (DCMI) alinha-se à ABNT em quais elementos centrais de descrição?", opcoes:["A) Título, criador, assunto, descrição, editor, data e tipo de recurso são elementos comuns a ambos","B) Dublin Core é incompatível com padrões ABNT","C) Dublin Core aplica-se apenas a acervos musicais","D) ABNT e Dublin Core compartilham apenas o elemento 'formato'"], correta:0, referencia:"Dublin Core Metadata Initiative. https://www.dublincore.org/; ABNT NBR 6023:2018.", explicacao:"Os 15 elementos do Dublin Core (título, criador, assunto, descrição, editor, contribuidor, data, tipo, formato, identificador, fonte, idioma, relação, cobertura e direitos) alinham-se diretamente aos campos básicos de qualquer referência bibliográfica." }
        ]
      },
      doutorado: {
        medio: [
          { id:"abdo1", pergunta:"A relação entre normalização bibliográfica e epistemologia da CI se expressa no fato de que:", opcoes:["A) Normas ABNT foram criadas independentemente da teoria bibliográfica","B) As normas materializam escolhas epistemológicas sobre o que constitui um 'documento' e como ele deve ser representado","C) Normalização é apenas questão técnica sem implicações teóricas","D) A ABNT só regula aspectos formais sem conteúdo semântico"], correta:1, referencia:"MEY, Eliane; SILVEIRA, Naira. Catalogação no plural. Brasília: Briquet de Lemos, 2009.", explicacao:"As normas bibliográficas não são neutras — ao definir o que é um documento, quais elementos devem ser descritos e como, elas materializam concepções teóricas sobre o conhecimento e sua organização." }
        ],
        dificil: [
          { id:"abdod1", pergunta:"A convergência entre ISBD, RDA e ABNT NBR 6023 revela um processo de:", opcoes:["A) Harmonização internacional que impõe padrões locais à diversidade cultural bibliográfica","B) Harmonização progressiva de padrões de descrição para facilitar a interoperabilidade global","C) Substituição das normas nacionais pelas internacionais","D) Eliminação da catalogação descritiva em favor da indexação automática"], correta:1, referencia:"IFLA. ISBD: International Standard Bibliographic Description, 2011; RDA Toolkit, 2010.", explicacao:"A evolução das normas de descrição bibliográfica revela uma tendência à harmonização internacional, buscando interoperabilidade dos dados em contextos de catálogos coletivos e Linked Data." }
        ],
        muito_dificil: [
          { id:"abdomd1", pergunta:"A distinção entre 'normalização prescritiva' e 'normalização descritiva' em Biblioteconomia implica que:", opcoes:["A) Normas prescritivas impõem regras; normas descritivas documentam práticas existentes — o RDA tende ao descritivo, o AACR2 ao prescritivo","B) Não há distinção real na prática catalográfica","C) Ambas são idênticas no contexto ABNT","D) Normalização descritiva aplica-se apenas a dicionários de termos"], correta:0, referencia:"OLIVER, Chris. Introducing RDA. Chicago: ALA, 2010; MAXWELL, Robert. FRBR: A guide for the perplexed. Chicago: ALA, 2008.", explicacao:"O AACR2 tinha abordagem prescritiva ('faça assim'); o RDA é mais descritivo e baseado em princípios, definindo o que registrar (não exatamente como), o que flexibiliza a aplicação mas exige mais julgamento profissional." }
        ]
      }
    }
  },

  // ───────────────────────────── HISTÓRIA DA BIBLIOTECONOMIA (roxo) ─────────────────────────────
  historia: {
    label: "História da Biblioteconomia",
    cor: "#6A1B9A",
    corFonte: "#fff",
    emoji: "🏛️",
    descricao: "Das tábuas de argila à era digital",
    niveis: {
      graduacao: {
        medio: [
          { id:"h1", pergunta:"A Biblioteca de Alexandria foi fundada por volta de:", opcoes:["A) 100 a.C.","B) 300 a.C.","C) 500 d.C.","D) 50 a.C."], correta:1, referencia:"EL-ABBADI, Mostafa. Life and Fate of the Ancient Library of Alexandria. Paris: UNESCO, 1990.", explicacao:"A Biblioteca de Alexandria foi fundada no século III a.C. (~300 a.C.) sob o reinado de Ptolomeu I Sóter no Egito, tornando-se o maior centro de conhecimento da Antiguidade." },
          { id:"h2", pergunta:"A primeira biblioteca pública financiada com recursos públicos nos EUA foi criada em:", opcoes:["A) Nova York, 1895","B) Boston, 1854","C) Filadélfia, 1731","D) Chicago, 1872"], correta:1, referencia:"HARRIS, Michael H. History of Libraries in the Western World. Metuchen: Scarecrow, 1995.", explicacao:"A Boston Public Library, fundada em 1854, é considerada a primeira grande biblioteca pública municipal financiada com recursos públicos nos Estados Unidos." },
          { id:"h3", pergunta:"O Mundaneum foi criado por Paul Otlet e Henri La Fontaine com o objetivo de:", opcoes:["A) Digitalizar todos os livros do mundo","B) Criar um repositório universal do conhecimento humano","C) Catalogar apenas obras científicas europeias","D) Estabelecer normas internacionais de catalogação"], correta:1, referencia:"WRIGHT, Alex. Cataloging the World. New York: Oxford University Press, 2014.", explicacao:"O Mundaneum (1895, Bruxelas) era o projeto de Otlet e La Fontaine para criar um repertório universal do conhecimento — uma espécie de 'Google antes da internet'." },
          { id:"h4", pergunta:"O primeiro curso de Biblioteconomia no Brasil foi criado em:", opcoes:["A) 1915, na Biblioteca Nacional do Rio de Janeiro","B) 1930, na USP","C) 1950, na UFRJ","D) 1945, na Biblioteca Pública de São Paulo"], correta:0, referencia:"FONSECA, Edson Nery da. A Biblioteconomia brasileira no contexto mundial. Brasília: Thesaurus, 1979.", explicacao:"O primeiro curso de Biblioteconomia no Brasil foi criado em 1915 na Biblioteca Nacional do Rio de Janeiro, sendo o mais antigo da América Latina." },
          { id:"h5", pergunta:"As primeiras tábuas de argila com registros de informação foram encontradas na:", opcoes:["A) Grécia Antiga","B) Mesopotâmia (atual Iraque)","C) Egito Antigo","D) China Antiga"], correta:1, referencia:"BATTLES, Matthew. Library: An Unquiet History. New York: Norton, 2003.", explicacao:"As primeiras tábuas de argila com escrita cuneiforme foram encontradas na Mesopotâmia (~3500-3000 a.C.), representando os registros de informação mais antigos conhecidos." },
          { id:"h6", pergunta:"A IFLA (International Federation of Library Associations and Institutions) foi fundada em:", opcoes:["A) 1927","B) 1900","C) 1945","D) 1960"], correta:0, referencia:"IFLA. History of IFLA. https://www.ifla.org/about-ifla/history/", explicacao:"A IFLA foi fundada em 1927 em Edimburgo, Escócia, durante o 50º aniversário da conferência fundadora da American Library Association." },
          { id:"h7", pergunta:"O papiro foi o principal suporte de escrita no Egito Antigo. Qual é a principal vantagem do pergaminho em relação ao papiro?", opcoes:["A) Era mais barato de produzir","B) Era mais resistente e permitia apagamento e reescrita","C) Podia ser produzido em qualquer região","D) Era mais fácil de enrolar em rolos"], correta:1, referencia:"MANGUEL, Alberto. Uma história da leitura. São Paulo: Companhia das Letras, 1997.", explicacao:"O pergaminho (feito de pele animal) era mais resistente que o papiro, podia ser raspado e reutilizado (palimpsesto) e permitiu o desenvolvimento do codex (formato de livro em folhas)." },
          { id:"h8", pergunta:"A imprensa de tipos móveis de Gutenberg (~1450) revolucionou a Biblioteconomia porque:", opcoes:["A) Tornou os livros mais caros e exclusivos","B) Permitiu a produção em massa de livros, democratizando o acesso à informação","C) Eliminou a necessidade de bibliotecas","D) Criou o primeiro sistema de classificação bibliográfica"], correta:1, referencia:"EISENSTEIN, Elizabeth. The Printing Press as an Agent of Change. Cambridge: Cambridge University Press, 1979.", explicacao:"A imprensa de Gutenberg (~1450) viabilizou a reprodução em massa de textos, reduzindo custos, ampliando a circulação do conhecimento e criando a necessidade de organização bibliográfica em maior escala." },
          { id:"h9", pergunta:"O Código de Hamurabi, descoberto em argila, é exemplo de:", opcoes:["A) Sistema de classificação antigo","B) Registro de informação em suporte duradouro para preservação e acesso","C) Catálogo de biblioteca mesopotâmica","D) Lista bibliográfica de textos sagrados"], correta:1, referencia:"BATTLES, Matthew. Library: An Unquiet History. New York: Norton, 2003.", explicacao:"O Código de Hamurabi (c. 1754 a.C.) é um dos mais famosos exemplos de registro de informação legal em suporte duradouro (estela de diorito), mostrando a função de memória e acesso das inscrições antigas." },
          { id:"h10", pergunta:"O Conselho Federal de Biblioteconomia (CFB) foi criado no Brasil em:", opcoes:["A) 1962","B) 1945","C) 1970","D) 1955"], correta:0, referencia:"Lei nº 4.084, de 30 de junho de 1962. http://www.planalto.gov.br/ccivil_03/leis/1950-1969/L4084.htm", explicacao:"O CFB foi criado pela Lei nº 4.084/1962, que também criou o título de bacharel em Biblioteconomia e os Conselhos Regionais de Biblioteconomia (CRBs)." }
        ],
        dificil: [
          { id:"hd1", pergunta:"A Escola de Chicago de Biblioteconomia (Graduate Library School) foi fundamental para a CI porque:", opcoes:["A) Criou a CDD","B) Introduziu métodos científicos das ciências sociais na pesquisa em Biblioteconomia","C) Desenvolveu o MARC 21","D) Estabeleceu o primeiro código de ética dos bibliotecários"], correta:1, referencia:"HARRIS, Michael H. History of Libraries in the Western World. Metuchen: Scarecrow, 1995.", explicacao:"A GLS da Universidade de Chicago (fundada em 1926) introduziu métodos científicos rigorosos — pesquisa empírica, sociologia, psicologia — na Biblioteconomia, elevando-a a nível universitário e científico." },
          { id:"hd2", pergunta:"O que foi a 'Revolução Documentária' do final do século XIX e início do XX?", opcoes:["A) A digitalização em massa de documentos históricos","B) A expansão do conceito de documento além do livro e a criação de técnicas documentárias para gerir a explosão informacional","C) A criação dos primeiros arquivos nacionais","D) A adoção universal do papiro como suporte oficial"], correta:1, referencia:"RAYWARD, W. Boyd. The universe of information: the work of Paul Otlet for documentation and international organisation. Moscow: VINITI, 1975.", explicacao:"A 'Revolução Documentária' foi o movimento liderado por Otlet e La Fontaine que expandiu o conceito de documento, criou técnicas documentárias e fundou organizações internacionais para gerir o crescimento exponencial da informação registrada." }
        ],
        muito_dificil: [
          { id:"hmd1", pergunta:"A 'Crise da Informação' (information crisis) descrita por Derek de Solla Price nos anos 1960 refere-se a:", opcoes:["A) Crescimento exponencial da literatura científica tornando impossível seu acompanhamento por qualquer especialista","B) A destruição de acervos durante a Segunda Guerra Mundial","C) O alto custo das assinaturas de periódicos científicos","D) A dificuldade de digitalização de acervos históricos"], correta:0, referencia:"PRICE, Derek de Solla. Little science, big science. New York: Columbia University Press, 1963.", explicacao:"Price demonstrou matematicamente que a ciência cresce exponencialmente, dobrando a cada ~15 anos — o que tornou impossível para qualquer cientista acompanhar toda a literatura de seu campo, gerando a 'crise' que impulsionou a CI como disciplina." }
        ]
      },
      mestrado: {
        medio: [{ id:"hm1", pergunta:"A 'explosão informacional' do pós-Segunda Guerra Mundial foi catalisada principalmente por:", opcoes:["A) O crescimento exponencial de publicações científicas e a necessidade de novas técnicas de organização e recuperação","B) O desenvolvimento da fotografia","C) A criação das primeiras enciclopédias","D) A expansão das bibliotecas públicas europeias"], correta:0, referencia:"PRICE, Derek de Solla. Science Since Babylon. New Haven: Yale, 1961.", explicacao:"O enorme crescimento da produção científica no pós-guerra gerou a 'explosão bibliográfica', tornando urgente o desenvolvimento de novos métodos de organização e recuperação da informação — o que impulsionou a criação da CI como campo." }],
        dificil: [{ id:"hmd1m", pergunta:"O UNISIST (United Nations Information System in Science and Technology) foi um projeto da UNESCO que influenciou a CI por:", opcoes:["A) Propor um modelo do fluxo da informação científica e técnica e estimular políticas nacionais de informação","B) Criar o primeiro banco de dados de patentes","C) Desenvolver o protocolo Z39.50","D) Estabelecer o sistema de ISBN"], correta:0, referencia:"UNESCO/ICSU. UNISIST: Study on the feasibility of a world science information system. Paris: UNESCO, 1971.", explicacao:"O UNISIST propôs um modelo do ciclo da informação científica e influenciou políticas nacionais de informação em todo o mundo, especialmente em países em desenvolvimento." }],
        muito_dificil: [{ id:"hmmd1", pergunta:"A criação do Memex por Vannevar Bush, o conceito de Mundaneum de Otlet e o Hypertext de Ted Nelson compartilham qual visão comum?", opcoes:["A) A possibilidade de organização associativa e universal do conhecimento humano em um sistema acessível a qualquer pessoa","B) A substituição das bibliotecas físicas por sistemas digitais","C) A padronização da catalogação internacional","D) O desenvolvimento de linguagens de indexação automática"], correta:0, referencia:"BUSH, 1945; OTLET, 1934; NELSON, Ted. Computer lib/Dream machines. 1974.", explicacao:"Todos três compartilhavam a visão utópica de um sistema que organizaria associativamente todo o conhecimento humano de forma acessível — antecipando a Web e o conceito de hipertexto." }]
      },
      doutorado: {
        medio: [{ id:"hdo1", pergunta:"A transição da Biblioteconomia para a Ciência da Informação como campo disciplinar ocorreu principalmente a partir de:", opcoes:["A) 1960s, com o desenvolvimento de computadores para recuperação da informação e o Cranfield Project","B) 1876, com a fundação da ALA","C) 1950, com a criação da IFLA","D) 1930, com a Escola de Chicago"], correta:0, referencia:"BORKO, Harold. Information Science: What is it? American Documentation, 1968.", explicacao:"O artigo de Borko (1968) definiu formalmente a Ciência da Informação como campo, num contexto em que o uso de computadores (Cranfield, MEDLARS) estava transformando a recuperação da informação." }],
        dificil: [{ id:"hdod1", pergunta:"No Brasil, a criação do IBICT (então IBBD) em 1954 representou:", opcoes:["A) A institucionalização de uma política nacional de informação científica e tecnológica","B) A criação do primeiro curso de Biblioteconomia","C) O estabelecimento do CFB","D) A criação da Biblioteca Nacional"], correta:0, referencia:"IBICT. Histórico. https://www.ibict.br/institucional/apresentacao/historico", explicacao:"O IBBD (atual IBICT), criado em 1954, foi o primeiro órgão nacional dedicado à informação científica e tecnológica no Brasil, influenciando políticas e formação profissional na área." }],
        muito_dificil: [{ id:"hdomd1", pergunta:"A genealogia da Ciência da Informação como campo disciplinar mostra tensões entre duas tradições: a 'bibliotecária' (humanities tradition) e a 'computacional' (information retrieval tradition). Qual teórico analisou essas tensões com maior profundidade?", opcoes:["A) Blaise Cronin, em sua análise da identidade intelectual da CI","B) Ranganathan, nas 5 Leis","C) Saracevic, em 'Information science'","D) Capurro, em 'Epistemology and information science'"], correta:2, referencia:"SARACEVIC, Tefko. Information science. JASIST, 50(12), 1999.", explicacao:"Saracevic analisou as tensões entre as tradições humanística-bibliotecária e técnico-computacional na CI, argumentando que a disciplina precisa integrar ambas para manter sua relevância e identidade." }]
      }
    }
  },

  // ───────────────────────────── GERAL (vermelho) ─────────────────────────────
  geral: {
    label: "Assuntos Gerais",
    cor: "#C62828",
    corFonte: "#fff",
    emoji: "🎯",
    descricao: "Temas variados e avançados da Biblioteconomia",
    niveis: {
      graduacao: {
        medio: [
          { id:"g1", pergunta:"O que é 'indexação'?", opcoes:["A) Processo de compra de livros","B) Análise de conteúdo e atribuição de termos para representar o documento","C) Numeração dos exemplares do acervo","D) Organização física das estantes"], correta:1, referencia:"LANCASTER, F.W. Indexing and abstracting in theory and practice. 3.ed. London: Facet, 2003.", explicacao:"Indexação é o processo de análise de conteúdo de documentos e atribuição de termos (descritores, palavras-chave) que representem os temas abordados, para facilitar a recuperação." },
          { id:"g2", pergunta:"O que é 'empréstimo entre bibliotecas' (EEB)?", opcoes:["A) Troca de funcionários entre instituições","B) Serviço que permite a uma biblioteca obter documentos de outra para atender seus usuários","C) Sistema de pagamento entre bibliotecas","D) Doação de acervo entre bibliotecas"], correta:1, referencia:"IFLA. Interlibrary Loan. https://www.ifla.org/files/assets/docdel/documents/interlending-code-en.pdf", explicacao:"O EEB é um serviço cooperativo pelo qual uma biblioteca solicita temporariamente documentos de outra para atender usuários que precisam de material não disponível localmente." },
          { id:"g3", pergunta:"O que é um repositório institucional?", opcoes:["A) Arquivo físico de documentos sigilosos","B) Sistema digital que coleta, preserva e dá acesso à produção intelectual de uma instituição","C) Biblioteca com acervo restrito a funcionários","D) Base de dados de livros para compra"], correta:1, referencia:"LYNCH, Clifford. Institutional repositories: essential infrastructure for scholarship in the digital age. ARL Bimonthly Report, 2003.", explicacao:"Repositórios institucionais são sistemas digitais que gerenciam, preservam e disseminam a produção intelectual de uma instituição (artigos, teses, dados de pesquisa etc.), geralmente em acesso aberto." },
          { id:"g4", pergunta:"O acesso aberto (Open Access) à informação científica tem como base principal:", opcoes:["A) A disponibilização gratuita e irrestrita de publicações científicas via internet","B) A venda subsidiada de periódicos","C) O acesso restrito a pesquisadores cadastrados","D) A impressão gratuita de artigos"], correta:0, referencia:"Budapest Open Access Initiative, 2002. https://www.budapestopenaccessinitiative.org/", explicacao:"O movimento de Acesso Aberto (Open Access) defende que a literatura científica seja disponibilizada gratuitamente na internet, sem barreiras de acesso, para qualquer usuário." },
          { id:"g5", pergunta:"O que é um tesauro em Biblioteconomia?", opcoes:["A) Dicionário de sinônimos gerais","B) Linguagem documentária estruturada com relações hierárquicas, associativas e de equivalência entre termos","C) Lista de termos proibidos na indexação","D) Catálogo de idiomas estrangeiros"], correta:1, referencia:"ISO 25964. Thesauri and interoperability with other vocabularies. https://www.niso.org/standards-and-best-practices/iso-25964", explicacao:"Um tesauro é uma linguagem documentária controlada que organiza termos em relações de hierarquia (BT/NT), associação (RT) e equivalência (UF/USE), garantindo consistência na indexação e recuperação." },
          { id:"g6", pergunta:"A 'competência informacional' (information literacy) refere-se à capacidade de:", opcoes:["A) Memorizar grandes quantidades de informação","B) Reconhecer uma necessidade de informação, localizá-la, avaliá-la e usá-la efetivamente","C) Usar computadores com rapidez","D) Catalogar documentos corretamente"], correta:1, referencia:"ALA. Presidential Committee on Information Literacy. 1989. https://www.ala.org/acrl/publications/whitepapers/presidential", explicacao:"Competência informacional (information literacy) é o conjunto de habilidades que permite reconhecer quando a informação é necessária e ter a capacidade de encontrá-la, avaliá-la e usá-la de forma eficaz." },
          { id:"g7", pergunta:"O que é 'bibliometria'?", opcoes:["A) Método para medir o peso físico de livros","B) Técnica de aplicação de métodos matemáticos e estatísticos à produção e uso de documentos","C) Sistema de avaliação de bibliotecários","D) Método de encadernação de livros"], correta:1, referencia:"PRITCHARD, Alan. Statistical bibliography or bibliometrics? Journal of Documentation, 1969.", explicacao:"Bibliometria (termo cunhado por Pritchard em 1969) é a aplicação de métodos matemáticos e estatísticos para analisar a produção, uso e comunicação de publicações científicas." },
          { id:"g8", pergunta:"O que é um vocabulário controlado?", opcoes:["A) Lista de palavras proibidas em documentos oficiais","B) Conjunto padronizado de termos usados na indexação para garantir consistência","C) Dicionário com todas as palavras de uma língua","D) Sistema de senhas de acesso ao catálogo"], correta:1, referencia:"CHAUMIER, Jacques. Técnicas documentárias. São Paulo: Martins Fontes, 1988.", explicacao:"Vocabulário controlado é um conjunto de termos selecionados e padronizados para representar conceitos na indexação, evitando ambiguidade e garantindo consistência na recuperação da informação." },
          { id:"g9", pergunta:"O que significa 'gestão do conhecimento' nas organizações?", opcoes:["A) Controle de acesso a documentos sigilosos","B) Conjunto de práticas para criar, compartilhar, usar e gerenciar o conhecimento e a informação organizacional","C) Sistema de pagamento por resultados","D) Arquivamento de documentos contábeis"], correta:1, referencia:"DAVENPORT, Thomas; PRUSAK, Laurence. Working knowledge. Boston: HBS Press, 1998.", explicacao:"Gestão do conhecimento envolve estratégias e práticas para criar, capturar, organizar, compartilhar e reutilizar o conhecimento organizacional para alcançar objetivos institucionais." },
          { id:"g10", pergunta:"A preservação digital tem como objetivo principal:", opcoes:["A) Digitalizar apenas documentos raros e valiosos","B) Garantir o acesso contínuo a longo prazo a materiais digitais","C) Reduzir o custo de armazenamento físico","D) Converter todos os documentos para PDF"], correta:1, referencia:"BLUE RIBBON Task Force on Sustainable Digital Preservation. https://brtf.sdsc.edu/; CONARQ. Diretrizes para a preservação digital. 2012.", explicacao:"A preservação digital vai além de fazer backups — envolve estratégias para garantir que objetos digitais permaneçam acessíveis, autênticos e utilizáveis a longo prazo, mesmo diante de obsolescência tecnológica." }
        ],
        dificil: [
          { id:"gd1", pergunta:"A Lei de Bradford em bibliometria descreve:", opcoes:["A) A distribuição de artigos sobre um tema entre periódicos científicos — poucos periódicos concentram a maioria dos artigos relevantes","B) O crescimento linear da produção científica","C) A relação entre citações e impacto de um artigo","D) A distribuição geográfica das publicações"], correta:0, referencia:"BRADFORD, Samuel C. Documentation. London: Crosby Lockwood, 1948.", explicacao:"A Lei de Bradford (1934/1948) mostra que os artigos sobre um tema específico se distribuem em três zonas: um núcleo de poucos periódicos altamente relevantes e zonas progressivamente maiores com rendimento decrescente." },
          { id:"gd2", pergunta:"O modelo BRAPCI é relevante para a CI brasileira porque:", opcoes:["A) É a maior base de dados de artigos em Ciência da Informação publicados no Brasil","B) É o sistema de catalogação das bibliotecas federais","C) Gerencia os repositórios institucionais das universidades","D) É o vocabulário controlado da área no Brasil"], correta:0, referencia:"BRAPCI – Base de Dados em Ciência da Informação. https://www.brapci.inf.br/", explicacao:"A BRAPCI (Base de Referências e Artigos de Periódicos em Ciência da Informação) indexa a produção científica brasileira em CI e Biblioteconomia, sendo referência fundamental para pesquisas na área." }
        ],
        muito_dificil: [
          { id:"gmd1", pergunta:"O conceito de 'serendipidade' em recuperação da informação refere-se a:", opcoes:["A) Descoberta de informação relevante de forma não intencional durante uma busca","B) Recuperação imprecisa por erro do sistema","C) Busca aleatória sem estratégia definida","D) Erro sistemático de indexação"], correta:0, referencia:"ERDELEZ, Sanda. Information encountering: a conceptual framework for accidental information discovery. In: Pertti Vakkari et al. (eds.). Information Seeking in Context. 1997.", explicacao:"Serendipidade informacional é o encontro casual de informação relevante enquanto se busca outra coisa — fenômeno estudado por Erdelez e outros como aspecto importante do comportamento informacional." }
        ]
      },
      mestrado: {
        medio: [
          { id:"gm1", pergunta:"A análise de redes de co-citação em bibliometria permite:", opcoes:["A) Identificar estruturas intelectuais e frentes de pesquisa de um campo científico","B) Calcular o custo de periódicos por citação","C) Medir a produtividade individual de pesquisadores","D) Avaliar a relevância de repositórios digitais"], correta:0, referencia:"WHITE, Howard; GRIFFITH, Belver. Author cocitation: a literature measure of intellectual structure. JASIST, 1981.", explicacao:"A análise de co-citação mapeia quais trabalhos são citados juntos com frequência, revelando a estrutura intelectual de um campo — suas escolas de pensamento e frentes de pesquisa." }
        ],
        dificil: [
          { id:"gmd1m", pergunta:"O modelo DIKW (Data-Information-Knowledge-Wisdom) é criticado na CI por:", opcoes:["A) Apresentar uma hierarquia linear que simplifica excessivamente relações complexas entre dados, informação e conhecimento","B) Ser demasiado complexo para uso prático","C) Não incluir o conceito de dados","D) Ser exclusivo da gestão empresarial, sem aplicação em CI"], correta:0, referencia:"ROWLEY, Jennifer. The wisdom hierarchy: representations of the DIKW hierarchy. Journal of Information Science, 2007.", explicacao:"O DIKW é criticado por sua linearidade simplista — como se dados automaticamente se tornassem informação, que se tornaria conhecimento, e assim por diante — quando as relações são muito mais complexas e bidirecionais." }
        ],
        muito_dificil: [
          { id:"gmmd1", pergunta:"A 'teoria da relevância' de Sperber e Wilson, importada para a CI por Schamber e outros, argumenta que:", opcoes:["A) Relevância é determinada pela relação ótima entre efeito cognitivo e esforço de processamento","B) Relevância é sempre determinada pelo sistema de recuperação","C) Relevância é objetiva e mensurável pelos documentos","D) Relevância é subjetiva e não pode ser estudada cientificamente"], correta:0, referencia:"SPERBER, Dan; WILSON, Deidre. Relevance: Communication and Cognition. 1986; SCHAMBER, 1994.", explicacao:"Sperber e Wilson definem relevância como a propriedade que maximiza o efeito cognitivo (novidade, conexões) com o menor esforço de processamento — aplicada à CI para explicar porque o mesmo documento pode ser relevante para um usuário e não para outro." }
        ]
      },
      doutorado: {
        medio: [
          { id:"gdo1", pergunta:"O conceito de 'regime de informação' desenvolvido por González de Gómez refere-se a:", opcoes:["A) Conjunto de normas, sujeitos, instituições e práticas que regulam a produção, fluxo e acesso à informação em uma sociedade","B) Sistema de gerenciamento de bibliotecas","C) Política de restrição de acesso a documentos sigilosos","D) Normas de preservação digital adotadas por um governo"], correta:0, referencia:"GÓMEZ, María Nélida González de. Novos cenários políticos para a informação. Ci. Inf., Brasília, 2002.", explicacao:"O 'regime de informação' é uma categoria analítica que descreve como diferentes agentes (Estado, mercado, academia, sociedade civil) interagem para produzir, controlar e distribuir a informação em um dado contexto social e histórico." }
        ],
        dificil: [
          { id:"gdod1", pergunta:"A perspectiva crítica em CI, influenciada pela Escola de Frankfurt (especialmente Habermas), critica as tecnologias de informação quando:", opcoes:["A) Servem à razão instrumental e ao controle social, em vez de promover emancipação e comunicação livre","B) São muito custosas para as instituições públicas","C) Não atendem aos padrões internacionais de interoperabilidade","D) São adotadas sem treinamento adequado dos usuários"], correta:0, referencia:"FROHMANN, Bernd. Power and information. JASIST, 1992; HABERMAS, Jürgen. The Theory of Communicative Action. 1984.", explicacao:"A CI crítica, inspirada em Habermas, questiona quando as tecnologias de informação reforçam relações de poder assimétricas e a razão instrumental, em vez de promover comunicação genuína e emancipação dos usuários." }
        ],
        muito_dificil: [
          { id:"gdomd1", pergunta:"A Análise de Domínio como meta-paradigma da CI (Hjørland) implica que a unidade de análise ideal para estudos de relevância, classificação e recuperação é:", opcoes:["A) A comunidade discursiva (discourse community) que compartilha práticas, valores e critérios epistêmicos","B) O documento individual e suas propriedades formais","C) O usuário individual e seus estados cognitivos","D) O sistema de recuperação e seus algoritmos"], correta:0, referencia:"HJØRLAND, Birger. Arguments for philosophical realism in library and information science. Library Trends, 2004.", explicacao:"Para Hjørland, a análise deve focar nos domínios de conhecimento — as comunidades que definem o que conta como relevante, como os documentos devem ser indexados e quais critérios epistêmicos são válidos — superando tanto o individualismo cognitivo quanto o formalismo sistêmico." }
        ]
      }
    }
  },

  // ───────────────────────────── NÍVEL MÉDIO (laranja) ─────────────────────────────
  nivelMedio: {
    label: "Nível Médio",
    cor: "#E65100",
    corFonte: "#fff",
    emoji: "📚",
    descricao: "Questões para técnicos e auxiliares de biblioteca",
    niveis: {
      graduacao: {
        medio: [
          { id:"nm1", pergunta:"O que é o ISBN?", opcoes:["A) Número internacional padrão para identificação de livros","B) Sistema de classificação da biblioteca","C) Código do bibliotecário responsável","D) Número de registro do acervo"], correta:0, referencia:"ISBN International. https://www.isbn-international.org/", explicacao:"O ISBN (International Standard Book Number) é um identificador numérico único e internacional para livros e publicações monográficas, composto por 13 dígitos." },
          { id:"nm2", pergunta:"O ISSN é usado para identificar:", opcoes:["A) Livros","B) Periódicos e publicações seriadas","C) Filmes e audiovisuais","D) Mapas e cartografia"], correta:1, referencia:"ISSN International Centre. https://www.issn.org/", explicacao:"O ISSN (International Standard Serial Number) é o identificador padrão para publicações seriadas (revistas, jornais, periódicos científicos)." },
          { id:"nm3", pergunta:"A função principal de um catálogo de biblioteca é:", opcoes:["A) Decorar o espaço da biblioteca","B) Permitir que usuários encontrem e localizem documentos do acervo","C) Registrar empréstimos de livros","D) Listar os funcionários da biblioteca"], correta:1, referencia:"CUTTER, Charles Ammi. Rules for a dictionary catalog, 1876.", explicacao:"O catálogo é o instrumento de representação e acesso ao acervo da biblioteca, permitindo que os usuários encontrem, identifiquem, selecionem e localizem os documentos disponíveis." },
          { id:"nm4", pergunta:"O que é 'CDU'?", opcoes:["A) Classificação Decimal Universal","B) Código de Dados do Usuário","C) Catálogo Digital Unificado","D) Central de Documentação Universitária"], correta:0, referencia:"UDC Consortium. https://udcc.org/", explicacao:"A CDU (Classificação Decimal Universal) é um sistema de classificação bibliográfica criado por Otlet e La Fontaine com base na CDD de Dewey, amplamente usado em bibliotecas europeias." },
          { id:"nm5", pergunta:"O que é 'desbaste' em gestão de acervos?", opcoes:["A) Limpeza física dos livros","B) Processo sistemático de retirada de materiais desatualizados ou danificados do acervo","C) Encadernação de periódicos","D) Digitalização de documentos raros"], correta:1, referencia:"ALA. Weeding library collections: an annotated bibliography. https://www.ala.org/", explicacao:"Desbaste (weeding) é o processo de avaliação e remoção seletiva de materiais do acervo que estão desatualizados, danificados, com baixíssimo uso ou substituídos por versões mais recentes." },
          { id:"nm6", pergunta:"Qual é a principal função do serviço de referência em uma biblioteca?", opcoes:["A) Controlar empréstimos e devoluções","B) Auxiliar o usuário a encontrar a informação que necessita","C) Comprar novos livros para o acervo","D) Organizar as estantes por autor"], correta:1, referencia:"AMERICAN LIBRARY ASSOCIATION. Reference and User Services Association. Guidelines for Behavioral Performance of Reference and Information Service Providers. 2013.", explicacao:"O serviço de referência é o ponto de interação entre o bibliotecário e o usuário, com o objetivo de auxiliar na identificação, localização e uso da informação necessária." },
          { id:"nm7", pergunta:"O número de chamada (call number) de um livro combina normalmente:", opcoes:["A) ISBN e código do autor","B) Número de classificação e notação de autor (Cutter)","C) Número de registro e ano de aquisição","D) Código da editora e número de páginas"], correta:1, referencia:"FIGUEIREDO, Nice Menezes de. Desenvolvimento e avaliação de coleções. Brasília: Thesaurus, 1998.", explicacao:"O número de chamada combina a notação da classificação (CDD ou CDU) com a notação de autor (tabela Cutter), localizando fisicamente o documento na estante." },
          { id:"nm8", pergunta:"O que é 'seleção' no desenvolvimento de coleções?", opcoes:["A) Processo de escolha de documentos a serem incorporados ao acervo da biblioteca","B) Descarte de livros danificados","C) Organização dos livros nas estantes","D) Treinamento de usuários"], correta:0, referencia:"FIGUEIREDO, Nice M. Desenvolvimento e avaliação de coleções. Brasília: Thesaurus, 1998.", explicacao:"Seleção é o processo intelectual de avaliação e escolha de materiais para incorporar ao acervo, com base em critérios como relevância, atualidade, qualidade e demanda dos usuários." },
          { id:"nm9", pergunta:"O que é o código de barras em uma biblioteca?", opcoes:["A) Identificação do usuário no sistema","B) Identificação única do exemplar que permite controle automatizado do acervo","C) Código que identifica a editora","D) Sistema de proteção contra roubo"], correta:1, referencia:"Práticas de automação de bibliotecas.", explicacao:"O código de barras nos documentos identifica unicamente cada exemplar, permitindo automação de empréstimos, devoluções e inventário no sistema de gerenciamento da biblioteca." },
          { id:"nm10", pergunta:"O conceito de 'acervo' em uma biblioteca refere-se a:", opcoes:["A) Apenas livros físicos disponíveis","B) Conjunto de documentos e recursos de informação gerenciados pela biblioteca","C) Espaço físico onde os livros ficam","D) Sistema informático da biblioteca"], correta:1, referencia:"MILANESI, Luís. Ordenar para desordenar. São Paulo: Brasiliense, 1986.", explicacao:"Acervo é o conjunto de materiais informacionais (livros, periódicos, bases de dados, recursos digitais etc.) gerenciados pela biblioteca para atender às necessidades de seus usuários." }
        ],
        dificil: [
          { id:"nmd1", pergunta:"O Farmington Plan foi um projeto de:", opcoes:["A) Aquisição cooperativa entre bibliotecas universitárias americanas, cada uma responsável por coletar publicações de um país ou área","B) Digitalização de acervos raros","C) Catalogação cooperativa nacional","D) Treinamento de bibliotecários em catalogação"], correta:0, referencia:"THOMPSON, James. A history of the principles of librarianship. London: Clive Bingley, 1977.", explicacao:"O Farmington Plan (1942-1972) foi um esquema cooperativo em que bibliotecas americanas dividiram responsabilidades de aquisição de publicações estrangeiras, garantindo cobertura abrangente na CI." }
        ],
        muito_dificil: [
          { id:"nmmd1", pergunta:"No contexto de gestão de coleções, o critério 'just-in-case' versus 'just-in-time' refere-se a:", opcoes:["A) Just-in-case: adquirir antecipadamente para uso potencial; just-in-time: fornecer acesso no momento da necessidade (EEB, acesso eletrônico)","B) Just-in-time: aquisição urgente de bestsellers; just-in-case: desbaste programado","C) São dois sistemas de automação de empréstimos","D) Just-in-case: digitalização preventiva; just-in-time: preservação reativa"], correta:0, referencia:"CASSELL, Kay Ann; FUTAS, Elizabeth. Developing public library collections, policies, and procedures. New York: Neal-Schuman, 1991.", explicacao:"A filosofia 'just-in-case' acumula acervo para uso potencial futuro; 'just-in-time' foca em fornecer acesso quando e como necessário (via EEB, aquisição por demanda, e-books), mudando o paradigma da coleção." }
        ]
      },
      mestrado: {
        medio: [
          { id:"nmm1", pergunta:"A 'política de desenvolvimento de coleções' deve contemplar, entre outros:", opcoes:["A) Apenas critérios de seleção de livros impressos","B) Escopo, critérios de seleção, desbaste, doações, cooperação e avaliação da coleção","C) Apenas o orçamento para aquisição","D) Lista de autores preferidos da instituição"], correta:1, referencia:"VERGUEIRO, Waldomiro. Desenvolvimento de coleções. São Paulo: Polis/APB, 1989.", explicacao:"Uma política de desenvolvimento de coleções abrangente define: missão, comunidade atendida, critérios de seleção e desbaste, tratamento de doações, cooperação e métodos de avaliação." }
        ],
        dificil: [
          { id:"nmmmd1", pergunta:"O modelo de 'Evidence-Based Library and Information Practice' (EBLIP) propõe que decisões profissionais se baseiem em:", opcoes:["A) Melhores evidências disponíveis da pesquisa, combinadas com expertise profissional e necessidades dos usuários","B) Apenas nas preferências dos gestores institucionais","C) Exclusivamente em dados quantitativos de uso do acervo","D) Nas normas técnicas vigentes, sem consideração do contexto local"], correta:0, referencia:"BOOTH, Andrew; BRICE, Anne. Evidence-based practice for information professionals. London: Facet, 2004.", explicacao:"O EBLIP transfere para a Biblioteconomia o modelo da prática baseada em evidências da medicina, integrando as melhores evidências de pesquisa com o julgamento profissional e as necessidades específicas dos usuários." }
        ],
        muito_dificil: [
          { id:"nmmmmd1", pergunta:"A 'teoria do valor da informação' em Biblioteconomia e CI busca responder:", opcoes:["A) Como e quando a informação possui valor (econômico, cognitivo, social) e como avaliar serviços de informação de forma sistêmica","B) Quanto cobrar por acesso a periódicos científicos","C) Como calcular o ROI de sistemas de TI em bibliotecas","D) Qual é o preço justo para bases de dados comerciais"], correta:0, referencia:"REPO, Aatto J. The value of information: approaches in economics, accounting and management science. Journal of the American Society for Information Science, 1989.", explicacao:"A teoria do valor da informação examina como a informação cria valor (cognitivo — reduzindo incerteza; econômico — fundamentando decisões; social — habilitando participação) e como serviços de informação podem ser avaliados de forma abrangente." }
        ]
      },
      doutorado: {
        medio: [
          { id:"nmdoo1", pergunta:"O conceito de 'biblioteca híbrida' descreve:", opcoes:["A) Biblioteca que integra recursos físicos e digitais em serviços convergentes","B) Biblioteca que funciona dentro de outro tipo de instituição","C) Sistema de automação que integra diferentes softwares","D) Modelo de gestão participativa em bibliotecas públicas"], correta:0, referencia:"RUSBRIDGE, Chris. Towards the hybrid library. D-Lib Magazine, 1998. https://www.dlib.org/dlib/july98/rusbridge/07rusbridge.html", explicacao:"O conceito de biblioteca híbrida (Rusbridge, 1998) descreve a transição entre a biblioteca totalmente física e a biblioteca completamente digital, integrando ambientes e serviços analógicos e digitais de forma coerente." }
        ],
        dificil: [
          { id:"nmdod1", pergunta:"A crise dos periódicos científicos ('serials crisis') nas bibliotecas universitárias é estruturalmente causada por:", opcoes:["A) Modelo oligopolístico de editoras que monopolizam o acesso ao conhecimento produzido com recursos públicos, tornando as assinaturas insustentáveis","B) Falta de interesse dos pesquisadores em publicar","C) Excesso de periódicos de baixa qualidade","D) Uso crescente de livros em detrimento de artigos"], correta:0, referencia:"MONBIOT, George. Academic publishers make Murdoch look like a socialist. The Guardian, 2011; CROW, Raym. The case for institutional repositories. ARL, 2002.", explicacao:"A crise dos periódicos resulta de um modelo em que editoras comerciais controlam publicações financiadas com recursos públicos, cobram preços monopolísticos de bibliotecas e capturam direitos autorais de pesquisadores sem remuneração — o que impulsionou o movimento de Acesso Aberto." }
        ],
        muito_dificil: [
          { id:"nmdomd1", pergunta:"A convergência entre Arquivologia, Biblioteconomia e Museologia (ABM) como campo das 'ciências da informação documentária' é teorizada especialmente por:", opcoes:["A) Armand Mattelart, Yves Maignien e a tradição francesa da Documentologie","B) Ranganathan e as 5 Leis","C) Shannon e Weaver no modelo matemático da comunicação","D) Bush e Nelson no desenvolvimento do hipertexto"], correta:0, referencia:"MEYRIAT, Jean. Document, documentation, documentologie. Schéma et schématisation, 1981; BRIET, 1951.", explicacao:"A tradição francesa, especialmente Meyriat e a escola documentológica, teorizou a convergência entre as 'ciências do documento' (Biblioteconomia, Arquivologia, Museologia) como campo unificado baseado no conceito ampliado de documento." }
        ]
      }
    }
  }
};

// ===== CARTAS SURPRESA =====
const CARTAS_SURPRESA = [
  {
    id:"s1",
    tipo:"penalidade",
    titulo:"Falta na Aula!",
    emoji:"😱",
    mensagem:"Você faltou demais às aulas este semestre! O bibliotecário notou sua ausência no acervo e nas aulas. Penalidade aplicada!",
    efeito:"Perde 2 pontos",
    pontos:-2,
    cor:"#EF5350"
  },
  {
    id:"s2",
    tipo:"bonus",
    titulo:"Citação Perfeita!",
    emoji:"🌟",
    mensagem:"Você formatou uma referência ABNT corretamente na primeira tentativa! O professor ficou impressionado com sua precisão.",
    efeito:"Ganha 3 pontos bônus",
    pontos:3,
    cor:"#66BB6A"
  },
  {
    id:"s3",
    tipo:"prenda",
    titulo:"Prenda Biblioteconômica!",
    emoji:"🎭",
    mensagem:"Recita em voz alta as 5 Leis de Ranganathan para continuar! (Ou passe a vez se não lembrar todas)",
    efeito:"Recite as 5 Leis ou passe a vez",
    pontos:0,
    cor:"#AB47BC"
  },
  {
    id:"s4",
    tipo:"penalidade",
    titulo:"Trabalho Atrasado!",
    emoji:"⏰",
    mensagem:"Você entregou o trabalho acadêmico fora do prazo! A banca avaliadora diminuiu sua nota.",
    efeito:"Perde 1 ponto e passe a vez",
    pontos:-1,
    cor:"#FF7043"
  },
  {
    id:"s5",
    tipo:"bonus",
    titulo:"Artigo Publicado!",
    emoji:"📰",
    mensagem:"Seu artigo sobre organização da informação foi aceito em periódico Qualis A1! Reconhecimento merecido!",
    efeito:"Avance 2 casas e ganhe 2 pontos",
    pontos:2,
    cor:"#26A69A"
  },
  {
    id:"s6",
    tipo:"prenda",
    titulo:"Desafio do Catálogo!",
    emoji:"📋",
    mensagem:"Cite o nome completo do formato de catalogação legível por máquina mais usado no mundo e o país de origem do seu sistema criador.",
    efeito:"Acerte e ganhe 2 pontos, erre e passe a vez",
    pontos:2,
    cor:"#5C6BC0"
  },
  {
    id:"s7",
    tipo:"penalidade",
    titulo:"Plágio Detectado!",
    emoji:"🚨",
    mensagem:"O software antiplágio detectou cópia em seu trabalho! Situação gravíssima na academia. Aprenda: cite sempre suas fontes!",
    efeito:"Perde 3 pontos — nunca plagiei, nunca plagie!",
    pontos:-3,
    cor:"#D32F2F"
  },
  {
    id:"s8",
    tipo:"bonus",
    titulo:"Estagiário Destaque!",
    emoji:"🏆",
    mensagem:"Você foi o melhor estagiário do mês na biblioteca universitária! Sua dedicação à organização do acervo foi reconhecida.",
    efeito:"Ganha 2 pontos e escolhe qualquer categoria na próxima rodada",
    pontos:2,
    cor:"#FFA726"
  },
  {
    id:"s9",
    tipo:"prenda",
    titulo:"Classificação Relâmpago!",
    emoji:"⚡",
    mensagem:"Classifique na CDD: 'Um livro sobre história do Brasil do século XX'. Você tem 30 segundos!",
    efeito:"Acerte a classe principal (900/Hist.) e ganhe 2 pontos",
    pontos:2,
    cor:"#8D6E63"
  },
  {
    id:"s10",
    tipo:"bonus",
    titulo:"Bolsa de Pesquisa!",
    emoji:"🎓",
    mensagem:"Você ganhou uma bolsa CNPq para pesquisar sobre preservação digital! Sua trajetória acadêmica em Biblioteconomia foi reconhecida.",
    efeito:"Ganha 4 pontos e avance 3 casas",
    pontos:4,
    cor:"#1E88E5"
  }
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
  window.CARTAS_SURPRESA = CARTAS_SURPRESA;
}
