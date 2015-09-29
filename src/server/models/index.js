import glob from 'glob';
import { join, parse } from 'path';
import mongoose from 'mongoose';
import { capitalize } from 'inflect';

export default glob.sync(join(__dirname, '*.js'))
  .filter(file => file !== __filename)
  .map(file => mongoose.model(
    capitalize(parse(file).name),
    require(file)
  )
);
