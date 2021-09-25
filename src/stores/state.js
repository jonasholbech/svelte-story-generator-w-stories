import { writable } from "svelte/store";

export const state = writable({
  name: "",
  props: ["color", "title"],
  stories: [],
});
export const step = writable(1);
