import { LightningElement, api } from 'lwc';

const COLUMNS = [
    { label: 'Metadata Name', fieldName: 'label', type: 'text' },
    { label: 'Metadata Type', fieldName: 'metadataType', type: 'text' }
];

export default class HappySoupDependencyTree extends LightningElement {
    @api nodes = [];

    columns = COLUMNS;

    get treeData() {
        return this.toTreeGridRows(this.nodes || []);
    }

    toTreeGridRows(nodes) {
        return (nodes || []).map((node) => ({
            id: node.id,
            label: node.label,
            metadataType: node.metadataType,
            _children: this.toTreeGridRows(node.children || [])
        }));
    }
}
