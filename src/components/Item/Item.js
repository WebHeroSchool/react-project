import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;

    return (<div className={styles.wrap}>
      <Checkbox
        color="default"
        onClick={() => onClickDone(id)}
      />
      <span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
      }> 
      {value}
      </span>
      <IconButton
        className={styles.button}
        aria-label="delete"
      >
        <DeleteIcon
          onClick = {() => onClickDelete(id)}
        />
      </IconButton>
    </div>)
  }
};

export default Item;
