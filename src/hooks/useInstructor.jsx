import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    // use axios secure with react query
    const {data: isInstructor, isLoading: isIntructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data;
        }
        
    })
    return [isInstructor, isIntructorLoading]
}
export default useInstructor;