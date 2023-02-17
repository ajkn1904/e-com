import { useContext, useState } from 'react';
import './App.css';
import Contents from './Components/Contents/Contents';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import TopNav from './Components/TopNav/TopNav';
import { ProductDataContext } from './Components/Context/DataContext';


function App() {
  const data = useContext(ProductDataContext);

  const getPreviousAddedId = localStorage.getItem('addId')
  const getAddedId = JSON.parse(getPreviousAddedId)
  const getPreviousCount = localStorage.getItem('counted')
  const getCount = JSON.parse(getPreviousCount)



  const [itemCount, setItemCount] = useState(getCount || '0');
  const [addItem, setAddItem] = useState(false);
  const [selectedId, setSelectedId] = useState(getAddedId || []);
  let count = 0;



  const handleAddItem = id => {

    const addId = [...selectedId, id]
    setSelectedId(addId)
    setAddItem(true);
    const newCount = count + 1;
    const counted = parseInt(itemCount) + parseInt(newCount)
    setItemCount(counted);
    localStorage.setItem('counted', JSON.stringify(counted))
    localStorage.setItem('addId', JSON.stringify(addId))
  }



  const handleRemoveItem = id => {

    const filteredId = selectedId.filter(item => item !== id)
    setSelectedId(filteredId)
    setAddItem(true);
    const newCount = count - 1;
    const counted = parseInt(itemCount) + parseInt(newCount)
    setItemCount(counted);
    localStorage.setItem('counted', JSON.stringify(counted))
    localStorage.setItem('addId', JSON.stringify(filteredId))

  }




  return (
    <div className="lg:w-[1440px] mx-auto">

      <Header itemCount={itemCount} />

      <TopNav data={data.categoryData} />

      <div className='md:hidden border border-[vw]' />


      <div className='md:flex absolute w-[vw]'>
        <SideNav className="md:flex-none" data={data.categoryData} />
        <Contents className="md:flex-auto" data={data} addItem={addItem} selectedId={selectedId} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} getCount={getCount} getAddedId={getAddedId} />
      </div>

    </div>

  );
}

export default App;
