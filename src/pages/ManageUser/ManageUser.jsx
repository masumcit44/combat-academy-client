import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'; // Import the necessary React Query components
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ManageUserCard from './ManageUserCard';

const ManageUser = () => {
//   const [users, setUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(
    "allusers",
    async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    }
  );

  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">Manage User</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="border-y p-5  border-1 border-blue-500">
              <tr className="border-y p-5 text-center border-1 border-blue-500">
                <th>UserName</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="p-5">
              {users.map((user) => (
                <ManageUserCard key={user._id} user={user} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


const queryClient = new QueryClient(); 
const ManageUserWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <ManageUser />
  </QueryClientProvider>
);

export default ManageUserWrapper;
