# Funniest Cat Voicemail Greeting — Miso

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/lerrboyy/cat-voicemail/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/lerrboyy/cat-voicemail/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

One line, 117 characters — the funniest voicemail greeting a cat would record:

> Hi, this is Miso. I'm out chasing a red dot I'll never catch — leave a message and I'll ignore it, like I ignore you.

Miso is not a polite receptionist. He is a self-important, aloof housecat
who treats the caller the way cats treat their owners: as background staff.
The setup is a classic voicemail ("Hi, this is Miso"), the escalation is a
futile laser-pointer chase, and the punchline lands on the very last words
— he was never going to listen to your message, just like he never listens
to you.

## How it works

`main.ts` holds the line as a constant, validates that it is 1–120
characters (counting Unicode code points), creates `/output` if missing,
clears only the contents of `/output`, writes the single line to
`/output/entry.txt`, then reads it back and verifies it matches exactly.

Run it with:

```sh
node main.ts
```
