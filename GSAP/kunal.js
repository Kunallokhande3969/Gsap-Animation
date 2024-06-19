var kunal = (function () {
  var ll = 14;
  return {
    getter: function () {
      console.log(ll);
    },
    setter: function (val) {
      kunal = val;
    },
  };
})();
