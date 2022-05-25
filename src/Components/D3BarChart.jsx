import React from 'react'
import * as d3 from 'd3';
import './D3.scss'

export const D3BarChart = () => {
   
    const [ dataset , Setdata ] = React.useState( [] )
   
    React.useEffect(() => {

        Setdata( [50 , 20 , 40 , 46 , 150 , 210 , 170 , 180])

    },[]);

    var svgWidth = 500 , svgHeight = 300 , barPadding = 10
    var barWidth = ( svgWidth / dataset.length );

    var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

//scale the bar chart

// var xScale = d3.scaleLinear()
// .domain( [0 , d3.max(dataset)] )
// .range( [ 0 , svgWidth ] )

// var yScale = d3.scaleLinear()
// .domain( [0 , d3.max(dataset)] )
// .range( [  svgHeight , 0 ] )


//axis
// var x_axis = d3.axisBottom()
//     .scale(xScale)

// var y_axis = d3.axisLeft()
//     .scale(yScale)

// svg.append('g')
// .attr('transform', 'translate(50,-20)')
// .call(y_axis)

// var xAxisTranslate = svgHeight - 20

// svg.append('g')
// .attr('transform', 'translate(50,' + xAxisTranslate +  ')')
// .call(x_axis)


    var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y' , function(d) {
        return svgHeight - d
    })
    .attr( 'height' , function(d){
        return d
    })
    .attr('width' , barWidth - barPadding )
    .attr('transform' , function( d , i) {
        var translate = [ barWidth * i , 0]
        return 'translate(' + translate + ')';
    }) 

    // creating labels
    var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d
    })
    .attr('y' , function(d , i) {
    return svgHeight - d - 2
    })
    .attr('x' , function(d , i) {
        return barWidth * i 
    })
    .attr( 'fill' , "red" )

    return (
    <section className="barsection">
        <svg className="barChart"></svg>
    </section>
  )
}
