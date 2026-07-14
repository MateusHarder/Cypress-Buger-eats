// import { faker } from '@faker-js/faker';

// faker.locale = 'pt_BR';
import 'allure-cypress'
import { greppedTestToggle, addGrepButtons } from 'cypress-plugin-grep-boxes';
import registerCypressGrep from '@bahmutov/cy-grep/src/support';

registerCypressGrep();

greppedTestToggle();
addGrepButtons();

import './commands'
import 'cypress-file-upload'


