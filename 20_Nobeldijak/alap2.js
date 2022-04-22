function keres(){
    var keresszo=document.getElementById("szoveg").value ;
    console.log(keresszo);


    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y => {
        console.log(y)
        //var sorszam=0;
        var sz='';
        for (elem of y.prizes){
            //console.log(sorszam)
            //sorszam++;
            if (typeof elem.laureates==='undefined'){

            }
            else
            for (szemely of elem.laureates){
                if (typeof szemely.surname==='undefined'){

                }
                else
                if (szemely.firstname.toUpperCase().includes(keresszo.toUpperCase()) ||  szemely.surname.toUpperCase().includes(keresszo.toUpperCase())   ){
                    console.log(szemely.firstname+' '+szemely.surname);
                    sz+='<div>'
                    sz+='<br>'
                    sz+=elem.year+ ' ' +szemely.firstname+' '+szemely.surname
                    sz+='<br>'
                    sz+='</div>'
                }
            }
        }
        document.getElementById("kiiras").innerHTML=sz;

    });
    


}
