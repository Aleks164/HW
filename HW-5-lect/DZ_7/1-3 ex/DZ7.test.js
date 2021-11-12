import createDom from "./calc";

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
    expect(document.querySelector("#hide")).toBeTruthy();
    expect(document.querySelector("#hide").style.visibility).toBe("hidden");
  });
  it("Checking the button which should visible when input is not empty", () => {
    const input = document.querySelector("#userInput");
    const button = document.querySelector("#hide");
    const event = new Event("input");
    input.value = "123";
    input.dispatchEvent(event);
    expect(button.style.visibility).toBe("visible");
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
      input.value = `another ${i}`;
      button.click();
    }
    expect(divP.childElementCount).toBe(5);
    expect(divP.innerHTML).toContain("another 6");
    expect(divP.innerHTML).toContain("another 5");
    expect(divP.innerHTML).toContain("another 4");
    expect(divP.innerHTML).toContain("another 3");
    expect(divP.innerHTML).toContain("another 2");
  });
});
