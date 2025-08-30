//  moodo como extraí as informações do PDF  do PPC (o prompt que usei) o slot das optativas não está constando nessa versão

const DADOS_CURSOS = {
    "ciencia_comp_2023": {
        nome: "Ciência da Computação (PPC 2023)",
        grade: [
            { id: "DCE16359", nome: "INTRODUÇÃO À PROGRAMAÇÃO", periodo: 1, ch: 30, creditos: 1, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA16357", nome: "GEOMETRIA ANALÍTICA", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA16356", nome: "CÁLCULO I", periodo: 1, ch: 75, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCE16360", nome: "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCE16358", nome: "MATEMÁTICA DISCRETA", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },

            { id: "DCE16361", nome: "PROGRAMAÇÃO ESTRUTURADA", periodo: 2, ch: 60, creditos: 3, prerequisitos: ["DCE16359"], creditos_minimos: 0 },
            { id: "DCE16362", nome: "RESOLUÇÃO DE PROBLEMAS", periodo: 2, ch: 60, creditos: 4, prerequisitos: ["DCE16359"], creditos_minimos: 0 },
            { id: "DMA16363", nome: "CÁLCULO II", periodo: 2, ch: 75, creditos: 4, prerequisitos: ["DMA16356"], creditos_minimos: 0 },
            { id: "DMA16364", nome: "ÁLGEBRA LINEAR", periodo: 2, ch: 60, creditos: 4, prerequisitos: ["DMA16357"], creditos_minimos: 0 },
            { id: "DCE16365", nome: "ELEMENTOS DE LÓGICA DIGITAL", periodo: 2, ch: 30, creditos: 2, prerequisitos: [], creditos_minimos: 0 },

            { id: "DMA16367", nome: "CÁLCULO III", periodo: 3, ch: 75, creditos: 4, prerequisitos: ["DMA16363"], creditos_minimos: 0 },
            { id: "DCE16368", nome: "PROBABILIDADE E ESTATÍSTICA", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DMA16356"], creditos_minimos: 0 },
            { id: "DCE16369", nome: "ESTRUTURA DE DADOS I", periodo: 3, ch: 60, creditos: 3, prerequisitos: ["DCE16361"], creditos_minimos: 0 },
            { id: "DCE16371", nome: "ENGENHARIA DE SOFTWARE", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DCE16361"], creditos_minimos: 0 },
            { id: "DCE16370", nome: "LÓGICA PARA COMPUTAÇÃO", periodo: 3, ch: 60, creditos: 3, prerequisitos: [], creditos_minimos: 0 },

            { id: "DCE16372", nome: "ALGORITMOS NUMÉRICOS I", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE16361", "DMA16356"], creditos_minimos: 0 },
            { id: "DCE16373", nome: "TEORIA DA COMPUTAÇÃO E LINGUAGENS FORMAIS", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE16358", "DCE16369"], creditos_minimos: 0 },
            { id: "DCE16374", nome: "ENGENHARIA DE REQUISITOS DE SOFTWARE", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE16371"], creditos_minimos: 0 },
            { id: "DET10166", nome: "PESQUISA OPERACIONAL I", periodo: 4, ch: 60, creditos: 3, prerequisitos: ["DMA16356", "DMA16364"], creditos_minimos: 0 },
            { id: "DCE16375", nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE16361"], creditos_minimos: 0 },
            { id: "DCE16376", nome: "ESTRUTURA DE DADOS II", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE16369"], creditos_minimos: 0 },

            { id: "DCE16377", nome: "PROJETO E ANÁLISE DE ALGORITMOS", periodo: 5, ch: 60, creditos: 4, prerequisitos: ["DCE16358", "DCE16376"], creditos_minimos: 0 },
            { id: "DCE16378", nome: "ARQUITETURA DE COMPUTADORES I", periodo: 5, ch: 90, creditos: 5, prerequisitos: ["DCE16361", "DCE16365"], creditos_minimos: 0 },
            { id: "DCE16379", nome: "LINGUAGENS DE PROGRAMAÇÃO", periodo: 5, ch: 60, creditos: 3, prerequisitos: ["DCE16370"], creditos_minimos: 0 },
            { id: "DCE16380", nome: "BANCO DE DADOS I", periodo: 5, ch: 60, creditos: 4, prerequisitos: ["DCE16371", "DCE16369"], creditos_minimos: 0 },
            { id: "DCE16381", nome: "FUNDAMENTOS DE COMPUTAÇÃO GRÁFICA E MÍDIAS DIGITAIS", periodo: 5, ch: 60, creditos: 3, prerequisitos: ["DCE16375"], creditos_minimos: 0 },

            { id: "DCE16366", nome: "PROJETO INTEGRADOR I", periodo: 6, ch: 60, creditos: 3, prerequisitos: ["DCE16362"], creditos_minimos: 87 }, // Aproximação de 1300h / 15h por crédito
            { id: "DCE16382", nome: "SISTEMAS OPERACIONAIS", periodo: 6, ch: 60, creditos: 4, prerequisitos: ["DCE16378"], creditos_minimos: 0 },
            { id: "DCE16384", nome: "TEORIA DOS GRAFOS", periodo: 6, ch: 60, creditos: 3, prerequisitos: ["DCE16369"], creditos_minimos: 0 },
            { id: "DCE16383", nome: "INTELIGÊNCIA ARTIFICIAL", periodo: 6, ch: 60, creditos: 3, prerequisitos: ["DCE16369", "DCE16368"], creditos_minimos: 0 },

            { id: "DCE16385", nome: "COMPILADORES", periodo: 7, ch: 60, creditos: 3, prerequisitos: ["DCE16379", "DCE16378", "DCE16373"], creditos_minimos: 0 },
            { id: "DCE16386", nome: "PROJETO DE SISTEMAS DE SOFTWARE", periodo: 7, ch: 60, creditos: 4, prerequisitos: ["DCE16374", "DCE16380"], creditos_minimos: 0 },
            { id: "DCE16387", nome: "REDES DE COMPUTADORES", periodo: 7, ch: 60, creditos: 3, prerequisitos: ["DCE16361"], creditos_minimos: 0 },
            { id: "DCE16388", nome: "EMPREENDEDORISMO", periodo: 7, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },

            { id: "DCE16389", nome: "INTERAÇÃO HOMEM-COMPUTADOR", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DCE16374"], creditos_minimos: 0 },
            { id: "DCE16390", nome: "SEGURANÇA DA INFORMAÇÃO", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DCE16387"], creditos_minimos: 0 },
            { id: "DCE16391", nome: "COMPUTAÇÃO PARALELA E DISTRIBUÍDA", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DCE16376", "DCE16382", "DCE16387"], creditos_minimos: 0 },
            { id: "DCE16392", nome: "BANCO DE DADOS II", periodo: 8, ch: 60, creditos: 4, prerequisitos: ["DCE16380", "DCE16376"], creditos_minimos: 0 },
            { id: "DCE16408", nome: "TRABALHO DE CONCLUSÃO DE CURSO", periodo: 8, ch: 60, creditos: 2, prerequisitos: ["DCE16366"], creditos_minimos: 120 } // Aproximação de 1800h / 15h por crédito
        ]
    },
    "ciencia_comp_2011": {
        nome: "Ciência da Computação (PPC 2011)",
        grade: [
            { id: "DMA05670", nome: "CÁLCULO I", periodo: 1, ch: 75, creditos: 5, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCE10403", nome: "INTRODUÇÃO À COMPUTAÇÃO", periodo: 1, ch: 60, creditos: 3, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA05677", nome: "GEOMETRIA ANALÍTICA", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCE10404", nome: "PROGRAMAÇÃO FUNCIONAL", periodo: 1, ch: 75, creditos: 3, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCE10402", nome: "ASPECTOS TEÓRICOS DA COMPUTAÇÃO I", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            
            { id: "DMA05855", nome: "CÁLCULO II", periodo: 2, ch: 75, creditos: 5, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            { id: "DMA05689", nome: "ÁLGEBRA LINEAR", periodo: 2, ch: 60, creditos: 4, prerequisitos: ["DMA05677"], creditos_minimos: 0 },
            { id: "DCE10617", nome: "ELEMENTOS DE LÓGICA DIGITAL", periodo: 2, ch: 45, creditos: 2, prerequisitos: ["DCE10403"], creditos_minimos: 0 },
            { id: "DCN10112", nome: "FUNDAMENTOS DE MECÂNICA CLÁSSICA", periodo: 2, ch: 90, creditos: 5, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            { id: "DCE10618", nome: "PROBABILIDADE E ESTATÍSTICA", periodo: 2, ch: 60, creditos: 4, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            { id: "DCE10619", nome: "PROGRAMAÇÃO ESTRUTURADA", periodo: 2, ch: 60, creditos: 3, prerequisitos: ["DCE10404"], creditos_minimos: 0 },
            { id: "DCE10794", nome: "ASPECTOS TEÓRICOS DA COMPUTAÇÃO II", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DCE10402"], creditos_minimos: 0 },
            
            { id: "DCN10795", nome: "ELETROMAGNETISMO", periodo: 3, ch: 75, creditos: 5, prerequisitos: ["DMA05855"], creditos_minimos: 0 },
            { id: "DCE05968", nome: "ESTRUTURA DE DADOS I", periodo: 3, ch: 60, creditos: 3, prerequisitos: ["DCE10619"], creditos_minimos: 0 },
            { id: "DCE10796", nome: "LÓGICA PARA COMPUTAÇÃO I", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DCE10403"], creditos_minimos: 0 },
            { id: "DMA06016", nome: "CÁLCULO III", periodo: 3, ch: 75, creditos: 5, prerequisitos: ["DMA05855"], creditos_minimos: 0 },
            { id: "DCE11274", nome: "COMPUTAÇÃO E SOCIEDADE", periodo: 3, ch: 45, creditos: 3, prerequisitos: [], creditos_minimos: 0 },
            
            { id: "DMA06101", nome: "EQUAÇÕES DIFERENCIAIS", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DMA05855"], creditos_minimos: 0 },
            { id: "DCE11092", nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS", periodo: 4, ch: 75, creditos: 4, prerequisitos: ["DCE10619"], creditos_minimos: 0 },
            { id: "DCE11232", nome: "LÓGICA PARA COMPUTAÇÃO II", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE10796"], creditos_minimos: 0 },
            { id: "DCE11231", nome: "ALGORITMOS NUMÉRICOS I", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCE05968", "DMA05855", "DMA05689"], creditos_minimos: 0 },
            { id: "DET10166", nome: "PESQUISA OPERACIONAL I", periodo: 4, ch: 60, creditos: 3, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            { id: "DCE11275", nome: "EMPREENDEDORISMO", periodo: 4, ch: 45, creditos: 3, prerequisitos: ["DCE05968"], creditos_minimos: 0 },
            
            { id: "DCE08065", nome: "ARQUITETURA DE COMPUTADORES", periodo: 5, ch: 75, creditos: 4, prerequisitos: ["DCE10403", "DCE05968"], creditos_minimos: 0 },
            { id: "DCE08156", nome: "ENGENHARIA DE SOFTWARE", periodo: 5, ch: 75, creditos: 5, prerequisitos: ["DCE11092"], creditos_minimos: 0 },
            { id: "DCE06227", nome: "LINGUAGENS DE PROGRAMAÇÃO", periodo: 5, ch: 60, creditos: 4, prerequisitos: ["DCE11092"], creditos_minimos: 0 },
            { id: "DCN06281", nome: "ÓTICA E FÍSICA MODERNA", periodo: 5, ch: 60, creditos: 4, prerequisitos: ["DCN10795"], creditos_minimos: 0 },
            { id: "DCE06226", nome: "ESTRUTURA DE DADOS II", periodo: 5, ch: 60, creditos: 4, prerequisitos: ["DCE05968"], creditos_minimos: 0 },
            { id: "ECH11233", nome: "METODOLOGIA CIENTÍFICA", periodo: 5, ch: 60, creditos: 3, prerequisitos: [], creditos_minimos: 0 },
            
            { id: "DCE08276", nome: "LINGUAGENS FORMAIS E AUTÔMATOS", periodo: 6, ch: 60, creditos: 4, prerequisitos: ["DCE05968"], creditos_minimos: 0 },
            { id: "DCE08403", nome: "SISTEMAS OPERACIONAIS", periodo: 6, ch: 75, creditos: 4, prerequisitos: ["DCE08065"], creditos_minimos: 0 },
            { id: "DCE08409", nome: "TELEPROCESSAMENTO", periodo: 6, ch: 45, creditos: 3, prerequisitos: ["DCE10617", "DCE10619"], creditos_minimos: 0 },
            { id: "DCE08119", nome: "COMPUTAÇÃO E REPRESENTAÇÃO GRÁFICA", periodo: 6, ch: 60, creditos: 4, prerequisitos: ["DCE11092", "DCE06226"], creditos_minimos: 0 },
            { id: "DCE11464", nome: "ALGORITMOS NUMÉRICOS II", periodo: 6, ch: 60, creditos: 4, prerequisitos: ["DCE11231"], creditos_minimos: 0 },
            { id: "DCE11466", nome: "ENGENHARIA DE REQUISITOS DE SOFTWARE", periodo: 6, ch: 60, creditos: 3, prerequisitos: ["DCE08156"], creditos_minimos: 0 },
            { id: "DCE11468", nome: "INTELIGÊNCIA ARTIFICIAL", periodo: 6, ch: 60, creditos: 4, prerequisitos: ["DCE06226", "DCE11232"], creditos_minimos: 0 },
            
            { id: "DCE08384", nome: "REDES DE COMPUTADORES", periodo: 7, ch: 60, creditos: 3, prerequisitos: ["DCE08409"], creditos_minimos: 0 },
            { id: "DCE08118", nome: "COMPILADORES", periodo: 7, ch: 60, creditos: 4, prerequisitos: ["DCE08065", "DCE08276", "DCE06227"], creditos_minimos: 0 },
            { id: "DCE08083", nome: "BANCO DE DADOS", periodo: 7, ch: 75, creditos: 5, prerequisitos: ["DCE06226"], creditos_minimos: 0 },
            { id: "DCE11491", nome: "SISTEMAS MULTIMÍDIA", periodo: 7, ch: 45, creditos: 3, prerequisitos: ["DCE11092"], creditos_minimos: 0 },
            { id: "DCE11471", nome: "PROJETO DE SISTEMAS DE SOFTWARE", periodo: 7, ch: 60, creditos: 4, prerequisitos: ["DCE08156"], creditos_minimos: 0 },
            { id: "DCE11492", nome: "TEORIA DA COMPUTAÇÃO", periodo: 7, ch: 60, creditos: 4, prerequisitos: ["DCE08276"], creditos_minimos: 0 },
            { id: "DCE11465", nome: "ANÁLISE E PROJETO DE ALGORITMOS", periodo: 7, ch: 60, creditos: 4, prerequisitos: ["DCE06226", "DCE10794"], creditos_minimos: 0 },
            
            { id: "DCE11718", nome: "INTERFACES E PERIFÉRICOS", periodo: 8, ch: 45, creditos: 2, prerequisitos: ["DCE08403"], creditos_minimos: 0 },
            { id: "DCE11719", nome: "SISTEMAS DISTRIBUÍDOS", periodo: 8, ch: 60, creditos: 4, prerequisitos: ["DCE08403"], creditos_minimos: 0 },
            { id: "DCE11720", nome: "PROCESSAMENTO PARALELO", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DCE08403", "DCE11465"], creditos_minimos: 0 },
            { id: "DCE11721", nome: "TEORIA DOS GRAFOS", periodo: 8, ch: 60, creditos: 4, prerequisitos: ["DCE06226"], creditos_minimos: 0 },
            { id: "DCE11722", nome: "INTERFACE HUMANO-COMPUTADOR", periodo: 8, ch: 60, creditos: 4, prerequisitos: ["DCE11491"], creditos_minimos: 0 },
            { id: "DCE11723", nome: "GERÊNCIA DE PROJETOS DE SOFTWARE", periodo: 8, ch: 60, creditos: 4, prerequisitos: ["DCE08156"], creditos_minimos: 0 },
            
            { id: "DCE11947", nome: "TRABALHO DE CONCLUSÃO DE CURSO I", periodo: 9, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 150 },
            { id: "DCE11948", nome: "ESTÁGIO SUPERVISIONADO", periodo: 10, ch: 300, creditos: 5, prerequisitos: [], creditos_minimos: 151 }, // Aproximação de 2265h / 15h por crédito
            { id: "DCE11949", nome: "TRABALHO DE CONCLUSÃO DE CURSO II", periodo: 10, ch: 60, creditos: 4, prerequisitos: ["DCE11947"], creditos_minimos: 0 }
        ]
    },
    "eng_quimica_2012": {
        nome: "Engenharia Química (PPC 2012)",
        grade: [
            { id: "DCE10640", nome: "Programação I", periodo: 1, ch: 60, creditos: 3, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCN09831", nome: "Química Geral I", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DET05675", nome: "INTRODUÇÃO À ENGENHARIA QUÍMICA", periodo: 1, ch: 30, creditos: 2, prerequisitos: [], creditos_minimos: 0 },
            { id: "DET10638", nome: "Ciência da Informação", periodo: 1, ch: 30, creditos: 2, prerequisitos: [], creditos_minimos: 0 },
            { id: "DET10639", nome: "Desenho Técnico", periodo: 1, ch: 45, creditos: 2, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA05670", nome: "CÁLCULO I", periodo: 1, ch: 75, creditos: 5, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA06968", nome: "Geometria Analítica", periodo: 1, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DCN05678", nome: "FUNDAMENTOS DA MECÂNICA CLÁSSICA", periodo: 2, ch: 90, creditos: 6, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            
            { id: "DCN10822", nome: "Química Geral Experimental", periodo: 2, ch: 60, creditos: 2, prerequisitos: ["DCN09831"], creditos_minimos: 0 },
            { id: "DCN10823", nome: "Química Inorgânica", periodo: 2, ch: 60, creditos: 3, prerequisitos: ["DCN09831"], creditos_minimos: 0 },
            { id: "DMA05855", nome: "CÁLCULO II", periodo: 2, ch: 75, creditos: 5, prerequisitos: ["DMA05670"], creditos_minimos: 0 },
            { id: "DMA06019", nome: "PROBABILIDADE E ESTATÍSTICA", periodo: 2, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 0 },
            { id: "DMA09923", nome: "Álgebra Linear", periodo: 2, ch: 60, creditos: 4, prerequisitos: ["DMA06968"], creditos_minimos: 0 },
            
            { id: "DCN11109", nome: "Eletromagnetismo I", periodo: 3, ch: 60, creditos: 3, prerequisitos: ["DCN05678"], creditos_minimos: 0 },
            { id: "DCN11110", nome: "Física Experimental I", periodo: 3, ch: 45, creditos: 1, prerequisitos: ["DCN05678"], creditos_minimos: 0 },
            { id: "DCN11111", nome: "Físico-Química I", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DCN10822", "DMA05670"], creditos_minimos: 0 },
            { id: "DCN11112", nome: "Química Analítica I", periodo: 3, ch: 45, creditos: 3, prerequisitos: ["DCN09831", "DMA05670"], creditos_minimos: 0 },
            { id: "DCN11113", nome: "Química Orgânica I", periodo: 3, ch: 60, creditos: 4, prerequisitos: ["DCN09831"], creditos_minimos: 0 },
            { id: "DMA08162", nome: "Equações Diferenciais", periodo: 3, ch: 60, creditos: 3, prerequisitos: ["DMA05855"], creditos_minimos: 0 },
            { id: "DMA10109", nome: "Cálculo III", periodo: 3, ch: 75, creditos: 5, prerequisitos: ["DMA05855"], creditos_minimos: 0 },
            
            { id: "DCN06281", nome: "ÓTICA E FÍSICA MODERNA", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCN11109"], creditos_minimos: 0 },
            { id: "DCN11353", nome: "Físico-Química II", periodo: 4, ch: 60, creditos: 2, prerequisitos: ["DCN11111"], creditos_minimos: 0 },
            { id: "DCN11355", nome: "Química Analítica II", periodo: 4, ch: 45, creditos: 1, prerequisitos: ["DCN10822", "DCN11112"], creditos_minimos: 0 },
            { id: "DCN11356", nome: "Química Orgânica Experimental", periodo: 4, ch: 60, creditos: 1, prerequisitos: ["DCN10822", "DCN11113"], creditos_minimos: 0 },
            { id: "DCN11357", nome: "Química Orgânica II", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCN11113"], creditos_minimos: 0 },
            { id: "DET11358", nome: "Mecânica dos Sólidos", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DCN05678"], creditos_minimos: 0 },
            { id: "DET11564", nome: "Introdução aos Processos Químicos", periodo: 4, ch: 60, creditos: 3, prerequisitos: ["DCN11111"], creditos_minimos: 0 },
            { id: "DMA06072", nome: "ALGORITMOS NUMÉRICOS", periodo: 4, ch: 60, creditos: 4, prerequisitos: ["DMA08162"], creditos_minimos: 0 },
            
            { id: "DCN11567", nome: "Física Experimental II", periodo: 5, ch: 45, creditos: 1, prerequisitos: ["DCN06281"], creditos_minimos: 0 },
            { id: "DET10165", nome: "Resistência dos Materiais", periodo: 5, ch: 60, creditos: 3, prerequisitos: ["DET11358"], creditos_minimos: 0 },
            { id: "DET11562", nome: "Economia da Engenharia I", periodo: 5, ch: 45, creditos: 3, prerequisitos: [], creditos_minimos: 60 },
            { id: "DET11563", nome: "Fenômenos de Transporte I", periodo: 5, ch: 75, creditos: 4, prerequisitos: ["DCN05678", "DMA08162"], creditos_minimos: 0 },
            { id: "DET11565", nome: "Simulação de Processos", periodo: 5, ch: 45, creditos: 2, prerequisitos: ["DCE10640", "DMA06072"], creditos_minimos: 0 },
            { id: "DET11566", nome: "Termodinâmica I", periodo: 5, ch: 60, creditos: 3, prerequisitos: ["DCN11111"], creditos_minimos: 0 },
            { id: "ECH08091", nome: "Ciências Humanas e Sociais", periodo: 5, ch: 45, creditos: 2, prerequisitos: [], creditos_minimos: 0 },
            
            { id: "DCN05867", nome: "CIÊNCIAS DOS MATERIAIS", periodo: 6, ch: 45, creditos: 3, prerequisitos: ["DCN11353"], creditos_minimos: 0 },
            { id: "DCN11735", nome: "Análise Instrumental de Química", periodo: 6, ch: 45, creditos: 3, prerequisitos: ["DCN11112"], creditos_minimos: 0 },
            { id: "DET11737", nome: "Cinética e Cálculo de Reatores I", periodo: 6, ch: 75, creditos: 4, prerequisitos: ["DET11564", "DET11566"], creditos_minimos: 0 },
            { id: "DET11738", nome: "Fenômenos de Transporte II", periodo: 6, ch: 75, creditos: 4, prerequisitos: ["DET11563", "DET11566"], creditos_minimos: 0 },
            { id: "DET11739", nome: "Microbiologia Industrial", periodo: 6, ch: 45, creditos: 2, prerequisitos: ["DCN11113"], creditos_minimos: 0 },
            { id: "DET11740", nome: "Operações Unitárias I", periodo: 6, ch: 75, creditos: 4, prerequisitos: ["DET11563"], creditos_minimos: 0 },
            { id: "DET11741", nome: "Termodinâmica II", periodo: 6, ch: 60, creditos: 3, prerequisitos: ["DET11566"], creditos_minimos: 0 },
            
            { id: "DET11742", nome: "Cinética e Cálculo de Reatores II", periodo: 7, ch: 75, creditos: 4, prerequisitos: ["DET11737", "DET11741"], creditos_minimos: 0 },
            { id: "DET11743", nome: "Controle de Processos Químicos I", periodo: 7, ch: 60, creditos: 3, prerequisitos: ["DCN11567", "DET11563"], creditos_minimos: 0 },
            { id: "DET11744", nome: "Engenharia Bioquímica", periodo: 7, ch: 60, creditos: 3, prerequisitos: ["DET11737", "DET11739"], creditos_minimos: 0 },
            { id: "DET11746", nome: "Fenômenos de Transporte III", periodo: 7, ch: 75, creditos: 4, prerequisitos: ["DET11738", "DET11741"], creditos_minimos: 0 },
            { id: "DET11747", nome: "Operações Unitárias II", periodo: 7, ch: 75, creditos: 4, prerequisitos: ["DET11738", "DET11740"], creditos_minimos: 0 },
            
            { id: "DET11745", nome: "Engenharia do Meio Ambiente", periodo: 8, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 100 },
            { id: "DET11748", nome: "Controle de Processos Químicos II", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DET11565", "DET11743"], creditos_minimos: 0 },
            { id: "DET11749", nome: "Higiene e Segurança do Trabalho", periodo: 8, ch: 60, creditos: 2, prerequisitos: [], creditos_minimos: 130 },
            { id: "DET11750", nome: "Operações Unitárias III", periodo: 8, ch: 75, creditos: 4, prerequisitos: ["DET11746", "DET11747"], creditos_minimos: 0 },
            { id: "DET11751", nome: "Otimização de Processos", periodo: 8, ch: 60, creditos: 3, prerequisitos: ["DET11565"], creditos_minimos: 130 },
            { id: "DET11752", nome: "Projeto de Processos I", periodo: 8, ch: 45, creditos: 2, prerequisitos: ["DET11565"], creditos_minimos: 130 },
            
            { id: "DET11228", nome: "Aspectos Legais da Engenharia", periodo: 9, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 150 },
            { id: "DET12291", nome: "Engenharia de Processos Químicos Industriais", periodo: 9, ch: 60, creditos: 4, prerequisitos: ["DET11742", "DET11750"], creditos_minimos: 0 },
            { id: "DET12292", nome: "Projeto de Processos II", periodo: 9, ch: 45, creditos: 3, prerequisitos: ["DET11562", "DET11752"], creditos_minimos: 0 },
            { id: "DET12293", nome: "Trabalho de Conclusão de Curso I", periodo: 9, ch: 60, creditos: 4, prerequisitos: [], creditos_minimos: 150 },
            
            { id: "DET12294", nome: "Trabalho de Conclusão de Curso II", periodo: 10, ch: 60, creditos: 4, prerequisitos: ["DET12293"], creditos_minimos: 0 },
            { id: "DET12290", nome: "Estágio Supervisionado", periodo: 10, ch: 300, creditos: 20, prerequisitos: [], creditos_minimos: 130 },
        ]
    }
}