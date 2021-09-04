const container = document.getElementById('lazyload')
const obserevr = new IntersectionObserver(onIntersection)

obserevr.observe(container)

function onIntersection(entry){
  let element = entry[0]
  

  if(element.intersectionRatio > 0){
    container.classList.add('imgLd')

    observer.unobserve(element.target)
    observer.disconnect()
  }
  container.classList.remove('imgLd')
}

