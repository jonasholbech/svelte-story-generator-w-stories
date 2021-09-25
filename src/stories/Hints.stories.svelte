<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Hints from "../comps/Hints.svelte";
</script>

<Meta title="components/Hints" component={Hints} />

<Template let:args>
  <Hints {...args} />
</Template>

<Story
  name="Shown"
  args={{
    show: true,
  }}
/>
