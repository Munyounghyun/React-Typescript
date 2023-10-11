import React from 'react'

type StyleProps = {}

const Style: React.FC<StyleProps> = ({}) => {
  return (
    <div>
      <h3>Style</h3>
      <span className="material-icons" style={{color: 'blue'}}>
        home
      </span>
      <span className="material-icons" style={{fontSize: '50px', color: 'red'}}>
        check_circle_outline
      </span>
    </div>
  )
}

export default Style