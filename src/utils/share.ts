export default async function shareImage(
  url: string,
  address: string | undefined,
) {
  const response = await fetch(url);
  const blob = await response.blob();
  const filesArray = [
    new File([blob], `NFT.${address}.png`, {
      type: 'image/png',
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
}
