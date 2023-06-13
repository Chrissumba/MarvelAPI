import React from 'react'
import { useNavigate } from 'react-router-dom'
export const StoriesPageCard = ({ data }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
              <div className="card" key={item.id} 
              onClick={()=>navigate(`/${item.id}`)}>
                
                <div className="title">
                  <h3>{item.title}</h3>
                </div>

              </div>
            )
          })
        ):""
      }

    </>
  )
}
