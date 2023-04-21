import { useState } from "react";

const AdressSettings = ({user, updateUser}) => {
    const [userData, setUserData] = useState(user);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      const newUserData = { ...userData, [name]: value };
      setUserData(newUserData);
      updateUser(newUserData);
    };
  
    return (
      <div style={{borderRadius: "10px", minWidth: "800px"}} className="ml-10 bg-stone-200 flex flex-col gap-8 pt-8 pb-8 px-10 shadow-xl">
    
        <h2 className="text-2xl font-bold mb-2">Adress Settings</h2>
    
        <div className="flex flex-row flex-wrap gap-24">

          <div className="flex flex-col gap-2" style={{width: "300px"}}>
            <label htmlFor="adress">Adress:</label>
            <input 
               className={`
                pl-2 py-1 bg-stone-200 border-b-2 
                ${userData.adress ? 'border-gray-300 hover:border-stone-400' : 
                'border-red-500'} focus:border-black focus:outline-none transition`}
              type="text" 
              name="adress" 
              value={userData.adress} 
              onChange={handleChange} 
            />
          </div>

          <div className="flex flex-col gap-2" style={{width: "300px"}}>
            <label htmlFor="country">Country:</label>
            <input 
               className={`
                pl-2 py-1 bg-stone-200 border-b-2 
                ${userData.country ? 'border-gray-300 hover:border-stone-400' : 
                'border-red-500'} focus:border-black focus:outline-none transition`}
              type="text" 
              name="country" 
              value={userData.country} 
              onChange={handleChange} 
            />
          </div>
          
        </div>

        <div className="flex flex-col gap-2" style={{width: "300px"}}>
            <label htmlFor="location">Location:</label>
            <input 
               className={`
                pl-2 py-1 bg-stone-200 border-b-2 
                ${userData.location ? 'border-gray-300 hover:border-stone-400' : 
                'border-red-500'} focus:border-black focus:outline-none transition`}
              type="text" 
              name="location" 
              value={userData.location} 
              onChange={handleChange} 
            />
          </div>

    
      </div>
    );
    
  };
  

export default AdressSettings