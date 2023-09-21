# Demo of GitHub Copilot writing a Lotto API

This repository contains the prerequisite package.json for writing a simple API for a Lotto game API in Javascript. It uses ESM style modules, hence the files are named `.mjs`. This demo was tested with Node 18.

The goal is to write a REST API using [Express](https://expressjs.com/). Copilot completions are especially powerful in test-driven development so the project also includes the BDD testing framework [Jest](https://jestjs.io).

We are going to implement two endpoints:

- GET /rounds/current which returns the current "round" of the game, and in particular the closing date of the round.
- POST /rounds/current/bet which allows the user to post a row of numbers.

This repository includes the [presentation](./GitHub%20Copilot%20demo.pdf) if you want to watch on your own screen.

During this implementation, we will examine the various completions. In order for the demo to be more accessible, I have updated my `settings.json` to set a distinct color for the suggestions:

```json
    "workbench.colorCustomizations": {
        "editorGhostText.foreground": "#80ffff"
    },
```

The repository also contains two branches called [take-1](https://github.com/bittrance/github-copilot-demo/tree/take-1) and [take-2](https://github.com/bittrance/github-copilot-demo/tree/take-2) which displays the result of two sessions running the demo, which illustrates the butterfly effect of idiosyncratic variations propagating through the demo.
