# Spell Checker

## Implementation

I really wanted to work on the [intersection task](../intersection/README.md), but there was one thing in this prompt that I wanted to demonstrate, and that's the use of `Sets` and how it impacts time complexity.

The solution I demonstrated used the `Set.has` lookup. This is `O(1)`, meaning the execution time is _independent_ from the size of the input.

The alternative would be to use an `Array.includes` (or any other Array method), which would have a `O(n)` time complexity, meaning the execution time is _dependant_ on the size of the input. This is because the entire Array would need to be traversed.

🌈 the more you know

## Scripts

There is only a single script:

- `start`

```shell
pnpm run -F spell-check start
# OR
pnpm start:spell-check
```

Arguments:

- `path to dictionary txt file` [string] optional - if omitted, it uses the default dictionary
- `word` [string] required

Example:

```shell
pnpm start:spell-check -- ./packages/test/dictionary.txt hello
# or
pnpm start:spell-check -- hello
```

## Prompt

> Write a program that checks spelling. The input to the program is a dictionary file containing a list of valid words and a file containing the text to be checked.
> You can use the `dictionary.txt` file included here as your dictionary.
>
> The program should run on the command line like so:
>
> ```sh
> my-cool-spellchecker dictionary.txt file-to-check.txt
> # output here
> ```
>
> ### The Features
>
> Your program should support the following features (time permitting):
>
> - The program outputs a list of incorrectly spelled words.
> - For each misspelled word, the program outputs a list of suggested words.
> - The suggested words seem sensible given the context
> - The program prints the misspelled word along with some surrounding context.
> - The program handles proper nouns (person or place names, for example) correctly.
