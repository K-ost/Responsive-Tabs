/*
Responsive tabs
By K-ost
version 1.0
*/

class ResponsiveTabs {

  static tabsBody = document.querySelector('.tabs')
  static tabs = document.querySelectorAll('.tabs li a')
  static panes = document.querySelectorAll('.tab-pane')
  
  constructor(options) {
    this.el = options.el
    this.collapse = options.collapse ? options.collapse : true
    this.size = options.size ? options.size : 750

    // Init call
    this.init()
  }

  // reInit
  reInit() {
    if (window.innerWidth > this.size) {
      ResponsiveTabs.tabsBody.style.display = 'flex'
      document.querySelector('.tabs-container').classList.remove('accordion')
      
      // First tab opened
      ResponsiveTabs.tabs.forEach(tab => tab.classList.remove('active'))
      ResponsiveTabs.tabs[0].classList.add('active')
      ResponsiveTabs.panes.forEach(pane => pane.classList.remove('opened'))
      document.querySelectorAll('.tab-pane')[0].classList.add('opened')
      document.querySelectorAll('.accordion-body').forEach(el => el.removeAttribute('style'))
    } else {
      ResponsiveTabs.tabsBody.style.display = 'none'
      document.querySelector('.tabs-container').classList.add('accordion')

      // First accordion opened
      ResponsiveTabs.panes.forEach(pane => pane.classList.remove('opened'))
      ResponsiveTabs.panes[0].classList.add('opened')
      document.querySelectorAll('.accordion-body').forEach(el => el.removeAttribute('style'))
      const accBody = ResponsiveTabs.panes[0].children[1]
      accBody.style.height = accBody.children[0].offsetHeight + 'px'
    }
  }

  // Init
  init() {
    if (this.el) {

      // Open first tab
      ResponsiveTabs.tabs[0].classList.add('active')
      ResponsiveTabs.panes[0].classList.add('opened')

      // Recreating tabs
      ResponsiveTabs.panes.forEach(pane => {
        // Creating accordion names
        let tabName = ''
        ResponsiveTabs.tabs.forEach(tab => {
          if (tab.hash === `#${pane.id}`) {
            tabName = tab.innerText
          }
        })
        // Creating tab
        pane.innerHTML = `
          <a href="#" class="accordion-btn">${tabName}</a>
          <div class="accordion-body">
            <div class="accordion-inner">${pane.innerHTML}</div>
          </div>
        `
      })

      // Tab click event
      ResponsiveTabs.tabs.forEach(tab => tab.addEventListener('click', this.clickTab))

      // Accordion click event
      document.querySelectorAll('.accordion-btn').forEach(item => {
        item.addEventListener('click', e => this.clickAcc(e))
      })

      // Reinitialization
      this.reInit()
      window.addEventListener('resize', () => this.reInit())
    }
  }

  // clickTab
  clickTab(e) {
    e.preventDefault()
    let href = e.target.getAttribute('href')
    if (!e.target.classList.contains('active')) {
      document.querySelectorAll('.tabs li a').forEach(a => a.classList.remove('active'))
      e.target.classList.add('active')
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('opened'))
      document.querySelector(href).classList.add('opened')
    }
  }

  // clickAcc
  clickAcc(e) {
    e.preventDefault()
    let parent = e.target.parentElement
    let body = parent.children[1]
    let height = body.children[0].offsetHeight
    if (!parent.classList.contains('opened')) {
      if (this.collapse) {
        document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('opened'))
        document.querySelectorAll('.accordion-body').forEach(el => el.removeAttribute('style'))
      }
      parent.classList.add('opened')
      body.style.height = height + 'px'
    } else {
      parent.classList.remove('opened')
      body.removeAttribute('style')
    }
  }

}
