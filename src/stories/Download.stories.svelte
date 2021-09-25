<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Download from "../comps/Download.svelte";
  import "../../public/global.css";
</script>

<Meta title="Pages/Download" component={Download} argTypes={{}} />

<Template let:args>
  <main>
    <Download {...args} />
  </main>
</Template>

<Story name="default" args={{}} />
