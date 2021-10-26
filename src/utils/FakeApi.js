export function register(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data.email === "test@email.com") {
                reject({
                    errors: {
                        email: "L'email est déjà choisi par un autre utilisateur."
                    }
                })
            } else {
                resolve({
                    message: "Vous êtes inscrit avec succès",
                    success: true,
                })
            }
        }, 2000)
    })
}