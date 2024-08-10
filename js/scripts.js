// Main function 
function newItem() {

    // Adding a new item to the list
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === "") {
        alert("You must write something!");
    }else {
        $("#list").append(li);
    }

    // Crossing an item from the list adding class strike in CSS
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on("click", crossOut);

    // Delete button X 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
    crossOutButton.on("click", deleteListItem);



}