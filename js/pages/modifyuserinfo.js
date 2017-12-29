//jscs:disable
window.onload = function () {
//jscs:enable
  sessionStorage.setItem('sid', '2016211019');
  const sId = sessionStorage.getItem('sid');
  const username = document.getElementById('userName');
  const sex = document.getElementById('sex');
  const birthday = document.getElementById('birthday');
  const academy = document.getElementById('academy');
  const classCode = document.getElementById('classCode');
  const selfIntroduction = document.getElementById('selfIntroduction');

  //加载个人信息
  let loadperson = () => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.1.102:8080/YouNi/user.do',
      data: {
        s_id: sId,
      },
      success: function (json) {
        username.value  = json.object.userName;
        sex.value = json.object.sex;
        birthday.value = json.object.birthday;
        academy.value = json.object.academy;
        classCode.value = json.object.class_code;
        selfIntroduction.value = json.object.self_introduction;
      },

      error: function (json) {
        alert(JSON.stringify(json));
      },

    });
  };

  //加载个人信息
  loadperson();

  const submit = document.getElementById('submit');
  submit.onclick = () => {
    let loadperson = () => {
      $.ajax({
        type: 'post',
        datType: 'json',
        url: 'http://192.168.1.102:8080/YouNi/user/info.do',
        data: {
          s_id: sId,
          userName: username.value,
          academy: academy.value,
          birthday: birthday.value,
          self_introduction: selfIntroduction.value,
          class_code: classCode.value,
        },
        success: function (json) {
          window.location.href = 'userinfo.html';
        },

        error: function (json) {
          alert(JSON.stringify(json));
        },

      });
    };

    loadperson();

  };
};
