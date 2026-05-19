import { LightningElement, api } from 'lwc';

export default class HappySoupStatusPanel extends LightningElement {
    @api state = 'empty';
    @api title = 'Status';
    @api message = '';

    get isLoading() {
        return this.state === 'loading';
    }

    get isError() {
        return this.state === 'error';
    }
}
