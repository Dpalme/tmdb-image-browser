import{r as g,c as m,j as e,N as h}from"./index-3f57a21e.js";import{H as p,T as d,C as u}from"./handleAsync-3e752732.js";import{S as x}from"./App-f0069a86.js";import{u as f}from"./useTMDB-4048cb23.js";import{u as j,I as N}from"./infinteScrollerTrigger-147fed10.js";import{F as P}from"./fallbackPosters-c8b90ec8.js";async function v(t="",o=1){return t===""?{page:1,total_pages:1,results:[],total_results:0}:f("/3/search/movie?query="+t+"&page="+o).then(a=>(a.results=a.results.filter(s=>!!s.poster_path&&!!s.backdrop_path),a))}const S=(t="")=>{const{data:o,error:a,isLoading:s,fetchNextPage:i,hasNextPage:n}=j(["search",t],({pageParam:r=1})=>v(t,r),{getNextPageParam:(r,l)=>r.page+1<r.total_pages?r.page+1:null}),c=g.useCallback(()=>{n&&i()},[n]);return{movies:o==null?void 0:o.pages.flatMap(r=>r.results),error:a,loading:s,fetchNextPage:c,hasNextPage:n}},_=()=>{const[t,o]=m(),a=t.get("query"),{movies:s,error:i,loading:n,fetchNextPage:c,hasNextPage:r}=S(a||"");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`grid grid-cols-2 md:grid-cols-4
        lg:grid-cols-6 xl:grid-cols-8 gap-2`,children:e.jsxs(p,{loading:n,error:i,fallback:e.jsx(P,{numberOfPosters:25}),children:[!!s&&s.length==0&&!!t.get("query")&&e.jsx("p",{className:"font-title text-3xl",children:"No results"}),s!==void 0&&s.map(l=>e.jsx(h,{to:`/movie/${l.id}`,className:`scale-100 hover:scale-110 transform
            transition-transform duration-300`,children:e.jsx(d,{type:"poster",path:l.poster_path},l.id)}))]})}),!!s&&s.length>0&&r&&e.jsx(N,{fetchNextPage:c,padding:64})]})},T=()=>e.jsxs(u,{containerClass:"!grid-cols-1 relative",children:[e.jsx("div",{className:"flex flex-col gap-2 fixed bottom-20 left-1/2 z-10 -translate-x-1/2 transform md:hidden",children:e.jsx(x,{})}),e.jsx(_,{})]});export{T as default};