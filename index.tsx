import { BsClipboard, BsEmojiSmile } from "react-icons/bs";
import * as unicodeEmoji from "unicode-emoji";
import { ExtensionMetadata, ExtensionPages } from "sittly-devtools/dist/types";

const { components, hooks, api, register } = window.SittlyDevtools;
const { Command } = components;
const { useServices } = hooks;
const { clipboard } = api;
const { pasteToCurrentWindow, copyToClipboard } = clipboard;
const emojis = unicodeEmoji.getEmojis();

const pages: ExtensionPages = [
  {
    name: "Emojis",
    route: "/emojis",
    component: () => {
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      );
      return (
        <Command.Grid
          id="emojis-page-grid"
          columns={4}
          items={emojis.map((emoji) => {
            return {
              onClick() {
                pasteToCurrentWindow(emoji.emoji);
              },
              onHighlight() {
                setContextMenuOptions([
                  {
                    title: "Copy",
                    onClick() {
                      copyToClipboard(emoji.emoji);
                    },
                    description: `Copy ${emoji.emoji} to the clipboard`,
                    icon: <BsClipboard />,
                  },
                ]);
              },
              filteringText: emoji.description,
              customChildren: (
                <div
                  style={{
                    fontSize: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {emoji.emoji}
                </div>
              ),
              className: "flex items-center justify-center",
            };
          })}
        />
      );
    },
    description: "A collection of emojis",
    icon: <BsEmojiSmile />,
  },
];

/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: "Emojis",
  description: "Emojis for everyone!",
  icon: <BsEmojiSmile />,
  repoUrl: "https://github.com/JulianKominovic/sittly-emoji-extension",
};

register({
  pages,
  metadata,
});
