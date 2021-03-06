import "@slum-ui/button";
import { html } from "lit-html";

export default {
  title: "SlumUI/Button",
  args: {
    label: "SlumButton",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "cyan-solid",
          "cyan-outlined",
          "cyan-transparent",
          "pink-solid",
          "pink-outlined",
          "pink-transparent",
          "purple-transparent",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    href: {
      control: {
        type: "input"
      }
    }
  },
};

const Template = (args) => {
  return html`
    <slum-button
      label=${args.label}
      variant="${args.variant}"
      size="${args.size}"
      href="${args.href}"
      >${args.label}</slum-button
    >
  `;
};

export const SlumButton = Template.bind({});
