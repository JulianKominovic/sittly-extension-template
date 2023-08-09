import { ExtensionItems } from "sittly-devtools/dist/types";
import React from "react";
import { sendNotification } from "sittly-devtools/dist/api/notifications";
const items: ExtensionItems = () => {
  return [
    {
      title: "Previous",
      description: "Play previous song",
      icon: <div>a</div>,
      onClick: () => {
        sendNotification({
          title: "Test",
          body: "Test",
          icon: "dialog-information",
        });
      },
    },
  ];
};

export default items;
