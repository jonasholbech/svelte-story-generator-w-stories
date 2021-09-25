<script>
  import SetName from "./comps/SetName.svelte";
  import SetProps from "./comps/SetProps.svelte";
  import SetStory from "./comps/SetStory.svelte";
  import Download from "./comps/Download.svelte";
  import { state, step } from "./stores/state.js";
  //skift til https://svelte.dev/tutorial/svelte-component
</script>

<main>
  {#if $step === 1}
    <SetName />
  {/if}
  {#if $step === 2}
    <SetProps />
  {/if}
  {#if $step === 3}
    <SetStory />
  {/if}
  {#if $step === 4}
    <Download />
  {/if}
</main>
