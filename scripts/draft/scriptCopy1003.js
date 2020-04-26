
document.querySelector("[name=CSV]").checked = 1;

let day = document.querySelector("[name=\"Date\[0\]\"]");
let month = document.querySelector("[name=\"Date\[1\]\"]");
let year = document.querySelector("[name=\"Date\[2\]\"]");
let today = new Date();
let startDate = new Date(2020, 1, 19);
const firstYear = 2007;

let button = document.querySelectorAll("[type = submit]")[1];
let resultText = [];
let res = "";
let count = 0;
for(var optYear, i = startDate.getFullYear()-firstYear; optYear = year.options[i]; i++)
{
    year.selectedIndex = i;
    for(var optMonth, j = startDate.getMonth()+1; optMonth = month.options[j]; j++)
    {
        if(j > today.getMonth()+1 && firstYear + i == today.getFullYear()) break;
        month.selectedIndex = j;
        
        if(j != startDate.getMonth()+1 || firstYear + i != startDate.getFullYear()) 
            startDate.setDate(1);
        for(var optDay, k = startDate.getDate(); optDay = day.options[k]; k+=4)
        {
            if(k > today.getDate() && j == today.getMonth()+1 && firstYear + i == today.getFullYear()) break;
            day.selectedIndex = k;
            
            var str = day.value + month.value + year.value;
            console.log(j +" "+ (startDate.getMonth()+1) + " "+(firstYear + i)+" "+ startDate.getFullYear() + " "+ str);

            //button.click();
            clickButton(); 
            try{
                document.getElementsByTagName("pre")[0].innerText.split('\n').forEach(function(item, index, array){
                if(item != "" && index != 0 && resultText.indexOf(item) < 0) {
                    resultText.push(item);
                    window.name += item;
                }
                });  
                localStorage.setItem(count, document.getElementsByTagName("pre")[0].innerText);               
                count++;
            }    
            catch(e){

            }    
        }
    }
}

async function clickButton(){
    let button
    if(document.querySelectorAll("[type = submit]").length==2)
    button = document.querySelectorAll("[type = submit]")[1];
    else button = document.querySelectorAll("[type = submit]")[0];
}
let a = document.createElement('a');
a.href = "data:application/octet-stream,"+encodeURIComponent(res);
a.download = 'abc.txt';
a.click();

// resultText.forEach(function(item, index, array){
//     console.log(item);
// })


// function changeNames() {
//     submits = document.querySelectorAll("[name=submit]");
//     for(let index = 0; index < submits.length; index++) {
//         submits[index].name = "submit" + (index+1);        
//     }   
// } 

// document.location = "http://meteocenter.net/28367_fact.htm";
// document.open("http://meteocenter.net/28367_fact.htm");



// let a = document.createElement('a');
// a.href = "data:application/octet-stream,"+encodeURIComponent("My DfefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeA");
// a.download = 'abc.txt';
// a.click();