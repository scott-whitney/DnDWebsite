$(document).ready(function(){

    var statArray = ["Strength", "Dexterity", "Constitution", "Intellect", "Wisdom", "Charisma"]
    $("#statBtns").on("click", function(event){
        event.preventDefault();
        var stats = [];
        if(event.target.matches("button")){
            for (i = 0; i < 4; i++){
                var diceRoll = Math.floor(Math.random() * 6 + 1);
                stats.push(diceRoll);
                stats.sort();
                console.log(stats);
               }
               stats.splice(0,1);
               var rolls = event.target.id
               console.log(stats);
               console.log(rolls);
               $(`#${rolls}`).text(statArray[rolls] + " " + "Dice Rolls:" + " " + stats);
               $(`#0${rolls}`).text(stats);
        }

    });
    







});
