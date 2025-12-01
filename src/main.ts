import { initModal } from "./modules/ui/modal";
import { registerGlobalEvents } from "./modules/ui/events";
import { loadPosts, renderPosts } from "./modules/data/api";
import { ModalElements } from "./types/ui";

// Базові змінні з практичної №2 (index.ts)
const userName: string = "Денис";
const age: number = 22;
const isStudent: boolean = true;

console.log(`Ім'я: ${userName}`);
console.log(`Вік: ${age}`);
console.log(`Студент: ${isStudent}`);

// Ініціалізація модального вікна
const elements: ModalElements = {
  modal: document.getElementById("myModal"),
  openBtn: document.getElementById("openModal"),
  closeBtn: document.getElementById("closeModal"),
};
initModal(elements);

// Глобальні події
registerGlobalEvents();

// Завантаження та рендер постів
(async () => {
  const posts = await loadPosts(5);
  renderPosts("dataContainer", posts);
})();