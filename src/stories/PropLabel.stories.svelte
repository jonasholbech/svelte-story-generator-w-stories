<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import PropLabel from "../comps/PropLabel.svelte";
  import "../../public/global.css";
</script>

<Meta title="Components/PropLabel" component={PropLabel} argTypes={{}} />

<Template let:args>
  <main>
    <PropLabel {...args} />
  </main>
</Template>

<Story name="unchecked" args={{ prop: "color" }} />
<Story name="checked" args={{ prop: "color", checked: true }} />
