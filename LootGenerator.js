
var  $copperPieces;
var  $silverPieces;
var  $goldPieces;
var  $gemStones;

$('#GenerateBtn').on("click", function(){
    var $copperChoice = $('#Copper').prop("checked");
    var $silverChoice = $('#Silver').prop("checked");
    var $goldChoice = $('#Gold').prop("checked");
    var $gemstoneChoice = $('#Gemstones').prop("checked");



    copperGenerator();
    silverGenerator();
    goldGenerator();
    gemstoneGenerator();


    function copperGenerator(){
        if($copperChoice) {
            $copperPieces = Math.floor(Math.random() * 99 + 1);
            console.log($copperPieces)
            $('#CopperPieces').text("Copper Pieces:" + " " + $copperPieces)
            
        } else {
            return;
        }
    }
    function silverGenerator(){
        if($silverChoice) {
            $silverPieces = Math.floor(Math.random() * 99 + 1);
            console.log($silverPieces);
            $('#SilverPieces').text("Silver Pieces:" + " " + $silverPieces)
        } else {
            return;
        }

    }
    function goldGenerator(){
        if($goldChoice) {
            $goldPieces = Math.floor(Math.random() * 99 + 1);
            console.log($goldPieces);
            $('#GoldPieces').text("Gold Pieces:" + " " + $goldPieces)
        } else {
            return;
        }
    }
    function gemstoneGenerator(){
        if($gemstoneChoice) {
            $gemStones = Math.floor(Math.random() * 10 + 1);
            console.log($gemStones);
            $('#GemstonePieces').text("Gemstones:" + " " + $gemStones)
        } else {
            return;
        }
    }

})