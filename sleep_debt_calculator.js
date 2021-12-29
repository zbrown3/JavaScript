const getSleepHours = (day) => {
    switch (day) {
      case 'Monday':
        return 7;
        break;
      case 'Tuesday':
        return 6;
        break;
      case 'Wednesday':
        return 8;
        break;
      case 'Thursday':
        return 9;
        break;
      case 'Friday':
        return 4;
        break;
      case 'Saturday':
        return 5;
        break;
      case 'Sunday':
        return 10;
        break;
      default:
        return 'Please enter a proper day';
        break;
    }
  };
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      let sleepDebt = actualSleepHours - idealSleepHours;
      console.log(`You slept an extra ${sleepDebt} hours this week over your ideal hours.`);
    } else {
      let sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You need to sleep ${sleepDebt} more hours a week to achieve ideal rest.`);
    }
  };
  calculateSleepDebt();