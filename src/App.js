import React from 'react';
import { connect } from 'react-redux';
import {
  onNumClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from './redux/actions';
import Button from './components/Button';
import Result from './components/Result';
import './App.scss';

const App = (props) => {
  const {
    calculator,
    onNumClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;
  return (
    <React.Fragment>
      <div className='result'>
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </div>
      <div className='button-wrapper'>
        <div className='number'>
          <div className='upper'>
            <Button text={'7'} onClick={() => onNumClick(7)} />
            <Button text={'8'} onClick={() => onNumClick(8)} />
            <Button text={'9'} onClick={() => onNumClick(9)} />
          </div>
          <div className='middle'>
            <Button text={'4'} onClick={() => onNumClick(4)} />
            <Button text={'5'} onClick={() => onNumClick(5)} />
            <Button text={'6'} onClick={() => onNumClick(6)} />
          </div>
          <div className='lower'>
            <Button text={'1'} onClick={() => onNumClick(1)} />
            <Button text={'2'} onClick={() => onNumClick(2)} />
            <Button text={'3'} onClick={() => onNumClick(3)} />
          </div>
          <div className='bottom'>
            <Button text={'0'} onClick={() => onNumClick(0)} />
            <Button text={'AC'} onClick={() => onClearClick()} />
            <Button text={'='} onClick={() => onEqualClick()} />
          </div>
        </div>
        <div className='operator'>
          <Button text={'÷'} onClick={() => onDivideClick()} />
          <Button text={'×'} onClick={() => onMultiplyClick()} />
          <Button text={'-'} onClick={() => onMinusClick()} />
          <Button text={'+'} onClick={() => onPlusClick()} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToProps, {
  onNumClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(App);
