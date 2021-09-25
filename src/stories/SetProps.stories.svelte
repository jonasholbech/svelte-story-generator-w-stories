<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SetProps from "../comps/SetProps.svelte";
  import "../../public/global.css";
</script>

<Meta title="Pages/SetProps" component={SetProps} argTypes={{}} />

<Template let:args>
  <main>
    <SetProps {...args} />
  </main>
</Template>

<Story name="default" args={{}} />
