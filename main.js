import { sleep } from './sleep.js';
import { random } from './random.js';
import { Person } from './person.js';

(async () => {
    const person = new Person('Javohir Yunusov', 1997);

    const delay = random();
    console.log(`Kuting... ${delay} millisekund`);

    await sleep(delay);

    console.log(person.getInfo());
})();``