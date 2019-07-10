export const TOKEN_KEY = "@fastbox-Token"
export const USER_AUTH = "@fastbox-User"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token)
}
export const setUser = user => {
    localStorage.setItem(USER_AUTH, JSON.stringify(user))
}
export const logout = () => {
    localStorage.clear()
}