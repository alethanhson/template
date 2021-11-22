"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[522],{1915:function(l,t,e){e.d(t,{Z:function(){return y}});var n=e(6252),o=e(3577);const i={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},a=(0,n._)("span",{class:"md:mr-3"},"Please star this project on",-1),u={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},s=(0,n._)("span",null,"GitHub",-1),c={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},m=(0,n.Uk)(" Check out other components and layouts at"),r=(0,n._)("br",null,null,-1),d=(0,n.Uk)(", "),p=(0,n._)("br",null,null,-1),b=(0,n.Uk)(" screen samples "),f=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,n.Uk)(" Get more with "),(0,n._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard",target:"_blank",class:"text-blue-500"},"Premium version")],-1);function w(l,t,e,w,g,h){const _=(0,n.up)("icon"),W=(0,n.up)("router-link"),x=(0,n.up)("titled-section");return(0,n.wg)(),(0,n.j4)(x,{last:""},{default:(0,n.w5)((()=>[(0,n._)("h1",i,[a,(0,n._)("a",u,[(0,n.Wm)(_,{path:w.mdiGithub,size:"36",class:"mr-1"},null,8,["path"]),s])]),(0,n._)("h1",c,[m,r,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.screens,((l,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:l.path},[(0,n.Wm)(W,{to:l.path,class:"text-blue-500"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(l.title),1)])),_:2},1032,["to"]),t+1<w.screens.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[d],64)):(0,n.kq)("",!0)],64)))),128)),p,b]),f])),_:1})}var g=e(2119),h=e(5317),_=e(4453),W=e(2209),x={name:"BottomOtherPagesSection",components:{TitledSection:_.Z,Icon:W.Z},setup(){const l=(0,g.tv)(),t=l.getRoutes(),e=[];for(const n in t){const l=t[n].path,o=t[n].meta&&t[n].meta.title?t[n].meta.title:null;o&&e.push({path:l,title:o})}return{screens:e,mdiGithub:h.LcO}}},k=e(3744);const O=(0,k.Z)(x,[["render",w]]);var y=O},9830:function(l,t,e){e.d(t,{Z:function(){return b}});var n=e(6252),o=e(3577),i=e(9963);const a=["type","name","value"],u=(0,n._)("span",{class:"check"},null,-1),s={class:"control-label"};function c(l,t,e,c,m,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,((l,m)=>((0,n.wg)(),(0,n.iD)("label",{key:m,class:(0,o.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,n.wy)((0,n._)("input",{type:c.inputType,name:e.name,"onUpdate:modelValue":t[0]||(t[0]=l=>c.computedValue=l),value:m},null,8,a),[[i.YZ,c.computedValue]]),u,(0,n._)("span",s,(0,o.zw)(l),1)],2)))),128))],2)}var m=e(2262),r={name:"CheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup(l,{emit:t}){const e=(0,m.Fl)({get:()=>l.modelValue,set:l=>{t("update:modelValue",l)}}),n=(0,m.Fl)((()=>"radio"===l.type?"radio":"checkbox"));return{computedValue:e,inputType:n}}},d=e(3744);const p=(0,d.Z)(r,[["render",c]]);var b=p},338:function(l,t,e){e.d(t,{Z:function(){return p}});var n=e(6252),o=e(3577);const i={class:"mb-6 last:mb-0"},a={key:0,class:"block font-bold mb-2"},u={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};function s(l,t,e,s,c,m){return(0,n.wg)(),(0,n.iD)("div",i,[e.label?((0,n.wg)(),(0,n.iD)("label",a,(0,o.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,o.C_)(s.wrapperClass)},[(0,n.WI)(l.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",u,(0,o.zw)(e.help),1)):(0,n.kq)("",!0)])}var c=e(2262),m={name:"Field",props:{label:String,help:String},setup(l,{slots:t}){const e=(0,c.Fl)((()=>{const l=[],e=t.default().length;return e>1&&l.push("grid grid-cols-1 gap-3"),2===e&&l.push("md:grid-cols-2"),l}));return{wrapperClass:e}}},r=e(3744);const d=(0,r.Z)(m,[["render",s]]);var p=d},4453:function(l,t,e){e.d(t,{Z:function(){return m}});var n=e(6252),o=e(3577);const i={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};function a(l,t,e,a,u,s){return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?(0,n.WI)(l.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",i,[(0,n.WI)(l.$slots,"default")]))],2)}var u={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},s=e(3744);const c=(0,s.Z)(u,[["render",a]]);var m=c},2748:function(l,t,e){e.r(t),e.d(t,{default:function(){return tl}});var n=e(6252);const o=(0,n._)("p",null,"This is sample modal",-1),i=(0,n._)("p",null,"This is sample modal",-1),a=(0,n._)("p",null,"This is sample modal",-1),u=(0,n.Uk)("UI Components"),s=(0,n.Uk)(" Dark mode "),c={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},m=(0,n.Uk)(" Modal examples "),r={class:"space-y-12"},d=(0,n._)("div",{class:"space-y-3"},[(0,n._)("p",null,"Click to see in action")],-1),p=(0,n._)("div",{class:"space-y-3"},[(0,n._)("h1",{class:"text-2xl"},"Unhandled exception"),(0,n._)("p",null,"Click to see in action")],-1),b=(0,n._)("div",{class:"space-y-3"},[(0,n._)("h1",{class:"text-2xl"},"Success"),(0,n._)("p",null,"Click to see in action")],-1),f=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),w={class:"flex items-center justify-center mt-6"},g=(0,n._)("b",null,"Info state",-1),h=(0,n.Uk)(". Notification "),_=(0,n._)("b",null,"Success state",-1),W=(0,n.Uk)(". Notification "),x=(0,n._)("b",null,"Warning state",-1),k=(0,n.Uk)(". Notification "),O=(0,n._)("b",null,"Danger state",-1),y=(0,n.Uk)(". Notification "),v=(0,n._)("b",null,"White",-1),S=(0,n.Uk)(". Notification "),C=(0,n._)("b",null,"Light",-1),B=(0,n.Uk)(". Notification "),I=(0,n.Uk)("Buttons"),N=(0,n.Uk)("Cards"),U={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Z=(0,n._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},"With title",-1),T=(0,n._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},"With title & icons",-1);function V(l,t,e,V,A,D){const M=(0,n.up)("modal-box"),H=(0,n.up)("title-bar"),j=(0,n.up)("hero-bar"),F=(0,n.up)("titled-section"),P=(0,n.up)("jb-button"),z=(0,n.up)("card-component"),Y=(0,n.up)("main-section"),q=(0,n.up)("divider"),R=(0,n.up)("jb-buttons"),G=(0,n.up)("check-radio-picker"),L=(0,n.up)("notification"),$=(0,n.up)("field"),E=(0,n.up)("title-sub-bar"),J=(0,n.up)("bottom-other-pages-section");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(M,{modelValue:V.modalOneActive,"onUpdate:modelValue":t[0]||(t[0]=l=>V.modalOneActive=l),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,n.w5)((()=>[o])),_:1},8,["modelValue"]),(0,n.Wm)(M,{modelValue:V.modalTwoActive,"onUpdate:modelValue":t[1]||(t[1]=l=>V.modalTwoActive=l),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,n.w5)((()=>[i])),_:1},8,["modelValue"]),(0,n.Wm)(M,{modelValue:V.modalThreeActive,"onUpdate:modelValue":t[2]||(t[2]=l=>V.modalThreeActive=l),"large-title":"Success",button:"success"},{default:(0,n.w5)((()=>[a])),_:1},8,["modelValue"]),(0,n.Wm)(H,{"title-stack":V.titleStack},null,8,["title-stack"]),(0,n.Wm)(j,null,{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)(F,{first:""},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(z,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(P,{label:"Toggle",onClick:V.darkModeToggle,outline:""},null,8,["onClick"])])])),_:1})])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(z,{title:"Confirm modal","header-icon":V.mdiClose,onClick:t[3]||(t[3]=l=>V.modalOneActive=!0),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,n.w5)((()=>[d,(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{label:"Confirm",color:"info"}),(0,n.Wm)(P,{label:"Cancel",color:"info",outline:""})])),_:1})])),_:1},8,["header-icon"]),(0,n.Wm)(z,{onClick:t[4]||(t[4]=l=>V.modalTwoActive=!0),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,n.w5)((()=>[p,(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{label:"Done",color:"danger"})])),_:1})])),_:1}),(0,n.Wm)(z,{onClick:t[5]||(t[5]=l=>V.modalThreeActive=!0),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:""},{default:(0,n.w5)((()=>[b,(0,n.Wm)(q),(0,n.Wm)(P,{label:"Done",color:"success"})])),_:1})])])),_:1}),(0,n.Wm)(F,{custom:""},{default:(0,n.w5)((()=>[f,(0,n._)("div",w,[(0,n.Wm)(G,{type:"switch",name:"notifications-switch",options:{outline:"Outline"},modelValue:V.notificationSettingsModel,"onUpdate:modelValue":t[6]||(t[6]=l=>V.notificationSettingsModel=l)},null,8,["modelValue"])])])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{color:"info",icon:V.mdiInformationOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"info",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[g,h])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"success",icon:V.mdiCheckCircleOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"success",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[_,W])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"warning",icon:V.mdiAlertCircleOutline,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"warning",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[x,k])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"danger",icon:V.mdiAlertCircle,outline:V.notificationsOutline},{right:(0,n.w5)((()=>[(0,n.Wm)(P,{icon:V.mdiOpenInNew,label:"Button",color:"danger",outline:V.notificationsOutline,small:""},null,8,["icon","outline"])])),default:(0,n.w5)((()=>[O,y])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"white",icon:V.mdiSelectColor,outline:V.notificationsOutline},{default:(0,n.w5)((()=>[v,S])),_:1},8,["icon","outline"]),(0,n.Wm)(L,{color:"light",icon:V.mdiFeather,outline:V.notificationsOutline},{default:(0,n.w5)((()=>[C,B])),_:1},8,["icon","outline"])])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[I])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(z,null,{default:(0,n.w5)((()=>[(0,n.Wm)($,{label:"Settings"},{default:(0,n.w5)((()=>[(0,n.Wm)(G,{name:"buttons-switch",type:"switch",modelValue:V.buttonSettingsModel,"onUpdate:modelValue":t[7]||(t[7]=l=>V.buttonSettingsModel=l),options:{outline:"Outline",small:"Small"}},null,8,["modelValue"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"light",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"info",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"success",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"warning",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"]),(0,n.Wm)(P,{color:"danger",label:"Button",small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["small","outline"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"light",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"info",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"success",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"warning",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"danger",label:"Button",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])])),_:1}),(0,n.Wm)(q),(0,n.Wm)(R,null,{default:(0,n.w5)((()=>[(0,n.Wm)(P,{color:"white",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"light",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"info",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"success",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"warning",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"]),(0,n.Wm)(P,{color:"danger",icon:V.mdiOpenInNew,small:V.buttonsSmall,outline:V.buttonsOutline},null,8,["icon","small","outline"])])),_:1})])),_:1})])),_:1}),(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[N])),_:1}),(0,n.Wm)(Y,null,{default:(0,n.w5)((()=>[(0,n._)("div",U,[(0,n.Wm)(z,{title:"With Title",mb:""},{default:(0,n.w5)((()=>[Z])),_:1}),(0,n.Wm)(z,{title:"Title & Icons",icon:V.mdiMonitorCellphone,"header-icon":V.mdiClose,mb:""},{default:(0,n.w5)((()=>[T])),_:1},8,["icon","header-icon"])]),(0,n.Wm)(E,{icon:V.mdiAlertCircle,title:"Empty variation"},null,8,["icon"]),(0,n.Wm)(z,{empty:""})])),_:1}),(0,n.Wm)(J)],64)}var A=e(2262),D=e(8637),M=e(5317),H=e(179),j=e(3003),F=e(6183),P=e(7250),z=e(9275),Y=e(5507),q=e(3893),R=e(4312),G=e(8208),L=e(4453),$=e(338),E=e(9830),J=e(1915),K=e(5847),Q={name:"Ui",components:{TitleSubBar:K.Z,MainSection:H.Z,HeroBar:j.Z,TitleBar:F.Z,CardComponent:P.Z,JbButtons:z.Z,JbButton:Y.Z,Notification:q.Z,Divider:R.Z,ModalBox:G.Z,TitledSection:L.Z,CheckRadioPicker:E.Z,Field:$.Z,BottomOtherPagesSection:J.Z},setup(){const l=(0,A.iH)(["Admin","UI Components"]),t=(0,A.iH)(!1),e=(0,A.iH)(!1),n=(0,A.iH)(!1),o=(0,A.iH)([]),i=(0,A.Fl)((()=>o.value.indexOf("outline")>-1)),a=(0,A.iH)([]),u=(0,A.Fl)((()=>a.value.indexOf("outline")>-1)),s=(0,A.Fl)((()=>a.value.indexOf("small")>-1)),c=(0,D.oR)(),m=()=>{c.dispatch("darkMode")};return{titleStack:l,modalOneActive:t,modalTwoActive:e,modalThreeActive:n,notificationSettingsModel:o,notificationsOutline:i,buttonSettingsModel:a,buttonsOutline:u,buttonsSmall:s,darkModeToggle:m,mdiMonitorCellphone:M.qOQ,mdiSelectColor:M.ghH,mdiFeather:M.zuO,mdiInformationOutline:M.EaN,mdiCheckCircleOutline:M.k6A,mdiAlertCircle:M.fr4,mdiAlertCircleOutline:M._gM,mdiOpenInNew:M.fOx,mdiReload:M.vS,mdiPlusCircle:M.kQ,mdiBroadcast:M.O9b,mdiLifebuoy:M.azf,mdiClose:M.r5M}}},X=e(3744);const ll=(0,X.Z)(Q,[["render",V]]);var tl=ll}}]);
//# sourceMappingURL=ui.b72b709d.js.map