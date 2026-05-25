
const CASE_KEY='ds_cases_premium';
const sample=[
{id:1,title:'옥상 우레탄 방수',date:'2024.05',url:'#',image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'},
{id:2,title:'아파트 베란다 방수',date:'2024.04',url:'#',image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80'},
{id:3,title:'옥상 에폭시 방수',date:'2024.04',url:'#',image:'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80'},
{id:4,title:'테라스 방수',date:'2024.03',url:'#',image:'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=80'}];
function getCases(){try{const v=JSON.parse(localStorage.getItem(CASE_KEY)||'[]');return v.length?v:sample}catch(e){return sample}}
function saveCases(v){localStorage.setItem(CASE_KEY,JSON.stringify(v))}
function fileData(file){return new Promise(r=>{if(!file)return r('');const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(file)})}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function card(c,del=false){return `<article class="case-card"><a href="${esc(c.url||'#')}" target="_blank"><img src="${esc(c.image)}"><div class="case-info"><h3>${esc(c.title)}</h3><p>${esc(c.date)}</p></div></a>${del?`<button class="delete" onclick="deleteCase(${c.id})">삭제</button>`:''}</article>`}
function renderCases(){const el=document.getElementById('caseList'); if(el) el.innerHTML=getCases().map(c=>card(c)).join('')}
function renderHomeCases(){const el=document.getElementById('homeCases'); if(el) el.innerHTML=getCases().slice(0,4).map(c=>card(c)).join('')}
