export default function useAuth() {
    const currentUser = () => {
        let currentUser = localStorage.getItem("currentUser")
        return currentUser
    }
    
    return {currentUser}
}
