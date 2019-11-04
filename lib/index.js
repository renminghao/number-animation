class NumberAnimation {
  constructor({ el, number, time, startAnimation, endAnimation, numberChange }) {
    if (this.el = document.querySelector(el), !this.el) {
      throw new Error(`can not get any Element by ${el}`)
      return
    }
    this.el.className += 'number-animation-container'
    this.sliceTime = this.computedTime(number, time)
    this.number = this.insertDomsByNumber(number)
    this.addStyle()
  }

  computedTime (number, time) {
    return Math.floor(time / number)
  }

  insertDomsByNumber (number) {
    [].slice.call(number + '').map(this.insertDom.bind(this))
  }

  insertDom () {
    let target = document.createElement('div')
    target.className = 'number-animation-item-container'
    this.el.appendChild(target)
    for (let key = 0; key < 10; key++) {
      let div = document.createElement('div')
      let span = document.createElement('span')
      div.className = 'number-animation-item-container-item'
      span.innerHTML = key
      div.appendChild(span)
      target.appendChild(div)
    }
  }

  addStyle () {
    let header = document.getElementsByTagName('head')
    let style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
      .number-animation-container {
        display: flex;
        flex-direction: row;
      }
      .number-animation-item-container {
        flex: 1;
        align-items: center;
        height: 100%;
        overflow: hidden;
      }
      .number-animation-item-container-item {
        display: block;
        width: 100%;
        height: 100%;
        float: left;
        text-align: center;
      }
      .number-animation-item-container-item span {
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
      }
    `
    header[0].appendChild(style)
  }
}

export default NumberAnimation