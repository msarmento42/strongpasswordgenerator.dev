export interface StorageCleanupTarget {
  removeItem(key: string): void;
}

export function removeLegacyPasswordHistory(storage: StorageCleanupTarget): void {
  storage.removeItem('passwordHistory');
}
