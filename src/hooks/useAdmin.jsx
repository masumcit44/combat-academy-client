import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    // use axios secure with react query
    const {data: isAdmin, } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data;
        }
        
    })
    return [isAdmin]
}
export default useAdmin;