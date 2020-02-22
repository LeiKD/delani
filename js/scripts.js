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