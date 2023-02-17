const rating = document.getElementsByClassName("rating");
const btn = document.getElementById("btn");
const ratingContainer = document.getElementById("rating-container");
const headChange = document.getElementById("heading");
const containerChange = document.getElementById("container");

// console.log(containerChange);

let temp = -1;

for(let i = 0; i < rating.length; i++){
    rating[i].addEventListener("click", () =>{
        removeActive();
        rating[i].classList.add("active");
        temp = i;
    })
}

function removeActive(){
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove("active");
    }
}

const arrList = [
    {
        heading: "Thank you!",
        nameFeedBack: "Feedback : Unhappy",
        improvePart: "We'll use your feedback to improve our customer support"
    },
    {
        heading: "Thank you!",
        nameFeedBack: "Feedback : Neutral",
        improvePart: "We'll use your feedback to improve our customer support"
    },
    {
        heading: "Thank you!",
        nameFeedBack: "Feedback : Statisfied",
        improvePart: "We'll use your feedback to improve our customer support"
    }
]


btn.addEventListener("click", () => {
    containerChange.innerHTML = '<strong>' + arrList[temp].heading + '</strong>' + '<br><br>' + '<strong>' + arrList[temp].nameFeedBack + '</strong>' + '<br><br>' + arrList[temp].improvePart;
})
