document.querySelector('input[type="file"]').addEventListener('change', function () {
  const fileName = this.files[0]?.name || "Немає вибраного файлу";
  document.querySelector('.upload-box span').textContent = fileName;
});