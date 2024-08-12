var ctx = document.getElementById("resumoInvestimentosChart").getContext("2d");
var resumoInvestimentosChart = new Chart(ctx, {
  type: "line",
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumo de Investimentos - Rentabilidade Mensal",
      },
    },
  },
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "CDI 2024",
        data: [0.97, 0.8, 0.83, 0.89, 0.83, 0.79, 0.91, 0.24],
        borderColor: "rgba(255, 99, 71, 0.7)",
        fill: false,
      },

      {
        label: "IPCA 2024",
        data: [0.42, 0.83, 0.16, 0.38, 0.46, 0.21, 0.38, 0.02, 0.38],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "IFIX 2024",
        data: [0.67, 0.79, 1.43, -0.77, 0.02, -1.04, 0.52, -0.44],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  },
});
