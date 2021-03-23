// signup will take in a user object as an argument
export const signup = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    })
}

// login will take in a user object as an argument
export const login = (user) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user },
    })
}

// logout will not accept any arguments
export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}