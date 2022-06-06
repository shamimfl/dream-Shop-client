import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const MyCart = () => {
    const [user, loading, eerror] = useAuthState(auth);
    const url = `http://localhost:5000/myorder?email=${user?.email}`

    const { isLoading, error, data, refetch } = useQuery('samgsung', () => fetch(url).then(res => res.json()))
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data)
    return (
        <div>
            <h1>Total order {data?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(data => <tr>
                                <td>{data?.product}</td>
                                <td>{data?.price}</td>
                                <td>
                                    <button className='bg-pink-400 px-2 block w-full text-white font-bold'>pay</button>
                                    <button className='bg-red-400 px-2 block w-full mt-2 text-white font-bold'>cencel</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;