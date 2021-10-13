export function register(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                message: "Vous êtes inscrits avec succès",
                success: true,
            })
        }, 2000)
    })
}