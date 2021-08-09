  /*
File: jstabs.js
GUI Assignment: HW4. Creating a dynamic multiplication table with jquery validation, sliders, and tabs.
Courtney Koran, UMass Lowell Computer Science, Courtney_Koran@student.uml.edu
Copyright (c) 2021 by Courtney. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CK on August 9, 2021.
This javascript code calls addTab when button is clicked and removes tabs when string is given in input box.
There is a bug in my remove function, but I used the textbook code and it works for deleting a single tab and sometimes
works for multiple tabs. After testing thouroughly I can't figure out why it doesn't work for multiple tabs. */

    $(document).ready(function($){
        $("#tabs").tabs();
        $("#submit").click(function() {
            addTab();
            $("#tabs").tabs("refresh");
          });
    


// modifies  code from https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/jQueryUI1.8_Ch03_TabsWidget.pdf

   $("#remove").click(function() {
            
    var x = document.getElementById("indexNum").value;
   // $("#tabs").tabs("refresh");
            var matches = x.match(/\d+/g);
           // window.alert(matches[matches.length]);
           //window.alert(matches.length);
            for(var i=0;i< +matches.length;i++){
                
                //$("#tabs").tabs("refresh");
                //window.alert(matches[i]);
                //var tabIdStr = "#tableId" + (matches[i]);
                //window.alert($("#tabs").find(".ui-tabs-nav li:eq(" + matches[i] + ")").id);
                //var update= +matches[i];
                var tab = $("#tabs").find(".ui-tabs-nav li:eq(" + matches[i] + ")").remove();
                //tab.remove();
               // var y = ".ui-tabs-nav li:eq(" + matches[i] + ")";
               // window.alert(y);
               // var liId=document.getElementById('#tableId" + matches[i] + "');
                //$("#tabs").find(".ui-tabs-nav li a[href='#tableId" + matches[i] + "']").parent().remove(); 
                //var findli=document.querySelector('.ui-tabs-nav > li:nth-child(' + matches[i]+1 + ')');
                //var update=+matches[i]+1;
               //var findli=document.querySelector('.ui-tabs-tab:nth-child(' + update + ')');
               //findli.remove();
              $("#tabs").tabs("refresh");
            }
            //$("#tabs").tabs("refresh");
        });
      });
    