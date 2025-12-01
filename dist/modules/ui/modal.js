"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModal = initModal;
function initModal(elements) {
    const { modal, openBtn, closeBtn } = elements;
    openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", () => {
        if (modal)
            modal.style.display = "block";
    });
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        if (modal)
            modal.style.display = "none";
    });
}
