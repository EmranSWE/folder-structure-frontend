import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './folderTree.css';
import RenderFolder from './RenderFolder';


const FolderTreeView = () => { 
  const [folders, setFolders] = useState([]);
   console.log(folders)
  // Fetch folders data from backend API on component mount
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/folders');
      setFolders(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Folder Structure</h1>
      
      {folders.map((folder) => <RenderFolder key={folder._id} folder={folder}> </RenderFolder>)}
    </div>
  );
};

export default FolderTreeView;