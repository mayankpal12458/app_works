$(document).ready(function(){

   
    $('#btnsbmt').on('click',function(e){
        e.preventDefault();
        $('#result').text('');
       var editnum=$('#editnum').val();
      
      
       $.ajax({
        url:'/',
        type:'POST',
        data:{
            editnum:editnum
        },
        success: function(data) {
           
            var i;
            for(i=0;i<editnum;i++)
            {
                $('#result').append(data[i].name+" -"+data[i].total);
                $('#result').append("\n");
            }
            
        }
    });
    });
});
