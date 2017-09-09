const regex = /^https?:\/\/(?:[^./?#]+\.)?bittrex\.com/g;

var ticker = document.location.href.split("=")[1];
var tticker = ticker.split("-");
ticker = "Bittrex:" + tticker[1] + tticker[0];
console.log(ticker);
//bitChart = document.getElementsByClassName("chart-wrapper");
//bitChart.innerHTML += '<div height="600px" id="tv_chart"></div>';
$(".chart-wrapper iframe").hide();
$(".chart-wrapper").append('<div style="height: 600px" id="tv_chart"></div>');
//var iFrame = bitChart[0].getElementsByTagName("iframe")[0];
//console.log(iFrame);
//iFrame.style.display = "none";


window.onload = function () {
    if (document.location.host === "bittrex.com") {
        bitChart = document.getElementsByClassName("chart-wrapper");
        if (bitChart !== null) {
            chrome.storage.sync.get("savedIndicators", function (indicators) {
                console.log(indicators);
                if ((indicators && indicators.length === 0) || indicators === undefined || jQuery.isEmptyObject(indicators)) {
                    indicators = [];
                    console.log(studyObj["Relative Strength Index"]);
                    indicators.push(studyObj["Relative Strength Index"]);
                    indicators.push(studyObj["MACD"]);
                    indicators.push(studyObj["Stochastic RSI"]);
                    console.log("push");
                    chrome.storage.sync.set({"savedIndicators": indicators}, function () {});
                } else {
                    console.log("error");
                    indicators = indicators["savedIndicators"];
                }
                console.log(indicators);
                var studies = [];
                $.each(indicators, function (index, value) {
                    var study = new Study(value.name, value.techName);
                    console.log(study);
                    console.log(study.getTechName());
                    studies.push(study.getTechName());
                });
                console.log(studies);
//            while (bitChart[0].hasChildNodes()) {
//                bitChart[0].removeChild(bitChart[0].firstChild);
//            }
                new TradingView.widget({
                    "container_id": 'tv_chart',
                    "autosize": true,
                    "height": 600,
                    "symbol": ticker,
                    "interval": "60",
                    "timezone": "exchange",
                    "theme": "White",
                    "style": "1",
                    "toolbar_bg": "#f1f3f6",
                    "withdateranges": true,
                    "hide_side_toolbar": false,
                    "allow_symbol_change": false,
                    "save_image": false,
                    "hideideas": true,
                    "studies": studies,
                    "show_popup_button": true,
                    "popup_width": "1191",
                    "popup_height": "650",
                    "referral_id": "5096"
                });
            });

        } else {
        }
    } else {
    }
}