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
        label: "CDI 2024",
        data: [0.97, 0.8, 0.83, 0.89, 0.83, 0.79, 0.91, 0.47],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
      {
        label: "CDI 2023",
        data: [
          1.12, 0.92, 1.17, 0.92, 1.12, 1.07, 1.07, 1.14, 0.97, 1.0, 0.92, 0.89,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  },
});
