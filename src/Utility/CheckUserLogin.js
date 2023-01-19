import { useNavigate } from "react-router-dom"

export default function CheckUserLogin() {
    let navigate = useNavigate()

    if (localStorage.getItem("token")) navigate('/login')
}
