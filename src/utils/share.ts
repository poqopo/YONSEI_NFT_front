import html2canvas from 'html2canvas';

export async function captureAndShare() {
  const element = document.getElementById('nftcapture');

  if (element) {
    // Create the screenshot using html2canvas with the useCORS option
    const canvas = await html2canvas(element, {
      useCORS: true, // Allow cross-origin images if they have appropriate CORS headers
      backgroundColor: '#88D0E5', // Set to `null` to preserve transparency
    });

    // Convert the canvas to a Blob object
    canvas.toBlob(async (blob) => {
      if (!blob) {
        alert('Unable to capture and share the image.');
        return;
      }

      // Create a new file from the Blob
      const file = new File([blob], 'capture.png', { type: 'image/png' });

      // Check for Web Share API support
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
          });
        } catch (error) {
          console.error('Error sharing:', error);
          alert('Unable to share the image.');
        }
      } else {
        alert('Sharing not supported on this browser.');
      }
    }, 'image/png');
  } else {
    alert('Could not find the element to capture.');
  }
}
export default captureAndShare;
