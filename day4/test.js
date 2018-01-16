var Bike = function() {
    var gear = 2;
    this.getGear = function(){
      return gear;
    };

    this.setGear = function(change){
      gear = change;
      return gear; 
    };
  
  };
  
  var myBike = new Bike();
  console.log(myBike.getGear());
  console.log(myBike.setGear(7));
