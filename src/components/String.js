import React from 'react';
import Fret from './Fret';
import './String.css';

function String({
  openNote,
  updateTuning,
  string,
  flattenPitch,
  useFlats,
  focusedNote,
  highlightNotes,
}) {
  const fretNums = 13;
  const notesArrayFlat = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const notesArraySharp = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];
  const notesArray = useFlats ? notesArrayFlat : notesArraySharp;
  let note = openNote;
  let openNoteIndex;

  return (
    <div className="string">
      {[...Array(fretNums)].map((val, index) => {
        // Open Note
        if (index === 0) {
          // Find position of note when switching between accidental types
          note.includes('#')
            ? (openNoteIndex = notesArraySharp.indexOf(note))
            : (openNoteIndex = notesArrayFlat.indexOf(note));

          note = notesArray[openNoteIndex];
        }

        if (index !== 0) {
          const noteIndex = notesArray.indexOf(note);
          note = notesArray[(noteIndex + 1) % notesArray.length];
        }

        return (
          <Fret
            note={note}
            index={index}
            key={index}
            string={string}
            updateTuning={updateTuning}
            notesArray={notesArray}
            flattenPitch={flattenPitch}
            focusedNote={focusedNote}
            highlightNotes={highlightNotes}
          />
        );
      })}
    </div>
  );
}

export default String;
