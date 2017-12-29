//jscs:disable
window.onload = function () {
//jscs:enable
  let username = document.getElementById('username');
  let sId = document.getElementById('sId');
  let phone = document.getElementById('phone');
  let inputGroupSelect01 = document.getElementById('inputGroupSelect01');
  const submit = document.getElementById('submit');
  let activitiyId = sessionStorage.getItem('activitiyId');
  submit.onclick = () => {
    if (username.value != '' && sId.value != '' && phone.vlaue != '') {
      $.ajax({
        type: 'post',
        datType: 'json',
        url: 'http://192.168.1.103:8080/activityRegisters.do',
        data: {
          sId: sId.value,
          activityId: activitiyId,
          userName: username.value,
          phoneNumber: phone.value,
          academy: inputGroupSelect01.value,
        },
        success: function (json) {
          if (json.status == 1) {
            alert('报名成功');
            window.location.href = 'organization.html';
          } else {
            alert('网络错误');
          }
        },

        error: function (json) {
          alert(JSON.stringify(json));
        },
      });
    } else {
      alert('请完善你的信息');
    }
  }
};
