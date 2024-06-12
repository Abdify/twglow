import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const twGlow = plugin.withOptions(
  function () {
    // const className = options ? options.className : "markdown";

    return function ({ matchUtilities, theme }) {
      /**
       * Dynamic utilities
       * https://tailwindcss.com/docs/plugins#dynamic-utilities
       */

      matchUtilities(
        {
          drama: (value) => {
            return {
              // filter: `drop-shadow(0px 0px var(--drama-spread) ${value})`,
              "--tw-drop-shadow": `drop-shadow(0px 0px var(--drama-spread) ${value})`,
              filter:
                "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
            };
          },
          "border-glow": (value) => {
            return {
              "border-color": value,
              "box-shadow": `inset 0px 0px 0.5em 0px ${value}, 0px 0px 0.5em 0px ${value}`,
            };
          },
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      );

      matchUtilities(
        {
          drama: (spread) => {
            const spreadNumber = Number(spread.replace("rem", ""));

            let blur;

            if (spreadNumber <= 0.25) blur = `${spreadNumber * 15}rem`;
            else if (spreadNumber <= 1) blur = `${spreadNumber * 10}rem`;
            else blur = `${spreadNumber * 7}rem`;

            return {
              "--drama-spread": spread,
              "--drama-blur": blur,
            };
          },
        },
        {
          values: theme("margin"),
        }
      );
    };
  },
  function () {
    /**
     * Provide default values
     */
    return {
      theme: {},
    };
  }
);

export default twGlow;
