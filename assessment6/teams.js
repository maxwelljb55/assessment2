// create array containing hockey team names number of wins, losses and draws
var teams = [
			["Flying Tigers", 12, 6, 2],
			["Ice Kings", 6, 7, 7],
			["Hot Shots", 8, 4, 8],
			["Golden Pucks", 10, 5, 5],
			["Sliding Marvels", 9, 7, 4],			
			];
// sort array values according to number of wins			
teams = teams.sort(function(a,b) {
    return b[1] - a[1];
});
// create table to hold the data	
document.write("<table align='center' width='600' border='1' cellpadding='5' bgcolor='#CCFFFF'><tr align='left' bgcolor='#90caf9'><th>Team</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr>");	
// loop through teams array	
for(var i = 0; i < teams.length; i++) { 
 // multiply number of wins by 3 points
var points = teams[i][1] * 3;
// store number of draws
var points2 = teams[i][2];
// add together the wins and draws to give total points
var points3 = points + points2;
// output table containing points totals for wins, losses and draws and overall points total
document.write("<tr><td align='left'>"+teams[i][0] + "</td><td align='left'>" + teams[i][1] + "</td><td align='left'>" + teams[i][2] + "</td><td align='left'>" + teams[i][3] + "</td><td align='left'>" + points3 + "</td></tr>");
}
document.write("</table>");