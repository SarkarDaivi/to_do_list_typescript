"use strict";
const arr = [];
const text = document.getElementById("write");
const btn = document.getElementById("btn");
const ul = document.getElementById("opt");
function add_rem() {
    const list = text.value;
    (list === "") ? alert("oops, It is blank") : createList(list);
    text.value = "";
    text.placeholder = "type here";
}
function createList(list_item) {
    var _a, _b;
    const check = document.createElement('input');
    check.setAttribute('name', 'checked');
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "list");
    const ulist = document.createElement('li');
    ulist.setAttribute("class", "list_item");
    ulist.textContent = list_item;
    (_a = document.getElementById("opt")) === null || _a === void 0 ? void 0 : _a.appendChild(check);
    (_b = document.getElementById("opt")) === null || _b === void 0 ? void 0 : _b.appendChild(ulist);
    check.addEventListener("change", remove);
    arr.push(list_item);
}
const check_box = document.getElementsByTagName("input");
const list_items = document.getElementsByTagName("li");
function remove() {
    for (let i = 0; i < (check_box.length); i++) {
        if ((check_box[i]).checked == true) {
            console.log(list_items[i - 1].textContent);
            list_items[i - 1].remove();
            // remove the corresponding input element
            check_box[i].remove();
        }
    }
}
btn.addEventListener("click", add_rem);
