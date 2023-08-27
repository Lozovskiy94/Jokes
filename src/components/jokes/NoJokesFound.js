import styles from './NoJokesFound.module.css';
import {Link} from 'react-router-dom'

const NoJokesFound = () => {
  return (
    <div className={styles['no-jokes']}>
      <p>No jokes found!</p>
      <Link className='btn' to='/add-joke'>Add a Joke</Link>
    </div>
  );
};

export default NoJokesFound;
