//jscs:disable
window.onload = function () {
//jscs:enable
  // sessionStorage.setItem('activityId', '1');
  let activityId = sessionStorage.getItem('activityId');
  let theme = document.getElementById('theme');
  let description = document.getElementById('description');
  $.ajax({
    type: 'get',
    datType: 'json',
    url: 'http://192.168.1.103:8080/activities/' + activityId + '.do',
    success: function (json) {
      theme.innerHTML = json.data.theme;
      description.innerHTML = json.data.description;
    },

    error: function (json) {
      alert(JSON.stringify(json));
    },
  });
};
