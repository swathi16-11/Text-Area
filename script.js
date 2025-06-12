const textarea = document.getElementById('myTextarea')
        const charCountDisplay = document.getElementById('charCount')
        const warningMsg = document.getElementById("warningMsg")

        textarea.addEventListener('input', function () {
            const maxLength = textarea.getAttribute("maxlength")
            const currentLength = textarea.value.length
            charCountDisplay.textContent = currentLength + "/" + maxLength

            if (currentLength == maxLength) {
                warningMsg.style.display = "block"
            }
            else {
                warningMsg.style.display = "none"
            }
        })