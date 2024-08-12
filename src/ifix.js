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
        label: "IFIX 2024",
        data: [0.67, 0.79, 1.43, -0.77, 0.02, -1.04, 0.52, -0.44],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
      {
        label: "IFIX 2023",
        data: [
          -1.6, -0.45, -1.69, 3.52, 5.43, 4.71, 1.33, 0.49, 0.2, -1.98, 0.66,
          4.25,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  },
});
