var productContainer = document.getElementById("products");
var searchList = document.getElementById("search");
var productList = productContainer.querySelectorAll("div.products-box");

searchList.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
