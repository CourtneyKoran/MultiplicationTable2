/*
File: jsval.js
GUI Assignment: HW4. Creating a dynamic multiplication table with jquery validation, sliders, and tabs.
Courtney Koran, UMass Lowell Computer Science, Courtney_Koran@student.uml.edu
Copyright (c) 2021 by Courtney. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CK on August 9, 2021.
This javascript code validates user input using jquery.
*/

$("#frm1").validate({

    //creating validation rules for input
       rules:{
                mincol:{
                    required: true,
                    range:[-50,50],
                    lessThan: "#maxcol"
                    
                },
                maxcol:{
                    required: true,
                    range:[-50,50],
                    greaterThan: "#mincol"
                },
                minrow:{
                    required: true,
                    range:[-50,50],
                    lessThan: "#maxrow"
                },
                maxrow:{
                    required: true,
                    range:[-50,50],
                    greaterThan: "#minrow"
                }
            },
    
        //creating messages for when rules aren't validated
        messages:{
            mincol:{
                range:"Invalid Input. Please enter a minimum column value between -50 and 50.",
                lessThan: "Minimum column value must be larger than maximum column value. Please enter a value less than the maximum column value."
            },
            maxcol:{
                range:"Invalid input. Please enter a maximum column value between -50 and 50.",
                greaterThan:"Maximum column value must be greater than minimum column value. Please enter a value greater than the minimum column value."
            },
            minrow:{
                range:"Invalid input. Please enter a minimum row value between -50 and 50.",
                lessThan: "Minimum row value must be larger than maximum row value. Please enter a value less than the maximum row value."
            },
            maxrow:{
                range:"Invalid input. Please enter a maximum row value between -50 and 50.",
                greaterThan:"Maximum row value must be greater than minimum row value. Please enter a value greater than the minimum row value."
            }
           
        },
    
    //make sure form is valid before creating multiplication table
        submitHandler: function(form) {
          myFunction();
        }
        
      });
    
    /*created own validator functions to make sure min not greater than max and max not less than min.
    code borrowed from https://stackoverflow.com/questions/14347177/
    how-can-i-validate-that-the-max-field-is-greater-than-the-min-field*/
    
      $.validator.addMethod("greaterThan", function (value, element, param) {
      var $min = $(param);
      if (this.settings.onfocusout) {
        $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
          $(element).valid();
        });
      }
      return this.optional(element) || parseInt(value) >= parseInt($min.val());
    }, "Max must greater than Min");
    
    $.validator.addMethod("lessThan", function (value, element, param) {
      var $min = $(param);
      if (this.settings.onfocusout) {
        $min.off(".validate-lessThan").on("blur.validate-lessThan", function () {
          $(element).valid();
        });
      }
      return this.optional(element) || parseInt(value) <= parseInt($min.val());
    }, "Min must be less than max");
    