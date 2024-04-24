document.getElementById('check').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const kelas = document.getElementById('kelas').value;
  const phone = document.getElementById('phone').value;
  const tempatlahir = document.getElementById('tempatlahir').value;
  const ttl = document.getElementById('date').value;
  const value = document.getElementById('value').value;
  var date = new Date();
  var options = { day: 'numeric', month: 'long', year: 'numeric'};
  var tanggalString = date.toLocaleDateString('id-ID', options);

  if (!name || !kelas || !phone || !tempatlahir || !date || !value) {
    swal('Oops!', 'Mohon isi semua data.', 'error');
    return;
  }

  const resultTableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
  const newRow = resultTableBody.insertRow();

  const newName = newRow.insertCell();
  const newKelas = newRow.insertCell();
  const newPhone = newRow.insertCell();
  const newTempatlahir = newRow.insertCell();
  const newValue = newRow.insertCell();

  newName.textContent = name;
  newKelas.textContent = kelas;
  newPhone.textContent = phone;
  newTempatlahir.textContent = tempatlahir+', '+tanggalString;
  newValue.textContent = value;

  const newEdit = newRow.insertCell();
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    
    newName.innerHTML = '<input type="text" id="newname" value="' + name + '">';
    newKelas.innerHTML = '<input type="text" id="newkelas" value="' + kelas + '">';
    newPhone.innerHTML = '<input type="tel" id="newphone" value="' + phone + '">';
    newTempatlahir.innerHTML = '<input type="text" id="newtempatlahir" value="' + tempatlahir + '">';
    newValue.innerHTML = '<input type="number" id="newvalue" value="' + value + '">';
    newEdit.innerHTML = '<button id="save">Simpan</button>';
    const saveButton = newEdit.querySelector('#save');
    saveButton.addEventListener('click', function() {
      nname = document.getElementById('newname').value;
      nkelas = document.getElementById('newkelas').value;
      nphone = document.getElementById('newphone').value;
      ntempatlahir = document.getElementById('newtempatlahir').value;
      nttl = document.getElementById('newdate').value;
      nvalue = document.getElementById('newvalue').value;
      newName.textContent = nname;
      newKelas.textContent = nkelas;
      newPhone.textContent = nphone;
      newTempatlahir.textContent = ntempatlahir+', '+ntanggalString;
      newValue.textContent = nvalue;
      newEdit.innerHTML = '<button id="edit">Simpan</button>';
    });
  });
  newEdit.appendChild(editButton);

  const newDelete = newRow.insertCell(6);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.addEventListener('click', function() {
    swal({
      title: 'Hapus data?',
      text: 'Data yang dihapus tidak dapat dikembalikan.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        newRow.parentNode.removeChild(newRow);
        swal('Berhasil!', 'Data berhasil dihapus.', 'success');
      }
    });
  });
  newDelete.appendChild(deleteButton);
});

// Nomor WhatsApp
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});