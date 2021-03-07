import React, { Component} from 'react'
 

export default class Listings extends Component {
  
  render () {
    return (
        <section id="listings">

        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section id="sort-area">
              <div className="results">
                400 results found
              </div>

                <div className="sort-options">
                  <select name="sort-by" classname="sort-by">
                    <option value="price-asc">Highest Price</option>
                    <option value="price-dsc">Lowest Price</option>
                  </select>

                  <div className="view">
                  <i className="far fa-list-alt listing-menu-icon fa-lg"></i>
                  <i className="fas fa-caret-square-down listing-menu-icon fa-lg"></i>
                  </div>

              </div>
        </section>
        


        <section className="listings-results">


          <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="adress">Beverly Hills, 24</span>
              <div className="details">

               <div className="col-md-3"> 
                  <div className="user-img"></div>
                </div>  

                <div className="col-md-9"> 
                  <div className="user-details"> 
                  <span className="username">Alex Jersey</span>
                  <span className="post-date">06/10/2019</span>
                  </div>
                <div className="listing-details">
                  <div className="floor-space">
                  <i className="far fa-square fa-lg"></i>
                  <span>1000 ft&sup2;</span> 
                  </div>
                  <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <span>3 bedrooms</span> 
                  </div>
                  </div>  
                  <div className="view-button">Show Listing</div>
                  </div>

              </div>
            </div>
            <div className="bottom-info">
              <span className="rent-price">$1000 per Month </span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                  Boston, USA
              </span>
            </div>
          </div>
          </div>



           <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="adress">Beverly Hills, 24</span>
              <div className="details">

               <div className="col-md-3"> 
                  <div className="user-img"></div>
                </div>  

                <div className="col-md-9"> 
                  <div className="user-details"> 
                  <span className="username">Alex Jersey</span>
                  <span className="post-date">06/10/2019</span>
                  </div>
                <div className="listing-details">
                  <div className="floor-space">
                  <i className="far fa-square fa-lg"></i>
                  <span>1000 ft&sup2;</span> 
                  </div>
                  <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <span>3 bedrooms</span> 
                  </div>
                  </div>  
                  <div className="view-button">Show Listing</div>
                  </div>

              </div>
            </div>
            <div className="bottom-info">
              <span className="rent-price">$1000 per Month </span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                  Boston, USA
              </span>
            </div>
          </div>
          </div>


          <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="adress">Beverly Hills, 24</span>
              <div className="details">

               <div className="col-md-3"> 
                  <div className="user-img"></div>
                </div>  

                <div className="col-md-9"> 
                  <div className="user-details"> 
                  <span className="username">Alex Jersey</span>
                  <span className="post-date">06/10/2019</span>
                  </div>
                <div className="listing-details">
                  <div className="floor-space">
                  <i className="far fa-square fa-lg"></i>
                  <span>1000 ft&sup2;</span> 
                  </div>
                  <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <span>3 bedrooms</span> 
                  </div>
                  </div>  
                  <div className="view-button">Show Listing</div>
                  </div>

              </div>
            </div>
            <div className="bottom-info">
              <span className="rent-price">$1000 per Month </span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                  Boston, USA
              </span>
            </div>
          </div>
          </div>


          <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="adress">Beverly Hills, 24</span>
              <div className="details">

              <div className="col-md-3">      
                  <div className="user-img"></div>
                  </div> 

                <div className="col-md-9"> 
                  <div className="user-details"> 
                  <span className="username">Alex Jersey</span>
                  <span className="post-date">06/10/2019</span>
                  </div>
                <div className="listing-details">
                  <div className="floor-space">
                  <i className="far fa-square fa-lg"></i>
                  <span>1000 ft&sup2;</span> 
                  </div>
                  <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <span>3 bedrooms</span> 
                  </div>
                  </div>  
                  <div className="view-button">Show Listing</div>
                  </div>

              </div>
            </div>
            <div className="bottom-info">
              <span className="rent-price">$1000 per Month </span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i>
                  Boston, USA
              </span>
            </div>
          </div>
          </div>


        </section>




        <section id="pagination">
          <ul className="page-options">
            <li> Previous</li>
            <li  className="active"> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
            <li> 5 </li>
            <li> Next </li>
            <li> Last </li>
          </ul>
        </section>

        </section>
    )
  }
}

