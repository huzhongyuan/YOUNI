//jscs:disable
(function () {
//jscs:enable
//'use strict'
let cssArr = document.getElementsByTagName('script');
let { path, cssPath, headTitle, temp, cssName } = '';
for (let i in cssArr) {
  cssName = cssArr[i].getAttribute('data-css');
  headTitle = cssArr[i].getAttribute('data-title');
  if (cssName != null && cssName != undefined) {
    cssPath = '<link rel="stylesheet" href = "./../css/pages/' + cssName + '.css">';
    break;
  };
};

if (headTitle == 'login' || headTitle == 'sign') {
  path = '<link rel="stylesheet" href=" ../css/lib/normalize.css" />' +
  cssPath +
  '<link rel="stylesheet" href="../css/pages/component.css" />';
} else {
  path = '<link rel="stylesheet" href=" ../css/lib/normalize.css" />' +
  cssPath +
  '<link rel="stylesheet" href="../css/lib/bootstrap.css">' +
  '<link rel="stylesheet" href="../bulma/css/bulma.css">';
};

const html = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
'<meta charset="UTF-8">' +
'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
'<meta name="viewport" content="width=device-width, initial-scale=1">' +
'<title>' + headTitle + '</title>' +
path +
'<script src="../js/lib/jquery.js"></script>' +
'<script src="../js/pages/' + cssName + '.js"></script>' +
'<script src="../js/lib/bootstrap.js"></script>' +
'</head>';
const headerTpl = () => {
    /*

    */
  };

//jscs:disable
const header = html + headerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
//jscs:enable
document.write(header);


})();
