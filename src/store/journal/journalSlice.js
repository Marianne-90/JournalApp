import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving:false,
       messageSaved: '',
       notes: [],
       active: null,
    },
    reducers: {
        savingNewNote: (state, action) =>{
          
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action ) => {
          state.active = action.payload;
        },
        
        setNotes: (state, action ) => {
          
        },
      
        setSaving: (state, action ) => {
          
        },
         uppDateNote: (state, action ) => {
          
        },
       deleteNoteById: (state, action ) => {
          
        },
      
    }
});

export const { addNewEmptyNote, 
              setActiveNote, 
              setNotes, 
              setSaving, 
              uppDateNote, 
              deleteNoteById,
              savingNewNote
             } = journalSlice.actions;
