import React, { Component} from 'react'
  

export default class Filter extends Component {
  
  render () {
    return (
        <section id="filter">
         <div className="inside-content"> 
           <h4>Filter</h4>
           <select name="neighborhood" className="neighborhood">
                <option>Ridgewood</option>
           </select>
           <select name="housetype" className="housetype">
                <option>Ranch</option>
           </select>
           <select name="bedrooms" className="bedrooms">
                <option>3 BR</option>            
           </select>
           <div className="filters price">
           <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
           </div> 

           <div className="filters floor-space">
           <span className="title">Floor Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space" />
            <input type="text" name="max-floor-space" className="max-floor-space" />
           </div> 

           <div className="filters baths">
           <span className="title">Baths number</span>
            <input type="text" name="min-baths-number" className="min-baths-number"/>
            <input type="text" name="max-baths-number" className="max-baths-number"/>
           </div> 

               
           <div className="filters extras" >
            <span className="title">Additional Options</span>
            <label for="extras" >
            <input type="checkbox" name="extras" value="elevator"/>
                <span>Elevators</span>  
                
            </label>
            <label for="extras" >
            <input type="checkbox" name="extras" value="swimming-pool"/>
                <span>Swimming Pool</span>  
                
            </label>
            <label for="extras" >
            <input type="checkbox" name="extras" value="finished-basement"/>
                <span>Finished Basement</span>  
                
            </label>
            <label for="extras" >
            <input type="checkbox" name="extras" value="gym"/>
                <span>Home gym</span>  
                
            </label>
           </div>
         </div>   
        </section>
    )
  }
}

