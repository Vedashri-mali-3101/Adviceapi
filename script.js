//advice api
let count = 0;
 async function getAdvice(){
    const response=await fetch('https://api.adviceslip.com/advice');
 
 const adviceObject= await response.json();
 //count++;
document.getElementById('advice').innerText=adviceObject.slip.advice;

adviceE1=document.getElementById('advice');

adviceE1.classList.add("result");




console.log(adviceObject)
console.log(count) ;
 count++;
document.getElementById('count').innerHTML=` <h4>You have read <b>${count}</b> of pieces of advice today</h4> `;

};



//json javascript object notatoon   -- json--js objet



//stringfy  js--json object 
//jokeapi sv4
