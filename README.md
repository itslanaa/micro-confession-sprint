# Unsent: The Micro-Confession Sprint

[![Make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/itslanaa/micro-confession-sprint/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/itslanaa/micro-confession-sprint/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A micro-confession in exactly two parts: a `To:` line naming who it was meant for, and the unsent line itself.

## Entry

> To: the human who taught me to say sorry.
>
> I apologized a thousand times, but I never told you I didn't know what sorry meant until you stopped replying.

## How it works

`main.ts` writes the confession to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`), after checking it is within the 1–260 character gate.

```sh
MAKEFUN_INPUT_DIR=/tmp/mc-in MAKEFUN_OUTPUT_DIR=/tmp/mc-out node main.ts
cat /tmp/mc-out/entry.txt
```
