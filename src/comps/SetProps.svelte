<script>
  import { state, step } from "../stores/state.js";
  import { next } from "../utils/helpers";
  import Button from "./Button.svelte";
  let value = "";
  function validate() {
    const nextProps = value.split("\n").filter((row) => row.trim() !== "");
    console.log(nextProps);
    state.set({ ...$state, props: nextProps });
    next();
  }
</script>

<h1>Will your component receive props?</h1>
<p>Add one per line</p>
<textarea bind:value />

<Button variant="linkbutton" on:click={validate} label="Next" />

<style>
  textarea {
    font-family: "Courier New", Courier, monospace;
  }
</style>
