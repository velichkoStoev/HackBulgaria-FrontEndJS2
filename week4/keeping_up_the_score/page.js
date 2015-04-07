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
    var pTextA = document.createTextNode("Team A score: " + scoreA);
    paragraphTeamA.appendChild(pTextA);
    
    var paragraphTeamB = document.createElement("p");   
    var pTextB = document.createTextNode("Team B score: " + scoreB);
    paragraphTeamB.appendChild(pTextB);

    div.className = 'container';

    var divA = document.createElement("div");
    divA.appendChild(paragraphTeamA);
    divA.appendChild(btnTeamA);

    var divB = document.createElement("div");
    divB.appendChild(paragraphTeamB);
    divB.appendChild(btnTeamB);

    div.appendChild(divA);
    div.appendChild(divB);

    divA.style.float = 'left';
    divA.style.marginRight = '25px';
    divB.style.float = 'left';

    btnTeamA.onclick = function(){
        scoreA += 1;
        var p = document.getElementsByTagName("p")[0];
        p.textContent = "Team A score: " + scoreA;
    }

    btnTeamB.onclick = function(){
        scoreB += 1;
        var p = document.getElementsByTagName("p")[1];
        p.textContent = "Team B score: " + scoreB;
    }
}