const slides=[...document.querySelectorAll('.slide')],dots=document.querySelector('.dots');let current=0,timer;
slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Ir para imagem '+(i+1));b.onclick=()=>show(i);dots.appendChild(b)});
function show(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===current));clearInterval(timer);timer=setInterval(()=>show(current+1),5500)}
document.querySelector('.next').onclick=()=>show(current+1);document.querySelector('.prev').onclick=()=>show(current-1);show(0);
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav nav');btn.onclick=()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
