export function normalizeEthereumAddress(address: string): string {
  return '0x' + address.slice(-40);
}
