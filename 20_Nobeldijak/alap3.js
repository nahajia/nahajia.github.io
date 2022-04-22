const d = new Date();
let year = d.getFullYear();
var sz=''
for (let i = year; i >  1900; i--){
     sz+='<option value="'+i+'">'+i+'</option>'
}
document.getElementById("lenyilo").innerHTML=sz


function evkiiras(){
     var kivalasztottev=document.getElementById("lenyilo").value 
     console.log(kivalasztottev)


     fetch("https://api.nobelprize.org/v1/prize.json")
     .then(x => x.json())
     .then(y => {
          console.log(y)
          var sz=""
          sz+='<ul>'
          for (elem of y.prizes){
              
               if (elem.year==kivalasztottev){
                    sz+='<li>'
                   
                    sz+='<button style="margin:20px" class="btn btn-primary"  data-bs-toggle="collapse" data-bs-target="#demo'+elem.category+'">Részletek</button>'
                    sz+=elem.category;
                    sz+='<div id="demo'+elem.category+'" class="collapse">'
                    for (szemely of elem.laureates)
                         sz+=szemely.firstname+" "+szemely.surname+"<br>"
                    sz+='</div>'
                    sz+='</li>'
               }
             
              
          }
          sz+='</ul>'
          document.getElementById("kiiras").innerHTML=sz
     });




}



