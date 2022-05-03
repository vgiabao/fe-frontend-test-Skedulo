interface Validators {
    isValidInput: (input: string) => boolean
}


export const validators: Validators = {
    isValidInput: (searchTerm: string) => {
        return searchTerm.length >= 3 && searchTerm.length <= 25;
    },
}

