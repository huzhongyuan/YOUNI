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
  // let topipajax = new Promise((resolve, reject) => {
  //     $.ajax({
  //       type: 'get',
  //       datType: 'json',
  //       url: 'http://192.168.1.106:8080/YouNi/topic/hotTopic.do',
  //       success: function (json) {
  //         if (json.status == 1) {
  //           for (let i in json.object) {
  //             let ms = document.createElement('li');
  //             ms.className = 'hot';
  //             ms.innerHTML = '<li style="cursor:pointer">' + json.object[i].theme + '</li>';
  //             hotTopic.appendChild(ms);
  //             top.push(json.object[i].topic_id);
  //           };
  //
  //           resolve('Success!');
  //         }else {
  //           alert('网络错误');
  //         }
  //       },
  //
  //       error: function (json) {
  //         alert(JSON.stringify(json));
  //       },
  //
  //     });
  //   });
  //
  // topipajax.then((successMessage) => {
  //   console.log(successMessage);
  //   const hot = document.getElementsByClassName('hot');
  //   for (let i in hot) {
  //     hot[i].onclick = () => {
  //       sessionStorage.setItem('topicId', top[i]);
  //       window.location.href = 'communityInfo.html';
  //     };
  //   }
  // });

  //加载组织信息
  let orgajax = new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.43.115:8080/activities/recent.do',
      success: function (json) {
        if (json.status == 1) {
          for (let i in json.data) {
            let ms = document.createElement('li');
            ms.className = 'hotorg';
            ms.style.cursor = 'pointer';
            ms.innerHTML = '<li>' + json.data[i].theme + '</li>';
            newOrg.appendChild(ms);
            org.push(json.data[i].activityId);
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
  orgajax.then((successMessage) => {
    console.log(successMessage);
    const hotorg = document.getElementsByClassName('hotorg');
    for (let i in hotorg) {
      hotorg[i].onclick = () => {
        sessionStorage.setItem('activityId', org[i]);
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
