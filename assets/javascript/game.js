 //define variables for total ,win , loss
    // computer guess a random number
    //display the random number
    //generate random value for each crystal up to win or loss 
    //add the crystal value clicked to total guess number 
    //check the total number with computerguess number if more than it , loss ++
    // if equal win ++
    //if less than , user should click new crystal 
    $(document).ready(function(){
    var total = 0,
        win=0,
        loss = 0,
        random,
        one,two, three, four;

      
       function start() {
    
   random = Math.floor(Math.random()* 120) +19;
  
   $("#random").html(random);
    // Generates new values for the crystals.
    one  = Math.floor((Math.random() * 12) + 1);
    two = Math.floor((Math.random() * 12) + 1);
    three = Math.floor((Math.random() * 12) + 1);
    four = Math.floor((Math.random() * 12) + 1);
    
  
    total = 0;
    // Displays the guess total.
    $("#total").html(total);
  };

$("button").on('click', function(evt)  {
  var number =$(this).val();
  console.log(number);
    if (number=="one"){
     total+=one;
     $("#total").html(total);
    }
    else if (number =="two"){
      total+= two;
      $("#total").html(total);
    }
    else if (number =="three"){
      total += three;
      $("#total").html(total);
    }
    else if (number == "four"){
      total += four;
      $("#total").html(total);
    }
    
    console.log("total" + total);
    if (total> random){
      loss ++;
      $("#loss").html(loss);
      start();
    }
    else if (total == random){
      win ++;
      $("#win").html(win);
      start();
    }
  });

start();

$("#reset").on('click', function(evt)  {

      window.location.reload();
    });
 
});
