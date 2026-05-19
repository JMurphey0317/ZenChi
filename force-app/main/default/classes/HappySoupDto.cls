public with sharing class HappySoupDto {
    public class MetadataTypeOption {
        @AuraEnabled public String label;
        @AuraEnabled public String value;

        public MetadataTypeOption(String labelValue, String valueValue) {
            label = labelValue;
            value = valueValue;
        }
    }

    public class UsageRequest {
        @AuraEnabled public String metadataType;
        @AuraEnabled public String metadataName;
    }

    public class DependencyNode {
        @AuraEnabled public String id;
        @AuraEnabled public String label;
        @AuraEnabled public String metadataType;
        @AuraEnabled public List<DependencyNode> children = new List<DependencyNode>();
    }

    public class UsageResponse {
        @AuraEnabled public String status;
        @AuraEnabled public String message;
        @AuraEnabled public List<DependencyNode> nodes = new List<DependencyNode>();
    }
}
