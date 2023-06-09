import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MySelectedClassCard from "./MySelectedClassCard";

const MySelectedClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery(
    ["selectedclass"],
    async () => {
      const res = await axiosSecure.get(`/selectedclass?email=${user?.email}`);
      return res.data;
    },
    {
      enabled: !!user.email, // Enable the query only when user is available
    }
  );

//   console.log(selectedClass);

  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">
        Your Selected Class
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-y p-5  border-1 border-blue-500">
              <tr className="border-y p-5  border-1 border-blue-500">
                <th>
                  Image
                </th>
                <th>Martial Art Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Delete Class</th>
              </tr>
            </thead>
            <tbody className="p-5">
                {
                    selectedClass.map(single=><MySelectedClassCard
                    key={single._id}
                    card={single}
                    refetch={refetch}
                    ></MySelectedClassCard>)
                }
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
