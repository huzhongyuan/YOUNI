//jscs:disable
window.onload = () => {
//jscs:enable
  const sid = document.getElementById('sid');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const repassword = document.getElementById('repassword');
  const submit = document.getElementById('submit');
  const rg = /^\d{10}/;
  const rgu = /^[\u4e00-\u9fa5]+$/;
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

  //用户名验证
  rgusername = () => {
    username.onblur = () => {
      if (username.value == '') {
        console.log('用户名为空');
      } else if (rgu.test(username.value)) {
        console.log('正确');
        return true;
      }else {
        alert('cuowu');
        console.log('错误');
      }
    };
  };

  //密码验证
  rgpassword = () => {
    password.onblur = () => {
      if (password.value == '') {
        console.log('密码为空');
      } else if (rg.test(password.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };
  };

  //重复密码验证
  rgrepassword = () => {
    repassword.onblur = () => {
      if (repassword.value == '') {
        console.log('空');
      } else if (repassword.value == password.value) {
        return true;
      } else {
        console.log('错误');
      }
    };
  };

  //验证用户信息
  rguser = () => {
    if (rgid() && rgusername() && rgpassword() && rgrepassword()) {
      $.ajax({
        type: 'post',
        datType: 'json',
        data: {
          s_id: sid.value,
          userName: username.value,
          password: password.value,
        },
        url: '/user',
        success: function (json) {
          if (json.status == 1) {
            sessionStorage('s_id', sid.value);
            window.location.href = 'index.html';
          }else {
            alert('信息有误！');
            window.location.href = 'sign.html';
          }
        },

        error: function (json) {
            alert('网络错误');
            window.location.href = 'sign.html';
          },
      });
    } else {
      alert('提交信息有误！');
    }
  };

  //id验证
  rgid();

  //用户名验证
  rgusername();

  //密码验证
  rgpassword();

  //重复密码验证
  rgrepassword();

  //验证用户信息
  submit.onclick = () => {
    rguser();
  };
};
