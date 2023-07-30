const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

let memos = ["おはよう", "こんにちは", "こんばんは"]

addButton.onclick = function () {
  memos.push(memoInput.value)
  // ローカルストレージのmemosキーにJSONにしたmemosを保存する。
  localStorage.memos = JSON.stringify(memos)

  // ローカルストレージのmemosキーからJSONを読み込む。
  const memosJson = localStorage.memos
  // JSON.parseで配列にして、memosを更新する。
  memos = JSON.parse(memosJson)

  // ページ読み込み時に、配列の内容をブラウザに反映する。
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div)
  }

  memoInput.value = ""
  memoContainer.textContent = ""
  console.log(memos)
}
