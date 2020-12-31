"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    waitFor
} = require('taiko');
const assert = require("assert");
const { debug } = require('console');
const { waitForDebugger } = require('inspector');
const generatePdf = require('../utils/generatePdf');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

afterStep(async () => {
    await gauge.screenshot();
});

afterScenario(async () => {
    generatePdf();
    await waitFor(5000);
})
