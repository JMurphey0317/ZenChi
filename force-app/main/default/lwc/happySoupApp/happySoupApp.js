import { LightningElement } from 'lwc';

export default class HappySoupApp extends LightningElement {
    activeTab = 'usage';

    handleTabActive(event) {
        this.activeTab = event.target.value;
    }
}
