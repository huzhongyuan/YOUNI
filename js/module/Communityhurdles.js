//jscs:disable
window.onload = function () {
//jscs:enable

  //社区话题搜索栏
  let Search = () => {
    const topicBox = document.getElementById('topicBox');
    let arr = [];

    //加载热点话题
    let hotTopic = new Promise((resolve, reject) => {
      $.ajax({
        type: 'get',
        datType: 'json',
        url: 'http://192.168.1.106:8080/YouNi/topic/hotTopic.do',
        success: function (json) {
          if (json.status == 1) {
            for (let i in json.object) {
              let ms = document.createElement('div');
              ms.className = 'hotTitle';
              ms.innerHTML = '<a class="panel-block is-active " style="border-left-color:#dbdbdb;">' +
              '<span class="panel-icon">' +
                '<i class="fa fa-book"></i>' +
              '</span>' +
              json.object[i].theme +
            '</a>';
              arr.push(json.object[i].topic_id);
              topicBox.appendChild(ms);
            };

            resolve('Success!');
          }else {
            alert('网络错误');
          }
        },

        error: function (json) {
          alert(JSON.stringify(json));
        },
      });

    });
    hotTopic.then((successMessage) => {
      console.log(successMessage);
      let hotTitle = document.getElementsByClassName('hotTitle');
      for (let i in hotTitle) {
        hotTitle[i].onclick = () => {
          sessionStorage.setItem('topicId', arr[i]);
          window.location.herf = 'communityInfo.html';
        };
      }
    });

  };

  //社区话题搜索栏
  Search();
};
