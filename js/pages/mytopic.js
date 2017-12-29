//jscs:disable
window.onload = function () {
//jscs:enable
  const sid = sessionStorage.getItem('sid');
  const topicBox = document.getElementById('topicBox');
  let arr = [];

  //展示个人话题
  let persontopic = new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.1.102:8080/YouNi/topic/' + sid + '.do',
      success: function (json) {
        if (json.status == 1) {
          for (let i = 0; i < json.object.length; i++) {
            let ms = document.createElement('tr');
            ms.innerHTML = '<td>' + (i + 1) + '</td>' +
                  '<td>' + json.object[i].theme  + '</td>' +
                  '<td>' + json.object[i].publish_time  + '</td>' +
                  '<td><a class="btn btn-primary check" role="button">查看</a></td>' +
                  '<td><a class="btn btn-danger detele" role="button">删除</a></td>';
            topicBox.appendChild(ms);
            arr.push(json.object[i].topic_id);
          };

          resolve(arr);
        } else {
          alert('error');
        }
      },

      error: function (json) {
        alert(JSON.stringify(json));
      },

    });
  });

  persontopic.then((successMessage) => {
    console.log(successMessage);

    //查看我的话题
    let check = document.getElementsByClassName('check');
    let detele = document.getElementsByClassName('detele');
    for (let i in check) {
      check[i].onclick = () => {
        sessionStorage.setItem('topic_id', arr[i]);
        window.location.href = 'communityInfo.html';
      };
    }

    //删除话题
    for (let i in detele) {
      detele[i].onclick = () => {
        alert(arr[i]);
        $.ajax({
          type: 'post',
          datType: 'json',
          url: 'http://192.168.1.102:8080/YouNi/topic/delete/' + arr[i] + '.do',
          success: function (json) {
            if (json.status == 1) {
              alert('删除成功');
              window.location.href = 'mytopic.html';
            } else {
              alert('error');
            }
          },

          error: function (json) {
            alert(JSON.stringify(json));
          },

        });
      };
    }
  });

};
