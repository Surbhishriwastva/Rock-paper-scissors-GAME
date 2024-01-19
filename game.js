let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame = () => {
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31"
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = ` you win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you loose");
        msg.innerText = `you lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    // generate computer choice
    const compchoice = gencomchoice();
    console.log("comp choice =", compchoice);

    if (userchoice === compchoice) {
        // draw game
        drawgame();

    } else {
        let userwin = true;
        if (userchoice === "rock") {
            // scii ,paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock ,sci
            userwin = compchoice === "scissors" ? false : true;
        } else {
            // rock ,paaper
            compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})  