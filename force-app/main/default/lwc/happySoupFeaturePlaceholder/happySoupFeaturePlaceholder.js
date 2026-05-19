import { LightningElement, api } from 'lwc';

export default class HappySoupFeaturePlaceholder extends LightningElement {
    @api title;
    @api description;
    @api nextStep;
}
