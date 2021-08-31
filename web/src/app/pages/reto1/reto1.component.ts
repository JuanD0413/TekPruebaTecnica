import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Api } from 'src/app/interfaces/api';
import { DataService } from '../../services/data.service';

export interface ChartInterface {
  data:Array<Number>;
  label:String;
}

@Component({
  selector: 'app-reto1',
  templateUrl: './reto1.component.html',
  styleUrls: ['./reto1.component.scss']
})
export class Reto1Component implements OnInit {
  public datos:Array<Api> = [];
  public mujeresCovid:Array<Api> = [];
  public hombresCovid:Array<Api> = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['0 - 20 Años', '20 - 40 Años', 'Mayores de 40'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels: Label[] = ["Mujeres", "Hombres"];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  //public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private _api:DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._api.getAll().subscribe(response => {
      console.log(response)
      if(response) {
        this.datos = response;
        function filtrarPorID(obj:Api) {
          if (Number(obj.edad) >= 20 && Number(obj.edad) <= 40) {
            return true;
          } else {
            return false;
          }
        }
        const menoresDe20 = this.datos.filter(f => Number(f.edad) <= 20);
        const entre20and40 = this.datos.filter(filtrarPorID);
        console.log(entre20and40);
        const mayoresDe40 = this.datos.filter(f => Number(f.edad) >= 40);
        this.barChartData.push({
          data: [menoresDe20.length, entre20and40.length, mayoresDe40.length],
          label: 'Contagiados'
        })
        this.hombresCovid = this.datos.filter(f => f.sexo == "M");
        this.mujeresCovid = this.datos.filter(f => f.sexo == "F");
        this.pieChartData.push(this.mujeresCovid.length,this.hombresCovid.length);
      }
    })
  }

}
