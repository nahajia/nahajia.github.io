
fetch("https://restcountries.eu/rest/v2/all")
.then(x => x.json())
.then(y => megjelenit(y));



function megjelenit(adatok){

    console.log(adatok);
    var sz='';
    for (elem of adatok){
        sz+='<div class="col-md-4 col-sm-12 keret">';
        sz+='<h4>'+elem.name+'</h4>';
        sz+='<img src="'+elem.flag+'" class="kiskep">';
        sz+='<p>Népesség: '+elem.population+'</p>';
        sz+='<p>Főváros: '+elem.capital+'</p>';
        

        sz+='</div>';
    }

    document.getElementById("talalat").innerHTML=sz;

}


