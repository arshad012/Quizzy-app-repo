
export const findEmptyField = (signupDetails) => {
    let emptyField = null;

    for (let key in signupDetails) {
        if (!signupDetails[key]) {
            emptyField = key;
            break;
        }
        else {
            switch (key) {
                case "name":
                    if (signupDetails[key].length <= 3) {
                        emptyField = key;
                    }
                    break;
                case "phone":
                    if (signupDetails[key].length < 10) {
                        emptyField = key;
                    }
                    break;
                case "password":
                    if (signupDetails[key].length < 8) {
                        emptyField = key;
                    }
                    break;
                case "confirmPassword":
                    if (signupDetails.password !== signupDetails.confirmPassword) {
                        emptyField = key;
                    }
                    break;
            }
        }

        if (emptyField) break;
    }

    return emptyField;
}