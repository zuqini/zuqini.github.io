(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{3311:function(e,t,n){Promise.resolve().then(n.bind(n,4302)),Promise.resolve().then(n.bind(n,3363)),Promise.resolve().then(n.bind(n,2279))},4302:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var i=n(7437);function a(){return(0,i.jsx)("div",{className:"w-full h-full before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-crt opacity-50 bg-gradient-scanline-overlay pointer-events-none z-50",children:(0,i.jsx)("div",{className:"w-full h-full absolute z-40 bg-gradient-moving-scanline bottom-full opacity-10 animate-scanline"})})}},3363:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var i=n(7437),a=n(2265);let c=["animate-glitch-3a","animate-glitch-3b","animate-glitch-3c","animate-glitch-3d"],l=["animate-glitch-2a","animate-glitch-2b","animate-glitch-2c","animate-glitch-2d"],s=["animate-glitch-1a","animate-glitch-1b","animate-glitch-1c","animate-glitch-1d"];function o(e){let{timeoutMinInMs:t,timeoutMaxInMs:n,texts:o,className:r="",glitchGlow:u,inOrder:h}=e,[d,m]=(0,a.useState)(!1),[f,g]=(0,a.useState)(0),[b,v]=(0,a.useState)(0),[x,N]=(0,a.useState)(u?"visible":"invisible");return(0,a.useEffect)(()=>{let e;let i=()=>{e=setTimeout(()=>{g(e=>(e+1)%4),h?v(e=>(e+1)%o.length):v(Math.floor(Math.random()*o.length)),u||N("visible"),d||m(!0),i()},Math.random()**1.5*(n-t)+t)};return i(),()=>{clearTimeout(e)}},[n,t,o.length,u,h,d]),(0,i.jsxs)("div",{className:"inline-block [text-decoration:inherit] ".concat(r),children:[(0,i.jsx)("div",{className:"invisible",children:o[b]}),(0,i.jsxs)("div",{className:"w-full leading-0 -mt-3.5",children:[(0,i.jsx)("div",{className:"text-glitch-2 select-none ".concat(x," ").concat(d&&c[f]),onAnimationEnd:e=>{u||N("invisible")},children:o[b]}),(0,i.jsx)("div",{className:"text-glitch-1 select-none ".concat(x," ").concat(d&&l[f]),children:o[b]}),(0,i.jsx)("div",{className:"".concat(d?s[f]:void 0),children:o[b]})]})]})}},2279:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var i=n(7437),a=n(7138);function c(e){let{href:t,selected:n,children:c}=e;return(0,i.jsx)(a.default,{className:"underline hover:bg-white hover:text-black focus:bg-white focus:text-black ".concat(n&&"bg-violet-250 text-black"),href:t,children:c})}}},function(e){e.O(0,[138,971,23,744],function(){return e(e.s=3311)}),_N_E=e.O()}]);