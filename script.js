

let reverseString = () => {

    let input = document.getElementById("text").value;

    document.getElementById("show").innerText = input

    setTimeout(() => {
        // Reverse the input string
        let reversed = input.split("").reverse().join("");

        // Display the reversed string in the output span
        document.getElementById("output").textContent = reversed;
    }, 2000);


}

let btn = document.getElementById("btn")
btn.addEventListener("click", reverseString)



