import{a as E,t as O}from"../chunks/disclose-version.CyViCCab.js";import"../chunks/legacy.DVTC40OM.js";import{h as p,q as T,L as Y,i as z,a as C,r as j,t as D,s as o,g as d,b as n,d as c,f,n as I,m as g}from"../chunks/runtime.BPGcid8v.js";import{a as P,l as V,e as B,r as F,s as G}from"../chunks/render.DJvhbGvv.js";import{b as J}from"../chunks/paths.ukGXcWgA.js";function M(e){if(p){var a=!1,s=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;N(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var r=e.checked;N(e,"checked",null),e.checked=r}}};e.__on_r=s,T(s),P()}}function N(e,a,s,t){var r=e.__attributes??(e.__attributes={});p&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Y]=s),e.removeAttribute(a))}function h(e,a,s=a){var t=z();V(e,"input",r=>{var l=r?e.defaultValue:e.value;if(l=y(e)?x(l):l,s(l),t&&l!==(l=a())){var u=e.selectionStart,v=e.selectionEnd;e.value=l??"",v!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(v,e.value.length))}}),(p&&e.defaultValue!==e.value||C(a)==null&&e.value)&&s(y(e)?x(e.value):e.value),j(()=>{var r=a();y(e)&&r===x(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function y(e){var a=e.type;return a==="number"||a==="range"}function x(e){return e===""?null:+e}var K=O('<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center"><header class="text-center py-8"><h1 class="text-4xl font-bold text-gray-800">Welcome to My Landing Page</h1> <p class="text-lg text-gray-600 mt-4">Contact us for more information</p></header> <section class="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3"><h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2> <form class="space-y-4"><div><label for="name" class="block text-gray-700">Name:</label> <input type="text" id="name" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required></div> <div><label for="email" class="block text-gray-700">Email:</label> <input type="email" id="email" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required></div> <div><label for="message" class="block text-gray-700">Message:</label> <textarea id="message" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required></textarea></div> <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Send</button></form> <p class="mt-4 text-center text-gray-600"> </p></section></div>');function Z(e){let a=g(""),s=g(""),t=g(""),r=g("");console.log(J+"tst");const l=async i=>{i.preventDefault(),o(r,"Sending..."),(await fetch("https://formspree.io/f/mzzzkqry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d(a),email:d(s),message:d(t)})})).ok?(o(r,"Message sent successfully!"),o(a,""),o(s,""),o(t,"")):o(r,"Failed to send the message.")};var u=K(),v=n(c(u),2),m=n(c(v),2),_=c(m),k=n(c(_),2);M(k),f(_);var b=n(_,2),w=n(c(b),2);M(w),f(b);var S=n(b,2),q=n(c(S),2);F(q),f(S),I(2),f(m);var A=n(m,2),L=c(A,!0);f(A),f(v),f(u),D(()=>G(L,d(r))),h(k,()=>d(a),i=>o(a,i)),h(w,()=>d(s),i=>o(s,i)),h(q,()=>d(t),i=>o(t,i)),B("submit",m,l),E(e,u)}export{Z as component};
