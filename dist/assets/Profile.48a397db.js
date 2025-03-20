import{a as D,a$ as p,bg as i,m,h as e,da as M,a8 as N,bU as v,C as o,bh as y,n as c,S as u,b as ee,ao as n,db as b,e as re,an as g,ad as $,dc as te,dd as ne,de as se,df as ae,al as h,a7 as U,dg as B,bH as S,bu as I,I as P,F as R,ac as E,af as ie,H,aM as oe,cr as ce,cp as ue}from"./index.4fcb4360.js";import{b as le}from"./useTitle.17887a2c.js";import{L as de}from"./index.4743bdc5.js";import{s as A,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";import{P as pe}from"./PublicKeys.d33db129.js";const me=r=>{const w=D(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(M,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(N,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(v,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(M,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const C=await d();y(C,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},we=r=>e(ce,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),ye=()=>{const r=D();le("manage.sidemenu.profile");const{searchParams:w,to:l}=ee(),[d,k]=m(n().username),[a,C]=m(""),[F,W]=m(""),J=$("sso_compatibility_mode"),[T,O]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[j,q]=p(()=>i.get("/authn/getcredentials")),[,G]=p(()=>i.get("/authn/webauthn_begin_registration")),[K,V]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),f=async t=>{if(a()&&a()!==F()){c.warning(r("users.confirm_password_not_same"));return}const s=await O(t);y(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},x=w.sso_id;x&&(b({...n(),sso_id:x}),f(!0));function L(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),f(!0))}window.addEventListener("message",L),re(()=>{window.removeEventListener("message",L)});const[X,z]=m([]),Q=async()=>{const t=await q();ue(t,z)};return A()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Q(),e(N,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(te,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(ne,{mr:"$2_5"}),e(se,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ae,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(U,{get children(){return r("global.have_account")}}),e(U,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(v,{get children(){return r("users.update_profile")}}),e(B,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(I,{for:"username",get children(){return r("users.change_username")}}),e(P,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(B,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(I,{for:"password",get children(){return r("users.change_password")}}),e(P,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{C(t.currentTarget.value)}}),e(R,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(I,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(P,{id:"confirm-password",type:"password",placeholder:"********",get value(){return F()},onInput:t=>{W(t.currentTarget.value)}}),e(R,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return T()},onClick:[f,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return E(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(v,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(J){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return T()},onClick:()=>{b({...n(),sso_id:""}),f(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return E(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(v,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(ie,{get loading(){return j()},get children(){return e(H,{get each(){return X()},children:t=>e(me,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return K()},onClick:async()=>{if(!A()){c.error(r("users.webauthn_not_supported"));return}const t=await G();y(t,async s=>{const Y=ge(s.options),Z=s.session;try{const _=await he(Y);y(await V(Z,_),()=>{c.success(r("users.add_webauthn_success"))})}catch(_){_ instanceof Error&&c.error(_.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(H,{each:oe,children:(t,s)=>e(we,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}}),e(pe,{isMine:!0,get userId(){return n().id}})]}})};export{ye as default};
