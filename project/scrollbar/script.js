const html = document.documentElement;
const canvas = document.querySelector('.airpod-pro');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`

)

const frameCount = 147;
canvas.height = 770;
canvas.width = 1158;
const img = new Image();

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', ()=>{
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))

    requestAnimationFrame(() => updateImage(frameIndex + 1))

})