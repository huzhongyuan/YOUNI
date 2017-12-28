//jscs:disable
window.onload = function () {
//jscs:enable
  const password = document.getElementById('password');
  const newpassword = document.getElementById('newpassword');
  const renewpassword = document.getElementById('renewpassword');
  const submit = document.getElementById('submit');
  const rgp = /^\w+$/;

  //密码验证
  let rnewpassword = () => {
    newpassword.onblur = () => {
      if (newpassword.value == '') {
        console.log('密码为空');
      } else if (rgp.test(newpassword.value)) {
        console.log('正确');
        alert(1);
        return true;
      }else {
        console.log('错误');
      }
    };
  };

  //重复密码验证
  let rrenewpassword = () => {
    renewpassword.onblur = () => {
      if (renewpassword.value == '') {
        console.log('空');
      } else if (renewpassword.value == renewpassword.value) {
        return true;
      } else {
        console.log('错误');
      }
    };
  };

  //修改密码
  let rguser = () => {
    if (rnewpassword() && rrenewpassword()) {
      const sId = sessionStorage.getItem('s_id');
      $.ajax({
        type: 'post',
        datType: 'json',
        data: {
          s_id: sId,
          password: password.value,
          newpassword: newpassword.value,
        },
        url: '/user',
        success: function (json) {
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
