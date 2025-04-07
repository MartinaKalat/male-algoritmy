const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

//Ukol 1
document.body.innerHTML += `<h4>Ukol cislo 1</h4>`
numbers.forEach((element) => {
    document.body.innerHTML += `<p>${element}</p>`;
    //console.log(element)
})
document.body.innerHTML += `<hr> <br> <h4>Ukol cislo 2</h4>`
// Ukol 2
numbers.forEach((element) => {
 const druhaMocnina =  Math.pow(element, 2);
 document.body.innerHTML += `<p>${druhaMocnina}</p>`;
});
document.body.innerHTML += `<hr> <br> <h4>Ukol cislo 3</h4>`
// ukol 3
numbers.forEach((element) => {
    if (element < 0) {
        document.body.innerHTML += `<p>${element}</p>`;
    }
})
document.body.innerHTML += `<hr> <br> <h4>Ukol cislo 4</h4>`
//ukol 4
numbers.forEach((element) => {
const absolutniHodnota = Math.abs(element);
document.body.innerHTML += `<p>${absolutniHodnota}</p>`;
})
document.body.innerHTML += `<hr> <br> <h4>Ukol cislo 5</h4>`

//ukol 5
numbers.forEach((element) => {
if (element % 2 === 0) {
    document.body.innerHTML += `<p>${element}</p>`;
}
})
document.body.innerHTML += `<hr> <br> <h4>Ukol cislo 6</h4>`

// ukol 6
numbers.forEach((element) => {
    const absolutniHodnota = Math.abs(element);
    if (absolutniHodnota % 3 === 0) {
        document.body.innerHTML += `<p>${element}</p>`;
    }
})
document.body.innerHTML += `<hr> <h4>Ukol cislo 7</h4>`
//ukol 7
numbers.forEach((element) => {
    const vzdalenost = element - 5;
    const absDistance = Math.abs(vzdalenost);
    document.body.innerHTML += `<p>${absDistance}</p>`;
})

document.body.innerHTML += `<hr> <h4>Ukol cislo 8</h4>`
//ukol 8
numbers.forEach((element) => {
    const vzdalenost = element - 5;
    const absDistance = Math.abs(vzdalenost);
    const druhaMocninaAbsDistance = Math.pow(absDistance, 2)
    document.body.innerHTML += `<p>${druhaMocninaAbsDistance}</p>`;
})
document.body.innerHTML += `<hr> <h4>Ukol cislo 9</h4>`

let soucet = 0

numbers.forEach(element => {
    if (element < 0) {
       soucet++
    }
});
document.body.innerHTML += `${soucet}`

document.body.innerHTML += `<hr> <h4>Ukol cislo 10</h4>`
//ukol 10
let suma = 0
numbers.forEach(element => {
    suma+= element
})
document.body.innerHTML += `${suma}`

document.body.innerHTML += `<hr> <h4>Ukol cislo 11</h4>`
//ukol 11

let allTogether = 0
numbers.forEach(element => {
allTogether += element
})
const average = allTogether / numbers.length
document.body.innerHTML += `${average}`

document.body.innerHTML += `<hr> <h4>Ukol cislo 12</h4>`
//ukol 12
let kladne = 0
numbers.forEach(element => {
    if (element > 0) {
        kladne += element
    }
})
document.body.innerHTML += `${kladne}`