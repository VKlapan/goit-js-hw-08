var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("kEUo3");const l=document.querySelector(".feedback-form"),n=l.querySelector('input[name="email"]'),f=l.querySelector('textarea[name="message"]'),i=l.querySelector('button[type="submit"]'),c=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};localStorage.getItem("feedback-form-state")&&(n.value=c.email,f.value=c.message);i.addEventListener("click",(e=>{e.preventDefault(),console.log(c),localStorage.removeItem("feedback-form-state"),l.reset()})),l.addEventListener("input",(0,o.throttle)((e=>{c[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))}),500));
//# sourceMappingURL=03-feedback.3b842f8d.js.map
