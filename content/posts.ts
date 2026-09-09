import type { Post } from "./types";
import { post as necesitasUnErp } from "./posts/necesitas-un-erp-o-necesitas-orden";
import { post as porQueFallan } from "./posts/por-que-fallan-los-erp-en-pymes";
import { post as listaParaDigitalizar } from "./posts/empresa-lista-para-digitalizar";
import { post as senalesDesorden } from "./posts/senales-de-desorden-operativo";
import { post as queVaPrimero } from "./posts/erp-o-procesos-que-va-primero";

/** Todos los artículos, del más reciente al más antiguo. */
export const posts: Post[] = [
  necesitasUnErp,
  porQueFallan,
  listaParaDigitalizar,
  senalesDesorden,
  queVaPrimero,
].sort(
  (a, b) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
);

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Artículos relacionados de un post, en el orden en que él los declara. */
export function getRelatedPosts(post: Post): Post[] {
  return (post.related ?? [])
    .map(getPost)
    .filter((related): related is Post => related !== undefined);
}

/** Fecha legible en español para mostrar junto al artículo. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export type { Post } from "./types";
