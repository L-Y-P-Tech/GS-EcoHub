const dicas = [
    "Desligue os aparelhos da tomada quando não estiver usando.",
    "Troque lâmpadas tradicionais por LEDs, que consomem menos energia.",
    "Use a máquina de lavar roupas somente quando estiver cheia.",
    "Feche a torneira enquanto escova os dentes para economizar água.",
    "Reutilize sacolas plásticas ou opte por sacolas reutilizáveis.",
    "Prefira transporte público ou bicicletas para reduzir a emissão de CO₂."];

        let dicaAtual = 0;

        function proximaDica() {
            dicaAtual = (dicaAtual + 1) % dicas.length;  // Volta ao início quando chegar ao fim
            document.getElementById('dica-texto').textContent = dicas[dicaAtual];
        }

        const desafios = [
            { texto: "Use 10% menos energia hoje e ganhe 5 raios!", recompensa: 5 },
            { texto: "Reduza o tempo no chuveiro pra economizar água.", recompensa: 3 },
            { texto: "Desligue as luzes de cômodos vazios.", recompensa: 2 },
            { texto: "Reutilize a água da chuva para regar plantas.", recompensa: 4 },
        ];

        let indiceDesafio = 0;
        let raios = 0;
        let raiosGanhos = 0;
        let desafioAceito = false;

        function aceitarDesafio() {
            document.getElementById("status-texto").textContent = "Desafio aceito! Complete-o para ganhar sua recompensa.";
            desafioAceito = true;
        }

        function completarDesafio() {
            if (!desafioAceito) {
                document.getElementById("status-texto").textContent = "Aceite o desafio primeiro!";
                return;
            }

            const recompensa = desafios[indiceDesafio].recompensa;
            raiosGanhos += recompensa;
            
            document.getElementById("status-texto").textContent = `Parabéns! Você ganhou ${recompensa} raios! Total ganho: ${raiosGanhos} raios ⚡`;
            
            desafioAceito = false;
            indiceDesafio = (indiceDesafio + 1) % desafios.length;
            document.getElementById("desafio-texto").textContent = desafios[indiceDesafio].texto;
            document.getElementById("recompensa-texto").textContent = `Recompensa: +${desafios[indiceDesafio].recompensa} Raios ⚡`;
        }

        function adicionarRaiosGanhos() {
            if (raiosGanhos > 0) {
                let quantidadeAtual = parseInt(document.getElementById("quantidade").textContent);
                quantidadeAtual += raiosGanhos;
                document.getElementById("quantidade").textContent = quantidadeAtual;
                raiosGanhos = 0; // Zera os raios ganhos após adicionar ao total
                document.getElementById("status-texto").textContent = "Raios adicionados ao seu total!";
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
                    datasets: [
                        {
                            label: 'Consumo Energético (kWh)',
                            data: [100, 150, 200, 250, 300, 350, 400],
                            borderColor: 'blue',
                            backgroundColor: 'rgba(0, 0, 255, 0.1)',
                            fill: true,
                        },
                        {
                            label: 'Custo (R$)',
                            data: [20, 30, 40, 50, 60, 70, 80],
                            borderColor: 'orange',
                            backgroundColor: 'rgba(255, 165, 0, 0.1)',
                            fill: true,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Inicializar o primeiro desafio
            document.getElementById("desafio-texto").textContent = desafios[indiceDesafio].texto;
            document.getElementById("recompensa-texto").textContent = `Recompensa: +${desafios[indiceDesafio].recompensa} Raios ⚡`;
        });

        