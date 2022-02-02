import "./styles.css";

const calc = (function (val) {
  return {
    plus: function (target) {
      const newVal = val + target;
      console.log(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
    minus: function (target) {
      const newVal = val - target;
      console.log(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function (target) {
      const newVal = val * target;
      console.log(`${val} × ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function (target) {
      const newVal = val / target;
      console.log(`${val} ÷ ${target} = ${newVal}`);
      val = newVal;
    }
  };
})(2000);

// const calc = calcFactory(10);
calc.plus(5);
calc.minus(7);
calc.multiply(8);
calc.divide(4);
