document.addEventListener('DOMContentLoaded', function(){



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



let num  = "18:28";



// TEST 1
const test1 = {}
test1["summary"] = "↺ Junior Evening Standups";
test1["description"] = "Follow the attached zoom link for today's standups";
test1["link"] = "https://share.codesmith.io/NYjuniors"
test1["start"] = num;
test1["end"] = "18:55";

days[today][num] = test1;

// console.log(days[today])

const test2 = {}
test2["summary"] = "Codesmith Social: Welcome FTRI (Optional)";
test2["description"] = "Feel free to hangout on the Runway Zoom if you want to hang out with your cohortmates!";
test2["link"] = "https://share.codesmith.io/NYrunway"
test2["start"] = "20:00";
test2["end"] = "21:00";

days[today]["20:00"] = test2;



const sortedTimes = Object.keys(days[today]).sort();
// console.log(sortedTimes);
// console.log("doc")
//console.log(document)



function checkingTime () {
  setInterval(()=>{

    const todayDate = (new Date())
    const today = todayDate.toDateString();
    const time = todayDate.toTimeString().slice(0,5);

    // remove all keys that time has passed
    while(sortedTimes[0]<time) {
        sortedTimes.shift();
    }

    // next three times in schedule
    const threes = sortedTimes.slice(0,3);

    // const head = document.querySelector(".summary1");
    // console.log(head);  

    // first div
    document.querySelector(".summary1").innerHTML = days[today][threes[0]]["summary"];
    document.querySelector(".time1").innerHTML = days[today][threes[0]]["start"];

    // second div
    document.querySelector(".summary2").innerHTML = days[today][threes[1]]["summary"];
    document.querySelector(".time2").innerHTML = days[today][threes[1]]["start"];

    // third div
    document.querySelector(".summary3").innerHTML = days[today][threes[2]]["summary"];
    document.querySelector(".time3").innerHTML = days[today][threes[2]]["start"];
    

    //console.log(time);


  }, 1000)
}

checkingTime();

}).catch((err)=> {
  console.warn("Something went wrong", err);
})
//     document.querySelector("button").innerHTML = "IN CONTENT!!!!!"

//     chrome.tabs.query({}, tabs => {
//         tabs.forEach(tab => {
//         chrome.tabs.sendMessage(tab.id, "Hi", msgBack );
//       });
//     });
  
// function msgBack(response){
//     document.querySelector("button").innerHTML = response;
//     document.querySelector("summary1").innerHTML = response;
// }

})