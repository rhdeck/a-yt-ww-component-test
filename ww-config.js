export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    message: {
      label: {
        en: "Message",
      },
      type: "Text",
      defaultValue: "Hello World",
      bindable: true,
    },
  },
  triggerEvents: [
    {
      name: "customHover",
      label: {
        en: "Custom Hover",
        fr: "Le Custom Hover",
      },
    },
    {
      name: "customClick",
      label: {
        en: "Custom Click",
        fr: "Le Custom Click",
      },
    },
  ],
};
