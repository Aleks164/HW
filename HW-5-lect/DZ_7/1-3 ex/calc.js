let divP;
let input;
let hide;
function addEl() {
  divP = document.querySelector("#divP");
  input = document.querySelector("input");
  const newP = document.createElement("p");
  const pText = input.value;
  newP.className = "pEl";
  newP.textContent = pText;
  divP.prepend(newP);
  input.value = "";
}

function createDom(el) {
  el.innerHTML = `
  <div id="divP">
  <p class="pEl">123</p>
  <p class="pEl">123</p>
  <p class="pEl">23</p>
  </div>
    <form>
      <input id="userInput" placeholder="Type here" required autofocus />
      <button id="hide" style="visibility: hidden">Push me</button>
    </form>
  `;

  input = document.querySelector("input");
  hide = document.querySelector("#hide");

  input.addEventListener("input", () => {
    hide = document.querySelector("#hide");
    hide.style.visibility = "visible";
    const inputvalue = input.value;
    if (inputvalue === "") {
      hide.style.visibility = "hidden";
    }
  });

  hide.addEventListener("click", (ev) => {
    ev.preventDefault();
    hide.style.visibility = "hidden";
    divP = document.querySelector("#divP");
    const pElList = divP.getElementsByClassName("pEl");
    const pArr = [...pElList];
    if (pElList.length < 5) {
      addEl();
    } else {
      divP.innerHTML = "";
      pArr.pop();
      for (let i = 0; i < pArr.length; i++) {
        divP.innerHTML += `<p class = "pEl">${pArr[i].innerHTML}</p>`;
      }
      addEl();
    }
  });
}

export default createDom;
