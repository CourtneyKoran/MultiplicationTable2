/*
File: jsslider.js
GUI Assignment: HW4. Creating a dynamic multiplication table with jquery validation, sliders, and tabs.
Courtney Koran, UMass Lowell Computer Science, Courtney_Koran@student.uml.edu
Copyright (c) 2021 by Courtney. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CK on August 9, 2021.
This javascript code creates dynamic sliders that are binded to input boxes and update the mult table when moved using jquery.
*/

//slider1 for min col binded input box
//code borrowed from https://infoheap.com/jquery-ui-slider-and-input-text-box-two-way-binding/
$(function () {
    $("#slider1").slider({
      min: -50 , max: 50, step: 1,value: 0, 
      slide: function( event, ui ) {
        $("#mincol").val(ui.value);
      }
    });
    var initialValue = $("#slider1").slider("option", "value");
    $("#mincol").val(initialValue);
    $("#mincol").change(function() {
      var oldVal = $("#slider1").slider("option", "value");
      var newVal = $(this).val();
        $("#slider1").slider("option", "value", newVal);
    });
  });
  
  //slider2 for max col binded input box
  $(function () {
    $("#slider2").slider({
      min: -50 , max: 50, step: 1,value: 0,
      slide: function( event, ui ) {
        $("#maxcol").val(ui.value);
      }
    });
    var initialValue = $("#slider2").slider("option", "value");
    $("#maxcol").val(initialValue);
    $("#maxcol").change(function() {
      var oldVal = $("#slider2").slider("option", "value");
      var newVal = $(this).val();
        $("#slider2").slider("option", "value", newVal);
    });
  });
  
    //slider3 for min row binded input box
    $(function () {
        $("#slider3").slider({
          min: -50 , max: 50, step: 1,value: 0,
          slide: function( event, ui ) {
            $("#minrow").val(ui.value);
          }
        });
        var initialValue = $("#slider3").slider("option", "value");
        $("#minrow").val(initialValue);
        $("#minrow").change(function() {
          var oldVal = $("#slider3").slider("option", "value");
          var newVal = $(this).val();
            $("#slider3").slider("option", "value", newVal);
        });
      });

        //slider4 for max row binded input box
    $(function () {
        $("#slider4").slider({
          min: -50 , max: 50, step: 1,value: 0,
          slide: function( event, ui ) {
            $("#maxrow").val(ui.value);
          }
        });
        var initialValue = $("#slider4").slider("option", "value");
        $("#maxrow").val(initialValue);
        $("#maxrow").change(function() {
          var oldVal = $("#slider4").slider("option", "value");
          var newVal = $(this).val();
            $("#slider4").slider("option", "value", newVal);
        });
      });

      //updates table when slider1 is dragged and slider1 is validated
      $(function() {    

        $( "#slider1" ).slider({
           change: function(slide, ui) {
               
               if($('#frm1').valid()){
                myFunction();
                }
               
               $(selector).trigger(slide);
    
           }
        });
    
    });

     //updates table when slider2 is dragged and slider2 is validated
    $(function() {    

        $( "#slider2" ).slider({
           change: function(slide, ui) {
              
               if($('#frm1').valid()){
                myFunction();
                }
               
               $(selector).trigger(slide);
    
               
           }
        });
    
    });

     //updates table when slider3 is dragged and slider3 is validated
    $(function() {   

        $( "#slider3" ).slider({
           change: function(slide, ui) {
               
               if($('#frm1').valid()){
                myFunction();
                }
               
               $(selector).trigger(slide);
    
              
           }
        });
    
    });

     //updates table when slider4 is dragged and slider4 is validated
    $(function() {    

        $( "#slider4" ).slider({
           change: function(slide, ui) {
              
               
               if($('#frm1').valid()){
               myFunction();
               }
               
               $(selector).trigger(slide);
    
               
           }
        });
    
    });
    
//updates table when input changes without submitting
function handleInput(){
    if($('#frm1').valid()){
        myFunction();
        }
}