//Function used to grab .txt file and put it into the content box
function displayAbout() {
    var divObj = document.getElementById('information');
    var xmlHttp = new XMLHttpRequest();
            
    xmlHttp.onload = setTimeout(function() {
        if(xmlHttp.status == 200) {
            //Get XML document
            var xmlDoc = xmlHttp.responseXML;
                    
            //Set div's inner HTML
            divObj.innerHTML = "<p>" + xmlHttp.responseText + "</p>";
        }
    }, 500);
            
            //Opening XML document provided
            xmlHttp.open("GET", "text/about.txt", true);
            xmlHttp.send();  
}

//Function used to grab .txt file and put it into the content box
function displayProjects() {
    var divObj = document.getElementById('information');
    var xmlHttp = new XMLHttpRequest();
            
    xmlHttp.onload = setTimeout(function() {
        if(xmlHttp.status == 200) {
            //Get XML document
            var xmlDoc = xmlHttp.responseXML;
                    
            //Set div's inner HTML
            divObj.innerHTML = "<p>" + xmlHttp.responseText + "</p>";
        }
    }, 500);
            
            //Opening XML document provided
            xmlHttp.open("GET", "text/projects.txt", true);
            xmlHttp.send();  
}

//Function used to grab .txt file and put it into the content box
function displayExperience() {
    var divObj = document.getElementById('information');
    var xmlHttp = new XMLHttpRequest();
            
    xmlHttp.onload = setTimeout(function() {
        if(xmlHttp.status == 200) {
            //Get XML document
            var xmlDoc = xmlHttp.responseXML;
                    
            //Set div's inner HTML
            divObj.innerHTML = "<p>" + xmlHttp.responseText + "</p>";
        }
    }, 500);
            
            //Opening XML document provided
            xmlHttp.open("GET", "text/experiences.txt", true);
            xmlHttp.send();  
}

//Function used to grab .txt file and put it into the content box
function displayContact() {
    var divObj = document.getElementById('information');
    var xmlHttp = new XMLHttpRequest();
            
    xmlHttp.onload = setTimeout(function() {
        if(xmlHttp.status == 200) {
            //Get XML document
            var xmlDoc = xmlHttp.responseXML;
                    
            //Set div's inner HTML
            divObj.innerHTML = "<p>" + xmlHttp.responseText + "</p>";
        }
    }, 500);
            
            //Opening XML document provided
            xmlHttp.open("GET", "text/contactme.txt", true);
            xmlHttp.send();  
}