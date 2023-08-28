import { useEffect, useState } from "react";


const useCommittee = () => {
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('membersList.json')
            .then(res => res.json())
            .then(data => {
                setMember(data)
                setLoading(false)
            })
    }, [])
    return [member, loading]
}

export default useCommittee;