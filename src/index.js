module.exports = function check(str, bracketsConfig) {
  let arr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arr.push(bracketsConfig[i].join(''))
    };
    for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            str = str.replace(arr[i], '');
            i = -1;
        }
    };
    if (str) {
        return false
    } else {
        return true
    }
}
