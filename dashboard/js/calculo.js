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
        });