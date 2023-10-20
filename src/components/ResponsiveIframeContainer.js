import React from 'react';

function ResponsiveIframeContainer({ driveID, title }) {
  const src = `https://drive.google.com/file/d/${driveID}/preview`
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframeContainer;
