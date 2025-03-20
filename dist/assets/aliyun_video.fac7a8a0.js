import{b as T,aa as q,dG as E,a3 as c,ad as R,dH as C,cE as m,aQ as $,cg as D,ch as U,a$ as G,bg as J,_ as Q,o as K,bh as z,n as A,e as X,m as M,h as p,ae as Y,S as Z,aI as ee,ap as te,d as I,dI as j}from"./index.4fcb4360.js";import{O as re,A as se}from"./icon.c1845c11.js";import{A as oe,a as le,V as ne}from"./video_box.6a67b24e.js";import{H as ae,a as ie,b as ue}from"./hls.da5765be.js";import{y as ce}from"./index.4743bdc5.js";import"./Layout.2edf1849.js";import"./useTitle.17887a2c.js";import"./FolderTree.44f6852e.js";import"./index.a3ec8c03.js";import"./index.8c52b955.js";import"./index.dd7d36a9.js";const pe=te("<span></span>"),Pe=()=>{var _,P,S;const{pathname:w,searchParams:L}=T(),{proxyLink:h}=q(),y=E();let u=c.objs.filter(e=>e.type===re.VIDEO);u.length===0&&(u=[c.obj]);const g=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e<u.length-1&&y(I(j(location.pathname),u[e+1].name)+"?auto_fullscreen="+s.fullscreen)},F=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e>0&&y(I(j(location.pathname),u[e-1].name)+"?auto_fullscreen="+s.fullscreen)};let s,i={id:w(),container:"#video-player",title:c.obj.name,volume:.5,autoplay:R("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){F()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){g()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[oe],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,o){const n=new ae;n.loadSource(o),n.attachMedia(e),e.src||(e.src=o)}},lang:["en","zh-cn","zh-tw"].includes(C().toLowerCase())?C().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const f=c.related.filter(e=>{for(const o of[".srt",".ass",".vtt"])if(e.name.endsWith(o))return!0;return!1}),b=c.related.find(e=>{for(const o of[".xml"])if(e.name.endsWith(o))return!0;return!1});if(f.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":s.subtitle.show=!1,s.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:s.subtitle.show=t,s.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const o=f[0];m(o.name).toLowerCase()==="ass"?(e=!0,(_=i.plugins)==null||_.push(ie({subUrl:h(o,!0)}))):i.subtitle={url:h(o,!0),type:m(o.name)};const n=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var r;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const l=(r=i.settings)==null?void 0:r.find(d=>d.id==="setting_subtitle");return l&&(l.tooltip=t.tooltip),!t.switch}}];f.forEach((t,l)=>{n.push({default:l===0,html:(()=>{const r=pe.cloneNode(!0);return r.style.setProperty("max-width","200px"),r.style.setProperty("overflow","hidden"),r.style.setProperty("text-overflow","ellipsis"),r.style.setProperty("word-break","break-all"),r.style.setProperty("white-space","normal"),r.style.setProperty("display","-webkit-box"),r.style.setProperty("-webkit-line-clamp","2"),r.style.setProperty("-webkit-box-orient","vertical"),r.style.setProperty("font-size","12px"),$(r,()=>t.name),D(()=>U(r,"title",t.name)),r})(),name:t.name,url:h(t,!0)})}),(P=i.settings)==null||P.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:se({size:24}),selector:n,onSelect:function(t){var r,d;m(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const l=n.find(O=>O.id==="setting_subtitle_display");return l&&!l.switch&&((d=(r=l.$html)==null?void 0:r.click)==null||d.call(r)),l==null?void 0:l.tooltip}})}b&&((S=i.plugins)==null||S.push(ue({danmuku:h(b,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[he,v]=G(()=>J.post("/fs/other",{path:w(),password:Q(),method:"video_preview"}));K(async()=>{const e=await v();B(e.code!==200),z(e,o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){A.error("No transcoding video found");return}i.url=n[n.length-1].url,i.quality=n.map((t,l)=>({html:t.template_id,url:t.url,default:l===n.length-1})),s=new le(i);let a;switch(L.auto_fullscreen){case"true":a=!0;case"false":a=!1;default:a=!1}s.on("ready",()=>{s.fullscreen=a}),s.on("video:ended",()=>{!W()||g()}),k=window.setInterval(N,1e3*60*14)})});let k,x;async function N(){const e=await v();z(e,async o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(l=>l.url);if(n.length===0){A.error("No transcoding video found");return}const a=n.map((l,r)=>({html:l.template_id,url:l.url,default:r===n.length-1}));i.quality=a,s.quality=a,x=s.currentTime;let t=s.playing;await s.switchUrl(a[a.length-1].url),t||s.pause(),setTimeout(()=>{s.seek=x},1e3)})}X(()=>{s==null||s.destroy(),window.clearInterval(k)});const[W,H]=M(),[V,B]=M(!1);return p(ne,{onAutoNextChange:H,get children(){return[p(Y,{w:"$full",h:"60vh",id:"video-player"}),p(Z,{get when(){return V()},get children(){return p(ee,{w:"100%",h:"60vh",bgColor:"black",get children(){return p(ce,{size:"4rem"})}})}})]}})};export{Pe as default};
