!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},n.parcelRequired7c6=t);var r=t("iU1Pc"),a=t("bJJRP");function u(e,n){var o=Math.random()>.3;return new Promise((function(i,t){setTimeout((function(){o?i({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e(r).Notify.info("ВВЕДІТЬ БУДЬ ЛАСКА ЗНАЧЕННЯ "),e(r).Notify.warning(" СЛАВА УКРАЇНІ "),a.refs.submitPromiseForm.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(a.refs.firstDelayValue.value),i=Number(a.refs.stepValue.value),t=Number(a.refs.amountValue.value),f=0;f<t;f++)u(f+1,f*i+o).then((function(n){var o=n.position,i=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(i,"ms"))})).catch((function(n){var o=n.position,i=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(i,"ms"))}))}))}();
//# sourceMappingURL=03-promises.4fb141fb.js.map