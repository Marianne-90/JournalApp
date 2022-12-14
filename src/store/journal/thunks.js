import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, uppdateNote, setPhotosToActiveNote, deleteNoteById } from './';
import { loadNotes, fileUpLoad } from '../../helpers';
export const StartNewNote = () => {
  return async(dispatch, getState) => {

    dispatch(savingNewNote());
    
    const { uid } = getState().auth;
    
    const newNote = {
      
      title:'',
      body:'',
      date: new Date().getTime(),
      imageUrls:[],
    }

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ))
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id 

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  
  }
  
}

export const startLoathingNotes = () => {
  return async( dispatch, getState ) => {
    
    const { uid } = getState().auth;
    if( !uid ) throw new Error('The UID dosent exist ');
    
    const notes = await loadNotes( uid );

    dispatch(setNotes(notes));
    
  }
}

export const startSaveNote = () => {
  return async ( dispatch, getState ) => {
    
    dispatch( setSaving() );
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${ note.id }` );

    await setDoc( docRef, noteToFireStore, { merge: true })
    dispatch(uppdateNote(note))
  }
}

export const startUploadingFiles = ( files = [] )=>{
  return async( dispatch )=> {
  dispatch( setSaving() );

  const fileUploadPromises = [];

  for ( const file of files ) {
    fileUploadPromises.push(fileUpLoad( file ))
  };
  const photosUrl = await Promise.all( fileUploadPromises );
  dispatch(setPhotosToActiveNote(photosUrl))
  }
}

export const startDeletingNote = () => {
  return async( dispatch, getState )=> {
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${note.id}`)  
    await deleteDoc( docRef );
    dispatch( deleteNoteById(note.id) );
  }
}