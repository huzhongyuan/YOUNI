//jscs:disable
window.onload = function () {
//jscs:enable

  let arr = [];
  const lostbox = document.getElementById('lostbox');

  //展示招领信息
  let lostallajax = new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      datType: 'json',
      url: 'http://192.168.43.115:8080/losts.do',
      data: {
        page: '1',
      },
      success: function (json) {
        if (json.status == 1) {
          for (let i in json.data) {
            let ms = document.createElement('tr');
            ms.className = 'lostinfo';
            ms.innerHTML = '<tr>' +
                '<figure class="image is-64x64">' +
                  '<img src= "' + json.data[i].img + '" alt="Image">' +
                '</figure>' +
                '<td>' + json.data[i].resName + '</td>' +
                '<td>' + json.data[i].category + '</td>' +
                '<td>' + json.data[i].time + '</td>' +
                '<td><a class="btn btn-primary lostbtn" role="button">查看</a></td>' +
              '</tr>';
            lostbox.appendChild(ms);
            arr.push(json.data[i].lostId);
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

  //查看失物招领详情
  lostallajax.then((successMessage) => {
    let lostbtn = document.getElementsByClassName('lostbtn');
    console.log(successMessage);
    for (let i in lostbtn) {
      lostbtn[i].onclick = () => {
        sessionStorage.setItem('lostId', arr[i]);
        window.location.href = 'lostcontent.html';
      };
    }
  });
};
