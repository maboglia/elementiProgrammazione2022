const luoghi = [
    {foto: 'img/mole_antonelliana.jpg' , title: 'Mole Antonelliana'},
    {foto : 'img/P.zaCarignanoo.jpg' , title: 'Piazza Carignao'},
    {foto: 'img/Piazza_castello.jpg', title: 'Piazza Castello'},
    {foto: 'img/piazza_san_carlo.jpg' , title: 'Piazza San Carlo'},
    {foto: 'img/Piazza_vittorio.jpg' , title: 'Piazza Vittorio'},
];

// for (let i = 0; i < luoghi.length; i++) {
//     const luogo = luoghi[i];
//     console.log(luogo)
// }

// for (const luogo of luoghi) {
//     console.log(luogo)
// }

luoghi.forEach((luogo) => console.log(luogo.title)) //arrow function - lambda expressionclea