const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),o=e.querySelector('button[type="submit"]'),r=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};localStorage.getItem("feedback-form-state")&&(t.value=r.email,a.value=r.message);o.addEventListener("click",(t=>{t.preventDefault(),console.log(r),localStorage.removeItem("feedback-form-state"),e.reset()})),e.addEventListener("input",(e=>{r[e.target.name]=e.target.value,console.log(r),localStorage.setItem("feedback-form-state",JSON.stringify(r)),console.log(localStorage.getItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.1ee2b9db.js.map
