$(document).ready(function() {
  $("#form0ne").submit(function(event) {
    event.preventDefault();
    const input = $("input#input1").val();

    let array = input.split(' ');

    let newArray = input.split('');
    newArray = newArray.reverse();
    newArray = newArray.split(' ');
    newArray = newArray.join('');

    if (array === newArray){
      alert("THAT'S A PALINDROME");
    }
    else
      alert("Not a palindrome.");

  });
});