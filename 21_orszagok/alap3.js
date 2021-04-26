var adatok0=[];
var veletlen=-1;
fetch("https://restcountries.eu/rest/v2/all")
.then(x => x.json())
.then(y => tarol(y));

function tarol(adatok){
    console.log(adatok);
    adatok0=adatok;
}

function sorsol(){
    veletlen=Math.floor(Math.random() * adatok0.length);
    
    var sz='<h4>Főváros: '+adatok0[veletlen].capital+'</h4>'; 
    sz+='<input type="text" id="bevitel" class="form-control">';
    sz+='<button class="btn btn-primary"  id="ellenorzes"  >Ellenőrzés</button>';
    
    document.getElementById("fovaros").innerHTML=sz;

    document.getElementById("ellenorzes").addEventListener("click",ellenoriz);


}


function ellenoriz(){
    //console.log("hello");
    var orszagnev=document.getElementById("bevitel").value;
    if (adatok0[veletlen].name==orszagnev)
        document.getElementById("visszajelzes").innerHTML='<h4>Gratulálok, a helyes megoldás:'+adatok0[veletlen].name+'</h4>';
    else
        document.getElementById("visszajelzes").innerHTML='<h4>Nem jó, a helyes megoldás:'+adatok0[veletlen].name+'</h4>';
        
}
















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
