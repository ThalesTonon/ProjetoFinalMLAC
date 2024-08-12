var ctx = document.getElementById("cdiChart").getContext("2d");
var cdiChart = new Chart(ctx, {
  type: "line",
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CDI - Gráfico de Rentabilidade Mensal",
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
        label: "IPCA 2024",
        data: [0.42, 0.83, 0.16, 0.38, 0.46, 0.21, 0.38, 0.02, 0.38],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
      {
        label: "IPCA 2023",
        data: [
          0.53, 0.84, 0.71, 0.61, 0.23, -0.08, 0.12, 0.23, 0.26, 0.24, 0.28,
          0.56,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  },
});
