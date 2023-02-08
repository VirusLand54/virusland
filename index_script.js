ServerIP.onclick = () => {
    navigator.clipboard.writeText('play.virusland.ru')
    ServerIPCoppied.classList.add('active')
    setTimeout(() => ServerIPCoppied.classList.remove('active'), 2000)
}