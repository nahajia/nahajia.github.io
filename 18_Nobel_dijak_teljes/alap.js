//lenyilo select feltoltese
var lenyilo=document.getElementById("lenyilo");
var d = new Date();
var ev = d.getFullYear();
console.log(ev);

for (let i=ev;i>=1901;i--){
var option=document.createElement("option");
option.innerHTML=i;
option.value=i;
lenyilo.appendChild(option);
}

lenyilo.addEventListener("change",keres);

function keres(){
    console.log("Változtatás történt");
    console.log(lenyilo.value);

    var kivalasztottev=lenyilo.value;

    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(adatok => megjelenit(adatok,kivalasztottev));

}



function megjelenit(adatok,kivalasztottev){

    var sz='<table  class="table table-dark"   >';
    //sz+=adatok[0].year+" : "+adatok[0].category;

    for (elem of adatok.prizes){
        if (elem.year==kivalasztottev){
            sz+='<tr>';
            sz+='<td colspan="2" style="text-align:center;background-color:grey">';
            sz+=elem.category;
            sz+='</td>';
            sz+='</tr>';
            for (ember of elem.laureates)
            {
                sz+='<tr>';
                sz+='<td>';
                sz+=ember.firstname;
                sz+='</td>';
                sz+='<td>';
                sz+=ember.surname;
                sz+='</td>';
                sz+='</tr>'; 
            }
        }
    }
    sz+='</table>';


    
    
    
    document.getElementById("talalat").innerHTML=sz;


}

