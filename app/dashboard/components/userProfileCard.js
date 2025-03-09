import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, IconButton, Avatar, Button, List, ListItem, ListItemText  } from '@mui/material';
import {
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';
import FileUploadOptions from './FileUploadOptions';
import ViewProfileModal from './ViewProfileModal';

const UserProfileCard = () => {
  const [showFileUploadOptions, setShowFileUploadOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState("/path-to-your-image.jpg");
  const [hasStory, setHasStory] = useState(false);
  const [uploadOptionsLabels, setUploadOptionsLabels] = useState(['Profile Picture', 'Your Story']);
  const [viewType, setViewType] = useState(null);
  const [showViewOptions, setShowViewOptions] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleUploadClick = () => {
    setShowFileUploadOptions(true);
  };

  const handleCancelUpload = () => {
    setShowFileUploadOptions(false);
  };

  const handleFileSelect = (file, uploadType) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      setSelectedFile(file);

      if (uploadType === 'profile picture') {
        setAvatarSrc(dataUrl);
      } else if (uploadType === 'your story') {
        setHasStory(true);
      }

      setShowFileUploadOptions(false);
      // Handle file upload logic here
      console.log('Selected File:', file);
      console.log('Upload Type:', uploadType);
    };

    reader.readAsDataURL(file);
  };



  const handleViewOptionsClick = () => {

    console.log("View Modal Clicked")
    setShowViewOptions(!showViewOptions);
  };

  const handleViewProfileClick = () => {
    setViewModalOpen(true);
    setShowViewOptions(false);
    setViewType('profile');
  };

  const handleViewStoryClick = () => {
    setViewModalOpen(true);
    setShowViewOptions(false);
    setViewType('story');
  };

  const handleCloseViewModal = () => {
    setViewModalOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      const isInsideViewOptions = event.target.closest('#viewOptions');
      if (!isInsideViewOptions) {
        setViewModalOpen(false);
        setShowViewOptions(false);
      }
    };
  
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);
  

  return (
    <Card sx={{ textAlign: 'center' }}>
    <CardContent>
    <div style={{ position: 'relative', marginBottom: 2 }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {hasStory && (
          <div
            onClick={handleViewOptionsClick}
            style={{
              position: 'relative',
              margin: 'auto',
              display: 'inline-block',
              borderRadius: '50%',
              width: '110px',
              height: '110px',
              backgroundColor: 'white',
              border: '3px solid #0d47a1',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
          >
            <Avatar alt="Profile Picture" src={avatarSrc} sx={{ width: '100%', height: '100%' }} />
          </div>
        )}
        {!hasStory && (
          <Avatar
            alt="Profile Picture"
            src={avatarSrc}
            sx={{
              width: '110px',
              height: '110px',
              margin: 'auto',
              cursor: 'pointer',
            }}
            onClick={handleViewOptionsClick}
          />
        )}
        <IconButton
          onClick={handleUploadClick}
          sx={{
            position: 'absolute',
            bottom: '5%',
            right: '0%', 
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          <PhotoCameraIcon />
        </IconButton>
      </div>

      {showFileUploadOptions && (
        <FileUploadOptions
          onSelectFile={(file, label) => handleFileSelect(file, label.toLowerCase())}
          onCancel={handleCancelUpload}
          labels={uploadOptionsLabels}
        />
      )}
      {showViewOptions && (
        <List
          id="viewOptions"  
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <ListItem
            onClick={handleViewProfileClick}
            sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#e0e0e0' } }}
          >
            <ListItemText primary="View Profile" />
          </ListItem>
          <ListItem
            onClick={handleViewStoryClick}
            sx={{ cursor: 'pointer', '&:hover': { backgroundColor: '#e0e0e0' } }}
          >
            <ListItemText primary="View Story" />
          </ListItem>
        </List>
      )}
      <ViewProfileModal
        isOpen={viewModalOpen}
        onClose={handleCloseViewModal}
        profilePictureSrc={avatarSrc}
        storySrc={avatarSrc}
        viewType={viewType}
      />
      </div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        Kevin Anderson
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
        Web Developer
      </Typography>
      {/* Social media icons in a single line */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://twitter.com/" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon />
        </IconButton>
      </div>
    </CardContent>
  </Card>
  );
};

export default UserProfileCard;
