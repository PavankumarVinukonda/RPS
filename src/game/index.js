import {Component} from 'react'

import GameItem from '../gameItem'

import Rules from '../Rules'
import './index.css'

import {
  ScoreCardContainer,
  Headings,
  HeadingsContainer,
  ScoreContainer,
  ScoreHeadings,
  RPCContainer,
  RockpaerscisserContainer,
  ImagesCont,
  GameImg,
  ResultHeading,
  PlayAgain,
} from './styledComponets'

const gameStatus = {
  playingGame: 'PLAYING',
  result: 'RESULT',
}

const testIds = [
  {
    testId: 'rockButton',
  },
  {
    testId: 'paperButton',
  },
  {
    testId: 'scissorsButton',
  },
]

const oppoentTuenList = ['ROCK', 'PAPER', 'SCISSORS']
const opponentImgUrlList = [
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
]

class Game extends Component {
  state = {
    activeId: '',
    score: 0,
    gameMode: gameStatus.playingGame,
    opponentTurn: '',
    activeUserImg: '',
    activeOpoentUrl: '',
    resultText: '',
  }

  renderSCoreCard = () => {
    const {score} = this.state
    return (
      <ScoreCardContainer>
        <HeadingsContainer>
          <Headings>Rock Paper Scissors</Headings>
        </HeadingsContainer>
        <ScoreContainer>
          <ScoreHeadings>Score</ScoreHeadings>
          <ScoreHeadings>{score}</ScoreHeadings>
        </ScoreContainer>
      </ScoreCardContainer>
    )
  }

  changeActiveImage = (id, imageUrl) => {
    const {
      activeId,
      score,
      resultText,
      opponentTurn,
      activeUserImg,
      activeOpoentUrl,
      gameMode,
    } = this.state
    this.setState({
      gameMode: gameStatus.result,
    })
    this.setState({
      activeId: id,
    })
    console.log(activeId)
    this.setState({
      activeUserImg: imageUrl,
    })

    const activeOponentTurnid = Math.floor(Math.random() * 3)

    this.setState({
      opponentTurn: oppoentTuenList[activeOponentTurnid],
    })
    console.log(opponentTurn)
    this.setState({
      activeOpoentUrl: opponentImgUrlList[activeOponentTurnid],
    })

    if (activeId === 'ROCK' && opponentTurn === 'SCISSORS') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'ROCK' && opponentTurn === 'PAPER') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else if (activeId === 'SCISSORS' && opponentTurn === 'PAPER') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'SCISSORS' && opponentTurn === 'ROCK') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else if (activeId === 'PAPER' && opponentTurn === 'ROCK') {
      this.setState(prvState => ({
        score: prvState.score + 1,
      }))
      this.setState({
        resultText: 'YOU WON',
      })
    } else if (activeId === 'PAPER' && opponentTurn === 'SCISSORS') {
      this.setState(prvState => ({
        score: prvState.score - 1,
      }))
      this.setState({
        resultText: 'YOU LOSE',
      })
    } else {
      this.setState({
        resultText: 'DRAW',
      })
    }
  }

  onClickingThePlayAgain = () => {
    const {gameMode} = this.state
    this.setState({
      gameMode: gameStatus.playingGame,
    })
  }

  renderRockAndPaper = props => {
    const {activeOpoentUrl, activeUserImg, score, resultText} = this.state
    const {choicesList} = this.props

    return (
      <RockpaerscisserContainer>
        <ImagesCont>
          <GameImg src={activeUserImg} />
          <GameImg src={activeOpoentUrl} />
        </ImagesCont>
        <ResultHeading>{resultText}</ResultHeading>
        <PlayAgain type="button" onClick={this.onClickingThePlayAgain}>
          Play Again
        </PlayAgain>
      </RockpaerscisserContainer>
    )
  }

  renderRockPaerSizerContainer = props => {
    const {choicesList} = this.props
    return (
      <RPCContainer>
        <GameItem choicesList={choicesList} />
      </RPCContainer>
    )
  }

  renderSwitchCondition = () => {
    const {gameMode} = this.state
    switch (gameMode) {
      case gameStatus.playingGame:
        return this.renderRockPaerSizerContainer()
      case gameStatus.result:
        return this.renderRockAndPaper()
      default:
        return null
    }
  }

  render() {
    const {gameMode} = this.state
    return (
      <div className="main-container">
        {this.renderSCoreCard()}
        {this.renderSwitchCondition()}
        <Rules className="rulesComponent" />
      </div>
    )
  }
}

export default Game
