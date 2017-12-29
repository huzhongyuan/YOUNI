// //jscs:disable
// window.onload = function () {
// //jscs:enable
//   let topicId = sessionStorage.getItem('topicId');
//   let sId = sessionStorage.getItem('sid');
//   let title = document.getElementsByClassName('title')[0];
//   let con = document.getElementsByClassName('con')[0];
//   let name = document.getElementsByClassName('name')[0];
//   let time = document.getElementsByClassName('time')[0];
//   let num = document.getElementsByClassName('num')[0];
//   let view = document.getElementsByClassName('view')[0];
//   let mediaContent = document.getElementById('mediaContent');
//   let replycontent = document.getElementById('replycontent');
//   let reply = document.getElementById('reply');
//
//   //增加点击量
//   let addclick = () => {
//     $.ajax({
//       type: 'patch',
//       datType: 'json',
//       url: 'http://192.168.1.102:8080/YouNi/topic/click_amount.do',
//       data: {
//         topic_id: topicId,
//       },
//       success: function (json) {
//         if (json.status == 1) {
//           console.log('success');
//         }else {
//           alert('网络错误');
//         }
//       },
//
//       error: function (json) {
//         alert(JSON.stringify(json));
//       },
//     });
//   };
//
//   //增加点击量
//   addclick();
//
//   //加载话题
//   let topicajax = () => {
//     $.ajax({
//       type: 'get',
//       datType: 'json',
//       url: 'http://192.168.1.102:8080/YouNi/topic/one/' + topicId + '.do',
//       success: function (json) {
//         if (json.status == 1) {
//           alert(1);
//           title.innerHTML = json.theme;
//           con.innerHTML = json.description;
//           name.innerHTML = json.username;
//           time.innerHTML = json.publich_time;
//           num.innerHTML = json.click_amount;
//           view.innerHTML = json.click_amount;
//         }else {
//           alert('网络错误');
//         }
//       },
//
//       error: function (json) {
//         alert(JSON.stringify(json));
//       },
//     });
//   };
//
//   //加载话题
//   topicajax();
//
//   //加载评论
//   let commentajax = () => {
//     $.ajax({
//       type: 'get',
//       datType: 'json',
//       url: '/YouNi/topicreply/',
//       data: {
//         topic_id: topicId,
//       },
//       success: function (json) {
//         if (json.status == 1) {
//           console.log('success');
//           for (let i in json.topics) {
//             let ms = document.createElement(media);
//             ms.className = 'media';
//             ms.innerHTML = '<figure class="media-left">' +
//               '<p class="image is-48x48">' +
//                 '<img src="https://bulma.io/images/placeholders/96x96.png">' +
//               '</p>' +
//             '</figure>' +
//             '<div class="media-content">' +
//               '<div class="content">' +
//                 '<p>' +
//                 '<span class="rcon">' +  json.topics[i].content_id + '</span>' +
//                 '<br>' +
//                   '<small><span class="rname" style="font-size:14px;">' + json.topics[i].username + '</span>·<span class="rtime">' + json.topics[i].reply_date + '</span></small>' +
//                 '</p>' +
//               '</div>' +
//             '</div>';
//             mediaContent.appendChild(ms);
//           }
//         }else {
//           alert('网络错误');
//         }
//       },
//
//       error: function (json) {
//         alert(JSON.stringify(json));
//       },
//     });
//   };
//
//   //加载评论
//   commentajax();
//
//   //回复话题
//   let replytopic = () => {
//     reply.onclick = () => {
//       if (replycontent != '') {
//         $.ajax({
//           type: 'post',
//           datType: 'json',
//           url: '/YouNi/topicreply',
//           data: {
//             s_id: sId,
//             topic_id: topicId,
//             content: replycontent.value,
//           },
//           success: function (json) {
//             if (json.status == 1) {
//               window.location.href = 'communityInfo.html';
//             }else {
//               alert('网络错误');
//             }
//           },
//
//           error: function (json) {
//             alert(JSON.stringify(json));
//           },
//         });
//       };
//     };
//   };
//
//   //回复话题
//   replytopic();
//
//
//
// };
