import createDom from "./3";

describe("createParagraphList", () => {
  beforeEach(() => {
    const el = document.createElement("div");
    document.body.append(el);
    createDom(el);
  });

  afterEach(() => {
    document.getElementsByTagName("body")[0].innerHTML = "";
  });

  it("Checking the three starting text paragraphs", () => {
    const p3list = document.getElementsByClassName("pEl");
    const p3listArr = [...p3list];
    const listLenght = p3listArr.length;
    expect(document.querySelector(".pEl")).toBeTruthy();
    expect(listLenght).toBe(3);
  });
  it("Checking the input field", () => {
    expect(document.querySelector("#userInput")).toBeTruthy();
  });
  it("Checking the button which should be hide with empty input", () => {
    const input = document.querySelector("#userInput");
    input.value = "";
    expect(document.querySelector("#hide")).toBeTruthy();
    expect(document.querySelector("#hide").style.visibility).toBe("hidden");
  });

  it("Checking new <p> after click button", () => {
    const input = document.querySelector("#userInput");
    const button = document.querySelector("#hide");
    const divP = document.querySelector("#divP");
    const inputText = "test";
    input.value = inputText;
    button.click();
    const p3list = document.getElementsByClassName("pEl");
    const p3listArr = [...p3list];
    const listLenght = p3listArr.length;
    expect(listLenght).toBe(4);
    expect(divP.innerHTML).toContain(inputText);
  });

  it("Checking the list <p> should not contain more than 5 elements and have the last elements", () => {
    const input = document.querySelector("#userInput");
    const button = document.querySelector("#hide");
    const divP = document.querySelector("#divP");
    for (let i = 0; i < 7; i++) {
      input.value = "another one";
      button.click();
    }
    expect(divP.childElementCount).toBe(5);
    // expect(divP.innerHTML).toContain("another one");
  });
});
