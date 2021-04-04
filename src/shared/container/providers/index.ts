import { container } from 'tsyringe';

import IStorageProvider from './StoragePovider/models/IStorageProvider';
import DiskStorageProvider from './StoragePovider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
