<script>
  import { state, step } from "../stores/state.js";
  import { next } from "../utils/helpers";
  import PropLabel from "./PropLabel.svelte";
  import StoryPreview from "./StoryPreview.svelte";
  import Button from "./Button.svelte";
  import Hints from "./Hints.svelte";
  let name = "";
  let showHelp = false;
  let showStoryNeeded = false;
  let props = [];
  let propList = setPropList();
  function setPropList() {
    return $state.props.map((prop) => {
      return {
        prop,
        checked: false,
      };
    });
  }
  function saveStory() {
    if (name.trim() !== "") {
      let saved = [];
      const propEl = document.querySelectorAll(`input:checked`);
      propEl.forEach((checkbox) => {
        const input = checkbox.parentElement.nextElementSibling.querySelector(
          "input"
        );
        saved.push({ prop: checkbox.value, value: input.value });
        checkbox.checked = false;
      });
      props = saved;
      console.log({ name, props });
      state.set({ ...$state, stories: [...$state.stories, { name, props }] });
      name = "";
      props = [];
      propList = setPropList();
      showStoryNeeded = false;
    } else {
      showHelp = true;
    }
  }
  function submit() {
    if ($state.stories.length > 0) {
      next();
    } else {
      showStoryNeeded = true;
    }
  }
</script>

<h1>Define your stories</h1>

<div>
  <label for="name">Name your story</label>
  <input id="name" type="text" bind:value={name} />
  <Hints show={showHelp}>
    <p>
      You need to give your story a name (how about <a
        href="#/"
        on:click|preventDefault={() => {
          name = "Primary";
          showHelp = false;
        }}>Primary</a
      >?)
    </p>
  </Hints>

  <h2>Arguments</h2>
  {#each propList as prop, i}
    <PropLabel prop={prop.prop} checked={prop.checked} />
  {/each}
</div>

<div class="actions">
  <Button on:click={saveStory} label="Save" />
  <Button on:click={submit} variant="linkbutton" label="Next" />
</div>
<Hints show={showStoryNeeded}>
  <p>You need at least one story</p>
</Hints>
<section class="storylist">
  <h3>Stories</h3>
  {#each $state.stories as story}
    <StoryPreview {story} />
  {/each}
</section>

<style>
  h2 {
    margin-top: 2rem;
  }
  h3 {
    grid-column: 1/-1;
  }
  .storylist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    margin: auto;
  }
  .actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
