<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SetName from "../comps/SetName.svelte";
  import "../../public/global.css";
</script>

<Meta title="Pages/SetName" component={SetName} argTypes={{}} />

<Template let:args>
  <main>
    <SetName {...args} />
  </main>
</Template>

<Story name="default" args={{}} />
