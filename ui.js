const enableBtn = document.getElementById("enable");
const disableBtn = document.getElementById("disable");
const rulesetId = "ruleset";

enableBtn.onclick = () => {
    enableBtn.disabled = true;
    chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: [rulesetId] }, () => {
        enableBtn.disabled = false;
    });
};

disableBtn.onclick = () => {
    disableBtn.disabled = true;
    chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: [rulesetId] }, () => {
        disableBtn.disabled = false;
    });
}
