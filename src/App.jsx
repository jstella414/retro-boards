import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDisplay from './assets/components/card'


function App() {
  const [actionItems, setActionItems] = useState([
    '',
  ]);
  const [actionItems2, setActionItems2] = useState([
    '',
  ]);
  const [actionItems3, setActionItems3] = useState([
    '',
  ]);

  

  
const [direction, setDirection] = useState("");



  const WentWell = document.querySelectorAll("#WentWell")
  const ToImprove = document.querySelectorAll("#toImprove")
  const ActionItems_html = document.querySelectorAll("#actionItems")

  const newItem = ()  => {setActionItems([...actionItems, '']);};
  const newItem2 = () => {setActionItems2([...actionItems2, '']);};    
  const newItem3 = () => {setActionItems3([...actionItems3, '']);};       

  const updateItem = (userInput, index) =>{const newActionItems = [...actionItems]; newActionItems[index] = userInput; setActionItems(newActionItems);}
  const updateItem2 = (userInput, index) =>{const newActionItems = [...actionItems2]; newActionItems[index] = userInput; setActionItems2(newActionItems);}
  const updateItem3 = (userInput, index) =>{const newActionItems = [...actionItems3]; newActionItems[index] = userInput; setActionItems3(newActionItems);}


  const deleteItem =(index) =>{setActionItems(actionItems.filter((_, currentIndex) => currentIndex !== index))};
  const deleteItem2 =(index) =>{setActionItems2(actionItems2.filter((_, currentIndex) => currentIndex !== index))};
  const deleteItem3 =(index) =>{setActionItems3(actionItems3.filter((_, currentIndex) => currentIndex !== index))};

 const moveItemRight = (direction, index)=>{
  if(direction === "moveRight-WentWell"){
    console.log("moveRight-WentWell")
    newItem2()
    deleteItem(index)

  }else if(direction === "moveRight-toImprove"){
    console.log("moveRight-toImprove")
    newItem3()
    deleteItem2(index)
  }else if(direction === "moveRight-actionItems"){
    console.log("moveRight-actionItems")
    
}else{
console.log("no-option")
}

   
 }

 const moveItemLeft = (direction, index) =>{

  // console.log(direction)
    if(direction === "moveLeft-WentWell"){
      console.log("moveLeft-WentWell")

    }else if(direction === "moveLeft-toImprove"){
      console.log("moveLeft-toImprove")
      newItem()
      deleteItem2(index)
    }else if(direction === "moveLeft-actionItems"){
      console.log("moveLeft-actionItems")
      newItem2()
      deleteItem3(index)
  }else{
    newItem2()
    deleteItem3(index)
  }
}



  return (
    <>


      <main className="content row">
        <h1>Retro Board</h1>
        <div>
          Layout &nbsp;<button className="button button-default">Column</button>
      
        </div>
        <div className="RetroApp row">
      
          <div className="RetroCategory RetroCategory-1">
            <h2>Went Well</h2>
            
            <button
              type="button"
              className="ButtonAdd button button-default"
              aria-label="Add new card"
              title="Add new card"
              onClick={newItem}
              id = "went_well"
            >
              +
            </button>
            {/* <!-- A retro card (retrospective item) --> */}
            <div className="RetroCard" aria-label="Retro card">
            <div className= "RetroCategory RetroCategory-1">
               
    
                
                {actionItems.map((item, index)=>{
                  return<div  key={`action-items-${index}`} id = "WentWell"  className="RetroCard" aria-label="Retro card">
                  <textarea
                    value={item}
                    className="textbox"
                    placeholder="Enter text here"
                    aria-label="Enter text here"
                    rows="1"
                    
                    onChange={(e) => updateItem(e.target.value, index)}
                  >
                  </textarea>
    
                  <div className="button-group">
                    <button
                      type="button"
                      className="button button-left"
                      title="Move left"
                      onClick={(e)=>{moveItemLeft(e.target.name, index)} }
                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
                        name = "moveLeft-WentWell"
                      />
                    </button>
                    <button
                      type="button"
                      className="button button-delete"
                      title="Delete"
                      onClick={() => deleteItem(index)}
                    >
                      <img
                        src="img/delete.svg"
                        alt="Delete"
                        width="12"
                        height="12"
                      />
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like">
                        <img src="img/thumbsUp.svg" alt="Like" width="12" height="12" />
                        5
                      </button>
                      <button
                        type="button"
                        className="button button-left"
                        title="Dislike"
                      >
                        <img
                          src="img/thumbsDown.svg"
                          alt="Dislike"
                          width="12"
                          height="12"
                        />
                        0
                      </button>
                      <button
                        type="button"
                        className="button button-right"
                        title="Move right"
                        onClick={(e) => moveItemRight(e.target.name, index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                          name = "moveRight-WentWell"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })

              
              }  
            </div>
    
            </div>
          </div>

          <div className="RetroCategory RetroCategory-2">
            <h2>To Improve</h2>
            <button
              type="button"
              className="ButtonAdd button button-default"
              aria-label="Add to new card"
              title="Add to new card"
              onClick={newItem2}
              
            >
              +
            </button>
            

            {actionItems2.map((item, index)=>{
                  return <div key={`action-items-2${index}`} id = "toImprove" className="RetroCard" aria-label="Retro card">
                  
                  <textarea
                    value={item}
                    className="textbox"
                    placeholder="Enter text here"
                    aria-label="Enter text here"
                    rows="1"
                    onChange={(e) => updateItem2(e.target.value, index)}
                  >
                  </textarea>
    
                  <div className="button-group">
                    <button
                      type="button"
                      className="button button-left"
                      title="Move left"
                      onClick={(e) =>{moveItemLeft(e.target.name, index)} }
                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
                        name = "moveLeft-toImprove"
                      />
                    </button>
                    <button
                      type="button"
                      className="button button-delete"
                      title="Delete"
                      onClick={() => deleteItem2(index)}
                    >
                      <img
                        src="img/delete.svg"
                        alt="Delete"
                        width="12"
                        height="12"
                      />
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like">
                        <img src="img/thumbsUp.svg" alt="Like" width="12" height="12" />
                        5
                      </button>
                      <button
                        type="button"
                        className="button button-left"
                        title="Dislike"
                      >
                        <img
                          src="img/thumbsDown.svg"
                          alt="Dislike"
                          width="12"
                          height="12"
                        />
                        0
                      </button>
                      <button
                        type="button"
                        className="button button-right"
                        title="Move right"
                        onClick={(e) => moveItemRight(e.target.name, index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                          name="moveRight-toImprove"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })}  
          </div>

          <div className="RetroCategory RetroCategory-3">
            <h2>Action Items</h2>
            <button
              type="button"
              className="ButtonAdd button button-default"
              aria-label="Add to new card"
              title="Add to new card"
              onClick={newItem3}
            >
              +
            </button>

            {actionItems3.map((item, index)=>{
                  return <div key={`action-items-3${index}`} id = "actionItems" className="RetroCard" aria-label="Retro card">
                  
                  <textarea
                    value={item}
                    className="textbox"
                    placeholder="Enter text here"
                    aria-label="Enter text here"
                    rows="1"
                    onChange={(e) => updateItem3(e.target.value, index)}
                  >
                  </textarea>
    
                  <div className="button-group">
                    <button
                      type="button"
                      className="button button-left"
                      title="Move left"
                      onClick={(e) => {moveItemLeft(e.target.name, index)}}
                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
                        name = "moveLeft-actionItems"
                      />
                    </button>
                    <button
                      type="button"
                      className="button button-delete"
                      title="Delete"
                      onClick={() => deleteItem3(index)}
                    >
                      <img
                        src="img/delete.svg"
                        alt="Delete"
                        width="12"
                        height="12"
                      />
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like">
                        <img src="img/thumbsUp.svg" alt="Like" width="12" height="12" />
                        5
                      </button>
                      <button
                        type="button"
                        className="button button-left"
                        title="Dislike"
                      >
                        <img
                          src="img/thumbsDown.svg"
                          alt="Dislike"
                          width="12"
                          height="12"
                        />
                        0
                      </button>
                      <button
                        type="button"
                        className="button button-right"
                        title="Move right"
                        onClick={(e) => moveItemRight(e.target.name, index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                          name = "moveRight-actionItems"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })}

              
    
          </div>
        </div>
      </main>
    </>


  )

  
}

export default App
