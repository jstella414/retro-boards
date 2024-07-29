import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDisplay from './assets/components/card'


function App() {
  
  // const [count, setCount] = useState(0)
  const [actionItems, setActionItems] = useState([
    '',

  ]);
  const [actionItems2, setActionItems2] = useState([
    '',

  ]);
  const [actionItems3, setActionItems3] = useState([
    '',

  ]);


  const newItem = () => {
    /**
     * Must clone instead of actionItem.push.
     * Otherwise, React won't detect a change and re-render
     */    setActionItems([...actionItems, '']);
  };


  const updateItem = (userInput, index) => {
    /**
     * Finds the item to update by the "itemToChangeIndex" (position in the array)
     * Then makes the new change. The text for the change is "userInput"
     */
    const newActionItems = [...actionItems]; // Again, must clone instead of array.push.
    newActionItems[index] = userInput;
    setActionItems(newActionItems);

  };
  const deleteItem = (index) => {
    /**
     * In order to delete, we need to know the position in the array
     * The "itemToDeleteIndex" is the position in the array of the item that we want to delete
     * This goes in a loop. It compares the index for each item in the loop with the "itemToDeleteIndex"
     * If they match, it remove the item from the array
     */
    setActionItems(
      actionItems.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  return (
    <>

      {/* <!-- START OF THE HTML CODE THAT YOU WILL USE --> */}

      {/* <!-- The className "row" is for the layout changer --> */}
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
            >
              +
            </button>
            {/* <!-- A retro card (retrospective item) --> */}
            <div className="RetroCard" aria-label="Retro card">
            <div className= "RetroCategory RetroCategory-1">
                {/* <!-- Add a new card button --> */}
               
    
                {/* <!-- A retro card (retrospective item) --> */}

                {actionItems.map((item, index)=>{
                  return <div key={`action-item-${index}`} className="RetroCard" aria-label="Retro card">
                  
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
              onClick={newItem}
            >
              +
            </button>

            {actionItems.map((item, index)=>{
                  return <div key={`action-item-${index}`} className="RetroCard" aria-label="Retro card">
                  
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
              click={newItem}
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
                    onChange={(e) => updateItem(e.target.value, index)}
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
