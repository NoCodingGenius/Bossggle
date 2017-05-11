# Bossggle## Specifications

These are the basic specs for Bossggle, broken into 5 stages. If you complete these specs, try taking on some of the [Stretch specs](#stretch).

#### Stage 1
- [X] Repo is created on GitHub.
- [X] The site looks the same as in the [mockups](#mockups) (except without the same words/letters/points - those are just placeholders).
- [X] Your repo includes the files: `index.html`, `main.css`, and `bossggle.js`.

#### Stage 2
- [X] Clicking on a letter changes its color to orange.
- [X] Clicking on a letter adds it to the word.
- [X] The word is updated with each new letter.

#### Stage 3
- [X] Pressing the "Submit" button submits the word for points.
- [X] Pressing the "Clear" button clears the word and all selected letters.
- [X] Pressing the "Reset" button clears the word, all selected letters, and generates a new set of letters on the board.

#### Stage 4
- [X] Submitted words are added to the left in reverse chronological order (last word submitted is at the top).
- [X] Submitted words are awarded 9 points per letter.
- [X] Any word / combination of characters is allowed. There is no validation.
- [X] Players start with a score of 0.
- [X] The score is updated after each word is submitted.

#### Stage 5
- [X] There is a link to the source code (your GitHub repo) in the bottom left.
- [X] Repo is published as a [GitHub pages][gh-pages] site.
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch
- [ ] Game uses real Boggle rules:
  - [ ] Letters must all be connected (second letter must be a "neighbor" of the first letter, third letter must be a "neighbor" of the second, and so on).
  - [X] Words must be at least 3 letters long.
  - [x] Game is timed: players have 1 minute to make as many words as possible.
- [X] Words must be real English words; non-English words don't earn points. See [Validating Words](#validating-words) section for more information.
