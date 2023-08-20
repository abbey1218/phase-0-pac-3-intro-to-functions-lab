function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    var responselc = "I can't hear you!";
    var responseuc = "YES INDEED!";
    var responselove2 = "I would love to!";
    if (string === string.toLowerCase()) {
        return responselc;
    }
    else if (string === string.toUpperCase()) {
        return responseuc;
    }
    else if (string === "Let's have dinner together!") {
        return responselove2;
    }
}