import './index.css'

const GameItem = props => {
  const {choicesList, changeActiveImage} = props

  const clikingImg = choicesList => {
    changeActiveImage(choicesList)
  }

  return (
    <>
      <li key={choicesList[0].id} className="listItem">
        <button data-testid="rockButton" className="buttons" type="button">
          <img
            onClick={clikingImg(choicesList[0])}
            src={choicesList[0].imageUrl}
            alt="rpsImaes"
            className="GameImg"
          />
        </button>
      </li>
      <li key={choicesList[1].id} className="listItem">
        <button data-testid="paperButton" className="buttons" type="button">
          <img
            onClick={clikingImg[choicesList[1]]}
            src={choicesList[1].imageUrl}
            alt="rpsImaes"
            className="GameImg"
          />
        </button>
      </li>
      <li key={choicesList[2].id} className="listItem">
        <button data-testid="scissorsButton" className="buttons" type="button">
          <img
            onClick={clikingImg(choicesList[2])}
            src={choicesList[2].imageUrl}
            alt="rpsImaes"
            className="GameImg"
          />
        </button>
      </li>
    </>
  )
}

export default GameItem
