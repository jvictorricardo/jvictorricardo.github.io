document.addEventListener('DOMContentLoaded', () => {
    const seletorCurso = document.getElementById('curso-select');
    const containerGrade = document.getElementById('grade-container');
    const spanTotalConcluidoCHS = document.getElementById('total-concluido-chs');
    const spanTotalGeralCHS = document.getElementById('total-geral-chs');
    const spanTotalConcluidoCreditos = document.getElementById('total-concluido-creditos');
    const spanTotalGeralCreditos = document.getElementById('total-geral-creditos');
    const btnLimparProgresso = document.getElementById('btn-limpar-progresso');
    const btnSalvarPDF = document.getElementById('btn-salvar-pdf');

    Object.keys(DADOS_CURSOS).forEach(cursoId => {
        const option = document.createElement('option');
        option.value = cursoId;
        option.textContent = DADOS_CURSOS[cursoId].nome;
        seletorCurso.appendChild(option);
    });

    function carregarGrade(cursoId) {
        containerGrade.innerHTML = '';

        const cursoAtual = DADOS_CURSOS[cursoId];
        const gradeCurricular = cursoAtual.grade;
        const CHAVE_STORAGE = `progresso_${cursoId}`;

        const carregarProgresso = () => {
            const progressoSalvo = localStorage.getItem(CHAVE_STORAGE);
            return progressoSalvo ? JSON.parse(progressoSalvo) : [];
        };
        const salvarProgresso = (progresso) => {
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(progresso));
        };

        let concluidas = carregarProgresso();
        let creditosConcluidos = 0;

        const cargaHorariaTotal = gradeCurricular.reduce((total, disc) => total + disc.ch, 0);
        const creditosTotais = gradeCurricular.reduce((total, disc) => total + (disc.creditos || 0), 0);
        spanTotalGeralCHS.textContent = cargaHorariaTotal;
        spanTotalGeralCreditos.textContent = creditosTotais;

        const atualizarCargaHorariaConcluida = () => {
            const disciplinasConcluidas = gradeCurricular.filter(d => concluidas.includes(d.id));
            const chConcluida = disciplinasConcluidas.reduce((t, d) => t + d.ch, 0);
            spanTotalConcluidoCHS.textContent = chConcluida;
        };

        const atualizarCreditosConcluidos = () => {
            const disciplinasConcluidas = gradeCurricular.filter(d => concluidas.includes(d.id));
            creditosConcluidos = disciplinasConcluidas.reduce((t, d) => t + (d.creditos || 0), 0);
            spanTotalConcluidoCreditos.textContent = creditosConcluidos;
        };

        const atualizarDisciplinasLiberadas = () => {
            gradeCurricular.forEach(disciplina => {
                const disciplinaDiv = document.getElementById(disciplina.id);
                if (!disciplinaDiv) return;

                if (concluidas.includes(disciplina.id)) {
                    disciplinaDiv.classList.remove('disciplina-liberada');
                    return;
                }

                const prerequisitosDeMateriaCumpridos = disciplina.prerequisitos.every(prereqId => concluidas.includes(prereqId));

                const prerequisitosDeCreditosCumpridos = creditosConcluidos >= (disciplina.creditos_minimos || 0);

                if (prerequisitosDeMateriaCumpridos && prerequisitosDeCreditosCumpridos) {
                    disciplinaDiv.classList.add('disciplina-liberada');
                } else {
                    disciplinaDiv.classList.remove('disciplina-liberada');
                }
            });
        };

        const totalPeriodos = Math.max(...gradeCurricular.map(d => d.periodo), 0);
        for (let i = 1; i <= totalPeriodos; i++) {
            const periodoDiv = document.createElement('div');
            periodoDiv.className = 'periodo-coluna';
            periodoDiv.id = `periodo-${i}`;
            periodoDiv.innerHTML = `<h2>${i}º Período</h2>`;
            containerGrade.appendChild(periodoDiv);
        }

        gradeCurricular.forEach(disciplina => {
            const periodoColuna = document.getElementById(`periodo-${disciplina.periodo}`);
            if (periodoColuna) {
                const disciplinaDiv = document.createElement('div');
                disciplinaDiv.className = 'disciplina';
                disciplinaDiv.id = disciplina.id;
                disciplinaDiv.innerHTML = `<strong>${disciplina.nome}</strong><br>(${disciplina.ch}h / ${disciplina.creditos || 0}c)`;
                disciplinaDiv.dataset.prerequisitos = JSON.stringify(disciplina.prerequisitos);
                if (concluidas.includes(disciplina.id)) {
                    disciplinaDiv.classList.add('concluida');
                }
                periodoColuna.appendChild(disciplinaDiv);
            }
        });

        // --- Adição de Eventos às Disciplinas ---
        const todasAsDisciplinas = document.querySelectorAll('.disciplina');
        const clearHighlights = () => todasAsDisciplinas.forEach(d => d.classList.remove('highlight-prereq', 'highlight-dependent'));

        todasAsDisciplinas.forEach(disciplinaDiv => {
            disciplinaDiv.addEventListener('mouseover', () => {
                if (disciplinaDiv.classList.contains('concluida')) return;
                clearHighlights();

                const prereqs = JSON.parse(disciplinaDiv.dataset.prerequisitos || '[]');
                prereqs.forEach(prereqId => {
                    document.getElementById(prereqId)?.classList.add('highlight-prereq');
                });

                const meuId = disciplinaDiv.id;
                todasAsDisciplinas.forEach(outraDisciplina => {
                    if (outraDisciplina.dataset.prerequisitos) {
                       const outrosPrereqs = JSON.parse(outraDisciplina.dataset.prerequisitos);
                       if (outrosPrereqs.includes(meuId)) {
                           outraDisciplina.classList.add('highlight-dependent');
                       }
                    }
                });
            });

            disciplinaDiv.addEventListener('mouseout', clearHighlights);

            disciplinaDiv.addEventListener('click', () => {
                disciplinaDiv.classList.toggle('concluida');
                const id = disciplinaDiv.id;
                if (concluidas.includes(id)) {
                    concluidas = concluidas.filter(concluidaId => concluidaId !== id);
                } else {
                    concluidas.push(id);
                }
                salvarProgresso(concluidas);

                // Atualiza todos os contadores e destaques
                atualizarCargaHorariaConcluida();
                atualizarCreditosConcluidos();
                atualizarDisciplinasLiberadas();
            });
        });

        // Chamadas iniciais para exibir o progresso salvo
        atualizarCargaHorariaConcluida();
        atualizarCreditosConcluidos();
        atualizarDisciplinasLiberadas();
    }

    // 4. CONFIGURAR OS EVENT LISTENERS DOS CONTROLES PRINCIPAIS
    seletorCurso.addEventListener('change', (event) => {
        carregarGrade(event.target.value);
    });

    btnLimparProgresso.addEventListener('click', () => {
        const cursoIdSelecionado = seletorCurso.value;
        const chaveStorage = `progresso_${cursoIdSelecionado}`;

        if (confirm(`Tem certeza que deseja limpar todo o progresso do curso "${DADOS_CURSOS[cursoIdSelecionado].nome}"?`)) {
            localStorage.removeItem(chaveStorage);
            carregarGrade(cursoIdSelecionado);
        }
    });

    btnSalvarPDF.addEventListener('click', () => {
        window.print();
    });

    // 5. FAZER A CARGA INICIAL DA APLICAÇÃO
    carregarGrade(seletorCurso.value);
});