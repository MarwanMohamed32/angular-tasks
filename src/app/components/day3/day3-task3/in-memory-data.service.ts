import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Item One' },
      { id: 2, name: 'Item Two' },
      { id: 3, name: 'Item Three' },
    ];
    return { items };
  }
}
