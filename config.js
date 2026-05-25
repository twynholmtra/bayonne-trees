// ─────────────────────────────────────────────────────────────────────────────
//  Park Tree Map — configuration
//
//  This is the ONLY file you need to edit when setting up your map.
//  Replace the placeholder values below with the ones for your park.
//
//  See docs/04-configure-app.md for step-by-step instructions.
// ─────────────────────────────────────────────────────────────────────────────

// — Your park —
// PARK_NAME is just the park's name (e.g. 'Lillie Park'). The app appends
// " tree map" where it needs the full title.
const PARK_NAME        = 'My Park';
const PARK_DESCRIPTION = 'A short sentence about your park and your group — shown in the Info panel.';
// Optional. Leave as '' to hide the email contact from the Info panel
// and the feedback "Send email instead" link.
const CONTACT_EMAIL    = '';

// Optional. Your park or Friends-group website. Shown as a link in the
// Info panel. Leave as '' to hide.
const WEBSITE_URL      = '';

// — Your Google Sheet —
// The long ID between /d/ and /edit in the spreadsheet URL.
const SHEET_ID         = 'PASTE_YOUR_SHEET_ID_HERE';
const SHEET_NAME       = 'Trees';

// — Your Apps Script Web App —
// The "/exec" URL you got after deploying the Apps Script.
const APPS_SCRIPT_URL  = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';

// — Your GitHub repository —
// "owner/repo" — used to fetch uploaded photos.
const GITHUB_REPO      = 'owner/repo';
const GITHUB_BRANCH    = 'main';

// — Fallback map view —
// Only used until your sheet has at least one tree. Once it does, the map
// auto-fits to your trees and these values are ignored.
const MAP_CENTER       = [51.5074, -0.1278]; // [latitude, longitude]
const MAP_ZOOM         = 17;

// — Trusted contributors —
// When false (default), anyone with the map URL can use "+ Add a tree".
// When true, the button is hidden until the visitor enrols their device
// via a magic link. See docs/12-trusted-contributors.md for setup.
const ENABLE_CONTRIBUTOR_GATE = false;
