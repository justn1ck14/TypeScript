export function registerGlobalEvents(): void {
  window.addEventListener("scroll", () => {
    console.log("Сторінка скролиться!");
  });
}