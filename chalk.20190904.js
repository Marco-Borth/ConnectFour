// Chalk - EECS 368's library for teaching and understanding JavaScript
// Version 20190904
//
let chalk = {
    print: function(str) {
            document.querySelector("#chalk").innerHTML +=
               str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;');
    },
    newline: function() {
            document.querySelector("#chalk").innerHTML += "<BR/>";
    },
    hr: function() {
            document.querySelector("#chalk").innerHTML += "<hr/>";
    },
    println: function(str) {
            chalk.print(str);
            chalk.newline();
    }
}

// Do this when document is ready
document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#chalk").style.border = "solid black 1px";
        document.querySelector("#chalk").style.background = "#eeeeee";
        // The user provides the main function
        main();
});
