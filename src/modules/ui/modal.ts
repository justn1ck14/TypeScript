import { ModalElements } from "../../types/ui";

export function initModal(elements: ModalElements): void {
  const { modal, openBtn, closeBtn } = elements;

  openBtn?.addEventListener("click", () => {
    if (modal) modal.style.display = "block";
  });

  closeBtn?.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
  });
}