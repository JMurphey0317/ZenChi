public with sharing class HappySoupUsageController {
    @AuraEnabled(cacheable=true)
    public static List<HappySoupDto.MetadataTypeOption> getMetadataTypes() {
        return new List<HappySoupDto.MetadataTypeOption>{
            new HappySoupDto.MetadataTypeOption('ApexClass', 'ApexClass'),
            new HappySoupDto.MetadataTypeOption('LightningComponentBundle', 'LightningComponentBundle'),
            new HappySoupDto.MetadataTypeOption('CustomObject', 'CustomObject')
        };
    }

    @AuraEnabled
    public static HappySoupDto.UsageResponse getUsage(HappySoupDto.UsageRequest request) {
        HappySoupDto.UsageResponse response = new HappySoupDto.UsageResponse();

        if (request == null || String.isBlank(request.metadataType) || String.isBlank(request.metadataName)) {
            response.status = 'ERROR';
            response.message = 'metadataType and metadataName are required.';
            return response;
        }

        response.status = 'TODO';
        response.message = 'Phase 2 usage shell received ' + request.metadataType + ':' + request.metadataName + '. Next phase: wire real dependency retrieval.';
        return response;
    }
}
