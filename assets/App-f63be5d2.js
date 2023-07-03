import{r,L as z,l as oe,_ as j,u as re,j as p,R as se,a as w,N as A}from"./index-f1810598.js";import{i as O,a as ae,b as D,c as T,d as _,e as ie,f as ue,g as N,h as H,j as B,k as ce,l as le,m as fe,r as de,s as me,n as he,o as pe,p as ge,q as xe,t as Ce,u as ye}from"./index-6d2467d1.js";const W=r.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),S=r.createContext({}),k=r.createContext(null),R=O?r.useLayoutEffect:r.useEffect;function Me(e,t,n,o){const{visualElement:s}=r.useContext(S),u=r.useContext(z),l=r.useContext(k),f=r.useContext(W).reducedMotion,g=r.useRef();o=o||u.renderer,!g.current&&o&&(g.current=o(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f}));const c=g.current;return r.useInsertionEffect(()=>{c&&c.update(n,l)}),R(()=>{c&&c.render()}),r.useEffect(()=>{c&&c.updateFeatures()}),(window.HandoffAppearAnimations?R:r.useEffect)(()=>{c&&c.animationState&&c.animationState.animateChanges()}),c}function ve(e,t,n){return r.useCallback(o=>{o&&e.mount&&e.mount(o),t&&(o?t.mount(o):t.unmount()),n&&(typeof n=="function"?n(o):ae(n)&&(n.current=o))},[t])}function Ee(e,t){if(D(e)){const{initial:n,animate:o}=e;return{initial:n===!1||T(n)?n:void 0,animate:T(o)?o:void 0}}return e.inherit!==!1?t:{}}function be(e){const{initial:t,animate:n}=Ee(e,r.useContext(S));return r.useMemo(()=>({initial:t,animate:n}),[F(t),F(n)])}function F(e){return Array.isArray(e)?e.join(" "):e}const $=r.createContext({}),Re=r.createContext({}),Pe=Symbol.for("motionComponentSymbol");function Se({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:o,Component:s}){e&&oe(e);function u(f,g){let c;const a={...r.useContext(W),...f,layoutId:Ve(f)},{isStatic:i}=a,m=be(f),x=o(f,i);if(!i&&O){m.visualElement=Me(s,x,a,t);const C=r.useContext(Re),y=r.useContext(z).strict;m.visualElement&&(c=m.visualElement.loadFeatures(a,y,e,C))}return r.createElement(S.Provider,{value:m},c&&m.visualElement?r.createElement(c,{visualElement:m.visualElement,...a}):null,n(s,f,ve(x,m.visualElement,g),x,i,m.visualElement))}const l=r.forwardRef(u);return l[Pe]=s,l}function Ve({layoutId:e}){const t=r.useContext($).id;return t&&e!==void 0?t+"-"+e:e}function we(e){function t(o,s={}){return Se(e(o,s))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(o,s)=>(n.has(s)||n.set(s,t(s)),n.get(s))})}const I=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function G(e,t,n){for(const o in t)!_(t[o])&&!ie(o,n)&&(e[o]=t[o])}function Ae({transformTemplate:e},t,n){return r.useMemo(()=>{const o=I();return ue(o,t,{enableHardwareAcceleration:!n},e),Object.assign({},o.vars,o.style)},[t])}function Le(e,t,n){const o=e.style||{},s={};return G(s,o,e),Object.assign(s,Ae(e,t,n)),e.transformValues?e.transformValues(s):s}function je(e,t,n){const o={},s=Le(e,t,n);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=s,o}const _e=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function P(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||_e.has(e)}let U=e=>!P(e);function ke(e){e&&(U=t=>t.startsWith("on")?!P(t):e(t))}try{ke(require("@emotion/is-prop-valid").default)}catch{}function Ie(e,t,n){const o={};for(const s in e)s==="values"&&typeof e.values=="object"||(U(s)||n===!0&&P(s)||!t&&!P(s)||e.draggable&&s.startsWith("onDrag"))&&(o[s]=e[s]);return o}const K=()=>({...I(),attrs:{}});function Te(e,t,n,o){const s=r.useMemo(()=>{const u=K();return N(u,t,{enableHardwareAcceleration:!1},H(o),e.transformTemplate),{...u.attrs,style:{...u.style}}},[t]);if(e.style){const u={};G(u,e.style,e),s.style={...u,...s.style}}return s}function Fe(e=!1){return(n,o,s,{latestValues:u},l)=>{const g=(B(n)?Te:je)(o,u,l,n),a={...Ie(o,typeof n=="string",e),...g,ref:s},{children:i}=o,m=r.useMemo(()=>_(i)?i.get():i,[i]);return r.createElement(n,{...a,children:m})}}function q(e){const t=r.useRef(null);return t.current===null&&(t.current=e()),t.current}function ze(e){const t=_(e)?e.get():e;return ce(t)?t.toValue():t}function Oe({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},o,s,u){const l={latestValues:De(o,s,u,e),renderState:t()};return n&&(l.mount=f=>n(o,f,l)),l}const Y=e=>(t,n)=>{const o=r.useContext(S),s=r.useContext(k),u=()=>Oe(e,t,o,s);return n?u():q(u)};function De(e,t,n,o){const s={},u=o(e,{});for(const m in u)s[m]=ze(u[m]);let{initial:l,animate:f}=e;const g=D(e),c=le(e);t&&c&&!g&&e.inherit!==!1&&(l===void 0&&(l=t.initial),f===void 0&&(f=t.animate));let a=n?n.initial===!1:!1;a=a||l===!1;const i=a?f:l;return i&&typeof i!="boolean"&&!fe(i)&&(Array.isArray(i)?i:[i]).forEach(x=>{const C=de(e,x);if(!C)return;const{transitionEnd:y,transition:V,...E}=C;for(const d in E){let h=E[d];if(Array.isArray(h)){const v=a?h.length-1:0;h=h[v]}h!==null&&(s[d]=h)}for(const d in y)s[d]=y[d]}),s}const Ne={useVisualState:Y({scrapeMotionValuesFromProps:me,createRenderState:K,onMount:(e,t,{renderState:n,latestValues:o})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}N(n,o,{enableHardwareAcceleration:!1},H(t.tagName),e.transformTemplate),he(t,n)}})},He={useVisualState:Y({scrapeMotionValuesFromProps:pe,createRenderState:I})};function Be(e,{forwardMotionProps:t=!1},n,o){return{...B(e)?Ne:He,preloadedFeatures:n,useRender:Fe(t),createVisualElement:o,Component:e}}const X=we(Be);function J(){const e=r.useRef(!1);return R(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function We(){const e=J(),[t,n]=r.useState(0),o=r.useCallback(()=>{e.current&&n(t+1)},[t]);return[r.useCallback(()=>ge.postRender(o),[o]),t]}class $e extends r.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ge({children:e,isPresent:t}){const n=r.useId(),o=r.useRef(null),s=r.useRef({width:0,height:0,top:0,left:0});return r.useInsertionEffect(()=>{const{width:u,height:l,top:f,left:g}=s.current;if(t||!o.current||!u||!l)return;o.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${l}px !important;
            top: ${f}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),r.createElement($e,{isPresent:t,childRef:o,sizeRef:s},r.cloneElement(e,{ref:o}))}const L=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:s,presenceAffectsLayout:u,mode:l})=>{const f=q(Ue),g=r.useId(),c=r.useMemo(()=>({id:g,initial:t,isPresent:n,custom:s,onExitComplete:a=>{f.set(a,!0);for(const i of f.values())if(!i)return;o&&o()},register:a=>(f.set(a,!1),()=>f.delete(a))}),u?void 0:[n]);return r.useMemo(()=>{f.forEach((a,i)=>f.set(i,!1))},[n]),r.useEffect(()=>{!n&&!f.size&&o&&o()},[n]),l==="popLayout"&&(e=r.createElement(Ge,{isPresent:n},e)),r.createElement(k.Provider,{value:c},e)};function Ue(){return new Map}function Ke(e){return r.useEffect(()=>()=>e(),[])}const M=e=>e.key||"";function qe(e,t){e.forEach(n=>{const o=M(n);t.set(o,n)})}function Ye(e){const t=[];return r.Children.forEach(e,n=>{r.isValidElement(n)&&t.push(n)}),t}const Xe=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:s,presenceAffectsLayout:u=!0,mode:l="sync"})=>{const f=r.useContext($).forceRender||We()[0],g=J(),c=Ye(e);let a=c;const i=r.useRef(new Map).current,m=r.useRef(a),x=r.useRef(new Map).current,C=r.useRef(!0);if(R(()=>{C.current=!1,qe(c,x),m.current=a}),Ke(()=>{C.current=!0,x.clear(),i.clear()}),C.current)return r.createElement(r.Fragment,null,a.map(d=>r.createElement(L,{key:M(d),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:u,mode:l},d)));a=[...a];const y=m.current.map(M),V=c.map(M),E=y.length;for(let d=0;d<E;d++){const h=y[d];V.indexOf(h)===-1&&!i.has(h)&&i.set(h,void 0)}return l==="wait"&&i.size&&(a=[]),i.forEach((d,h)=>{if(V.indexOf(h)!==-1)return;const v=x.get(h);if(!v)return;const Z=y.indexOf(h);let b=d;if(!b){const ee=()=>{x.delete(h),i.delete(h);const te=m.current.findIndex(ne=>ne.key===h);if(m.current.splice(te,1),!i.size){if(m.current=c,g.current===!1)return;f(),o&&o()}};b=r.createElement(L,{key:M(v),isPresent:!1,onExitComplete:ee,custom:t,presenceAffectsLayout:u,mode:l},v),i.set(h,b)}a.splice(Z,0,b)}),a=a.map(d=>{const h=d.key;return i.has(h)?d:r.createElement(L,{key:M(d),isPresent:!0,presenceAffectsLayout:u,mode:l},d)}),r.createElement(r.Fragment,null,i.size?a:a.map(d=>r.cloneElement(d)))};function Je(){!xe.current&&Ce();const[e]=r.useState(ye.current);return e}const Qe=r.lazy(()=>j(()=>import("./page-fe3ec571.js"),["./page-fe3ec571.js","./index-f1810598.js","./index-d579605f.css","./handleAsync-07793997.js","./useTMDB-be268a36.js","./index-6d2467d1.js"],import.meta.url)),Ze=r.lazy(()=>j(()=>import("./page-c2712fe3.js"),["./page-c2712fe3.js","./index-f1810598.js","./index-d579605f.css","./handleAsync-07793997.js","./useTMDB-be268a36.js","./imageCard-888fdf2a.js","./index-6d2467d1.js"],import.meta.url)),et=r.lazy(()=>j(()=>import("./page-81f6d4ff.js"),["./page-81f6d4ff.js","./index-f1810598.js","./index-d579605f.css","./imageCard-888fdf2a.js","./handleAsync-07793997.js","./index-6d2467d1.js"],import.meta.url)),tt=()=>{const e=re();return p.jsxs(se,{location:e,children:[p.jsx(w,{path:"/",element:p.jsx(Qe,{})}),p.jsx(w,{path:"/movie/:movieId",element:p.jsx(Ze,{})}),p.jsx(w,{path:"/collection",element:p.jsx(et,{})})]},e.pathname)},nt=()=>{const e=Je();return p.jsxs(X.nav,{className:`flex gap-2 md:gap-8 fixed
      pl-12 py-4 md:px-4 bottom-0 md:top-0
      md:bottom-auto right-0 md:left-0
      flex-col md:flex-row backdrop-blur-lg backdrop-filter
      w-full z-20 bg-black bg-opacity-10`,initial:{y:e?0:"-100%"},animate:{y:0},transition:{duration:1},children:[p.jsx(A,{to:"/",className:"font-title text-sm font-extrabold navlink",children:"POSTERIFY"}),p.jsxs("div",{className:"flex gap-6 md:gap-4",children:[p.jsx(A,{to:"/search",className:"font-title lowercase md:text-base text-xl drop-shadow-lg navlink",children:"search"}),p.jsx(A,{to:"/collection",className:"font-title lowercase md:text-base text-xl drop-shadow-lg navlink",children:"collection"})]})]})},Q=r.createContext(e=>{}),ot=e=>{const[t,n]=r.useState(void 0),o=r.useCallback(()=>{n(void 0)},[n]);return p.jsx(Q.Provider,{value:n,children:p.jsxs(Xe,{initial:!0,mode:"sync",children:[e.children,!!t&&p.jsx(X.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed z-50 top-0 left-0 bg-black bg-opacity-25
        backdrop-blur-sm cursor-pointer w-screen h-screen overflow-hidden
        p-4 lg:p-16`,onClick:o,children:t})]})})};function it(){return r.useContext(Q)}function rt(){return p.jsxs(p.Fragment,{children:[p.jsx(nt,{}),p.jsx(ot,{children:p.jsx(tt,{})})]})}const ut=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));export{ut as A,X as m,it as u};
