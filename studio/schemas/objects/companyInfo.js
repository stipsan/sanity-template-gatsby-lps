export default {
  title: "Company Info",
  name: "companyInfo",
  type: "object",
  fieldsets: [
    {
      name: "companyInfo",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "",
      fieldset: "companyInfo",
    },
    {
      name: "icon",
      title: "Icon (favicon and ornament)",
      type: "image",
      description: "",
      fieldset: "companyInfo",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
      description: "",
      fieldset: "companyInfo",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "",
      fieldset: "companyInfo",
    },
    {
      name: "email",
      title: "Contact Form Email",
      type: "string",
      description: "",
      fieldset: "companyInfo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hasClr",
      title: "BCC ContactForm@rynoss.com?",
      type: "boolean",
      layout: "checkbox",
      description: "",
      initialValue: true,
      fieldset: "companyInfo",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      description: "",
      fieldset: "companyInfo",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "",
      fieldset: "companyInfo",
    },
  ],
};
