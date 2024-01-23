import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'

function getTodo() {

    const [user, SetUser] = useState();
 
    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/api/users/getall');

        if(!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        return response.json();
    }
    const {data, isLoading, isError} = useQuery(['user'], fetchData)

  return (
    <div>
        {data && data[2].firstName ? data[2].firstName : 'No data available'} 
        <br/>
        {data && data[0].userName ? data[0].userName : 'No data available'}

    </div>
  )
}

export default getTodo