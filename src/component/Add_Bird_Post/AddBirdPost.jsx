import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../redux/action/BirdPostAction';

const AddBirdPost = () => {
    const [count, setCount] = useState(0);

    const birdPost = useSelector(state => state.bird);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPost("https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"))
    }, [])
    
  return (
    <div>
        <img src={birdPost} alt="birdPost" style={{width: "40%", height: "30rem"}}/>
        <h3>❤️ : {count}</h3>
        <button onClick={() => setCount(count+1)}>Like</button>
    </div>
  )
}

export default AddBirdPost