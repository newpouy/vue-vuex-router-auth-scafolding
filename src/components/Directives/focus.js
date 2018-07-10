export default {
  // since HTML autofocus doesn't work on Safari mobile, uses this focus directive exclusively
  inserted(el) {
    el.focus();
  },
};
