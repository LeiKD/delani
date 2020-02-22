function enter() {
  var name= document.getElementById("name").value
  var email= document.getElementById("email").value
  var text= document.getElementById("text").value
  if (name==="" || email==="" || text==="") {
    alert("Input the required data!")
  } else {
    alert(name + "," + "we have received your message. Thank you for reaching out to us.")
  }



$(document).ready(function() {
  $(".design").click( function() {
    $("#design-showing").toggle()
    $("#design-hidden").toggle()
  })
  $(".dev").click(function() {
    $("#dev-showing").toggle()
    $("#dev-hidden").toggle()
  })
  $(".product").click(function() {
    $("#product-showing").toggle()
    $("#product-hidden").toggle()
  })
})