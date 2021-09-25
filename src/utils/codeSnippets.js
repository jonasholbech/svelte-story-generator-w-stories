export function getComponentCode(state) {
  const props = state.props
    .map((p) => {
      return `export let ${p};\n`;
    })
    .join("\t");

  return `<script>
    ${props}</script>

<!-- Your HTML goes here -->
<style>
  
</style>`;
}
function quote(value) {
  if (isNaN(value)) {
    return `"${value}"`;
  }
  return value;
}
export function getStoryCode(state) {
  let storyStrings = [];
  state.stories.map((story) => {
    const args = story.props
      .map((prop) => {
        return prop.prop + ": " + quote(prop.value);
      })
      .join(", ");
    storyStrings.push(`<Story name="${story.name}" args={{ ${args} }} />`);
  });
  return `
    <script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import ${state.name} from "./${state.name}.svelte";
  </script>
  
  <Meta title="Example/${state.name}" component={${state.name}} argTypes={{}} />
  
  <Template let:args>
    <${state.name} {...args} />
  </Template>
  
  ${storyStrings.join("\n")}`;
}
