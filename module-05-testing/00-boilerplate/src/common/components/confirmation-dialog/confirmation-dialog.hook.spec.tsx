import { renderHook, act } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook"
import { createEmptyLookup, Lookup } from 'common/models';


describe('common/components/confirmation-dialog/confirmation-dialog.hook specs', () => {
    it('Should init state', () => {
        const { result } = renderHook(() => useConfirmationDialog());
    
        expect(result.current.isOpen).toBe(false);
        expect(result.current.itemToDelete).toEqual(createEmptyLookup());
      });
      
    it('Should open dialog and set state on onOpenDIalog', () => {
        // Arrange
        const { result } = renderHook(() => useConfirmationDialog());
        const itemToOpen: Lookup = { id: '1', name: 'test' };
        //Act
        act(() => {
          result.current.onOpenDialog(itemToOpen);
        });
        //Assert
        expect(result.current.isOpen).toBe(true);
        expect(result.current.itemToDelete).toEqual(itemToOpen);
    });

    it('Should close dialog and reset state', () => {
        //Arrange
        const { result } = renderHook(() => useConfirmationDialog());
        const itemToOpen: Lookup = { id: '1', name: 'test' };
        //Act
        act(() => {
          result.current.onOpenDialog(itemToOpen);
          result.current.onClose();
        });
        //Assert
        expect(result.current.isOpen).toBe(false);
        expect(result.current.itemToDelete).toEqual(createEmptyLookup());
      });
  });