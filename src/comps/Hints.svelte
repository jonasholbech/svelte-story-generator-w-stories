<script>
  export let show = false;
</script>

{#if show}
  <section class="hints">
    <slot><p>Some message</p></slot>
  </section>
{/if}

<style>
  .hints {
    font-size: 0.8rem;
    font-weight: bold;
  }
</style>
