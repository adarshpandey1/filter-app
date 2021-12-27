/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../constants';
import './style.css';


const Home = () => {
    const [selectedRating, setSelectedRating]     = useState(null);
    const [selectedPrice, setSelectedPrice]       = useState([1000, 5000]);

    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'Apartment' },
        { id: 2, checked: false, label: 'Holiday' },
        { id: 3, checked: false, label: 'Guest' },
        { id: 4, checked: false, label: 'Resort' },
        { id: 5, checked: false, label: 'BnB' },
      ]);

      const [list, setList] = useState(dataList);
      const [searchInput, setSearchInput] = useState('');

    const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

    const handleChangeChecked = (id) => {
        const cusinesStateList = cuisines;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCuisines(changeCheckedCuisines);
      };
      const handleChangePrice = (event, v) => {
         setSelectedPrice(v);
        
      };

      const applyFilters = () => {
          let updatedList = dataList;
          //Rating Filter
          if(selectedRating) {
          updatedList = updatedList.filter(
              (item) => parseInt(item.rating) === parseInt(selectedRating)
          );
      }
         // Cuisine Filter
        const cuisinesChecked = cuisines
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());

         if (cuisinesChecked.length) {
          updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.cuisine)
      );
    }

       // Search Filter
        if (searchInput) {
         updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==-1
        );
      }
       //price filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];

      updatedList = updatedList.filter(
      (item)  => item.price >= minPrice && item.price <= maxPrice
   );
        setList(updatedList);
    };
    useEffect(() => {
         applyFilters();
    },[selectedRating,cuisines,selectedPrice,searchInput]);

    return (
        <div className="home">
            {/* Search bar */}
            <SearchBar value={searchInput} changeInput={(e) => setSearchInput(e.target.value)}/>

            <div className='home_panelList-wrap'>
                <div className='home_panel-wrap'>
            {/* side panels */}
            <FilterPanel 
                         selectedRating  ={selectedRating}
                         selectRating    ={handleSelectRating}
                         cuisines        ={cuisines}
                         changeChecked   ={handleChangeChecked} 
                         selectedPrice   ={selectedPrice}
                         changePrice     ={handleChangePrice}
                         
                       />
                </div>
                <div className='home_list-wrap'>
            {/* List & empty view */}
            <List list={list} />
            </div>
          </div>
        </div>
    )
}

export default Home;
