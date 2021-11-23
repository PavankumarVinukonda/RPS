import Popup from 'reactjs-popup'
import {GrFormClose} from 'react-icons/gr'
import {
  RulesContontainer,
  RulesImage,
  CloseButton,
  RulesButton,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Rules = () => (
  <>
    <Popup
      modal
      trigger={<RulesButton type="button">Rules</RulesButton>}
      className="popupContainer"
    >
      {close => (
        <RulesContontainer>
          <CloseButton onClick={() => close()} type="button">
            <GrFormClose />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContontainer>
      )}
    </Popup>
  </>
)

export default Rules
