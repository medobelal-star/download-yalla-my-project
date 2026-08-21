// كود مشترك بين كل صفحات الأدوات
function copyToClipboard(text, btn){
  navigator.clipboard.writeText(text).then(()=>{
    if(btn){
      const old = btn.textContent;
      btn.textContent = "تم النسخ ✓";
      setTimeout(()=> btn.textContent = old, 1500);
    }
  });
}
function downloadBlob(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
