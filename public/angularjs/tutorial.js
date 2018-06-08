app.controller('TutorialController', function ($scope) {
    $scope.lessons = [
        {
            title: "SELECT",
            content: [
                "SQL é uma linguagem de manipulação de dados em bancos de dados relacionais. Aqui você irá aprender a fazer buscas em bancos usando o comando SELECT. Ao lado você pode ver o esquema do banco sobre cartoons que iremos usar e há um console para que você possa praticar o que aprendeu em tempo real. " +
                "Para entender como funciona o SELECT, vamos fazer algo simples: selecionar o nome de todos os cartoons do banco: SELECT name FROM cartoon; " +
                "Faça o mesmo, desta vez selecionando o nome de todas as companhias produtoras de cartoons"
            ],
            next: true,
            previous: false
        },
        {
            title: "Mais SELECT",
            content: "Como você viu, primeiro selecionamos os campos e dizemos em qual tabela eles estão. Você pode selecionar mais campos colocando vírgulas entre seus nomes, e até mesmo renomeá-los usando a palavra AS, como abaixo: SELECT id,name AS nome FROM cartoon; " +
            "Uma maneira de selecionar todos os campos de um tabela sem ter que digitá-los um por um é usar *: SELECT * FROM producerCompany; " +
            "Tente obter a tabela de gêneros, renomeando o campo genreName como Gênero",
            next: false,
            previous: true,
            answer: "SELECT * FROM cartoon;"
        }
    ];

    $scope.currentLesson = 0;

    $scope.lesson = $scope.lessons[$scope.currentLesson];

    $scope.nextLesson = function () {
        $scope.currentLesson++;
        $scope.lesson = $scope.lessons[$scope.currentLesson];
    };

    $scope.previousLesson = function () {
        $scope.currentLesson--;
        $scope.lesson = $scope.lessons[$scope.currentLesson];
    };

    $scope.schema = {
        title: "Cartoons",
        tables: [
            {
                id: 0,
                title: "cartoon",
                attributes: [
                    {
                        name: "id",
                        primaryKey: true,
                        ref: false
                    },
                    {
                        name: "name",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "ranking",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "votesUp",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "votesDown",
                        primaryKey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 1,
                title: "chrcter",
                attributes: [
                    {
                        name: "id",
                        primaryKey: true,
                        ref: false
                    },
                    {
                        name: "cartoonId",
                        primaryKey: false,
                        ref: true,
                        referredTable: 0,
                        referredAttribute: "id"
                    },
                    {
                        name: "name",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "human",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "gender",
                        primaryKey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "producerCompany",
                attributes: [
                    {
                        name: "id",
                        primaryKey: true,
                        ref: false
                    },
                    {
                        name: "name",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "country",
                        primaryKey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 3,
                title: "creator",
                attributes: [
                    {
                        name: "id",
                        primaryKey: true,
                        ref: false
                    },
                    {
                        name: "cartoonId",
                        primaryKey: false,
                        ref: true,
                        referredTable: 0,
                        referredAttribute: "id"
                    },
                    {
                        name: "name",
                        primaryKey: false,
                        ref: false
                    },
                    {
                        name: "gender",
                        primaryKey: false,
                        ref: false
                    }
                ]
            }
        ]
    };

    $scope.colors = [
        "color-1", "color-2", "color-3", "color-4", "color-5", "color-6"
    ];
});