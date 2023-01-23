var tomb=[
    "Józsi két ebédet evett, Zsolti egyet sem, tehát ettek egy-egy ebédet átlagban.",
    "Szavazz a liberálisokra - különben lelőjük a kutyádat.",
    "Megy a nyuszika az erdőbe és fotel.",
    "Tegnap betörtek Stahl Judithoz aki ekkor pisztolyt rántott.",
    "Brit tudósok bebizonyították hogy 10-6 ember az 4."
]
var kepek=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png"
]

vicc()

function vicc(){
//alert("Hello")
var veletlen=Math.floor(Math.random() * tomb.length);
console.log(veletlen)
document.getElementById("vicchelye").innerHTML=tomb[veletlen]
document.getElementById("vicckepe").src=kepek[veletlen]
}

