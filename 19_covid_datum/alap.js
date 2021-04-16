
//szam -parameter 0 vagy 1 lesz
function kereses(szam){

    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(x => x.json())
    .then(y => megjelenit(y,szam));



}



function megjelenit(adatok,szam){

    console.log(adatok);

    var orszag=document.getElementById("orszag_"+szam).value ;
    var datum=document.getElementById("datum").value ;

    var sz='';
    sz+='<h2>'+adatok[orszag].location+'</h2>';

    for (elem of adatok[orszag].data){
         if  ( elem.date==datum)
         {
             sz+='<p>Összes eset millió főre: '+elem.total_cases_per_million+'</p>';
             sz+='<p>Új eset millió főre: '+elem.new_cases_per_million+'</p>';
             sz+='<p>Összes halálozás millió főre: '+elem.total_deaths_per_million+'</p>';
             sz+='<p>Új halálozás millió főre: '+elem.new_deaths_per_million+'</p>';

             
             
             
         }
    }
    
    
    
    document.getElementById("talalat_"+szam).innerHTML=sz;
 

}
