//jscs:disable
window.onload = function () {
//jscs:enable
  let sid = sessionStorage.getItem('sid');
  let resName = document.getElementById('resName');
  let category = document.getElementById('category');
  let address = document.getElementById('address');
  let username = document.getElementById('username');
  let phoneNumber = document.getElementById('phoneNumber');
  let time = document.getElementById('time');
  let img = document.getElementById('img');
  let submit = document.getElementById('submit');

  //点击提交
  $(submit).on('click', () => {
    if (category.value != '' && address.value != '' && username.value != '' && phoneNumber.value != '' && time.value != '') {
      let fileObj = img.files[0];
      let formFile = new FormData();
      formFile.append('category', category.value);
      formFile.append('resName', resName.value);
      formFile.append('address', address.value);
      formFile.append('phoneNumber', phoneNumber.value);
      formFile.append('time', time.value);
      formFile.append('sId', sid);
      formFile.append('file', fileObj); //加入文件对象
      $.ajax({
        type: 'post',
        //datType: 'multipart/form-data',
        url: 'http://192.168.43.115:8080/losts.do',
        data: formFile,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (json) {
          window.location.href = 'lost.html';
        },

        error: function (json) {
          alert(JSON.stringify(json));
        },
      });
    } else {
      alert('请完善信息');
    };
  });
};
