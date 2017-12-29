//jscs:disable
window.onload = function () {
//jscs:enbale
//展示招领信息
let mypublish = new Promise((resolve, reject) => {
  $.ajax({
    type: 'get',
    datType: 'json',
    url: '/YouNi/losts',
    data: {
      sId: '1',
    },
    success: function (json) {
      if (status == 1) {
        for (let i in json.data) {
          let ms = document.createElement('tr');
          ms.className = 'lostinfo';
          ms.innerHTML = '<tr>' +
                            '<td><a>' + json.data[i].theme + '</a></td>' +
                            '<td>' + json.data[i].startTime + '</td>' +
                            '<td>' + json.data[i].startTime + '</td>' +
                            '<td><a class="btn btn-primary" class="modifypublish" role="button">修改</a></td>' +
                            '<td><a class="btn btn-danger" class="del" role="button">删除</a></td>' +
                          '</tr>';
          lostbox.appendChild(ms);
          arr.push(json.data[i].activitiyId);
        }
      }else {
        alert('网络错误');
      }
    },

    error: function (json) {
      alert(JSON.stringify(json));
    },
  });
});

//查看失物招领详情
mypublish.then((successMessage) => {
  let modifypublish = document.getElementsByClassName('modifypublish');
  let del = document.getElementsByClassName('del');
  console.log(successMessage);
  for (let i in lostbtn) {
    modifypublish[i].onclick = () => {
      sessionStorage.setItem('activitiyId', arr[i]);
      window.location.href = 'modifypublish.html';
    };
    del[i].onclick = () => {
      $.ajax({
        type: 'DELETE',
        datType: 'json',
        url: '/YouNi/activities',
        data: {
          activitiyId: arr[i],
        },
        success: function (json) {
          if (json.status == 1) {
            alert('删除成功');
          }
        },

        error: function (json) {
          alert(JSON.stringify(json));
        },
      });
    }
  }
});
};
