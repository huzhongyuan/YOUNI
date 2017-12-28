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
  let rgid = sid.onblur = () => {
      if (sid.value == '') {
        console.log('id为空');
      } else if (rg.test(sid.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };

  //用户名验证
  let rgusername = username.onblur = () => {
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

  //密码验证
  let rgpassword = password.onblur = () => {
      if (password.value == '') {
        console.log('密码为空');
      } else if (rgp.test(password.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };

  //重复密码验证
  let rgrepassword = repassword.onblur = () => {
      if (repassword.value == '') {
        console.log('空');
      } else if (repassword.value == password.value) {
        return true;
      } else {
        console.log('错误');
        alert('两次输入密码不一样');
      }
    };

  //验证用户信息
  let rguser = () => {
    if (rgid() && rgusername() && rgpassword() && rgrepassword()) {
      $.ajax({
        type: 'post',
        datType: 'json',
        data: {
          s_id: sid.value,
          userName: username.value,
          password: password.value,
        },
        url: 'http://192.168.1.106:8080/YouNi/user.do',
        success: function (json) {
          if (json.status == 1) {
            sessionStorage.setItem('s_id', sid.value);
            window.location.href = 'index.html';
          }else {
            alert('网络异常,注册失败');
            // window.location.href = 'sign.html';
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
