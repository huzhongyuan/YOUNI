//jscs:disable
window.onload  = function () {
//jscs:enable
  let lostId = sessionStorage.getItem('lostId');
  const img = document.getElementById('img');
  const content = document.getElementById('content');
  $.ajax({
    type: 'GET',
    datType: 'json',
    url: 'http://192.168.43.115:8080/losts/' + lostId + '.do',
    success: function (json) {
      img.src = json.data.img;
      content.innerHTML = json.data.address;
    },

    error: function (json) {
      alert(JSON.stringify(json));
    },
  });
};
