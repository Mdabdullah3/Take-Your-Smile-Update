import { useEffect, useState } from "react"

const useAdminToken = (user:any, role:any) => {
const [adminToken, setToken] = useState('');
useEffect(() => {
const email = user?.user?.email;
const name = user?.user?.displayName;

let  currentAdmin;
if(role.length > 1){
    currentAdmin = {email, name, role};
}else{
    currentAdmin = {email, name};
}

if (email) {
    fetch(`https://take-your-smile-server-side.vercel.app/admin/${email}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentAdmin)
    })
    .then(res => res.json())
    .then(data => {
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken)
    })
}

},[user]);
return [adminToken];
}
export default useAdminToken;