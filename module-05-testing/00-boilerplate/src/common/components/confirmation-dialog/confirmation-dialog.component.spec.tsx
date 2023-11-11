import React from 'react';
import {render, screen} from '@testing-library/react';
import {ConfirmationDialogComponent} from './confirmation-dialog.component'

describe('Confirmation Dialog specs', () => {
    //Arrange
    const onAccept = jest.fn();
    const onClose = jest.fn();

    const props = {
        isOpen: true,
        onAccept: onAccept,
        onClose: onClose,
        title: 'Test Dialog',
        labels: {
          closeButton: 'close',
          acceptButton: 'accept',
        },
        children: 'Dialog Conten',
      };

      afterEach(() => {
        jest.clearAllMocks();
      });

    it('Should render the component with the given props', () => {
      //Act
      render(<ConfirmationDialogComponent {...props}/>);
      //Assert
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
      expect(screen.getByText('Dialog Conten')).toBeInTheDocument();
      expect(screen.getByText('close')).toBeInTheDocument();
      expect(screen.getByText('accept')).toBeInTheDocument();
    })

    it('Should calls accept and close when the buttons is clicked', () => {
      //Act
      render(<ConfirmationDialogComponent {...props} />);
      const acceptButton = screen.getByText('accept');
      acceptButton.click();

      //Assert
      expect(onAccept).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalled();
    });

    it('Should call onClose when the close button is clicked', () => {
      //Act
      render(<ConfirmationDialogComponent {...props} />);
      const closeButton = screen.getByText('close');
      closeButton.click();
      
      //Asserts
      expect(onClose).toHaveBeenCalled();
    });
});