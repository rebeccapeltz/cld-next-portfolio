export default function UploadWidgetButton({ func }) {
 

  return (
    <div>
      <button
        id='upload-widget'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={func}
      >
        Button
      </button>
    </div>
  );
}


