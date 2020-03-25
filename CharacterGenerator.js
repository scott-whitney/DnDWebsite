$(document).ready(function(){

    personalityArray = ['Quirky', 'Serious', 'Silly', 'Freaky', 'Scared', 'Cautious', 'Brave', 'Slow', 'Persistent', 'Spineless', 'Angry', 'Loving', 'Trustworthy']
    backgroundArray = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin'];
    occupationArray = ['Bartender', 'Scribe', 'Blacksmith', 'Alchemist', 'Witch Doctor', 'Teacher', 'Carpenter', 'School Dean', 'Miner', 'Overseer', 'Manager', 'Chariot Driver', 'Farmhand', 'Farmer', 'Jester', 'King', 'Prince', 'Seeker', 'Librarian', 'Village Guard', 'Neihborhood Watch Leader', 'Baker', 'Pastry Chef', 'Painter']
    classArray = ['Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard'];
    raceInfoArray = [
    {
    r:'Dragonborn',
    d:'https://www.dndbeyond.com/races/dragonborn',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png'
     },
     {
    r:'Dwarf',
    d:'https://www.dndbeyond.com/races/dwarf',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png'
     },
     {
    r:'Elf',
    d:'https://www.dndbeyond.com/races/elf',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png'
     },
     {
    r:'Gnome',
    d:'https://www.dndbeyond.com/races/gnome',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png'
     },
     {
    r:'Half-Elf',
    d:'https://www.dndbeyond.com/races/half-elf',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png'
     },
     {
    r:'Halfling',
    d:'https://www.dndbeyond.com/races/halfling',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png'   
     },
     {
    r:'Half-Orc',
    d:'https://www.dndbeyond.com/races/half-orc',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png'
     },
     {
    r:'Human',
    d:'https://www.dndbeyond.com/races/human',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png'
     },
     {
    r:'Tiefling',
    d:'https://www.dndbeyond.com/races/tiefling',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png'
     }
    ]






    $("#GenerateBtn").on('click', generateChar);

    
    
    
    
    
    function generateChar() {
        var diceRollClass = Math.floor(Math.random() * classArray.length);
        var diceRollRace = Math.floor(Math.random() * raceInfoArray.length);
        var diceRollLvl = Math.floor(Math.random() * 20) + 1;
        var occupationChoice = Math.floor(Math.random() * occupationArray.length);
        var backgroundChoice = Math.floor(Math.random() * backgroundArray.length);
        var personalityChoice = Math.floor(Math.random() * personalityArray.length);

        pickedPersonality = personalityArray[personalityChoice];
        pickedOccupation = occupationArray[occupationChoice];
        pickedClass = classArray[diceRollClass];
        pickedRace = raceInfoArray[diceRollRace].r;
        pickedRaceImg = raceInfoArray[diceRollRace].i;
        pickedRaceLink = raceInfoArray[diceRollRace].d;
        pickedBackground = backgroundArray[backgroundChoice];

        console.log(pickedBackground);

        $('#title').text(pickedRace + " " + pickedClass);
        $('#level').text('level:' + " " + diceRollLvl);
        $('#mainimg').attr('src', pickedRaceImg);
       var $newBtn = $('<a>').attr('href', pickedRaceLink).text('Click me!');
        $('#level').append($newBtn);
        $('#Occupation').text('Occupation:' + " " + pickedOccupation);
        $('#Background').text('Background:' + " " + pickedBackground);
        $('#Personality').text('Personality:' + ' ' + pickedPersonality);
    }





});


