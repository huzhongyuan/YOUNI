//jscs:disable
window.onload = () => {
//jscs:enable
  const sid = document.getElementById('sid');
  const password = document.getElementById('password');
  const submit = document.getElementById('submit');
  const rg = /^\d{10}/;
  const rgp = /^\w+$/;

  //id验证
  rgid = () => {
    sid.onblur = () => {
      if (sid.value == '') {
        console.log('id为空');
      } else if (rg.test(sid.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };
  };

  //密码验证
  rgpassword = () => {
    password.onblur = () => {
      if (password.value == '') {
        console.log('密码为空');
      } else if (rgp.test(password.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };
  };

  //验证用户信息
  rguser = () => {
    if (rgid() && rgpassword()) {
      $.ajax({
        type: 'get',
        datType: 'json',
        data: {
          sid: sid.value,
          password: password.value,
        },
        url: '/session',
        success: function (json) {
          if (json.status == 1) {
            sessionStorage('sid', sid.value);
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
