function dice4() {
    var dice4 = "4 dice";
    var dice4Value;

    dice4Value = (Math.ceil(Math.random() * 4));

    console.log (("Your roll of ")+dice4+(": ")+dice4Value);
    
    document.getElementById("Dice4").textContent=dice4Value;
  }  

function dice8() {
    var dice8 = "8 dice";
    var dice8Value;

    dice8Value = (Math.ceil(Math.random() * 8));

    console.log (("Your roll of ")+dice8+(": ")+dice8Value);
    
    document.getElementById("Dice8").textContent=dice8Value;
  } 