/*
 *   @param {jQuery} $ 
 * 
 */

/* global studyObj */

var currentIndicators;
var indicatorContainer = $("#indContainer");
var dropdown = $("#listOfStudies");





document.addEventListener('DOMContentLoaded', function () {

    for (const key of Object.keys(studyObj)) {
        var study = studyObj[key];
        $("#listOfStudies").append($('<option>', {
            value: key,
            text: study.name
        }));
    }

    syncList();

    $('#listOfStudies').change(function () {
        var value = $(this).val();
        var study = studyObj[value];
        if (currentIndicators.length < 3) {
            console.log("push");
            console.log(study);
            currentIndicators.push(study);
        }
        console.log(currentIndicators);
        updateList()
    });


    $("body").on('click', ".removeOption", function () {
        var index = $(this).data("index");
        console.log(index);
//        $(this).parent("optionContainer").remove();
        currentIndicators.splice(index, 1);
        console.log(currentIndicators);
        $(".op" + index).remove();
        chrome.storage.sync.set({"savedIndicators": currentIndicators}, function () {});
        syncList();
    });
//    $("span").on("click", function () {
//        alert("fuck you");
//    });

});

function updateList() {
    chrome.storage.sync.set({"savedIndicators": currentIndicators}, function () {});
    console.log(currentIndicators);
    console.log("update");
    syncList();
}

function syncList() {
    $("#indContainer").html("");
    chrome.storage.sync.get("savedIndicators", function (indicators) {
        console.log(indicators);
        if (indicators && indicators.length === 0) {
            indicators = [];
            console.log(studyObj["Relative Strength Index"]);
            indicators.push(studyObj["Relative Strength Index"]);
            indicators.push(studyObj["MACD"]);
            indicators.push(studyObj["Stochastic RSI"]);
            console.log("push");
            chrome.storage.sync.set({"savedIndicators": indicators}, function () {});
        } else {
            indicators = indicators["savedIndicators"];
        }

        /*
         * @param {Study} value
         */
        console.log(indicators);
        $.each(indicators, function (index, value) {
            console.log(index);
            console.log(value);
            var appendDiv = $("<div>", {"class": "optionContainer op" + index, "data-index": index});
            var removeSpan = $("<a>", {"class": "removeOption", "data-index": index, "href": "#"});
            removeSpan.text("X");
            appendDiv.append(removeSpan);
            var dataSpan = $("<span>");
            dataSpan.text(value.name);
            appendDiv.append(dataSpan);
            $("#indContainer").append(appendDiv);
        });
        currentIndicators = indicators;
    });
}