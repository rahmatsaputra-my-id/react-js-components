'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Colors = {
    backgroundColor: '#F8F8F8',
    backgroundColorModal: 'rgba(0, 26, 65, 0.7)',
    black: '#000000',
    black100: '#1A1A1A',
    blackTransparent15: 'rgba(0, 0, 0, 0.15)',
    blackTransparent7: 'rgba(0, 0, 0, 0.7)',
    blackTransparent85: 'rgba(0, 0, 0, 0.85)',
    blue: '#227AEA',
    blueTransparent: 'rgba(93, 102, 147, 0.5)',
    boxShadow: '1px 2px 9px #000',
    boxShadowCard: '1px 2px 9px rgba(0, 0, 0, 0.3)',
    boxShadowImage: '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
    brownishGrey: '#646464',
    darkBlue: '#1D242F',
    darkBlueBlack: '#242426',
    darkBlueWhite: '#252F3C',
    gradientWhite: 'linear-gradient(#FFFFFF, transparent)',
    green1: '#008388',
    green100: '#00986D',
    green30: '#D8FDD4',
    green40: '#1DAA61',
    green50: '#C6E4DC',
    green60: '#3D9A62',
    grey1: '#f2f2f2',
    grey100: '#4E5764',
    grey2: '#D8D8D8',
    grey3: '#979797',
    grey4: '#FCFCFC',
    grey5: '#B0B0B0',
    grey6: '#E7E7E7',
    grey7: '#E5E5E5',
    grey75: '#A7B7C5',
    grey76: '#707072',
    grey8: 'rgba(42, 42, 42, 0.5)',
    grey80: '#66707A',
    grey9: '#F6F6F6',
    grey90: '#C7C7C7',
    greyAntiFlash: '#f2f2f4',
    lightishRed: '#FF343A',
    orange: '#E28612',
    orange10: '#F5F1EB',
    orange20: '#FFEED2',
    orange30: '#F6F1EA',
    orange50: '#FFD8A1',
    palePeach: '#FFD6A2',
    pink: '#F2EBEC',
    platinum: '#E9E4E4',
    red: '#D45757',
    red100: '#FF4C47',
    red150: '#C52025',
    red200: '#A56767',
    red240: '#6c394f',
    red50: '#FABDBE',
    red60: '#D90B10',
    redTransparent: '#E4DAD9',
    shadow: 'rgba(32, 32, 35, 0.1)',
    shadow10: 'rgba(26, 26, 26, 0.7)',
    white: '#FFFFFF',
    white25: '#F8F8F8',
    white50: '#F5F9FC',
    white75: '#E6E6E6',
    whiteTransparent: 'rgba(250, 250, 250, 1)',
    whiteTransparent15: 'rgba(250, 250, 250, 0.15)',
    whiteTransparent25: 'rgba(250, 250, 250, 0.25)',
    whiteTransparent35: 'rgba(250, 250, 250, 0.35)',
    whiteTransparent45: 'rgba(250, 250, 250, 0.45)',
    whiteTransparent55: 'rgba(250, 250, 250, 0.55)',
    whiteTransparent65: 'rgba(250, 250, 250, 0.65)',
    whiteTransparent75: 'rgba(250, 250, 250, 0.75)',
    whiteTransparent85: 'rgba(250, 250, 250, 0.85)',
    whiteTransparent95: 'rgba(250, 250, 250, 0.95)',
    yellow: '#FFFF00',
    yellow40: '#FDF76F',
    yellow50: '#EED202',
    theShop: {
        primary: '#2E3135',
        seconday: '#FFFFFF',
        tertiary: '#F6F6F6',
    },
    manise: {
        primary: '#D45757',
        seconday: '#FFFF00',
        tertiary: '#F6F6F6',
        fourth: '#E28612',
        fifth: '#00986D',
    },
};

var styles$7 = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: 1,
        transition: 'opacity 300ms ease',
    },
};

var View = function (_a) {
    var _b = _a.bottom, bottom = _b === void 0 ? 0 : _b, children = _a.children, _c = _a.display, display = _c === void 0 ? 'flex' : _c, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'column' : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, _f = _a.right, right = _f === void 0 ? 0 : _f, _g = _a.style, style = _g === void 0 ? {} : _g, _h = _a.top, top = _h === void 0 ? 0 : _h, props = __rest(_a, ["bottom", "children", "display", "flexDirection", "left", "right", "style", "top"]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", __assign({ style: __assign({ display: display, flexDirection: flexDirection, marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left }, style) }, props, { children: children })) }));
};

var isMobileDisplay = window.innerWidth <= 768;
var styles$6 = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        opacity: 1,
        transition: 'opacity 300ms ease',
    },
    loadingSpinnerSectionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerHeight,
    },
    loadingSpinnerPageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: isMobileDisplay ? '83vh' : '100vh',
    },
    loadingSpinnerPageContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingIcon: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -145,
    },
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-spinner {\n  width: 15px;\n  height: 15px;\n  /* Light grey */\n  border: 4px solid #ffffff;\n  /* Black */\n  border-top: 4px solid #000000;\n  border-radius: 50%;\n  animation: spinner 1s linear infinite;\n}\n\n.loading-spinner-section {\n  width: 120px;\n  height: 120px;\n  /* Light grey */\n  border: 15px solid rgb(220, 220, 226);\n  /* Black */\n  border-top: 15px solid #000000;\n  border-radius: 50%;\n  animation: spinner 1.5s linear infinite;\n}\n\n.loading-spinner-pages {\n  width: 130px;\n  height: 130px;\n  border: 20px solid rgb(220, 220, 226);\n  border-top: 20px solid #000000;\n  border-radius: 50%;\n  animation: spinner 1.5s linear infinite;\n}\n";
styleInject(css_248z);

var LoadingSpinner = function (_a) {
    var _b = _a.loadingType, loadingType = _b === void 0 ? false : _b, _c = _a.loadingIcon, loadingIcon = _c === void 0 ? '' : _c;
    var _renderSpinnerComponent = function () { return jsxRuntime.jsx("div", { className: "loading-spinner" }); };
    var _renderSpinnerSection = function () { return (jsxRuntime.jsx(View, __assign({ style: styles$6.loadingSpinnerSectionContainer }, { children: jsxRuntime.jsx("div", { className: "loading-spinner-section" }) }))); };
    var _renderSpinnerPage = function () { return (jsxRuntime.jsx(View, __assign({ style: styles$6.loadingSpinnerPageContainer }, { children: jsxRuntime.jsxs(View, __assign({ style: styles$6.loadingSpinnerPageContent }, { children: [jsxRuntime.jsx("div", { className: "loading-spinner-pages" }), loadingIcon ? (jsxRuntime.jsx("img", { style: styles$6.loadingIcon, src: loadingIcon, alt: '' })) : null] })) }))); };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: loadingType === 'page'
            ? _renderSpinnerPage()
            : loadingType === 'section'
                ? _renderSpinnerSection()
                : _renderSpinnerComponent() }));
};

var Button = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? Colors.black : _b, _c = _a.bold, bold = _c === void 0 ? false : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? 8 : _d, _e = _a.bottom, bottom = _e === void 0 ? 0 : _e, _f = _a.center, center = _f === void 0 ? true : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.isLoading, isLoading = _h === void 0 ? false : _h, label = _a.label, _j = _a.left, left = _j === void 0 ? 0 : _j, _k = _a.onPress, onPress = _k === void 0 ? function () { } : _k, _l = _a.padding, padding = _l === void 0 ? 16 : _l, _m = _a.right, right = _m === void 0 ? 0 : _m, _o = _a.size, size = _o === void 0 ? 16 : _o, _p = _a.style, style = _p === void 0 ? {} : _p, _q = _a.top, top = _q === void 0 ? 0 : _q, _r = _a.transparent, transparent = _r === void 0 ? false : _r, _s = _a.outlineColor, outlineColor = _s === void 0 ? false : _s, props = __rest(_a, ["backgroundColor", "bold", "borderRadius", "bottom", "center", "disabled", "isLoading", "label", "left", "onPress", "padding", "right", "size", "style", "top", "transparent", "outlineColor"]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("button", __assign({ style: __assign(__assign({ backgroundColor: disabled || isLoading
                    ? Colors.grey2
                    : transparent || outlineColor
                        ? 'transparent'
                        : backgroundColor
                            ? backgroundColor
                            : Colors.black, border: outlineColor ? '1px solid rgba(0, 0, 0, 1)' : 'none', borderRadius: borderRadius, color: outlineColor ? outlineColor : Colors.white, fontSize: size, fontWeight: bold && 'bold', marginBottom: bottom, marginLeft: left, marginRight: right, marginTop: top, outline: !outlineColor && 'none', padding: padding, textAlign: center ? 'center' : 'left' }, style), styles$7.content), disabled: isLoading || disabled, onClick: onPress, type: 'submit' }, props, { children: [!isLoading ? label : null, isLoading && jsxRuntime.jsx(LoadingSpinner, { loadingType: false })] })) }));
};

var styles$5 = {
    container: {
        flex: 1,
        minHeight: '100vh',
        alignItems: 'center',
    },
    content: {
        maxWidth: window.innerWidth > 426 ? 1200 : 425,
        flex: 1,
        width: '100%',
    },
};

var Container = function (_a) {
    var children = _a.children, containerStyle = _a.containerStyle, contentStyle = _a.contentStyle;
    return (jsxRuntime.jsx(View, __assign({ style: __assign(__assign({}, styles$5.container), { containerStyle: containerStyle }) }, { children: jsxRuntime.jsx(View, __assign({ style: __assign(__assign({}, styles$5.content), { contentStyle: contentStyle }) }, { children: children })) })));
};

var Text = function (_a) {
    var _b = _a.bottom, bottom = _b === void 0 ? 0 : _b, _c = _a.center, center = _c === void 0 ? false : _c, children = _a.children, _d = _a.color, color = _d === void 0 ? Colors.black : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, lineHeight = _a.lineHeight, _f = _a.right, right = _f === void 0 ? 0 : _f, _g = _a.size, size = _g === void 0 ? 16 : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.top, top = _j === void 0 ? 0 : _j, props = __rest(_a, ["bottom", "center", "children", "color", "left", "lineHeight", "right", "size", "style", "top"]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("p", __assign({ style: __assign({ marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left, color: color, fontSize: size, lineHeight: lineHeight, textAlign: center ? 'center' : 'left' }, style) }, props, { children: children })) }));
};

var styles$4 = {
    cardWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    cardBox: {
        backgroundColor: Colors.whiteTransparent,
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.red200,
    },
    cardTitle: {
        color: Colors.red200,
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 1,
        marginBottom: 4,
    },
    cardDescription: {
        color: Colors.red200,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 1,
    },
};

var Countdown = function (_a) {
    var _b;
    var cardStyle = _a.cardStyle, containerStyle = _a.containerStyle, fontStyle = _a.fontStyle, weddingDate = _a.weddingDate;
    var _c = react.useState(0), days = _c[0], setDays = _c[1];
    var _d = react.useState(0), hours = _d[0], setHours = _d[1];
    var _e = react.useState(0), minutes = _e[0], setMinutes = _e[1];
    var _f = react.useState(0), seconds = _f[0], setSeconds = _f[1];
    var data = [
        {
            label: 'Hari',
            value: days,
        },
        {
            label: 'Jam',
            value: hours,
        },
        {
            label: 'Menit',
            value: minutes,
        },
        {
            label: 'Detik',
            value: seconds,
        },
    ];
    react.useEffect(function () {
        var getTimeRemaining = function () {
            var _a;
            var now = new Date().getTime();
            var countdownDate = new Date((_a = weddingDate === null || weddingDate === void 0 ? void 0 : weddingDate.reception) === null || _a === void 0 ? void 0 : _a.start).getTime();
            var timeDifference = countdownDate - now;
            var oneDay = 1000 * 60 * 60 * 24;
            var oneHour = 1000 * 60 * 60;
            var oneMinute = 1000 * 60;
            setDays(Math.floor(timeDifference / oneDay));
            setHours(Math.floor((timeDifference % oneDay) / oneHour));
            setMinutes(Math.floor((timeDifference % oneHour) / oneMinute));
            setSeconds(Math.floor((timeDifference % oneMinute) / 1000));
        };
        var intervalId = setInterval(getTimeRemaining, 1000);
        return function () { return clearInterval(intervalId); };
    }, [(_b = weddingDate === null || weddingDate === void 0 ? void 0 : weddingDate.reception) === null || _b === void 0 ? void 0 : _b.start]);
    var renderCardBox = function (_a, idx) {
        var label = _a.label, value = _a.value;
        return (jsxRuntime.jsxs(View, __assign({ style: __assign(__assign({}, styles$4.cardBox), { cardStyle: cardStyle, marginRight: idx === data.length - 1 ? 0 : 8 }) }, { children: [jsxRuntime.jsx(Text, { style: __assign(__assign({}, styles$4.cardTitle), { fontStyle: fontStyle }), children: value ? (value < 0 ? '00' : value) : '' }), jsxRuntime.jsx(Text, { children: label, style: __assign(__assign({}, styles$4.cardDescription), { fontStyle: fontStyle }) })] }), idx));
    };
    var render = function () { return (jsxRuntime.jsx(View, __assign({ style: __assign(__assign({}, styles$4.cardWrapper), { containerStyle: containerStyle }) }, { children: data === null || data === void 0 ? void 0 : data.map(function (val, idx) { return renderCardBox(val, idx); }) }))); };
    return render();
};

var DropDown = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? Colors.darkBlue : _b, _c = _a.bottom, bottom = _c === void 0 ? 0 : _c, _d = _a.color, color = _d === void 0 ? Colors.grey2 : _d, _e = _a.fontSize, fontSize = _e === void 0 ? 12 : _e, _f = _a.id, id = _f === void 0 ? 'dropdown' : _f, _g = _a.left, left = _g === void 0 ? 0 : _g, _h = _a.onChange, onChange = _h === void 0 ? function () { } : _h, _j = _a.options, options = _j === void 0 ? [
        { value: 'y', label: 'Present' },
        { value: 'n', label: 'Not Present' },
    ] : _j, _k = _a.right, right = _k === void 0 ? 0 : _k, _l = _a.style, style = _l === void 0 ? {} : _l, _m = _a.top, top = _m === void 0 ? 0 : _m, props = __rest(_a, ["backgroundColor", "bottom", "color", "fontSize", "id", "left", "onChange", "options", "right", "style", "top"]);
    return (jsxRuntime.jsx("select", __assign({ id: id, onChange: onChange }, props, { style: __assign({ backgroundColor: backgroundColor, color: color, fontSize: fontSize, marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left }, style) }, { children: options === null || options === void 0 ? void 0 : options.map(function (_a, idx) {
            var value = _a.value, label = _a.label;
            return (jsxRuntime.jsx("option", __assign({ value: value }, { children: label }), idx));
        }) })));
};

var Images = function (_a) {
    var _b = _a.bottom, bottom = _b === void 0 ? 0 : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.height, height = _d === void 0 ? 16 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, _f = _a.resizeMode, resizeMode = _f === void 0 ? 'contain' : _f, _g = _a.right, right = _g === void 0 ? 0 : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.top, top = _j === void 0 ? 0 : _j, _k = _a.width, width = _k === void 0 ? 16 : _k, props = __rest(_a, ["bottom", "center", "height", "left", "resizeMode", "right", "style", "top", "width"]);
    return (jsxRuntime.jsx("img", __assign({ style: __assign({ height: height, marginBottom: bottom, marginRight: right, marginLeft: left, marginTop: top, objectFit: resizeMode, textAlign: center ? 'center' : 'left', width: width }, style), alt: '', onError: function (_a) {
            var currentTarget = _a.currentTarget;
            currentTarget.onerror = null;
            currentTarget.src =
                'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/refs/heads/master/personal-web/image-not-available.png';
        } }, props)));
};

var styles$3 = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
        backgroundColor: Colors.blackTransparent8,
    },
    card: {
        maxWidth: '60%',
        boxShadow: Colors.boxShadow,
        padding: 24,
        borderRadius: 8,
        backgroundColor: Colors.grey7,
        width: 300,
        justifyContent: 'space-between',
    },
    headerTitle: {
        alignSelf: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
        fontSize: 24,
    },
    headerDescription: {
        alignSelf: 'center',
        marginBottom: 50,
        fontSize: 18,
    },
    buttonPositive: {
        width: '100%',
    },
    buttonNegative: {
        width: '100%',
        marginBottom: 12,
    },
};

var PopUp = function (_a) {
    var _b = _a.backgroundButtonColor, backgroundButtonColor = _b === void 0 ? Colors.black : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, popUpData = _a.popUpData, _d = _a.visible, visible = _d === void 0 ? false : _d, _e = _a.styleContainer, styleContainer = _e === void 0 ? {} : _e;
    if (!visible)
        return null;
    return (jsxRuntime.jsx(View, __assign({ style: __assign(__assign({}, styles$3.container), styleContainer) }, { children: jsxRuntime.jsxs(View, __assign({ style: styles$3.card }, { children: [jsxRuntime.jsxs(View, { children: [jsxRuntime.jsx(Text, __assign({ style: styles$3.headerTitle }, { children: popUpData === null || popUpData === void 0 ? void 0 : popUpData.title })), (popUpData === null || popUpData === void 0 ? void 0 : popUpData.description) && (jsxRuntime.jsx(Text, __assign({ style: styles$3.headerDescription }, { children: popUpData.description })))] }), jsxRuntime.jsxs(View, { children: [(popUpData === null || popUpData === void 0 ? void 0 : popUpData.labelDecline) && (popUpData === null || popUpData === void 0 ? void 0 : popUpData.onPressDecline) && (jsxRuntime.jsx(Button, { style: styles$3.buttonNegative, backgroundColor: backgroundButtonColor, outlineColor: Colors.black, isLoading: isLoading, label: popUpData.labelDecline, onPress: popUpData.onPressDecline })), jsxRuntime.jsx(Button, { style: styles$3.buttonPositive, backgroundColor: backgroundButtonColor, isLoading: isLoading, label: popUpData === null || popUpData === void 0 ? void 0 : popUpData.labelAccept, onPress: popUpData === null || popUpData === void 0 ? void 0 : popUpData.onPressAccept })] })] })) })));
};

var IMAGE_URL_WEDDING = 'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master/my-wedding';
var Icons = {
    close: "".concat(IMAGE_URL_WEDDING, "/icon-close.png")
};

var styles$2 = {
    content: {
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
    },
};

var TouchableOpacity = function (_a) {
    var children = _a.children, onPress = _a.onPress, style = _a.style, props = __rest(_a, ["children", "onPress", "style"]);
    var handleOnPress = function () {
        if (onPress)
            onPress();
    };
    return (jsxRuntime.jsx("div", __assign({ onClick: handleOnPress, style: __assign(__assign({}, styles$2.content), style) }, props, { children: children })));
};

var styles$1 = {
    label: {
        marginBottom: 4,
        fontSize: 16,
    },
    labelError: {
        marginTop: 2,
        fontSize: 16,
        color: Colors.red,
        maxWidth: 300,
    },
    textArea: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 16
    },
    textInput: {
        padding: 8,
        fontSize: 16
    },
};

var TextInput = function (_a) {
    var _b = _a.borderColor, borderColor = _b === void 0 ? Colors.grey2 : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? 4 : _c, _d = _a.bottom, bottom = _d === void 0 ? 0 : _d, _e = _a.center, center = _e === void 0 ? false : _e, _f = _a.label, label = _f === void 0 ? false : _f, _g = _a.labelError, labelError = _g === void 0 ? false : _g, _h = _a.left, left = _h === void 0 ? 0 : _h, _j = _a.multiline, multiline = _j === void 0 ? false : _j, _k = _a.padding, padding = _k === void 0 ? 0 : _k, _l = _a.right, right = _l === void 0 ? 0 : _l, _m = _a.rows, rows = _m === void 0 ? 10 : _m, _o = _a.style, style = _o === void 0 ? {} : _o, _p = _a.styleLabel, styleLabel = _p === void 0 ? {} : _p, _q = _a.styleTextInput, styleTextInput = _q === void 0 ? {} : _q, _r = _a.top, top = _r === void 0 ? 0 : _r, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["borderColor", "borderRadius", "bottom", "center", "label", "labelError", "left", "multiline", "padding", "right", "rows", "style", "styleLabel", "styleTextInput", "top", "value", "onChange"]);
    var stylesTextInput = __assign(__assign({ borderColor: borderColor, borderRadius: borderRadius, textAlign: center ? 'center' : 'left', paddingBottom: multiline ? 16 : 8 }, styles$1.textArea), styleTextInput);
    return (jsxRuntime.jsxs(View, __assign({ style: __assign({ marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left, padding: padding }, style) }, { children: [label && (jsxRuntime.jsx(Text, { style: __assign(__assign({}, styles$1.label), styleLabel), children: label })), multiline ? (jsxRuntime.jsx("textarea", __assign({ rows: rows, type: 'text', style: stylesTextInput, value: value, onChange: onChange }, props))) : (jsxRuntime.jsx("input", __assign({ type: 'text', value: value, onChange: onChange, style: stylesTextInput }, props))), labelError ? (jsxRuntime.jsx(Text, { style: styles$1.labelError, children: labelError })) : null] })));
};

var styles = {
    textInputContainer: {
        width: '100%',
    },
    textInput: {
        paddingRight: 40,
        paddingLeft: 32,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    closeSearchButton: {
        position: 'absolute',
        right: 0,
        height: 38,
        color: Colors.black,
        justifyContent: 'center',
        zIndex: 4,
        paddingRight: 16,
    },
    closeSearchButtonImage: {
        height: 18,
        width: 18,
    },
    iconSearch: {
        position: 'absolute',
        alignSelf: 'center',
        paddingLeft: 12,
    },
};

var SearchBox = function (_a) {
    var handleOnSubmitSearch = _a.handleOnSubmitSearch, handleOnClearSearch = _a.handleOnClearSearch, _b = _a.placeholder, placeholder = _b === void 0 ? 'Type to search ...' : _b, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["handleOnSubmitSearch", "handleOnClearSearch", "placeholder", "value", "onChange"]);
    var renderScreen = function () { return (jsxRuntime.jsxs(View, __assign({ style: styles.searchContainer }, { children: [jsxRuntime.jsx(Text, __assign({ style: styles.iconSearch }, { children: "\uD83D\uDD0D" })), jsxRuntime.jsx(TextInput, __assign({ style: styles.textInputContainer, styleTextInput: styles.textInput, placeholder: placeholder, onKeyPress: function (event) {
                    if (event.key === 'Enter' && handleOnSubmitSearch) {
                        handleOnSubmitSearch(value);
                    }
                }, value: value, onChange: onChange, onBlur: function () {
                    if (handleOnSubmitSearch) {
                        handleOnSubmitSearch(value);
                    }
                } }, props)), value && (value === null || value === void 0 ? void 0 : value.length) > 0 ? (jsxRuntime.jsx(TouchableOpacity, __assign({ style: styles.closeSearchButton, onPress: function () {
                    if (handleOnClearSearch) {
                        handleOnClearSearch();
                    }
                } }, { children: jsxRuntime.jsx(Images, { style: styles.closeSearchButtonImage, src: Icons.close }) }))) : null] }))); };
    return renderScreen();
};

var Swipeable = function (_a) {
    var children = _a.children, _b = _a.onSwipeLeft, onSwipeLeft = _b === void 0 ? function () { } : _b, _c = _a.onSwipeRight, onSwipeRight = _c === void 0 ? function () { } : _c, _d = _a.style, style = _d === void 0 ? {} : _d, props = __rest(_a, ["children", "onSwipeLeft", "onSwipeRight", "style"]);
    var _e = react.useState(null), startX = _e[0], setStartX = _e[1];
    var handleTouchStart = function (event) {
        setStartX(event.touches[0].clientX);
    };
    var handleTouchEnd = function (event) {
        if (startX !== null) {
            var endX = event.changedTouches[0].clientX;
            var deltaX = endX - startX;
            if (deltaX > 50) {
                onSwipeLeft();
            }
            else if (deltaX < -50) {
                onSwipeRight();
            }
            setStartX(null);
        }
    };
    return (jsxRuntime.jsx("div", __assign({ style: style, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd }, props, { children: children })));
};

exports.Button = Button;
exports.Colors = Colors;
exports.Container = Container;
exports.CountDown = Countdown;
exports.DropDown = DropDown;
exports.IMAGE_URL_WEDDING = IMAGE_URL_WEDDING;
exports.Icons = Icons;
exports.Image = Images;
exports.LoadingSpinner = LoadingSpinner;
exports.PopUp = PopUp;
exports.SearchBox = SearchBox;
exports.Swipeable = Swipeable;
exports.Text = Text;
exports.TextInput = TextInput;
exports.TouchableOpacity = TouchableOpacity;
exports.View = View;
//# sourceMappingURL=index.js.map
