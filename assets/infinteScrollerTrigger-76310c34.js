import{Q as l,u as p}from"./handleAsync-152e3216.js";import{o as P,q as x,t as m,p as M,j as b}from"./index-87627dfc.js";import{m as N}from"./App-ae085aae.js";class $ extends l{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:P()},t)}getOptimisticResult(e){return e.behavior=P(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var i,a,c,o,h,n;const{state:r}=e,u=super.createResult(e,t),{isFetching:f,isRefetching:v}=u,g=f&&((i=r.fetchMeta)==null||(a=i.fetchMore)==null?void 0:a.direction)==="forward",d=f&&((c=r.fetchMeta)==null||(o=c.fetchMore)==null?void 0:o.direction)==="backward";return{...u,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:x(t,(h=r.data)==null?void 0:h.pages),hasPreviousPage:m(t,(n=r.data)==null?void 0:n.pages),isFetchingNextPage:g,isFetchingPreviousPage:d,isRefetching:v&&!g&&!d}}}function _(s,e,t){const i=M(s,e,t);return p(i,$)}const w=s=>b.jsx(N.div,{onViewportEnter:()=>s.fetchNextPage()});export{w as I,_ as u};