import React from "react";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ManageClassCard from "./ManageClassCard";


const queryClient = new QueryClient();

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: addedClass = [], refetch } = useQuery(
    "addedClass",
    async () => {
      const res = await axiosSecure.get("/allclasses");
      // console.log(res.data);
      return res.data;
    }
  );

  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">
        Manage Classes
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="border-y p-5  border-1 border-blue-500">
              <tr className="border-y p-5  border-1 border-blue-500">
                <th>Image</th>
                <th>Martial Art Name</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="p-5">
              {addedClass.map((single) => (
                <ManageClassCard key={single._id} card={single} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ManageClass />
    </QueryClientProvider>
  );
};

export default App;
