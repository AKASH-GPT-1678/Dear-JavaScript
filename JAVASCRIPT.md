Here’s a **clean, clear list** of things that *look like JavaScript features* but **are NOT part of core JavaScript** — they come from the **Browser**, **Web APIs**, **Node.js**, or other environments.

---

# ✅ **NOT Part of Core JavaScript (But Look Like They Are)**

### **1. Browser / Web APIs**

These work **only in browsers** (or environments that implement them).
They are *NOT from JavaScript language itself*.

#### **DOM APIs**

* `document`
* `document.getElementById()`
* `document.querySelector()`
* `document.createElement()`
* `document.body`
* `window`
* `window.alert()`
* `window.prompt()`
* `window.location`
* `window.history`
* `window.navigator`
* `window.localStorage`
* `window.sessionStorage`
* `window.matchMedia()`
* `window.scrollTo()`

#### **Timers**

* `setTimeout()`
* `setInterval()`
* `clearTimeout()`
* `clearInterval()`

> These come from the browser, NOT JS.

#### **Network/API**

* `fetch()`
* `XMLHttpRequest`
* `WebSocket`
* `EventSource` (SSE)

> Again, provided by browser.

#### **Events**

* `addEventListener()`
* `dispatchEvent()`
* `CustomEvent`

> DOM event system, not JS.

#### **Media / Sensor APIs**

* `navigator.geolocation`
* `navigator.mediaDevices.getUserMedia()`
* `Notification`
* `Clipboard API`

#### **Other Browser APIs**

* `console.log()` (browser provides console, not JS)
* `URL` / `URLSearchParams`
* `FormData`
* `Blob`
* `FileReader`
* `Canvas` (`<canvas>` + `canvas.getContext("2d")`)
* `requestAnimationFrame()`

---

# 🟦 **2. Node.js APIs (Not JavaScript either)**

These work only in Node.

* `require()`
* `module.exports`
* `__dirname`
* `process`
* `Buffer`
* `fs` module
* `http` module
* `path` module
* `crypto` module
* `setImmediate()`
* Node’s event loop features

---

# 🟩 **3. Web Platform Standards (Not language features)**

These are built on top of JS, but not part of the language.

* `Promise` (JS + Web API integration)
* `queueMicrotask()`
* `structuredClone()`
* `performance.now()`
* `IndexedDB`
* `Web Workers`
* `Service Workers`
* `Storage API`

---

# 🟥 **4. JavaScript *Core* (Actually part of the language)**

(Listing for comparison — these ARE real JS)

* `Number`, `String`, `Boolean`
* `Array`, `Object`, `Map`, `Set`, `WeakMap`, `WeakSet`
* `Date`
* `Math`
* `JSON`
* `Error`
* `Promise` (language concept but often confused)
* Operators (`+`, `-`, `===`, etc.)
* Control flow (`if`, `for`, `while`, etc.)
* Classes (`class {...}`)
* Functions

---

# 🎯 **Summary (Super Simple)**

### ❌ Not JavaScript

(but you use them WITH JavaScript)

* DOM: `document`, `window`, `querySelector`
* Browser APIs: `fetch`, `localStorage`
* Timers: `setTimeout`, `setInterval`
* Node APIs: `require`, `fs`, `Buffer`
* Web APIs: `WebSocket`, `FormData`

### ✅ Real JavaScript

(numbers, strings, arrays, objects, functions, loops, promises, classes…)

---

If you want, I can also make:

✔ a **table version**
✔ a **mind map**
✔ or explain **why these are not JavaScript** in very simple words.

Just tell me!
