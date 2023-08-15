import {
  ExtensionContextMenuItems,
  ExtensionItems,
  ExtensionMetadata,
  ExtensionNoResultItems,
  ExtensionPages,
} from "sittly-devtools/dist/types";
import sittlyDevtools from "sittly-devtools";
declare global {
  interface Window {
    SittlyDevtools: typeof sittlyDevtools;
  }
}

export {};
