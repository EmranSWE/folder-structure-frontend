import axios from 'axios';
import React, { useState } from 'react';
import './render.css';

const RenderFolder = ({folder}) => {
 
    const [folders, setFolders] = useState([]);
    const [newFolderName, setNewFolderName] = useState('');
    const [newAdd, setNewAdd] = useState('');
    const [isDelete, setIsDelete] = useState('');
  
     // Function to create a new folder
  const handleCreateFolder = async (parentId) => {
    try {
          const folder = { name: newFolderName, parent: parentId };
          const result = await axios.post('https://server-24fh.onrender.com/folders', folder);
          setNewAdd(result.data);
          if(result.data.insertedId){
            setNewAdd('');
          }
        }
      catch (error) {
        console.log(error);
      }   
  };

  // Function to delete a folder
  const handleDeleteFolder = async (folderId) => {
    try {
      const result = await axios.delete(`https://server-24fh.onrender.com/folders/${folderId}`);
      setFolders(result.data);
      if(result.data.deletedCount){
        setIsDelete('')
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelFolder = async (folderId) => {
   return setIsDelete('')
  };
  const handleCancelCreate = async (folderId) => {
    return  setNewAdd('');
   };

   
  

return (   
  <div style={{display:'flex', margin:'20px'}}>
  {folder.name}
  <div>
    <button className='btn' onClick={() => setIsDelete(folder._id)}>X</button>
    <button onClick={() => setNewAdd(folder._id)}>+ New</button>
   

    { isDelete ? <div className='design'><p>{`Do you want To Delete:`}</p> <button className='btn' onClick={() => handleDeleteFolder(folder._id)}>Delete</button> <button onClick={() => handleCancelFolder(folder._id)}>Cancel</button> </div> : <div className='display'></div>}

    { newAdd ? <div className='design'><p>{`Typed folder name:  ${newFolderName}`}</p> <input type='text' required placeholder='Folder Name' value={newFolderName} onChange={(e) => setNewFolderName(e.target.value)} /> <button onClick={() => handleCreateFolder(folder._id)}>Create</button> <button onClick={() => handleCancelCreate(folder._id)}>Cancel</button></div> : <div className='display'></div>}
  </div>   
</div>
    );
};

export default RenderFolder;