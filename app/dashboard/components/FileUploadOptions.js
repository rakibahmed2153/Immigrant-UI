import React, { useRef, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const FileUploadOptions = ({ onSelectFile, onCancel, labels }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event, uploadType) => {
    const selectedFile = event.target.files[0];
    onSelectFile(selectedFile, uploadType);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      const isInsideOptions = event.target.closest('#fileUploadOptions');
      if (!isInsideOptions) {
        onCancel();
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onCancel]);

  return (
    <List id="fileUploadOptions" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}>
      {labels.map((label, index) => (
        <ListItem key={index} sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#e0e0e0' } }}>
          <label htmlFor={`fileInput${index}`} style={{ width: '100%' }}>
            <input
              ref={fileInputRef}
              id={`fileInput${index}`}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(event) => handleFileChange(event, label.toLowerCase())}
            />
            <ListItemText primary={`Upload ${label}`} />
          </label>
        </ListItem>
      ))}
    </List>
  );
};

export default FileUploadOptions;
