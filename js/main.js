'use strict';

{
  // ハンバーガーメニュー
  const open=document.getElementById('open');
  const overlay=document.querySelector('.overlay');
  const close=document.getElementById('close');

  open.addEventListener('click', ()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', ()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  // ワーク詳細
  const open_1=document.getElementById('open_1');
  const open_2=document.getElementById('open_2');
  const open_3=document.getElementById('open_3');
  const open_4=document.getElementById('open_4');
  const open_5=document.getElementById('open_5');
  const open_6=document.getElementById('open_6');

  const close_1=document.getElementById('close_1');
  const close_2=document.getElementById('close_2');
  const close_3=document.getElementById('close_3');
  const close_4=document.getElementById('close_4');
  const close_5=document.getElementById('close_5');
  const close_6=document.getElementById('close_6');

  const modal_1=document.getElementById('modal_1');
  const modal_2=document.getElementById('modal_2');
  const modal_3=document.getElementById('modal_3');
  const modal_4=document.getElementById('modal_4');
  const modal_5=document.getElementById('modal_5');
  const modal_6=document.getElementById('modal_6');

  const mask=document.getElementById('mask');

  // ワーク①
  open_1.addEventListener('click', ()=>{
    modal_1.classList.remove('hidden'); 
    mask.classList.remove('hidden');
  });
  close_1.addEventListener('click', ()=>{
    modal_1.classList.add('hidden'); 
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', ()=>{
    close_1.click();
  });
// ワーク②
open_2.addEventListener('click', ()=>{
  modal_2.classList.remove('hidden'); 
  mask.classList.remove('hidden');
});
close_2.addEventListener('click', ()=>{
  modal_2.classList.add('hidden'); 
  mask.classList.add('hidden');
});
mask.addEventListener('click', ()=>{
  close_2.click();
});
// ワーク③
open_3.addEventListener('click', ()=>{
  modal_3.classList.remove('hidden'); 
  mask.classList.remove('hidden');
});
close_3.addEventListener('click', ()=>{
  modal_3.classList.add('hidden'); 
  mask.classList.add('hidden');
});
mask.addEventListener('click', ()=>{
  close_3.click();
});
// アプリ①
open_4.addEventListener('click', ()=>{
  modal_4.classList.remove('hidden'); 
  mask.classList.remove('hidden');
});
close_4.addEventListener('click', ()=>{
  modal_4.classList.add('hidden'); 
  mask.classList.add('hidden');
});
mask.addEventListener('click', ()=>{
  close_4.click();
});
// アプリ②
open_5.addEventListener('click', ()=>{
  modal_5.classList.remove('hidden'); 
  mask.classList.remove('hidden');
});
close_5.addEventListener('click', ()=>{
  modal_5.classList.add('hidden'); 
  mask.classList.add('hidden');
});
mask.addEventListener('click', ()=>{
  close_5.click();
});
// アプリ③
open_6.addEventListener('click', ()=>{
  modal_6.classList.remove('hidden'); 
  mask.classList.remove('hidden');
});
close_6.addEventListener('click', ()=>{
  modal_6.classList.add('hidden'); 
  mask.classList.add('hidden');
});
mask.addEventListener('click', ()=>{
  close_6.click();
});


}

