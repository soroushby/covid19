import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CovidData } from 'src/app/interfaces/covid-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.scss'],
})
export class CovidChartComponent implements OnChanges {
  @Input() covidData: CovidData[];

  private svg;
  private margin = 50;
  private width = 950 - this.margin * 2;
  private height = 600 - this.margin * 2;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'covidData':
            if (!this.svg) {
              this.createSvg();
            }
            this.drawPlot();
            break;
        }
      }
    }
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#scatter')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3
      .scaleLinear()
      .domain([0, this.covidData.length])
      .range([0, this.width]);
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x).tickFormat(d3.format('d')));

    // Add Y axis
    const maxPopulation = Math.max(
      ...this.covidData.map((item) => item.latest_data.confirmed)
    );
    const y = d3
      .scaleLinear()
      .domain([0, maxPopulation])
      .range([this.height, 0]);
    this.svg.append('g').call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots
      .selectAll('dot')
      .data(this.covidData)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => x(i))
      .attr('cy', (d) => y(d.latest_data.confirmed))
      .attr('r', 7)
      .style('opacity', 0.5)
      .style('fill', '#69b3a2');

    // Add labels
    dots
      .selectAll('text')
      .data(this.covidData)
      .enter()
      .append('text')
      .text((d) => d.name)
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.latest_data.confirmed));
  }
}
