//jscs:disable
window.onload = function () {
//jscs:enable
  sessionStorage.setItem('sid', '111');
  let sId =  sessionStorage.getItem('sid');
  let arr = [];
  //加载我的发布信息
  let loadall = new Promise((resolve, reject) => {
    let box = document.getElementById('box');
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.1.103:8080/activities/s-id.do',
      data: {
        sId: sId,
      },
      success: function (json) {
        if (json.status == 1) {
          for (let i in json.data) {
            let ms = document.createElement('tr');
            ms.innerHTML =  '<tr>' +
                              '<td><a href="organizationinfo.html">' + json.data[i].theme + '</a></td>' +
                              '<td>' + json.data[i].startTime + '</td>' +
                              '<td>' + json.data[i].endTime + '</td>' +
                              '<td><a class="btn btn-primary change" role="button">修改</a></td>' +
                              '<td><a class="btn btn-danger del" role="button">删除</a></td>' +
                            '</tr>';
            box.appendChild(ms);
            arr.push(json.data[i].activityId);
          };
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

  //修改
  loadall.then((successMessage) => {
    let change = document.getElementsByClassName('change');
    let del =document.getElementsByClassName('del');
    console.log(successMessage);
    for (let i in change) {
      change[i].onclick = () => {
        sessionStorage.setItem('activityId', arr[i]);
        window.location.href = 'modifypublish.html';
      };
    }

    for (let i in del) {
      del[i].onclick = () => {
        $.ajax({
          type: 'get',
          datType: 'json',
          url: 'http://192.168.1.103:8080/activities/delete/' + arr[i] + '.do',
          success: function (json) {
            alert('删除成功');
            window.location.href = 'mypublished.html';
          },

          error: function (json) {
            alert(JSON.stringify(json));
          },
        });
      };
    }
  });

};
