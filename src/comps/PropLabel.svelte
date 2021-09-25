<script>
  export let prop;
  export let checked = false;
</script>

<div>
  <label><input type="checkbox" bind:checked value={prop} /> {prop}</label>
  {#if checked}
    <label>Default Value: <input type="text" /></label>
  {/if}
</div>

<style>
  label {
    text-align: start;
  }
  input {
    display: inline-block;
    width: auto;
  }
  div {
    display: grid;
    grid-template-columns: 100px auto;
    gap: 3rem;
    align-items: center;
    min-height: 50px;
  }
</style>
