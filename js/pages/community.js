// //jscs:disable
// window.onload = function () {
// //jscs:enable
//   let addTopicTitle = document.getElementById('addTopicTitle');
//   let addTopicContent = document.getElementById('addTopicContent');
//   let publish = document.getElementById('publish');
//   let topic = [];
//   alert(1);
// 
//   //点击发表话题
//   publish.onclick = () => {
//     alert(1);
//     if (addTopicTitle.value != '' && addTopicContent.value != '') {
//       alert(addTopicTitle.value);
//       alert(addTopicContent.value);
//       let sid = sessionStorage.getItem('sid');
//       $.ajax({
//         type: 'post',
//         datType: 'json',
//         url: 'http://192.168.1.102:8080/YouNi/topic.do',
//         data: {
//           s_id: sid,
//           theme: addTopicTitle.value,
//           description: addTopicContent.value,
//         },
//         success: function (json) {
//           if (json.status == 1) {
//             alert('发帖成功');
//           }else {
//             alert('网络错误');
//           }
//         },
//
//         error: function (json) {
//           alert(JSON.stringify(json));
//         },
//       });
//     }
//   };
//
//   //加载话题
//   let getallTopic = new Promise((resolve, reject) => {
//     $.ajax({
//       type: 'get',
//       datType: 'json',
//       url: 'http://192.168.1.102:8080/YouNi/topic.do',
//       success: function (json) {
//         if (json.status == 1) {
//           for (let i in json.topics) {
//             let ms = document.createElement('article');
//             ms.className = 'media';
//             ms.innerHTML = '<figure class="media-left">' +
//             '<p class="image is-64x64">' +
//               '<img src="https://bulma.io/images/placeholders/128x128.png">' +
//             '</p>' +
//             '</figure>' +
//             '<div class="media-content">' +
//             '<div class="content">' +
//               '<p>' +
//                 '<span class="title" style="font-size:20px;">' + json.topics[i].theme + '</span>' +
//                 '<br>' +
//                 '<span class="con">' + json.topics[i].description + '</span>' +
//                 '<br>' +
//                 '<span class="name" style="font-size:14px;float:right;margin-right:80px;">' + '--' + json.topics[i].name + '</span>' +
//                 '<br>' +
//                 '<small style="float:right;margin-right:80px;"><span class="praise" style="cursor:pointer;">👍</span><span class="num"> ' + json.topics[i].praise_amount + ' </span> · <span class="reply"  style="cursor:pointer;">回复</span> · 3 hrs</small>' +
//                 '<br>' +
//                 '<small style="float:right;margin-right:80px;font-size:12px;color:#cccccc;"><span class="view" style="color:#cccccc;">' + json.topics[i].click_amount + '</span></small>' +
//               '</p>' +
//             '</div>' +
//             '</div>';
//             topic.push(json.topics[i].topic_id);
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
//     });
//   });
//
//   //加载话题之后的操作
//   getallTopic.then((successMessage) => {
//     console.log(successMessage);
//
//     //点赞
//     (function () {
//       let praise = document.getElementsByClassName('praise');
//       let num = document.getElementsByClassName('num');
//       let title = document.getElementsByClassName('title');
//       let con = document.getElementsByClassName('con');
//       let reply = document.getElementsByClassName('reply');
//       for (let i in praise) {
//         praise[i].onclick = () => {
//           $.ajax({
//             type: 'post',
//             datType: 'json',
//             url: '/YouNi/praise',
//             data: {
//               topic_id: topic[i],
//             },
//             success: function (json) {
//               if (json.status == 1) {
//                 num[i].innerHTML = json.praise_amount;
//               }else {
//                 alert('网络错误');
//               }
//             },
//
//             error: function (json) {
//               alert(JSON.stringify(json));
//             },
//           });
//         };
//
//         //点击跳转到话题详情
//         title[i].onclick = () => {
//           sessionStorage.setItem('topicId', topic[i]);
//           window.location.href = 'communityInfo.html';
//         };
//
//         con[i].onclick = () => {
//           sessionStorage.setItem('topicId', topic[i]);
//           window.location.href = 'communityInfo.html';
//         };
//
//         reply[i].onclick = () => {
//           sessionStorage.setItem('topicId', topic[i]);
//           window.location.href = 'communityInfo.html';
//         };
//       }
//     })();
//
//   });
//
// };
