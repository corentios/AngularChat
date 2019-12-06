import { TestBed } from '@angular/core/testing';

import { Channel } from './channel';

describe('ChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Channel = TestBed.get(Channel);
    expect(service).toBeTruthy();
  });
});
