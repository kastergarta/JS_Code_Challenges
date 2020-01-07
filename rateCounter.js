function millis() {
  return (new Date()).getTime();
}

function benchmark(n, func, args) {
  var times = [];
  for (var i=0; i<n; i++) {
    var m = millis();
    func.apply(func, args);
    times.push(millis() - m);
  }
  return times;
}
