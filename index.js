$(document).ready(function(){
    $(".grid").kendoGrid({
        /*
        * TODO: Create template for columns with columns field and name from documentation
        * TODO: (dataSource) transport??? what is it and what it will do?
        * TODO: flags (sortable, scroll e.t.c) documentation what they will do?
        * TODO: data for dataSource  (at start from previous project)
        * */
        /*
*
* TODO: 1. Создать массив из 10 элементов
* TODO: 2. положить массив в таблицу
* TODO: 3. таблица рендерится
* TODO: 4. через 100 секунд я удаляю из массива 2 записи, добавляю 3 других записи и изменяю в одной записи значения колонок
* TODO: 5. табличка должна отразить изменения без дополнительных обращений к таблице
*
*/
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