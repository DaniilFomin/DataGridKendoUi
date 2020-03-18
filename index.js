$(document).ready(function(){
    $(".grid").kendoGrid({
  
       columns: [
           {field:"name"},
           {field:"surname"},
           {field:"year"},
           {field:"gender"},
       ],
        filterable: true,
        sortable:true,
        dataSource: {
           transport:{
               read:{
                   url:"./dataCreator.json",
                   dataType: "json"
               }
           }
        }
    })
});
