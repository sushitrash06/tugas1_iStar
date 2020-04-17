let peoples = [{
        nama: "Azka",
        gender: "Female"
    },
    {
        name: "Dhio",
        gender: "Male"
    },
    {
        name: "Ammar",
        gender: "Male"
    }
];


let males = peoples.filter(people => {
    return people.gender === "Male";
});

console.log(...males);