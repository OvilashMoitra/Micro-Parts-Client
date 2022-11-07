import { useEffect, useState } from "react"

const useRole = user => {
    const [role, setRole] = useState('');
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://micropart-server.onrender.com/user?email=${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data?.role)
                    const position = data?.role
                    setRole(position);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [role, adminLoading]
}

export default useRole;
