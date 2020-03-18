$(document).ready(function(){
    $(".grid").kendoGrid({

       columns: [
           {field:"name",},
           {field:"surname"},
           {field:"year",
               sortable: {
                   compare: function(a, b) {
                       return (new Date(a.year)) - (new Date(b.year));
                   }
               },
               template: function (data) {
               return kendo.htmlEncode(new Date(data.year).toDateString())
           }},
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