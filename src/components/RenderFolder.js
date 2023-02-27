import axios from 'axios';
import React, { useState } from 'react';
import './render.css'
const RenderFolder = ({folder}) => {
    console.log(folder)
    const [folders, setFolders] = useState([]);
     // Function to create a new folder
  const handleCreateFolder = async (parentId) => {
    try {
      const folder = { name: 'New Folder', parent: parentId };
      const result = await axios.post('http://localhost:5000/folders', folder);
      setFolders([...folders,result.data]);
      console.log(result.data)
    } catch (error) {
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

    return (
        <>
        <li className='li' key = {folder._id}>
        {folder.name}
        <button onClick={() => handleCreateFolder(folder._id)}>Create Subfolder Folder</button>
        <button className='btn' onClick={() => handleDeleteFolder(folder._id)}>Delete Folder</button>
      </li>
        </>
    );
};

export default RenderFolder;