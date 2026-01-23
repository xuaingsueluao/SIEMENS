if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$8 = "/static/icons/background.jpg";
  const _imports_1$1 = "/static/icons/arrow.png";
  const _imports_2 = "/static/icons/house.png";
  const _imports_3 = "/static/icons/operation_Reminder.jpg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    __name: "welcome",
    setup(__props, { expose: __expose }) {
      __expose();
      const isReminderVisible = vue.ref(false);
      const showReminder = () => {
        isReminderVisible.value = true;
      };
      const hideReminder = () => {
        isReminderVisible.value = false;
      };
      const confirmReminder = () => {
        isReminderVisible.value = false;
        uni.navigateTo({
          url: "/pages/index/home"
        });
      };
      const __returned__ = { isReminderVisible, showReminder, hideReminder, confirmReminder, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "welcome-container" }, [
      vue.createCommentVNode(" 背景图 "),
      vue.createElementVNode("image", {
        class: "background",
        src: _imports_0$8,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" 主要内容区域 "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createCommentVNode(" 顶部 Logo "),
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("text", { class: "logo-text" }, "SIEMENS")
        ]),
        vue.createCommentVNode(" 中间区域：文字 + 房子 "),
        vue.createElementVNode("view", { class: "center-area" }, [
          vue.createCommentVNode(" 欢迎文字 "),
          vue.createElementVNode("view", { class: "welcome-info" }, [
            vue.createElementVNode("view", { class: "welcome-text" }, [
              vue.createElementVNode(
                "text",
                { class: "text-line" },
                vue.toDisplayString(_ctx.$t("welcome.line1")),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "text-line" },
                vue.toDisplayString(_ctx.$t("welcome.line2")),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 房子图片容器 "),
          vue.createElementVNode("view", { class: "house-container" }, [
            vue.createElementVNode("image", {
              class: "arrow",
              src: _imports_1$1,
              mode: "aspectFit"
            }),
            vue.createElementVNode("image", {
              class: "house",
              src: _imports_2,
              mode: "aspectFit"
            })
          ])
        ]),
        vue.createCommentVNode(" 底部按钮区域 "),
        vue.createElementVNode("view", { class: "bottom-area" }, [
          vue.createCommentVNode(" 左下角：机器人状态 "),
          vue.createElementVNode("view", { class: "status-btn" }, [
            vue.createElementVNode(
              "text",
              { class: "status-label" },
              vue.toDisplayString(_ctx.$t("welcome.robotStatus")),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "status-value" },
              vue.toDisplayString(_ctx.$t("welcome.connected")),
              1
              /* TEXT */
            )
          ]),
          vue.createCommentVNode(" 右下角：启动机器人 "),
          vue.createElementVNode("view", {
            class: "start-btn",
            onClick: $setup.showReminder
          }, [
            vue.createElementVNode(
              "text",
              { class: "start-text" },
              vue.toDisplayString(_ctx.$t("welcome.startRobot")),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      vue.createCommentVNode(" 操作提醒弹窗 "),
      $setup.isReminderVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "reminder-modal",
        onClick: $setup.hideReminder
      }, [
        vue.createElementVNode("view", {
          class: "reminder-card",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("view", { class: "reminder-header" }, [
            vue.createElementVNode("text", { class: "reminder-title" }, "操作提醒")
          ]),
          vue.createElementVNode("view", { class: "reminder-content" }, [
            vue.createElementVNode("image", {
              class: "reminder-image",
              src: _imports_3,
              mode: "aspectFit"
            }),
            vue.createElementVNode("view", { class: "reminder-text" }, [
              vue.createElementVNode("text", { class: "reminder-desc" }, "在操作提醒过程中，请您确保"),
              vue.createElementVNode("text", { class: "reminder-desc" }, "有成员人员在机器人附近进行人"),
              vue.createElementVNode("text", { class: "reminder-desc" }, "机协同任务")
            ])
          ]),
          vue.createElementVNode("view", { class: "reminder-footer" }, [
            vue.createElementVNode("view", {
              class: "confirm-btn",
              onClick: $setup.confirmReminder
            }, [
              vue.createElementVNode("text", { class: "confirm-text" }, "确定")
            ])
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesIndexWelcome = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-c7aac77f"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/index/welcome.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = (tag) => perf.mark(tag);
      measure = (name, startTag, endTag) => {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code = ch.charCodeAt(0);
    switch (code) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(
        "."
        /* DOT */
      )) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(
          "."
          /* DOT */
        );
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    // tokenizer error messages
    [
      0
      /* EXPECTED_TOKEN */
    ]: `Expected token: '{0}'`,
    [
      1
      /* INVALID_TOKEN_IN_PLACEHOLDER */
    ]: `Invalid token in placeholder: '{0}'`,
    [
      2
      /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
    ]: `Unterminated single quote in placeholder`,
    [
      3
      /* UNKNOWN_ESCAPE_SEQUENCE */
    ]: `Unknown escape sequence: \\{0}`,
    [
      4
      /* INVALID_UNICODE_ESCAPE_SEQUENCE */
    ]: `Invalid unicode escape sequence: {0}`,
    [
      5
      /* UNBALANCED_CLOSING_BRACE */
    ]: `Unbalanced closing brace`,
    [
      6
      /* UNTERMINATED_CLOSING_BRACE */
    ]: `Unterminated closing brace`,
    [
      7
      /* EMPTY_PLACEHOLDER */
    ]: `Empty placeholder`,
    [
      8
      /* NOT_ALLOW_NEST_PLACEHOLDER */
    ]: `Not allowed nest placeholder`,
    [
      9
      /* INVALID_LINKED_FORMAT */
    ]: `Invalid linked format`,
    // parser error messages
    [
      10
      /* MUST_HAVE_MESSAGES_IN_PLURAL */
    ]: `Plural must have messages`,
    [
      11
      /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
    ]: `Unexpected empty linked modifier`,
    [
      12
      /* UNEXPECTED_EMPTY_LINKED_KEY */
    ]: `Unexpected empty linked key`,
    [
      13
      /* UNEXPECTED_LEXICAL_ANALYSIS */
    ]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = format((messages || errorMessages$2)[code] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [
      0
      /* NOT_FOUND_KEY */
    ]: `Not found '{key}' key in '{locale}' locale messages.`,
    [
      1
      /* FALLBACK_TO_TRANSLATE */
    ]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [
      2
      /* CANNOT_FORMAT_NUMBER */
    ]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [
      3
      /* FALLBACK_TO_NUMBER_FORMAT */
    ]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [
      4
      /* CANNOT_FORMAT_DATE */
    ]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [
      5
      /* FALLBACK_TO_DATE_FORMAT */
    ]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code, ...args) {
    return format(warnMessages$1[code], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      // prettier-ignore
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
      const locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code) {
    return createCompileError(code, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [
      14
      /* INVALID_ARGUMENT */
    ]: "Invalid arguments",
    [
      15
      /* INVALID_DATE_ARGUMENT */
    ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [
      16
      /* INVALID_ISO_DATE_ARGUMENT */
    ]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(
        4
        /* CANNOT_FORMAT_DATE */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(
          15
          /* INVALID_DATE_ARGUMENT */
        );
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(
        2
        /* CANNOT_FORMAT_NUMBER */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [
      6
      /* FALLBACK_TO_ROOT */
    ]: `Fall back to {type} '{key}' with root locale.`,
    [
      7
      /* NOT_SUPPORTED_PRESERVE */
    ]: `Not supported 'preserve'.`,
    [
      8
      /* NOT_SUPPORTED_FORMATTER */
    ]: `Not supported 'formatter'.`,
    [
      9
      /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
    ]: `Not supported 'preserveDirectiveContent'.`,
    [
      10
      /* NOT_SUPPORTED_GET_CHOICE_INDEX */
    ]: `Not supported 'getChoiceIndex'.`,
    [
      11
      /* COMPONENT_NAME_LEGACY_COMPATIBLE */
    ]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [
      12
      /* NOT_FOUND_PARENT_SCOPE */
    ]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code, ...args) {
    return format(warnMessages[code], ...args);
  }
  function createI18nError(code, ...args) {
    return createCompileError(code, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [
      14
      /* UNEXPECTED_RETURN_TYPE */
    ]: "Unexpected return type in composer",
    [
      15
      /* INVALID_ARGUMENT */
    ]: "Invalid argument",
    [
      16
      /* MUST_BE_CALL_SETUP_TOP */
    ]: "Must be called at the top of a `setup` function",
    [
      17
      /* NOT_INSLALLED */
    ]: "Need to install with `app.use` function",
    [
      22
      /* UNEXPECTED_ERROR */
    ]: "Unexpected error",
    [
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    ]: "Not available in legacy mode",
    [
      19
      /* REQUIRED_VALUE */
    ]: `Required in value: {0}`,
    [
      20
      /* INVALID_VALUE */
    ]: `Invalid value`,
    [
      21
      /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
    ]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages, __i18n } = options;
    const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US"
    );
    const _fallbackLocale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
    );
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(
          14
          /* UNEXPECTED_RETURN_TYPE */
        );
      }
    }
    function t(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps(
        (context) => {
          let ret;
          const _context2 = context;
          try {
            _context2.processor = processor;
            ret = translate(_context2, ...args);
          } finally {
            _context2.processor = null;
          }
          return ret;
        },
        () => parseTranslateArgs(...args),
        "translate",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[TransrateVNodeSymbol](...args),
        (key) => [vue.createVNode(vue.Text, null, key, 0)],
        (val) => isArray(val)
      );
    }
    function numberParts(...args) {
      return wrapWithDeps(
        (context) => number(context, ...args),
        () => parseNumberArgs(...args),
        "number format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[NumberPartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function datetimeParts(...args) {
      return wrapWithDeps(
        (context) => datetime(context, ...args),
        () => parseDateTimeArgs(...args),
        "datetime format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[DatetimePartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages2 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales.length; i++) {
        const targetLocaleMessages = _messages.value[locales[i]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages2 = messageValue;
          break;
        }
      }
      return messages2;
    }
    function tm(key) {
      const messages2 = resolveMessages(key);
      return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t,
      rt,
      d,
      n,
      te,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
    }
    let messages = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages = locales.reduce((messages2, locale2) => {
        const message = messages2[locale2] || (messages2[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages2;
      }, messages || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return composer.d(...args);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return composer.n(...args);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(
          10
          /* NOT_SUPPORTED_GET_CHOICE_INDEX */
        ));
        return -1;
      },
      // for internal
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject$1(props.format)) {
        if (isString(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  };
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const composer = getComposer$2(i18n2, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(
          7
          /* NOT_SUPPORTED_PRESERVE */
        ));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n2));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n2) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels[
            "vue-devtools-plugin-vue-i18n"
            /* PLUGIN */
          ],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n2);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n2.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n2);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n2);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n2);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels[
              "vue-i18n-timeline"
              /* TIMELINE */
            ],
            color: VueDevToolsTimelineColors[
              "vue-i18n-timeline"
              /* TIMELINE */
            ]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n2) {
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages) {
    const value = {};
    Object.keys(messages).forEach((key) => {
      const v = messages[key];
      if (isFunction(v) && "source" in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject$1(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>ƒ</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n2) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    for (const [keyInstance, instance] of i18n2.__instances) {
      const composer = i18n2.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n2) {
    if (nodeId === "global") {
      return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    } else {
      const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n2.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n2) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n2.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n2.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages).forEach((locale) => root.mergeLocaleMessage(locale, messages[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n2 = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
        {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(
              21
              /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
            );
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      // @internal
      __instances,
      // @internal
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      // @internal
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      // @internal
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n2;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(
        16
        /* MUST_BE_CALL_SETUP_TOP */
      );
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(
        17
        /* NOT_INSLALLED */
      );
    }
    const i18n2 = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n2) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages = getLocaleMessages(global2.locale.value, {
          messages,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(
            12
            /* NOT_FOUND_PARENT_SCOPE */
          ));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n2.mode === "legacy") {
      throw createI18nError(
        18
        /* NOT_AVAILABLE_IN_LEGACY_MODE */
      );
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n2, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const _sfc_main$h = {
    __name: "capsule-button",
    props: {
      // 按钮文字
      text: {
        type: String,
        required: true
      },
      // 是否激活状态
      isActive: {
        type: Boolean,
        default: false
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      vue.useCssVars((_ctx) => ({
        "97b830de-fontSize": fontSize.value
      }));
      const { locale } = useI18n();
      const props = __props;
      const emit = __emit;
      const handleClick = () => {
        if (!props.disabled) {
          emit("click");
        }
      };
      const fontSize = vue.computed(() => {
        return locale.value === "zh-CN" ? "32rpx" : "28rpx";
      });
      const __returned__ = { locale, props, emit, handleClick, fontSize, computed: vue.computed, get useI18n() {
        return useI18n;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["capsule-btn", { "active": $props.isActive, "disabled": $props.disabled }]),
        onClick: $setup.handleClick
      },
      [
        vue.createElementVNode(
          "text",
          { class: "capsule-text" },
          vue.toDisplayString($props.text),
          1
          /* TEXT */
        )
      ],
      2
      /* CLASS */
    );
  }
  const CapsuleButton = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-97b830de"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/capsule-button.vue"]]);
  const _sfc_main$g = {
    __name: "expandable-capsule",
    props: {
      // 按钮文字
      text: {
        type: String,
        required: true
      },
      // 默认是否展开
      defaultExpanded: {
        type: Boolean,
        default: false
      },
      // 外部控制的active状态（优先级高于内部isExpanded）
      externalActive: {
        type: Boolean,
        default: void 0
      },
      // 胶囊按钮圆角
      capsuleRadius: {
        type: String,
        default: "30rpx"
      },
      // 延展面板圆角
      panelRadius: {
        type: String,
        default: "30rpx"
      }
    },
    emits: ["expand", "collapse"],
    setup(__props, { expose: __expose, emit: __emit }) {
      vue.useCssVars((_ctx) => ({
        "7d677368-capsuleRadius": __props.capsuleRadius,
        "7d677368-fontSize": fontSize.value,
        "7d677368-panelRadius": __props.panelRadius
      }));
      const { locale } = useI18n();
      const props = __props;
      const emit = __emit;
      const isExpanded = vue.ref(props.defaultExpanded);
      const fontSize = vue.computed(() => {
        return locale.value === "zh-CN" ? "32rpx" : "28rpx";
      });
      const toggleExpand = () => {
        isExpanded.value = !isExpanded.value;
        if (isExpanded.value) {
          emit("expand");
        } else {
          emit("collapse");
        }
      };
      __expose({
        expand: () => {
          isExpanded.value = true;
          emit("expand");
        },
        collapse: () => {
          isExpanded.value = false;
          emit("collapse");
        }
      });
      const __returned__ = { locale, props, emit, isExpanded, fontSize, toggleExpand, ref: vue.ref, computed: vue.computed, get useI18n() {
        return useI18n;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "expandable-capsule" }, [
      vue.createCommentVNode(" 胶囊按钮头部 "),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["capsule-header", { "active": $props.externalActive !== void 0 ? $props.externalActive : $setup.isExpanded }]),
          onClick: $setup.toggleExpand
        },
        [
          vue.createElementVNode(
            "text",
            { class: "capsule-text" },
            vue.toDisplayString($props.text),
            1
            /* TEXT */
          )
        ],
        2
        /* CLASS */
      ),
      vue.createCommentVNode(" 向下展开的面板 "),
      $setup.isExpanded ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "capsule-panel"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const ExpandableCapsule = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-7d677368"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/expandable-capsule.vue"]]);
  const _imports_0$7 = "/static/icons/home/pop-up.png";
  const _sfc_main$f = {
    __name: "tip-modal",
    props: {
      // 是否显示
      visible: {
        type: Boolean,
        default: false
      },
      // 提示消息
      message: {
        type: String,
        default: ""
      },
      // 弹窗类型：'info' 纯提示 | 'confirm' 确认选择
      type: {
        type: String,
        default: "info",
        validator: (value) => ["info", "confirm"].includes(value)
      },
      // 确定按钮文字
      confirmText: {
        type: String,
        default: "确定"
      },
      // 取消按钮文字
      cancelText: {
        type: String,
        default: "取消"
      },
      // 弹窗宽度
      width: {
        type: String,
        default: "600rpx"
      },
      // 弹窗最小高度
      minHeight: {
        type: String,
        default: "400rpx"
      }
    },
    emits: ["confirm", "cancel", "close"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const contentStyle = vue.computed(() => ({
        width: props.width,
        minHeight: props.minHeight
      }));
      const handleClose = () => {
        emit("close");
      };
      const handleConfirm = () => {
        emit("confirm");
      };
      const handleCancel = () => {
        emit("cancel");
      };
      const __returned__ = { props, emit, contentStyle, handleClose, handleConfirm, handleCancel, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.visible ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "tip-modal",
      onClick: $setup.handleClose
    }, [
      vue.createElementVNode(
        "view",
        {
          class: "tip-content",
          style: vue.normalizeStyle($setup.contentStyle),
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        },
        [
          vue.createElementVNode("image", {
            class: "tip-bg",
            src: _imports_0$7,
            mode: "aspectFit"
          }),
          vue.createElementVNode("view", { class: "tip-message-area" }, [
            vue.createElementVNode(
              "text",
              { class: "tip-message" },
              vue.toDisplayString($props.message),
              1
              /* TEXT */
            ),
            $props.type === "confirm" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "tip-buttons"
            }, [
              vue.createElementVNode("view", {
                class: "tip-btn tip-btn-cancel",
                onClick: $setup.handleCancel
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "tip-btn-text" },
                  vue.toDisplayString($props.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                class: "tip-btn tip-btn-confirm",
                onClick: $setup.handleConfirm
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "tip-btn-text" },
                  vue.toDisplayString($props.confirmText),
                  1
                  /* TEXT */
                )
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ],
        4
        /* STYLE */
      )
    ])) : vue.createCommentVNode("v-if", true);
  }
  const TipModal = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-d8c96405"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/tip-modal.vue"]]);
  const _sfc_main$e = {
    __name: "virtual-joystick",
    props: {
      /** throttle=前后(front/back)；yaw=左右(left/right) */
      mode: { type: String, default: "throttle" },
      // "throttle" | "yaw"
      /** 外圈直径(px) */
      size: { type: Number, default: 160 },
      /** 摇杆帽直径(px) */
      knobSize: { type: Number, default: 72 },
      /** 死区比例(0~1)：中心这圈输出 stop */
      deadZone: { type: Number, default: 0.14 },
      /** 反转方向（可选） */
      invert: { type: Boolean, default: false },
      /** 是否显示箭头 */
      showArrows: { type: Boolean, default: true }
    },
    emits: ["start", "change", "end"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const inst = vue.getCurrentInstance();
      const center = vue.ref({ x: 0, y: 0 });
      const baseR = vue.ref(0);
      const knobR = vue.ref(0);
      const dragging = vue.ref(false);
      const touchId = vue.ref(null);
      const offset = vue.ref({ x: 0, y: 0 });
      const lastDir = vue.ref("stop");
      const wrapStyle = vue.computed(() => ({
        width: `${props.size}px`,
        height: `${props.size}px`
      }));
      const knobStyle = vue.computed(() => ({
        width: `${props.knobSize}px`,
        height: `${props.knobSize}px`,
        transform: `translate(-50%, -50%) translate(${offset.value.x}px, ${offset.value.y}px)`
      }));
      function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
      }
      function getTouch(e, id) {
        const touches = e.touches || [];
        const changed = e.changedTouches || [];
        if (id == null)
          return changed[0] || touches[0];
        for (let i = 0; i < touches.length; i++) {
          if (touches[i].identifier === id)
            return touches[i];
        }
        for (let i = 0; i < changed.length; i++) {
          if (changed[i].identifier === id)
            return changed[i];
        }
        return null;
      }
      function queryRect() {
        return new Promise((resolve) => {
          const q = uni.createSelectorQuery();
          q.in(inst.proxy).select(".vj").boundingClientRect((rect) => resolve(rect)).exec();
        });
      }
      function calcDir(dx, dy, maxDist) {
        const dist = Math.sqrt(dx * dx + dy * dy);
        const deadPx = maxDist * props.deadZone;
        if (dist <= deadPx)
          return "stop";
        let dir;
        if (props.mode === "throttle") {
          dir = dy < 0 ? "front" : "back";
        } else {
          dir = dx < 0 ? "left" : "right";
        }
        if (!props.invert)
          return dir;
        const map = { front: "back", back: "front", left: "right", right: "left" };
        return map[dir] || dir;
      }
      function emitIfChanged(dir) {
        if (dir === lastDir.value)
          return;
        lastDir.value = dir;
        emit("change", { mode: props.mode, dir });
      }
      async function onStart(e) {
        dragging.value = true;
        const t = getTouch(e);
        touchId.value = (t == null ? void 0 : t.identifier) ?? null;
        await vue.nextTick();
        const rect = await queryRect();
        baseR.value = rect.width / 2;
        knobR.value = props.knobSize / 2;
        center.value = { x: rect.left + baseR.value, y: rect.top + baseR.value };
        emit("start");
        emitIfChanged("stop");
      }
      function onMove(e) {
        if (!dragging.value)
          return;
        const t = getTouch(e, touchId.value);
        if (!t)
          return;
        const dxRaw = t.clientX - center.value.x;
        const dyRaw = t.clientY - center.value.y;
        const maxDist = Math.max(1, baseR.value - knobR.value);
        const dist = Math.sqrt(dxRaw * dxRaw + dyRaw * dyRaw);
        const scale = dist > maxDist && dist > 0 ? maxDist / dist : 1;
        const dx = dxRaw * scale;
        const dy = dyRaw * scale;
        offset.value = { x: dx, y: dy };
        const dir = calcDir(dx, dy, maxDist);
        emitIfChanged(dir);
      }
      function onEnd() {
        if (!dragging.value)
          return;
        dragging.value = false;
        touchId.value = null;
        offset.value = { x: 0, y: 0 };
        emitIfChanged("stop");
        emit("end");
      }
      const __returned__ = { props, emit, inst, center, baseR, knobR, dragging, touchId, offset, lastDir, wrapStyle, knobStyle, clamp, getTouch, queryRect, calcDir, emitIfChanged, onStart, onMove, onEnd, ref: vue.ref, computed: vue.computed, nextTick: vue.nextTick, getCurrentInstance: vue.getCurrentInstance };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "vj",
        style: vue.normalizeStyle($setup.wrapStyle),
        onTouchstart: vue.withModifiers($setup.onStart, ["stop", "prevent"]),
        onTouchmove: vue.withModifiers($setup.onMove, ["stop", "prevent"]),
        onTouchend: vue.withModifiers($setup.onEnd, ["stop", "prevent"]),
        onTouchcancel: vue.withModifiers($setup.onEnd, ["stop", "prevent"])
      },
      [
        vue.createElementVNode("view", { class: "vj-base" }),
        vue.createCommentVNode(" 摇杆帽：视觉跟随手指 "),
        vue.createElementVNode(
          "view",
          {
            class: "vj-knob",
            style: vue.normalizeStyle($setup.knobStyle)
          },
          [
            $props.showArrows ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "vj-arrows"
            }, [
              vue.createCommentVNode(" throttle模式：只显示上下箭头 "),
              $props.mode === "throttle" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "arr up"
              })) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" yaw模式：只显示左右箭头 "),
              $props.mode === "yaw" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "arr right"
              })) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" throttle模式：只显示上下箭头 "),
              $props.mode === "throttle" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "arr down"
              })) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" yaw模式：只显示左右箭头 "),
              $props.mode === "yaw" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 3,
                class: "arr left"
              })) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        )
      ],
      36
      /* STYLE, NEED_HYDRATION */
    );
  }
  const VirtualJoystick = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-c8d8cbb8"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/virtual-joystick.vue"]]);
  const _imports_0$6 = "/static/icons/home/battery.png";
  const _sfc_main$d = {
    __name: "nav-statusBYClaude",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const currentTime = vue.ref("");
      let timer = null;
      const updateTime = () => {
        const now = /* @__PURE__ */ new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        currentTime.value = `${hours}:${minutes}`;
      };
      vue.onMounted(() => {
        updateTime();
        timer = setInterval(updateTime, 3e4);
      });
      vue.onUnmounted(() => {
        if (timer)
          clearInterval(timer);
      });
      const __returned__ = { t, currentTime, get timer() {
        return timer;
      }, set timer(v) {
        timer = v;
      }, updateTime, ref: vue.ref, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, get useI18n() {
        return useI18n;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "nav-status" }, [
      vue.createElementVNode("view", { class: "status-display" }, [
        vue.createElementVNode("view", { class: "time-section" }, [
          vue.createElementVNode(
            "text",
            { class: "time-text" },
            vue.toDisplayString($setup.currentTime),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "battery-section" }, [
          vue.createElementVNode(
            "text",
            { class: "battery-label" },
            vue.toDisplayString($setup.t("home.batteryStatus")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "battery-info" }, [
            vue.createElementVNode("image", {
              class: "battery-icon",
              src: _imports_0$6,
              mode: "aspectFit"
            }),
            vue.createElementVNode("text", { class: "battery-percent" }, "100%")
          ])
        ])
      ])
    ]);
  }
  const NavStatus = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-a8e2f413"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/navigation/nav-statusBYClaude.vue"]]);
  const _imports_0$5 = "/static/icons/home/background.png";
  const _imports_1 = "/static/icons/home/location-placeholder.jpg";
  const _sfc_main$c = {
    __name: "home",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const volume = vue.ref(50);
      const isOperationModalVisible = vue.ref(false);
      const isRouteSidebarVisible = vue.ref(false);
      const isCenterTipVisible = vue.ref(false);
      const centerTipMessage = vue.ref("");
      const centerTipType = vue.ref("info");
      const routes = vue.ref([
        { id: 1, name: "路线1" },
        { id: 2, name: "路线2" },
        { id: 3, name: "路线3" }
      ]);
      const selectedRoute = vue.ref(null);
      const openOperationModal = () => {
        isOperationModalVisible.value = true;
      };
      const closeOperationModal = () => {
        isOperationModalVisible.value = false;
      };
      const openRouteSidebar = () => {
        isRouteSidebarVisible.value = true;
      };
      const closeRouteSidebar = () => {
        isRouteSidebarVisible.value = false;
      };
      const showCenterTip = (message, type = "info") => {
        centerTipMessage.value = message;
        centerTipType.value = type;
        isCenterTipVisible.value = true;
      };
      const closeCenterTip = () => {
        isCenterTipVisible.value = false;
      };
      const selectRoute = (route) => {
        selectedRoute.value = route;
        showCenterTip(`您已经选择${route.name}`);
        const routeBtn = sideButtons.value.find((b) => b.action === "select-route");
        if (routeBtn) {
          routeBtn.text = route.name;
        }
        setTimeout(() => {
          closeRouteSidebar();
          closeCenterTip();
        }, 1500);
      };
      const goToNewRoute = () => {
        closeCenterTip();
        uni.navigateTo({ url: "/pages/route/index" });
      };
      const onVolumeChange = (e) => {
        volume.value = e.detail.value;
        formatAppLog("log", "at pages/index/home.vue:237", "音量调整为:", volume.value);
      };
      const throttleDir = vue.ref("stop");
      const yawDir = vue.ref("stop");
      const onThrottleChange = ({ dir }) => {
        throttleDir.value = dir;
        sendPositionCommand();
      };
      const onYawChange = ({ dir }) => {
        yawDir.value = dir;
        sendPositionCommand();
      };
      const sendPositionCommand = () => {
        const command = {
          throttle: throttleDir.value,
          yaw: yawDir.value
        };
        formatAppLog("log", "at pages/index/home.vue:262", "定位指令:", command);
      };
      const topButtonsConfig = vue.ref([
        { key: "settings", isActive: false, route: "/pages/settings/index" },
        { key: "remote", isActive: false, route: "/pages/remote/index" },
        { key: "newRoute", isActive: false, route: "/pages/route/index" },
        { key: "faceRecognition", isActive: false, route: "/pages/face/index" },
        { key: "voiceSettings", isActive: false, route: "/pages/voice/index" },
        { key: "mapping", isActive: true, route: "/pages/mapping/index" }
      ]);
      const topButtons = vue.computed(
        () => topButtonsConfig.value.map((btn) => ({
          ...btn,
          text: t(`home.${btn.key}`)
        }))
      );
      const sideButtonsConfig = vue.ref([
        { key: "initialPosition", isActive: false, action: "initial-position" },
        { key: "selectRoute", isActive: false, action: "select-route" },
        { key: "startTour", isActive: false, action: "start-tour" },
        { key: "stopTour", isActive: false, action: "stop-tour" },
        { key: "shutdown", isActive: false, action: "shutdown" }
      ]);
      const sideButtons = vue.computed(
        () => sideButtonsConfig.value.map((btn) => ({
          ...btn,
          text: t(`home.${btn.key}`)
        }))
      );
      const handleTopButtonClick = (btn) => {
        topButtonsConfig.value.forEach((b) => b.isActive = false);
        const config = topButtonsConfig.value.find((b) => b.key === btn.key);
        if (config)
          config.isActive = true;
        if (btn.route) {
          uni.navigateTo({ url: btn.route });
        }
      };
      const handleSideButtonClick = (btn) => {
        sideButtonsConfig.value.forEach((b) => b.isActive = false);
        const config = sideButtonsConfig.value.find((b) => b.key === btn.key);
        if (config)
          config.isActive = true;
        if (btn.action === "initial-position") {
          openOperationModal();
        } else if (btn.action === "select-route") {
          if (routes.value.length === 0) {
            showCenterTip("无可用路线请前往新建路线", "confirm");
          } else {
            openRouteSidebar();
          }
        }
        formatAppLog("log", "at pages/index/home.vue:336", "执行动作:", btn.action);
      };
      const __returned__ = { t, volume, isOperationModalVisible, isRouteSidebarVisible, isCenterTipVisible, centerTipMessage, centerTipType, routes, selectedRoute, openOperationModal, closeOperationModal, openRouteSidebar, closeRouteSidebar, showCenterTip, closeCenterTip, selectRoute, goToNewRoute, onVolumeChange, throttleDir, yawDir, onThrottleChange, onYawChange, sendPositionCommand, topButtonsConfig, topButtons, sideButtonsConfig, sideButtons, handleTopButtonClick, handleSideButtonClick, ref: vue.ref, computed: vue.computed, get useI18n() {
        return useI18n;
      }, CapsuleButton, ExpandableCapsule, TipModal, VirtualJoystick, NavStatusBYClaude: NavStatus };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home-container" }, [
      vue.createCommentVNode(" 背景图 "),
      vue.createElementVNode("image", {
        class: "background",
        src: _imports_0$5,
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" 主内容区域 "),
      vue.createElementVNode("view", { class: "main-content" }, [
        vue.createCommentVNode(" 顶部导航栏 "),
        vue.createElementVNode("view", { class: "top-nav" }, [
          vue.createCommentVNode(" 左侧 Logo "),
          vue.createElementVNode("view", { class: "nav-logo" }, [
            vue.createElementVNode("text", { class: "logo-text" }, "SIEMENS")
          ]),
          vue.createCommentVNode(" 中间功能按钮组 "),
          vue.createElementVNode("view", { class: "nav-buttons" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.topButtons, (btn, index) => {
                return vue.openBlock(), vue.createBlock($setup["CapsuleButton"], {
                  key: index,
                  text: btn.text,
                  isActive: btn.isActive,
                  onClick: ($event) => $setup.handleTopButtonClick(btn)
                }, null, 8, ["text", "isActive", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" 音量调节（可展开） "),
            vue.createElementVNode("view", { class: "volume-wrapper" }, [
              vue.createVNode($setup["ExpandableCapsule"], {
                text: $setup.t("home.volume")
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "volume-content" }, [
                    vue.createElementVNode("slider", {
                      value: $setup.volume,
                      min: 0,
                      max: 100,
                      activeColor: "#009999",
                      backgroundColor: "#e0e0e0",
                      "block-size": "20",
                      onChange: $setup.onVolumeChange
                    }, null, 40, ["value"]),
                    vue.createElementVNode(
                      "text",
                      { class: "volume-value" },
                      vue.toDisplayString($setup.volume) + "%",
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["text"])
            ])
          ]),
          vue.createCommentVNode(" 右侧状态栏 "),
          vue.createVNode($setup["NavStatusBYClaude"])
        ]),
        vue.createCommentVNode(" 左侧控制栏 "),
        vue.createElementVNode("view", { class: "left-sidebar" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.sideButtons, (btn, index) => {
              return vue.openBlock(), vue.createBlock($setup["CapsuleButton"], {
                key: index,
                text: btn.text,
                isActive: btn.isActive,
                onClick: ($event) => $setup.handleSideButtonClick(btn)
              }, null, 8, ["text", "isActive", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 左下角机器人视角 "),
        vue.createElementVNode("view", { class: "robot-perspective" }, [
          vue.createElementVNode(
            "text",
            { class: "perspective-label" },
            vue.toDisplayString($setup.t("home.robotPerspective")) + "：",
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "perspective-view" }, [
            vue.createCommentVNode(" 保持空白 ")
          ])
        ])
      ]),
      vue.createCommentVNode(" 操作弹窗 "),
      $setup.isOperationModalVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "operation-modal"
      }, [
        vue.createElementVNode("view", {
          class: "operation-content",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createCommentVNode(" 顶部提示文字 "),
          vue.createElementVNode("text", { class: "operation-tip" }, "请操作摇杆开始定位"),
          vue.createCommentVNode(" 中间图片区域 "),
          vue.createElementVNode("view", { class: "operation-image-wrapper" }, [
            vue.createElementVNode("image", {
              class: "operation-image",
              src: _imports_1,
              mode: "aspectFill"
            }),
            vue.createCommentVNode(" 左侧摇杆：控制前后 "),
            vue.createElementVNode("view", { class: "joystick-left" }, [
              vue.createVNode($setup["VirtualJoystick"], {
                mode: "throttle",
                size: 140,
                knobSize: 64,
                deadZone: 0.15,
                onChange: $setup.onThrottleChange
              })
            ]),
            vue.createCommentVNode(" 右侧摇杆：控制艏向 "),
            vue.createElementVNode("view", { class: "joystick-right" }, [
              vue.createVNode($setup["VirtualJoystick"], {
                mode: "yaw",
                size: 140,
                knobSize: 64,
                deadZone: 0.15,
                onChange: $setup.onYawChange
              })
            ])
          ]),
          vue.createCommentVNode(" 底部关闭按钮 "),
          vue.createElementVNode("view", {
            class: "operation-close-btn",
            onClick: $setup.closeOperationModal
          }, [
            vue.createElementVNode("text", { class: "close-btn-text" }, "退出")
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 右侧路线选择边栏 "),
      $setup.isRouteSidebarVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "route-sidebar-overlay",
        onClick: $setup.closeRouteSidebar
      }, [
        vue.createElementVNode("view", {
          class: "route-sidebar",
          onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode(
            "text",
            { class: "route-sidebar-title" },
            vue.toDisplayString($setup.t("home.selectRouteTitle")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "route-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.routes, (route) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: route.id,
                  class: vue.normalizeClass(["route-item", { "route-item-selected": $setup.selectedRoute && $setup.selectedRoute.id === route.id }]),
                  onClick: ($event) => $setup.selectRoute(route)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "route-name" },
                    vue.toDisplayString(route.name),
                    1
                    /* TEXT */
                  )
                ], 10, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 中间提示弹窗 "),
      vue.createVNode($setup["TipModal"], {
        visible: $setup.isCenterTipVisible,
        message: $setup.centerTipMessage,
        type: $setup.centerTipType,
        width: "900rpx",
        minHeight: "520rpx",
        onClose: $setup.closeCenterTip,
        onCancel: $setup.closeCenterTip,
        onConfirm: $setup.goToNewRoute
      }, null, 8, ["visible", "message", "type"])
    ]);
  }
  const PagesIndexHome = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-760d994e"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/index/home.vue"]]);
  const zhCN = {
    // 通用
    common: {
      confirm: "确认",
      cancel: "取消",
      save: "保存",
      delete: "删除",
      edit: "编辑",
      loading: "加载中...",
      success: "操作成功",
      failed: "操作失败",
      retry: "重试",
      back: "返回"
    },
    // 欢迎页
    welcome: {
      title: "SIEMENS",
      line1: "欢迎来到",
      line2: "西门子1号展厅",
      robotStatus: "机器人状态",
      connected: "已连接",
      disconnected: "未连接",
      startRobot: "启动机器人"
    },
    // 首页/功能大厅
    home: {
      title: "控制面板",
      settings: "设置",
      remote: "遥控模式",
      newRoute: "新建路线",
      faceRecognition: "人脸识别",
      voiceSettings: "语音设置",
      mapping: "建图导航",
      volume: "音量调节",
      initialPosition: "初始定位",
      selectRoute: "选择路线",
      startTour: "开启导览",
      stopTour: "关闭导览",
      shutdown: "关闭机器人",
      robotPerspective: "机器人视角",
      selectRouteTitle: "选择路线",
      batteryStatus: "电量"
    },
    // 设置
    settings: {
      title: "设置",
      language: "语言",
      languageSwitch: "语言切换",
      theme: "主题",
      robotModel: "机器人型号",
      audioSource: "音源选择",
      audioSourceInternal: "本体音响",
      audioSourceExternal: "外接音响",
      deviceNumber: "设备编号",
      serviceIP: "服务IP",
      deploymentTime: "部署时间",
      wlan: "WLAN",
      connectionStatus: "连接状态",
      contactUs: "联系我们"
    },
    // 遥控模式
    remote: {
      title: "遥控模式",
      functionArea: "展示功能区",
      actions: {
        highFive: "击掌",
        handshake: "握手",
        hug: "拥抱",
        clap: "鼓掌",
        wave: "挥手",
        raiseHands: "举双手",
        doubleHeart: "双手比心",
        raiseRight: "举右手",
        blowKiss: "右手飞吻",
        chestWave: "胸前挥手"
      }
    },
    // 新建路线
    route: {
      title: "新建路线",
      mapPlaceholder: "地图区域",
      addContent: "添加讲解内容",
      forwardSpeed: "前进速度",
      save: "保存",
      editRouteName: "编辑路线名称",
      routeNamePlaceholder: "请输入路线名称",
      contentPlaceholder: "请输入讲解内容...",
      defaultRouteName: "路线1"
    },
    // 讲解内容配置
    routeContent: {
      actionTitle: "执行动作",
      languageTitle: "语言",
      voiceTitle: "声音选择",
      addContentTitle: "添加讲解内容",
      contentPlaceholder: "请输入要讲解的内容",
      uploadFile: "上传文件",
      actions: {
        guideRight: "向右引导",
        guideLeft: "向左引导",
        introduceRight: "向右介绍",
        introduceLeft: "向左介绍",
        welcome: "欢迎光临",
        auto: "自动"
      },
      languages: {
        chinese: "中文",
        english: "英文",
        german: "德文"
      },
      voices: {
        maleA: "A (男声)",
        femaleB: "B (女声)",
        childC: "C (童声)"
      }
    },
    // 人脸识别
    face: {
      title: "人脸识别",
      savedFaces: "已保存人脸数据",
      uploadPhotos: "上传照片",
      namePlaceholder: "请填写备注",
      upload: "上传",
      noMore: "没有更多了",
      emptyTip: "暂无保存的人脸数据",
      deleteConfirmTitle: "确认删除",
      deleteConfirmContent: "确定要删除该人脸数据吗？",
      pleaseSelectImage: "请先选择图片",
      pleaseEnterName: "请输入姓名",
      noDataToSave: "没有可保存的数据"
    },
    // 语音设置
    voice: {
      title: "语音设置"
    },
    // 建图和导航
    mapping: {
      title: "建图和导航"
    },
    // 音量调节
    volume: {
      title: "音量调节"
    },
    // 设备相关
    device: {
      status: "设备状态",
      online: "在线",
      offline: "离线",
      connect: "连接",
      disconnect: "断开连接"
    }
  };
  const enUS = {
    // 通用
    common: {
      confirm: "Confirm",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      loading: "Loading...",
      success: "Success",
      failed: "Failed",
      retry: "Retry",
      back: "Back"
    },
    // 欢迎页
    welcome: {
      title: "SIEMENS",
      line1: "Welcome to",
      line2: "Siemens Hall No.1",
      robotStatus: "Robot Status",
      connected: "Connected",
      disconnected: "Disconnected",
      startRobot: "Start Robot"
    },
    // 首页/功能大厅
    home: {
      title: "Control Panel",
      settings: "Settings",
      remote: "Remote Control",
      newRoute: "New Route",
      faceRecognition: "Face Recognition",
      voiceSettings: "Voice Settings",
      mapping: "Mapping & Navigation",
      volume: "Volume",
      initialPosition: "Initial Position",
      selectRoute: "Select Route",
      startTour: "Start Tour",
      stopTour: "Stop Tour",
      shutdown: "Shutdown Robot",
      robotPerspective: "Robot View",
      selectRouteTitle: "Select Route",
      batteryStatus: "Battery"
    },
    // 设置
    settings: {
      title: "Settings",
      language: "Language",
      languageSwitch: "Language",
      theme: "Theme",
      robotModel: "Robot Model",
      audioSource: "Audio Source",
      audioSourceInternal: "Internal Speaker",
      audioSourceExternal: "External Speaker",
      deviceNumber: "Device Number",
      serviceIP: "Service IP",
      deploymentTime: "Deployment Time",
      wlan: "WLAN",
      connectionStatus: "Connection Status",
      contactUs: "Contact Us"
    },
    // 遥控模式
    remote: {
      title: "Remote Control",
      functionArea: "Action Zone",
      actions: {
        highFive: "High Five",
        handshake: "Handshake",
        hug: "Hug",
        clap: "Clap",
        wave: "Wave",
        raiseHands: "Raise Hands",
        doubleHeart: "Double Heart",
        raiseRight: "Raise Right",
        blowKiss: "Blow Kiss",
        chestWave: "Chest Wave"
      }
    },
    // 新建路线
    route: {
      title: "New Route",
      mapPlaceholder: "Map Area",
      addContent: "Add Content",
      forwardSpeed: "Forward Speed",
      save: "Save",
      editRouteName: "Edit Route Name",
      routeNamePlaceholder: "Enter route name",
      contentPlaceholder: "Enter explanation content...",
      defaultRouteName: "Route 1"
    },
    // 讲解内容配置
    routeContent: {
      actionTitle: "Action",
      languageTitle: "Language",
      voiceTitle: "Voice Selection",
      addContentTitle: "Add Content",
      contentPlaceholder: "Enter the content to explain",
      uploadFile: "Upload File",
      actions: {
        guideRight: "Guide Right",
        guideLeft: "Guide Left",
        introduceRight: "Introduce Right",
        introduceLeft: "Introduce Left",
        welcome: "Welcome",
        auto: "Auto"
      },
      languages: {
        chinese: "Chinese",
        english: "English",
        german: "German"
      },
      voices: {
        maleA: "A (Male)",
        femaleB: "B (Female)",
        childC: "C (Child)"
      }
    },
    // 人脸识别
    face: {
      title: "Face Recognition",
      savedFaces: "Saved Face Data",
      uploadPhotos: "Upload Photos",
      namePlaceholder: "Enter name",
      upload: "Upload",
      noMore: "No more data",
      emptyTip: "No saved face data",
      deleteConfirmTitle: "Confirm Delete",
      deleteConfirmContent: "Are you sure to delete this face data?",
      pleaseSelectImage: "Please select an image first",
      pleaseEnterName: "Please enter a name",
      noDataToSave: "No data to save"
    },
    // 语音设置
    voice: {
      title: "Voice Settings"
    },
    // 建图和导航
    mapping: {
      title: "Mapping & Navigation"
    },
    // 音量调节
    volume: {
      title: "Volume"
    },
    // 设备相关
    device: {
      status: "Device Status",
      online: "Online",
      offline: "Offline",
      connect: "Connect",
      disconnect: "Disconnect"
    }
  };
  const deDE = {
    // 通用
    common: {
      confirm: "Bestätigen",
      cancel: "Abbrechen",
      save: "Speichern",
      delete: "Löschen",
      edit: "Bearbeiten",
      loading: "Laden...",
      success: "Erfolgreich",
      failed: "Fehlgeschlagen",
      retry: "Wiederholen",
      back: "Zurück"
    },
    // 欢迎页
    welcome: {
      title: "SIEMENS",
      line1: "Willkommen bei",
      line2: "Siemens Halle Nr.1",
      robotStatus: "Roboterstatus",
      connected: "Verbunden",
      disconnected: "Nicht verbunden",
      startRobot: "Roboter starten"
    },
    // 首页/功能大厅
    home: {
      title: "Bedienfeld",
      settings: "Einstellungen",
      remote: "Fernmodus",
      newRoute: "Neue Route",
      faceRecognition: "Gesichtserkennung",
      voiceSettings: "Sprache",
      mapping: "Karte/Navi",
      volume: "Lautstärke",
      initialPosition: "Startposition",
      selectRoute: "Route wählen",
      startTour: "Tour starten",
      stopTour: "Tour beenden",
      shutdown: "Ausschalten",
      robotPerspective: "Roboter-Ansicht",
      selectRouteTitle: "Route wählen",
      batteryStatus: "Ladestand"
    },
    // 设置
    settings: {
      title: "Einstellungen",
      language: "Sprache",
      languageSwitch: "Sprache",
      theme: "Thema",
      robotModel: "Robotermodell",
      audioSource: "Audioquelle",
      audioSourceInternal: "Interner Lautsprecher",
      audioSourceExternal: "Externer Lautsprecher",
      deviceNumber: "Gerätenummer",
      serviceIP: "Service-IP",
      deploymentTime: "Einsatzzeit",
      wlan: "WLAN",
      connectionStatus: "Verbindungsstatus",
      contactUs: "Kontaktieren Sie uns"
    },
    // 遥控模式
    remote: {
      title: "Fernmodus",
      functionArea: "Aktionsbereich",
      actions: {
        highFive: "Abklatschen",
        handshake: "Händedruck",
        hug: "Umarmung",
        clap: "Klatschen",
        wave: "Winken",
        raiseHands: "Hände hoch",
        doubleHeart: "Doppelherz",
        raiseRight: "Rechts hoch",
        blowKiss: "Kusshand",
        chestWave: "Brustwinken"
      }
    },
    // 新建路线
    route: {
      title: "Neue Route",
      mapPlaceholder: "Kartenbereich",
      addContent: "Inhalt hinzufügen",
      forwardSpeed: "Vorwärtsgeschwindigkeit",
      save: "Speichern",
      editRouteName: "Routenname bearbeiten",
      routeNamePlaceholder: "Routenname eingeben",
      contentPlaceholder: "Erklärungsinhalt eingeben...",
      defaultRouteName: "Route 1"
    },
    // 讲解内容配置
    routeContent: {
      actionTitle: "Aktion",
      languageTitle: "Sprache",
      voiceTitle: "Stimmauswahl",
      addContentTitle: "Inhalt hinzufügen",
      contentPlaceholder: "Geben Sie den zu erklärenden Inhalt ein",
      uploadFile: "Datei hochladen",
      actions: {
        guideRight: "Rechts führen",
        guideLeft: "Links führen",
        introduceRight: "Rechts vorstellen",
        introduceLeft: "Links vorstellen",
        welcome: "Willkommen",
        auto: "Automatisch"
      },
      languages: {
        chinese: "Chinesisch",
        english: "Englisch",
        german: "Deutsch"
      },
      voices: {
        maleA: "A (Männlich)",
        femaleB: "B (Weiblich)",
        childC: "C (Kind)"
      }
    },
    // 人脸识别
    face: {
      title: "Gesichtserkennung",
      savedFaces: "Gespeicherte Gesichtsdaten",
      uploadPhotos: "Fotos hochladen",
      namePlaceholder: "Name eingeben",
      upload: "Hochladen",
      noMore: "Keine weiteren Daten",
      emptyTip: "Keine gespeicherten Gesichtsdaten",
      deleteConfirmTitle: "Löschen bestätigen",
      deleteConfirmContent: "Möchten Sie diese Gesichtsdaten wirklich löschen?",
      pleaseSelectImage: "Bitte wählen Sie zuerst ein Bild",
      pleaseEnterName: "Bitte geben Sie einen Namen ein",
      noDataToSave: "Keine Daten zum Speichern"
    },
    // 语音设置
    voice: {
      title: "Spracheinstellungen"
    },
    // 建图和导航
    mapping: {
      title: "Karte/Navi"
    },
    // 音量调节
    volume: {
      title: "Lautstärke"
    },
    // 设备相关
    device: {
      status: "Gerätestatus",
      online: "Online",
      offline: "Offline",
      connect: "Verbinden",
      disconnect: "Trennen"
    }
  };
  const i18n = createI18n({
    legacy: false,
    // 使用 Composition API 模式
    globalInjection: true,
    // 全局注入 $t 函数
    locale: "zh-CN",
    // 始终默认中文
    fallbackLocale: "zh-CN",
    // 回退语言
    messages: {
      "zh-CN": zhCN,
      "en-US": enUS,
      "de-DE": deDE
    }
  });
  const supportedLanguages = [
    { code: "zh-CN", name: "中文", nativeName: "中文" },
    { code: "en-US", name: "English", nativeName: "English" },
    { code: "de-DE", name: "Deutsch", nativeName: "Deutsch" }
  ];
  const _imports_0$4 = "/static/icons/general/btn_general_back.svg";
  const _sfc_main$b = {
    __name: "common-back-btn",
    props: {
      // 是否使用默认返回行为（uni.navigateBack）
      useDefault: {
        type: Boolean,
        default: true
      }
    },
    emits: ["click"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emits = __emit;
      const handleClick = () => {
        emits("click");
        if (props.useDefault) {
          uni.navigateBack();
        }
      };
      const __returned__ = { props, emits, handleClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "back-btn",
      onClick: $setup.handleClick
    }, [
      vue.createElementVNode("image", {
        class: "back-icon",
        src: _imports_0$4,
        mode: "widthFix"
      })
    ]);
  }
  const CommonBackBtn = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-b4654ad9"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/common-back-btn.vue"]]);
  const _sfc_main$a = {
    __name: "page-header",
    props: {
      // 当前激活的按钮 key（用于高亮显示）
      activeKey: {
        type: String,
        default: ""
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const props = __props;
      const volume = vue.ref(50);
      const topButtonsConfig = [
        { key: "settings", route: "/pages/settings/index" },
        { key: "remote", route: "/pages/remote/index" },
        { key: "newRoute", route: "/pages/route/index" },
        { key: "faceRecognition", route: "/pages/face/index" },
        { key: "voiceSettings", route: "/pages/voice/index" },
        { key: "mapping", route: "/pages/mapping/index" }
      ];
      const topButtons = vue.computed(
        () => topButtonsConfig.map((btn) => ({
          ...btn,
          text: t(`home.${btn.key}`)
        }))
      );
      const isButtonActive = (key) => {
        return key === props.activeKey;
      };
      const handleButtonClick = (btn) => {
        if (btn.route) {
          if (btn.key === props.activeKey) {
            return;
          }
          uni.navigateTo({ url: btn.route });
        }
      };
      const onVolumeChange = (e) => {
        volume.value = e.detail.value;
        formatAppLog("log", "at components/layout/page-header.vue:121", "音量调整为:", volume.value);
      };
      const __returned__ = { t, props, volume, topButtonsConfig, topButtons, isButtonActive, handleButtonClick, onVolumeChange, ref: vue.ref, computed: vue.computed, get useI18n() {
        return useI18n;
      }, CommonBackBtn, CapsuleButton, ExpandableCapsule, NavStatusBYClaude: NavStatus };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-header" }, [
      vue.createCommentVNode(" 返回按钮 - 绝对定位，不影响其他元素布局 "),
      vue.createElementVNode("view", { class: "back-btn-wrapper" }, [
        vue.createVNode($setup["CommonBackBtn"])
      ]),
      vue.createCommentVNode(" 主内容区域 "),
      vue.createElementVNode("view", { class: "main-content" }, [
        vue.createCommentVNode(" 顶部导航栏 - 与首页结构完全一致 "),
        vue.createElementVNode("view", { class: "top-nav" }, [
          vue.createCommentVNode(" 左侧占位：与首页 Logo 同宽，保持功能按钮位置一致 "),
          vue.createElementVNode("view", { class: "nav-left-placeholder" }),
          vue.createCommentVNode(" 中间功能按钮组 "),
          vue.createElementVNode("view", { class: "nav-buttons" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.topButtons, (btn, index) => {
                return vue.openBlock(), vue.createBlock($setup["CapsuleButton"], {
                  key: index,
                  text: btn.text,
                  isActive: $setup.isButtonActive(btn.key),
                  onClick: ($event) => $setup.handleButtonClick(btn)
                }, null, 8, ["text", "isActive", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" 音量调节（可展开） "),
            vue.createElementVNode("view", { class: "volume-wrapper" }, [
              vue.createVNode($setup["ExpandableCapsule"], {
                text: $setup.t("home.volume")
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "volume-content" }, [
                    vue.createElementVNode("slider", {
                      value: $setup.volume,
                      min: 0,
                      max: 100,
                      activeColor: "#009999",
                      backgroundColor: "#e0e0e0",
                      "block-size": "20",
                      onChange: $setup.onVolumeChange
                    }, null, 40, ["value"]),
                    vue.createElementVNode(
                      "text",
                      { class: "volume-value" },
                      vue.toDisplayString($setup.volume) + "%",
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["text"])
            ])
          ]),
          vue.createCommentVNode(" 右侧状态栏 "),
          vue.createVNode($setup["NavStatusBYClaude"])
        ]),
        vue.createCommentVNode(" 页面内容插槽 "),
        vue.createElementVNode("view", { class: "page-body" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ])
    ]);
  }
  const PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-73b0c5eb"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/layout/page-header.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const { locale } = useI18n();
      const languageCapsule = vue.ref(null);
      const currentLanguageName = vue.computed(() => {
        const lang = supportedLanguages.find((l) => l.code === locale.value);
        return lang ? lang.nativeName : "中文";
      });
      const handleLanguageSelect = (langCode) => {
        locale.value = langCode;
        if (languageCapsule.value) {
          languageCapsule.value.collapse();
        }
      };
      const audioSource = vue.ref("internal");
      const selectedDevice = vue.ref(null);
      const externalCapsule = vue.ref(null);
      const isDeviceSelecting = vue.ref(false);
      const handleInternalClick = () => {
        audioSource.value = "internal";
        selectedDevice.value = null;
      };
      const handleExternalExpand = () => {
      };
      const handleExternalCollapse = () => {
        if (isDeviceSelecting.value) {
          isDeviceSelecting.value = false;
          return;
        }
        if (!selectedDevice.value) {
          audioSource.value = "internal";
        }
      };
      const handleDeviceSelect = (deviceName) => {
        isDeviceSelecting.value = true;
        selectedDevice.value = deviceName;
        audioSource.value = "external";
        if (externalCapsule.value) {
          externalCapsule.value.collapse();
        }
      };
      const __returned__ = { locale, languageCapsule, currentLanguageName, handleLanguageSelect, audioSource, selectedDevice, externalCapsule, isDeviceSelecting, handleInternalClick, handleExternalExpand, handleExternalCollapse, handleDeviceSelect, ref: vue.ref, computed: vue.computed, get useI18n() {
        return useI18n;
      }, get supportedLanguages() {
        return supportedLanguages;
      }, PageHeader, ExpandableCapsule };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "settings" }, {
      default: vue.withCtx(() => [
        vue.createCommentVNode(" 设置页面内容 "),
        vue.createElementVNode("view", { class: "settings-container" }, [
          vue.createCommentVNode(" 外层大卡片 "),
          vue.createElementVNode("view", { class: "settings-card" }, [
            vue.createElementVNode("view", { class: "pill-list" }, [
              vue.createCommentVNode(" 机器人型号 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.robotModel")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "G1-U2")
              ]),
              vue.createCommentVNode(" 语言切换 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.languageSwitch")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "pill-value voice-wrap" }, [
                  vue.createElementVNode("view", { class: "expandable-wrapper full-width" }, [
                    vue.createVNode($setup["ExpandableCapsule"], {
                      ref: "languageCapsule",
                      text: $setup.currentLanguageName,
                      capsuleRadius: "40rpx",
                      panelRadius: "40rpx"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", { class: "language-panel" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList($setup.supportedLanguages, (lang) => {
                              return vue.openBlock(), vue.createElementBlock("view", {
                                key: lang.code,
                                class: vue.normalizeClass(["language-item", { "language-selected": $setup.locale === lang.code }]),
                                onClick: ($event) => $setup.handleLanguageSelect(lang.code)
                              }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "language-name" },
                                  vue.toDisplayString(lang.nativeName),
                                  1
                                  /* TEXT */
                                )
                              ], 10, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["text"])
                  ])
                ])
              ]),
              vue.createCommentVNode(" 音源选择 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.audioSource")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "pill-value voice-wrap" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["voice-pill", { "active": $setup.audioSource === "internal" }]),
                      onClick: $setup.handleInternalClick
                    },
                    vue.toDisplayString(_ctx.$t("settings.audioSourceInternal")),
                    3
                    /* TEXT, CLASS */
                  ),
                  vue.createElementVNode("view", { class: "expandable-wrapper" }, [
                    vue.createVNode($setup["ExpandableCapsule"], {
                      ref: "externalCapsule",
                      text: _ctx.$t("settings.audioSourceExternal"),
                      externalActive: $setup.audioSource === "external",
                      onExpand: $setup.handleExternalExpand,
                      onCollapse: $setup.handleExternalCollapse
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("view", { class: "external-device-panel" }, [
                          vue.createElementVNode("view", { class: "device-section" }, [
                            vue.createElementVNode("text", { class: "device-label" }, "可用设备"),
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass(["device-item", { "device-selected": $setup.selectedDevice === "EXA-H0001" }]),
                                onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleDeviceSelect("EXA-H0001"))
                              },
                              [
                                vue.createElementVNode("text", { class: "device-name" }, "EXA-H0001")
                              ],
                              2
                              /* CLASS */
                            )
                          ]),
                          vue.createElementVNode("text", { class: "device-tip" }, "注意：使用外接音响时，音量会较大")
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["text", "externalActive"])
                  ])
                ])
              ]),
              vue.createCommentVNode(" 设备编号 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.deviceNumber")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "xxxx xxxx")
              ]),
              vue.createCommentVNode(" 服务器IP "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.serviceIP")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "192.168.1.1")
              ]),
              vue.createCommentVNode(" 部署时间 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.deploymentTime")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "2025.11.28")
              ]),
              vue.createCommentVNode(" WLAN "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.wlan")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "ZJU Office")
              ]),
              vue.createCommentVNode(" 连接状态 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.connectionStatus")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "已连接")
              ]),
              vue.createCommentVNode(" 联系我们 "),
              vue.createElementVNode("view", { class: "pill-item" }, [
                vue.createElementVNode(
                  "text",
                  { class: "pill-label" },
                  vue.toDisplayString(_ctx.$t("settings.contactUs")) + "：",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "pill-value" }, "xxx公司")
              ])
            ])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesSettingsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-a11b3e9a"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/settings/index.vue"]]);
  const _imports_0$3 = "/static/icons/remote/robot-stand.png";
  const _sfc_main$8 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const actionButtons = vue.reactive([
        { key: "highFive", icon: "/static/icons/remote/击掌.png" },
        { key: "handshake", icon: "/static/icons/remote/握手.png" },
        { key: "hug", icon: "/static/icons/remote/拥抱.png" },
        { key: "clap", icon: "/static/icons/remote/鼓掌.png" },
        { key: "wave", icon: "/static/icons/remote/挥手.png" },
        { key: "raiseHands", icon: "/static/icons/remote/举双手.png" },
        { key: "doubleHeart", icon: "/static/icons/remote/双手比心.png" },
        { key: "raiseRight", icon: "/static/icons/remote/举右手.png" },
        { key: "blowKiss", icon: "/static/icons/remote/右手飞吻.png" },
        { key: "chestWave", icon: "/static/icons/remote/胸前挥手.png" }
      ]);
      const handleAction = (actionKey) => {
        formatAppLog("log", "at pages/remote/index.vue:122", "Action triggered:", actionKey);
      };
      const onJoystickStart = (mode) => {
        formatAppLog("log", "at pages/remote/index.vue:128", "Joystick start:", mode);
      };
      const onJoystickChange = (data) => {
        formatAppLog("log", "at pages/remote/index.vue:132", "Joystick change:", data);
      };
      const onJoystickEnd = (mode) => {
        formatAppLog("log", "at pages/remote/index.vue:137", "Joystick end:", mode);
      };
      const __returned__ = { t, actionButtons, handleAction, onJoystickStart, onJoystickChange, onJoystickEnd, reactive: vue.reactive, get useI18n() {
        return useI18n;
      }, CommonBackBtn, NavStatus, VirtualJoystick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-container" }, [
      vue.createCommentVNode(" 左上角返回按钮 "),
      vue.createElementVNode("view", { class: "back-btn-wrapper" }, [
        vue.createVNode($setup["CommonBackBtn"])
      ]),
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createCommentVNode(" 中间标题 "),
        vue.createElementVNode(
          "text",
          { class: "page-title" },
          vue.toDisplayString($setup.t("remote.title")),
          1
          /* TEXT */
        ),
        vue.createCommentVNode(" 右侧状态栏和机器人头像 "),
        vue.createElementVNode("view", { class: "nav-right" }, [
          vue.createVNode($setup["NavStatus"]),
          vue.createElementVNode("image", {
            class: "robot-avatar",
            src: _imports_0$3,
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createCommentVNode(" 主内容卡片 "),
      vue.createElementVNode("view", { class: "content-card" }, [
        vue.createCommentVNode(" 展示功能区标题 "),
        vue.createElementVNode(
          "text",
          { class: "section-title" },
          vue.toDisplayString($setup.t("remote.functionArea")),
          1
          /* TEXT */
        ),
        vue.createCommentVNode(" 功能按钮网格 "),
        vue.createElementVNode("view", { class: "button-grid" }, [
          vue.createCommentVNode(" 第一行：4个按钮 "),
          vue.createElementVNode("view", { class: "button-row" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.actionButtons.slice(0, 4), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.key,
                  class: "action-btn",
                  onClick: ($event) => $setup.handleAction(item.key)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "btn-text" },
                    vue.toDisplayString($setup.t(`remote.actions.${item.key}`)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    class: "btn-icon",
                    src: item.icon,
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 第二行：3个按钮 "),
          vue.createElementVNode("view", { class: "button-row" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.actionButtons.slice(4, 7), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.key,
                  class: "action-btn",
                  onClick: ($event) => $setup.handleAction(item.key)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "btn-text" },
                    vue.toDisplayString($setup.t(`remote.actions.${item.key}`)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    class: "btn-icon",
                    src: item.icon,
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 第三行：3个按钮 "),
          vue.createElementVNode("view", { class: "button-row" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.actionButtons.slice(7, 10), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.key,
                  class: "action-btn",
                  onClick: ($event) => $setup.handleAction(item.key)
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "btn-text" },
                    vue.toDisplayString($setup.t(`remote.actions.${item.key}`)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("image", {
                    class: "btn-icon",
                    src: item.icon,
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createCommentVNode(" 底部摇杆区域 "),
      vue.createElementVNode("view", { class: "joystick-area" }, [
        vue.createCommentVNode(" 左侧摇杆：前进/后退 "),
        vue.createVNode($setup["VirtualJoystick"], {
          mode: "throttle",
          size: 140,
          "knob-size": 64,
          onStart: _cache[0] || (_cache[0] = ($event) => $setup.onJoystickStart("throttle")),
          onChange: $setup.onJoystickChange,
          onEnd: _cache[1] || (_cache[1] = ($event) => $setup.onJoystickEnd("throttle"))
        }),
        vue.createCommentVNode(" 右侧摇杆：左转/右转 "),
        vue.createVNode($setup["VirtualJoystick"], {
          mode: "yaw",
          size: 140,
          "knob-size": 64,
          onStart: _cache[2] || (_cache[2] = ($event) => $setup.onJoystickStart("yaw")),
          onChange: $setup.onJoystickChange,
          onEnd: _cache[3] || (_cache[3] = ($event) => $setup.onJoystickEnd("yaw"))
        })
      ])
    ]);
  }
  const PagesRemoteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-91c9b6da"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/remote/index.vue"]]);
  const _imports_0$2 = "/static/icons/route/background.jpg";
  const _sfc_main$7 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const routeName = vue.ref("");
      const tempRouteName = vue.ref("");
      const isRouteNameModalVisible = vue.ref(false);
      const showRouteNameInput = () => {
        tempRouteName.value = routeName.value;
        isRouteNameModalVisible.value = true;
      };
      const hideRouteNameInput = () => {
        isRouteNameModalVisible.value = false;
      };
      const confirmRouteName = () => {
        if (tempRouteName.value.trim()) {
          routeName.value = tempRouteName.value.trim();
        }
        hideRouteNameInput();
      };
      const showContentInput = () => {
        uni.navigateTo({ url: "/pages/route/content" });
      };
      const speedList = vue.ref([
        { id: 1, name: "V1" },
        { id: 2, name: "V2" },
        { id: 3, name: "V3" }
      ]);
      const selectedSpeedId = vue.ref(1);
      const currentSpeedName = vue.computed(() => {
        const speed = speedList.value.find((s) => s.id === selectedSpeedId.value);
        return speed ? speed.name : "";
      });
      const handleSpeedSelect = (id) => {
        selectedSpeedId.value = id;
      };
      const handleSave = () => {
        formatAppLog("log", "at pages/route/index.vue:137", "保存路线", {
          routeName: routeName.value,
          speedId: selectedSpeedId.value
        });
      };
      const __returned__ = { t, routeName, tempRouteName, isRouteNameModalVisible, showRouteNameInput, hideRouteNameInput, confirmRouteName, showContentInput, speedList, selectedSpeedId, currentSpeedName, handleSpeedSelect, handleSave, ref: vue.ref, computed: vue.computed, get useI18n() {
        return useI18n;
      }, PageHeader };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "newRoute" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "route-container" }, [
          vue.createCommentVNode(" 左侧地图区域 "),
          vue.createElementVNode("view", { class: "map-area" }, [
            vue.createElementVNode("image", {
              class: "map-image",
              src: _imports_0$2,
              mode: "aspectFill"
            })
          ]),
          vue.createCommentVNode(" 右侧控制面板 "),
          vue.createElementVNode("view", { class: "control-panel" }, [
            vue.createCommentVNode(" 添加讲解内容按钮 "),
            vue.createElementVNode("view", { class: "control-item" }, [
              vue.createElementVNode("view", {
                class: "control-btn-bordered",
                onClick: $setup.showContentInput
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "control-btn-text" },
                  vue.toDisplayString(_ctx.$t("route.addContent")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createCommentVNode(" 路线名称 "),
            vue.createElementVNode("view", { class: "control-item" }, [
              vue.createElementVNode("view", {
                class: "route-name-btn",
                onClick: $setup.showRouteNameInput
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "route-name-text" },
                  vue.toDisplayString($setup.routeName || _ctx.$t("route.defaultRouteName")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createCommentVNode(" 前进速度选择 - 直接展示 "),
            vue.createElementVNode("view", { class: "control-item" }, [
              vue.createElementVNode(
                "view",
                { class: "control-label" },
                vue.toDisplayString(_ctx.$t("route.forwardSpeed")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "speed-options" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.speedList, (speed) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: speed.id,
                      class: vue.normalizeClass(["speed-btn", { "speed-btn-active": $setup.selectedSpeedId === speed.id }]),
                      onClick: ($event) => $setup.handleSpeedSelect(speed.id)
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "speed-btn-text" },
                        vue.toDisplayString(speed.name),
                        1
                        /* TEXT */
                      )
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 保存按钮 "),
            vue.createElementVNode("view", { class: "save-btn-wrapper" }, [
              vue.createElementVNode("view", {
                class: "save-btn",
                onClick: $setup.handleSave
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "save-btn-text" },
                  vue.toDisplayString(_ctx.$t("common.save")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        vue.createCommentVNode(" 路线名称输入弹窗 "),
        $setup.isRouteNameModalVisible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "input-modal",
          onClick: $setup.hideRouteNameInput
        }, [
          vue.createElementVNode("view", {
            class: "input-modal-content",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode(
              "text",
              { class: "input-modal-title" },
              vue.toDisplayString(_ctx.$t("route.editRouteName")),
              1
              /* TEXT */
            ),
            vue.withDirectives(vue.createElementVNode("input", {
              class: "input-modal-input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.tempRouteName = $event),
              placeholder: _ctx.$t("route.routeNamePlaceholder"),
              onConfirm: $setup.confirmRouteName
            }, null, 40, ["placeholder"]), [
              [vue.vModelText, $setup.tempRouteName]
            ]),
            vue.createElementVNode("view", { class: "input-modal-buttons" }, [
              vue.createElementVNode("view", {
                class: "input-modal-btn input-modal-btn-cancel",
                onClick: $setup.hideRouteNameInput
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "input-modal-btn-text" },
                  vue.toDisplayString(_ctx.$t("common.cancel")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                class: "input-modal-btn input-modal-btn-confirm",
                onClick: $setup.confirmRouteName
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "input-modal-btn-text-confirm" },
                  vue.toDisplayString(_ctx.$t("common.confirm")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesRouteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-74397b76"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/route/index.vue"]]);
  const _imports_0$1 = "/static/icons/general/icon_sound.svg";
  const _sfc_main$6 = {
    __name: "beautiful-card",
    props: {
      // 显示文字
      text: {
        type: String,
        required: true
      },
      // 是否选中状态（浮起+阴影）
      isSelected: {
        type: Boolean,
        default: false
      },
      // 是否播放中（呼吸动画）
      isPlaying: {
        type: Boolean,
        default: false
      },
      // 是否显示播放按钮
      showPlayBtn: {
        type: Boolean,
        default: false
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ["click", "play"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const handleClick = () => {
        if (!props.disabled) {
          emit("click");
        }
      };
      const handlePlay = () => {
        if (!props.disabled) {
          emit("play");
        }
      };
      const __returned__ = { props, emit, handleClick, handlePlay };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["beautiful-card", {
          "beautiful-card-selected": $props.isSelected,
          "beautiful-card-playing": $props.isPlaying,
          "beautiful-card-disabled": $props.disabled
        }]),
        onClick: $setup.handleClick
      },
      [
        vue.createElementVNode("view", { class: "card-content" }, [
          vue.createElementVNode(
            "text",
            { class: "card-text" },
            vue.toDisplayString($props.text),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 右侧播放按钮（可选） "),
        $props.showPlayBtn ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["play-btn", { "play-btn-active": $props.isPlaying }]),
            onClick: vue.withModifiers($setup.handlePlay, ["stop"])
          },
          [
            vue.createElementVNode(
              "image",
              {
                class: vue.normalizeClass(["play-icon", { "play-icon-active": $props.isPlaying }]),
                src: _imports_0$1,
                mode: "aspectFit"
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const BeautifulCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-65026364"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/components/ui-box/beautiful-card.vue"]]);
  const _imports_0 = "/static/icons/general/icon_upload.svg";
  const _sfc_main$5 = {
    __name: "content",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const actionList = vue.ref([
        { id: 1, key: "guideRight" },
        { id: 2, key: "guideLeft" },
        { id: 3, key: "introduceRight" },
        { id: 4, key: "introduceLeft" },
        { id: 5, key: "welcome" },
        { id: 6, key: "auto" }
      ]);
      const selectedActionId = vue.ref(1);
      const languageList = vue.ref([
        { id: 1, key: "chinese" },
        { id: 2, key: "english" },
        { id: 3, key: "german" }
      ]);
      const selectedLanguageId = vue.ref(1);
      const voiceList = vue.ref([
        { id: 1, key: "maleA", audioSrc: "/static/icons/route/helloSir.m4a" },
        { id: 2, key: "femaleB", audioSrc: "/static/icons/route/helloSir.m4a" },
        // TODO: 替换为女声音频
        { id: 3, key: "childC", audioSrc: "/static/icons/route/helloSir.m4a" }
        // TODO: 替换为童声音频
      ]);
      const selectedVoiceId = vue.ref(1);
      const audioContext = vue.ref(null);
      const playingVoiceId = vue.ref(null);
      const handleActionSelect = (id) => {
        selectedActionId.value = id;
        if (id === 6) {
          isAutoModalVisible.value = true;
        }
      };
      const isAutoModalVisible = vue.ref(false);
      const autoContentText = vue.ref("");
      const closeAutoModal = () => {
        isAutoModalVisible.value = false;
      };
      const handleUploadFile = () => {
        uni.chooseMessageFile({
          count: 1,
          type: "file",
          extension: [".txt", ".doc", ".docx", ".pdf"],
          success: (res) => {
            const file = res.tempFiles[0];
            formatAppLog("log", "at pages/route/content.vue:161", "选择的文件:", file);
            uni.showToast({
              title: `已选择: ${file.name}`,
              icon: "none"
            });
          },
          fail: (err) => {
            formatAppLog("log", "at pages/route/content.vue:169", "选择文件取消或失败:", err);
          }
        });
      };
      const confirmAutoContent = () => {
        formatAppLog("log", "at pages/route/content.vue:176", "自动讲解内容:", autoContentText.value);
        isAutoModalVisible.value = false;
      };
      const handleLanguageSelect = (id) => {
        selectedLanguageId.value = id;
      };
      const handleVoiceSelect = (id) => {
        selectedVoiceId.value = id;
      };
      const handlePlayVoice = (id) => {
        const voice = voiceList.value.find((v) => v.id === id);
        if (!voice || !voice.audioSrc) {
          formatAppLog("warn", "at pages/route/content.vue:195", "未找到音频文件");
          return;
        }
        if (playingVoiceId.value === id && audioContext.value) {
          audioContext.value.stop();
          playingVoiceId.value = null;
          return;
        }
        if (audioContext.value) {
          audioContext.value.stop();
          audioContext.value.destroy();
        }
        audioContext.value = uni.createInnerAudioContext();
        audioContext.value.src = voice.audioSrc;
        audioContext.value.onEnded(() => {
          playingVoiceId.value = null;
        });
        audioContext.value.onError((err) => {
          formatAppLog("error", "at pages/route/content.vue:223", "音频播放错误:", err);
          playingVoiceId.value = null;
          uni.showToast({
            title: "播放失败",
            icon: "none"
          });
        });
        playingVoiceId.value = id;
        audioContext.value.play();
      };
      const handleSave = () => {
        if (audioContext.value) {
          audioContext.value.stop();
          audioContext.value.destroy();
        }
        formatAppLog("log", "at pages/route/content.vue:244", "保存讲解内容配置", {
          actionId: selectedActionId.value,
          languageId: selectedLanguageId.value,
          voiceId: selectedVoiceId.value
        });
        uni.navigateBack();
      };
      vue.onUnmounted(() => {
        if (audioContext.value) {
          audioContext.value.stop();
          audioContext.value.destroy();
          audioContext.value = null;
        }
      });
      const __returned__ = { t, actionList, selectedActionId, languageList, selectedLanguageId, voiceList, selectedVoiceId, audioContext, playingVoiceId, handleActionSelect, isAutoModalVisible, autoContentText, closeAutoModal, handleUploadFile, confirmAutoContent, handleLanguageSelect, handleVoiceSelect, handlePlayVoice, handleSave, ref: vue.ref, onUnmounted: vue.onUnmounted, get useI18n() {
        return useI18n;
      }, PageHeader, BeautifulCard };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "newRoute" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "content-container" }, [
          vue.createCommentVNode(" 三栏区域 "),
          vue.createElementVNode("view", { class: "cards-area" }, [
            vue.createCommentVNode(" 左栏 - 执行动作（大卡片包裹） "),
            vue.createElementVNode("view", { class: "section-card" }, [
              vue.createElementVNode(
                "text",
                { class: "section-title" },
                vue.toDisplayString(_ctx.$t("routeContent.actionTitle")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "options-list" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.actionList, (action) => {
                    return vue.openBlock(), vue.createBlock($setup["BeautifulCard"], {
                      key: action.id,
                      text: _ctx.$t(`routeContent.actions.${action.key}`),
                      isSelected: $setup.selectedActionId === action.id,
                      onClick: ($event) => $setup.handleActionSelect(action.id)
                    }, null, 8, ["text", "isSelected", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 中栏 - 语言（大卡片包裹） "),
            vue.createElementVNode("view", { class: "section-card section-card-center" }, [
              vue.createElementVNode(
                "text",
                { class: "section-title" },
                vue.toDisplayString(_ctx.$t("routeContent.languageTitle")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "options-list options-list-center" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.languageList, (lang) => {
                    return vue.openBlock(), vue.createBlock($setup["BeautifulCard"], {
                      key: lang.id,
                      text: _ctx.$t(`routeContent.languages.${lang.key}`),
                      isSelected: $setup.selectedLanguageId === lang.id,
                      onClick: ($event) => $setup.handleLanguageSelect(lang.id)
                    }, null, 8, ["text", "isSelected", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 右栏 - 声音选择（大卡片包裹） "),
            vue.createElementVNode("view", { class: "section-card" }, [
              vue.createElementVNode(
                "text",
                { class: "section-title" },
                vue.toDisplayString(_ctx.$t("routeContent.voiceTitle")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "options-list" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.voiceList, (voice) => {
                    return vue.openBlock(), vue.createBlock($setup["BeautifulCard"], {
                      key: voice.id,
                      text: _ctx.$t(`routeContent.voices.${voice.key}`),
                      isSelected: $setup.selectedVoiceId === voice.id,
                      isPlaying: $setup.playingVoiceId === voice.id,
                      showPlayBtn: true,
                      onClick: ($event) => $setup.handleVoiceSelect(voice.id),
                      onPlay: ($event) => $setup.handlePlayVoice(voice.id)
                    }, null, 8, ["text", "isSelected", "isPlaying", "onClick", "onPlay"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]),
          vue.createCommentVNode(" 底部保存按钮 "),
          vue.createElementVNode("view", { class: "save-btn-area" }, [
            vue.createElementVNode("view", {
              class: "save-btn",
              onClick: $setup.handleSave
            }, [
              vue.createElementVNode(
                "text",
                { class: "save-btn-text" },
                vue.toDisplayString(_ctx.$t("common.save")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createCommentVNode(" 自动内容弹窗 "),
        $setup.isAutoModalVisible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "auto-modal",
          onClick: $setup.closeAutoModal
        }, [
          vue.createElementVNode("view", {
            class: "auto-modal-content",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createCommentVNode(" 背景图片拉伸填满容器 "),
            vue.createElementVNode("image", {
              class: "auto-modal-bg",
              src: _imports_0$7,
              mode: "scaleToFill"
            }),
            vue.createCommentVNode(" 内容绝对定位在图片上 "),
            vue.createElementVNode("view", { class: "auto-modal-inner" }, [
              vue.createElementVNode(
                "text",
                { class: "auto-modal-title" },
                vue.toDisplayString(_ctx.$t("routeContent.addContentTitle")),
                1
                /* TEXT */
              ),
              vue.withDirectives(vue.createElementVNode("textarea", {
                class: "auto-modal-textarea",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.autoContentText = $event),
                placeholder: _ctx.$t("routeContent.contentPlaceholder"),
                maxlength: 2e3
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $setup.autoContentText]
              ]),
              vue.createElementVNode("view", { class: "auto-modal-actions" }, [
                vue.createElementVNode("view", {
                  class: "upload-btn",
                  onClick: $setup.handleUploadFile
                }, [
                  vue.createElementVNode("image", {
                    class: "upload-icon",
                    src: _imports_0,
                    mode: "aspectFit"
                  }),
                  vue.createElementVNode(
                    "text",
                    { class: "upload-text" },
                    vue.toDisplayString(_ctx.$t("routeContent.uploadFile")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", {
                class: "auto-modal-confirm",
                onClick: $setup.confirmAutoContent
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "auto-modal-confirm-text" },
                  vue.toDisplayString(_ctx.$t("common.confirm")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesRouteContent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-6a1124c8"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/route/content.vue"]]);
  const _sfc_main$4 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const { t } = useI18n();
      const savedFaces = vue.ref([
        { id: 1, name: "Alex", avatar: "" },
        { id: 2, name: "Bella", avatar: "" },
        { id: 3, name: "Chris", avatar: "" },
        { id: 4, name: "David", avatar: "" },
        { id: 5, name: "Emily", avatar: "" },
        { id: 6, name: "Frank", avatar: "" },
        { id: 7, name: "Grace", avatar: "" },
        { id: 8, name: "Henry", avatar: "" },
        { id: 9, name: "Iris", avatar: "" },
        { id: 10, name: "Jack", avatar: "" },
        { id: 11, name: "Kate", avatar: "" },
        { id: 12, name: "Leo", avatar: "" },
        { id: 13, name: "Mia", avatar: "" },
        { id: 14, name: "Noah", avatar: "" },
        { id: 15, name: "Olivia", avatar: "" },
        { id: 16, name: "Paul", avatar: "" },
        { id: 17, name: "Quinn", avatar: "" },
        { id: 18, name: "Ruby", avatar: "" },
        { id: 19, name: "Sam", avatar: "" },
        { id: 20, name: "Tom", avatar: "" }
      ]);
      const selectedFaceId = vue.ref(null);
      const uploadSlots = vue.ref([
        { id: 1, image: null, name: "" },
        { id: 2, image: null, name: "" },
        { id: 3, image: null, name: "" },
        { id: 4, image: null, name: "" }
      ]);
      const handleSelectFace = (id) => {
        selectedFaceId.value = selectedFaceId.value === id ? null : id;
      };
      const handleDeleteFace = (id) => {
        uni.showModal({
          title: t("face.deleteConfirmTitle"),
          content: t("face.deleteConfirmContent"),
          success: (res) => {
            if (res.confirm) {
              savedFaces.value = savedFaces.value.filter((f) => f.id !== id);
              if (selectedFaceId.value === id) {
                selectedFaceId.value = null;
              }
              uni.showToast({
                title: t("common.success"),
                icon: "success"
              });
            }
          }
        });
      };
      const handleChooseImage = (slotId) => {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: (res) => {
            const slot = uploadSlots.value.find((s) => s.id === slotId);
            if (slot) {
              slot.image = res.tempFilePaths[0];
            }
          }
        });
      };
      const handleUploadSingle = (slotId) => {
        const slot = uploadSlots.value.find((s) => s.id === slotId);
        if (!slot || !slot.image) {
          uni.showToast({
            title: t("face.pleaseSelectImage"),
            icon: "none"
          });
          return;
        }
        if (!slot.name.trim()) {
          uni.showToast({
            title: t("face.pleaseEnterName"),
            icon: "none"
          });
          return;
        }
        formatAppLog("log", "at pages/face/index.vue:191", "上传单个人脸:", slot);
        uni.showToast({
          title: t("common.success"),
          icon: "success"
        });
        savedFaces.value.push({
          id: Date.now(),
          name: slot.name,
          avatar: slot.image
        });
        slot.image = null;
        slot.name = "";
      };
      const handleSaveAll = () => {
        const filledSlots = uploadSlots.value.filter((s) => s.image && s.name.trim());
        if (filledSlots.length === 0) {
          uni.showToast({
            title: t("face.noDataToSave"),
            icon: "none"
          });
          return;
        }
        formatAppLog("log", "at pages/face/index.vue:221", "批量保存人脸:", filledSlots);
        filledSlots.forEach((slot) => {
          savedFaces.value.push({
            id: Date.now() + slot.id,
            name: slot.name,
            avatar: slot.image
          });
        });
        uploadSlots.value.forEach((slot) => {
          slot.image = null;
          slot.name = "";
        });
        uni.showToast({
          title: t("common.success"),
          icon: "success"
        });
      };
      const __returned__ = { t, savedFaces, selectedFaceId, uploadSlots, handleSelectFace, handleDeleteFace, handleChooseImage, handleUploadSingle, handleSaveAll, ref: vue.ref, get useI18n() {
        return useI18n;
      }, PageHeader };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "faceRecognition" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "face-container" }, [
          vue.createCommentVNode(" 左侧 - 已保存人脸数据 "),
          vue.createElementVNode("view", { class: "saved-panel" }, [
            vue.createElementVNode("view", { class: "panel-header" }, [
              vue.createElementVNode(
                "text",
                { class: "panel-title" },
                vue.toDisplayString(_ctx.$t("face.savedFaces")),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("scroll-view", {
              class: "face-grid-scroll",
              "scroll-y": "",
              "show-scrollbar": true,
              enhanced: true,
              bounces: true
            }, [
              vue.createElementVNode("view", { class: "face-grid" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.savedFaces, (face) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: face.id,
                      class: vue.normalizeClass(["face-card", { "face-card-selected": $setup.selectedFaceId === face.id }]),
                      onClick: ($event) => $setup.handleSelectFace(face.id)
                    }, [
                      vue.createElementVNode("view", { class: "face-avatar-wrapper" }, [
                        face.avatar ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 0,
                          class: "face-avatar",
                          src: face.avatar,
                          mode: "aspectFill"
                        }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "face-avatar-placeholder"
                        }, [
                          vue.createElementVNode(
                            "text",
                            { class: "face-avatar-letter" },
                            vue.toDisplayString(face.name.charAt(0).toUpperCase()),
                            1
                            /* TEXT */
                          )
                        ]))
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "face-name" },
                        vue.toDisplayString(face.name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", {
                        class: "face-delete-btn",
                        onClick: vue.withModifiers(($event) => $setup.handleDeleteFace(face.id), ["stop"])
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "face-delete-text" },
                          vue.toDisplayString(_ctx.$t("common.delete")),
                          1
                          /* TEXT */
                        )
                      ], 8, ["onClick"])
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              $setup.savedFaces.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "no-more"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "no-more-text" },
                  vue.toDisplayString(_ctx.$t("face.noMore")),
                  1
                  /* TEXT */
                )
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "empty-tip"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "empty-tip-text" },
                  vue.toDisplayString(_ctx.$t("face.emptyTip")),
                  1
                  /* TEXT */
                )
              ]))
            ])
          ]),
          vue.createCommentVNode(" 右侧 - 上传照片 "),
          vue.createElementVNode("view", { class: "upload-panel" }, [
            vue.createElementVNode("view", { class: "panel-header" }, [
              vue.createElementVNode(
                "text",
                { class: "panel-title" },
                vue.toDisplayString(_ctx.$t("face.uploadPhotos")),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "upload-grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.uploadSlots, (slot) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: slot.id,
                    class: "upload-slot"
                  }, [
                    vue.createCommentVNode(" 图片预览或上传区域 "),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["upload-area", { "upload-area-filled": slot.image }]),
                      onClick: ($event) => $setup.handleChooseImage(slot.id)
                    }, [
                      slot.image ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        class: "upload-preview",
                        src: slot.image,
                        mode: "aspectFill"
                      }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "upload-placeholder"
                      }, [
                        vue.createElementVNode("text", { class: "upload-plus" }, "+")
                      ]))
                    ], 10, ["onClick"]),
                    vue.createCommentVNode(" 名称输入 "),
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "upload-name-input",
                      "onUpdate:modelValue": ($event) => slot.name = $event,
                      placeholder: _ctx.$t("face.namePlaceholder")
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vue.vModelText, slot.name]
                    ]),
                    vue.createCommentVNode(" 上传按钮 "),
                    vue.createElementVNode("view", {
                      class: "upload-btn",
                      onClick: ($event) => $setup.handleUploadSingle(slot.id)
                    }, [
                      vue.createElementVNode("image", {
                        class: "upload-btn-icon",
                        src: _imports_0,
                        mode: "aspectFit"
                      }),
                      vue.createElementVNode(
                        "text",
                        { class: "upload-btn-text" },
                        vue.toDisplayString(_ctx.$t("face.upload")),
                        1
                        /* TEXT */
                      )
                    ], 8, ["onClick"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 保存按钮 "),
            vue.createElementVNode("view", { class: "save-btn-area" }, [
              vue.createElementVNode("view", {
                class: "save-btn",
                onClick: $setup.handleSaveAll
              }, [
                vue.createElementVNode("text", { class: "save-btn-text" }, "Save")
              ])
            ])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesFaceIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-da7cfd14"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/face/index.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { PageHeader };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "voiceSettings" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "page-content" }, [
          vue.createCommentVNode(" 语音设置内容 "),
          vue.createElementVNode("view", { class: "content-card" }, [
            vue.createElementVNode(
              "text",
              { class: "placeholder-text" },
              vue.toDisplayString(_ctx.$t("voice.title")),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesVoiceIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-d2603837"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/voice/index.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { PageHeader };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["PageHeader"], { activeKey: "mapping" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "page-content" }, [
          vue.createCommentVNode(" 建图导航内容 "),
          vue.createElementVNode("view", { class: "content-card" }, [
            vue.createElementVNode(
              "text",
              { class: "placeholder-text" },
              vue.toDisplayString(_ctx.$t("mapping.title")),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const PagesMappingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-44e39f87"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/mapping/index.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-container" }, [
      vue.createElementVNode("view", { class: "page-header" }, [
        vue.createElementVNode(
          "text",
          { class: "page-title" },
          vue.toDisplayString(_ctx.$t("volume.title")),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "page-content" }, [
        vue.createCommentVNode(" 音量调节内容 ")
      ])
    ]);
  }
  const PagesVolumeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-204783eb"], ["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/pages/volume/index.vue"]]);
  __definePage("pages/index/welcome", PagesIndexWelcome);
  __definePage("pages/index/home", PagesIndexHome);
  __definePage("pages/settings/index", PagesSettingsIndex);
  __definePage("pages/remote/index", PagesRemoteIndex);
  __definePage("pages/route/index", PagesRouteIndex);
  __definePage("pages/route/content", PagesRouteContent);
  __definePage("pages/face/index", PagesFaceIndex);
  __definePage("pages/voice/index", PagesVoiceIndex);
  __definePage("pages/mapping/index", PagesMappingIndex);
  __definePage("pages/volume/index", PagesVolumeIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/wzl/HX-proj/SIEMENS/SIEMENS/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(i18n);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
