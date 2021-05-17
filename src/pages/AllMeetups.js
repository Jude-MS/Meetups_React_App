import React, {useEffect, useState} from 'react';
import MeetupList from '../components/meetups/MeetupList';


function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch('https://meetup-react-74257-default-rtdb.firebaseio.com/meetups.json')
    .then(res => res.json())
    .then(data => {
      const meetups = [];
      for(let key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false)
      setDummyData(meetups)
      console.log(meetups)
    })

        
   
}, [])

    if(isLoading){
      return(
        <section>
          <p>Loading...</p>
        </section>
      )
    }
    console.log(Object.entries(dummyData))
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={dummyData}/>
        </section>
    )
}

export default AllMeetups;
