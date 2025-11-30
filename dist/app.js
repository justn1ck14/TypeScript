"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Відкриття/закриття модального вікна
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    if (modal)
        modal.style.display = "block";
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
    if (modal)
        modal.style.display = "none";
});
// Scroll event
window.addEventListener("scroll", () => {
    console.log("Сторінка скролиться!");
});
// Fetch даних
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const data = yield response.json();
        const container = document.getElementById("dataContainer");
        if (container) {
            container.innerHTML = data.slice(0, 5).map(post => `<p>${post.title}</p>`).join("");
        }
    });
}
loadData();
