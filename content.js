

const data = require('./data.json');

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
days[today]["07:35"] = "HELLO I AM THE OBJECT!";

function checkingTime () {
  setInterval(()=>{

    const todayDate = (new Date())
    const today = todayDate.toDateString();
    const time = todayDate.toTimeString().slice(0,5);

    //console.log(time);

    if(days[today][time]){
    // console.log("hooray!");
    // console.log(days[today][time]);
    let begin = document.getElementById('begin');
    let newChild = document.createElement('p');
    newChild.innerHTML = "IS THIS WORKING??"
    begin.appendChild(newChild);
    alert("IT IS WORKING!")
    }
  }, 1000)
}

checkingTime();
