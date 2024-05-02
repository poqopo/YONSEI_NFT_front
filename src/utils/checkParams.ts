export default function checkAddress(address: string | undefined) {
  if (address === undefined || address === '' || address.length !== 42) {
    window.location.href = 'https://myyonseinft.com/';
    return false;
  }
  return true;
}
