function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const noperserta = document.getElementById("noperserta").value.trim();
  const golongandarah = document.getElementById("golongandarah").value;
  const tahunkelahiran = document.getElementById("tahunkelahiran").value;

  // Menampilkan pesan "Selamat datang, sedang diproses"
  Swal.fire({
    title: 'Selamat datang!',
    text: 'Data Anda sedang diproses.',
    icon: 'info',
    showConfirmButton: false,
    allowOutsideClick: false
  });

  // Menunda pengiriman formulir dengan setTimeout
  setTimeout(function() {
    if (!nama || !noperserta || golongandarah === "Pilih" || tahunkelahiran === "Pilih") {
      // Use SweetAlert2 for displaying the alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Semua data harus diisi!',
      });
    } else {
      const confirmationMessage = `Konfirmasi Data:\n\nNama: ${nama}\nNo. Perserta: ${noperserta}\nGolongan Darah: ${golongandarah}\nTahun Kelahiran: ${tahunkelahiran}\n\nApakah semua data sudah benar?`;

      // Use SweetAlert2 for displaying the confirmation dialog
      Swal.fire({
        title: 'Konfirmasi',
        text: confirmationMessage,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, data sudah benar',
        cancelButtonText: 'Tidak, ada yang salah'
      }).then((result) => {
        if (result.isConfirmed) {
          // If the user confirms, prevent the form submission
          event.preventDefault(); // Prevent the default form submission
          // Show success message after form submission
          Swal.fire({
            title: 'Selamat Bergabung!',
            text: 'Terima kasih telah mengisi, malaikat akan menjemputmu.',
            icon: 'success'
          }).then(() => {
            // If the user closes the success message, submit the form
            document.getElementById("myForm").submit();
          });
        }
      });
    }
  }, 1000);

  // Prevent the default form submission until user interaction
  return false;
}
