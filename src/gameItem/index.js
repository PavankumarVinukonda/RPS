import './index.css'

const GameItem = props => {
  const {gameDetails, changeActiveImage, testIds} = props
  const {id, imageUrl} = gameDetails
  const clikingImg = () => {
    changeActiveImage(id, imageUrl)
  }

  return (
    <li className="listItem">
      <button className="buttons" type="button">
        <img
          onClick={clikingImg}
          src={imageUrl}
          alt="rpsImaes"
          className="GameImg"
        />
      </button>
    </li>
  )
}

export default GameItem
