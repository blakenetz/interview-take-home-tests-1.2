import fs from "node:fs";
import path from "node:path";
import os from "node:os";

async function hasWord(): Promise<boolean> {
  const args = process.argv.slice(2);
  const dictionaryPath =
    args.length === 2 ? args[0] : path.resolve(__dirname, "dictionary.txt");
  const word = args.length === 2 ? args[1] : args[0];

  return new Promise((res, rej) => {
    // validation
    const baseArgError = [
      `Args should be "path to dictionary txt file" "word to spellcheck".`,
      `To use default dictionary, omit the dictionary arg and only pass the word to be spell checked`,
    ].join(os.EOL);

    if (!dictionaryPath) rej(`"Dictionary path" required.\n${baseArgError}`);
    if (!word) rej(`"word" required.\n${baseArgError}`);

    // get dictionary content
    let dictionaryFile: string | undefined;
    try {
      dictionaryFile = fs.readFileSync(dictionaryPath, { encoding: "utf-8" });
    } catch (error) {
      rej(`Unable to find dictionary at "${dictionaryPath}"`);
    }

    // create Set from dictionary, splitting on new lines
    const dictionary = new Set(dictionaryFile?.split(os.EOL));

    // o(1) lookup
    res(dictionary.has(word));
  });
}

hasWord()
  .then((res) => console.log(res ? "Word found!" : "Word not found"))
  .catch((err) => console.error(err));
