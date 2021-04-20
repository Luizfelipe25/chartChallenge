import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Api from "./Api";
import "react-dates/initialize";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chart.css";

export default class ChartConfig extends React.Component {
  //     ==========     Request API     =============
  state = {
    data: [],
  };
  async componentDidMount() {
    const response = await Api.get("");

    this.setState({ data: response.data });
  }
  //     ============================================

  render() {
    /* const dataList = values.map((datavalues) => {
       return datavalues[0];
     });
     const valueList = values.map((allValues) => {
       return allValues[1];
     });  */
    const { data } = this.state;

    //   ==========================================================================================================================
    //   =========                                               GRAFICO                                                ===========
    //   ==========================================================================================================================
    const Chart = {
      chart: {
        type: "area",
      },

      title: {
        text: "Gráfico de rendimentos",
      },
      xAxis: {
        type: "datetime",
        range: data,
      },
      yAxis: {
        title: { text: "Valor em reais" },
      },
      // ================= FILTRO ================
      rangeSelector: {
        enabled: true,
        selected: 0,
        verticalAlign: "top",
        inputDateFormat: "%Y %b %e",
        states: {
          hover: {
            enabled: true,
          },
        },
        buttonTheme: {
          width: 90,
        },
        buttons: [
          {
            type: "all",
            text: "Desde o Início",
            events: {
              click: () => localStorage.setItem("AllData", data),
            },
          },
          {
            type: "month",
            count: 1,
            text: "Ultimo mês",
            events: {
              click: function () {
                localStorage.setItem("monthData", this.data);
              },
            },
          },
          {
            type: "month",
            count: 3,
            text: "3 meses",
            events: {
              click: function () {
                localStorage.setItem("3monthData", this.data);
              },
            },
          },
          {
            type: "year",
            count: 1,
            text: "1 Ano",
            events: {
              click: () => localStorage.setItem("YearData", this.data),
            },
          },
          {
            type: "year",
            count: 2,
            text: "2 Anos",
            events: {
              click: () => localStorage.setItem("2yearData", this.data),
            },
          },
        ],
      },

      // =========================================
      series: [
        {
          name: "R$",
          data: data,
          type: "area",
          threshold: null,
          tooltip: {
            valueDecimals: 3,
          },
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -5,
                },
                title: {
                  text: null,
                },
              },
              subtitle: {
                text: null,
              },
              credits: {
                enabled: false,
              },
            },
          },
        ],
      },
    };
    Highcharts.setOptions({
      lang: {
        months: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        shortMonths: [
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
        weekdays: [
          "Domingo",
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
        ],
        loading: ["Carregando..."],
        contextButtonTitle: "Exportar gráfico",
        decimalPoint: ",",
        thousandsSep: ".",
        rangeSelectorFrom: "Período Inicial: ",
        rangeSelectorTo: "Até: ",
        rangeSelectorZoom: "Período: ",
      },
    });

    return (
      <div className="highcharts-figure">
        <HighchartsReact highcharts={Highcharts} options={Chart} />
      </div>
    );
  }
}
