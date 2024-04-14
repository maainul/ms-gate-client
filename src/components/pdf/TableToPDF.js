import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {DDMMMYYYY} from "../../utils/DateFormat";


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    tableHeader: {
        backgroundColor: '#ddd',
        color: 'black',
        padding: 5,
    },
    tableRow: {
        flexDirection: 'row',

    },
    tableCell: {
        border: '1px solid black',
        padding: 5,
        width: '25%', // Adjust the width as needed
        fontSize: 10, // Set font size to 10
    },
    tableTitle:{
        textAlign:'center',
        fontSize: 14,
        backgroundColor:'#7cc1f9',
        padding:5,
        marginBottom:5
    }
});

const TableToPDF = ({ tableData }) => {
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.tableTitle}>Visitor List</Text>
                        <View style={styles.table}>

                            <View style={styles.tableRow}>
                                <View style={styles.tableCell}>
                                    <Text style={styles.tableHeader}>ID</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.tableHeader}>Name</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.tableHeader}>Mobile Number</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.tableHeader}>Purpose</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.tableHeader}>Created At</Text>
                                </View>
                                {/* Add more table headers as needed */}
                            </View>

                            {tableData.map(row => (
                                <View key={row.id} style={styles.tableRow}>
                                    <View style={styles.tableCell}>
                                        <Text>{row._id}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{row.name}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{row.mobileNumber}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{row.purpose}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{DDMMMYYYY(row.createdAt)}</Text>
                                    </View>
                                    {/* Add more table cells as needed */}
                                </View>
                            ))}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default TableToPDF;
