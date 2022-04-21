// Code your solution here
function findMatching(name, str) {
  return name.filter(function (el) {
    return el.toLowerCase().indexOf(str.toLowerCase()) !== -1;
  });
}

function fuzzyMatch(name, str) {
  return name.filter(function (el) {
    return el.startsWith(str);
  });
}

function matchName(array, string) {
  return array.filter((o) =>
    Object.keys(o).some((k) =>
      String(o[k]).toLowerCase().includes(string.toLowerCase())
    )
  );
}
