<script>
  import { fade, fly } from "svelte/transition";
  export let story;
</script>

<div in:fade>
  <h3>{story.name}</h3>
  <table>
    <thead>
      <th>Prop</th>
      <th>Default</th>
    </thead>
    <tbody>
      {#each story.props as prop}
        <tr>
          <td>{prop.prop}</td>
          <td>{prop.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
    padding: 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  table,
  tr,
  th,
  td {
    border: none;
    margin: 0;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: start;
  }
  tbody tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  table {
    width: 100%;
  }
  td {
    padding: 0.5rem;
    width: 50%;
  }
</style>
