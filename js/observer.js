
const aboutBlockObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.cssText = entry.target.dataset.style
            } else {
                entry.target.style.cssText = ''
            }
        })

    },
    {})

const blockBg = document.querySelectorAll('.bg')
blockBg.forEach(block => aboutBlockObserver.observe(block))