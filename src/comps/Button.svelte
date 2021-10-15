<script>
  export let label;
  export let variant = "button";
  export let disabled = false;
</script>

<button {disabled} class={variant} on:click>{label}</button>

<style>
  button {
    border: none;
    padding: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    outline: none;
  }
  .button {
    background-color: rgb(0, 100, 200);
    color: white;
  }
  .button:hover {
    background-color: rgba(0, 100, 200, 0.8);
  }
  .linkbutton {
    color: rgb(0, 100, 200);
  }
  .linkbutton:hover {
    background-color: rgba(0, 100, 200, 0.8);
    color: white;
  }
  button:disabled,
  button:disabled:hover {
    color: rgba(251, 251, 251, 0.6);
    background-color: rgba(51, 51, 51, 0.3);
    cursor: not-allowed;
  }
  @media (prefers-color-scheme: light) {
    .button {
      background-color: hotpink;
      color: white;
    }
    .button:hover {
      background-color: rgba(0, 100, 200, 0.8);
    }
  }
</style>
