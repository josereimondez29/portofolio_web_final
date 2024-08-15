"use strict";exports.id=82,exports.ids=[82],exports.modules={4485:(e,o,i)=>{i.d(o,{Z:()=>m});var s=i(5344),t=i(9410),r=i(3729),u=i(2225),n=i(103),a=i(372);function m({setShowModal:e,showModal:o,modalContent:i}){return(0,r.useEffect)(()=>{let o=o=>{let i=document.querySelector(".modal"),s=document.querySelector(".modal-content");i&&s&&!s.contains(o.target)&&i.contains(o.target)&&e(!1)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[e]),(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:`modal h1-modal-box fade ${o?"show":""}`,id:"h1-blog-1",tabIndex:"-1",role:"dialog",style:{transition:"0.4s",display:"block",visibility:`${o?"visible":"hidden"}`},children:s.jsx("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:s.jsx("div",{className:"modal-content",children:(0,s.jsxs)("div",{className:"modal-body",children:[s.jsx("div",{className:"h1-modal-img",children:i?.image&&s.jsx(t.default,{src:`https://solid-space-rotary-phone-xjpj7jrg69gfvppx-8000.app.github.dev${i.image}`,width:800,height:450,layout:"responsive",style:{objectFit:"cover"},alt:i.title||"Blog post image"})}),(0,s.jsxs)("div",{className:"blog-meta",children:[s.jsx("span",{className:"blog-date",children:new Date(i?.created_at).toLocaleDateString()}),s.jsx("span",{className:"blog-category",children:i?.category})]}),s.jsx("h6",{className:"blog-title",children:i?.title}),s.jsx("div",{className:"h1-modal-paragraph",children:i?.content?s.jsx("p",{children:i.content}):s.jsx("p",{children:"No description available."})}),(0,s.jsxs)("div",{className:"h1-modal-share-buttons",children:[s.jsx("span",{children:"Compartir:"}),s.jsx("button",{className:"btn btn-linkedin",onClick:()=>c(i),children:s.jsx(u.G,{icon:n.D9H,size:"lg"})}),s.jsx("button",{className:"btn btn-whatsapp",onClick:()=>d(i),children:s.jsx(u.G,{icon:n.VHX,size:"lg"})}),s.jsx("button",{className:"btn btn-email",onClick:()=>l(i),children:s.jsx(u.G,{icon:a.FU$,size:"lg"})}),s.jsx("button",{className:"btn btn-rss",onClick:()=>p(),children:s.jsx(u.G,{icon:a.Fwd,size:"lg"})})]})]})})})}),o&&s.jsx("div",{className:"modal-header",children:s.jsx("button",{type:"button",className:"close","data-bs-dismiss":"modal",onClick:()=>e(!1),children:s.jsx("i",{className:"far fa-times"})})})]})}let c=e=>{let o=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;window.open(o,"_blank")},l=e=>{let o=`Check out this blog post: ${e.title}`,i=`${e.content}

Read more: ${window.location.href}`;window.location.href=`mailto:?subject=${encodeURIComponent(o)}&body=${encodeURIComponent(i)}`},d=e=>{let o=`https://wa.me/?text=${encodeURIComponent(e.content+"\n\nRead more: "+window.location.href)}`;window.open(o,"_blank")},p=()=>{window.open("http://example.com/rss-feed.xml","_blank")}},1910:(e,o,i)=>{i.d(o,{Y:()=>t,q:()=>s});let s=[{id:1,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:2,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:3,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:4,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:5,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:6,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:7,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:8,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:9,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:10,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:11,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:12,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]}],t=[{id:1,imgSrc:"/assets/img/blog/blog-img-5.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:`How to Own Your
    Audience by
    Creating an Email List.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:2,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:3,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:4,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:5,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:6,imgSrc:"/assets/img/blog/blog-img-6.png",bgClass:"bg-prink",date:"12 March",category:`Travel
    Landing`,title:`Everything
    You Need to Know About Web
    Accessibility.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:7,imgSrc:"/assets/img/blog/blog-img-5.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:`How to Own Your
    Audience by
    Creating an Email List.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:8,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:9,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:10,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:11,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:12,imgSrc:"/assets/img/blog/blog-img-6.png",bgClass:"bg-prink",date:"12 March",category:`Travel
    Landing`,title:`Everything
    You Need to Know About Web
    Accessibility.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:13,imgSrc:"/assets/img/blog/blog-img-5.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:`How to Own Your
    Audience by
    Creating an Email List.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:14,imgSrc:"/assets/img/blog/blog-img-1.png",bgClass:"bg-prink",date:"27 April",category:"Inspiration",title:"How to Own Your Audience by Creating an Email List.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:15,imgSrc:"/assets/img/blog/blog-img-2.png",bgClass:"bg-catkrill",date:"06 October",category:"Web Design",title:"The Window Knows How to Say Beside You",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:16,imgSrc:"/assets/img/blog/blog-img-3.png",bgClass:"bg-catkrill",date:"12 March",category:"Travel Landing",title:"Everything You Need to Know About Web Accessibility.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:17,imgSrc:"/assets/img/blog/blog-img-4.png",bgClass:"bg-prink",date:"15 November",category:"Web Design",title:"Top 10 Toolkits for Deep Learning in 2021.",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]},{id:18,imgSrc:"/assets/img/blog/blog-img-6.png",bgClass:"bg-prink",date:"12 March",category:`Travel
    Landing`,title:`Everything
    You Need to Know About Web
    Accessibility.`,desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur quo
      obcaecati rerum sit non.`]}]}};