(function () {
  const head = '<aside class="menu">' +
            '<p class="menu-label">用户管理</p>' +
              '<ul class="menu-list">' +
                '<li><a href="userinfo.html" class="is-active">个人资料</a></li>' +
                '<li><a href="modifypass.html">修改密码</a></li>' +
              '</ul>' +
            '<p class="menu-label">用户功能</p>' +
              '<ul class="menu-list">' +
                '<li><a href="mytopic.html">我的话题</a></li>' +
                '<li><a href="myfavorite.html">我的收藏</a></li>' +
                '<li><a href="attention.html">我的关注</a></li>' +
              '</ul>' +
            '<p class="menu-label">与我有关</p>' +
            '<ul class="menu-list">' +
              '<li><a href="history.html">浏览历史</a></li>' +
              '<li><a href="perletter.html">私信</a></li>' +
              '<li><a href="attention-me.html">关注我的</a></li>' +
            '</ul>' +
        '</aside>';
  document.write(head);
})();
