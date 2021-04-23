var orszag1='';
var orszag2='';

function adatlekerdezes(){
    orszag1=document.getElementById("orszag1").value ;
    orszag2=document.getElementById("orszag2").value ;

    if (orszag1=="" || orszag2=="")
        document.getElementById("eredmeny").innerHTML='<p style="color:red">Az ország kódját meg kell adni!</p>';
   else{


    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(x => x.json())
    .then(y => diagramrajzolas(y));
   }
}


function diagramrajzolas(adatok){

    console.log(adatok);
    var sz='';



    //orszag1 adatai

    sz+='<h2>'+adatok[orszag1].location+'</h2>';
    var xtengely1=[];
    var ytengely1=[];
    for (elem of adatok[orszag1].data){

        xtengely1.push(   elem.date);
        ytengely1.push(elem.total_deaths_per_million);
    }

    //orszag2 adatai
 
    sz+='<h2>'+adatok[orszag2].location+'</h2>';
    var xtengely2=[];
    var ytengely2=[];
    for (elem of adatok[orszag2].data){

        xtengely2.push(   elem.date);
        ytengely2.push(elem.total_deaths_per_million);
    }

    document.getElementById("eredmeny").innerHTML=sz;


    var trace1 = {
        x: xtengely1,
        y: ytengely1,
        type: 'scatter'
      };
      
      var trace2 = {
        x: xtengely2,
        y: ytengely2,
        type: 'scatter'
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('myDiv', data);

    



}

