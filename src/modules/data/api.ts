import { FetchResult } from "../../types/api";

export async function loadPosts(limit: number = 5): Promise<FetchResult> {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: FetchResult = await response.json();
  return data.slice(0, limit);
}

export function renderPosts(containerId: string, posts: FetchResult): void {
  const container: HTMLElement | null = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = posts.map(p => `<p>${p.title}</p>`).join("");
}