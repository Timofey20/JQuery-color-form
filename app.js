let red = 0;
let green = 0;
let blue = 0;
let style_change = color.id;
let place = "#text";
let change_name = color.innerHTML;

$("#color").on("click", function (event) {
  $("#color").addClass("active");
  $("#backgroundColor").removeClass("active");
  style_change = color.id;
  change_name = color.innerHTML;
  place = "#text";
});
$("#backgroundColor").on("click", function (event) {
  $("#backgroundColor").addClass("active");
  $("#color").removeClass("active");
  style_change = backgroundColor.id;
  change_name = backgroundColor.innerHTML;
  place = "#textarea";
});

$("#polzunok_red").slider({
  animate: "fast",
  max: 255,
  value: 0,
  slide: function (event, ui) {
    let b = document.querySelector(place).style[style_change];
    if (b.includes("rgb")) {
      let arr = b.split(",");
      let item = arr[2].split("");
      item.splice(-1, 1);
      green = arr[1];
      blue = item.join("");
    }
    $(place).css(change_name, `rgb(${ui.value},${green},${blue})`);
  },
});
$("#polzunok_green").slider({
  animate: "fast",
  max: 255,
  value: 0,
  slide: function (event, ui) {
    let b = document.querySelector(place).style[style_change];

    if (b.includes("rgb")) {
      let arr = b.split(",");
      let item1 = arr[0].split("");
      let item2 = arr[2].split("");
      item1.splice(0, 4);
      item2.splice(-1, 1);
      red = item1.join("");
      blue = item2.join("");
    }
    $(place).css(change_name, `rgb(${red},${ui.value},${blue})`);
  },
});
$("#polzunok_blue").slider({
  animate: "fast",
  max: 255,
  value: 0,
  slide: function (event, ui) {
    let b = document.querySelector(place).style[style_change];

    if (b.includes("rgb")) {
      let arr = b.split(",");
      let item1 = arr[0].split("");
      item1.splice(0, 4);
      red = item1.join("");
      green = arr[1];
    }
    $(place).css(change_name, `rgb(${red},${green},${ui.value})`);
  },
});
