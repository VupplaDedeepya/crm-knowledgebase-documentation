---
title: Profile Settings
---
The **Profile Settings** section allows users to view and update their personal account information.
### Purpose

This section helps users:

- **Keep profile details** accurate and up to date
- **Manage profile pictures**
- **Update contact information**
- **Maintain secure account** credentials
- **Ensure profile changes** reflect across the platform

### Profile Information Display

The **system** automatically displays existing **user information** fetched from the backend.

### Editable & Non-Editable Fields

#### Editable Fields

Users can update:

- **Full Name**
- **Mobile Number**
- **Display Picture**

#### Non-Editable Fields

The following fields are restricted and cannot be modified:

- **Email Address**
- **Role**
- **Time Zone**
- **Language**

These fields appear as **disabled** or **read-only** within the interface.

---

### Updating Profile Information

Users can directly **edit supported fields** within the form.

#### Save Process

1. Modify the **required editable fields**.
2. Click **Save**.
3. The **system validates** the information entered.
4. Upon **successful validation**:
   - **Profile information** is updated
   - **Changes** instantly reflect across the application
   - A **success message** is displayed

### Profile Picture Management

Users can manage their display picture from the profile section.

#### Supported Actions

- Upload profile picture
- Replace existing picture
- Remove profile picture
- Preview image before saving

### File Restrictions

The system may restrict:

- Supported file formats
- Maximum upload size

---

### Default Profile Avatar

If no profile picture is uploaded, the system automatically generates a default avatar using the user’s initials.

---

### Password Change

The Password Change section under Personal Settings allows users to securely update their account password to maintain account safety and prevent unauthorized access.

#### Purpose

This section helps users:

- Change their existing account password
- Improve account security regularly
- Protect sensitive CRM data from unauthorized access
- Maintain secure login credentials

### Password Change Process

Users can update their password by following these steps:

1. Enter the current password in the **Old Password** field.
2. Enter the new password in the **New Password** field.
3. Re-enter the same password in the **Confirm New Password** field.
4. Click **Save** or **Update Password**.
5. The system validates the information entered.
6. Upon successful validation:
   - Password is securely updated
   - A success confirmation message is displayed

![pswd-change](/img/profile/change-pswd.png)

#### Validation Rules

The system validates the following conditions before updating the password:

- Old password must match the existing account password
- New password and confirm password must match
- Password fields cannot be left empty
- New password must satisfy security requirements such as:
  - Minimum character length
  - Combination of uppercase and lowercase letters
  - Inclusion of numbers or special characters

### Default Behavior

If the password update is successful:

- The new password becomes active immediately
- Existing sessions may be refreshed or invalidated based on security policy
- Future logins must use the updated password

---

### 2. Notification Preferences

The Notification Preferences section allows users to control what activities they receive notifications for and how those notifications are delivered.

#### Purpose

Users can customize notifications for various CRM activities to avoid unnecessary alerts and stay informed about important updates.

### Notification Channels

Users can enable or disable notifications through:

1. Browser Notifications — Notifications shown in the browser
2. In-app Notifications — Notifications displayed inside CX Astra
3. Email Notifications — Notifications sent via email
4. Sound for In-App Notifications – Plays an audible alert when selected in-app notifications are received.  

### Available Notification Categories

Users can configure notification preferences for:

- Deals
- Leads
- Contacts
- Tasks
- Meetings
- Emails
- Workflows
- Notes and Comments

### Notification Configuration

Users can:

- Enable notifications for selected modules
- Disable unwanted notifications
- Configure different delivery methods per module

**Example**
A user may:

- Enable in-app notifications for Deals
- Disable email notifications for Tasks
- Enable browser notifications for Meetings

### Enable Sound for In-App

The **Enable Sound for In-App** option allows users to receive notification sounds for selected notification categories.

When this option is enabled, users can choose the activities or notification categories for which the sound should be played. This provides greater control over which notifications require an audible alert.

For example, a user can enable sound for **Tasks and Meetings** while keeping the sound disabled for other notification categories.

:::note
The sound setting applies to in-app notifications and can be configured separately for each available notification category.
:::

### Notification Configuration

Users can:

- Enable notifications for selected modules.
- Disable unwanted notifications.
- Configure different delivery methods per module.
- Enable or disable sound for selected in-app notification categories.

#### Example

A user may:

- Enable in-app notifications for **Deals**.
- Disable email notifications for **Tasks**.
- Enable browser notifications for **Meetings**.
- Enable notification sound for **Tasks and Meetings**.
- Keep notification sound disabled for other activities. 

---

### 3. Email Settings

The Email Settings section allows users to connect and manage email accounts used within CX Astra.

#### Purpose

This integration helps users:

- Send and receive emails directly from the CRM
- Track email communication
- Synchronize email activities
- Use personalized email signatures

### Email Integration Features

Users can connect personal email accounts to:

- Send emails
- Schedule emails
- Receive email replies
- Automatically log conversations
- Capture follow-up tasks from emails

![email-features](/img/profile/email.png)

---

### Email Signature Management

Users can create and customize email signatures for outgoing emails.

#### Signature Features

- Personalized email signatures
- Dynamic placeholders support
- Enable/Disable signature option
- Edit or remove signature

![signature](/img/profile/signature.png)

### Signature Actions

Users can:

- Create signature
- Edit signature
- Remove signature
- Enable or disable signature usage

---

### 4. Calendar Settings

The Calendar Settings section allows users to connect external calendar providers for meeting synchronization and scheduling.

#### Purpose

Calendar integration helps users:

- Manage meetings efficiently
- Synchronize CRM schedules
- Track tasks in calendars
- Allow contacts to schedule meetings

### Supported Calendar Providers

Users can connect supported calendar platforms such as:

- Google Calendar
- Microsoft Outlook Calendar

![calendar](/img/profile/calendar.png)

### Calendar Integration Features

Once connected, users can:

- Send meetings directly from CX Astra
- Automatically log meetings
- Sync calendar events
- Allow contacts to schedule meetings
- View CRM tasks in calendar

### Calendar Actions

Users can:

- Connect calendar
- Disconnect calendar
- Manage synchronization preferences

## Microsoft Teams Meeting Intelligence

**Microsoft Teams Meeting Intelligence** allows users to automatically generate AI-powered meeting insights from Microsoft Teams meetings.

When enabled, SalesAstra retrieves available meeting transcripts after completed meetings and uses them to generate summaries and identify important customer information.

This feature works alongside the existing **Microsoft Outlook Calendar** integration and is optional.

### Purpose

Teams Meeting Intelligence helps sales teams reduce manual meeting documentation by automatically capturing important information discussed during customer meetings.

SalesAstra can identify:

- Meeting summaries
- Customer requirements
- Buying signals
- Objections
- Risks
- Action items
- Follow-up commitments

The generated intelligence can be associated with the relevant Lead or Deal.

---

### Enabling Teams Meeting Intelligence

To enable the feature:

1. Go to **Profile Settings → Calendar Settings**.
2. Locate **Microsoft Teams Meeting Intelligence**.
3. Click **Enable Teams Meeting Intelligence**.
4. Review the information displayed in the confirmation dialog.
5. Click **Continue & Connect Microsoft 365**.
6. Sign in to your Microsoft account and provide the required authorization.
7. Once the connection is completed, Teams Meeting Intelligence is enabled.

:::note
Connecting your Outlook Calendar does not automatically enable Teams Meeting Intelligence. You must explicitly enable this feature.
:::

---

### Enable Teams Meeting Intelligence Dialog

Before connecting Microsoft 365, SalesAstra displays information about what the feature provides.

When enabled, SalesAstra can:

- Retrieve Microsoft Teams meeting transcripts when available.
- Generate AI meeting summaries.
- Extract action items and follow-ups.
- Identify customer requirements, buying signals, and objections.
- Update related Leads and Deals.
- Provide additional AI-powered Lead and Deal intelligence.

SalesAstra only retrieves transcripts after meetings have ended and does not modify Teams meetings, recordings, or transcripts.

---

### Microsoft 365 Authorization

After selecting **Continue & Connect Microsoft 365**, you are redirected to Microsoft to authorize the connection.

Depending on your organization's Microsoft 365 security policies, administrator approval may be required before transcript access is available.

If approval is required, the status is displayed as **Pending Administrator Approval**.

:::note
Calendar synchronization continues to work normally while Teams Meeting Intelligence is awaiting administrator approval.
:::

---

### Teams Meeting Intelligence Status

The feature can display the following statuses:

#### Not Enabled

Teams Meeting Intelligence has not been enabled for the account.

#### Enabled

The Microsoft account has been connected and Teams Meeting Intelligence is available.

The enabled state displays information such as:

- Connected Microsoft Account
- Last Successful Synchronization
- Date Enabled

Available actions include:

- **Disable**
- **Reconnect**

#### Pending Administrator Approval

Microsoft 365 administrator approval is required before transcript access can be used.

---

### Automatic Meeting Processing

After a completed Microsoft Teams meeting associated with SalesAstra, the system checks whether a transcript is available.

When a transcript is available, SalesAstra processes it to generate meeting intelligence, including:

- AI Meeting Summary
- Meeting Notes
- Customer Requirements
- Buying Signals
- Objections
- Risks
- Action Items
- Follow-up Commitments

The processed information is linked to the corresponding CRM record when the meeting is associated with a Lead or Deal.

---

### CRM Updates

The generated meeting intelligence can be reflected in the associated **Lead** or **Deal**.

Information may be available through:

- Meeting Notes
- Activity Timeline
- AI Lead Summary
- AI Deal Summary
- Lead Intelligence
- Deal Intelligence

This allows users to review important meeting information without manually documenting the entire conversation.

---

### Managing the Connection

Users can manage the Teams Meeting Intelligence connection from **Profile Settings → Calendar Settings**.

#### Disable

Click **Disable** to stop Teams Meeting Intelligence from processing new Teams meeting transcripts.

#### Reconnect

Click **Reconnect** when you need to reconnect or reauthorize the Microsoft account.

:::note
Disabling Teams Meeting Intelligence does not disable the Outlook Calendar integration.
:::

---

### Important Information

- Teams Meeting Intelligence is an optional feature.
- Outlook Calendar synchronization and Teams Meeting Intelligence are separate settings.
- Only available Teams meeting transcripts are processed.
- Microsoft 365 administrator policies may affect transcript access.
- SalesAstra does not modify Microsoft Teams meetings, recordings, or transcripts.
- Users can disable the feature at any time from Calendar Settings.

---

### 5. Work Status Settings

The Work Status Settings section allows users to update their current work availability status.

#### Purpose

Work status helps team members understand user availability and improves internal collaboration.

### Available Work Status Options

Users can select one of the following statuses:

- In the Office
- Work from Home
- Out Sick
- On Break
- Out for Lunch
- Do not Disturb
- Out of Office

![status-opts](/img/profile/status.png)

### Status Visibility

The selected work status may appear in:

- User profile
- Team collaboration areas
- Chat systems
- Presence indicators

---

### 6.Navigation Preferences

The **Navigation Preferences** section allows users to control how pages open when navigating through CX Astra.

Users can choose whether records open in a separate browser tab or within the current window or tab.

### Purpose

Navigation Preferences provide users with control over their browsing experience, allowing them to choose the navigation behavior that best suits their workflow.

---

### Record Navigation

Under **Record Navigation**, users can configure how records open when they select a record from the application.

The following options are available:

#### Open Records in a Separate Tab

This is the **default** option.

When selected:

- The selected record opens in a new browser tab.
- The current page remains open in the existing tab.
- Users can switch between the original page and the opened record.

This option is useful when users want to retain their current list, search results, or other page while viewing a record.

#### Open Records in the Same Window/Tab

When selected:

- The selected record opens in the current browser tab.
- The current page is replaced by the selected record.
- Users can use the browser's navigation controls to return to the previous page.

---

### Configuring Navigation Preferences

To configure the navigation behavior:

1. Go to **Profile Settings**.
2. Select **Navigation Preferences**.

![navigation-preferences](/img/profile/NavigationPreferences.png)

3. Under **Record Navigation**, select the preferred option:
   - **Open records in a separate tab**
   - **Open records in the same window/tab**
4. The selected preference is applied when navigating to records.