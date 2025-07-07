document.addEventListener('DOMContentLoaded', function() {
    var heartRateChartInstance = []; 
  
    const pacientes = [
    { 
        id: 0, 
        nome: 'João Silva', 
        idade: 45, 
        peso: '95 kg', 
        altura: '1,78 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [72, 75, 74, 73, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [74, 75, 73, 72, 76] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [72, 74, 75, 73, 76] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [70, 72, 71, 74, 73, 75, 76, 72, 74, 75, 73] 
            }
        }
    },
    { 
        id: 1, 
        nome: 'Ana Costa', 
        idade: 60, 
        peso: '120 kg', 
        altura: '1,65 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [90, 92, 95, 88, 89] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [92, 90, 91, 93, 90] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [89, 90, 91, 92, 90] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [90, 92, 91, 93, 90, 89, 88, 90, 91, 92, 89] 
            }
        }
    },
    { 
        id: 2, 
        nome: 'Carlos Almeida', 
        idade: 32, 
        peso: '85 kg', 
        altura: '1,75 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [78, 80, 76, 75, 79] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [77, 78, 76, 75, 78] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [78, 79, 76, 77, 75] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [77, 78, 76, 78, 79, 75, 76, 78, 79, 77, 76] 
            }
        }
    },
    { 
        id: 3, 
        nome: 'Maria Ferreira', 
        idade: 45, 
        peso: '70 kg', 
        altura: '1,62 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [75, 76, 77, 78, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [76, 75, 77, 76, 78] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [75, 76, 78, 77, 76] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [76, 75, 77, 76, 78, 76, 75, 76, 77, 76, 75] 
            }
        }
    },
    { 
        id: 4, 
        nome: 'Lucas Santos', 
        idade: 29, 
        peso: '82 kg', 
        altura: '1,80 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [70, 72, 71, 70, 69] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [71, 70, 72, 71, 69] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [70, 71, 69, 70, 71] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [71, 70, 69, 71, 70, 69, 70, 71, 70, 69, 71] 
            }
        }
    },
    { 
        id: 5, 
        nome: 'Julia Pereira', 
        idade: 36, 
        peso: '68 kg', 
        altura: '1,65 m', 
        heartRateChart: {
            daily: { 
                label: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], 
                data: [76, 77, 78, 77, 76] 
            },
            monthly: { 
                label: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], 
                data: [77, 76, 78, 77, 76] 
            },
            weekly: { 
                label: ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'], 
                data: [76, 77, 78, 76, 77] 
            },
            hourly: { 
                label: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'], 
                data: [77, 76, 78, 76, 77, 76, 78, 76, 77, 76, 77] 
            }
        }
    },
  ]; 

    let ordem = {
        chave: null,
        direcao: 'asc'
    };

    renderPacientes(pacientes);

    function renderPacientes(pacientesToRender) { 
      const tabela = document.getElementById('pacientes-tabela');
        tabela.innerHTML = '';

        pacientesToRender.forEach((paciente, index) => {
            // Calcular FC Atual, Média, Máxima e Mínima com base nos dados horários
            const hourlyData = paciente.heartRateChart.hourly.data;
            const fcAtual = hourlyData[hourlyData.length - 1];
            const fcMax24h = Math.max(...hourlyData);
            const fcMin24h = Math.min(...hourlyData);
            const fcMedia24h = hourlyData.reduce((sum, val) => sum + val, 0) / hourlyData.length;
          
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${paciente.nome}</td>
                <td>${paciente.idade}</td>
                <td>${fcAtual} BPM</td>
                <td>${fcMedia24h.toFixed(1)} BPM</td>
                <td>${fcMax24h} BPM</td>
                <td>${fcMin24h} BPM</td>
                <td class="toggle-btn"><button onclick="toggleDetalhes(${index})">↕</button></td>
            `;
            tabela.appendChild(row);
 
            const detalhesRow = document.createElement('tr');
            detalhesRow.classList.add('detalhes');
            detalhesRow.innerHTML = `
                <td colspan="7" id="detalhes-${index}" class="detalhes-container hidden">
                    <div class="modal">
                        <div class="details-content">
                            <div class="left-section">
                                <div class="item">
                                  <span>Nome do Paciente:</span>
                                  <span class="value">${paciente.nome}</span>
                                </div>
                                <div class="item">
                                  <span>Altura:</span>
                                  <span class="value">${paciente.altura}</span>
                                  <span>Idade:</span> 
                                  <span class="value">${paciente.idade}</span>
                                </div>
                                <div class="item">
                                  <span>Peso:</span>
                                  <span class="value">${paciente.peso}</span>
                                </div>
                                <div class="item">
                                  <span>Frequência Cardíaca:</span>
                                  <span class="value">${fcAtual}</span>
                                  <span class="unit">BPM</span>
                                </div>
                            </div>
                            <div class="center-section"> 
                              <div class="charts charts-${index}" id="charts-${index}"> 
                                <div class="col-3 chart-exibindo" id="heartRateChartDetail-${index}">
                                  <h3>Frequência Cardíaca</h3>
                                  <canvas id="heartRateChartCanvas-${index}"></canvas>
                                </div>
                                <select id="periodSelector-${index}" class="selector">
                                  <option selected="" value="hourly">Horas do dia atual</option>
                                  <option value="daily">Dias da semana atual</option>
                                  <option value="weekly">Semanas do mês atual</option>
                                  <option value="monthly">Meses do ano atual</option>
                                </select>
                             </div>
                            </div>
                        </div>
                    </div>
                </td>
            `;
            tabela.appendChild(detalhesRow);
          
            // Adicionar event listener para o seletor de período do gráfico
            const selector = document.getElementById(`periodSelector-${index}`);
            selector.addEventListener('change', () => {
                let period = selector.value;
                criarGraficoFrequenciaCardiaca(index, period);
            }, false);
        });
    }
  
    window.ordenarTabela = function(idpos, chave) {
        if (ordem.chave === chave) {
            ordem.direcao = ordem.direcao === 'asc' ? 'desc' : 'asc';
        } else {
            ordem.chave = chave;
            ordem.direcao = 'asc';
        }
        
        // Limpa os ícones de ordenação de todos os cabeçalhos
        let icones = document.getElementsByClassName('geral');
        for(let i = 0; i < icones.length; i++) {
            icones[i].classList.remove('fa-sort-asc', 'fa-sort-desc');
        }

        // Adiciona o ícone de ordenação correto ao cabeçalho clicado
        const currentIcon = document.getElementById(idpos);
        if (currentIcon) {
            currentIcon.classList.add(ordem.direcao === 'asc' ? 'fa-sort-asc' : 'fa-sort-desc');
        }

        pacientes.sort((a, b) => {
            const valorA = a[chave];
            const valorB = b[chave];

            if (typeof valorA === 'string' && typeof valorB === 'string') {
                return ordem.direcao === 'asc' ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
            } else {
                if (valorA < valorB) {
                    return ordem.direcao === 'asc' ? -1 : 1;
                }
                if (valorA > valorB) {
                    return ordem.direcao === 'asc' ? 1 : -1;
                }
                return 0;
            }
        });
        renderPacientes(pacientes);
    };
  
    window.toggleDetalhes = function(index) {
        const detalhes = document.getElementById(`detalhes-${index}`);
        detalhes.classList.toggle('hidden');
        if (!detalhes.classList.contains('hidden')) {
            criarGraficoFrequenciaCardiaca(index, 'hourly'); // Padrão para "Horas do dia atual"
        }
    }
  
    document.getElementById('pesquisar').addEventListener('click', buscarPaciente);
 
    function buscarPaciente() {
        const nome = document.getElementById('nome').value.toLowerCase();
        const pacientesFiltrados = pacientes.filter(paciente => paciente.nome.toLowerCase().includes(nome));
        renderPacientes(pacientesFiltrados);
    }
  
    function toggleAll(evt) {
        let flagOcultar; 
        if (evt.target.innerText == 'Expandir') {
            evt.target.innerText = 'Recolher';
            flagOcultar = false; // Queremos mostrar
        } else {
          evt.target.innerText = 'Expandir';
          flagOcultar = true; // Queremos ocultar
        }
          
        let cont = document.getElementsByClassName('detalhes-container');
        for( let i = 0; i < cont.length; i++) {
          if ( flagOcultar ) {
            cont[i].classList.add('hidden');  
          } else {
            cont[i].classList.remove('hidden');    
            criarGraficoFrequenciaCardiaca(i, 'hourly'); // Cria o gráfico ao expandir
          }
        }
    }
    
    document.getElementById('expandir-todos').addEventListener('click', toggleAll);

    window.limparFiltros = function() {
        document.getElementById('nome').value = '';
        renderPacientes(pacientes);
    };
    
    function getHeartRateChartData(index, periodo) {
        let auxPeriodo = periodo === undefined ? 'hourly' : periodo;
        return {
            data: [{
                label: 'Frequência Cardíaca (BPM)',
                data: pacientes[index].heartRateChart[auxPeriodo].data,
                borderColor: 'red',
                fill: false
            }],
            labels: pacientes[index].heartRateChart[auxPeriodo].label
        };
    }
        
    function criarGraficoFrequenciaCardiaca(index, periodo) {
        let chartData = getHeartRateChartData(index, periodo);
        const ctxHeartRate = document.getElementById(`heartRateChartCanvas-${index}`).getContext('2d');
          
        if (heartRateChartInstance[index] !== undefined) {
            heartRateChartInstance[index].destroy(); // Destrói a instância anterior para recriar
        }

        heartRateChartInstance[index] = new Chart(ctxHeartRate, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: chartData.data
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Período'
                        },
                         ticks: {
                            callback: function(value, idx, ticks) {
                                let period = document.getElementById(`periodSelector-${index}`).value;
                                let label = chartData.labels[idx];
                                if (period === 'daily') {
                                    const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
                                    return days[value - 1] || label; 
                                } else if (period === 'monthly') {
                                    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                                    return months[value - 1] || label; 
                                } else if (period === 'weekly') {
                                     const weeks = ['1ª Semana', '2ª Semana', '3ª Semana', '4ª Semana', '5ª Semana'];
                                     return weeks[value - 1] || label;
                                }
                                return label; 
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Frequência Cardíaca (BPM)'
                        },
                        beginAtZero: false 
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Histórico de Frequência Cardíaca'
                    }
                }
            }
        });
    }
  
    // Inicializa a ordenação e a exibição
    buscarPaciente();
    setTimeout(function() { 
        ordenarTabela('sort-nome', 'nome');
    }, 500);
});