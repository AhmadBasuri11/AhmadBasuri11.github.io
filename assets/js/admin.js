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