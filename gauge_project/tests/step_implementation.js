/* globals gauge*/
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

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Add task <item>", async (item) => {
    await write(item, into(textBox("What needs to be done?")));
    debugger;
    await press('Enter');
});

step("Open todo application", async function () {
    await goto("todo.taiko.dev");
});

step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});
