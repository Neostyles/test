"use strict";

import data from "./data/data.json" with { type: "json" };

const msg = data.text;

const title = document.createElement("h1");
  title.innerText = msg;

const main = document.querySelector("main");
  main.appendChild(title);