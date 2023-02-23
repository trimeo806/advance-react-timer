export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2); //slice(-2) này có phải bỏ đi kí tự có index = -2 không
  const minutes = `${Math.floor(time / 60)}`.slice(-2);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
//Hỏi mentor chỗ này nhen
