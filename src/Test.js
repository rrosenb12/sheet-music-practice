import Vex from 'vexflow'

const VF = Vex.Flow

let div = document.createElement('div')
div.id = 'div'
let renderer = new VF.Renderer(div, 3)
renderer.resize(500, 500)
let context = renderer.getContext()
let stave = new VF.Stave(10, 40, 400)
stave.addClef("treble").addTimeSignature("4/4");
stave.setContext(context).draw();

let notes = [
    new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
  
    new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
  
    new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),
  
    new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
];

notes[0].setStyle({fillStyle: 'purple'})
notes[0].className = 'hello'

var notes2 = [
    new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "w" })
  ];

  var voices = [
	new VF.Voice({num_beats: 4,  beat_value: 4}).addTickables(notes),
    new VF.Voice({num_beats: 4,  beat_value: 4}).addTickables(notes2)]
    

new VF.Formatter().joinVoices(voices).format(voices, 200);

voices.forEach(function(v) { v.draw(context, stave); })

document.body.appendChild(div)

div.className = 'test'