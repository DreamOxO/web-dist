import{h as e,bU as i,aB as y,a as w,n as C,m as R,a$ as r,bg as c,cq as b,e as k,a8 as o,H as x,ay as H,G as T,I as B,al as F,C as g,cp as L,b2 as N,dx as W}from"./index.4fcb4360.js";const q=n=>e(i,{get children(){return n.content}}),z=n=>e(y,{get src(){return n.content}}),D={string:q,image:z},M=()=>{const n=w();C.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const t=await u();L(t,$=>{S(W(f=>f.push($)))})},v=async()=>{const t=await m();N(t)},I=setInterval(s,1e3);return k(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return D[t.type]}},t))})]}}),e(B,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,D as Shower,M as default};
