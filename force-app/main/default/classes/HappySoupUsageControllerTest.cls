@IsTest
private class HappySoupUsageControllerTest {
    @IsTest
    static void getMetadataTypes_returnsSeededOptions() {
        Test.startTest();
        List<HappySoupDto.MetadataTypeOption> result = HappySoupUsageController.getMetadataTypes();
        Test.stopTest();

        System.assert(result.size() > 0, 'Expected seeded metadata options for phase scaffolding.');
    }

    @IsTest
    static void getUsage_requiresRequestValues() {
        HappySoupDto.UsageRequest request = new HappySoupDto.UsageRequest();
        request.metadataType = 'ApexClass';
        request.metadataName = 'SampleClass';

        Test.startTest();
        HappySoupDto.UsageResponse result = HappySoupUsageController.getUsage(request);
        Test.stopTest();

        System.assertEquals('TODO', result.status, 'Usage response should remain in TODO mode during phase scaffolding.');
        System.assert(result.message.contains('ApexClass:SampleClass'), 'Expected response to include submitted metadata context.');
    }
}
