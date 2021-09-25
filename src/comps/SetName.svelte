<script>
  import { state, step } from "../stores/state.js";
  import { next, sanitizeComponentName } from "../utils/helpers";
  import Button from "./Button.svelte";
  import Hints from "./Hints.svelte";

  let showHelp = false;
  function input(e) {
    e.target.value = sanitizeComponentName(e.target.value);
    state.set({
      ...$state,
      name: e.target.value,
    });
  }
  function validate(e) {
    if (e.target.checkValidity()) {
      next();
    } else {
      showHelp = true;
    }
  }
</script>

<h1>Name your component</h1>
<h2>
  &lt;{$state.name != undefined ? $state.name : ""}&nbsp;/&gt;
</h2>
<form novalidate on:submit|preventDefault={validate}>
  <input
    pattern="[A-Z][a-z]+([A-Z][a-z]*)*"
    required
    type="text"
    on:input={input}
  />

  <Hints show={showHelp}>
    <p>You component must start with a CAPITAL letter</p>
    <p>Followed by one or more lower case letters</p>
  </Hints>

  <Button variant="linkbutton" label="Next" />
</form>

<style>
  h2 {
    font-family: "Courier New", Courier, monospace;
    font-size: 2rem;
  }
</style>
