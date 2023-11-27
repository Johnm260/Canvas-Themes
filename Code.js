(function() {
    'use strict';
if (window.self === window.top) {

    // Define your custom CSS styles here
    const customCSS = `
/* ONLY CHANGE THE HEX CODRS OF THESE COLORS, DONT CHANGE ANYTHING ELSE*/
/* fav colors: primary - #002b36, secondary - #04242c, link color - #ff66ff, text color - #ffccff*/



/* Replace below with theme*/

:root{--primary-color: #002b36;--secondary-color: #04242c;--link-color: #ff66ff;--text-color: #ffccff;}

/* Replace above with theme*/


:root{--rainbow-color: #FF0000;}




/* DO NOT EDIT BELOW*/


.title-bar {
  background-color: var(--secondary-color); /* Set secondary color as the background */
  color: var(--text-color); /* Set text color for the title bar */
  padding: 8px; /* Adjust padding as needed */
  cursor: move; /* Add move cursor for drag functionality */
  display: flex; /* Enable flexbox for positioning */
  justify-content: space-between; /* Align title and close button */
  align-items: center; /* Vertically center content */
}

.close-button {
  background-color: var(--secondary-color); /* Set secondary color as the background */
  color: var(--text-color); /* Set text color for the button */
  cursor: pointer; /* Add pointer cursor for the button */
  padding: 4px 8px; /* Adjust padding as needed */
  border: 1px solid var(--text-color); /* Add a border */
  border-radius: 50%; /* Make the button circular */
}

.close-button:hover {
  background-color: var(--text-color); /* Change background on hover */
  color: var(--secondary-color); /* Change text color on hover */
}



        body{
            background-color: var(--secondary-color);
        }

        .fbyHH_bSMN.fbyHH_bGBk.fOyUs_bGBk > span{
        color: var(--link-color)
        }



        li.jpyTq_bCcs.jpyTq_ycrn.jpyTq_bGBk.fOyUs_bGBk > .fbyHH_bSMN.fbyHH_bGBk.fOyUs_bGBk,
        .ui-tabs-anchor,
        #assignments,
        .header-bar,
        .context_module_hover.completed.student-view.context_module.item-group-condensed,
        .context_module_hover.completed.student-view.context_module.item-group-condensed,
        #context_modules_sortable_container > .ig-list,#context_module_content_111914 > .context_module_items.items.ig-list,
        .item-group-container,#context_module_content_107025 > .context_module_items.items.ig-list, .student-view.ig-published.ig-row,
        #calendars-context-list,
        .fOyUs_cuDs.fOyUs_bvKN.fOyUs_tIxX.fOyUs_dnJm.fOyUs_bGBk,
        .history-tray.navigation-tray-container,.profile-tray.navigation-tray-container,
        .comments,
        .eHzxc_ssMr.eHzxc_bcOZ.eHzxc_bGBk,
        .notifications,
        .fbyHH_vIby.fbyHH_bGBk.fOyUs_bGBk,
        .recent_feedback_title.event-details__title,
        .more_link,
        .ellipsible,
        .home,
        .modules,
        .people,
        .grades,
        .assignments,
        .announcements,
        .active.notifications,
        .files,
        .profile_settings,
        .eportfolios,
        .qr_mobile_login,
        .past_global_announcements,
        .quizzes,
        .module-sequence-footer-content,
        .primary-nav-transitions,
        .responsive_student_grades_page,
        .css-1bd7cvx-view,
        .pages{
        background-color: var(--secondary-color) !important;
        color: var(--link-color) !important
        }

        .CompletedItemsFacade-styles__contentPrimary,
        .Grouping-styles__title,
        .css-13b78my-view-link,
        .css-10am28f-text,
        .css-f32ptg-toggleDetails__summaryText,
        .ic-DashboardCard__header_content,
        div.ic-DashboardCard{
        background-color: var(--primary-color) !important;
        color: var(--link-color) !important
        }

        .dNoYT_bGBk,
        .fdyuz_doqw.fdyuz_bGBk,
        .ic-Layout-contentMain,
        .fCrpb_egrg.fCrpb_bGBk,
        .MlJlv_btWg,
        .item_link.title.ig-title,
        strong,
        p:nth-of-type(2),
        .external.inline_disabled,
        .context,
        .title,
        .submit_assignment_form,
        .submission_comment_textarea,
        .css-1sr6v3o-text,
        .css-1p1uj7k-truncateText,
        .css-1il4345-pill,
        .css-kz09kf-pill,
        #breadcrumbs,
        [href="https://isd271.instructure.com/courses/79668"] > .ellipsible,
        .as-course-home.page-toolbar.header-bar,
        .course-title,
        tr,
        td,
        .summary > tbody > tr > th,
        .header.ig-header,
        .enRcg_eQnG.enRcg_pEgL.enRcg_dfBC.enRcg_bGBk,
        .tray-with-space-for-global-nav,
        .ic-app-header__logomark,
        .ic-Dashboard-header__layout.large,
        .ic-app-header,
        .css-tpuo6v-text,
        .css-2bn4c9-view--inlineBlock-inlineListItem,
        .css-zlfjpm-text,
        [href="https://isd271.instructure.com/privacy_policy"],
        .css-1pmd509-view-link,
        [href="http://facebook.com/instructure"],
        [href="http://twitter.com/instructure"],
        #edit_calendar_event_form_holder,
        .css-j68kdy-formFieldLabel,
        .css-get9n4-textInput__facade,
        .help-tray.navigation-tray-container,
        .ui-helper-clearfix.ui-corner-all.ui-widget-header.ui-dialog-titlebar,
        .css-183j57y-formFieldLayout,
        #TextInput_0,
        .css-1mtgjqq-textInput,
        .css-z40h7v-text,
        .css-1j2lgg9-text{
        background-color: var(--secondary-color) !important;
        color: var(--text-color) !important
        }

        th,
        .faJyW_bYta.faJyW_blJt,
        .fLzZc_caGd,
        .eJkkQ_bIuM.fLzZc_bQpq.fLzZc_doqw.fLzZc_fSpQ.fLzZc_bGBk,
        .css-qbjizl-text,
        .css-mum2ig-text,
        .css-1uakmj8-text,
        .StickyButton-styles__newActivityButton.undefined.StickyButton-styles__root,
        .planner-grouping.Grouping-styles__root,
        .planner-today.planner-day.Day-styles__root,
        div.planner-day.Day-styles__root,
        .EmptyDays-styles__nothingPlannedContainer,
        .PlannerHeader.PlannerHeader-styles__root,
        .css-vxe90h-view--inlineBlock,
        .css-3ub1ka-view--inlineBlock-baseButton,
        #submit_from_external_tool_form_205,
        .submission_comment{
        background-color: var(--primary-color) !important;
        color: var(--text-color) !important
        }
        .nav-badge,
        .comment_count,
        .tooltip.toggle_comments_link,
        .show_guess_grades_link.button-sidebar-wide.btn,
        .unread_dot,
        .Button,
        #assignment_sort_order_select_menu,
        .bDzpk_qOas.bDzpk_fZWR.bDzpk_busO.bDzpk_bGBk.fOyUs_desw.fOyUs_bGBk,
        .btn,
        .menu-item__text,
        .menu-item__badge{
        background-color: var(--link-color) !important;
        color: var(--primary-color)!important;
        }
        .name,
        .external{
        background-color: var(--secondary-color) !important;
        color: var(--link-color) !important;
        }
        [href*=]{
        background-color: var(--secondary-color !important;
        color: var(--link-color) !important;
        }
`;



// Create a style element and append it to the document
    const styleElement = document.createElement('style');
    styleElement.textContent = customCSS;
    document.head.appendChild(styleElement);

// Function to smoothly change the --rainbow color variable
function smoothlyChangeRainbowColor() {
    const root = document.documentElement;
    const rainbowColors = [
        '#FF0000', '#FF0B00', '#FF1600', '#FF2100', '#FF2C00', '#FF3700', '#FF4200',
        '#FF4D00', '#FF5800', '#FF6300', '#FF6E00', '#FF7900', '#FF8400', '#FF8F00',
        '#FF9A00', '#FFA500', '#FFB000', '#FFBB00', '#FFC600', '#FFD100', '#FFDC00',
        '#FFE700', '#FFF200', '#FFFF00', '#F2FF00', '#E7FF00', '#DCFF00', '#D1FF00',
        '#C6FF00', '#BBFF00', '#B0FF00', '#A5FF00', '#9AFF00', '#8FFF00', '#84FF00',
        '#79FF00', '#6EFF00', '#63FF00', '#58FF00', '#4DFF00', '#42FF00', '#37FF00',
        '#2CFF00', '#21FF00', '#16FF00', '#0BFF00', '#00FF00', '#00FF0B', '#00FF16',
        '#00FF21', '#00FF2C', '#00FF37', '#00FF42', '#00FF4D', '#00FF58', '#00FF63',
        '#00FF6E', '#00FF79', '#00FF84', '#00FF8F', '#00FF9A', '#00FFA5', '#00FFB0',
        '#00FFBB', '#00FFC6', '#00FFD1', '#00FFDC', '#00FFE7', '#00FFF2', '#00FFFF',
        '#00FFFF', '#00F2FF', '#00E7FF', '#00DCFF', '#00D1FF', '#00C6FF', '#00BBFF',
        '#00B0FF', '#00A5FF', '#009AFF', '#008FFF', '#0084FF', '#0079FF', '#006EFF',
        '#0063FF', '#0058FF', '#004DFF', '#0042FF', '#0037FF', '#002CFF', '#0021FF',
        '#0016FF', '#000BFF', '#0000FF', '#0B00FF', '#1600FF', '#2100FF', '#2C00FF',
        '#3700FF', '#4200FF', '#4D00FF', '#5800FF', '#6300FF', '#6E00FF', '#7900FF',
        '#8400FF', '#8F00FF', '#9A00FF', '#A500FF', '#B000FF', '#BB00FF', '#C600FF',
        '#D100FF', '#DC00FF', '#E700FF', '#F200FF', '#FF00FF', '#FF00F2', '#FF00E7',
        '#FF00DC', '#FF00D1', '#FF00C6', '#FF00BB', '#FF00B0', '#FF00A5', '#FF009A',
        '#FF008F', '#FF0084', '#FF0079', '#FF006E', '#FF0063', '#FF0058', '#FF004D',
        '#FF0042', '#FF0037', '#FF002C', '#FF0021', '#FF0016', '#FF000B', '#FF0000'
    ]; // Smooth rainbow transition
    let currentIndex = 0;


// Get all elements with a class starting with 'context_external_tool_'
const elements = document.querySelectorAll('[class^="context_external_tool_"]');

// Loop through each element and apply custom styles
elements.forEach(element => {
  // Apply custom styles using element.style.setProperty
  element.style.setProperty('background-color', 'var(--secondary-color)', 'important');
  element.style.setProperty('color', 'var(--link-color)', 'important');
  // Add any other styles or modifications here
});

    setInterval(() => {
        root.style.setProperty('--rainbow-color', rainbowColors[currentIndex]);
        currentIndex = (currentIndex + 1) % rainbowColors.length;
    }, 50); // Change color every 0.05 seconds (adjust as needed)
}

// Start the loop for smoothly changing the --rainbow color variable
smoothlyChangeRainbowColor();

// Function to update CSS variable
function updateCSSVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

// Function to get current CSS variable values
function getCurrentCSSVariables() {
  return {
    primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
    secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
    linkColor: getComputedStyle(document.documentElement).getPropertyValue('--link-color').trim(),
    textColor: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim(),
  };
}

// Function to check if the "NewUser" cookie is set to 1
function isNewUser() {
  return document.cookie.indexOf('NewUser=1') === -1;
}



// Create a draggable welcome popup
function createWelcomePopup() {
    const welcomePopup = document.createElement('div');
    welcomePopup.id = 'welcomePopup';
    welcomePopup.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: var(--primary-color); color: #333; padding: 10px; border: 1px solid #ccc; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); cursor: move; z-index: 9999; display: block;';
    welcomePopup.innerHTML = `
      <div id="titleBar" style="background-color: var(--primary-color); color: var(--text-color);" padding: 5px; cursor: move; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 16px; padding: 2px;">Welcome to the Bobeavus Console</span>
        <br/>
        <span id="closeButtonWelcome" style="cursor: pointer; font-size: 16px; padding: 2px; background-color: var(--primary-color); color: var(--text-color);">Press this to close.</span>
      </div>
      <div style="padding: 0px; background-color: var(--primary-color); color: var(--text-color);">
        <p>You must be new, welcome to the Bobeavus Canvas Themes! To get started, just press Alt+C.</p>
        <p>There are premade themes that you can pick from, but putting valid hex codes in the</p>
        <p>text boxes, and press "Apply"! Have fun and enjoy the new look.</p>
      </div>
    `;

// Function to close the welcome popup and set the "NewUser" cookie
  function closeWelcomePopup() {
    welcomePopup.style.display = 'none';
    document.cookie = 'NewUser=1; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/'; // Set "NewUser" cookie to 1
  }

  // Event listener for the close button
  welcomePopup.querySelector('#closeButtonWelcome').addEventListener('click', closeWelcomePopup);


  // Append the welcome popup to the document body
  document.body.appendChild(welcomePopup);
}

// Check if the user is a new user (hasn't set "NewUser" cookie)
if (isNewUser()) {
  // Create the welcome popup for new users
  createWelcomePopup();
}



// Create a draggable popup box
const popupDiv = document.createElement('div');
popupDiv.id = 'colorPopup';
popupDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: var(--primary-color); color: var(--text-color); padding: 0; border: 1px solid #ccc; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); cursor: move; z-index: 9999; display: none;';
popupDiv.innerHTML = `
  <div id="titleBar" style="background-color: var(--secondary-color); color: var(--text-color); padding: 5px; cursor: move; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 16px; padding: 2px;">Customize Colors</span>
    <span id="closeButton" style="cursor: pointer; font-size: 16px; padding: 2px;">X</span>
  </div>
  <div style="padding: 20px;">
    <label for="primaryColor">Primary Color:</label>
    <input type="text" id="primaryColor" placeholder="" style="background-color: var(--primary-color); color: var(--text-color);" autocomplete="off"/><br /><br />
    <label for="secondaryColor">Secondary Color:</label>
    <input type="text" id="secondaryColor" placeholder="" style="background-color: var(--secondary-color); color: var(--text-color);" autocomplete="off"/><br /><br />
    <label for="linkColor">Link Color:</label>
    <input type="text" id="linkColor" placeholder="" style="background-color: var(--link-color); color: var(--primary-color);" autocomplete="off"/><br /><br />
    <label for="textColor">Text Color:</label>
    <input type="text" id="textColor" placeholder="" style="background-color: var(--text-color); color: var(--primary-color);" autocomplete="off"/><br /><br />
    <label for="themeSelect" style="margin-right: 10px;">Theme:</label>
    <select id="themeSelect">
      <option value="theme1">Bobeavus Theme</option>
      <option value="theme2">Pitch Black</option>
      <option value="theme3">Hot Pink</option>
      <option value="theme4">Bright Blue</option>
      <option value="theme5">mega haxor</option>
      <option value="theme6">Dark Purple</option>
      <option value="theme7">RGB Lights</option>
    </select>
    <br />
    <button id="applyColors">Apply</button>
    <button id="exportTheme">Export Theme</button>
    <button id="cookiesave">Save Colors</button>
    <button id="GPA">Calculate GPA</button>
    <br /><br />
    <label for="exportedTheme">Exported Theme:</label>
    <input type="text" id="exportedTheme" readonly style="background-color: var(--primary-color); color: var(--text-color);" />
  </div>
`;





// Load theme from cookies when the script runs
loadThemeFromCookies();

// Append the popup box to the document body
document.body.appendChild(popupDiv);

// Function to make the popup box draggable
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = popupDiv.querySelector('#titleBar');
  const dragArea = popupDiv.querySelector('#dragArea');
  header.style.cursor = 'move';
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Make the popup box draggable
dragElement(popupDiv);

// Function to apply colors
function applyColors() {
  const primaryColor = document.getElementById('primaryColor').value;
  const secondaryColor = document.getElementById('secondaryColor').value;
  const linkColor = document.getElementById('linkColor').value;
  const textColor = document.getElementById('textColor').value;

  updateCSSVariable('--primary-color', primaryColor);
  updateCSSVariable('--secondary-color', secondaryColor);
  updateCSSVariable('--link-color', linkColor);
  updateCSSVariable('--text-color', textColor);
}

// Event listener for Apply button
document.getElementById('applyColors').addEventListener('click', applyColors);

// Function to export theme
function exportTheme() {
  const currentColors = getCurrentCSSVariables();
  const exportedTheme = `:root {
  --primary-color: ${currentColors.primaryColor};
  --secondary-color: ${currentColors.secondaryColor};
  --link-color: ${currentColors.linkColor};
  --text-color: ${currentColors.textColor};
}`;
  document.getElementById('exportedTheme').value = exportedTheme;
}

document.getElementById('exportTheme').addEventListener('click', exportTheme);


// Function to calculate GPA from grades array
function calculateGPA(grades) {
  const validGrades = grades.filter(grade => grade !== "No Grade" && grade !== 0); // Exclude "No Grade" and 0 values
  const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
  const average = sum / validGrades.length;

  return average / 25; // Assuming the GPA is calculated as the average percentage divided by 25
}

// Function to open Canvas in an iframe, open grades, calculate GPA, and update the dashboard
function processCanvas() {
    // Step 1: Create an iframe
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    // Make the iframe invisible for users
    iframe.style.position = 'absolute';
    iframe.style.top = '-9999px';
    iframe.style.left = '-9999px';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

  // Step 2: Load Canvas into the iframe
  iframe.src = 'https://isd271.instructure.com'; // Replace with the actual Canvas URL

  // Step 3: Wait for Canvas to load
  setTimeout(() => {
    // Step 4: Emulate actions to open grades
    const openGradesButton = iframe.contentDocument.querySelector('button.css-rt7zzj-view--inlineBlock-baseButton:nth-of-type(3)');
    if (openGradesButton) {
      openGradesButton.click();

      // Step 5: Wait for grades to load
      setTimeout(() => {
        // Wait additional time before interacting with the iframe content (5 seconds in this case)
        // Adjust this delay based on the time it takes for the content to fully load
        setTimeout(() => {
          // Collect and process grades
          const gradeElements = iframe.contentDocument.querySelectorAll('div.css-8oqple-text'); // Replace with the actual selector for grade elements
          const grades = Array.from(gradeElements).map(gradeElement => {
            const textContent = gradeElement.textContent.trim();

            if (textContent !== 'No Grade') {
              const percentageMatch = textContent.match(/(\d+(\.\d+)?)%/);

              if (percentageMatch && percentageMatch[1]) {
                return parseFloat(percentageMatch[1]);
              }
            }

            return 0; // Treat "No Grade" and 0 as invalid grades
          });

          if (grades.length === 0) {
            console.error('No valid grades found.');
          } else {
            // Step 6: Calculate GPA
            const gpa = calculateGPA(grades);

            // Step 7: Close the iframe
            document.body.removeChild(iframe);

            // Step 8: Update the main page's dashboard text
            const dashboardSpan = document.querySelector('span.hidden-phone');
            if (dashboardSpan) {
              dashboardSpan.textContent = `Dashboard - GPA: ${gpa.toFixed(2)}`;
            } else {
              console.error('Dashboard span not found.');
            }
          }
        }, 1000); // Adjust the delay based on additional loading time
      }, 2000); // Adjust the delay based on grades loading time
    } else {
      console.error('Open grades button not found.');
      document.body.removeChild(iframe); // Remove the iframe if the button is not found
    }
  }, 7000); // Adjust the delay based on Canvas loading time
}

// Event listener for Apply button
document.getElementById('GPA').addEventListener('click', processCanvas);

// Function to save the current color theme as cookies
function saveCookies() {
  alert("Saved to cookies!");

  // Get the current color values
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
  const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--link-color').trim();
  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim();

  // Get the current rainbow color
  const currentRainbowColor = getComputedStyle(document.documentElement).getPropertyValue('--rainbow-color').trim();

  // Create an array to store the colors that should be saved as rainbow
  const rainbowColors = [];

  // Check if each color matches the rainbow color and add it to the array
  if (primaryColor === currentRainbowColor) {
    rainbowColors.push('--primary-color');
  }
  if (secondaryColor === currentRainbowColor) {
    rainbowColors.push('--secondary-color');
  }
  if (linkColor === currentRainbowColor) {
    rainbowColors.push('--link-color');
  }
  if (textColor === currentRainbowColor) {
    rainbowColors.push('--text-color');
  }

  // Set the cookies with proper 'expires' and 'path' parameters
  document.cookie = `primaryColor=${primaryColor}; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/`;
  document.cookie = `secondaryColor=${secondaryColor}; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/`;
  document.cookie = `linkColor=${linkColor}; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/`;
  document.cookie = `textColor=${textColor}; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/`;

  // Save the rainbow colors as a comma-separated string
  const rainbowColorsString = rainbowColors.join(',');
  document.cookie = `rainbowColors=${rainbowColorsString}; expires=Sat, 31 Dec 2030 12:00:00 UTC; path=/`;
}

// Function to load colors from cookies and update CSS variables
function loadThemeFromCookies() {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());

  // Function to set color variable or fallback to the default color
  const setColorVariable = (variable, value) => {
    if (value && value !== 'null') {
      updateCSSVariable(variable, value);
    }
  };

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=').map(item => item.trim());
const rainbowColors = value.split(',');
    switch (name) {
      case 'primaryColor':
        setColorVariable('--primary-color', value);
        break;
      case 'secondaryColor':
        setColorVariable('--secondary-color', value);
        break;
      case 'linkColor':
        setColorVariable('--link-color', value);
        break;
      case 'textColor':
        setColorVariable('--text-color', value);
        break;
      case 'rainbowColors':
        for (const color of rainbowColors) {
          switch (color) {
            case '--primary-color':
              updateCSSVariable('--primary-color', 'var(--rainbow-color)');
              break;
            case '--secondary-color':
              updateCSSVariable('--secondary-color', 'var(--rainbow-color)');
              break;
            case '--link-color':
              updateCSSVariable('--link-color', 'var(--rainbow-color)');
              break;
            case '--text-color':
              updateCSSVariable('--text-color', 'var(--rainbow-color)');
              break;
          }
        }
        break;
    }
  }
}

// Call the function to load colors from cookies when the script runs
loadThemeFromCookies();
// Attach the event listener for the "Save Theme" button directly
    document.getElementById('cookiesave').addEventListener('click', saveCookies);
// Define theme objects
const themes = {
  theme1: {
    primaryColor: '#002b36',
    secondaryColor: '#04242c',
    linkColor: '#ff66ff',
    textColor: '#ffccff',
  },
  theme2: {
    primaryColor: '#000',
    secondaryColor: '#111',
    linkColor: '#ffffff',
    textColor: '#ffffff',
  },
  theme3: {
    primaryColor: '#330033',
    secondaryColor: '#220022',
    linkColor: '#ff00ff',
    textColor: '#ffccff',
  },
  theme4: {
    primaryColor: '#ddddff',
    secondaryColor: '#ccccff',
    linkColor: '#006',
    textColor: '#000',
  },
  theme5: {
    primaryColor: '#000',
    secondaryColor: '#000',
    linkColor: '#0f0',
    textColor: '#0f0',
  },
  theme6: {
    primaryColor: '#222',
    secondaryColor: '#111',
    linkColor: '#A0F',
    textColor: '#B9F',
  },
  theme7: {
    primaryColor: '#000',
    secondaryColor: '#111',
    linkColor: 'var(--rainbow-color)',
    textColor: 'var(--rainbow-color)',
  },
};

// Function to apply selected theme
function applyTheme() {
  const themeSelect = document.getElementById('themeSelect');
  const selectedTheme = themeSelect.value;

  if (selectedTheme in themes) {
    const theme = themes[selectedTheme];
    updateCSSVariable('--primary-color', theme.primaryColor);
    updateCSSVariable('--secondary-color', theme.secondaryColor);
    updateCSSVariable('--link-color', theme.linkColor);
    updateCSSVariable('--text-color', theme.textColor);
  }
}

// Event listener for theme change
document.getElementById('themeSelect').addEventListener('change', applyTheme);



// Function to open/close the popup
function togglePopup() {
  const popup = document.getElementById('colorPopup');
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
}

// Event listener for Alt + C to toggle the popup
document.addEventListener('keydown', function (event) {
  if (event.altKey && event.key === 'c') {
    togglePopup();
  }
});

// Event listener for Close button
document.getElementById('closeButton').addEventListener('click', function () {
  const popup = document.getElementById('colorPopup');
  popup.style.display = 'none';
});

// Event listener for Close Popup button
document.getElementById('closePopup').addEventListener('click', function () {
  const popup = document.getElementById('colorPopup');
});

// Initialize the popup with current theme colors
const currentColors = getCurrentCSSVariables();
document.getElementById('primaryColor').value = currentColors.primaryColor;
document.getElementById('secondaryColor').value = currentColors.secondaryColor;
document.getElementById('linkColor').value = currentColors.linkColor;
document.getElementById('textColor').value = currentColors.textColor;


    } else {
  console.log("Tampermonkey script is running inside an iframe. Not executing.");
}

})();
