import React from 'react'
import Column from '../Column/Column'
import PropTypes from 'prop-types'
import './Board.css'

export default function Board ({ board, click }) {
  return (
    <div className="board_container">
      <div className="board">
        {board._squares.map((col, i) =>
          <Column key={i} click={click} col={col} />
        )}
      </div>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.object,
  click: PropTypes.func,
  pieceType: PropTypes.string
}
