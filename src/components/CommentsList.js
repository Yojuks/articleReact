import React from 'react'
import Comment from './Comment'

 class CommentsList extends React.Component {

        state = {
            isOpen: true
        };
  

    render() {
       const text = this.state.isOpen ? 'hide comments' : 'show comments'

      return (<div>
                <button onClick={this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>);
    }

    getBody () {
        if (!this.state.isOpen) return null
        const {comments} = this.props
        if (!comments || !comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
 }

    export default CommentsList

    // onClickHandler = (ev) => {
    //     ev.preventDefault();
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // };

 

    // getComments(){
    //     if (this.state.isOpen) {
    //         const commentElements = this.props.comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>);
    //         return  (<div>
    //             <h4>Comments ({this.props.comments.length})</h4>
    //             <ul>{commentElements}</ul>
    //         </div>);
    //     } else {
    //         return  null;
    //     }
    // }

    // getBtnText(){
    //     return this.state.isOpen ? 'hide comments' : 'show comments';
    // }
