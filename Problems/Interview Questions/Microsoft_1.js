"use strict";

// you can write to stdout for debugging purposes, e.g.
//[(‘SEA’,‘ANC’), (‘SFO’, ‘IAD'), (‘ANC’,’PDX’), (‘PDX’,’SFO’)]
console.log("This is a debug message");


function flightItinerary(flights, start){
    // get unique airports array => check # of airports
    let uniqueAirports = new Set(flights.flat());
    let numAirports = uniqueAirports.size;

    // adjacency list: each starting point -> destination
    let adjList = {};
    for(let flight of flights){
        let [a,b] = flight;
        adjList[a] = b;
    }

    // generate the path of traveling, based on adj list
    let output = [start];

    function helper(point){
        if(!adjList[point]) return;

        let dest = adjList[point];
        output.push(dest);
        helper(dest);
    }

    helper(start)
    

    // return the full path, only when we travel all the airports
    return (numAirports === output.length) ? output : null;
}



    let flightList = [ ['SEA','ANC'], ['SFO','IAD'], ['ANC', 'PDX'], ['PDX', 'SFO'] ];
    
    console.log(flightItinerary( flightList, 'SEA')) // ['SEA], 'ANC'....,'IAD']
    console.log(flightItinerary(flightList, 'IAD'))  // NULL
    console.log(flightItinerary(flightList, 'LAX'))  // NULL