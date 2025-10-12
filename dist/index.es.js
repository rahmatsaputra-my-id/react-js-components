import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    blackTransparent5: 'rgba(0, 0, 0, 0.5)',
    blackTransparent6: 'rgba(0, 0, 0, 0.6)',
    blackTransparent3: 'rgba(0, 0, 0, 0.3)',
    blackTransparent7: 'rgba(0, 0, 0, 0.7)',
    blackTransparent85: 'rgba(0, 0, 0, 0.85)',
    blue: '#227AEA',
    blue10: '#007bff',
    blueTransparent: 'rgba(93, 102, 147, 0.5)',
    boxShadow: '1px 2px 9px #000',
    boxShadowCard: '1px 2px 9px rgba(0, 0, 0, 0.3)',
    boxShadowImage: '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
    brownishGrey: '#646464',
    brownTransparent: 'rgba(185, 170, 170, 0.6)',
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
    grey61: '#EEEEEE',
    grey7: '#E5E5E5',
    grey74: '#6c757d',
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

var styles$d = {
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
    return (jsx(Fragment, { children: jsx("div", __assign({ style: __assign({ display: display, flexDirection: flexDirection, marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left }, style) }, props, { children: children })) }));
};

var isMobileDisplay = window.innerWidth <= 768;
var styles$c = {
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
    var _renderSpinnerComponent = function () { return jsx("div", { className: "loading-spinner" }); };
    var _renderSpinnerSection = function () { return (jsx(View, __assign({ style: styles$c.loadingSpinnerSectionContainer }, { children: jsx("div", { className: "loading-spinner-section" }) }))); };
    var _renderSpinnerPage = function () { return (jsx(View, __assign({ style: styles$c.loadingSpinnerPageContainer }, { children: jsxs(View, __assign({ style: styles$c.loadingSpinnerPageContent }, { children: [jsx("div", { className: "loading-spinner-pages" }), loadingIcon ? (jsx("img", { style: styles$c.loadingIcon, src: loadingIcon, alt: '' })) : null] })) }))); };
    return (jsx(Fragment, { children: loadingType === 'page'
            ? _renderSpinnerPage()
            : loadingType === 'section'
                ? _renderSpinnerSection()
                : _renderSpinnerComponent() }));
};

var Button = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? Colors.black : _b, _c = _a.bold, bold = _c === void 0 ? false : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? 8 : _d, _e = _a.bottom, bottom = _e === void 0 ? 0 : _e, _f = _a.center, center = _f === void 0 ? true : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.isLoading, isLoading = _h === void 0 ? false : _h, label = _a.label, _j = _a.left, left = _j === void 0 ? 0 : _j, _k = _a.onPress, onPress = _k === void 0 ? function () { } : _k, _l = _a.padding, padding = _l === void 0 ? 16 : _l, _m = _a.right, right = _m === void 0 ? 0 : _m, _o = _a.size, size = _o === void 0 ? 16 : _o, _p = _a.style, style = _p === void 0 ? {} : _p, _q = _a.top, top = _q === void 0 ? 0 : _q, _r = _a.transparent, transparent = _r === void 0 ? false : _r, _s = _a.outlineColor, outlineColor = _s === void 0 ? false : _s, props = __rest(_a, ["backgroundColor", "bold", "borderRadius", "bottom", "center", "disabled", "isLoading", "label", "left", "onPress", "padding", "right", "size", "style", "top", "transparent", "outlineColor"]);
    return (jsx(Fragment, { children: jsxs("button", __assign({ style: __assign(__assign({ backgroundColor: disabled || isLoading
                    ? Colors.grey2
                    : transparent || outlineColor
                        ? 'transparent'
                        : backgroundColor
                            ? backgroundColor
                            : Colors.black, border: outlineColor ? '1px solid rgba(0, 0, 0, 1)' : 'none', borderRadius: borderRadius, color: outlineColor ? outlineColor : Colors.white, fontSize: size, fontWeight: bold && 'bold', marginBottom: bottom, marginLeft: left, marginRight: right, marginTop: top, outline: !outlineColor && 'none', padding: padding, textAlign: center ? 'center' : 'left' }, style), styles$d.content), disabled: isLoading || disabled, onClick: onPress, type: 'submit' }, props, { children: [!isLoading ? label : null, isLoading && jsx(LoadingSpinner, { loadingType: false })] })) }));
};

var styles$b = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    sheet: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 390,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
        animation: 'slideUp 0.3s ease-out',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        paddingBottom: 8,
        marginBottom: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    closeButton: {
        background: 'transparent',
        border: 'none',
        fontSize: 24,
        lineHeight: 1,
        cursor: 'pointer',
    },
    content: {
        maxHeight: '60vh',
        overflowY: 'auto',
    },
};

var BottomSheet = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, _b = _a.title, title = _b === void 0 ? '' : _b, children = _a.children;
    useEffect(function () {
        var handleEsc = function (e) {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (visible) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }
        return function () {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [visible, onClose]);
    if (!visible)
        return null;
    return ReactDOM.createPortal(jsx("div", __assign({ style: styles$b.backdrop, onClick: onClose }, { children: jsxs("div", __assign({ style: styles$b.sheet, onClick: function (e) { return e.stopPropagation(); } }, { children: [jsxs("div", __assign({ style: styles$b.header }, { children: [jsx("span", __assign({ style: styles$b.title }, { children: title })), jsx("button", __assign({ style: styles$b.closeButton, onClick: onClose }, { children: "\u00D7" }))] })), jsx("div", __assign({ style: styles$b.content }, { children: children }))] })) })), document.body);
};

var styles$a = {
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
    return (jsx("div", __assign({ onClick: handleOnPress, style: __assign(__assign({}, styles$a.content), style) }, props, { children: children })));
};

var cameraStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: Colors.black,
        zIndex: 2000,
        overflow: 'hidden',
    },
    video: {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
    },
    previewImage: {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        fontSize: 24,
        backgroundColor: Colors.blackTransparent5,
        color: Colors.white,
        border: 'none',
        borderRadius: '50%',
        width: 36,
        height: 36,
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '36px',
    },
    sendButtonContainer: {
        height: 70,
        width: 70,
        backgroundColor: Colors.white,
        border: 'none',
        borderRadius: 100,
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: "0 4px 10px ".concat(Colors.blackTransparent3),
    },
    sendButton: {
        height: 28,
        width: 28,
        marginLeft: 6,
    },
    floatingBottomButtons: {
        position: 'absolute',
        bottom: 60,
        left: '50%',
        transform: 'translate(-50%, 0)',
    },
    floatingBottomRotateButtons: {
        position: 'absolute',
        bottom: 65,
        left: '85%',
        transform: 'translate(-50%, 0)',
    },
    captureButton: {
        height: 70,
        width: 70,
        backgroundColor: Colors.white,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerButton: {
        height: 60,
        width: 60,
        backgroundColor: Colors.white,
        borderRadius: 100,
        border: "1px solid ".concat(Colors.blackTransparent6),
        boxShadow: "0 4px 10px ".concat(Colors.blackTransparent3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureRotateButton: {
        height: 50,
        width: 50,
        backgroundColor: Colors.white,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rotateButton: {
        height: 22,
        width: 22,
    },
};

var BASE_URL = 'https://raw.githubusercontent.com/rahmatsaputra-my-id/global-assets/master';
var PATH = {
    WEDDING: "".concat(BASE_URL, "/my-wedding"),
    IMAGE: "".concat(BASE_URL, "/image"),
    PERSONAL_WEB: "".concat(BASE_URL, "/personal-web")
};
var Icons = {
    close: "".concat(PATH.WEDDING, "/icon-close.png"),
    camera: "".concat(PATH.IMAGE, "/icon-camera.png"),
    edit: "".concat(PATH.IMAGE, "/icon-edit.png"),
    rotate: "".concat(PATH.IMAGE, "/icon-rotate.png"),
    send: "".concat(PATH.IMAGE, "/icon-send.png"),
    image_not_available: "".concat(PATH.PERSONAL_WEB, "/image-not-available.png"),
};

var Images = function (_a) {
    var _b = _a.bottom, bottom = _b === void 0 ? 0 : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.height, height = _d === void 0 ? 16 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, _f = _a.resizeMode, resizeMode = _f === void 0 ? 'contain' : _f, _g = _a.right, right = _g === void 0 ? 0 : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.top, top = _j === void 0 ? 0 : _j, _k = _a.width, width = _k === void 0 ? 16 : _k, props = __rest(_a, ["bottom", "center", "height", "left", "resizeMode", "right", "style", "top", "width"]);
    return (jsx("img", __assign({ style: __assign({ height: height, marginBottom: bottom, marginRight: right, marginLeft: left, marginTop: top, objectFit: resizeMode, textAlign: center ? 'center' : 'left', width: width }, style), alt: '', onError: function (_a) {
            var currentTarget = _a.currentTarget;
            currentTarget.onerror = null;
            currentTarget.src = Icons.image_not_available;
        } }, props)));
};

var CameraModal = function (_a) {
    var onClose = _a.onClose, onCapture = _a.onCapture;
    var videoRef = useRef(null);
    var canvasRef = useRef(null);
    var streamRef = useRef(null);
    var _b = useState(null), capturedImage = _b[0], setCapturedImage = _b[1];
    var _c = useState(false), isCameraReady = _c[0], setIsCameraReady = _c[1];
    var _d = useState(true), isFrontCamera = _d[0], setIsFrontCamera = _d[1];
    var _e = useState(false), hasRearCamera = _e[0], setHasRearCamera = _e[1];
    var stopCamera = function () {
        var video = videoRef.current;
        if (video && video.srcObject) {
            var stream = video.srcObject;
            stream.getTracks().forEach(function (track) { return track.stop(); });
            video.pause();
            video.srcObject = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(function (track) { return track.stop(); });
            streamRef.current = null;
        }
    };
    var openCamera = function () { return __awaiter(void 0, void 0, void 0, function () {
        var constraints, stream, video_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    constraints = {
                        video: {
                            facingMode: isFrontCamera ? 'user' : 'environment',
                        },
                    };
                    return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                case 1:
                    stream = _a.sent();
                    video_1 = videoRef.current;
                    if (!video_1)
                        return [2 /*return*/];
                    video_1.srcObject = stream;
                    streamRef.current = stream;
                    video_1.onloadedmetadata = function () {
                        video_1.play();
                        setIsCameraReady(true);
                    };
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error opening camera:', err_1);
                    onClose();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        var detectCameras = function () { return __awaiter(void 0, void 0, void 0, function () {
            var stream, devices, videoDevices, rearCameraExists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: true })];
                    case 1:
                        stream = _a.sent();
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 2:
                        devices = _a.sent();
                        videoDevices = devices.filter(function (d) { return d.kind === 'videoinput'; });
                        rearCameraExists = videoDevices.some(function (device) {
                            return device.label.toLowerCase().includes('back') ||
                                device.label.toLowerCase().includes('rear') ||
                                device.label.toLowerCase().includes('environment');
                        }) || videoDevices.length > 1;
                        setHasRearCamera(rearCameraExists);
                        // Stop the temporary stream immediately
                        stream.getTracks().forEach(function (track) { return track.stop(); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.warn('Camera permission denied or error:', error_1);
                        setHasRearCamera(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        detectCameras();
    }, []);
    useEffect(function () {
        openCamera();
        window.addEventListener('beforeunload', stopCamera);
        return function () {
            stopCamera();
            window.removeEventListener('beforeunload', stopCamera);
        };
    }, [isFrontCamera]);
    var handleCapture = function () {
        var video = videoRef.current;
        var canvas = canvasRef.current;
        if (!video || !canvas)
            return;
        var context = canvas.getContext('2d');
        if (!context)
            return;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (isFrontCamera) {
            // Flip canvas horizontally for front camera
            context.translate(canvas.width, 0);
            context.scale(-1, 1);
        }
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // Reset transform after drawing
        if (isFrontCamera) {
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
        var base64 = canvas.toDataURL('image/png');
        setCapturedImage(base64);
        setTimeout(function () { return stopCamera(); }, 100);
    };
    var handleUsePhoto = function () {
        onCapture(capturedImage);
        onClose();
    };
    var handleRetake = function () {
        setCapturedImage(null);
        setIsCameraReady(false);
        setTimeout(function () { return openCamera(); }, 100);
    };
    var handleOnPressClose = function () {
        if (capturedImage) {
            handleRetake();
        }
        else {
            stopCamera();
            onClose();
        }
    };
    var toggleCamera = function () {
        setIsFrontCamera(function (prev) { return !prev; });
    };
    return ReactDOM.createPortal(jsxs("div", __assign({ style: cameraStyles.overlay }, { children: [capturedImage ? (jsxs(Fragment, { children: [jsx("img", { src: capturedImage, alt: "Captured", style: cameraStyles.previewImage }), jsx(TouchableOpacity, __assign({ onPress: handleUsePhoto, style: cameraStyles.floatingBottomButtons }, { children: jsx(View, __assign({ style: cameraStyles.captureButton }, { children: jsx(View, __assign({ style: cameraStyles.innerButton }, { children: jsx(Images, { src: Icons.send, style: cameraStyles.sendButton }) })) })) }))] })) : (jsxs(Fragment, { children: [jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, style: __assign(__assign({}, cameraStyles.video), { transform: isFrontCamera ? 'scaleX(-1)' : 'none' }) }), jsx("canvas", { ref: canvasRef, style: { display: 'none' } }), isCameraReady && (jsxs(Fragment, { children: [jsx(TouchableOpacity, __assign({ onPress: handleCapture, style: cameraStyles.floatingBottomButtons }, { children: jsx(View, __assign({ style: cameraStyles.captureButton }, { children: jsx(View, { style: cameraStyles.innerButton }) })) })), hasRearCamera && (jsx(TouchableOpacity, __assign({ onPress: toggleCamera, style: cameraStyles.floatingBottomRotateButtons }, { children: jsx(View, __assign({ style: cameraStyles.captureRotateButton }, { children: jsx(Images, { src: Icons.rotate, style: cameraStyles.rotateButton }) })) })))] }))] })), jsx("button", __assign({ onClick: handleOnPressClose, style: cameraStyles.closeButton }, { children: "\u00D7" }))] })), document.body);
};

var styles$9 = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: Colors.blackTransparent3,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    sheet: {
        backgroundColor: Colors.white,
        width: '100%',
        maxWidth: 390,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        boxShadow: "0 -2px 10px ".concat(Colors.blackTransparent15),
        animation: 'slideUp 0.3s ease-out',
        paddingBottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: "1px solid ".concat(Colors.grey61),
        paddingBottom: 8,
        marginBottom: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    closeButton: {
        background: 'transparent',
        border: 'none',
        fontSize: 24,
        lineHeight: 1,
        cursor: 'pointer',
    },
    content: {
        maxHeight: '60vh',
        overflowY: 'auto',
    },
    contentBottomSheet: {
        marginTop: 8,
        marginBottom: 16,
    },
};

var styles$8 = {
    h1: {
        fontSize: 32,
    },
    h2: {
        fontSize: 28,
    },
    h3: {
        fontSize: 24,
    },
    h4: {
        fontSize: 18,
    },
    h5: {
        fontSize: 16,
    },
    h6: {
        fontSize: 14,
    },
    normal_10: {
        fontSize: 10,
    },
    normal_10_grey: {
        color: Colors.grey5,
        fontSize: 10,
    },
    bold_10: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    normal_12: {
        fontSize: 12,
    },
    normal_12_blue: {
        color: Colors.blue,
        fontSize: 12,
    },
    normal_12_grey: {
        color: Colors.grey5,
        fontSize: 12,
    },
    normal_12_red: {
        color: Colors.red,
        fontSize: 12,
    },
    bold_12: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    normal_14: {
        fontSize: 14,
    },
    normal_14_red: {
        color: Colors.red,
        fontSize: 14,
    },
    bold_14: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    normal_16: {
        fontSize: 16,
    },
    bold_16: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    normal_18: {
        fontSize: 18,
    },
    bold_18: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    normal_20: {
        fontSize: 20,
    },
    bold_20: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bold_20_white: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    normal_80: {
        fontSize: 80,
    },
    bold_80: {
        fontSize: 80,
        fontWeight: 'bold',
    },
    bold_80_white: {
        color: Colors.white,
        fontSize: 80,
        fontWeight: 'bold',
    },
};

var Text = function (_a) {
    var _b = _a.bottom, bottom = _b === void 0 ? 0 : _b, _c = _a.center, center = _c === void 0 ? false : _c, children = _a.children, _d = _a.color, color = _d === void 0 ? Colors.black : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, _f = _a.right, right = _f === void 0 ? 0 : _f, _g = _a.style, style = _g === void 0 ? {} : _g, _h = _a.top, top = _h === void 0 ? 0 : _h, _j = _a.type, type = _j === void 0 ? 'normal_16' : _j, props = __rest(_a, ["bottom", "center", "children", "color", "left", "right", "style", "top", "type"]);
    return (jsx(Fragment, { children: jsx("p", __assign({ style: __assign(__assign({ marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left, color: color, textAlign: center ? 'center' : 'left' }, styles$8[type]), style) }, props, { children: children })) }));
};

var BottomSheetPhoto = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, _b = _a.title, title = _b === void 0 ? '' : _b, onUploadBase64 = _a.onUploadBase64;
    var fileInputRef = useRef(null);
    var _c = useState(false), cameraVisible = _c[0], setCameraVisible = _c[1];
    var _d = useState(20), paddingBottom = _d[0], setPaddingBottom = _d[1];
    useEffect(function () {
        function detectPadding() {
            var basePadding = 20;
            if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
                basePadding = 80; // default safe area for iPhones with notch
            }
            else if (/Android/.test(navigator.userAgent)) {
                basePadding = 50;
            }
            // Then override with measured safe area inset if available
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.bottom = '0';
            div.style.height = 'env(safe-area-inset-bottom)';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            var computedHeight = window.getComputedStyle(div).height;
            var insetBottom = parseInt(computedHeight, 10);
            document.body.removeChild(div);
            setPaddingBottom(Math.max(basePadding, insetBottom || 0));
        }
        detectPadding();
        window.addEventListener('resize', detectPadding);
        return function () { return window.removeEventListener('resize', detectPadding); };
    }, []);
    useEffect(function () {
        var handleEsc = function (e) {
            if (e.key === 'Escape')
                onClose();
        };
        if (visible) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }
        return function () {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [visible, onClose]);
    if (!visible && !cameraVisible)
        return null;
    var handleUploadDocument = function () {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleFileChange = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64String = reader.result;
            onUploadBase64 === null || onUploadBase64 === void 0 ? void 0 : onUploadBase64(base64String, file);
            onClose();
        };
        reader.readAsDataURL(file);
    };
    var bottomSheetData = [
        {
            title: 'Camera',
            onPress: function () {
                onClose();
                setTimeout(function () { return setCameraVisible(true); }, 300);
            },
        },
        {
            title: 'Document',
            onPress: handleUploadDocument,
        },
    ];
    return (jsxs(Fragment, { children: [jsx("input", { type: "file", accept: ".png,.jpg,.jpeg", ref: fileInputRef, onChange: handleFileChange, style: { display: 'none' } }), cameraVisible && (jsx(CameraModal, { onClose: function () { return setCameraVisible(false); }, onCapture: function (base64) {
                    onUploadBase64 === null || onUploadBase64 === void 0 ? void 0 : onUploadBase64(base64, null);
                } })), visible &&
                ReactDOM.createPortal(jsx("div", __assign({ style: styles$9.backdrop, onClick: onClose }, { children: jsxs("div", __assign({ style: __assign(__assign({}, styles$9.sheet), { paddingBottom: paddingBottom }), onClick: function (e) { return e.stopPropagation(); } }, { children: [jsxs("div", __assign({ style: styles$9.header }, { children: [jsx("span", __assign({ style: styles$9.title }, { children: title })), jsx("button", __assign({ style: styles$9.closeButton, onClick: onClose }, { children: "\u00D7" }))] })), jsx("div", __assign({ style: styles$9.content }, { children: bottomSheetData.map(function (val, idx) { return (jsx(TouchableOpacity, __assign({ onPress: val.onPress, style: styles$9.contentBottomSheet }, { children: jsx(Text, { children: val.title }) }), idx)); }) }))] })) })), document.body)] }));
};

var styles$7 = {
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
    return (jsx(View, __assign({ style: __assign(__assign({}, styles$7.container), { containerStyle: containerStyle }) }, { children: jsx(View, __assign({ style: __assign(__assign({}, styles$7.content), { contentStyle: contentStyle }) }, { children: children })) })));
};

var styles$6 = {
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
    var _c = useState(0), days = _c[0], setDays = _c[1];
    var _d = useState(0), hours = _d[0], setHours = _d[1];
    var _e = useState(0), minutes = _e[0], setMinutes = _e[1];
    var _f = useState(0), seconds = _f[0], setSeconds = _f[1];
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
    useEffect(function () {
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
        return (jsxs(View, __assign({ style: __assign(__assign({}, styles$6.cardBox), { cardStyle: cardStyle, marginRight: idx === data.length - 1 ? 0 : 8 }) }, { children: [jsx(Text, { style: __assign(__assign({}, styles$6.cardTitle), { fontStyle: fontStyle }), children: value ? (value < 0 ? '00' : value) : '' }), jsx(Text, { children: label, style: __assign(__assign({}, styles$6.cardDescription), { fontStyle: fontStyle }) })] }), idx));
    };
    var render = function () { return (jsx(View, __assign({ style: __assign(__assign({}, styles$6.cardWrapper), { containerStyle: containerStyle }) }, { children: data === null || data === void 0 ? void 0 : data.map(function (val, idx) { return renderCardBox(val, idx); }) }))); };
    return render();
};

var DropDown = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? Colors.darkBlue : _b, _c = _a.bottom, bottom = _c === void 0 ? 0 : _c, _d = _a.color, color = _d === void 0 ? Colors.grey2 : _d, _e = _a.fontSize, fontSize = _e === void 0 ? 12 : _e, _f = _a.id, id = _f === void 0 ? 'dropdown' : _f, _g = _a.left, left = _g === void 0 ? 0 : _g, _h = _a.onChange, onChange = _h === void 0 ? function () { } : _h, _j = _a.options, options = _j === void 0 ? [
        { value: 'y', label: 'Present' },
        { value: 'n', label: 'Not Present' },
    ] : _j, _k = _a.right, right = _k === void 0 ? 0 : _k, _l = _a.style, style = _l === void 0 ? {} : _l, _m = _a.top, top = _m === void 0 ? 0 : _m, props = __rest(_a, ["backgroundColor", "bottom", "color", "fontSize", "id", "left", "onChange", "options", "right", "style", "top"]);
    return (jsx("select", __assign({ id: id, onChange: onChange }, props, { style: __assign({ backgroundColor: backgroundColor, color: color, fontSize: fontSize, marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left }, style) }, { children: options === null || options === void 0 ? void 0 : options.map(function (_a, idx) {
            var value = _a.value, label = _a.label;
            return (jsx("option", __assign({ value: value }, { children: label }), idx));
        }) })));
};

var styles$5 = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
    },
};

var NoRecord = function (_a) {
    _a.children; var _b = _a.style, style = _b === void 0 ? {} : _b, props = __rest(_a, ["children", "style"]);
    return (jsx(View, __assign({ style: __assign(__assign({}, styles$5.container), style) }, props, { children: jsx(Text, { children: 'No Record Found' }) })));
};

var styles$4 = {
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
    return (jsx(View, __assign({ style: __assign(__assign({}, styles$4.container), styleContainer) }, { children: jsxs(View, __assign({ style: styles$4.card }, { children: [jsxs(View, { children: [jsx(Text, __assign({ style: styles$4.headerTitle }, { children: popUpData === null || popUpData === void 0 ? void 0 : popUpData.title })), (popUpData === null || popUpData === void 0 ? void 0 : popUpData.description) && (jsx(Text, __assign({ style: styles$4.headerDescription }, { children: popUpData.description })))] }), jsxs(View, { children: [(popUpData === null || popUpData === void 0 ? void 0 : popUpData.labelDecline) && (popUpData === null || popUpData === void 0 ? void 0 : popUpData.onPressDecline) && (jsx(Button, { style: styles$4.buttonNegative, backgroundColor: backgroundButtonColor, outlineColor: Colors.black, isLoading: isLoading, label: popUpData.labelDecline, onPress: popUpData.onPressDecline })), jsx(Button, { style: styles$4.buttonPositive, backgroundColor: backgroundButtonColor, isLoading: isLoading, label: popUpData === null || popUpData === void 0 ? void 0 : popUpData.labelAccept, onPress: popUpData === null || popUpData === void 0 ? void 0 : popUpData.onPressAccept })] })] })) })));
};

var styles$3 = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: Colors.blackTransparent85,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    modalContent: {
        width: '90%',
        height: '70%',
        backgroundColor: Colors.black,
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    },
    noImageContainer: {
        color: Colors.white,
        textAlign: 'center'
    }
};

var PhotoPreviewModal = function (_a) {
    var visible = _a.visible, onDismiss = _a.onDismiss, imageUrl = _a.imageUrl;
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === 'Escape') {
                onDismiss();
            }
        };
        if (visible) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible, onDismiss]);
    if (!visible)
        return null;
    return ReactDOM.createPortal(jsx("div", __assign({ onClick: onDismiss, style: styles$3.backdrop }, { children: jsx("div", __assign({ onClick: function (e) { return e.stopPropagation(); }, style: styles$3.modalContent }, { children: imageUrl ? (jsx("img", { src: imageUrl, alt: '', onError: function (_a) {
                    var currentTarget = _a.currentTarget;
                    currentTarget.onerror = null;
                    currentTarget.src = Icons.image_not_available;
                }, style: styles$3.image })) : (jsx("p", __assign({ style: styles$3.noImageContainer }, { children: "No image provided" }))) })) })), document.body);
};

var styles$2 = {
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
    var stylesTextInput = __assign(__assign({ borderColor: borderColor, borderRadius: borderRadius, textAlign: center ? 'center' : 'left', paddingBottom: multiline ? 16 : 8 }, styles$2.textArea), styleTextInput);
    return (jsxs(View, __assign({ style: __assign({ marginTop: top, marginRight: right, marginBottom: bottom, marginLeft: left, padding: padding }, style) }, { children: [label && (jsx(Text, { style: __assign(__assign({}, styles$2.label), styleLabel), children: label })), multiline ? (jsx("textarea", __assign({ rows: rows, type: 'text', style: stylesTextInput, value: value, onChange: onChange }, props))) : (jsx("input", __assign({ type: 'text', value: value, onChange: onChange, style: stylesTextInput }, props))), labelError ? (jsx(Text, { style: styles$2.labelError, children: labelError })) : null] })));
};

var styles$1 = {
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
    var renderScreen = function () {
        var _a;
        return (jsxs(View, __assign({ style: styles$1.searchContainer }, { children: [jsx(Text, __assign({ style: styles$1.iconSearch }, { children: "\uD83D\uDD0D" })), jsx(TextInput, __assign({ style: styles$1.textInputContainer, styleTextInput: styles$1.textInput, placeholder: placeholder, onKeyPress: function (event) {
                        if (event.key === 'Enter' && handleOnSubmitSearch) {
                            handleOnSubmitSearch(value);
                        }
                    }, value: value, onChange: onChange, onBlur: function () {
                        if (handleOnSubmitSearch) {
                            handleOnSubmitSearch(value);
                        }
                    } }, props)), value && (value === null || value === void 0 ? void 0 : value.length) > 0 ? (jsx(TouchableOpacity, __assign({ style: styles$1.closeSearchButton, onPress: function () {
                        if (handleOnClearSearch) {
                            handleOnClearSearch();
                        }
                    } }, { children: jsx(Images, { style: styles$1.closeSearchButtonImage, src: (_a = Icons.close) !== null && _a !== void 0 ? _a : '' }) }))) : null] })));
    };
    return renderScreen();
};

var styles = {
    container: {
        borderRadius: 8,
        paddingRight: 16,
        border: "2px solid ".concat(Colors.brownTransparent),
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    containerImage: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: Colors.grey1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        justifyContent: 'center',
        marginLeft: 16,
        flex: 1,
    },
    label: {
        marginBottom: 4,
    },
    image: {
        width: '100%',
        height: undefined,
        maxHeight: 80,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    iconCamera: {
        width: 32,
        height: '100%',
        alignSelf: 'center',
    },
    iconEdit: {
        width: 24,
        height: '100%',
        alignSelf: 'center',
        marginRight: 16,
    },
};

var ImageInput = function (_a) {
    var label = _a.label, subLabel = _a.subLabel, _b = _a.imageUrl, imageUrl = _b === void 0 ? null : _b, handleOnUpload = _a.handleOnUpload, handleOnPreview = _a.handleOnPreview, containerStyle = _a.containerStyle, _c = _a.isMandatory, isMandatory = _c === void 0 ? false : _c, _d = _a.isEditAble, isEditAble = _d === void 0 ? false : _d;
    var renderScreen = function () { return (jsxs(View, __assign({ style: __assign(__assign({}, styles.container), containerStyle) }, { children: [jsx(TouchableOpacity, __assign({ style: styles.containerImage, onPress: imageUrl ? handleOnPreview : handleOnUpload }, { children: jsx(Images, { src: imageUrl ? imageUrl : Icons.camera, style: imageUrl ? styles.image : styles.iconCamera }) })), jsxs(View, __assign({ style: styles.containerText }, { children: [label && (jsx(Text, __assign({ type: "bold_16", style: styles.label }, { children: label }))), subLabel && jsx(Text, { children: subLabel }), isMandatory && jsx(Text, __assign({ type: "normal_14_red" }, { children: '*Wajib' }))] })), isEditAble && imageUrl && (jsx(TouchableOpacity, __assign({ onPress: handleOnUpload }, { children: jsx(Images, { src: Icons.edit, style: styles.iconEdit }) })))] }))); };
    return renderScreen();
};

var Swipeable = function (_a) {
    var children = _a.children, _b = _a.onSwipeLeft, onSwipeLeft = _b === void 0 ? function () { } : _b, _c = _a.onSwipeRight, onSwipeRight = _c === void 0 ? function () { } : _c, _d = _a.style, style = _d === void 0 ? {} : _d, props = __rest(_a, ["children", "onSwipeLeft", "onSwipeRight", "style"]);
    var _e = useState(null), startX = _e[0], setStartX = _e[1];
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
    return (jsx("div", __assign({ style: style, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd }, props, { children: children })));
};

export { BottomSheet, BottomSheetPhoto, Button, Colors, Container, Countdown as CountDown, DropDown, Icons, Images as Image, ImageInput, LoadingSpinner, NoRecord, PopUp, PhotoPreviewModal as PreviewPhoto, SearchBox, Swipeable, Text, TextInput, TouchableOpacity, View };
//# sourceMappingURL=index.es.js.map
