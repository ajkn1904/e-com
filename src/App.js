import { useContext } from 'react';
import './App.css';
import Contents from './Components/Contents/Contents';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import TopNav from './Components/TopNav/TopNav';
import { ProductDataContext } from './Components/Context/DataContext';


function App() {
  const data = useContext(ProductDataContext);
  console.log(data)


  return (
    <div className="lg:w-[1440px] mx-auto">
     
      <Header />
      
      <TopNav data={data.categoryData}/>
      
      <div className='flex'>
        <SideNav className="" data={data.categoryData}/>
        <Contents className="" data={data.productData}/>
      </div>

    </div>

  );
}

export default App;
