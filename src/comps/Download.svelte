<script>
  import { state, step } from "../stores/state.js";
  import { next, downloadFile } from "../utils/helpers";
  import { getComponentCode, getStoryCode } from "../utils/codeSnippets";
  import Button from "./Button.svelte";

  function download() {
    downloadFile(getComponentCode($state), `${$state.name}.svelte`);
    downloadFile(getStoryCode($state), `${$state.name}.stories.svelte`);
  }
</script>

<h1>All Done Skipper!</h1>

<div>
  <Button on:click={download} label="Download" />
</div>
