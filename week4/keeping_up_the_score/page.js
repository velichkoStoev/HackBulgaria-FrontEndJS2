window.onload = function(){
    var scoreA = 0;
    var scoreB = 0;

    console.log("DOM loaded");
    var div = document.getElementsByTagName("div")[0];

    var btnTeamA = document.createElement("button");   
    var btnTextA = document.createTextNode("Team A"); 
    btnTeamA.appendChild(btnTextA);

    var btnTeamB = document.createElement("button");   
    var btnTextB = document.createTextNode("Team B"); 
    btnTeamB.appendChild(btnTextB);

    var paragraphTeamA = document.createElement("p");    
    var pTextA = document.createTextNode("Team A score: ");
    paragraphTeamA.appendChild(pTextA);
    
    var paragraphTeamB = document.createElement("p");   
    var pTextB = document.createTextNode("Team B score: ");
    paragraphTeamB.appendChild(pTextB);

    div.appendChild(paragraphTeamA); 
    div.appendChild(btnTeamA); 
    div.appendChild(paragraphTeamB); 
    div.appendChild(btnTeamB); 

    btnTeamA.onclick = function(){
        scoreA += 1;
        var p = document.getElementsByTagName("p")[0];
        p.innerHTML = "Team A score: " + scoreA;
    }

    btnTeamB.onclick = function(){
        scoreB += 1;
        var p = document.getElementsByTagName("p")[1];
        p.innerHTML = "Team B score: " + scoreB;
    }
}