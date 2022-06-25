const people = [
    {
        id: 1,
        img: "./img/person-1.jpg",
        name: "anna johnson",
        title: "web designer",
        summary:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 2,
        img: "./img/person-2.jpg",
        name: "bill anderson",
        title: "the boss",
        summary:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
    {
        id: 3,
        img: "./img/person-3.jpg",
        name: "peter jones",
        title: "intern",
        summary:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        img: "./img/person-4.jpg",
        name: "susan smith",
        title: "web developer",
        summary:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar.",
    },
];

let person = 0;

const btns = document.querySelectorAll(".btn");
const imgEL = document.querySelector(".profile");
const nameEL = document.querySelector(".name");
const titleEL = document.querySelector(".job-title");
const descrEL = document.querySelector(".description");

function showPerson() {
    const currentPerson = people[person];
    imgEL.src = currentPerson.img;
    nameEL.textContent = currentPerson.name;
    titleEL.textContent = currentPerson.title;
    descrEL.textContent = currentPerson.summary;
}

function showRandomPerson() {
    person = Math.floor(Math.random() * people.length);
    showPerson();
}

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("btn-left")) {
            person--;
            if (person < 0) {
                person = people.length - 1;
            }
            showPerson();
        }
        if (e.currentTarget.classList.contains("btn-right")) {
            person++;
            if (person > people.length - 1) {
                person = 0;
            }
            showPerson();
        }
        if (e.currentTarget.classList.contains("btn-surprise")) {
            showRandomPerson();
        }
    });
});
