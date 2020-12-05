import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }
    
    render() {
        const {article, isOpen} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.props.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return ( 
            <section>
                {article.text} 
                <CommentsList comments = {article.comments}/>
            </section>
        )
    }
}

export default toggleOpen(Article)