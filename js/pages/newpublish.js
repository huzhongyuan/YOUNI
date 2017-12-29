//jscs:disable
window.onload = function () {
//jscs:enable

    sessionStorage.setItem('sid', '111');
    let sid = sessionStorage.getItem('sid');
    let activityId = sessionStorage.getItem('activityId');

    // alert(activityId)
    let theme = document.getElementById('theme');
    let time = document.getElementById('time');
    let describ = document.getElementById('describ');
    let img = document.getElementById('img');
    let submit = document.getElementById('submit');

    //点击提交
    $(submit).on('click', () => {
      if (theme.value != '' && time.value != '' && describ.value != '') {
        let lalala = new Date();
        let stratTime = lalala;
        let fileObj = img.files[0];
        let formFile = new FormData();
        formFile.append('sId', sid);
        formFile.append('theme', theme.value);
        formFile.append('stratTime', stratTime);
        formFile.append('endTime', time.value);
        formFile.append('description', describ.value);
        formFile.append('file', fileObj); //加入文件对象
        $.ajax({
          type: 'post',
          //datType: 'multipart/form-data',
          url: 'http://192.168.1.103:8080/activities/.do',
          data: formFile,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (json) {
            window.location.href = 'mypublished.html';
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
