/* IDM work examples: fixed illustrative samples, no AI calls or data collection. */
(()=>{
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const mayMove=()=>!reduced.matches&&!document.body.classList.contains('motion-off');
 const animations=new Set();
 function enter(el){if(!mayMove()||!el.animate)return;const a=el.animate([{opacity:.25,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});animations.add(a);a.onfinish=a.oncancel=()=>animations.delete(a);}
 function stop(){if(!mayMove())animations.forEach(a=>a.cancel());}
 if(reduced.addEventListener)reduced.addEventListener('change',stop);
 const motion=document.getElementById('motionToggle');if(motion)motion.addEventListener('click',stop);
 const stageButtons=[...document.querySelectorAll('[data-stage]')];
 stageButtons.forEach(button=>button.addEventListener('click',()=>{
  if(button.getAttribute('aria-pressed')==='true')return;
  stageButtons.forEach(b=>{const on=b===button;b.setAttribute('aria-pressed',String(on));document.getElementById(b.getAttribute('aria-controls')).hidden=!on;});
  enter(document.getElementById(button.getAttribute('aria-controls')));
 }));
 const cases=[...document.querySelectorAll('[data-case]')];
 if(cases.length){
  function setStep(section,index){
   const tabs=[...section.querySelectorAll('[role=tab]')];
   index=Math.max(0,Math.min(tabs.length-1,index));
   tabs.forEach((b,i)=>{const on=i===index;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on;});
   section.dataset.activeStep=String(index);
   const next=section.querySelector('[data-next]');next.textContent=['次へ：AIの整理例　→','次へ：人の確認　→','最初の素材に戻る　↺'][index];
   enter(document.getElementById(tabs[index].getAttribute('aria-controls')));
  }
  cases.forEach(section=>{
   const tabs=[...section.querySelectorAll('[role=tab]')];
   tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>setStep(section,index));
    tab.addEventListener('keydown',event=>{let i=index;if(event.key==='ArrowRight')i=(index+1)%tabs.length;else if(event.key==='ArrowLeft')i=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')i=0;else if(event.key==='End')i=tabs.length-1;else return;event.preventDefault();setStep(section,i);tabs[i].focus();});
   });
   section.querySelector('[data-next]').addEventListener('click',()=>{const index=(Number(section.dataset.activeStep)+1)%tabs.length;setStep(section,index);tabs[index].focus({preventScroll:true});section.querySelector('.sample-workbench').scrollIntoView({behavior:mayMove()?'smooth':'auto',block:'start'});});
   setStep(section,0);
  });
  function selectCase(key,focus){
   const selected=cases.find(c=>c.dataset.case===key)||cases[0];
   cases.forEach(c=>c.hidden=c!==selected);
   document.querySelectorAll('[data-case-link]').forEach(a=>{if(a.dataset.caseLink===selected.dataset.case)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
   if(focus){selected.querySelector('h2').focus({preventScroll:true});document.getElementById('samples').scrollIntoView({behavior:mayMove()?'smooth':'auto',block:'start'});}
  }
  document.querySelectorAll('[data-case-link]').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();const key=a.dataset.caseLink;history.pushState(null,'','#'+key);selectCase(key,true);}));
  window.addEventListener('hashchange',()=>selectCase(location.hash.slice(1),false));
  window.addEventListener('popstate',()=>selectCase(location.hash.slice(1),false));
  selectCase(location.hash.slice(1),false);
  const menu=document.getElementById('menu'),nav=document.getElementById('navigation');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
 }
})();
