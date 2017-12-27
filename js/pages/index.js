//jscs:disable
window.onload = function () {
//jscs:enable
  const hotTopic = document.getElementById('hotTopic');
  const newOrg = document.getElementById('newOrg');
  hotTopic.innerHTML = '';
  newOrg.innerHTML = '';
  let top = [];
  let org = [];

  //加载热点话题
  let topipajax = new Promise((resolve, reject) => {
      $.ajax({
        type: 'get',
        datType: 'json',
        url: '/YouNi/topic/hotTopic',
        success: function (json) {
          if (status == 1) {
            for (let i in json.topics) {
              let ms = document.createElement('li');
              ms.className = 'hot';
              ms.innerHTML = '<li>' + json.topics[i].theme + '</li>';
              hotTopic.appendChild(ms);
              top.push(topic_id);
            };

            resolve('Success!');
          }else {
            alert('网络错误');
          }
        },

      });
    });

  topipajax.then((successMessage) => {
    console.log(successMessage);
    const hot = document.getElementsByClassName('hot');
    for (let i in hot) {
      hot[i].onclick = () => {
        sessionStorage.setItem('topicId', top[i]);
        window.location.href = 'communityInfo.html';
      };
    }
  });


  let orgajax = new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: '/YouNi/activities/recent',
      success: function (json) {
        if (status == 1) {
          for (let i in json.data) {
            let ms = document.createElement('li');
            ms.className = 'hotorg';
            ms.innerHTML = '<li>' + json.data[i].theme + '</li>';
            newOrg.appendChild(ms);
            org.push(json.data[i].activitiyId);
          };

          resolve('Success!');
        }else {
          alert('网络错误');
        }
      },

    });
  });
  orgajax.then((successMessage) => {
    console.log(successMessage);
    const hotorg = documen.getElementsByClassName('hotorg');
    for (let i in hotorg) {
      hotorg[i].onclick = () => {
        sessionStorage.setItem('topicId', org[i]);
        window.location.href = 'organizationcontent.html';
      };
    }
  });

  // for (let i =0; i<10; i++) {
  //   let ms = document.createElement('li');
  //   ms.innerHTML = '<li>' + '11' + '</li>';
  //   hotTopic.appendChild(ms);
  //   ms.onclick =function() {
  //     alert(i);
  //   }
  // }
};
