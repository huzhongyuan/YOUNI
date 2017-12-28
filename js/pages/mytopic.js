//jscs:disable
window.onload = function () {
//jscs:enable
  const sId = sessionStorage.getItem('s_id');
  const topicBox = document.getElementById('topicBox');
  let arr = [];

  //展示个人话题
  let persontopic = new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: '/YouNi/topic',
      data: {
        s_id: sId,
      },
      success: function (json) {
        if (status == 1) {
          for (let i in json.topics) {
            let ms = '<tr>' +
                  '<td>aaa</td>' +
                  '<td>' + json.topics[i].theme  + '</td>' +
                  '<td>' + json.topics[i].publish_time  + '</td>' +
                  '<td><a class="btn btn-primary" class="check" role="button">查看</a></td>' +
                  '<td><a class="btn btn-danger" class="detele" role="button">删除</a></td>' +
                  '</tr>';
            topicBox.appendChild(ms);
            arr.push(json.topics[i].topic_id);
          }
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
        $.ajax({
          type: 'delete',
          datType: 'json',
          url: '/YouNi/topic',
          data: {
            topic_id: arr[i],
          },
          success: function (json) {
            if (status == 1) {
              alert('删除成功');
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
