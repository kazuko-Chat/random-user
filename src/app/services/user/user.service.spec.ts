import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import { UserServiceMock } from './user.service.mock';
import { DataService } from 'src/app/services/data/data.service';
import { DataServiceMock } from 'src/app/services/data/data.service.mock';

describe('UserService', () => {
  let userService: UserService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: DataService, useClass: DataServiceMock },
      ]
    });
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    dataService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  xit('when getUsers is called with page number, should compose the url and call "get" from dataService', () => {
    const page = 1;
    const url = `page=${page}`;

    spyOn(dataService, 'get');
    userService.getUsers(1);
    expect(dataService.get).toHaveBeenCalledWith(url);
  });
});
