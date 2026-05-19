import { LightningElement, api } from 'lwc';

const COLUMNS = [
    { label: 'Path', fieldName: 'path', type: 'text' },
    { label: 'Metadata Name', fieldName: 'label', type: 'text' },
    { label: 'Metadata Type', fieldName: 'metadataType', type: 'text' }
];

export default class HappySoupDependencyTable extends LightningElement {
    @api nodes = [];

    columns = COLUMNS;

    get rows() {
        return this.flattenNodes(this.nodes || []);
    }

    flattenNodes(nodes, parentPath) {
        const rows = [];

        (nodes || []).forEach((node) => {
            const currentPath = parentPath ? `${parentPath} > ${node.label}` : node.label;
            rows.push({
                id: node.id,
                path: currentPath,
                label: node.label,
                metadataType: node.metadataType
            });
            rows.push(...this.flattenNodes(node.children || [], currentPath));
        });

        return rows;
    }
}
