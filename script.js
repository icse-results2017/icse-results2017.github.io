var $name = $("#name");
var $id = $("#id")
var $res = $("#res")

$res.modal();
$("#revealed").modal();
$("#revealed").modal('open');

function showResults() {

    if ($name.val() === "" || $id === "") {
        alert("You must enter both full name and unique ID.")
        return false;
    }else{         
        
        if($id.length > 10 || typeof $name.val() !== "string" ){
            alert("You entered wrong format.")
            console.log(typeof $id.val())
            console.log(typeof $name.val())
            return false;
        }
    }
    
       
    if(localStorage.getItem('percent') == null){
        localStorage.setItem('percent', getRandomPercentage())
        
        $("#n").html("Name: "+ $name.val());
        $("#i").html("Unique ID: "+ $id.val());
        $("#p").html("Percentage: "+ localStorage.getItem('percent') + "%");
        
    }else{
        
        var percent = localStorage.getItem('percent');
        $("#n").html("Name: "+ $name.val());
        $("#i").html("Unique ID: "+ $id.val());
        $("#p").html("Percentage: "+ percent + "%");
        
        
    }
    
    $res.modal('open');
    return true;

}

function getRandomPercentage(){
    var percentage = getRandomMarks(90, 97);
    console.log(percentage)
    if(Math.random() > 0.5) percentage += 0.5;
    else percentage -= 0.5; 
    return percentage;
}

function getRandomMarks(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

