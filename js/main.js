document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json();
    console.log(data)
    makeChoice(data.choice);
}

function makeChoice(choice){
    if(choice=== 1) document.querySelector("#result").textContent = document.querySelector("#choiceOne").value;
    else if (choice=== 2) document.querySelector("#result").textContent = document.querySelector("#choiceTwo").value;
    else document.querySelector("#result").textContent = document.querySelector("#choiceThree").value;
}