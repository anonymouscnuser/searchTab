window.onload = function () {
    console.log("Hello from the new tab page!");

    const inputs = [
        document.getElementById("query-google"),
        document.getElementById("query-baidu"),
        document.getElementById("query-bing")
    ];
    const buttons = [
        document.getElementById("search-google-button"),
        document.getElementById("search-baidu-button"),
        document.getElementById("search-bing-button")
    ];
    const searchUrlPatterns = [
        "https://www.google.com/search?q={0}",
        "https://www.baidu.com/s?wd={0}",
        "https://www.bing.com/search?q={0}"
    ];
    const searchShortcut = {
        "enter": -1,
        "ctrl+enter": 0,
        "alt+enter": 1,
        "shift+enter": 2,
    }

    function search(index, query) {
        rememberSearchEngine(index);

        var url = searchUrlPatterns[index].replace("{0}", encodeURIComponent(query));
        updateTab(url);
    }

    // Add event listener to all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var query = inputs[i].value;
            if (query.length > 0) {
                search(i, query);
            }
        });
    }

    // Add event listener to all inputs
    for (let i = 0; i < inputs.length; i++) {
        // When user press enter, trigger the button click event;
        inputs[i].addEventListener("keydown", function (event) {
            let buttonIndexToClick = null;
            if (event.keyCode === 13 && event.ctrlKey) {
                event.preventDefault();
                buttonIndexToClick = searchShortcut['ctrl+enter'];
            } else if (event.keyCode === 13 && event.altKey) {
                event.preventDefault();
                buttonIndexToClick = searchShortcut['alt+enter'];
            } else if (event.keyCode === 13 && event.shiftKey) {
                event.preventDefault();
                buttonIndexToClick = searchShortcut['shift+enter'];
            } else if (event.keyCode === 13) {
                event.preventDefault();
                buttonIndexToClick = searchShortcut['enter'];
            }
            if (buttonIndexToClick === null) return;
            if (buttonIndexToClick === -1) buttonIndexToClick = i;
            buttons[buttonIndexToClick].click();
        });
        // When user press tab, focus on the next input; When user press shift+tab, focus on the previous input
        inputs[i].addEventListener("keydown", function (event) {
            if (event.keyCode === 9 && event.shiftKey) {
                event.preventDefault();
                inputs[(i + inputs.length - 1) % inputs.length].focus();
            } else if (event.keyCode === 9) {
                event.preventDefault();
                inputs[(i + 1) % inputs.length].focus();
            }
        });
    }

    // Sync all inputs' value
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", function () {
            for (let j = 0; j < inputs.length; j++) {
                if (j !== i) {
                    inputs[j].value = inputs[i].value;
                }
            }
        });
    }


    function initAutoFocus() {
        // Autofocus on load
        autoFocus();

        document.body.addEventListener("click", function (event) {
            // If user click on the page, autofocus on the input
            // else if user click on the input, do nothing
            if (event.target.tagName !== "INPUT") {
                autoFocus();
            }

            // autoFocus();
            document.body.removeEventListener("click", arguments.callee);
            event.stopPropagation();
        });

        /**
         Autofocus on load
         */
        function autoFocus() {
            chrome.storage.sync.get("searchEngine", function (data) {
                if (data.searchEngine === undefined) {
                    data.searchEngine = 0;
                }
                inputs[data.searchEngine].focus();
            })
        }
    }

    initAutoFocus();

    function updateTab(url) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.update(activeTab.id, {url});
        });
    }

    function rememberSearchEngine(index) {
        chrome.storage.sync.set({"searchEngine": index});
    }
};

