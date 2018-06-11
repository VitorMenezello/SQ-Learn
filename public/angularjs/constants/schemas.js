let SCHEMAS = [
    {
        title: "Cartoons",
        tables: [
            {
                id: 0,
                title: "cartoon",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "ranking",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "votesUp",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "votesDown",
                        pkey: false,
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
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "cartoonId",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "id"
                    },
                    {
                        name: "name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "human",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "gender",
                        pkey: false,
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
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "country",
                        pkey: false,
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
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "cartoonId",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "id"
                    },
                    {
                        name: "name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "gender",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 4,
                title: "genre",
                attributes: [
                    {
                        name: "cartoonId",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "id"
                    },
                    {
                        name: "genreName",
                        pkey: true,
                        ref: false
                    }
                ]
            },
            {
                id: 5,
                title: "cartoon_producerCompany",
                attributes: [
                    {
                        name: "cartoonId",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "id"
                    },
                    {
                        name: "producerCompanyId",
                        pkey: true,
                        ref: true,
                        refTableId: 2,
                        refAttribute: "id"
                    }
                ]
            }
        ]
    },
    {
        title: "Company",
        tables: [
            {
                id: 0,
                title: "Employee",
                attributes: [
                    {
                        name: "ssn",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "fname",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "minit",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "lname",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "bdate",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "address",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "sex",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "salary",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "superssn",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "ssn"
                    },
                    {
                        name: "dno",
                        pkey: false,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "dnumber"
                    }
                ]
            },
            {
                id: 1,
                title: "Department",
                attributes: [
                    {
                        name: "dname",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "dnumber",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "mgrssn",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "ssn"
                    },
                    {
                        name: "mgrstartdate",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "Dept_Locations",
                attributes: [
                    {
                        name: "dnumber",
                        pkey: true,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "dnumber"
                    },
                    {
                        name: "dlocation",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 3,
                title: "Project",
                attributes: [
                    {
                        name: "pname",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "pnumber",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "plocation",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "dnum",
                        pkey: false,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "dnumber"
                    }
                ]
            },
            {
                id: 4,
                title: "Works_On",
                attributes: [
                    {
                        name: "essn",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "ssn"
                    },
                    {
                        name: "pno",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "hours",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 5,
                title: "Dependent",
                attributes: [
                    {
                        name: "essn",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "ssn"
                    },
                    {
                        name: "dependent_name",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "sex",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "bdate",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "relationship",
                        pkey: false,
                        ref: false
                    }
                ]
            }
        ]
    },
    {
        title: "imdb250",
        tables: [
            {
                id: 0,
                title: "movie",
                attributes: [
                    {
                        name: "movie_id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "movie_name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "production_year",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "votes",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "ranking",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "rating",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 1,
                title: "movie_genre",
                attributes: [
                    {
                        name: "movie_genre_id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "movie_genre_name",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "movie_info",
                attributes: [
                    {
                        name: "movie_id",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "movie_id"
                    },
                    {
                        name: "movie_genre_id",
                        pkey: true,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "movie_genre_id"
                    }
                ]
            },
            {
                id: 3,
                title: "person",
                attributes: [
                    {
                        name: "person_id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "person_name",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "gender",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 4,
                title: "role",
                attributes: [
                    {
                        name: "person_id",
                        pkey: true,
                        ref: true,
                        refTableId: 3,
                        refAttribute: "person_id"
                    },
                    {
                        name: "movie_id",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "movie_id"
                    },
                    {
                        name: "role_name",
                        pkey: true,
                        ref: false
                    }
                ]
            }
        ]
    },
    {
        title: "multas_rodovias_federais",
        tables: [
            {
                id: 0,
                title: "condutor",
                attributes: [
                    {
                        name: "cod_condutor",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "primeiro_nome",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "ultimo_nome",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "tipo_cnh",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 1,
                title: "condutor_tem_telefones",
                attributes: [
                    {
                        name: "cod_condutor",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "cod_condutor"
                    },
                    {
                        name: "cod_telefone",
                        pkey: true,
                        ref: true,
                        refTableId: 5,
                        refAttribute: "cod_telefone"
                    },
                    {
                        name: "tipo_telefone",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "gravidade_infracao",
                attributes: [
                    {
                        name: "cod_gravidade",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "num_pontos",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "desc_gravidade",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 3,
                title: "infracao",
                attributes: [
                    {
                        name: "cod_infracao",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "desc_infracao",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "cod_gravidade",
                        pkey: false,
                        ref: true,
                        refTableId: 2,
                        refAttribute: "cod_gravidade"
                    },
                    {
                        name: "valor",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 4,
                title: "multa",
                attributes: [
                    {
                        name: "cod_auto",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "cod_infracao",
                        pkey: false,
                        ref: true,
                        refTableId: 3,
                        refAttribute: "cod_infracao"
                    },
                    {
                        name: "cod_condutor",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "cod_condutor"
                    },
                    {
                        name: "data_infracao",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 5,
                title: "telefones",
                attributes: [
                    {
                        name: "cod_telefone",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "num_telefone",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "cod_local",
                        pkey: false,
                        ref: false
                    }
                ]
            }
        ]
    },
    {
        title: "patents",
        tables: [
            {
                id: 0,
                title: "inventor",
                attributes: [
                    {
                        name: "InventorId",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "InventorApiId",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorFirstName",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorLastName",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorLocationId",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorCity",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorState",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "InventorCountry",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 1,
                title: "patent",
                attributes: [
                    {
                        name: "PatentId",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "PatentNumber",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "PatentDate",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "PatentTitle",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "PatentAbstract",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "patentinventor",
                attributes: [
                    {
                        name: "PatentId",
                        pkey: true,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "PatentId"
                    },
                    {
                        name: "InventorId",
                        pkey: true,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "InventorId"
                    }
                ]
            }
        ]
    },
    {
        title: "consumers",
        tables: [
            {
                id: 0,
                title: "endereco",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "Regiao",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "UF",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Cidade",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 1,
                title: "cliente",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "idEndereco",
                        pkey: false,
                        ref: true,
                        refTableId: 0,
                        refAttribute: "id"
                    },
                    {
                        name: "sexo",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "FaixaEtaria",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 2,
                title: "problema",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "GrupoProblema",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Problema",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "ComoComprouContratou",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 3,
                title: "avaliacao",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "Respondida",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Situacao",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "AvaliacaoReclamacao",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Notaconsumers",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 4,
                title: "empresa",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "NomeFantasia",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "SegmentoMercado",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Area",
                        pkey: false,
                        ref: false
                    }
                ]
            },
            {
                id: 5,
                title: "reclamacao",
                attributes: [
                    {
                        name: "id",
                        pkey: true,
                        ref: false
                    },
                    {
                        name: "idCliente",
                        pkey: false,
                        ref: true,
                        refTableId: 1,
                        refAttribute: "id"
                    },
                    {
                        name: "idProblema",
                        pkey: false,
                        ref: true,
                        refTableId: 2,
                        refAttribute: "id"
                    },
                    {
                        name: "idEmpresa",
                        pkey: false,
                        ref: true,
                        refTableId: 4,
                        refAttribute: "id"
                    },
                    {
                        name: "idAvaliacao",
                        pkey: false,
                        ref: true,
                        refTableId: 3,
                        refAttribute: "id"
                    },
                    {
                        name: "AnoAbertura",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "MesAbertura",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "DataAbertura",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "DataResposta",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "DataFinalizacao",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "TempoResposta",
                        pkey: false,
                        ref: false
                    },
                    {
                        name: "Assunto",
                        pkey: false,
                        ref: false
                    }
                ]
            }
        ]
    }
];