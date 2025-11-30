// Типи
let modalOpen: boolean = false;

// Відкриття модального вікна
const modal: HTMLElement | null = document.getElementById("myModal");
const btn: HTMLElement | null = document.getElementById("openModal");

btn?.addEventListener("click", () => {
  modalOpen = true;
  if (modal) modal.style.display = "block";
});

// Закриття модального вікна
const closeBtn: HTMLElement | null = document.getElementById("closeModal");
closeBtn?.addEventListener("click", () => {
  modalOpen = false;
  if (modal) modal.style.display = "none";
});

// Scroll event
window.addEventListener("scroll", () => {
  console.log("Користувач скролить сторінку");
});

// Fetch даних
async function loadData(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: { id: number; title: string }[] = await response.json();
  const container = document.getElementById("dataContainer");
  if (container) {
    container.innerHTML = data.slice(0, 5).map(post => `<p>${post.title}</p>`).join("");
  }
}
loadData();
