function generateColor() {
  let hexCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomCode = Math.round(Math.random() * 15);
    let code = hexCodes[randomCode];
    color += code;

    let container = (document.querySelector(
      "#container"
    ).style.backgroundColor = color);

    let output = (document.querySelector("#output").innerHTML = color);
  }
}

// Copy Function

let copyBtn = document.querySelector("#copyBtn");
copyBtn.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    window.getSelection().removeRange(range);
    alert("Color code copied to clipboard: " + output.textContent);
  } catch (error) {
    alert("Copying failed: ", error);
  }
});
