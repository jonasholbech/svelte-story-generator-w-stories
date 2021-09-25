<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SetStory from "../comps/SetStory.svelte";
  import "../../public/global.css";
</script>

<Meta title="Pages/SetStory" component={SetStory} argTypes={{}} />

<Template let:args>
  <main>
    <SetStory {...args} />
  </main>
</Template>

<Story name="default" args={{}} />
