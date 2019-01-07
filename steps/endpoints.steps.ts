import { Given, When, Then } from 'cucumber';
import { get, post, expect } from 'chakram-cucumber';
import { environment, endpoints } from '../config';


let apiResponse: object;

Given('a httpbin.org', () => {
    apiResponse = get(environment);
    return expect(apiResponse).to.have.status(200);
});

When('I send GET request', () => {
    apiResponse = get(environment + endpoints.get);
    return apiResponse;
});

When('I send POST request', () => {
    apiResponse = post(environment + endpoints.post, {});
    return apiResponse;
});

Then('the status code should be {int} OK', (statusCode: number) => {
    return expect(apiResponse).to.have.status(statusCode);
});

Then('the response time should be less than {int} ms', (responseTime: number) => {
    return expect(apiResponse).to.have.responsetime(responseTime);
});