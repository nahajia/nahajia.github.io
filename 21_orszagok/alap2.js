var adatok0=[];


fetch("https://restcountries.eu/rest/v2/all")
.then(x => x.json())
.then(y => megjelenit(y));



function megjelenit(adatok){

    console.log(adatok);
    adatok0=adatok;
    var sz='';
    var db=0;
    for (elem of adatok){
      
        sz+='<option value="'+db+'"   >'+elem.name+'</option>';
        db++;

       
    }

    document.getElementById("lenyilo").innerHTML=sz;

}

function valtoztat(){
    var orszagsorszam=document.getElementById("lenyilo").value ;
    var sz='';
    
    sz+='<h4>'+adatok0[orszagsorszam].name+'</h4>';
        sz+='<img src="'+adatok0[orszagsorszam].flag+'" class="nagykep">';
        sz+='<hr>';
        sz+='<p>Népesség: '+adatok0[orszagsorszam].population+' fő </p>';
        sz+='<p>Főváros: '+adatok0[orszagsorszam].capital+'</p>';
    document.getElementById("eredmeny").innerHTML=sz;
}
