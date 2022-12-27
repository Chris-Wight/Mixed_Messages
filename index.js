const codeQuote = document.getElementById("codeQuote");
const funQuote = document.getElementById("funQuote");
const famousQuote = document.getElementById("famousQuote");
const lifeQuote = document.getElementById("lifeQuote");
const generateButton = document.getElementById("generate-quote");
const quoteEl = document.getElementById("quote-text");
const quoteArray = [codeQuote, funQuote, famousQuote, lifeQuote];

const quotes = {
    funQuotes: [
        "“I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.” —Mitch Hedberg",

        "“Gentlemen, you can't fight in here. This is the war room.”—President Merkin Muffley (Peter Sellers), Dr. Strangelove",

        "“My mother always used to say: The older you get, the better you get, unless you're a banana.” —Rose (Betty White), The Golden Girls",

        "“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.” —Jack Handey",
        
        "“Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.” —Will Ferrell"

],
    codeQuotes: [
        "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” -Martin Fowler",

        "“Experience is the name everyone gives to their mistakes.” -Oscar Wilde",

        "“Make it work, make it right, make it fast.” -Kent Beck",

        "“Knowledge is power.” - Francis Bacon",

        "“Fix the cause, not the symptom.” -Steve Maguire"

    ],
    famousQuotes: [
        "“When the going gets tough, the tough get going.” -Joe Kennedy",

        "“You must be the change you wish to see in the world.” -Mahatma Gandhi",

        "“You only live once, but if you do it right, once is enough.” -Mae West",

        "“You miss 100 percent of the shots you never take.” -Wayne Gretzky",

        "“Never let the fear of striking out keep you from playing the game.” -Babe Ruth"
    ],
    lifeQuotes: [
        "“We are here to add what we can to life, not to get what we can from life.” -William Osler",

        "“Life comes from the earth and life returns to the earth.” -Zhuangzi",

        "“Believe you can and you're halfway there.” -Theodore Roosevelt",
        
        "“Life can only be understood backwards; but it must be lived forwards.” -Søren Kierkegaard",

        "“Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.” -Roy. T. Bennett"
    ]
};

let previousRanNum = 0;
let newRanNum = 0;
const randomNum = () =>{
    while(previousRanNum === newRanNum){
        newRanNum = Math.floor(Math.random()* 5);
    }
    previousRanNum = newRanNum
    return newRanNum
}

generateButton.addEventListener("click", function(){
    for(let i = 0; i < quoteArray.length; i++ ){
        if(quoteArray[i].checked){
          switch(quoteArray[i].id){
            case "codeQuote":
                quoteEl.innerHTML = quotes.codeQuotes[randomNum()];
                break;
            
            case "funQuote":
                quoteEl.innerHTML = quotes.funQuotes[randomNum()];
                break;

            case "famousQuote":
                quoteEl.innerHTML = quotes.famousQuotes[randomNum()];
                break;

            case "lifeQuote":
                quoteEl.innerHTML = quotes.lifeQuotes[randomNum()];
                break;
          }
        }
    }
})

