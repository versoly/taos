(function() {
  const debounce = (fn, delay) => {
    let timeoutId = null
    return () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(fn, delay)
    }
  }

  const throttle = (fn, delay) => {
    let waiting = false
    return () => {
      if (!waiting) {
        fn()
        waiting = true
        setTimeout(() => waiting = false, delay)
      }
    }
  }

  const reset = element => {
    if (element.className !== element.dataset.taosClass) {
      element.className = element.dataset.taosClass
    }
  }
  const before = element => element.className = element.className.replaceAll('taos:', '')

  const initElement = element => {
    if (!element.className.includes('taos-init')) {
      element.dataset.taosClass = element.className + ' taos-init'
      reset(element)
    }
    element.className += ' !duration-[0ms] !delay-[0ms]'
    before(element)

    return {
      element,
      once: getComputedStyle(element)['animation-iteration-count'] === '1',
      offset: parseInt(element.dataset.taosOffset || 0)
    }
  }

  let elements = []
  let innerWidth = window.innerWidth
  let scrollY = window.scrollY

  const refreshTriggers = throttle(() => {
    elements.forEach(el => el.trigger = el.element.getBoundingClientRect().top - window.innerHeight  + el.offset + scrollY)
  }, 250)

  const refresh = () => {
    elements = []
    document.querySelectorAll('[class*="taos"]').forEach(el => elements.push(initElement(el)))
    refreshTriggers()
    requestAnimationFrame(handleScroll)
  }

  const handleScroll = () => {
    scrollY = window.scrollY
    elements.forEach(({element, trigger, once}) => {
      if (trigger < scrollY) {
        reset(element)
      }
      else if (!once && element.className.includes('taos:')) {
        before(element)
      }
    })
    refreshTriggers()
  }

  const handleResize = () => {
    if (innerWidth !== window.innerWidth) {
      innerWidth = window.innerWidth
      refresh()
    }
  }

  refresh()
  addEventListener('scroll', throttle(handleScroll, 32))
  addEventListener('orientationchange', refresh)
  addEventListener('resize', debounce(handleResize, 250))

  const observer = new MutationObserver(mutations => {
    mutations.forEach(({target}) => {
      if (target.className && !target.className.includes('taos-init') && target.className.includes('taos:')) {
        elements.push(initElement(target))
      }
    })
  })
  observer.observe(document, {attributes: true, childList: true, subtree: true})
})()
