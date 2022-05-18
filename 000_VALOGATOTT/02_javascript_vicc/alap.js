/*
console.log("Hello");
*/
//alert("Ez egy felugró ablak!")

var tomb=[
    "– Hogyan avatják fel a pezsgő gyárat?– Hozzá vágnak egy hajót",
    "– Szomszéd, használhatnám a fűnyíróját?– Persze, csak ne vigye ki a kertemből…",
    "– Hallod?! Ti hogyan szoktátok kezelni a konfliktusokat?– Pofon egyszerűen. "
];

kattintas()


function kattintas(){
    var veletlen=Math.floor(Math.random() * tomb.length);
    document.getElementById("vicchelye").innerHTML=tomb[veletlen];
    console.log(tomb[veletlen]);

    document.getElementById("kep").src=veletlen+".jpg";
}




