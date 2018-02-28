$(document).ready(function(){
   
        $.getJSON("data.json", function(result){
        	var student_data ='';
        	var elements = ''
        	$.each(result,function(key ,value){

        		student_data +='<tr>';

        		student_data +='<td>'+value.name+'</td>';
        		student_data +='<td>'+value.description+'</td>';
  		     
  		     
        		student_data +='</tr>'; 


            $.each(value.elements,function(i,v){
               	console.log(v);
                     $("#dd1list").append($('<option></option').html( this.value));
                       $("#dd2list").append($('<option></option').html(this.value.short_name ));
                       $("#dd3list").append($('<option></option').html(v.value));

                         $("#ddl4ist").append($('<option></option').html(this.value.long_name));

                   $("#ddlist").append($('<option></option').html(this.value.duration));

   


	}); $('#ddlist').change(function () {
            console.log($(this).val());
            //Code to select image based on selected car id
        });




        	});

       
          $("#student_data").append(student_data);
        });
    });
