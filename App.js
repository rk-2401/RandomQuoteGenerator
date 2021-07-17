var colours=['teal','#ac143c','blueviolet','brown','crimson','darkslategrey','forestgreen','mediumspringgreen','royalblue','salmon','slateblue','tomato'];
var currentColour='',index=0;
function changeColour(){
    index+=1;
    index%=colours.length;
    currentColour=colours[index];
}
var quotesJson={};
var currentQuote='';
var currentAuthor='';
let quotesURL='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let request=new XMLHttpRequest();
request.open('GET',quotesURL);

request.responseType='json';
request.send();


function changeQuote(){
    
    let rand=Math.floor(Math.random()*quotesJson['quotes'].length);
    while(quotesJson['quotes'][rand]['quote'].length>80)
        rand=Math.floor(Math.random()*quotesJson['quotes'].length);
    changeColour();
    
    $(document).ready(function(){
        $("html").animate({opacity:0.6},400,function(){
            $("body").css('background-color',currentColour);
        });
        $(".animation").animate({opacity:0.2},400,function(){
            $("#quote").css('color',currentColour);
            $("#new-quote").css('background-color',currentColour);
            $("#author").css('color',currentColour);
            $("#twitter-div").css('background-color',currentColour);
            document.getElementById("quote").innerText=quotesJson['quotes'][rand]['quote'];
            currentQuote=quotesJson['quotes'][rand]['quote'];
            document.getElementById("author").innerText='~'+quotesJson['quotes'][rand]['author'];
            currentAuthor='~'+quotesJson['quotes'][rand]['author'];
            
            $("html").animate({opacity:1},400);
            $(".animation").animate({opacity:1},400);    
        });
            
        
    });
    
    $(document).ready(function(){
        
        
    });
}
request.onload=function(){
    quotesJson=request.response;
    
    let rand=Math.floor(Math.random()*quotesJson['quotes'].length);
    while(quotesJson['quotes'][rand]['quote'].length>80)
        rand=Math.floor(Math.random()*quotesJson['quotes'].length);
        document.getElementById("quote").innerText=quotesJson['quotes'][rand]['quote'];
        currentQuote=quotesJson['quotes'][rand]['quote'];
        document.getElementById("author").innerText='~'+quotesJson['quotes'][rand]['author'];
        currentAuthor='~'+quotesJson['quotes'][rand]['author'];
    $(document).ready(function(){
        
        $(".animation").animate({opacity:1},1000,function(){
            $("body").css('background-color',"tomato");
        });
        $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
}


    
