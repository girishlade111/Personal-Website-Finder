# Personal Website Finder

A responsive, single-page application that fetches data from a Google Sheet and displays it in a professional, minimalistic interface. Perfect for managing and finding your personal website credentials and information.

## Features

- 🌓 **Dark/Light Theme Toggle** - Switch between themes with smooth transitions
- 🔍 **Real-time Search** - Search by category or website name
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ✨ **Animated Background** - Subtle gradient animation with sparkle effects
- 🔒 **Secure Data Display** - Clean modal interface for viewing details
- 📄 **Pagination** - Load more functionality for better performance
- 🎨 **Professional Design** - Clean, minimalistic interface

## Setup Instructions

### 1. Google Sheet Setup

1. **Open the Google Sheet**: [WebsiteData Sheet](https://docs.google.com/spreadsheets/d/14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8/edit?usp=sharing)

2. **Make a copy** of the sheet to your Google Drive:
   - File → Make a copy
   - Name it "WebsiteData" or any name you prefer

3. **Set up the columns** (if not already present):
   - Column A: `Category`
   - Column B: `Website`
   - Column C: `Username`
   - Column D: `Password`
   - Column E: `Notes`
   - Column F: `Last Updated`

4. **Add your data** to the sheet following the column structure

### 2. Google Apps Script Setup

1. **Open Google Apps Script**: Go to [script.google.com](https://script.google.com)

2. **Create a new project**:
   - Click "New Project"
   - Name it "Personal Website Finder"

3. **Replace the default code**:
   - Delete the default `myFunction()` code
   - Copy and paste the entire content from `Code.gs` file

4. **Update the Spreadsheet ID**:
   - In the `Code.gs` file, find the line: `const spreadsheetId = '14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8';`
   - Replace the ID with your copied sheet's ID (found in the URL of your sheet)

5. **Add the HTML file**:
   - Click the "+" button next to "Files"
   - Choose "HTML"
   - Name it "index"
   - Copy and paste the entire content from `index.html` file

6. **Test the setup** (optional):
   - In the Apps Script editor, select the `testSheetAccess` function
   - Click "Run" to test if the script can access your sheet
   - Check the logs for any errors

### 3. Deploy as Web App

1. **Deploy the application**:
   - Click "Deploy" → "New deployment"
   - Click the gear icon next to "Type" and select "Web app"

2. **Configure deployment settings**:
   - **Description**: "Personal Website Finder v1.0"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (or "Anyone with Google account" for more security)

3. **Deploy**:
   - Click "Deploy"
   - Authorize the application when prompted
   - Copy the web app URL provided

4. **Access your application**:
   - Open the web app URL in your browser
   - Your Personal Website Finder should now be live!

### 4. Optional: Set Up Sample Data

If you want to populate your sheet with sample data for testing:

1. In the Apps Script editor, select the `setupSheet` function and run it
2. Then select the `addSampleData` function and run it
3. This will create the proper sheet structure and add sample data

## Usage

### Adding Data
1. Open your Google Sheet
2. Add new rows with the required information:
   - **Category**: Type of website (e.g., "Social Media", "Professional", "Development")
   - **Website**: Name of the website or service
   - **Username**: Your username or email
   - **Password**: Your password (consider using "••••••••" for security)
   - **Notes**: Additional information or notes
   - **Last Updated**: Date when you last updated this information

### Using the Application
1. **Search**: Type in the search box to filter by category or website name
2. **View Details**: Click on any card to view full details in a modal
3. **Load More**: Click "Load More" to see additional items (6 items per page)
4. **Theme Toggle**: Click the theme button in the header to switch between dark and light modes
5. **Keyboard Shortcuts**:
   - Press `/` to focus the search input
   - Press `Escape` to close the modal

## Customization

### Styling
- All colors are defined as CSS variables in the `:root` selector
- Modify the color scheme by changing the CSS variables
- The application uses the 'Inter' font family for a modern look

### Functionality
- Adjust `itemsPerPage` variable in the JavaScript to change pagination size
- Modify the search functionality to include additional fields
- Add new fields by updating both the Google Sheet columns and the modal display code

### Social Links
Update the footer social links in the HTML file:
- Instagram: `https://www.instagram.com/girish_lade_/`
- LinkedIn: `https://www.linkedin.com/in/girish-lade-075bba201/`
- GitHub: `https://github.com/girishlade111`
- CodePen: `https://codepen.io/Girish-Lade-the-looper`
- Email: `mailto:girishlade111@gmail.com`

## Security Considerations

1. **Password Display**: Consider showing passwords as "••••••••" in your sheet for security
2. **Access Control**: Set appropriate access permissions in your Google Apps Script deployment
3. **HTTPS**: The deployed web app automatically uses HTTPS
4. **Data Privacy**: Be mindful of what information you store and who has access to your sheet

## Troubleshooting

### Common Issues

1. **"WebsiteData sheet not found" error**:
   - Ensure your sheet is named "WebsiteData" or update the sheet name in the code
   - Check that the spreadsheet ID in the code matches your sheet's ID

2. **No data displaying**:
   - Verify that your sheet has data in the correct columns
   - Run the `testSheetAccess` function in Apps Script to debug

3. **Permission errors**:
   - Ensure the Apps Script has permission to access your Google Sheets
   - Re-authorize the application if needed

4. **Web app not updating**:
   - Create a new deployment version after making changes
   - Clear your browser cache

### Getting Help

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Review the Apps Script execution logs
3. Ensure all file names and IDs are correct
4. Verify that your Google Sheet has the correct column structure

## License

This project is open source and available under the MIT License.

## Credits

Built with ❤️ using:
- Google Apps Script
- Google Sheets API
- Vanilla HTML, CSS, and JavaScript
- Inter font family
- SVG icons for social media links