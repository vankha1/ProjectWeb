const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "WEB DEVELOPER",
      img:
        "Starter-Slider/person-1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
       bgc: "hsl(205deg 78% 60%)"
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "WEB DESIGNER",
      img:
        "Starter-Slider/person-2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        bgc: "#FFFFFF"
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "INTERN",
      img:
        "Starter-Slider/person-3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        bgc: "#49a6E9"
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "THE BOSS",
      img:
        "Starter-Slider/person-4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        bgc: "hsl(205deg 78% 60%)"
    },
];

const img = document.getElementById("ava-img");
const namePerson = document.querySelector('.name');
const position = document.querySelector('.position');
const info = document.querySelector('.info');
const changeBackground = document.querySelector('#container .review');

const preBtn = document.querySelector('.preBtn');
const nextBtn = document.querySelector('.nextBtn');
const changeInfoBtn = document.querySelector('.changeInfoBtn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    img.src = item.img;
    namePerson.textContent = item.name;
    position.textContent = item.job;
    info.textContent = item.text;
    changeBackground.style.background = item.bgc;
});

function showPerson (person) {
    const item = reviews[person];
    img.src = item.img;
    namePerson.textContent = item.name;
    position.textContent = item.job;
    info.textContent = item.text;
    changeBackground.style.background = item.bgc;
};

nextBtn.addEventListener('click', () => {

    currentItem++;
    if (currentItem >= reviews.length){
        currentItem = 0;
    }
    showPerson(currentItem);
});

preBtn.addEventListener('click', () => {

    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

changeInfoBtn.addEventListener('click', () => {

    
    const numRandom = Math.floor(Math.random() * reviews.length);
    showPerson(numRandom);
});