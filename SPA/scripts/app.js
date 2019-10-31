var shoppingList = {};

function createList() {

    shoppingList.name = $("#listName").val();
    shoppingList.items = new Array();

    var listName = shoppingList.name;

    if (listName.length > 0) {
        $("#header").html(listName);
    }
    else {
        $("#header").html("NO NAME LIST");
    }

    $("#createListDiv").hide();
    $("#ShoppingItemsDiv").show();
    $("#item").focus();
}
function createListFromServer(data) {

    shoppingList.name = data.name;
    shoppingList.items = new Array();
    shoppingList.items = data.shopItems;

    var listName = shoppingList.name;

    if (listName.length > 0) {
        $("#header").html(listName);
    }
    else {
        $("#header").html("NO NAME LIST");
    }

    $("#createListDiv").hide();
    $("#ShoppingItemsDiv").show();
    $("#item").focus();
}

function addItem() {
    var newItem = {};
    newItem.name = $("#item").val();
    $("#item").val('').focus();
    console.info(newItem);

    if (newItem.name.length > 0) {
        shoppingList.items.push(newItem);
        console.info("added");
    }

    showItems();

}

function showItems() {

    console.info(shoppingList);

    var $ul = $("#items");
    $ul.empty();
    console.log("number od items: " + shoppingList.items);
    for (var i = 0; i < shoppingList.items.length; i++) {

        var item = shoppingList.items[i];
        var $li = $("<li>").html(item.name).attr("id", "itme_" + i);
        var $deleteButton = $("<button onclick='deleteItem(" + i + ")'>Delete</button>").appendTo($li);
        var $checkButton = $("<button onclick='checkItem(" + i + ")'>Check</button>").appendTo($li);

        $li.appendTo($ul);
    }

}
function deleteItem(i) {

    shoppingList.items.splice(i, 1);
    showItems();
}

function checkItem(index) {


    var $li = $("#li[id='item_0']");
    console.info($li);

    var hasClass = $li.hasClass("checked");
    console.info(hasClass);
    $li.toggleClass("checked", hasClass);

    if ($li.hasClass("checked")) {
        $li.removeClass("checked");
    } else {
        $li.addClass("checked");
    }
}

function getDataById(id) {

    console.info("function called");
    $.ajax({
        url: "api/ShoppingList/"+id,
        method: "GET",
        datatype: "json",
        success: function (data) {
            
            console.info(data);
            createListFromServer(data);
            showItems();
        }
    });

}

$(document).ready(function () {

    var txtListName = $("#listName");
    var txtItem = $("#item");

    txtListName.focus();
    txtListName.keyup(function (event) {
        if (event.keyCode === 13) {
            createList();
        }
    });


    txtItem.keyup(function (event) {
        if (event.keyCode === 13) {
            addItem();
        }
    });
}
);