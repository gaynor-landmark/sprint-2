<script>
  function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    
    // Only change code below this line.
    
    $($('.slot')[0]).html('<img src = "' + images[slotOne - 1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo - 1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree - 1] + '">');
    
    // Only change code above this line.
    
    if (slotOne === slotTwo && slotTwo === slotThree) {
      $('.logger').html("It's A Win");
      return null;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    
    $('.logger').append(" Not A Win");
    
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function() {<script>
  function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    
    // Only change code below this line.
    
    $($('.slot')[0]).html('<img src = "' + images[slotOne - 1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo - 1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree - 1] + '">');
    
    // Only change code above this line.
    
     $('.go').click(function() {
       runSlots();
     });
   });
</script>
 
<div>
 <div class = 'container inset'>
   <div class = 'header inset'>
     <img src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg.gz' alt='learn to code javascript at Free Code Camp logo' class='img-responsive nav-logo'>
     <h2>FCC Slot Machine</h2>
   </div>
   <div class = 'slots inset'>
     <div class = 'slot inset'>
       
     </div>
     <div class = 'slot inset'>
       
     </div>
     <div class = 'slot inset'>
       
     </div>
   </div>
   <br/>
   <div class = 'outset'>
     <button class = 'go inset'>
       Go
     </button>
   </div>
   <br/>
   <div class = 'foot inset'>
     <span class = 'logger'></span>
   </div>
 </div>
</div>

<style>
 .slot > img {
  margin: 0!important;
  height: 71px;
  width: 50px;
 }
 .container {
   background-color: #4a2b0f;
   height: 400px;
   width: 260px;
   margin: 50px auto;
   border-radius: 4px;
 }
 .header {
   border: 2px solid #fff;
   border-radius: 4px;
   height: 55px;
   margin: 14px auto;
   background-color: #457f86
 }
 .header h2 {
   height: 30px;
   margin: auto;
 }
 .header h2 {
   font-size: 14px;
   margin: 0 0;
   padding: 0;
   color: #fff;
   text-align: center;
 }
 .slots{
   display: flex;
   background-color: #457f86;
   border-radius: 6px;
   border: 2px solid #fff;
 }
 .slot{
   flex: 1 0 auto;
   background: white;
   height: 75px;
   width: 50px;
   margin: 8px;
   border: 2px solid #215f1e;
   border-radius: 4px;
   text-align: center;
 }
 .go {
   width: 100%;
   color: #fff;
   background-color: #457f86;
   border: 2px solid #fff;
   border-radius: 2px;
   box-sizing: none;
   outline: none!important;
 }
 .foot {
   height: 150px;
   background-color: 457f86;
   border: 2px solid #fff;
 }
 
 .logger {
   color: white;
   margin: 10px;
 }
 
 .outset {
   -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
     box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
 }
 
 .inset {
   -webkit-box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
   box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
 }
</style>