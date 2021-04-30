
function nevnap_datum(){

    var datum=document.getElementById("bevitel1").value ;

    fetch("https://api.nevnapok.eu/nap/"+datum)
    .then(x => x.json())
    .then(y => megjelenit1(y,datum));
    
}


function megjelenit1(adatok,datum){
    console.log(adatok[datum]);
    var sz='';
    for (elem of adatok[datum]){
        sz+='<p class="arnyekolt">'+elem+'</p>';
    }
    document.getElementById("nevnap1").innerHTML=sz;
}




