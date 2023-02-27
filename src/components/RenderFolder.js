import axios from 'axios';
import React, { useState } from 'react';
import './render.css';

const RenderFolder = ({folder}) => {
 
    const [folders, setFolders] = useState([]);
    const [newFolderName, setNewFolderName] = useState('');
    const [newAdd, setNewAdd] = useState('');
    console.log(newAdd)
     // Function to create a new folder
  const handleCreateFolder = async (parentId) => {
    try {
  
       
          const folder = { name: newFolderName, parent: parentId };
          const result = await axios.post('http://localhost:5000/folders', folder);
          setNewAdd(result.data);
          console.log(result.data)
        
        }
      
      catch (error) {
        console.log(error);
      }
     
    
  };

  // Function to delete a folder
  const handleDeleteFolder = async (folderId) => {
    console.log(folderId)
    try {
      const result = await axios.delete(`http://localhost:5000/folders/${folderId}`);
      setFolders(result.data);
    } catch (error) {
      console.log(error);
    }
  };

   // Function to render child folders
  //  const renderChildFolders = () => {
  //   if (folder && folder> 0) {
  //     console.log(folder)
  //     return (
  //       <ul>
  //         {folder.parent.map(childFolder => (
  //           <RenderFolder key={childFolder._id} folder={childFolder} />
  //         ))}
  //       </ul>
  //     );
  //   }
  //   return null;
  // }

return (   
        <div style={{display:'flex'}}>
        <h3>{folder.name}</h3>
        <div className='div1'>
        { newAdd ? <div className='design'><p>{`Please add Folder name `}</p> <input type='text' value={newFolderName} onChange={(e) => setNewFolderName(e.target.value)} /> <button onClick={() => handleCreateFolder(folder._id)}>New</button></div> : <div className='displayy'></div>}
        <button onClick={() => setNewAdd(folder._id)}>New</button>
        <button className='btn' onClick={() => handleDeleteFolder(folder._id)}>Delete</button>
        </div>
        
        
        
       
        
      </div>
      
    );
};

export default RenderFolder;