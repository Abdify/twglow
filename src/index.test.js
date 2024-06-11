import path from "path";
import postcss from "postcss";
import examplePlugin from ".";
import { expect, test } from "vitest";
import tailwindcss from "tailwindcss";

// Custom CSS matcher
expect.extend({
  // Compare two CSS strings with all whitespace removed
  // This is probably naive but it's fast and works well enough.
  toMatchCss(received, argument) {
    function stripped(string_) {
      return string_.replaceAll(/\s/g, "").replaceAll(";", "");
    }

    const pass = stripped(received) === stripped(argument);

    return {
      pass,
      actual: received,
      expected: argument,
      message: () => (pass ? "All good!" : "CSS does not match"),
    };
  },
});

// Function to run the plugin
function run(config, css = "@tailwind utilities", plugin = tailwindcss) {
  let { currentTestName } = expect.getState();

  config = {
    ...{
      plugins: [examplePlugin],
      corePlugins: {
        preflight: false,
      },
    },
    ...config,
  };

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
}

test("matchUtilities", () => {
  const config = {
    content: [
      {
        raw: String.raw`<div class="drama-green-500"></div>`,
      },
    ],
  };

  return run(config).then((result) => {
    expect(result.css).toMatchCss(String.raw`
      .drama-green-500 {
        box-shadow: 0px 0px var(--drama-blur) var(--drama-spread) #22c55e;
      }
    `);
  });
});
