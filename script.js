function toggleMode() {
    const html = document.documentElement
    
    // Primeira forma mostrada no curso:
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    // Segunda forma mostrada, simplificada
    html.classList.toggle("light")
}