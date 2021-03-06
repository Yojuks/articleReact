import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>{comment.user}</b></p>
        </div>
    )
}

Comment.PropTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}