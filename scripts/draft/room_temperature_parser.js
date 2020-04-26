// var request = require('request');
// const iconv = require('iconv-lite');

// var URL = 'http://meteocenter.net/USTR_current.htm';

// request(URL, function (err, res, body) {
//     if (err) throw err;
//     console.log(iconv.decode(Buffer.from(body), "win1251"));
// });
// const fs = require("fs");

const iconv = require('iconv-lite');
const http = require("http");
const fs = require("fs");
http.get("http://sensors.mwlabs.ru/view/ABE679970903", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("210bat.txt", pre);
  });
});
http.get("http://sensors.mwlabs.ru/view/43E079971203", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("210wall.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/0A7779970903", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("316bat.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/94CC79971203", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("316wall.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/7D0679971403", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("412bat.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/A2BF79971203", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("412wall.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/53C779971203", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("420bat.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/6AE379971203", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((err, pre) => {
    if (err) throw err;
    fs.writeFileSync("420wall.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/BDF579970903", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((pre) => {
    if (err) throw err;
    fs.writeFileSync("sfbat.txt", pre);
  });
});

http.get("http://sensors.mwlabs.ru/view/F51A79970903", (res) => {
  res.pipe(iconv.decodeStream("win1251")).collect((pre) => {
    if (err) throw err;
    fs.writeFileSync("sfwall.txt", pre);
  });
});
// let checkbox = $("#csv").prop('checked', true);

// let day = $("[name='Date\[0\]']");
// let month = $("[name='Date\[1\]']");
// let year = $("[name='Date\[2\]']");
// let today = new Date();
// let startDate = new Date(2020, 1, 19);
// const firstYear = 2007;

// let button = $("[type = submit]")[1];
// let resultText = [];
// let res = "";
// let count = 0;
// for(var optYear, i = startDate.getFullYear()-firstYear; optYear = year.options[i]; i++)
// {
//     year.selectedIndex = i;
//     for(var optMonth, j = startDate.getMonth()+1; optMonth = month.options[j]; j++)
//     {
//         if(j > today.getMonth()+1 && firstYear + i == today.getFullYear()) break;
//         month.selectedIndex = j;
        
//         if(j != startDate.getMonth()+1 || firstYear + i != startDate.getFullYear()) 
//             startDate.setDate(1);
//         for(var optDay, k = startDate.getDate(); optDay = day.options[k]; k+=4)
//         {
//             if(k > today.getDate() && j == today.getMonth()+1 && firstYear + i == today.getFullYear()) break;
//             day.selectedIndex = k;
            
//             var str = day.value + month.value + year.value;
//             console.log(j +" "+ (startDate.getMonth()+1) + " "+(firstYear + i)+" "+ startDate.getFullYear() + " "+ str);

//             //button.click();
//             clickButton(); 
//             try{
//                 // $("pre")[0].innerText.split('\n').forEach(function(item, index, array){
//                 // if(item != "" && index != 0 && resultText.indexOf(item) < 0) {
//                 //     resultText.push(item);
//                 //     window.name += item;
//                 // }
//                 // });  
//                 // localStorage.setItem(count, $("pre")[0].innerText);  
//                 fs.writeFileSync("res"+str+".txt",$("pre")[0].innerText);
//             }    
//             catch(e){
//             }    
//         }
//     }
// }
// async function clickButton(){
//     let button;
//     if(document.querySelectorAll("[type = submit]").length==2)
//     button = document.querySelectorAll("[type = submit]")[1];
//     else button = document.querySelectorAll("[type = submit]")[0];
// }
