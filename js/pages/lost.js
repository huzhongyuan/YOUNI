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
      url: '/YouNi/losts',
      success: function (json) {
        if (status == 1) {
          for (let i in json.data) {
            let ms = document.createElement('tr');
            ms.className = 'lostinfo';
            ms.innerHTML = '<tr>' +
                '<td>' + json.data[i].resName + '</td>' +
                '<td>' + json.data[i].category + '</td>' +
                 '<td>' + json.data[i].address + '</td>' +
                '<td>' + json.data[i].time + '</td>' +
                '<td><a class="btn btn-primary lostbtn" href="lostcontent.html" role="button">查看</a></td>' +
              '</tr>';
            lostbox.appendChild(ms);
            arr.push(json.data[i].lostId);
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