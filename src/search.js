/**
 * ---TODO---
 * adapt search function to work with lists of js objects (restaurants)
 * instead of html tags
 */

function search(){
    let input, filter, ul, li, a, i;
    input = document.getElementById("<name of our search element>");
    filter = input.value.toUpperCase();
    ul = document.getElementById("<name of table element>"); //this is the element that li takes the elements from
    li = ul.getElementsByTagName("<tag of list element>"); // change these to be table tags and elements

    //use a loop to hide all list items that don't match the search query
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].getElementsByClassName.display = "";
        } else {
            li[i].getElementsByClassName.display = "none";
        }
    }
}