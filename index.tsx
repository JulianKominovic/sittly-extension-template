import { ExtensionItems, ExtensionPage } from "sittly-devtools/dist/types";
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

const pages: ExtensionPage[] = [
  {
    name: "ext test",
    route: "/test",
    component: () => {
      return (
        <main className="flex flex-col h-full gap-4 px-4 py-2 overflow-y-auto">
          test
        </main>
      );
    },
    description: "Test page",
    icon: <div>P</div>,
  },
];

export { items, pages };
