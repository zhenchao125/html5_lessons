/**
 * Created by Administrator on 2017/2/20.
 */
window.onload = function () {
    var itemtCheckBoxs = document.getElementsByName("cartCheckBox");
    var allCheckBox = document.getElementById("allCheckBox");
    var cartTdSixs = document.querySelectorAll(".cart_td_6");
    var itemTotals = document.querySelectorAll(".cart_td_7");
    var delItems = document.querySelectorAll(".cart_td_8");
    allCheckBox.onclick = function () {
        for (var index in itemtCheckBoxs) {
            itemtCheckBoxs[index].checked = allCheckBox.checked;
            allTotal();
        }
    };

    for (let i = 0; i < cartTdSixs.length; i++) {
        console.log(cartTdSixs[i].children[0]);
        cartTdSixs[i].children[0].onclick = function () {
            var price = parseFloat(this.parentElement.previousElementSibling.innerText);
            console.log(price);
            var num = parseInt(this.nextElementSibling.value) - 1;
            if (num < 0) {
                num = 0;
                alert("数量不能小于 0");
            }
            this.nextElementSibling.value = num;
            this.parentElement.nextElementSibling.innerHTML = (num * price).toFixed(2);
        }
        cartTdSixs[i].children[2].onclick = function () {
            var price = parseFloat(this.parentElement.previousElementSibling.innerText);
            console.log(this.parentElement.previousElementSibling);
            var num = parseInt(this.previousElementSibling.value) + 1;
            this.previousElementSibling.value = num;
            this.parentElement.nextElementSibling.innerHTML = (num * price).toFixed(2);
        }
    }
    function del() {
        for (let i=0;i< delItems.length;i++){
            delItems[i].firstElementChild.onclick = function (event) {
                // event.preventDefault();
                console.log(this.parentElement)
                this.parentElement.parentElement.innerHTML = "";
            }
        }
    }
    del();
    function allTotal() {
        var totalPrice= 0;
        for(var index in  itemTotals){
            var itemCheck = itemTotals[index].parentElement.firstElementChild.firstElementChild;
            if(itemCheck.checked){
                if(itemTotals[index].innerHTML.trim().length != 0){
                    totalPrice+= parseFloat(itemTotals[index].innerText);
                }
            }
        }
        return totalPrice;
        console.log(totalPrice);
    }
};
