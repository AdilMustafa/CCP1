function textAdjustment(selectTag) {//what this function does is turns the id's fontsizes into what the list value equals
  var listValue = selectTag.options[selectTag.selectedIndex].text; //when the user selects an option from the select HTML tags the variable listvalue will turn into it (in this case when the user selects 20px from the drop-down list the listvalue variable will then equal 20px)
  document.getElementById("TA").style.fontSize = listValue;
  document.getElementById("TA2").style.fontSize = listValue;
  document.getElementById("TA3").style.fontSize = listValue;
}