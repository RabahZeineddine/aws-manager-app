import React from "react";
import {
  GroupingState,
  SelectionState,
  IntegratedGrouping,
  SortingState,
  IntegratedSorting,
  DataTypeProvider,
  Grouping,
  IntegratedFiltering,
  FilteringState,
  Filter,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  EditingState,
} from "@devexpress/dx-react-grid";
import { GridExporter } from "@devexpress/dx-react-grid-export";
import {
  Grid,
  Table as DXTable,
  TableHeaderRow,
  TableGroupRow,
  TableSelection,
  GroupingPanel,
  DragDropProvider,
  Toolbar,
  ExportPanel,
  TableFilterRow,
  TableColumnReordering,
  TableColumnResizing,
  TableColumnVisibility,
  ColumnChooser,
  PagingPanel,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import { TablePropsType, TableColumn } from "./@types";
import ListSkeletons from "components/Skeletons/ListSkeletons";
import Helper from "utils/Helpers";
import TableContent from "./TableContent";
import { saveAs } from "file-saver";

import TableToolbar from "./TableToolbar/index";
import ColumnChooserButton from "./ColumnChooser/ColumnChooserButton/index";
import TableSelectionCellComponent from "./TableSelectionCellComponent/index";
import TableSelectionHeaderComponent from "./TableSelectionHeaderComponent/index";
import TableRowCommand from "./TableRowCommand/index";
import ColumnChooserItemComponent from "./ColumnChooser/ColumnChooserItemComponent/index";
import ColumnChooserOverlayComponent from "./ColumnChooser/ColumnChooserOverlayComponent/index";
import ColumnChooserContainerComponent from "./ColumnChooser/ColumnChooserContainerComponent/index";

const onSave = (workbook: any) => {
  workbook.xlsx.writeBuffer().then((buffer: Buffer) => {
    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      "Export-Data.xlsx"
    );
  });
};

const DateFormatter = (props: any) => {
  return props.column
    ? !Helper.isEmpty(props.value)
      ? props.column.format
        ? props.column.format(props.value)
        : props.value
      : "Unknown"
    : "Undefined column";
};

function DataFormatter(props: any) {
  return <DataTypeProvider formatterComponent={DateFormatter} {...props} />;
}

function Table(props: TablePropsType) {
  const [grouping, setGrouping] = React.useState<Array<Grouping>>(
    props.defaultGrouping || []
  );

  const [selection, setSelection] = React.useState<Array<any>>(
    props.selectedRows || []
  );
  const [filters, setFilters] = React.useState<Array<Filter>>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(
    props.defaultGrouping ? props.rows.length : 10
  );

  const sizes = [10, 20, 30];
  if (props.rows.length > 30) sizes.push(props.rows.length);
  const [pageSizes] = React.useState(sizes);
  const exporterRef: any = React.useRef(null);

  const startExport = React.useCallback(
    (options) => {
      exporterRef?.current?.exportGrid(options);
    },
    [exporterRef]
  );

  const columnsName = props.columns.map(
    (column: TableColumn<any>) => column.name
  );

  const columnsWithWidth = props.columns.map((column: TableColumn<any>) => ({
    columnName: column.name,
    width: column.width || props.defaultColumnWidth || 150,
  }));

  const [columnOrder, setColumnOrder] = React.useState<Array<any>>(columnsName);
  const [columnWidths, setColumnWidths] =
    React.useState<Array<any>>(columnsWithWidth);
  const [filtersToggle, setFiltersToggle] = React.useState(false);
  const [hiddenColumnNames, setHiddenColumnNames] = React.useState<
    Array<string>
  >([]);

  const noDataRow = (params: any) => {
    return props.loading ? (
      <DXTable.Row {...params}>
        <td colSpan={props.columns.length}>
          <ListSkeletons items={10} />
        </td>
      </DXTable.Row>
    ) : (
      <DXTable.Row {...params}>
        <td
          colSpan={props.columns.length}
          style={{ textAlign: "center", padding: 5 }}
        >
          Nenhuma dado encontrado.
        </td>
      </DXTable.Row>
    );
  };

  const commitChanges = (data: any) => {
    if (data.deleted && props.onRowDelete) props.onRowDelete(data.deleted);
  };

  return props.columns && props.columns.length > 0 ? (
    <React.Fragment>
      <Grid rows={props.loading ? [] : props.rows} columns={props.columns}>
        <DragDropProvider />
        <SortingState
          defaultSorting={props.defaultSorting ? props.defaultSorting : []}
        />
        <GroupingState grouping={grouping} onGroupingChange={setGrouping} />
        {filtersToggle && (
          <FilteringState filters={filters} onFiltersChange={setFilters} />
        )}
        <DataFormatter for={columnsName} />
        <SelectionState
          selection={selection}
          onSelectionChange={(selectionChange: any) => {
            if (props.onSelectionChange) {
              props.onSelectionChange(selectionChange, setSelection);
            }
          }}
        />
        <IntegratedSelection />
        {props.showPaging && (
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={setCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
          />
        )}
        {props.showPaging && <IntegratedPaging />}
        <IntegratedSorting />
        <IntegratedGrouping />
        {filtersToggle && <IntegratedFiltering />}
        {props.showTableEditColumn && (
          <EditingState onCommitChanges={commitChanges} />
        )}
        <DXTable noDataRowComponent={noDataRow} />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={setColumnOrder}
        />
        <TableColumnResizing
          columnWidths={columnWidths}
          onColumnWidthsChange={setColumnWidths}
          resizingMode={"widget"}
        />
        <TableColumnVisibility
          hiddenColumnNames={hiddenColumnNames}
          onHiddenColumnNamesChange={setHiddenColumnNames}
        />
        {props.showTableEditColumn && (
          <TableEditColumn
            showEditCommand={false}
            showDeleteCommand={props.showDeleteRow || false}
            commandComponent={TableRowCommand}
          />
        )}
        <TableHeaderRow showSortingControls />
        {props.showPaging && <PagingPanel pageSizes={pageSizes} />}
        {filtersToggle && <TableFilterRow />}
        <TableSelection
          highlightRow={props.highlightRow || false}
          selectByRowClick={props.selectByRowClick || true}
          showSelectionColumn={props.showSelectionColumn || false}
          cellComponent={TableSelectionCellComponent}
          showSelectAll={props.showSelectAll || false}
          headerCellComponent={TableSelectionHeaderComponent}
        />
        <TableGroupRow contentComponent={TableContent} />
        <Toolbar
          rootComponent={(toolBarProps: any) => (
            <TableToolbar
              {...toolBarProps}
              onAdd={props.onAdd}
              onRefresh={props.onRefresh}
              filtersToggle={filtersToggle}
              setFiltersToggle={setFiltersToggle}
            />
          )}
        />
        <ColumnChooser
          toggleButtonComponent={ColumnChooserButton}
          itemComponent={ColumnChooserItemComponent}
          overlayComponent={ColumnChooserOverlayComponent}
          containerComponent={ColumnChooserContainerComponent}
        />
        <GroupingPanel showGroupingControls showSortingControls />
        <ExportPanel startExport={startExport} />
      </Grid>
      <GridExporter
        ref={exporterRef}
        rows={props.rows}
        columns={props.columns}
        grouping={grouping}
        filters={filters}
        selection={selection}
        onSave={onSave}
      />
    </React.Fragment>
  ) : (
    <div>No Data</div>
  );
}

export default Table;
