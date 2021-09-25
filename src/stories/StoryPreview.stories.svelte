<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import StoryPreview from "../comps/StoryPreview.svelte";
  import "../../public/global.css";
</script>

<Meta title="Components/StoryPreview" component={StoryPreview} argTypes={{}} />

<Template let:args>
  <main>
    <StoryPreview {...args} />
  </main>
</Template>

<Story
  name="single"
  args={{
    story: {
      name: "Primary",
      props: [
        {
          prop: "color",
          value: "red",
        },
        {
          prop: "spacing",
          value: 6,
        },
      ],
    },
  }}
/>
