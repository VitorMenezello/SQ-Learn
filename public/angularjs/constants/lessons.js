let LESSONS = [
    {
        title: "SELECT",
        content: [
            {
                type: "p",
                text: "SQL é uma linguagem de manipulação de dados em bancos de dados relacionais. Aqui você irá aprender a fazer buscas em bancos usando o comando SELECT. Ao lado você pode ver o esquema do banco sobre cartoons que iremos usar e há um console para que você possa praticar o que aprendeu em tempo real."
            },
            {
                type: "p",
                text: "Para entender como funciona o SELECT, vamos fazer algo simples: selecionar o nome de todos os cartoons do banco:"
            },
            {
                type: "code",
                text: "SELECT name FROM cartoon;"
            },
            {
                type: "p",
                text: "Faça o mesmo, desta vez selecionando o nome de todas as companhias produtoras de cartoons"
            },
            {
                type: "question",
                answer: "select name from producerCompany"
            }
        ],
        next: true,
        previous: false
    },
    {
        title: "Mais SELECT",
        content: [
            {
                type: "p",
                text: "Como você viu, primeiro selecionamos os campos e dizemos em qual tabela eles estão. Você pode selecionar mais campos colocando vírgulas entre seus nomes, e até mesmo renomeá-los usando a palavra AS, como abaixo:"
            },
            {
                type: "code",
                text: "SELECT id, name AS nome FROM cartoon;"
            },
            {
                type: "p",
                text: "Tente obter a tabela de gêneros, renomeando o campo genreName como Gênero."
            },
            {
                type: "question",
                answer: "SELECT cartoonId, genreName AS Gênero FROM genre;"
            }
        ],
        next: true,
        previous: true
    },
    {
        title: "SELECT *",
        content: [
            {
                type: "p",
                text: "Uma maneira de selecionar todos os campos de um tabela sem ter que digitá-los um por um é usar *:"
            },
            {
                type: "code",
                text: "SELECT * FROM producerCompany;"
            },
            {
                type: "p",
                text: "Agora, imprima todos os dados da tabela creator."
            },
            {
                type: "question",
                answer: "SELECT * FROM creator;"
            }
        ],
        next: false,
        previous: true
    }
];