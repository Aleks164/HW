const divP = document.querySelector("#divP");
const inputEl = document.querySelector("input");
const hide = document.querySelector("#hide");

function addEl() {
  const newP = document.createElement("p");
  const pText = inputEl.value;
  newP.className = "pEl";
  newP.innerText = pText;
  divP.prepend(newP);
  inputEl.value = "";
}

inputEl.addEventListener("input", () => {
  hide.style.visibility = "visible";
  const inputvalue = inputEl.value;
  if (inputvalue === "") {
    hide.style.visibility = "hidden";
  }
});

hide.addEventListener("click", (ev) => {
  ev.preventDefault();
  hide.style.visibility = "hidden";
  const pElList = divP.getElementsByClassName("pEl");
  const el = [...pElList];
  if (pElList.length < 5) {
    addEl();
  } else {
    divP.innerHTML = "";
    el.pop();
    for (let i = 0; i < el.length; i++) {
      divP.innerHTML += `<p class = "pEl">${el[i].innerHTML}</p>`;
    }
    addEl();
  }
});
