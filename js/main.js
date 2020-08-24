function getServerData(url){
    let fetchOptions={
        method:"GET",
        mode:"cors",
        cache:"no-cache"
    };

    return fetch(url,fetchOptions).then(
        response=>response.json(),
        err=>console.error(err)

    )/*.then(
        data=>console.log(data)
        
    );*/
}


document.querySelector("#getDataBtn").addEventListener("click",function(){
    getServerData("http://localhost:3000/posts").then(
        data=>fillDataTable(data,"userTable")
    );
});

function fillDataTable(data,tableID){
    let table=document.querySelector(`#${tableID}`);
    if (!table) {
        console.error("Hiba");
        return;
    }
    let tBody=table.querySelector("tbody");
    for (let row of data) {
        console.log(row);


        let tr=createAnyElement("tr");
        for(let k in row){
            let td=createAnyElement("td");
            td.innerHTML=row[k];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);

    }
    

}


function createAnyElement(name,attributes){
    let element=document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k,attributes[k]);
    }
    return element;
}



/*
getServerData("http://localhost:3000/posts").then(
    data=>console.log(data)
)
*/