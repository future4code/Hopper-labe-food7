import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToSignUp } from "../Router/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToSignUp(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage