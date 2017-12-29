//jscs:disable
window.onload = function () {
//jscs:enable

  let arr = [];
  const lostbox = document.getElementById('lostbox');
  let sId = sessionStorage.getItem('sId');

  //展示组织发布的所有信息
  let showall = new Promise((resolve, reject) => {
    //content.innerHTML = '';
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.1.103:8080/activities.do',
      data: {
        page: '1',
      },
      success: function (json) {
        if (json.status == 1) {
          for (let i = 0; i < 4; i++) {
            let ms = document.createElement('div');
            ms.className = 'info';
            ms.innerHTML = '<article class="message is-dark">' +
                    '<div class="message-header">' +
                      '<p>' + json.data[i].userName + '</p>' +
                    '</div>' +
                    '<div class="message-body">' +
                      '<h1><a class="organizationcontent">' + json.data[i].description + '</a></h1>' +
                      '<h3>' + json.data[i].startTime + '</h3>' +
                  '</div>' +
                 '</article>';
            lostbox.appendChild(ms);
            arr.push(json.data[i].activityId);
          }
          resolve('lala');
        }else {
          alert('网络错误');
        }
      },

      error: function (json) {
        alert(JSON.stringify(json));
      },
    });
  });

  //查看信息详情
  showall.then((successMessage) => {
    let organizationcontent = document.getElementsByClassName('organizationcontent');
    console.log(successMessage);
    for (let i in organizationcontent) {
      organizationcontent[i].onclick = () => {
        sessionStorage.setItem('activityId', arr[i]);
        window.location.href = 'organizationinfo.html';
      };
    }
  });
};
