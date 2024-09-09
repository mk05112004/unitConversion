// lenght_unit   
const length_unit = (req,res) => {
  const { value, fromUnit, toUnit } = req.body;
  const lengthUnits = {
      'meters': 1,
      'kilometers': 0.001,
      'feet': 3.28084,
      'miles': 0.000621371
  };

  if (!value || !fromUnit || !toUnit) {
      return res.status(400).send('Invalid input');
  }

  const valueInMeters = value / lengthUnits[fromUnit];
  const convertedValue = valueInMeters * lengthUnits[toUnit];

  res.json({ convertedValue });
}

 const weight_unit = (req,res )=> {
  const { value, fromUnit, toUnit } = req.body;
    const weightUnits = {
        'grams': 1,
        'kilograms': 0.001,
        'pounds': 0.00220462,
        'ounces': 0.035274
    };

    if (!value || !fromUnit || !toUnit) {
        return res.status(400).send('Invalid input');
    }

    const valueInGrams = value / weightUnits[fromUnit];
    const convertedValue = valueInGrams * weightUnits[toUnit];

    res.json({ convertedValue });
 }

 const temperature_unit = (req,res) => {
  const { value, fromUnit, toUnit } = req.body;

  if (!value || !fromUnit || !toUnit) {
      return res.status(400).send('Invalid input');
  }

  let celsiusValue;
  if (fromUnit === 'celsius') {
      celsiusValue = value;
  } else if (fromUnit === 'fahrenheit') {
      celsiusValue = (value - 32) * 5 / 9;
  } else if (fromUnit === 'kelvin') {
      celsiusValue = value - 273.15;
  }

  let convertedValue;
  if (toUnit === 'celsius') {
      convertedValue = celsiusValue;
  } else if (toUnit === 'fahrenheit') {
      convertedValue = celsiusValue * 9 / 5 + 32;
  } else if (toUnit === 'kelvin') {
      convertedValue = celsiusValue + 273.15;
  }

  res.json({ convertedValue });
 }

module.exports =  {
  length_unit,
  weight_unit,
  temperature_unit
}