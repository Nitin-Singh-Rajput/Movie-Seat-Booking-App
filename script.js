//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];


// Use moviesList array for displaing the Name in the dropdown menu
var movieDropdown = document.querySelector("#selectMovie");

if(movieDropdown){
    moviesList.map((movie)=>{
        var option = document.createElement("option");
        option.text = movie.movieName;
        option.value = movie.price;
        movieDropdown.appendChild(option);
    })
}

movieDropdown.addEventListener('click', function(){
   var movieName = document.querySelector("#movieName");
   var moviePrice = document.querySelector("#moviePrice");
   if(movieName && moviePrice){
       movieName.innerText = movieDropdown.options[movieDropdown.selectedIndex].text;
       moviePrice.innerText = "$ "+movieDropdown.value;
   }
   resetAll();
   });
//Add eventLister to each unoccupied seat
var seats = document.querySelectorAll(".seat");

var unoccupiedSeats = Array.from(seats).filter(function(seat) {
  return !seat.classList.contains('occupied');
});

unoccupiedSeats.forEach(function(seat){
  seat.addEventListener('click', function(){
                addSeat(this);        
    })
})

function resetAll(){
  unoccupiedSeats.forEach(function(seat){
  seat.classList.remove("selected");
})
  calculatePrice();
}

function addSeat (seat){
  if(seat.classList.contains("selected")){
      seat.classList.remove("selected");
  }else{
      seat.classList.add("selected");
  }
  calculatePrice();
}

function calculatePrice(){
  var selectedSeats = Array.from(seats).filter(function(seat) {
  return seat.classList.contains('selected');
      })
  
  var numberOfSeat = document.querySelector("#numberOfSeat");
  var totalPrice = document.querySelector("#totalPrice");
  if(numberOfSeat && totalPrice){
      var selectedValue = movieDropdown.value;
      var count = selectedSeats.length;
      numberOfSeat.innerText = count;
      totalPrice.innerText = selectedValue*count;
  }
}

//Add eventLsiter to continue Button
var proceedBtn = document.querySelector("#proceedBtn");
proceedBtn.addEventListener('click', function(){
       var selectedSeats = Array.from(seats).filter(function(seat) {
      return seat.classList.contains('selected');
          })
       if(selectedSeats.length>0){
           alert('Yayy! Your Seats have been booked');
       }else{
           alert('NO SEAT SELECTED');
       }
  });
//Add eventListerner to Cancel Button
var cancelBtn = document.querySelector("#cancelBtn");
if(cancelBtn){
cancelBtn.addEventListener('click', function(){
  resetAll();
});
}
