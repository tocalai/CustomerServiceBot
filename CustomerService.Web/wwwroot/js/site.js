function createChatBot(secret, id) {
    BotChat.App({
        directLine: { secret: secret },
        user: { id: 'userid', name: 'Guest' },
        bot: { id: 'botid' },
        locale: 'en-us',
        chatTitle: 'Welcome to online custemor service!',
        resize: 'window'
    }, document.getElementById(id));
}

function closeWindow() {
        close();
}

// utility for ui

function confirmDialog(title, message, proceedYesFunc) {
    $('<div></div>').appendTo('body')
        .html('<div><h6>' + message + '</h6></div>')
        .dialog({
            modal: false,
            title: title,
            zIndex: 10000,
            autoOpen: true,
            width: 'auto',
            resizable: false,
            buttons: {
                Yes: function () {
                    proceedYesFunc();
                    $(this).dialog("close");
                },
                No: function () {
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).remove();
            }
        });
}



// utility
String.prototype.format = function () {
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++) {
        var exp = getStringFormatPlaceHolderRegEx(i);
        txt = txt.replace(exp, (arguments[i] === null ? "" : arguments[i]));
    }
    return cleanStringFormatResult(txt);
}

function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}

function cleanStringFormatResult(txt) {
    if (txt === null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
}
