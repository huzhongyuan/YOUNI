//jscs:disable
window.onload = function () {
//jscs:enable
  const password = document.getElementById('password');
  const newpassword = document.getElementById('newpassword');
  const renewpassword = document.getElementById('renewpassword');
  const submit = document.getElementById('submit');
  const rgp = /^\w+$/;

  //密码验证
  let rnewpassword =  newpassword.onblur = () => {
      if (newpassword.value == '') {
        console.log('密码为空');
      } else if (rgp.test(newpassword.value)) {
        console.log('正确');
        return true;
      }else {
        console.log('错误');
      }
    };

  //重复密码验证

  let rrenewpassword =  renewpassword.onblur = () => {
      if (renewpassword.value == '') {
        console.log('空');
      } else if (renewpassword.value == renewpassword.value) {
        return true;
      } else {
        console.log('错误');
      }
    };

  //修改密码
  let rguser = () => {
    if (rnewpassword() && rrenewpassword()) {
      const sid = sessionStorage.getItem('sid');
      $.ajax({
        type: 'post',
        datType: 'json',
        data: {
          s_id: sid,
          oldPassword: password.value,
          newPassword: newpassword.value,
        },
        url: 'http://192.168.1.102:8080/YouNi/user/password.do',
        success: function (json) {
          alert('密码修改成功');
          window.location.href = 'userinfo.html';
        },

        error: function (json) {
            alert('网络错误');
          },
      });
    } else {
      alert('提交信息有误！');
    }
  };

  //密码验证
  rnewpassword();

  //重复密码验证
  rrenewpassword();

  //修改密码
  submit.onclick = () => {
    rguser();
  };
};
