import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


function Doctors_Report() {

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                {...data}
                components={{
                    Toolbar: GridToolbar,
                }}
                filterModel={{
                    items: [
                        { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                    ],
                }}
            />
        </div>
    )
}

export default Doctors_Report