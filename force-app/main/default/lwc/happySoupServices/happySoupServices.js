import getMetadataTypes from '@salesforce/apex/HappySoupUsageController.getMetadataTypes';
import getUsage from '@salesforce/apex/HappySoupUsageController.getUsage';

export async function fetchMetadataTypes() {
    return getMetadataTypes();
}

export async function fetchUsage(request) {
    return getUsage({ request });
}
