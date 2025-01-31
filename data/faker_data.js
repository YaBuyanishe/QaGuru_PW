import {faker} from "@faker-js/faker";

const USERNAME = faker.internet.username();
const EMAIL = faker.internet.email();
const PASSWORD = faker.internet.password();

export {USERNAME, EMAIL, PASSWORD};