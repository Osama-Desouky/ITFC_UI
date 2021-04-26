$(function () {
  var orange_color = "rgb(237,76,33)";
  var lineData = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "مشاريع تطوير التعليم في أفريقيا",
        borderColor: orange_color,
        borderWidth: 3,
        pointBackgroundColor: orange_color,
        pointBorderColor: orange_color,
        pointBorderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [20, 35, 40, 70, 60],
        fill: false,
        lineTension: 0,
      },
      {
        label: "grayLine",
        borderWidth: 2,
        fill: false,
        borderDash: [10],
        borderDashOffset: 10,
        borderColor: "#AE9D96",
        pointBorderWidth: 0,
        pointBorderColor: "#fff",
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: "#fff",
        data: [
          {
            x: "2016",
            y: 20,
          },
          {
            x: "2020",
            y: 70,
          },
        ],
      },
    ],
  };

  var barData = {
    labels: [
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    datasets: [
      {
        label: "تنمية التجارة",
        backgroundColor: orange_color,
        hoverBackgroundColor: "rgba(243,107,33,0.9)",
        data: [20, 50, 42, 18, 41, 69, 38, 56, 75, 69, 56, 85],
        maxBarThickness: 25,
      },
      {
        label: "grayLine",
        borderWidth: 2,
        type: "line",
        fill: false,
        borderDash: [10],
        borderDashOffset: 10,
        borderColor: "#AE9D96",
        pointBorderWidth: 0,
        pointBorderColor: "#fff",
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: "#fff",
        data: [
          {
            x: "2009",
            y: 20,
          },
          {
            x: "2020",
            y: 85,
          },
        ],
      },
    ],
  };

  var options = {
    maintainAspectRatio: false, // required for responsive ratio
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 90,
          },
          gridLines: {
            display: true, //show Y Axes line
            color: "rgb(240,240,240)", // Y Axes line color
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false, // hide X Axes Line
          },
          ticks: {
            fontColor: "#949486",
            fontSize: 14,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.innerHTML = "<ul></ul>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          // var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var innerHtml = "";

          // titleLines.forEach(function(title) {
          //     innerHtml += '<tr><th>' + title + '</th></tr>';
          // });

          bodyLines.forEach(function (body, i) {
            console.log(body);
            var bTitle = body[0].split(":")[0];
            var bVal = body[0].split(":")[1];
            if (bTitle != "grayLine")
              innerHtml += "<li>" + bVal + " " + bTitle + "</li>";
          });
          // innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector("ul");
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();
        console.log(tooltipModel);
        console.log(tooltipEl.offsetHeight);
        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX - 105 + "px";
        tooltipEl.style.top =
          position.top +
          window.pageYOffset +
          tooltipModel.caretY -
          tooltipEl.offsetHeight -
          20 +
          "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  };
  var doughnutData = {
    labels: ["زراعة", "تعليم", "طاقة", "بيئة", "صحة"],
    datasets: [
      {
        label: "Trade Development",
        data: [45, 20, 15, 10, 10],
        backgroundColor: [
          "#D63039",
          "#90426F",
          "#ED4C21",
          "#B29F56",
          "#FE9E36",
        ],
        borderWidth: 0,
        // hoverBorderWidth: 20,
        hoverBorderColor: [
          "rgba(214,48,57,0.2)",
          "rgba(144,66,111,0.2)",
          "rgba(237,76,33,0.2)",
          "rgba(178,159,86,0.2)",
          "rgba(254,158,54,0.2)",
        ],
      },
    ],
  };
  var pieData = {
    labels: ["زراعة", "تعليم", "طاقة", "بيئة", "صحة"],
    datasets: [
      {
        label: "تنمية التجارة",
        data: [45, 20, 15, 10, 10],
        backgroundColor: [
          "#D63039",
          "#90426F",
          "#ED4C21",
          "#B29F56",
          "#FE9E36",
        ],
        borderWidth: 0,
        // hoverBorderWidth: 20,
        hoverBorderColor: [
          "rgba(214,48,57,0.2)",
          "rgba(144,66,111,0.2)",
          "rgba(237,76,33,0.2)",
          "rgba(178,159,86,0.2)",
          "rgba(254,158,54,0.2)",
        ],
      },
    ],
  };
  var doughnutOptions = {
    maintainAspectRatio: false, // required for responsive ratio
    legend: {
      position: "right",
      labels: {
        boxWidth: 12,
        fontSize: 13,
        padding: 18,
      },
      rtl:true
    },
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById("chartjs-percentage");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-percentage";
          tooltipEl.innerHTML = "<div></div>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          // var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var innerHtml = "";

          // titleLines.forEach(function(title) {
          //     innerHtml += '<tr><th>' + title + '</th></tr>';
          // });

          bodyLines.forEach(function (body, i) {
            console.log(body);
            var bTitle = body[0].split(":")[0];
            var bVal = body[0].split(":")[1];
            innerHtml += bVal + " %";
          });
          // innerHtml += '</tbody>';

          var divRoot = tooltipEl.querySelector("div");
          divRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();
        console.log(position);
        console.log(tooltipModel);
        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left + position.width / 2 + window.pageXOffset - 100 + "px";
        tooltipEl.style.top =
          position.top + position.height / 2 + window.pageYOffset - 30 + "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  };
  var pieOptions = {
    maintainAspectRatio: false, // required for responsive ratio
    legend: {
      position: "right",
      labels: {
        boxWidth: 12,
        fontSize: 13,
        padding: 18,
      },
      rtl:true
    },
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById("chartjs-percentage-white");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-percentage-white";
          tooltipEl.innerHTML = "<div></div>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          // var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var innerHtml = "";

          // titleLines.forEach(function(title) {
          //     innerHtml += '<tr><th>' + title + '</th></tr>';
          // });

          bodyLines.forEach(function (body, i) {
            console.log(body);
            var bTitle = body[0].split(":")[0];
            var bVal = body[0].split(":")[1];
            innerHtml += bVal + " %";
          });
          // innerHtml += '</tbody>';

          var divRoot = tooltipEl.querySelector("div");
          divRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();
        console.log(position);
        console.log(tooltipModel);
        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
        position.left + window.pageXOffset + tooltipModel.caretX - 50 + "px";
      tooltipEl.style.top =
        position.top +
        window.pageYOffset +
        tooltipModel.caretY -
        tooltipEl.offsetHeight +
        "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  };
  // Chart.Bar("chart", {
  //   options: options,
  //   data: data,
  // });
  var line_ctx = $("#line-chart");
  var bar_ctx = $("#bar-chart");
  var doughnut_ctx = $("#doughnut-chart");
  var pie_ctx = $("#pie-chart");

  var lineChart = new Chart(line_ctx, {
    type: "line",
    options: options,
    data: lineData,
  });
  var barChart = new Chart(bar_ctx, {
    type: "bar",
    options: options,
    data: barData,
  });
  var doughnutChart = new Chart(doughnut_ctx, {
    type: "doughnut",
    options: doughnutOptions,
    data: doughnutData,
  });
  var pieChart = new Chart(pie_ctx, {
    type: "pie",
    options: pieOptions,
    data: pieData,
  });
});
