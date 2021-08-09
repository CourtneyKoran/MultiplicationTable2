  /*
File: multTable.js
GUI Assignment: HW4. Creating a dynamic multiplication table with jquery validation, sliders, and tabs.
Courtney Koran, UMass Lowell Computer Science, Courtney_Koran@student.uml.edu
Copyright (c) 2021 by Courtney. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by CK on August 9, 2021.
This javascript code creates dynamic multiplication table also conatins the addTab() function and createTable()
function that creates a copy of the mult table to place in a tab. */
  

  //creating a table, table wrapper, count number of tables saved.
  var count=0;
  var div=document.createElement('div');
  var table = document.createElement('table');
  
  //function that gets called when submit button is pressed
  function myFunction() {
    
    //first section of code get input from the form text boxes and places in an array
    const tableVals=[];
    var x = document.getElementById("frm1");
    var i;
    for (i = 0; i < x.length ;i++) {
      tableVals[i]=x.elements[i].value;
    }
    
    //create variables containing input that was placed in array
    var v=tableVals[0]; //min col
    var w=tableVals[1]; //max col
    var y=tableVals[2]; //min row
    var z=tableVals[3]; //max row
  
  //check to see if there is a table that needs to be deleted and delete it row by row.
  if(table.rows.length-1>0){
       
       for(var i = table.rows.length-1;i >= 0;i--){
          table.deleteRow(i);
       }
     
      }

      //creating table head, and first th element of table
      var header1 = table.createTHead();
      
      var tr = document.createElement('tr'); 
  
      var th1 = document.createElement('th');
  
      var text1 = document.createTextNode('');
  
      th1.appendChild(text1);
     
      tr.appendChild(th1);
  
      table.appendChild(tr);

  //creating the row header 
  for (var j = +v; j <= +w; j++){
      
      var th2 = document.createElement('th');
      var text2 = document.createTextNode(j);
      th2.appendChild(text2);
      tr.appendChild(th2);
  
  }
  
  header1.appendChild(tr); //appending end of thead to last row header cell
  
  //outer loop creates first column header. inner loop fills in table body.
  for (var i = +y; i <= +z; i++){
      var header2 = table.createTHead();
      var tr = document.createElement('tr'); 
      var th1 = document.createElement('th');
      var text1 = document.createTextNode(i);
  
      th1.appendChild(text1);
    
      tr.appendChild(th1);
      
      table.appendChild(tr);
  
      for (var j = +v; j <= +w; j++){
      var td2 = document.createElement('td');
      var text2 = document.createTextNode(j*i);
      td2.appendChild(text2);
      tr.appendChild(td2);
  }
  }
 
  document.body.appendChild(table);
  div.appendChild(table);
  document.body.appendChild(div);
  
}

//adds tab to tabbed interface if form is valid
function addTab(v,w,y,z){
    if($('#frm1').valid()){
    const tableVals=[];
    var x = document.getElementById("frm1");
    var i;
    for (i = 0; i < x.length ;i++) {
      tableVals[i]=x.elements[i].value;
    }
    
    //create variables containing input that was placed in array
    var v=tableVals[0]; //min col
    var w=tableVals[1]; //max col
    var y=tableVals[2]; //min row
    var z=tableVals[3]; //max row

   //creating table to place in tab
   createTable(v,w,y,z);

   var node = document.createElement('li'); //create tab list item
   var a = document.createElement('a');  //create link to reference table in tab li
   var link = document.createTextNode(v+" - "+w+" x "+y+" - "+z);
   a.appendChild(link); 
   nodeId="li-"+count;
   node.id=nodeId; 
   var idstring='#tableId'+count;
   a.href=idstring;
   count++; //update count new tab was created
   document.body.appendChild(a);
    node.appendChild(a); 
   document.getElementById('tabslist').appendChild(node);
}
}

//create copy of table to place in tab
function createTable(v,w,y,z){
    //var div2=document.createElement('div');
    table2=document.createElement('table');
    var header3 = table2.createTHead();
      
      var tr2 = document.createElement('tr'); 
  
      var th3 = document.createElement('th');
  
      var text3 = document.createTextNode('');
  
      th3.appendChild(text3);
     
      tr2.appendChild(th3);
  
      table2.appendChild(tr2);

  //creating the row header 
  for (var j = +v; j <= +w; j++){
      
      var th4 = document.createElement('th');
      var text4 = document.createTextNode(j);
      th4.appendChild(text4);
      tr2.appendChild(th4);
  
  }
  
  header3.appendChild(tr2); //appending end of thead to last row header cell
  
  //outer loop creates first column header. inner loop fills in table body.
  for (var i = +y; i <= +z; i++){
      //var header4 = table.createTHead();
      var tr2 = document.createElement('tr'); 
      var th3 = document.createElement('th');
      var text3 = document.createTextNode(i);
  
      th3.appendChild(text3);
    
      tr2.appendChild(th3);
      
      table2.appendChild(tr2);
  
      for (var j = +v; j <= +w; j++){
      var td4 = document.createElement('td');
      var text4 = document.createTextNode(j*i);
      td4.appendChild(text4);
      tr2.appendChild(td4);
  }
  }
  
  //making sure table is correctly referenced in tab li
 document.getElementById('tabs').appendChild(table2);
var idstring2= 'tableId'+count;
var tabId='tab'+count;
table2.id = tabId;
var divElement = document.createElement('div');
divElement.id=idstring2;
divElement.appendChild(table2);
document.getElementById('tabs').appendChild(divElement);

  
}
