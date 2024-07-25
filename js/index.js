const quotes = [
    `“Be yourself; everyone else is already taken.”― Oscar Wilde`,
    `“So many books, so little time.”― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein`,
    `“A room without books is like a body without a soul.”― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss`,
    `“You only live once, but if you do it right, once is enough.”― Mae West`,
    `“Be the change that you wish to see in the world.”― Mahatma Gandhi`,
    `“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost`,
    `“If you tell the truth, you don't have to remember anything.”― Mark Twain`,
    `“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard`
];

var div = document.getElementById("all");

function display() {

    var box = ``;

    var theRandomNumber = Math.floor(Math.random() * 10) + 1;

    var quote =quotes[theRandomNumber].split("―");

    box = ` <h2 class="text-white">${quote[0]}”</h2>
            <p class="text-white pt-3">* ${quote[1]} *</p>`

    div.innerHTML = box;

}

