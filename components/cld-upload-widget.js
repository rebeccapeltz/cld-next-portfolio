import React, { useState } from 'react';

function UploadWidget() {
  return (
    <div>
      <h3>Using an unsigned preset that posts to a webhook</h3>
      <div>
        <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Button
        </button>
      </div>
      <div>
        <img id='uploaded' />
      </div>
    </div>
  );
}

export default UploadWidget;
