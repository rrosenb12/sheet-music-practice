import Vex from 'vexflow'
import React from 'react'

const VF = Vex.Flow


class Test extends React.Component {

    componentDidMount(){
        let div = document.createElement('div')
        div.id = 'div'
        let renderer = new VF.Renderer(div, 3)
        renderer.resize(500, 200)
        let context = renderer.getContext()
        let stave = new VF.Stave(10, 40, 400)
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        if (this.props.note) {
            let keys = this.props.note

            let note = new VF.StaveNote({clef: "treble", keys: `${keys}/4`, duration: "q" })

            var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).addTickables(note)

            new VF.Formatter().joinVoices([voice]).format([voice], 150);

            voice.draw(context, stave)}

        this.refs.outer.appendChild(div)
    }

render(){
    console.log(this.props.note)
    return(
        <div ref="outer"></div>
    )
}

// document.body.appendChild(div)

// div.className = 'test'

// document.addEventListener('click', e => {
//     if (e.target.parentNode.className.baseVal === 'vf-notehead') {
//     console.log("hello")
// }
}

export default Test