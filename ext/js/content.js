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
                "allow_symbol_change": true,
                "save_image": false,
                "hideideas": true,
                "studies": ["MACD@tv-basicstudies",
                    "StochasticRSI@tv-basicstudies",
                    "RSI@tv-basicstudies"],
                "show_popup_button": true,
                "popup_width": "1191",
                "popup_height": "650",
                "referral_id": "5096"
            });
        } else {
        }
    } else {
    }
}