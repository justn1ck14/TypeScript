// Відкриття/закриття модального вікна
const modal: HTMLElement | null = document.getElementById("myModal");
const btn: HTMLElement | null = document.getElementById("openModal");
const closeBtn: HTMLElement | null = document.getElementById("closeModal");

btn?.addEventListener("click", () => {
  if (modal) modal.style.display = "block";
});

closeBtn?.addEventListener("click", () => {
  if (modal) modal.style.display = "none";
});

// Scroll event
window.addEventListener("scroll", () => {
  console.log("Сторінка скролиться!");
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