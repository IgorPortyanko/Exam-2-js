
export function isValidName (nameInput) {
    if (nameInput.value.trim().length < 2) {
        nameInput.classList.add("error");
        return false;
    } else {
        nameInput.classList.add("success");
        return true
    }
}

export function isValidEmail (emailInput) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailInput.classList.add("error");
        return false;
    } else {
        emailInput.classList.add("success");
        return true
    }
}