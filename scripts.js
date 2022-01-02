function dice4() {
    var dice4 = "4 dice";
    var dice4Value;

    dice4Value = (Math.floor(Math.random() * 4));

    console.log (("Your roll of ")+dice4+(": ")+dice4Value);
    
    document.getElementById("Dice4").textContent=dice4Value;
  }  