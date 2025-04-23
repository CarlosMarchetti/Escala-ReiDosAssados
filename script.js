document.getElementById("scaleForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
  
    data.forEach((value, key) => {
      const el = document.getElementById(key);
      if (el) el.textContent = value;
    });
  
    document.getElementById("scaleForm").style.display = "none";
    document.getElementById("previewContainer").style.display = "block";
  });
  
  document.getElementById("downloadBtn").addEventListener("click", async () => {
    const element = document.getElementById("imagePreview");
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = "escala-rei-dos-assados.png";
    link.href = canvas.toDataURL();
    link.click();
  
    setTimeout(() => location.reload(), 1000);
  });
  