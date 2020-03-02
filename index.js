$(document).ready(function(){
    $(".grid").kendoGrid({
        /*
        * TODO: Create template for columns with columns field and name from documentation
        * TODO: (dataSource) transport??? what is it and what it will do?
        * TODO: flags (sortable, scroll e.t.c) documentation what they will do?
        * TODO: data for dataSource  (at start from previous project)
        * */
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