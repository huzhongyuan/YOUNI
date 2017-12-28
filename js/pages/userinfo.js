//jscs:disable
window.onload = function () {
//jscs:enable

  //点击修改
  const change = document.getElementById('change');
  change.onclick = () => {
    window.location.href = 'modifyuserinfo.html';
  };

  //加载个人信息
  let loadperson = () => {
    const sId = sessionStorage.getItem('sid');
    const Id = document.getElementById('Id');
    const sex = document.getElementById('sex');
    const birthday = document.getElementById('birthday');
    const academy = document.getElementById('academy');
    const classCode = document.getElementById('class_code');
    const selfIntroduction = document.getElementById('selfIntroduction');
    const username = document.getElementById('username');
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.1.106:8080/YouNi/user.do',
      data: {
        s_id: sId,
      },
      success: function (json) {
        Id.innerHTML = json.object.s_id;
        username.innerHTML = json.object.userName;
        sex.innerHTML = json.object.sex;
        birthday.innerHTML = json.object.birthday;
        academy.innerHTML = json.object.academy;
        classCode.innerHTML = json.object.class_code;
        selfIntroduction.innerHTML = json.object.self_introduction;
      },

      error: function (json) {
        alert(JSON.stringify(json));
      },

    });
  };

  //加载个人信息
  loadperson();
};
