# cowductivity

A dead simple chromium extension to increase productivity. Made for educational purposes and personal convenience.

## How it works

Blocks off youtube (or other site) by redirecting you to another web (could be either a local html or an internet webpage).

## usage

copy `ruleset.def.json` (or the code below), rename it to `ruleset.json`, and specify a link to block and another link to redirect
```json
[
    {
        "id": 1,
        "priority": 1,
        // link to redirect
        "action": { "type": "redirect", "redirect": { "url": "file:///path/to/cowductivity/ea.html" } },
        "condition": {
            // link to block
            "urlFilter": "youtube.com",
            "resourceTypes": ["main_frame"]
        }
    }
]
```
After that, open your chromium-based browser, go to `chrome://extensions/`,
turn on Developer mode, click the "Load unpacked" button on the top left, and select this folder.

