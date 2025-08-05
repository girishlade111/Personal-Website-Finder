/**
 * Google Apps Script for Personal Website Finder
 * This script serves the HTML file and provides data from Google Sheets
 */

/**
 * Serves the main HTML file when the web app is accessed
 */
function doGet() {
  return HtmlService.createFileFromTemplate('index')
    .setTitle('Personal Website Finder')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Retrieves all data from the WebsiteData sheet
 * @return {Array} Array of objects containing website data
 */
function getSheetData() {
  try {
    // Open the spreadsheet by ID (your actual sheet)
    const spreadsheetId = '14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    
    // Get the WebsiteData sheet
    const sheet = spreadsheet.getSheetByName('WebsiteData');
    
    if (!sheet) {
      throw new Error('WebsiteData sheet not found');
    }
    
    // Get all data from the sheet
    const range = sheet.getDataRange();
    const values = range.getValues();
    
    if (values.length <= 1) {
      return []; // No data rows (only header or empty sheet)
    }
    
    // Get headers from first row
    const headers = values[0];
    
    // Convert data to array of objects
    const data = [];
    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      const rowData = {};
      
      // Map each cell to its corresponding header
      headers.forEach((header, index) => {
        rowData[header] = row[index] || '';
      });
      
      // Only add rows that have at least a website name
      if (rowData.Website && rowData.Website.trim() !== '') {
        data.push(rowData);
      }
    }
    
    return data;
    
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    
    // Return sample data if there's an error accessing the sheet
    return getSampleData();
  }
}

/**
 * Returns sample data for testing purposes
 * @return {Array} Array of sample website data
 */
function getSampleData() {
  return [
    {
      Category: "Social Media",
      Website: "Instagram",
      Username: "user123",
      Password: "••••••••",
      Notes: "Personal Instagram account for sharing photos and stories",
      "Last Updated": "2024-01-15"
    },
    {
      Category: "Professional",
      Website: "LinkedIn",
      Username: "john.doe",
      Password: "••••••••",
      Notes: "Professional networking and career development",
      "Last Updated": "2024-01-10"
    },
    {
      Category: "Development",
      Website: "GitHub",
      Username: "developer123",
      Password: "••••••••",
      Notes: "Code repositories and open source projects",
      "Last Updated": "2024-01-20"
    },
    {
      Category: "Creative",
      Website: "CodePen",
      Username: "creative_coder",
      Password: "••••••••",
      Notes: "Frontend experiments and code snippets",
      "Last Updated": "2024-01-18"
    },
    {
      Category: "Email",
      Website: "Gmail",
      Username: "example@gmail.com",
      Password: "••••••••",
      Notes: "Primary email account for personal and professional use",
      "Last Updated": "2024-01-22"
    },
    {
      Category: "Streaming",
      Website: "Netflix",
      Username: "moviefan",
      Password: "••••••••",
      Notes: "Entertainment streaming service subscription",
      "Last Updated": "2024-01-12"
    },
    {
      Category: "Cloud Storage",
      Website: "Google Drive",
      Username: "storage_user",
      Password: "••••••••",
      Notes: "File storage and document collaboration",
      "Last Updated": "2024-01-25"
    },
    {
      Category: "E-commerce",
      Website: "Amazon",
      Username: "shopper123",
      Password: "••••••••",
      Notes: "Online shopping and Prime membership",
      "Last Updated": "2024-01-14"
    }
  ];
}

/**
 * Test function to verify sheet access and data structure
 * Run this function in the Apps Script editor to test
 */
function testSheetAccess() {
  const data = getSheetData();
  console.log('Retrieved data:', data);
  console.log('Number of records:', data.length);
  
  if (data.length > 0) {
    console.log('Sample record:', data[0]);
    console.log('Available columns:', Object.keys(data[0]));
  }
  
  return data;
}

/**
 * Creates the WebsiteData sheet with proper headers if it doesn't exist
 * Run this function once to set up your sheet structure
 */
function setupSheet() {
  try {
    const spreadsheetId = '14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    
    let sheet = spreadsheet.getSheetByName('WebsiteData');
    
    if (!sheet) {
      // Create the sheet if it doesn't exist
      sheet = spreadsheet.insertSheet('WebsiteData');
    }
    
    // Set up headers
    const headers = ['Category', 'Website', 'Username', 'Password', 'Notes', 'Last Updated'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    console.log('Sheet setup completed successfully');
    return 'Sheet setup completed successfully';
    
  } catch (error) {
    console.error('Error setting up sheet:', error);
    return 'Error setting up sheet: ' + error.toString();
  }
}

/**
 * Adds sample data to the sheet for testing
 * Run this function to populate your sheet with sample data
 */
function addSampleData() {
  try {
    const spreadsheetId = '14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('WebsiteData');
    
    if (!sheet) {
      throw new Error('WebsiteData sheet not found. Run setupSheet() first.');
    }
    
    const sampleData = getSampleData();
    
    // Convert objects to arrays for sheet insertion
    const dataRows = sampleData.map(item => [
      item.Category,
      item.Website,
      item.Username,
      item.Password,
      item.Notes,
      item['Last Updated']
    ]);
    
    // Find the next empty row
    const lastRow = sheet.getLastRow();
    const startRow = lastRow + 1;
    
    // Insert the data
    sheet.getRange(startRow, 1, dataRows.length, 6).setValues(dataRows);
    
    console.log(`Added ${dataRows.length} sample records to the sheet`);
    return `Added ${dataRows.length} sample records to the sheet`;
    
  } catch (error) {
    console.error('Error adding sample data:', error);
    return 'Error adding sample data: ' + error.toString();
  }
}