// Variable containing target time, and 2 dimensional array of runneners 
var filter_time = 50,
    runners = [
        ["Jane","Brown", 55, 104],
        ["Jill","Reed", 150, 45],
        ["Mary","White", 70, 60],
        ["Anne","Jones", 130, 90],
        ["Marie","Penny", 47, 55],
        ["Rachel","Gruff", 82, 51],
        ["Tanya","Stole", 62, 100],
        ["Betty","Jeffrey", 73, 49]
    ],
 // use the filter_time variable to filter out the fastest runners as specified in the array's third OR forth column
   filtered_runners = runners.filter(function(runner) {
        return (runner[2] < filter_time) || (runner[3] < filter_time);
    }),
	
// return table element	
    runnerTBODY = document.getElementById('runnerData');	
// for loops creates table of runners in group A  
for (var i = 0, runner; runner = filtered_runners[i]; i++) {
    var tr = make('tr', runnerTBODY);
    for (var j = 0, jLen = runner.length; j < jLen; j++) {
        make('td', tr, runner[j]);
    }
}
// loop through filtered_runners array and add the fastest runner and time to the span tags
for ( i = 0; i < filtered_runners.length; i++ ) {
document.getElementById('winner').innerHTML = filtered_runners[0][0] + " " + filtered_runners[0][1];
document.getElementById('time').innerHTML = filtered_runners[0][3];
}
// function used to create the table of runners
function make(tagName, parent, content) {
    var e = document.createElement(tagName);
    if (content) e.textContent = content;
    if (parent) parent.appendChild(e);
    return e;
} 
// return second table element 
table2 = document.getElementById("table2");
// for loop creates the second table's first 2 rows
for(var i = 2; i < table2.rows.length; i++){
// for loop fills the table with the data
for(var j = 0; j < table2.rows[i].cells.length; j++){
table2.rows[i].cells[j].innerHTML = runners[i-2][j];
}
}
