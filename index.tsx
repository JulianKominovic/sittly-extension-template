import React from "react";
import { ExtensionItems, ExtensionMetadata } from "sittly-devtools/dist/types";
import { sendNotification } from "sittly-devtools/dist/api/notifications";
import { BsAppIndicator } from "react-icons/bs";
/**
 * Read the docs :D
 * @see docs.com
 *
 */
const items: ExtensionItems = () => {
  return [
    {
      title: "Example item",
      description: "My beautiful description",
      icon: <BsAppIndicator />,
      onClick: () => {
        sendNotification({
          title: "Example notification",
          body: "This is a **test!**",
          icon: "dialog-information",
        });
      },
    },
  ];
};

/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: "Example extension",
  description: "This is an example extension",
  icon: <BsAppIndicator />,
  repoUrl: "https://github.com/JulianKominovic/sittly-extension-template",
};

export { items, metadata };
