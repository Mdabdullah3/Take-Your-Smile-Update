import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Card from './Card';

const Complete = () => {
    const [bookings , setBookings]:any = useState([]);
    const url = `https://take-your-smile-server-side.vercel.app/allbookings`;

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
          
            setBookings(data)
            filterItems(data);
          });
      }, [bookings]);
        
        // if(isLoading){
        //     return <Loading/>
        // }
        const filterItems = (bookings) => {
                const updatedItems = bookings.filter((item) => {
                  return item.status === 'complete';
                });
                setBookings(updatedItems);

                
              };

    return (
        <div>

            <section>
                <PageTitle title="All Gallery" />
                <div className="Appes">
                    <h1 className='text-center mt-3 text-secondary text-2xl'> All Complete Bookings Here</h1>
                    <div className="propertiest text-secondary">
                        {bookings.map((items: any) => (
                            <Card data={items} key={items._id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Complete;