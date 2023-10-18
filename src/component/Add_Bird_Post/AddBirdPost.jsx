import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, increaseLike } from '../redux/action/BirdPostAction';

const AddBirdPost = () => {

  const [birdName, setBirdName] = useState("");
  const birdPost = useSelector(state => state.bird);
  const dispatch = useDispatch();

  function bird_Name() {
    dispatch(addPost(birdName));
    setBirdName("");
  }

  return (
    <div>
      <input type="text" value={birdName} onChange={(e) => setBirdName(e.target.value)} />
      <br />
      <br />
      <button onClick={bird_Name}>Add Bird</button>

      {
        birdPost.map((item, index) => (
          <div key={index}>
            <ul >
              <h2>{item.name}</h2>
              Likes: {item.likes}
              <button onClick={() => dispatch(increaseLike(index))}>Like</button>
            </ul>
          </div>
        ))
      }


    </div>
  )
}

export default AddBirdPost