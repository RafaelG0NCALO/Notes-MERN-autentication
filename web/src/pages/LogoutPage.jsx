import { useEffect } from "react";
import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
    const store = authStore();
    const navigate = useNavigate()
    useEffect(() => {
      store.logout()
      navigate("/login")
    }, [])
    
  return (
    <div>You are now logged</div>
  )
}
