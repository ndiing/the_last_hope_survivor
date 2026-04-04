import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoPushMenu extends MDComponent {
    constructor() {
        super();

        this.basicData = [
            { selected: true, label: "Item 1", id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb", parent_id: null },
            { label: "Item 2", id: "345bad45-2ffd-46ff-8040-929c7a54c8b4", parent_id: null },
            { label: "Item 3", id: "50f6f958-c3a0-4f65-965d-5ea803dd253b", parent_id: null },
            { label: "Item 4", id: "218d3a52-cd1e-4e59-9ebf-f05caad77236", parent_id: null },
            { label: "Item 5", id: "adaf821d-aeb9-49a1-8f41-90c6e6d31f4d", parent_id: null },
        ];
        this.nestedData = [
            {
                label: "Item 1",
                id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb",
                parent_id: null,
                children: [
                    {
                        label: "Item 1.1",
                        id: "519c2499-24c1-40ba-8367-3cb49067003e",
                        parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb",
                        children: [
                            { selected: true, label: "Item 1.1.1", id: "bd33aa7b-2ed8-4bba-8cc3-db272e262339", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e", children: [] },
                            { label: "Item 1.1.2", id: "2a3e1558-af67-4c9d-9eb9-403ba886c174", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e", children: [] },
                            { label: "Item 1.1.3", id: "362fab16-0f34-4df6-8c98-c2a4ce4a887e", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e", children: [] },
                            { label: "Item 1.1.4", id: "7a6efcd4-20de-43ad-ae1b-71fe3a27bb1d", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e", children: [] },
                            { label: "Item 1.1.5", id: "b52a81eb-c628-4307-a136-13813919262d", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e", children: [] },
                        ],
                    },
                    {
                        label: "Item 1.2",
                        id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22",
                        parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb",
                        children: [
                            { label: "Item 1.2.1", id: "32e65353-952d-406c-ac95-e77b8741b57c", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", children: [] },
                            { label: "Item 1.2.2", id: "c585671e-c693-4b19-8999-89154a6ff723", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", children: [] },
                            { label: "Item 1.2.3", id: "bb7ed44f-b4f4-4816-b644-a95337b92a05", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", children: [] },
                            { label: "Item 1.2.4", id: "02fd9e1f-6a2e-41b0-9b54-a6929031ff73", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", children: [] },
                            { label: "Item 1.2.5", id: "797be2dd-1b6d-408c-bdf8-4a75d6d59b5b", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", children: [] },
                        ],
                    },
                    { label: "Item 1.3", id: "e1392b38-25fb-4e9f-a432-850e1f311079", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb", children: [] },
                    { label: "Item 1.4", id: "924f49b4-c815-4e08-bb6a-e45b09110620", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb", children: [] },
                    { label: "Item 1.5", id: "2e4371f1-09f2-424d-bec3-96801a1577b3", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb", children: [] },
                ],
            },
            {
                label: "Item 2",
                id: "345bad45-2ffd-46ff-8040-929c7a54c8b4",
                parent_id: null,
                children: [
                    {
                        label: "Item 2.1",
                        id: "74100558-a588-418d-a9c5-1097fb3adcb1",
                        parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4",
                        children: [
                            { label: "Item 2.1.1", id: "f4f7f841-dd31-4c73-86ab-7d845fb9688c", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1", children: [] },
                            { label: "Item 2.1.2", id: "b5669631-ed1c-4c6b-9991-c0e2171b1089", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1", children: [] },
                            { label: "Item 2.1.3", id: "6e811215-2b31-43ee-87e1-fcb427f1ee2e", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1", children: [] },
                            { label: "Item 2.1.4", id: "7357b28b-863e-4f12-a31e-14870a36e564", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1", children: [] },
                            { label: "Item 2.1.5", id: "bb6b8e24-2fba-4665-8c1d-02c155cd6db4", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1", children: [] },
                        ],
                    },
                    {
                        label: "Item 2.2",
                        id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0",
                        parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4",
                        children: [
                            { label: "Item 2.2.1", id: "7ef845d5-77ac-4766-a1ae-cbe886c5d90c", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", children: [] },
                            { label: "Item 2.2.2", id: "4d6fbb95-5308-4f62-89d4-1664e12a88bf", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", children: [] },
                            { label: "Item 2.2.3", id: "8972d465-f145-4fe2-84f6-e8c8c297487e", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", children: [] },
                            { label: "Item 2.2.4", id: "5066db63-1506-4f53-ac05-e4134c3234eb", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", children: [] },
                            { label: "Item 2.2.5", id: "8761dcf2-2489-49ed-bc11-b6b01e695245", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", children: [] },
                        ],
                    },
                    { label: "Item 2.3", id: "f312770b-b21f-4906-b643-2f94c1ed9404", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4", children: [] },
                    { label: "Item 2.4", id: "c5c92c6d-122c-45c7-ac6f-75e854dc86bf", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4", children: [] },
                    { label: "Item 2.5", id: "fa5d9133-accb-4c3c-8a54-0337ba4b649d", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4", children: [] },
                ],
            },
            { label: "Item 3", id: "50f6f958-c3a0-4f65-965d-5ea803dd253b", parent_id: null, children: [] },
            { label: "Item 4", id: "218d3a52-cd1e-4e59-9ebf-f05caad77236", parent_id: null, children: [] },
            { label: "Item 5", id: "adaf821d-aeb9-49a1-8f41-90c6e6d31f4d", parent_id: null, children: [] },
        ];
        this.flatData = [
            { label: "Item 1", id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb", parent_id: null },
            { label: "Item 1.1", id: "519c2499-24c1-40ba-8367-3cb49067003e", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb" },
            { selected: true, label: "Item 1.1.1", id: "bd33aa7b-2ed8-4bba-8cc3-db272e262339", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e" },
            { label: "Item 1.1.2", id: "2a3e1558-af67-4c9d-9eb9-403ba886c174", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e" },
            { label: "Item 1.1.3", id: "362fab16-0f34-4df6-8c98-c2a4ce4a887e", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e" },
            { label: "Item 1.1.4", id: "7a6efcd4-20de-43ad-ae1b-71fe3a27bb1d", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e" },
            { label: "Item 1.1.5", id: "b52a81eb-c628-4307-a136-13813919262d", parent_id: "519c2499-24c1-40ba-8367-3cb49067003e" },
            { label: "Item 1.2", id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb" },
            { label: "Item 1.2.1", id: "32e65353-952d-406c-ac95-e77b8741b57c", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22" },
            { label: "Item 1.2.2", id: "c585671e-c693-4b19-8999-89154a6ff723", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22" },
            { label: "Item 1.2.3", id: "bb7ed44f-b4f4-4816-b644-a95337b92a05", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22" },
            { label: "Item 1.2.4", id: "02fd9e1f-6a2e-41b0-9b54-a6929031ff73", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22" },
            { label: "Item 1.2.5", id: "797be2dd-1b6d-408c-bdf8-4a75d6d59b5b", parent_id: "58ee902e-bd74-4c7e-bb03-89a05ec57c22" },
            { label: "Item 1.3", id: "e1392b38-25fb-4e9f-a432-850e1f311079", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb" },
            { label: "Item 1.4", id: "924f49b4-c815-4e08-bb6a-e45b09110620", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb" },
            { label: "Item 1.5", id: "2e4371f1-09f2-424d-bec3-96801a1577b3", parent_id: "5ababecb-e6b9-4de3-b8ac-2431cc1f34fb" },
            { label: "Item 2", id: "345bad45-2ffd-46ff-8040-929c7a54c8b4", parent_id: null },
            { label: "Item 2.1", id: "74100558-a588-418d-a9c5-1097fb3adcb1", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4" },
            { label: "Item 2.1.1", id: "f4f7f841-dd31-4c73-86ab-7d845fb9688c", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1" },
            { label: "Item 2.1.2", id: "b5669631-ed1c-4c6b-9991-c0e2171b1089", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1" },
            { label: "Item 2.1.3", id: "6e811215-2b31-43ee-87e1-fcb427f1ee2e", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1" },
            { label: "Item 2.1.4", id: "7357b28b-863e-4f12-a31e-14870a36e564", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1" },
            { label: "Item 2.1.5", id: "bb6b8e24-2fba-4665-8c1d-02c155cd6db4", parent_id: "74100558-a588-418d-a9c5-1097fb3adcb1" },
            { label: "Item 2.2", id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4" },
            { label: "Item 2.2.1", id: "7ef845d5-77ac-4766-a1ae-cbe886c5d90c", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0" },
            { label: "Item 2.2.2", id: "4d6fbb95-5308-4f62-89d4-1664e12a88bf", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0" },
            { label: "Item 2.2.3", id: "8972d465-f145-4fe2-84f6-e8c8c297487e", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0" },
            { label: "Item 2.2.4", id: "5066db63-1506-4f53-ac05-e4134c3234eb", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0" },
            { label: "Item 2.2.5", id: "8761dcf2-2489-49ed-bc11-b6b01e695245", parent_id: "47589a99-951a-47ea-af2c-3c3cf20ec7c0" },
            { label: "Item 2.3", id: "f312770b-b21f-4906-b643-2f94c1ed9404", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4" },
            { label: "Item 2.4", id: "c5c92c6d-122c-45c7-ac6f-75e854dc86bf", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4" },
            { label: "Item 2.5", id: "fa5d9133-accb-4c3c-8a54-0337ba4b649d", parent_id: "345bad45-2ffd-46ff-8040-929c7a54c8b4" },
            { label: "Item 3", id: "50f6f958-c3a0-4f65-965d-5ea803dd253b", parent_id: null },
            { label: "Item 4", id: "218d3a52-cd1e-4e59-9ebf-f05caad77236", parent_id: null },
            { label: "Item 5", id: "adaf821d-aeb9-49a1-8f41-90c6e6d31f4d", parent_id: null },
        ];
    }
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-push-menu
                        .items="${this.basicData}"
                        inputFormat="nested"
                    ></md-push-menu>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-push-menu
                        .items="${this.nestedData}"
                        inputFormat="nested"
                    ></md-push-menu>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-push-menu
                        .items="${this.flatData}"
                        inputFormat="flat"
                    ></md-push-menu>
                </md-layout-column-item>
                
            </md-layout-column>
        `
    }
}

customElements.define("demo-push-menu", DemoPushMenu);

export default document.createElement("demo-push-menu");
