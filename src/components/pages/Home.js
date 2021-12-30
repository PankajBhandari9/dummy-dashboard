import React, { useCallback, useState } from 'react'
import Card from './Card'
import Data from '../../Data';

const Home = () => {
    const [data, setData] = useState(Data);

    
    const handleAll=useCallback(()=>{
        setData(Data);
    },[Data])

    const handleFastFood=()=>{
        const fastFood=Data.filter((items)=>{
            return items.category==="fast-food";
        })
        setData(fastFood);
    }

    const handleDiet=()=>{
        const diet=Data.filter((items)=>{
            return items.category==="diet"
        });
        setData(diet);
    }

    const handleDogs=()=>{
        const dogs=Data.filter((items)=>{
            return items.category==="dog"
        })
        setData(dogs);
    }

    const handleBirds=()=>{
        const birds=Data.filter((items)=>{
            return items.category==="bird"
        })
        setData(birds);
    }


    return (
        <div className='text-center row'>
            <button className='shadow btn btn-outline-success col mx-5 my-2' onClick={handleAll}>All</button>
            <button className='shadow btn btn-outline-dark col mx-5 my-2' onClick={handleDiet}>Diet</button>
            <button className='shadow btn btn-outline-info col mx-5 my-2' onClick={handleDogs}>Dogs</button>
            <button className='shadow btn btn-outline-warning col mx-5 my-2' onClick={handleFastFood}>Fast Food</button>
            <button className='shadow btn btn-outline-danger col mx-5 my-2' onClick={handleBirds}>Birds</button>
            <Card Data={data}/>
        </div>
    )
}

export default React.memo(Home);
