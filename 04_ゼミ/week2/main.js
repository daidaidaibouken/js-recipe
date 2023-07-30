const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const MemoContainer = document.getElementById("memo-container")
const DeleteButton = document.getElementById("delete-button")

AddButton.onclick = function () {
  const text = MemoInput.value
  const newDiv = document.createElement("div") //div要素をHTML に追加し、cardとする。
  MemoContainer.append(newDiv) //newDiv要素をMemoContainerの最後に追加
  newDiv.textContent = text //newDivのテキスト部分にMemoInputの値を代入
  MemoInput.value = ""
}

DeleteButton.onclick = function () {
  MemoContainer.remove()
  location.reload()
}
