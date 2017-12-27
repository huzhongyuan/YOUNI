//jscs:disable
(function () {
//jscs:enable
const footerTpl = function () {
  /*

  */
};

const footer = footerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '') +
      '</html>';
document.write(footer);
})();
