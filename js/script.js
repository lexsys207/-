var item_1 = document.getElementById("person-1");
var item_2 = document.getElementById("person-2");
var item_3 = document.getElementById("person-3");

function show_1() {
    item_1.classList.add("show");
    item_2.classList.remove("show");
    item_3.classList.remove("show");
}
function show_2() {
    item_1.classList.remove("show");
    item_2.classList.add("show");
    item_3.classList.remove("show");
}
function show_3() {
    item_1.classList.remove("show");
    item_2.classList.remove("show");
    item_3.classList.add("show");
}

item_1.addEventListener('click', show_1);
item_2.addEventListener('click', show_2);
item_3.addEventListener('click', show_3);