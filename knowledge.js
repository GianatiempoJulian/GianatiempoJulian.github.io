/*==KNOWLEDGE==*/

let knowledge_btn = document.getElementById("knowledge-btn");
let knowledge_title = document.getElementById("knowledge-area-title");
let knowledge_area = document.getElementById("knowledge-area");
let knowledge = document.getElementById("knowledge");
let front_end = document.getElementsByClassName("front-end-technologies");
let back_end = document.getElementsByClassName("back-end-technologies");

knowledge_btn.addEventListener("click", function() {
    if (knowledge_title.textContent == "Front End") {

        for (let i = 0; i < front_end.length; i++) {
            front_end[i].style.display = "none";
            back_end[i].style.display = "inline";
        }

        knowledge_title.innerHTML = "Back End";
        knowledge_btn.innerHTML = "Front End";

        //box of text styles

        knowledge_area.style.backgroundColor = "black";


        //box of languages styles
        knowledge_title.style.color = "#e5e5e5";
        knowledge.style.backgroundColor = "#e5e5e5";

        //knowledge button styles
        knowledge_btn.style.backgroundColor = "#e5e5e5";
        knowledge_btn.style.color = "black";

    } else {

        for (let i = 0; i < back_end.length; i++) {
            front_end[i].style.display = "inline";
            back_end[i].style.display = "none";
        }


        knowledge_title.innerHTML = "Front End";
        knowledge_btn.innerHTML = "Back End"

        //box of text styles
        knowledge_area.style.backgroundColor = "#e5e5e5";

        //box of languages styles
        knowledge_title.style.color = "black";
        knowledge.style.backgroundColor = "black";

        //knowledge button styles
        knowledge_btn.style.backgroundColor = "black";
        knowledge_btn.style.color = "#e5e5e5";
    }
});