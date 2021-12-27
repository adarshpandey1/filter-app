import React from 'react';
import FilterListToggle from '../../common/FilterListToggle';
import {ratingList} from '../../../constants';
import CheckBoxProton from '../../common/CheckBoxProton';
import SliderProton from '../../common/SliderProton';
import './style.css';

const FilterPanel = ({selectedRating,selectRating, cuisines,changeChecked,selectedPrice,changePrice}) => {
    return (
        <div>
           
           {/* cusines */}
           <div className="input-group">
               <p className="label">Property Type</p>
               {cuisines.map((cuisine) => (
               <CheckBoxProton
                key={cuisine.id}
                cuisine={cuisine}
                changeChecked={changeChecked}
              />
      ))}
           </div>
           {/* price range */}
           <div className='input-group'>
           <p className='label-range'>Price Range</p>
           <SliderProton value={selectedPrice} changePrice={changePrice} />
           </div>
           {/*star rating */}
           <div className="input-group">
               <p className='label'>Star Rating</p>
               <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating} />
           </div>
        </div>
    )
}

export default FilterPanel
