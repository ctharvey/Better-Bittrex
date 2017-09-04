var studies = new Object();
studies["Accumulation/Distribution"] = "ACCD";
studies["ADR"] = "studyADR";
studies["Aroon"] = "AROON";
studies["Average True Range"] = "ATR";
studies["Awesome Oscillator"] = "AwesomeOscillator";
studies["Bollinger Bands"] = "BB";
studies["Bollinger Bands %B"] = "BollingerBandsR";
studies["Bollinger Bands Width"] = "BollingerBandsWidth";
studies["Chaikin Money Flow"] = "Chaikin Money Flow";
studies["Chaikin Oscillator"] = "Chaikin Oscillator";
studies["Chande Momentum Oscillator"] = "chandeMO";
studies["Choppiness Index"] = "ChoppinessIndex";
studies["Commodity Channel Index"] = "CCI";
studies["ConnorsRSI"] = "CRSI";
studies["Correlation Coefficient"] = "CorrelationCoefficient";
studies["Detrended Price Oscillator"] = "DetrendedPriceOscillator";
studies["Directional Movement"] = "DM";
studies["Donchian Channels"] = "DONCH";
studies["Double EMA"] = "DoubleEMA";
studies["Ease Of Movement"] = "EaseOfMovement";
studies["Elder's Force Index"] = "EFI";
studies["Elliott Wave"] = "ElliottWave";
studies["Envelope"] = "ENV";
studies["Fisher Transform"] = "FisherTransform";
studies["Historical Volatility"] = "HV";
studies["Hull Moving Average"] = "hullMA";
studies["Ichimoku Cloud"] = "IchimokuCloud";
studies["Keltner Channels"] = "KLTNR";
studies["Know Sure Thing"] = "KST";
studies["Linear Regression"] = "LinearRegression";
studies["MACD"] = "MACD";
studies["Momentum"] = "MOM";
studies["Money Flow"] = "MF";
studies["Moon Phases"] = "MoonPhases";
studies["Moving Average"] = "MASimple";
studies["Moving Average Exponentional"] = "MAExp";
studies["Moving Average Weighted"] = "MAWeighted";
studies["On Balance Volume"] = "OBV";
studies["Parabolic SAR"] = "PSAR";
studies["Pivot Points High Low"] = "PivotPointsHighLow";
studies["Pivot Points Standard"] = "PivotPointsStandard";
studies["Price Oscillator"] = "PriceOsc";
studies["Price Volume Trend"] = "PriceVolumeTrend";
studies["Rate Of Change"] = "ROC";
studies["Relative Strength Index"] = "RSI";
studies["Relative Vigor Index"] = "VigorIndex";
studies["Relative Volatility Index"] = "VolatilityIndex";
studies["SMI Ergodic Indicator"] = "SMIErgodicIndicator";
studies["SMI Ergodic Oscillator"] = "SMIErgodicOscillator";
studies["Stochastic"] = "Stochastic";
studies["Stochastic RSI"] = "StochasticRSI";
studies["Triple EMA"] = "TripleEMA";
studies["TRIX"] = "Trix";
studies["Ultimate Oscillator"] = "UltimateOsc";
studies["Volatility Stop"] = "VSTOP";
studies["Volume"] = "Volume";
studies["VWAP"] = "VWAP";
studies["VWMA"] = "MAVolumeWeighted";
studies["Williams %R"] = "WilliamR";
studies["Williams Alligator"] = "WilliamsAlligator";
studies["Williams Fractal"] = "WilliamsFractal";
studies["Zig Zag"] = "ZigZag";

var studyObj = [];

console.log(studies);

for (const key of Object.keys(studies)) {
    studyObj[key] = new Study(key, studies[key]);
}

function Study(name, techName) {
    this.name = name;
    this.techName = techName;

    this.getTechName = function () {
        return this.techName + "@tv-basicstudies";
    }
}