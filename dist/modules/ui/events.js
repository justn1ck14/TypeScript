"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGlobalEvents = registerGlobalEvents;
function registerGlobalEvents() {
    window.addEventListener("scroll", () => {
        console.log("Сторінка скролиться!");
    });
}
