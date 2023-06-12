import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import InstructorAddedClassCard from './InstructorAddedClassCard';

const InstructorAddedClass = () => {
  const [addedClass, setAddedClass] = useState([]);
  const { user } = useAuth();
  
  useEffect(() => {
    if(!user) return 
    axios
      .get(`https://combat-academy-server.vercel.app/myclass?email=${user?.email}`)
      .then(res => {
        setAddedClass(res.data);
      })
      .catch(error => {
        
        console.log(error);
      });
  }, [user]); 

  // console.log(user?.email);

  return (
    <div>
    <h2 className="font-bold text-5xl active-url text-center">
      Your Added Classes
    </h2>
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          
          <thead className="border-y p-5  border-1 border-blue-500">
            <tr className="border-y p-5  border-1 border-blue-500">
              <th>Image</th>
              <th>Martial Art Name</th>
              <th>Instructor Name</th>
              <th>Total Enrolled Students</th>
              <th>Price</th>
              <th>status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="p-5">
            {
                addedClass.map(single=><InstructorAddedClassCard
                key={single._id}
                card={single}
                ></InstructorAddedClassCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default InstructorAddedClass;
