// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const personImg = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
let reviewsIndex = 0;

function changeAttributes(reviewsIndex) {
    const item = reviews[reviewsIndex];
    personImg.attributes.src.value = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//set initial review
changeAttributes(reviewsIndex);

//select selctor buttons
const buttons = document.querySelectorAll("button");
//set up event listeners for the select buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        //left button logic

        if (e.target.classList.contains("fa-chevron-left")) {
            if (reviewsIndex === 0) {
                reviewsIndex = reviews.length - 1;
                changeAttributes(reviewsIndex);
            } else {
                reviewsIndex--;
                changeAttributes(reviewsIndex);
            }
        }
        //right button logic
        if (e.target.classList.contains("fa-chevron-right")) {
            if (reviewsIndex === reviews.length - 1) {
                reviewsIndex = 0;
                changeAttributes(reviewsIndex);
            } else {
                reviewsIndex++;
                changeAttributes(reviewsIndex);
            }
        }
        if (e.target.classList.contains("random-btn")) {
            const randomReviewer = Math.floor(Math.random() * reviews.length);
            console.log(randomReviewer);
            changeAttributes(randomReviewer);
        }
    });
});
