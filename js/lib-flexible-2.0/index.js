(function flexible (window, document) {
  var docEl = document.documentElement
  //dpr 物理像素比
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
  //如果页面中有body这个元素，就设置body的字体大小
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
  //如果页面中没有body这个元素，则等着我们页面主要的DOM元素加载完毕再去设置body的字体大小
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10  设置html元素的文字大小 屏幕划分成10等份
  function setRemUnit () {
    var rem = docEl.clientWidth / 24
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置rem的大小
  window.addEventListener('resize', setRemUnit)
  //pageshow是我们重新加载页面触发的事件
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports  有些移动端浏览器不支持0.5px的写法
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
