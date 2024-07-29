import React from 'react'
import { useState } from 'react'
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

  const newItem = ()  => {setActionItems([...actionItems, '']);};
  const newItem2 = () => {setActionItems2([...actionItems2, '']);};    
  const newItem3 = () => {setActionItems3([...actionItems3, '']);};       

  const updateItem = (userInput, index) =>{const newActionItems = [...actionItems]; newActionItems[index] = userInput; setActionItems(newActionItems);}
  const updateItem2 = (userInput, index) =>{const newActionItems = [...actionItems2]; newActionItems[index] = userInput; setActionItems2(newActionItems);}
  const updateItem3 = (userInput, index) =>{const newActionItems = [...actionItems3]; newActionItems[index] = userInput; setActionItems3(newActionItems);}


  const deleteItem =(index) =>{setActionItems(actionItems.filter((_, currentIndex) => currentIndex !== index))};
  const deleteItem2 =(index) =>{setActionItems2(actionItems2.filter((_, currentIndex) => currentIndex !== index))};
  const deleteItem3 =(index) =>{(actionItems3.filter((_, currentIndex) => currentIndex !== index))};

  const moveItemLeft = (index) =>{
      console.log("hello")
      ///move left move right. get the index of each card //
    //if card is action item1 run newItem for card next to it? 
    
  }

 const moveItemRight = (index)=>{
  console.log("hello")
 }

  return (
    <>


      <main className="content row">
        <h1>Retro Board</h1>
        {/* <!-- Layout changer --> */}
        <div>
          Layout &nbsp;<button className="button button-default">Column</button>
      
        </div>
        {/* <!-- The className "row" is for the layout changer --> */}
        <div className="RetroApp row">
      
          {/* <!-- Retro category --> */}
          <div className="RetroCategory RetroCategory-1">
            <h2>Went Well</h2>
            {/* <!-- Add a new card button --> */}
            
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
                {/* <!-- Add a new card button --> */}
               
    
                {/* <!-- A retro card (retrospective item) --> */}
                
                {actionItems.map((item, index)=>{
                  
                  return<div key={`action-item-${index}`} className="RetroCard" aria-label="Retro card">
                  
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
                      onClick={() => moveItemLeft(index)}

                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
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
                        onClick={() => moveItemRight(index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })}  
            </div>
    
                  {/* <CardDisplay actionItems = {actionItems} setActionItems = {setActionItems} addNewCard ={addNewCard} /> */}
            </div>
          </div>

          {/* <!-- Retro category --> */}
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
                  return <div key={`action-item-${index}`} className="RetroCard" aria-label="Retro card">
                  
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
                      onClick={() => moveItemLeft(index)}
                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
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
                        onClick={() => moveItemRight(index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })}  
          </div>

          {/* <!-- Retro category --> */}
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
                  return <div key={`action-item-${index}`} className="RetroCard" aria-label="Retro card">
                  
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
                    >
                      <img
                        src="img/angleLeft.svg"
                        alt="Move left"
                        width="12"
                        height="12"
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
                        onClick={() => moveItemRight(index)}
                      >
                        <img
                          src="img/angleRight.svg"
                          alt="Move right"
                          width="12"
                          height="12"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              })}  
          </div>
        </div>
      </main>

      {/* <!-- END OF THE HTML CODE THAT YOU WILL USE --> */}
    </>
  )
}

export default App
