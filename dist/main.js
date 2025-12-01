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
const modal_1 = require("./modules/ui/modal");
const events_1 = require("./modules/ui/events");
const api_1 = require("./modules/data/api");
// Базові змінні з практичної №2 (index.ts)
const userName = "Денис";
const age = 22;
const isStudent = true;
console.log(`Ім'я: ${userName}`);
console.log(`Вік: ${age}`);
console.log(`Студент: ${isStudent}`);
// Ініціалізація модального вікна
const elements = {
    modal: document.getElementById("myModal"),
    openBtn: document.getElementById("openModal"),
    closeBtn: document.getElementById("closeModal"),
};
(0, modal_1.initModal)(elements);
// Глобальні події
(0, events_1.registerGlobalEvents)();
// Завантаження та рендер постів
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield (0, api_1.loadPosts)(5);
    (0, api_1.renderPosts)("dataContainer", posts);
}))();
