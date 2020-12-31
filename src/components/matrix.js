import React from "react"
import styled from "styled-components"

const Matrix = () => {
  React.useEffect(() => {
    var characters = [
      "ぃ",
      "あ",
      "い",
      "ぅ",
      "う",
      "ぇ",
      "え",
      "ぉ",
      "お",
      "か",
      "が",
      "き",
      "ぎ",
      "く",
      "ぐ",
      "け",
      "げ",
      "こ",
      "ご",
      "さ",
      "ざ",
      "し",
      "じ",
      "す",
      "ず",
      "せ",
      "ぜ",
      "そ",
      "ぞ",
      "た",
      "だ",
      "ち",
      "ぢ",
      "っ",
      "つ",
      "づ",
      "て",
      "で",
      "と",
      "ど",
      "な",
      "に",
      "ぬ",
      "ね",
      "の",
      "は",
      "ば",
      "ぱ",
      "ひ",
      "び",
      "ぴ",
      "ふ",
      "ぶ",
      "ぷ",
      "へ",
      "べ",
      "ぺ",
      "ほ",
      "ぼ",
      "ぽ",
      "ま",
      "み",
      "む",
      "め",
      "も",
      "ゃ",
      "や",
      "ゅ",
      "ゆ",
      "ょ",
      "よ",
      "ら",
      "り",
      "る",
      "れ",
      "ろ",
      "ゎ",
      "わ",
      "ゐ",
      "ゑ",
      "を",
      "ん",
      "ゔ",
      "ゕ",
      "ゖ",
      "ゝ",
      "ゞ",
      "ゟ",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
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
    ]
    var rowAnimations = Array(50)

    var startRowInterval = setInterval(() => {
      var rowIndex = Math.floor(Math.random() * 50)
      if (!rowAnimations[rowIndex]) {
        rowAnimations[rowIndex] = true
        startRowAnimation(rowIndex)
      }
    }, 100)

    var container = document.querySelector("#container")

    function startRowAnimation(rowID) {
      var newRow = document.createElement("div")
      newRow.classList.add("row")
      newRow.style.position = "absolute"
      newRow.style.top = "0"
      newRow.style.left = rowID + "%"
      container.appendChild(newRow)

      var charInterval = setInterval(() => {
        var randomChar = document.createElement("div")
        randomChar.classList.add("char")
        randomChar.innerText = characters[Math.floor(Math.random() * 124)]
        newRow.appendChild(randomChar)
        var switchCharTime = Math.floor(Math.random() * 6000)

        setTimeout(() => {
          var newChar = characters[Math.floor(Math.random() * 124)]
          randomChar.innerText = newChar
        }, switchCharTime)
      }, 100)

      setTimeout(() => {
        clearInterval(charInterval)
        newRow.remove()
        rowAnimations[rowID] = false
      }, 6000)
    }
  }, [])

  return <MatrixStyles id="container"></MatrixStyles>
}

const MatrixStyles = styled.div`
  body {
    background: #000;
  }
  #container {
    width: 50vw;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .row {
    width: 1%;
    height: 100%;
    background: black;
  }
  .char {
    animation: charAnimation 3s;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
  @keyframes charAnimation {
    0% {
      opacity: 1;
      color: white;
    }
    10% {
      opacity: 1;
      color: green;
    }
    65% {
      opacity: 1;
      color: green;
    }
    100% {
      opacity: 0;
      color: green;
    }
  }
`

export default Matrix
