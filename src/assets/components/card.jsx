function CardDisplay({ actionItems, setActionItems, addNewCard }){
    
    {actionItems.map((item, index)=>{

      return (
        <div key={`action-item-${index}`} className= "RetroCategory RetroCategory-1">
                {/* <!-- Add a new card button --> */}
               
    
                {/* <!-- A retro card (retrospective item) --> */}
                <div className="RetroCard" aria-label="Retro card">
                  {/* <!-- User input --> */}
                  <textarea
                    className="textbox"
                    placeholder="Enter text here"
                    aria-label="Enter text here"
                    rows="1"
                    // onChange={(e) => updateItem(e.target.value, index)}
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
              </div>
    
        );


    })
  
};
}




export default CardDisplay
