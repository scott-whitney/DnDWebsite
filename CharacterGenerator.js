$(document).ready(function(){

    personalityArray = ['Quirky', 'Serious', 'Silly', 'Freaky', 'Scared', 'Cautious', 'Brave', 'Slow', 'Persistent', 'Spineless', 'Angry', 'Loving', 'Trustworthy', 'Abrasive', 'Absent-Minded', 'Brawler', 'Detached', 'Dishonest', 'Easygoing', 'Farsighted', 'Focused', 'Hard Of Hearing', 'Hardy', 'Honest', 'Illiterate', 'Inattentive', 'Polite', 'Quick', 'Relentless', 'Slow', 'Specialized', 'Suspicious', 'Uncivilized']
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
     },
     {
    r:'Aarakocra',
    d:'https://www.dndbeyond.com/races/aarakocra',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/622/420/618/636286750209394240.png'
     },
     {
    r:'Genasi' ,
    d:'https://www.dndbeyond.com/races/genasi',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/630/420/618/636286776277352504.png' 
     },
     {
    r:'Goliath',
    d:'https://www.dndbeyond.com/races/goliath',
    i:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/620/420/618/636286749289682134.png'  
     }
    ]
    traitsFlawsArray = [
    {
    f:"Amateur's Pride",
    d:"If you can make fire with a couple of sticks, I can pick locks with sticks." + "-Amateur Rogue speaking to a Ranger."
    },
    {
    f:"Anxious Helper",
    d:"Oh dear, oh dear, oh dear what do I do what do I dowhatdoIdo!?"
    },
    {
    f:"Attention Defecit Disorder",
    d:"You have a hard time focusing on a subject, often finding yourself off track; especially when there is a shiny object involved."
    },
    {
    f:"Chivalrous",
    d:"	Whether due to a vow or natural inclination, you do not fight women."
    },
    {
    f:"Clumsiness",
    d:"You have terrible coordination between your eyes and limbs."
    },
    {
    f:"Cold-Blooded",
    d:"You were raised in the arctic and cannot tolerate heat."
    },
    {
    f:"Combat Anxiety",
    d:"You can't handle the pressure of combat."
    },
    {
    f:"Command Word",
    d:"You have a secret command word, known to yourself and your creator, that forces you do the bidding of whomever speaks it."
    },
    {
    f:"Corruptible",
    d:"The character is easily led astray, even to the potentially fatal detriment of other party members."  
    },
    {
    f:"Coward",
    d:"You are susceptile to fear."
    },
    {
    f:"Curse Collector",
    d:"You just think they're neat."
    },
    {
    f:"Deaf",
    d:"You cannot hear."
    },
    {
    f:"Deep Scar",
    d:"You have suffered a deep wound somewhere on your body that prohibits you from partaking in greatly strenuous activities."
    },
    {
    f:"Defenestrative Urge",
    d:"Ooh! A Window!"
    },
    {
    f:"Disorganized",
    d:"You are disorganized and clutter seems to follow you where ever you go."
    },
    {
    f:"Ditzy",
    d:"You demonstrate a measure of airheadedness that can make even saints lose patience"
    },
    {
    f:"Dyslexia",
    d:"Although you learned to read and write, reading can be difficult, and writing is commonly misspelled. This has affected you throughout your life."
    },
    {
    f:"Easily Distracted",
    d:"Where'd the other shipment of dru...OOH A BUTTERFLY!!"
    },
    {
    f:"Family Curse",
    d:"Someone in your family did something to earn the vengeful curse that has been place on you all." 
    },
    {
    f:"Fear of Magic",
    d:"You find magic incredibly frightening" 
    },
    {
    f:"Fearless",
    d:"Your courage and overconfidence are extreme to the point of foolhardiness"
    },
    {
    f:"Forgetful",
    d:"You just can't...re-...ren-...what was that word again?"
    },
    {
    f:"Froggy Throat",
    d:"There's a frog in your throat, and it sucks at singing"
    },
    {
    f:"Gullible",
    d:"You believe things, no matter how far fetched they seem."
    },
    {
    f:"Haemophilia",
    d:"Your blood does not form clots normally."
    },
    {
    f:"Haunted",
    d:"Boo!"
    },
    {
    f:"Hemeralopia",
    d:"You cannot see in bright light."
    },
    {
    f:"High Metabolism",
    d:"You burn calories at a greater rate than average, though you gain no additional weight from such consumption you do find yourself feeling hungry more often."
    },
    {
    f:"Honest",
    d:"You cannot lie, and are disturbed when others do so."
    },
    {
    f:"Hot-Blooded",
    d:"You were raised in the desert and cannot tolerate cold."
    },
    {
    f:"Hunted",
    d:"You have enemies who will stop at nothing to find you, enemies to whom you are vulnerable."
    },
    {
    f:"Hypochondriasis",
    d:"You are constantly worried of becoming sick and every bodily fuction is heavily scrutinized."
    },
    {
    f:"Impatient",
    d:"You find it simply unbearable to wait any longer than necessary."
    },
    {
    f:"Incompetent",
    d:"This person can't be trusted to do any thing, save sabotaging the enemy. This character can never get it right. If they ordered soup, they give them salad."
    },
    {
    f:"Informal Training",
    d:"Though you learned the basics of fighting, you lack the skill and flexibility to apply your techniques properly in battle. When faced with a situation you didn't train for, you don't know what to do."
    },
    {
    f:"Introvert",
    d:"Peopl-ing is hard. And tiring."
    },
    {
    f:"Loud",
    d:"You are loud in some fashion: Perhaps you can't help but speak your thoughts aloud, or maybe you are heavy-footed."
    },
    {
    f:"Love of Nature",
    d:"You do not wish harm upon any natural creature. No matter the situation."
    },
    {
    f:"Lovestruck",
    d:"You love someone with your whole heart and it shows only when they're not around."
    },
    {
    f:"Magic Corrupting Touch",
    d:"You corrupt magical items that you touch."
    },
    {
    f:"Magical Mania",
    d:"You are particularly touched by the arcane to the point of it shaking your mind."
    },
    {
    f:"Magnetic",
    d:"You are very attractive, but not in the way you might have hoped."
    },
    {
    f:"Malformed Vocal Cords",
    d:"In gaining the breath weapong, somehow your vocal cords were altered so that you speak exclusively in draconic."
    },
    {
    f:"Masochist",
    d:"You are incapable of spending a day without having pain inflicted upon you from another creature."
    },
    {
    f:"Merciful",
    d:"Many times you don't habe it in your heart to kill."  
    },
    {
    f:"Motion Sickness",
    d:"You have a hard time getting around, on anything else but your feet."
    },
    {
    f:"Music Hater",
    d:"You can not stand the noise of performed melodes."
    },
    {
    f:"Music Lover",
    d:"You absolutly love the sound of music."
    },
    {
    f:"Mute",
    d:"You no longer have the capability to speak."
    },
    {
    f:"Narcissistic",
    d:"Your devotion to your own beauty tends to be distracting for you."
    },
    {
    f:"Narcolepsy",
    d:"You have difficult staying awake."
    },
    {
    f:"Naive",
    d:"You lack experience and are lacking in wisdom and judgement. This causes some detriment to your team mates after all your decision sometimes lead to poor outcomes."
    },
    {
    f:"Near Sighted",
    d:"Character finds it hard to see things at greater distances."
    },
    {
    f:"Nyctalopia",
    d:"You cannot see in the dark."
    },
    {
    f:"Obese",
    d:"Let's just say you enjoy a good feast. Ten times a day."
    },
    {
    f:"One-Armed",
    d:"You spend so much time working on one arm's strength that your other arm has suffered from lack-of-use. This could be related to the fact that that your other arm is missing."
    },
    {
    f:"Painful Aberrant Mark",
    d:"Your aberrant mark is especially painful to use"
    },
    {
    f:"Petit Mal Seizures",
    d:"You have a neurological disorder that can be quite the interuption."
    },
    {
    f:"Phobia",
    d:"Dealthy afraid of somehting."
    },
    {
    f:"Polished Hand",
    d:"Two hands are better than one, so why didn't you train both?"
    },
    {
    f:"Poor Saves",
    d:"Bad things happen to you: it's rather unfortunate."
    },
    {
    f:"Pride",
    d:"No matter the odds, you refuse to retreat from battle due to your overwhelming pride and honor."
    },
    {
    f:"Purse Blind",
    d:"You're bad with money and trade."
    },
    {
    f:"Reincarnated Misfortune",
    d:"Things in this life remind you of things from your last, and these things make you sad."
    },
    {
    f:"Self-Centered",
    d:"You can only help yourself"
    },
    {
    f:"Short Temper",
    d:"You get enraged easily, going berserk whenever you suffer damage."
    },
    {
    f:"Skinny Dipper",
    d:"You prefer to swim with no clothes on. This is rather obsessive of you."
    },
    {
    f:"Slaughter Fodder",
    d:"You leave yourself open...a lot."
    },
    {
    f:"Stiff",
    d:"Your joints are not very flexible."
    },
    {
    f:"Storm Chaser",
    d:"You long for the flash of thunder and the wail of wind. Calm days make you painfully uncomfortable."
    },
    {
    f:"Substance Abuse",
    d:"You (used to) depend on alcohol/drugs to make it through the day and it shows."
    },
    {
    f:"Substance Addiction",
    d:"You are physicaly or mentally dependent on some kind of addictive substance."
    },
    {
    f:"Sunblind",
    d:"You have difficulty functioning in direct sunlight due to your sensitive eyes."
    },
    {
    f:"Superstar",
    d:"Everyone's watching you! right?"
    },
    {
    f:"Surgical Scars",
    d:"The removal of many grafts has left your body weakened and scared."
    },
    {
    f:"Terrible Tumbler",
    d:"Kids roll down hills gracefully; you flail like a dying fish."
    },
    {
    f:"Tourette syndrome.",
    d:"Your character has Tourette syndrom."
    },
    {
    f:"Traplover",
    d:"If you see a trap you have the urge to set it off."
    },
    {
    f:"Uncontrollable Phasing",
    d:"You will, from time to time, randomly disappear from existence for a short period of time. You then, after a certain amount of time, phase back into existence with no memory of anything that had happened in the time of your disappearance."
    },
    {
    f:"Uncontrollable Spell Resistance",
    d:"You have no control over your Spell Resistance"
    },
    {
    f:"Unfocused",
    d:"You cannot concentrate on anything for too long."
    },
    {
    f:"Unlucky",
    d:"You see to always fall short at the worst possible moment, right when it matters most."
    },
    {
    f:"Unready",
    d:"You are never ready for combat"
    },
    {
    f:"Unusualy Formed Body",
    d:"There are parts of your boy that are different from most other humanoids."
    },
    {
    f:"Urbanite",
    d:"While you may have travelled extensively at some point in your life, you always feel more at home in a large town or city. Wilderness life simply isn't for you."
    },
    {
    f:"Waste Not",
    d:"Your character hates to leave a corpse behind."
    },
    {
    f:"Weak Mind",
    d:"You have a weak mind, and pretty much anything scares you with ease."
    },
    {
    f:"Weak Stomach",
    d:"You simply cannot hold food and drink down, resulting in a frail, often malnourished character."
    },
    {
    f:"Weakened Power",
    d:"Your lifeblood is greatly weakened."
    },
    {
    f:"Weathered Wound",
    d:"The worse the weather gets, the more you hurt."
    }
    ]






    $("#GenerateBtn").on('click', generateChar);

    
    
    
    
    
    function generateChar() {
        var diceRollTrait = Math.floor(Math.random() * traitsFlawsArray.length);
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
        pickedPersonalityFlaw = traitsFlawsArray[diceRollTrait].f;
        pickedPersonalityFlawDescription = traitsFlawsArray[diceRollTrait].d;
        console.log(pickedBackground);

        $('#title').text(pickedRace + " " + pickedClass);
        $('#level').text('level:' + " " + diceRollLvl);
        $('#mainimg').attr('src', pickedRaceImg);
       var $newBtn = $('<a>').attr('href', pickedRaceLink).text('Click me!');
        $('#level').append($newBtn);
        $('#Occupation').text('Occupation:' + " " + pickedOccupation);
        $('#Background').text('Background:' + " " + pickedBackground);
        $('#Personality').text('Personality:' + ' ' + pickedPersonality);
        $('#Flaws').text('Flaws:' + " " + pickedPersonalityFlaw);
        $('#DescribeFlaws').text('Flaw Description:' + " " + pickedPersonalityFlawDescription);
        $('#Traits').text(" ");
    }   





});


