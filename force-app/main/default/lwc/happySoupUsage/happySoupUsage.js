import { LightningElement } from 'lwc';
import { fetchMetadataTypes, fetchUsage } from 'c/happySoupServices';

export default class HappySoupUsage extends LightningElement {
    metadataTypeOptions = [];
    selectedMetadataType;
    metadataName = '';
    usageResult;
    errorMessage;
    isLoading = false;

    connectedCallback() {
        this.loadMetadataTypes();
    }

    get isFetchDisabled() {
        return !this.selectedMetadataType || !this.metadataName || this.isLoading;
    }

    get hasResult() {
        return !!this.usageResult;
    }

    get usageResultMessage() {
        return this.usageResult?.message;
    }

    get hasNodes() {
        return (this.usageResult?.nodes || []).length > 0;
    }

    get nodeCount() {
        return (this.usageResult?.nodes || []).length;
    }

    async loadMetadataTypes() {
        this.isLoading = true;
        this.errorMessage = undefined;
        try {
            const options = await fetchMetadataTypes();
            this.metadataTypeOptions = (options || []).map((option) => ({
                label: option.label,
                value: option.value
            }));
            if (!this.selectedMetadataType && this.metadataTypeOptions.length > 0) {
                this.selectedMetadataType = this.metadataTypeOptions[0].value;
            }
        } catch (error) {
            this.errorMessage = this.normalizeError(error);
        } finally {
            this.isLoading = false;
        }
    }

    handleMetadataTypeChange(event) {
        this.selectedMetadataType = event.detail.value;
    }

    handleMetadataNameChange(event) {
        this.metadataName = event.target.value;
    }

    async handleFetchUsage() {
        this.isLoading = true;
        this.errorMessage = undefined;
        try {
            this.usageResult = await fetchUsage({
                metadataType: this.selectedMetadataType,
                metadataName: this.metadataName
            });
        } catch (error) {
            this.usageResult = undefined;
            this.errorMessage = this.normalizeError(error);
        } finally {
            this.isLoading = false;
        }
    }

    normalizeError(error) {
        return error?.body?.message || error?.message || 'Unexpected error while processing request.';
    }
}
