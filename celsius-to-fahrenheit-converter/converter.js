//celsius to fahrenht = 1.8 + 32


function conversion() {
    let celsius = document.getElementById("celsiusInput").value;
    document.getElementById("fahrenheit").value = celsius * 1.8 + 32
}
