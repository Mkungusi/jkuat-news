// localStorage.setItem('user', 'JSON.stringify(user)');

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));


var stories = [
    {
        "title" : "The Girl From Kacheliba, West Pokot. (Part One)",
        "link" : "article1.html"
    },
    {
        "title" : "The Girl from Kacheliba, West Pokot (Part Two)",
        "link" : "article2.html"
    },
    {
        "title" : "Course of the Week; B.Sc. Analytical Chemistry",
        "link" : "article3.html"
    },
    {
        "title" : "Nurturing Mashujaa, One Act at a Time; The JKUAT Red Cross",
        "link" : "article4.html"
    },
    {
        "title" : "JKUAT Mathematics Career Fair 2018!",
        "link" : "article5.html"
    },
    {
        "title" : "Course of the Week; BSc. Food Science and Postharvest Technology",
        "link" : "article6.html"
    }
]

var log = JSON.parse(sessionStorage.getItem('log'));
if(!log){
    log = [];
    sessionStorage.setItem('log', JSON.stringify(log));
}

function logArticle(articleIndex){
    if(log.length == 0) {
        log.push(stories[articleIndex]);
    }
    else {
        var tempLog = [];
        for(var i = 0; i < log.length; i++) {
            if(log[i].link != stories[articleIndex].link) {
                tempLog.push(log[i]);
            }
        }
        tempLog.push(stories[articleIndex]);
        log = tempLog;
    }
    console.log(log);
    sessionStorage.setItem('log', JSON.stringify(log));
    displayLog(articleIndex);
}

function displayLog(articleIndex) {
    var html = "<h5>Recently Viewed</h5>";
    for(var i = log.length-1; i >= 0 ; i--) {
        if(log[i].link != stories[articleIndex].link) {
            html += '<h6><a href="' + log[i].link + '">' + log[i].title + '</a></h6>';
        }
    }
    console.log(html);
    console.log(log);
    $("#visualLog").html(html);
    
}