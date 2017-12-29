(function () {
  const head = '<nav class="nav">' +
          '<div class="logo"><a href="index.html">邮你</a></div>' +
          '<ul id="nav">' +
            '<li><a href="index.html" class=“active”>首页</a></li>' +
            '<li><a href="community.html">社区</a></li>' +
            '<li><a href="organization.html">组织</a></li>' +
            '<li><a href="lost.html">招领</a></li>' +
          '</ul>' +
        '</nav>';
  document.write(head);
  let nav = document.getElementById('nav');
  if (sessionStorage.getItem('sid')) {
    let ms = document.createElement('li');
    ms.innerHTML = '<a href="userinfo.html">个人中心</a>';
    nav.appendChild(ms);
  }else {
    let ms = document.createElement('li');
    ms.innerHTML = '<a href="sign.html">注册</a>';
    nav.appendChild(ms);
    let me = document.createElement('li');
    me.innerHTML = '<a href="login.html">登录</a>';
    nav.appendChild(me);
  }
})();
