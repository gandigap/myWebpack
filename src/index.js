import './styles/index.scss';
import App from './app';

const exampleData = {
  typeID: 2,
  typeInfo: 'example',
}

const exampleData2 = {
  ...exampleData,
  typeClass: 'string',
  typeMode: true,
}


console.log(exampleData);
console.log(exampleData2);

new App();