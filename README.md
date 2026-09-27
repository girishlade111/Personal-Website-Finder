# Personal Website Finder (Girish Bookmarks)

A responsive, single-page application that fetches data from a Google Sheet and displays it in a professional, minimalistic interface. Perfect for managing and finding your personal website credentials and information.

> Built by Girish Lade — https://ladestack.in

## Features

- 🌓 **Dark/Light Theme Toggle** — switch between themes with smooth transitions
- 🔍 **Real-time Search** — search by category or website name
- 📱 **Fully Responsive** — works on desktop, tablet, and mobile
- ✨ **Animated Background** — subtle gradient animation with sparkle effects
- 🔒 **Secure Data Display** — clean modal interface for viewing entry details
- 📄 **Pagination** — load-more functionality for better performance
- 🎨 **Professional Design** — clean, minimalistic interface
- ⌨️ **Keyboard shortcuts** — `/` focuses search, `Esc` closes the modal
- 🧪 **Test page** (`test-sheet.html`) — verifies Google Sheets connectivity before deploying

## Tech Stack

- Vanilla HTML, CSS, and JavaScript (no frameworks, no build step)
- Google Apps Script (`Code.gs`) — serves the UI and reads the Google Sheet server-side
- Google Sheets REST API — the static version loads sheet data directly from the browser
- Inter font family, custom CSS variables for theming

## Files

```
index.html        # Main single-page app (dark theme by default)
Code.gs           # Google Apps Script backend: doGet(), getSheetData(), helpers
test-sheet.html   # Connectivity test page for the Google Sheet
image.jpeg        # Background artwork used by the page
```

## Quick Start (static hosting)

`index.html` can be hosted on any static host (GitHub Pages included). It reads data from a Google Sheet via the Sheets REST API using the `SHEET_ID` / `API_KEY` constants at the top of the inline script. Point them at your own sheet and key:

1. Create a Google Sheet with columns: `Category`, `Website`, `Username`, `Password`, `Notes`, `Last Updated`
2. Enable the Google Sheets API in Google Cloud and create an API key restricted to that API
3. Make the sheet public ("Anyone with the link") or share it as needed
4. Put the sheet ID and API key into `index.html`, then open the page in a browser

> ⚠️ **Security:** the current page ships with a demo Google API key embedded in the source. If you fork or deploy this, replace it with your own key and restrict the key in the Google Cloud console (HTTP referrers / API restrictions).

## Setup Instructions (Google Apps Script route)

### 1. Google Sheet Setup

1. **Open the Google Sheet**: [WebsiteData Sheet](https://docs.google.com/spreadsheets/d/14a6avVEnvrj0f0h0igzdfq_t_socePSjneLvxAHU3y8/edit?usp=sharing)
2. **Make a copy** of the sheet to your Google Drive (File → Make a copy)
3. **Set up the columns** (if not already present):
   - Column A: `Category`
   - Column B: `Website`
   - Column C: `Username`
   - Column D: `Password`
   - Column E: `Notes`
   - Column F: `Last Updated`
4. **Add your data** following the column structure

### 2. Google Apps Script Setup

1. Open [script.google.com](https://script.google.com) → **New Project**, name it "Personal Website Finder"
2. Replace the default code with the full contents of `Code.gs`
3. Update the `spreadsheetId` constant to your copied sheet's ID (the ID in the sheet's URL)
4. Add an HTML file named `index`, paste the full contents of `index.html`
5. Optional: run `testSheetAccess` in the editor to verify the script can read the sheet

### 3. Deploy as Web App

1. **Deploy** → **New deployment** → gear icon → **Web app**
2. **Description**: "Personal Website Finder v1.0"; **Execute as**: "Me"; **Who has access**: "Anyone" (or "Anyone with Google account" for more security)
3. Authorize when prompted, copy the web app URL, and open it in a browser

### 4. Optional: Sample Data

In the Apps Script editor, run the `setupSheet` function, then `addSampleData` to create the sheet structure with sample rows.

## Usage

### Adding Data
1. Open your Google Sheet and add rows with: **Category** (e.g. "Social Media", "Development"), **Website**, **Username**, **Password**, **Notes**, **Last Updated**

### Using the Application
1. **Search**: type in the search box to filter by category or website name
2. **View Details**: click any card to see full details in a modal
3. **Load More**: shows additional items (6 items per page)
4. **Theme Toggle**: switch dark/light mode from the header button
5. **Keyboard Shortcuts**: `/` focuses search, `Escape` closes the modal

## Customization

- **Styling**: all colors are CSS variables in `:root`; change them to re-theme
- **Pagination**: adjust the `itemsPerPage` variable in the inline script
- **Fields**: add columns to the sheet and mirror them in the modal display code
- **Social links** (footer): Instagram, LinkedIn, GitHub, CodePen, and email links are hardcoded in `index.html` — update to your own

## Security Considerations

1. **Password Display**: consider showing passwords as "••••••••" in your sheet for security
2. **Access Control**: set appropriate access permissions in your Google Apps Script deployment
3. **HTTPS**: the deployed web app automatically uses HTTPS
4. **Data Privacy**: be mindful of what you store in the sheet and who has access to it
5. **API key**: never commit a production key unrestricted — restrict it in Google Cloud console

## Environment Variables

None for the static page (sheet ID and API key are inline constants in `index.html`). The Apps Script route needs the spreadsheet ID inside `Code.gs`.

## Deployment

- **Static (GitHub Pages):** this repo is deployed as-is — `index.html`, `test-sheet.html`, and `image.jpeg` work with no build step. Live at https://girishlade111.github.io/Personal-Website-Finder/
- **Google Apps Script:** deploy `Code.gs` + `index.html` as a web app (steps above) for the server-side data path

## Troubleshooting

1. **"WebsiteData sheet not found"**: ensure the sheet is named `WebsiteData` or update the name in the code
2. **No data displaying**: verify sheet data/columns, and run `testSheetAccess` in Apps Script
3. **Permission errors**: re-authorize the Apps Script project
4. **Web app not updating**: create a new deployment version and clear the browser cache
5. Check the browser console for JS errors and the Apps Script execution logs

## License

Open source, MIT License.

## Credits

Built with ❤️ by Girish Lade using Google Apps Script, the Google Sheets API, and vanilla HTML/CSS/JS (Inter font, SVG icons).
