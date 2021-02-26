//Fazer login
export const goToLogin = (history) => {
    history.push("/")
}
//Feed 
export const goToPostList = (history) => {
    history.push("/postList")
}

//adicionar post

export const goToPost = (history) => {
    history.push("/postPage/:id")
}

// fazer cadastro
export const goToRegister = (history) => {
    history.push("/register")
}