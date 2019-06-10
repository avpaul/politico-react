const localStorage = {};
export default {
  setItem: (key, value) => Object.assign(localStorage, { [key]: value }),
  getItem: key => localStorage[key] || undefined,
};
