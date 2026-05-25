
const CONSULT_KEY='ds_consults_premium';
function getConsults(){try{return JSON.parse(localStorage.getItem(CONSULT_KEY)||'[]')}catch(e){return[]}}
function saveConsults(v){localStorage.setItem(CONSULT_KEY,JSON.stringify(v))}
function fileData(file){return new Promise(r=>{if(!file)return r('');const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(file)})}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
const form=document.getElementById('consultForm');
if(form){form.addEventListener('submit',async e=>{e.preventDefault();const img=await fileData(document.getElementById('image').files[0]);const item={id:Date.now(),name:name.value,phone:phone.value,area:area.value,type:type.value,message:message.value,image:img,date:new Date().toLocaleString('ko-KR')};const arr=getConsults();arr.unshift(item);saveConsults(arr);form.reset();alert('상담 신청이 등록되었습니다.');})}
