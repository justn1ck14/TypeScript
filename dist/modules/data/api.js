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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPosts = loadPosts;
exports.renderPosts = renderPosts;
function loadPosts() {
    return __awaiter(this, arguments, void 0, function* (limit = 5) {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const data = yield response.json();
        return data.slice(0, limit);
    });
}
function renderPosts(containerId, posts) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = posts.map(p => `<p>${p.title}</p>`).join("");
}
