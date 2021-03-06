import React from 'react'
import { Button, Header, Icon, Input, Segment } from 'semantic-ui-react'
import useTranslation from '../locales'

const DesktopCalculator = ({ onMinus, onPlus, onDivide, onReset, onSet }) => {
  const { t } = useTranslation('Game')
  const [value, setValue] = React.useState(0)
  const plus = (player) => {
    return () => {
      onPlus && onPlus(player, value)
      clearCalc()
    }
  }
  const minus = (player) => {
    return () => {
      onMinus && onMinus(player, value)
      clearCalc()
    }
  }
  const divideBy = (player) => {
    return () => {
      onDivide && onDivide(player, value || 2)
      clearCalc()
    }
  }
  const setLP = (player) => {
    return () => {
      onSet && onSet(player, value)
      clearCalc()
    }
  }
  const handleInput = (input) => {
    const filteredInput = input.replace(/[^0-9]/g, '').replace(/^0/, '')
    setValue(filteredInput ? parseInt(filteredInput, 10) : 0)
  }
  const resetLPs = () => {
    onReset && onReset()
    clearCalc()
  }
  const clearCalc = () => {
    setValue(0)
  }

  return <Segment textAlign='center'>
    <Input iconPosition='left' value={value} onChange={(e) => handleInput(e.target.value)}>
      <Icon name='calculator' />
      <input />
    </Input>

    <Header size='small'>{t('player', { count: 1 })}</Header>
    <div>
      <Button onClick={minus(0)} size='tiny' icon='minus' color='red' content={t('actionSubtract')} />
      <Button onClick={plus(0)} size='tiny' icon='plus' color='green' content={t('actionAdd')} />
      <Button onClick={divideBy(0)} size='tiny' icon='percent' color='orange' content={t('actionDivide')} />
      <Button onClick={setLP(0)} size='tiny' icon='share' color='grey' content={t('actionSet')} />
    </div>

    <Header size='small'>{t('player', { count: 2 })}</Header>
    <div>
      <Button onClick={minus(1)} size='tiny' icon='minus' color='red' content={t('actionSubtract')} />
      <Button onClick={plus(1)} size='tiny' icon='plus' color='green' content={t('actionAdd')} />
      <Button onClick={divideBy(1)} size='tiny' icon='percent' color='orange' content={t('actionDivide')} />
      <Button onClick={setLP(1)} size='tiny' icon='share' color='grey' content={t('actionSet')} />
    </div>

    <Header size='small'>{t('globalActions')}</Header>

    <div>
      <Button onClick={resetLPs} size='tiny' icon='eraser' content={t('actionClean')} />
    </div>
  </Segment>
}

export default DesktopCalculator;
