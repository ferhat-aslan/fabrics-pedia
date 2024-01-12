import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable


export default defineConfig({
  branch:"master",

  // Get this from tina.io
  clientId: "64f4ad86-9c36-4b77-af40-77aceabced93",
  // Get this from tina.io
  token: "00b08c53736f23dbf2a2cc170dc8c62b02d9a9a9",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
