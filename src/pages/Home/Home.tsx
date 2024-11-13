import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../App.module.scss';

type FormValues = {
  birthdate: string;
};

function calculateLifePathNumber(birthdate: string) {
  // Split the birthdate into components (expects format: YYYY-MM-DD)
  const [year, month, day] = birthdate.split("-").map(Number);

  // Helper function to reduce a number to a single digit or master number
  function reduceToSingleDigit(num: number) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  }

  // Reduce year, month, and day to single digits or master numbers
  const reducedYear = reduceToSingleDigit(year);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedDay = reduceToSingleDigit(day);

  // Calculate the Life Path Number
  const lifePathNumber = reduceToSingleDigit(
    reducedYear + reducedMonth + reducedDay
  );

  return lifePathNumber;
}

// Example usage:
const birthdate = "1992-07-21"; // YYYY-MM-DD format
console.log("Life Path Number:", calculateLifePathNumber(birthdate));


const Home: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const numerology = calculateLifePathNumber(data.birthdate);
    alert(`Your numerology number is ${numerology}`);
  };

  return (
    <div className={styles.home}>
      <h2>Numerology Calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Birthdate:
          <input
            type="date"
            {...register('birthdate', { required: 'Birthdate is required', pattern: /^\d{4}-\d{2}-\d{2}$/ })}
          />
        </label>
        {errors.birthdate && <span className={styles.error}>{errors.birthdate.message}</span>}
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Home;
