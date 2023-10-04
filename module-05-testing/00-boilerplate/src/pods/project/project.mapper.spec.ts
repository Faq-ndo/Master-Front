import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import {mapProjectFromApiToVm} from './project.mapper';

describe('mapper spect', () => {
    it('Should map an object Project from API to Project ViewModel', () => {
      // Arrange
      const projectApi: apiModel.Project = {
        id: '1',
        name: 'Test Project',
        externalId: 'testExternalID',
        comments: 'test Project',
        isActive: true,
        employees: [
          {
            id: '101',
            isAssigned: true,
            employeeName: 'test Name'
          }
        ]
      };
  
      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(projectApi);
  
      // Assert
      const expectResult: viewModel.Project = {
        id: '1',
        name: 'Test Project',
        externalId: 'testExternalID',
        comments: 'test Project',
        isActive: true,
        employees: [
          {
            id: '101',
            isAssigned: true,
            employeeName: 'test Name'
          }
        ]
      };
      expect(result).toEqual(expectResult);
    });

    it('Should return an empty Project withh null project', () => {
      //Arrange
      const projectApi = null;
      
      //Act
      const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

      //Arrange
      const emptyProject: viewModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };
      expect(result).toEqual(emptyProject);
    });

    it('Should return an empty Project withh undefined project', () => {
      //Arrange
      const projectApi = undefined;
      
      //Act
      const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

      //Arrange
      const emptyProject: viewModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };
      expect(result).toEqual(emptyProject);
    });
});