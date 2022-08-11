(function() {
  const throttle = (callback, limit) => {
    let waiting = false
    return () => {
      if (!waiting) {
        callback()
        waiting = true
        setTimeout(() => waiting = false, limit)
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
      once: getComputedStyle(element)['animation-iteration-count'] === '1'
    }
  }

  let elements = []
  let scrollY = window.scrollY
  let windowWidth = window.innerWidth

  const refreshTriggers = throttle(() => {
    elements.forEach(el => {
      el.trigger = el.element.getBoundingClientRect().top - window.innerHeight + parseInt(el.element.dataset.taosOffset || 0) + window.scrollY
    })
  }, 250)

  const refresh = () => {
    elements = []
    document.querySelectorAll('[class*="taos"]').forEach(element => elements.push(initElement(element)))
    refreshTriggers()
    requestAnimationFrame(handleScroll)
    windowWidth = window.innerWidth
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

  refresh()
  addEventListener('scroll', throttle(handleScroll, 32))
  addEventListener('orientationchange', refresh)
  addEventListener('resize', () => {
    if (window.innerWidth === windowWidth) {
      return;
    }
    refresh()
  })

  const observer = new MutationObserver(mutations => {
    mutations.forEach(({target}) => {
      if (!target.className.includes('taos-init') && target.className.includes('taos:')) {
        elements.push(initElement(target))
      }
    })
  })
  observer.observe(document, {attributes: true, childList: true, subtree: true})
})()
