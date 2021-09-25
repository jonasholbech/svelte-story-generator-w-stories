<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../comps/Button.svelte";
</script>

<Meta
  title="components/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    variant: {
      control: { type: "select", options: ["button", "linkbutton"] },
    },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story
  name="Normal"
  args={{
    label: "Button",
  }}
/>

<Story
  name="Linkbutton"
  args={{
    variant: "linkbutton",
    label: "Button",
  }}
/>
<Story
  name="Disabled"
  args={{
    label: "Button",
    disabled: true,
  }}
/>
