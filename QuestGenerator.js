var type = ["Ragged", "Polished", "Mysterious", "Seductive", "Gregarious", "Insane", "Pontificating", "Weeping", "Imperious", "Placid", "Paranoid", "Scarred", "Amusing", "Arcane", "Enormous", "Tiny", "Colorful", "Overjoyed", "Pious", "Sinister"];
var npc = ["Sailor", "Acolyte", "Soldier", "Urchin", "Criminal", "Talking Beast", "Entertainer", "Apparition", "Folk Hero", "Authority", "Artisan", "Peasant", "Hermit", "Monster", "Noble", "Blacksmith", "Outlander", "Friend", "Sage"];
var verb = ["Steal", "Find", "Mend", "Destroy", "Outwit", "Protect", "Hide", "Understand", "Bury", "Reach", "Sabotage", "Counterfeit", "Expose", "Reassemble", "Enshrine", "Pacify", "Transport", "Free"];
var sort = ["Bloodthirsty", "Disguised", "Undying", "Haunted", "Enchanted", "Clockwork", "Uncanny", "Lost", "Holy", "Wicked", "Golden", "Chosen", "Secret", "Prophesied", "Otherworldly", "Broken", "Promised", "Cursed", "Stolen", "Blasphemous"];
var subject = ["Heir", "Blade", "Monster", "Relic", "Texts", "Tower", "Monarch", "Letter", "Betrothed", "Flowers", "Beast of the Wild", "Treasure", "Tree", "Bird", "Mirror", "Tomb", "Stranger", "Occultist", "Child", "Warrior"];
var deadline = ["Famine strikes the region", "It wakes again", "A terrible flood", "The invasion begins", "The last day of the trial", "An innocent life is lost", "The illnes spreads", "The day of the wedding", "The chance for justice is lost", "They all die", "Twilight, 1d6 sunsets from now", "Morning, 1d6 sunrises from now", "The ritual is complete", "Noon 1d6 days from now", "The coronation is complete", "Life becomes an insufferable hellscape", "The spell wears off", "Everyone is transformed", "The spell's effects become permanent", "The land falls into darkness"];
var reward = ["A heartfelt thanks", "1d4+1 barrels of ale", "1d3+1 bottls of fine wine", "2d100 pieces of silver", "A First-Born Child", "A life-Debt", "A Divine Blessing", "1d100 Gold", "1 Magic Scroll", "Information you need", "1d3 Magic Items of some interest", "1 Magic Weapon", "A Map to Grand Treasure", "1d3 Magic Scrolls", "Rename the location after you", "Double your money", "1 Finely Cooked Meal for Everyone", "1d4 Days worth of food", "An exotic pet", "6d100 Copper"];



$('#GenerateBtn').on("click", function(){
    var diceRollType = Math.floor(Math.random() * type.length + 1);
    var diceRollNpc = Math.floor(Math.random() * npc.length + 1);
    var diceRollVerb = Math.floor(Math.random() * verb.length + 1);
    var diceRollSort = Math.floor(Math.random() * sort.length + 1);
    var diceRollSubject = Math.floor(Math.random() * subject.length + 1);
    var diceRollDeadline = Math.floor(Math.random() * deadline.length + 1);
    var diceRollReward = Math.floor(Math.random() * reward.length + 1);

    typePick = type[diceRollType];
    npcPick = npc[diceRollNpc];
    verbPick = verb[diceRollVerb];
    console.log(verbPick);
    sortPick = sort[diceRollSort];
    subjectPick = subject[diceRollSubject];
    deadlinePick = deadline[diceRollDeadline];
    rewardPick = reward[diceRollReward];

    $('#Quest').text("A(n)" + " " + typePick + " " + npcPick + " " + "approaches the party and asks that they" + " " + verbPick + " " + "the" + " " + sortPick + " " + subjectPick + " " + "before" + " " + deadlinePick + "." + " " + "In return they promise to grant" + " " + rewardPick + " " + "as payment.");



})
