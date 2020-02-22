$(document).ready(function() {
  $("img#design").click( function() {
    $("#design-showing").toggle()
  })
  $("p").click( function() {
    $("#design-hidden").toggle()
  })
  $("img#dev").click(function() {
    $("#dev-showing").toggle()
  })
  $("p").click(function(){
    $("#dev-hidden").toggle()
  })
  $("img#product").click(function() {
    $("#product-showing").toggle()
  })
  $("p").click( function() {
    $("#product-hidden").toggle()
  })
})