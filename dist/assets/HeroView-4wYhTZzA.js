import{_ as w,c,k,w as o,l as C,i as b,d as n,e as y,f as e,t as a,b as l,g as p,u as h}from"./index-DdoPAm8l.js";const B={class:"ms-3 text-yellow-darken-3"},T={class:"position-relative w-100 h-25"},q=["src"],I={class:"position-absolute index w-100"},N={__name:"HeroView",props:{id:{typeof:String,require:!0}},setup(m){const r=h(),u=b(),_=m,x=c(()=>r.getters.GET_MAIL),s=c(()=>r.getters.GET_HERO(_.id)),i=()=>{r.dispatch("logout"),u.push("/")};return s.value==null&&(i(),u.push("/")),(A,t)=>{const f=n("VCardTitle"),d=n("VCardItem"),v=n("VCard"),g=n("VBtn"),V=n("VContainer");return s.value?(y(),k(V,{key:0,class:"bg-info my-5"},{default:o(()=>[e("h3",B,"Bienvenido "+a(x.value),1),t[4]||(t[4]=e("h3",{class:"text-center my-1 text-yellow-darken-3"},"Aquí puedes ver los detalles del héroe seleccionado",-1)),l(v,{class:"mx-auto my-3 w-50 bg-shades-white"},{default:o(()=>[e("div",T,[e("img",{src:s.value.imagen},null,8,q),e("div",I,[l(f,{class:"text-center text-white"},{default:o(()=>[p(a(s.value.nombre),1)]),_:1})])]),l(d,{"prepend-icon":"mdi-sword-cross",class:"text-blue-darken-2"},{default:o(()=>[e("div",null,[e("p",null,a(s.value.ataque),1),t[0]||(t[0]=e("small",{class:"text-grey"},"Ataque",-1))])]),_:1}),l(d,{"prepend-icon":"mdi-decagram",class:"text-blue-darken-2"},{default:o(()=>[e("div",null,[e("p",null,a(s.value.titulo),1),t[1]||(t[1]=e("small",{class:"text-grey"},"Titulo",-1))])]),_:1}),l(d,{"prepend-icon":"mdi-tools",class:"text-blue-darken-2"},{default:o(()=>[e("div",null,[e("p",null,a(s.value.funcion),1),t[2]||(t[2]=e("small",{class:"text-grey"},"Función",-1))])]),_:1})]),_:1}),l(g,{color:"blue-darken-4",class:"d-block w-25 mx-auto",onClick:i},{default:o(()=>t[3]||(t[3]=[p("logout")])),_:1})]),_:1})):C("",!0)}}},H=w(N,[["__scopeId","data-v-b6fc0630"]]);export{H as default};
