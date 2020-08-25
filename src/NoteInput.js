import React from 'react'

export default class NoteInput extends React.Component{
    state={
        note: ''
    }
    render(){
    return(
        <form onSubmit={(e) => {e.preventDefault()
            this.props.submitHandler(this.state.note)}}>
            <input type="text" name="note" placeholder="hi" value={this.state.note} onChange={e => this.setState({[e.target.name]: e.target.value})}/>
            <input type="submit"/>
        </form>
    )}
}