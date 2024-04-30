export const share = async (url: string) => {
  const blob = await fetch(url).then((r) => r.blob());

  const data = {
    files: [
      new File([blob], 'file.png', {
        type: blob.type,
      }),
    ],
    title: 'MY YONSEI NFT',
    text: '',
  };
  try {
    if (!navigator.canShare(data)) {
      throw new Error("Can't share data.");
    }
    await navigator.share(data);
  } catch (err: any) {
    console.error(err.name, err.message);
  }
};

export default share;
