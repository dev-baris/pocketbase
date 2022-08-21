import{S as U,i as W,s as Y,F as j,c as H,m as N,t as P,a as q,d as L,C as A,E as B,g as _,k as D,n as G,o as m,_ as I,p as K,q as E,e as b,w as y,b as C,f as c,r as J,h as w,u as S,v as O,y as F,x as Q,z as R}from"./index.33005af5.js";function V(i){let e,l,s,n,t,o,p,u,r,a,v,g,k,h,d=i[4]&&M(i);return o=new E({props:{class:"form-field required",name:"password",$$slots:{default:[Z,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:i}}}),u=new E({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[x,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:i}}}),{c(){e=b("form"),l=b("div"),s=b("h5"),n=y(`Reset your user password
                    `),d&&d.c(),t=C(),H(o.$$.fragment),p=C(),H(u.$$.fragment),r=C(),a=b("button"),v=b("span"),v.textContent="Set new password",c(l,"class","content txt-center m-b-base"),c(v,"class","txt"),c(a,"type","submit"),c(a,"class","btn btn-lg btn-block"),a.disabled=i[2],J(a,"btn-loading",i[2])},m(f,$){_(f,e,$),w(e,l),w(l,s),w(s,n),d&&d.m(s,null),w(e,t),N(o,e,null),w(e,p),N(u,e,null),w(e,r),w(e,a),w(a,v),g=!0,k||(h=S(e,"submit",O(i[5])),k=!0)},p(f,$){f[4]?d?d.p(f,$):(d=M(f),d.c(),d.m(s,null)):d&&(d.d(1),d=null);const T={};$&3073&&(T.$$scope={dirty:$,ctx:f}),o.$set(T);const z={};$&3074&&(z.$$scope={dirty:$,ctx:f}),u.$set(z),(!g||$&4)&&(a.disabled=f[2]),$&4&&J(a,"btn-loading",f[2])},i(f){g||(P(o.$$.fragment,f),P(u.$$.fragment,f),g=!0)},o(f){q(o.$$.fragment,f),q(u.$$.fragment,f),g=!1},d(f){f&&m(e),d&&d.d(),L(o),L(u),k=!1,h()}}}function X(i){let e,l,s,n,t;return{c(){e=b("div"),e.innerHTML=`<div class="icon"><i class="ri-checkbox-circle-line"></i></div> 
            <div class="content txt-bold"><p>Successfully changed the user password.</p> 
                <p>You can now sign in with your new password.</p></div>`,l=C(),s=b("button"),s.textContent="Close",c(e,"class","alert alert-success"),c(s,"type","button"),c(s,"class","btn btn-secondary btn-block")},m(o,p){_(o,e,p),_(o,l,p),_(o,s,p),n||(t=S(s,"click",i[7]),n=!0)},p:F,i:F,o:F,d(o){o&&m(e),o&&m(l),o&&m(s),n=!1,t()}}}function M(i){let e,l,s;return{c(){e=y("for "),l=b("strong"),s=y(i[4])},m(n,t){_(n,e,t),_(n,l,t),w(l,s)},p(n,t){t&16&&Q(s,n[4])},d(n){n&&m(e),n&&m(l)}}}function Z(i){let e,l,s,n,t,o,p,u;return{c(){e=b("label"),l=y("New password"),n=C(),t=b("input"),c(e,"for",s=i[10]),c(t,"type","password"),c(t,"id",o=i[10]),t.required=!0,t.autofocus=!0},m(r,a){_(r,e,a),w(e,l),_(r,n,a),_(r,t,a),R(t,i[0]),t.focus(),p||(u=S(t,"input",i[8]),p=!0)},p(r,a){a&1024&&s!==(s=r[10])&&c(e,"for",s),a&1024&&o!==(o=r[10])&&c(t,"id",o),a&1&&t.value!==r[0]&&R(t,r[0])},d(r){r&&m(e),r&&m(n),r&&m(t),p=!1,u()}}}function x(i){let e,l,s,n,t,o,p,u;return{c(){e=b("label"),l=y("New password confirm"),n=C(),t=b("input"),c(e,"for",s=i[10]),c(t,"type","password"),c(t,"id",o=i[10]),t.required=!0},m(r,a){_(r,e,a),w(e,l),_(r,n,a),_(r,t,a),R(t,i[1]),p||(u=S(t,"input",i[9]),p=!0)},p(r,a){a&1024&&s!==(s=r[10])&&c(e,"for",s),a&1024&&o!==(o=r[10])&&c(t,"id",o),a&2&&t.value!==r[1]&&R(t,r[1])},d(r){r&&m(e),r&&m(n),r&&m(t),p=!1,u()}}}function ee(i){let e,l,s,n;const t=[X,V],o=[];function p(u,r){return u[3]?0:1}return e=p(i),l=o[e]=t[e](i),{c(){l.c(),s=B()},m(u,r){o[e].m(u,r),_(u,s,r),n=!0},p(u,r){let a=e;e=p(u),e===a?o[e].p(u,r):(D(),q(o[a],1,1,()=>{o[a]=null}),G(),l=o[e],l?l.p(u,r):(l=o[e]=t[e](u),l.c()),P(l,1),l.m(s.parentNode,s))},i(u){n||(P(l),n=!0)},o(u){q(l),n=!1},d(u){o[e].d(u),u&&m(s)}}}function te(i){let e,l;return e=new j({props:{nobranding:!0,$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},m(s,n){N(e,s,n),l=!0},p(s,[n]){const t={};n&2079&&(t.$$scope={dirty:n,ctx:s}),e.$set(t)},i(s){l||(P(e.$$.fragment,s),l=!0)},o(s){q(e.$$.fragment,s),l=!1},d(s){L(e,s)}}}function se(i,e,l){let s,{params:n}=e,t="",o="",p=!1,u=!1;async function r(){if(p)return;l(2,p=!0);const k=new I("../");try{await k.users.confirmPasswordReset(n==null?void 0:n.token,t,o),l(3,u=!0)}catch(h){K.errorResponseHandler(h)}l(2,p=!1)}const a=()=>window.close();function v(){t=this.value,l(0,t)}function g(){o=this.value,l(1,o)}return i.$$set=k=>{"params"in k&&l(6,n=k.params)},i.$$.update=()=>{i.$$.dirty&64&&l(4,s=A.getJWTPayload(n==null?void 0:n.token).email||"")},[t,o,p,u,s,r,n,a,v,g]}class ne extends U{constructor(e){super(),W(this,e,se,te,Y,{params:6})}}export{ne as default};
