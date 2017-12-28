//jscs:disable
window.onload = () => {
//jscs:enable
  const sid = document.getElementById('sid');
  const password = document.getElementById('password');
  const submit = document.getElementById('submit');
  const rg = /^\d{10}/;
  const rgp = /^\w+$/;

  //id验证
  let rgid =  sid.onblur = () => {
      if (sid.value == '') {
        console.log('id为空');
        return false;
      } else if (rg.test(sid.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
        return false;
      }
    };

  //密码验证
  let rgpassword =  password.onblur = () => {
      if (password.value == '') {
        console.log('密码为空');
        return false;
      } else if (rgp.test(password.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
        return false;
      }
    };

  //验证用户信息
  rguser = () => {
    if (rgid() && rgpassword()) {
      $.ajax({
        type: 'post',
        datType: 'json',
        data: {
          s_id: sid.value,
          password: password.value,
        },
        url: 'http://192.168.1.106:8080/YouNi/session.do',
        success: function (json) {
          if (json.status == 1) {
            sessionStorage.setItem('sid', sid.value);
            window.location.href = 'index.html';
          }else {
            alert('信息有误！');
            window.location.href = 'login.html';
          }
        },

        error: function (json) {
            alert('网络错误');
            window.location.href = 'login.html';
          },
      });
    } else {
      alert('提交信息有误！');
    }
  };

  //id验证
  rgid();

  //密码验证
  rgpassword();

  //验证用户信息
  submit.onclick = () => {
    rguser();
  };
};
