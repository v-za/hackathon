
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var req = new XMLHttpRequest();
// req.onreadystatechange = function(){
//     //process_webgl_data(this.responseText);
//     if (req.readyState === 4 && req.status === 200){
//       const data = req.responseText;
//     console.log(data)
//     console.log("hi")
//     }
    
// };
// req.open('GET', '/data.json');
// req.send();
// //req.onreadystatechange();

//const url = runtime.getURL("/data.json");

fetch('https://raw.githubusercontent.com/v-za/hackathon/main/data.json').then((response)=> {
  return response.json();
}).then((data)=> {
  //console.log(obj)
  const days = {};

data["items"].forEach( event => {

  const info = {};
  info["summary"] = event["summary"]
  info["description"] = event["description"]
  info["link"] = event["location"];
  info["start"] = (new Date(event["start"]["dateTime"])).toTimeString().slice(0,5);
  info["end"] = (new Date(event["end"]["dateTime"])).toTimeString().slice(0,5);
  //console.log(info["start"])
  const date = new Date(event["start"]["dateTime"])
  const day = date.toDateString();
  
  if(!days[day]) {
    days[day] = {}
  }
  days[day][info["start"]] = info;
 
  // if(!days[day]) days[day] = [info];
  // else days[day].push(info);

})

// console.log("Mon Apr 12 2021")
// console.log(days["Mon Apr 12 2021"]);



const todayDay = (new Date())
const today = todayDay.toDateString();
const time = todayDay.toTimeString().slice(0,5);
console.log(time)
console.log(today)
//console.log(days[today])

// TESTING EVENTS


// TEST 1
const test1 = {}
test1["summary"] = "↺ Junior Evening Standups";
test1["description"] = "Follow the attached zoom link for today's standups";
test1["link"] = "https://share.codesmith.io/NYjuniors"
test1["start"] = "13:20";
test1["end"] = "13:12";

days[today]["13:22"] = test1;

console.log(days[today])

const sortedTimes = Object.keys(days[today]).sort();
console.log(sortedTimes);
console.log("doc")
//console.log(document)


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   // do something with msgObj
//   sendResponse("HELLLOOO")
// });
function checkingTime () {
  setInterval(()=>{

    const todayDate = (new Date())
    const today = todayDate.toDateString();
    const time = todayDate.toTimeString().slice(0,5);

    // remove all keys that time has passed
    if(sortedTimes[0]<time) sortedTimes.shift();

    // next three times in schedule
    const threes = sortedTimes.slice(0,3);


    // const head = document.querySelector(".summary1");
    // console.log(head);  

    // first div
    // document.querySelector(".summary1").innerHTML = days[today][threes[0]]["summary"];
    // document.querySelector(".time1").innerHTML = days[today][threes[0]]["start"];
    

    //console.log(time);


    if(days[today][time]){
    // console.log("hooray!");
    // console.log(days[today][time]);
    // let begin = document.getElementById('start');
    // let newChild = document.createElement('p');
    // newChild.innerHTML = "IS THIS WORKING??"
    // begin.appendChild(newChild);
    
    const evnt = days[today][time];
    const newLine = "\n"

    const message = evnt["summary"].toUpperCase() + "\n" + "\n" + evnt["description"] + "\n" + evnt["start"] +"-"+evnt["end"] + "\n" +"\n" + "Clicl Ok to go to link: " + evnt["link"];
    console.log(message)
    if (confirm(message)) {
        open(evnt["link"], "Enjoy!");
    }


    
    }
  }, 35000)
}

checkingTime();

}).catch((err)=> {
  console.warn("Something went wrong", err);
})



//console.log(data)

// const days = {};

// data["items"].forEach( event => {

//   const info = {};
//   info["summary"] = event["summary"]
//   info["description"] = event["description"]
//   info["link"] = event["location"];
//   info["start"] = (new Date(event["start"]["dateTime"])).toTimeString().slice(0,5);
//   info["end"] = (new Date(event["end"]["dateTime"])).toTimeString().slice(0,5);
//   //console.log(info["start"])
//   const date = new Date(event["start"]["dateTime"])
//   const day = date.toDateString();
  
//   if(!days[day]) {
//     days[day] = {}
//   }
//   days[day][info["start"]] = info;
 
//   // if(!days[day]) days[day] = [info];
//   // else days[day].push(info);

// })

// // console.log("Mon Apr 12 2021")
// // console.log(days["Mon Apr 12 2021"]);




// const todayDay = (new Date())
// const today = todayDay.toDateString();
// const time = todayDay.toTimeString().slice(0,5);
// console.log(time)
// console.log(today)
// //console.log(days[today])
// days[today]["07:35"] = "HELLO I AM THE OBJECT!";

// function checkingTime () {
//   setInterval(()=>{

//     const todayDate = (new Date())
//     const today = todayDate.toDateString();
//     const time = todayDate.toTimeString().slice(0,5);

//     //console.log(time);

//     if(days[today][time]){
//     // console.log("hooray!");
//     // console.log(days[today][time]);
//     let begin = document.getElementById('start');
//     let newChild = document.createElement('p');
//     newChild.innerHTML = "IS THIS WORKING??"
//     start.appendChild(newChild);
//     alert("IT IS WORKING!")
//     }
//   }, 1000)
// }

// checkingTime();
