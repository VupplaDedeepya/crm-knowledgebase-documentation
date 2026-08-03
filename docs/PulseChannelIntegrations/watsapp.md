---
title: WhatsApp Business Integration
sidebar_position: 1
description: Connect your WhatsApp Business Account using Meta Embedded Signup.
---

# WhatsApp Business Integration

## Facebook (Meta) Embedded Signup for the WhatsApp Business

### What is Facebook (Meta) Embedded Signup for the WhatsApp Business?

Facebook (Meta) Embedded Signup for the WhatsApp Business Platform is a guided onboarding flow provided by Meta that allows businesses to connect their WhatsApp Business Account (WABA) to a third-party application (such as a CRM, customer support platform, or marketing platform) without leaving the application.

Instead of manually logging into multiple Meta dashboards, creating a WhatsApp Business Account, verifying details, and sharing credentials, the entire setup is completed through a secure popup hosted by Meta.

The primary reason to connect to a WhatsApp Business Account using Meta Embedded Signup is to allow an application (such as a CRM, helpdesk, or chatbot platform) to securely access and use the WhatsApp Business Platform APIs on behalf of the business.

Without connecting the account, the application has no permission to interact with the business's WhatsApp account.

---

## Why Connect a WhatsApp Business Account?

Once connected, the application can:

- Send and receive WhatsApp messages using the WhatsApp Business Platform.
- Manage customer conversations from within the application.
- Automate messaging using chatbots or workflows.
- Send message templates for notifications, appointment reminders, OTPs, order updates, etc.
- View and manage WhatsApp Business Account details, such as phone numbers and account information (based on granted permissions).
- Integrate WhatsApp with CRM data, allowing conversations to be linked to customer records.
- Access WhatsApp Business APIs securely using Meta-issued access tokens.

---

## Why Use Embedded Signup Instead of Manual Setup?

Embedded Signup provides several advantages:

- Simple onboarding – Users complete the setup through a guided flow.
- Secure authentication – Users log in directly with Meta; the application never sees their Facebook credentials.
- Automatic permission management – Required permissions are granted during the signup process.
- Faster integration – Businesses can start using WhatsApp in minutes without navigating multiple Meta portals.
- Reduced configuration errors – Meta validates the setup throughout the process.

---

## Example: Hospital Appointment System (Healthcare)

Suppose a hospital has an online appointment management system.

The hospital wants to send appointment confirmations, reminders, and follow-up messages to patients through WhatsApp.

### Without connecting the WhatsApp Business Account

- The system cannot send appointment confirmations via WhatsApp.
- Patients cannot reply to the hospital through WhatsApp.
- Automated reminders for upcoming appointments cannot be delivered.

### After connecting through Meta Embedded Signup

- The hospital can send appointment confirmations instantly.
- Patients can ask questions and receive responses directly on WhatsApp.
- Automated reminders reduce missed appointments.
- Follow-up care instructions and reports can be shared securely through WhatsApp.

---

# How to Connect a WhatsApp Business Account

## Before You Begin

Ensure the following prerequisites are met:

- A Facebook account with access to a Meta Business Portfolio.
- A verified Meta Business Portfolio (recommended).
- A business phone number that can be registered on WhatsApp Business Platform.
- Administrator permissions for the Meta Business Portfolio.
- The application has Meta Embedded Signup enabled.

:::note

The Meta Embedded Signup popup appears only when Embedded Signup is enabled for your application.

If it is not enabled, clicking **Connect WhatsApp** will not launch the Meta signup flow.

:::

---

## Step 1: Click Connect

1. Navigate to **Settings → Pulse Settings → Channels**.
2. Locate the **WhatsApp** channel.
3. Click **Connect**.

![Click Connect](/img/whatsapp/whatsapp-step1.png)

:::note

After clicking **Connect**, a Meta Embedded Signup popup window opens.

This popup appears only when Meta Embedded Signup is enabled for your application.

If it is not enabled, the signup flow will not be launched.

:::

---

## Step 2: Click Continue and Wait for the WhatsApp Authorization Window

After clicking **Connect** on the WhatsApp channel, a confirmation dialog appears.

Review the prerequisites, then click **Continue**.

A new window opens displaying:

**Waiting for WhatsApp Authorization**

![Waiting for WhatsApp Authorization](/img/whatsapp/whatsapp-step2.png)

---

## Step 3: Log in to Facebook

The Meta popup redirects you to Facebook.

Log in using your Facebook account that has access to the Meta Business Portfolio.

![Facebook Login](/img/whatsapp/whatsapp-step3.png)

---

## Step 4: Review Permissions and Continue

After signing in, Meta displays information about connecting your business with the application.

Review the requested information.

Click **Continue** to proceed.

![Review Permissions](/img/whatsapp/whatsapp-step4.png)

---

## Step 5: Select a Business Portfolio and WhatsApp Business Account

After clicking **Continue**, the **Select the business assets to share** page is displayed.

1. From the **Business Portfolio** drop-down, select the Meta Business Portfolio that will own the WhatsApp Business Account.

2. Next, open the **WhatsApp Business account** drop-down and choose one of the following options:

   a. **Create a WhatsApp Business Account** – Create a new WhatsApp Business Account and register a new business phone number.

   b. **Connect a WhatsApp Business App** – Connect an existing WhatsApp Business App using the Coexistence flow, allowing the same phone number to be used with both the mobile app and the WhatsApp Business Platform.

   c. **Select an Existing WhatsApp Business Account** – Choose an existing WhatsApp Business Account that is already associated with the selected Business Portfolio.

3. After selecting the appropriate option, click **Next** to proceed with the corresponding setup flow.

![Select Business Assets](/img/whatsapp/whatsapp-step5.png)

:::note

- If your Facebook account has access to multiple Business Portfolios, all eligible portfolios are displayed in the **Business Portfolio** drop-down.
- The available WhatsApp Business Account options depend on the selected Business Portfolio.
- Existing WhatsApp Business Accounts associated with the portfolio are listed automatically.

:::

---

The remaining setup depends on the option selected in **Step 5**:

- **Option 1:** Connect WhatsApp Business App (Coexistence Flow)
- **Option 2:** Create a WhatsApp Business Account
- **Option 3:** Connect an Existing WhatsApp Business Account

---
---

# Option 1: Connect WhatsApp Business App (Coexistence Flow)

Choose this option if your business already uses the WhatsApp Business App on a mobile device and you want to connect the same number to the application.

---

## Step 1: Select Connect WhatsApp Business App

Select **Connect WhatsApp Business App**.

![Select Connect WhatsApp Business App](/img/whatsapp/whatsapp-coexistence-step1.png)

---

## Step 2: Complete Your Business Profile

If you are connecting a WhatsApp Business App for the first time, Meta prompts you to complete your business profile.

Provide the following information:

- **Name** – Enter the name of your business. This name will be associated with your WhatsApp Business Account.
- **Country** – Select the country where your business operates.
- **Website (Optional)** – Enter your business website URL, if available.

After filling in the required details, click **Next** to continue.

![Complete Business Profile](/img/whatsapp/whatsapp-coexistence-step2.png)

:::note

- The **Website** field is optional and can be left blank if your business does not have a website.
- Ensure that the business information entered is accurate, as it will be used to configure your WhatsApp Business Account.

:::

---

## Step 3: Enter Your WhatsApp Business Phone Number

After completing your business profile, Meta prompts you to enter the phone number associated with your WhatsApp Business App.

1. Select the appropriate country code from the drop-down list.
2. Enter your WhatsApp Business phone number.
3. Click **Next** to continue.

![Enter WhatsApp Business Phone Number](/img/whatsapp/whatsapp-coexistence-step3.png)

:::note

- Enter the phone number that is currently registered with the WhatsApp Business App on your mobile device.
- If the phone number has not previously been added to your selected Business Portfolio, Meta will require you to verify ownership before proceeding.
- Ensure that the entered phone number is active and can receive verification messages or calls.

:::

---

## Step 4: Review the Coexistence Information

After entering your WhatsApp Business phone number, Meta displays information about connecting your existing WhatsApp Business App to the application.

Review the information provided, including:

- **Connect your existing WhatsApp Business App** – Confirms that your WhatsApp Business App will be connected to the application while remaining fully functional on your mobile device.
- **Sharing Access** – Explains that business information, such as your phone number, contacts, chats, and chat history, may be shared with the connected application to enable messaging and conversation management.
- **Protecting Your Data** – States that your business data will continue to be managed securely through Meta's services and that customers will be notified of any applicable privacy changes.

After reviewing the information, click **Next** to continue.

![Review Coexistence Information](/img/whatsapp/whatsapp-coexistence-step4.png)

:::note

- Connecting your WhatsApp Business App through the Coexistence Flow does **not** disable or replace the WhatsApp Business App on your mobile device.
- You can continue using the WhatsApp Business App while also managing conversations through the connected application.

:::

---

## Step 5: Scan the QR Code to Connect Your WhatsApp Business App

Meta generates a unique QR code to securely link your existing WhatsApp Business App with the selected WhatsApp Business Account.

Using the mobile device on which your WhatsApp Business App is installed:

1. Open the **WhatsApp Business App**.
2. Navigate to **Settings** (or **Menu → Settings** on Android).
3. Select **Account → Business Platform**.
4. Tap **Scan QR Code**.
5. Scan the QR code displayed in the Meta Embedded Signup window.
6. Review the connection request and tap **Connect** to authorize the integration.

Once the QR code is successfully scanned and the connection is confirmed, Meta imports your business profile, contacts, and eligible chat history, and the setup automatically proceeds to the next step.

![Scan QR Code](/img/whatsapp/whatsapp-coexistence-step5.png)

:::note

- The QR code is unique to your signup session and expires after a period of time. If it expires, refresh the signup flow to generate a new QR code.
- You must scan the QR code using the WhatsApp Business App associated with the phone number entered in the previous step.
- During the coexistence setup, your business profile, contacts, and the last **6 months of eligible chat history** are imported to enable a seamless transition.

:::

---

## Step 6: Confirm Your WhatsApp Business Account

After successfully connecting your WhatsApp Business App, Meta displays the details of the connected WhatsApp Business Account.

1. Review the WhatsApp Business account name.
2. Select the appropriate **Time Zone** from the drop-down list.
3. Click **Next** to continue.

![Confirm WhatsApp Business Account](/img/whatsapp/whatsapp-coexistence-step6.png)

:::note

- The WhatsApp Business account name is automatically populated based on the connected account and cannot be modified during this step.
- Selecting the correct **Time Zone** ensures that your WhatsApp Business Account is configured correctly for messaging and reporting.
- By clicking **Next**, you confirm the account details and continue with the remaining setup process.

:::

---

## Step 7: Review and Confirm Access Permissions

Before completing the setup, Meta displays a summary of the permissions that will be granted to the application.

Review the information, including:

- **WhatsApp Business Account** – Displays the WhatsApp Business Account that will be connected.
- **Requested Access** – Lists the permissions the application requires to manage the connected account.

After reviewing the requested permissions, click **Confirm** to authorize the connection.

![Review Access Permissions](/img/whatsapp/whatsapp-coexistence-step7.png)

:::note

- By clicking **Confirm**, you grant the application ongoing access to the selected WhatsApp Business Account.
- Meta records the granted permissions, and the application can perform only the actions that you authorize.
- If you do not wish to proceed, click **Back** to review or modify the previous configuration.

:::

---

## Step 8: Connecting Your WhatsApp Business Account

After you click **Confirm**, Meta begins connecting your WhatsApp Business Account to the application.

During this process, Meta validates the provided information, applies the granted permissions, and links your WhatsApp Business Account to the selected Business Portfolio.

This process may take a few moments. Please wait until the setup is complete and do not close the browser window.

![Connecting WhatsApp Business Account](/img/whatsapp/whatsapp-coexistence-step8.png)

:::note

- The connection time may vary depending on the account configuration and network conditions.
- If the process is interrupted or fails, click **Retry** to attempt the connection again.

:::

---

## Step 9: Connection Successful

Once the setup is complete, Meta displays a confirmation message indicating that your WhatsApp Business Account has been successfully connected to the application.

At this stage, your WhatsApp Business Account is linked to the selected Business Portfolio and is ready for use.

You can choose one of the following options:

- **Add payment method** – Configure a payment method for your WhatsApp Business Account. This is recommended if you plan to send business-initiated conversations or use paid WhatsApp messaging features.
- **Finish** – Complete the Meta Embedded Signup process and return to the application.

![Connection Successful](/img/whatsapp/whatsapp-coexistence-step9.png)

---
---

# Option 2: Create a WhatsApp Business Account

Choose this option if you want to create a new WhatsApp Business Account and register a new business phone number for use with the WhatsApp Business Platform.

---

## Step 1: Select a Business Portfolio and Create a WhatsApp Business Account

1. From the **Business Portfolio** drop-down, select the Meta Business Portfolio that will own the new WhatsApp Business Account.
2. From the **WhatsApp Business account** drop-down, select **Create a WhatsApp Business Account**.
3. Click **Next** to proceed.

![Create WhatsApp Business Account](/img/whatsapp/whatsapp-create-step1.png)

---

## Step 2: Enter Business Information

Provide the required information to create your new WhatsApp Business Account.

Enter the following details:

- **Name** – Enter the name of your business. This will be used as the WhatsApp Business Account name.
- **Category** – Select the business category that best describes your business.
- **Country** – Select the country where your business is registered or operates.
- **Website (Optional)** – Enter your business website URL, if available.
- **Time Zone** – Select the time zone that corresponds to your business location.

If additional business details are required, click **Show more options** and complete the optional fields.

After entering all the required information, click **Next** to continue.

![Enter Business Information](/img/whatsapp/whatsapp-create-step2.png)

:::note

- The **Name** field may be pre-filled using information from your Meta Business Portfolio and can be modified if required.
- Selecting the correct **Business Category** helps Meta classify your business appropriately.
- The **Website** field is optional but recommended, as it provides additional information about your business.
- Ensure that all information entered is accurate, as it will be associated with the newly created WhatsApp Business Account.

:::

---

## Step 3: Add Your WhatsApp Phone Number

After entering your business information, Meta prompts you to choose how you want your business to be identified on WhatsApp.

You can choose one of the following options:

### Option A: Use a Display Name Only

Select **Use a display name only** if you do not want to register a phone number at this time.

1. Select **Use a display name only**.
2. Enter or verify your WhatsApp Business display name.
3. Click **Next** to continue.

![Use Display Name Only](/img/whatsapp/whatsapp-create-step3-option-a.png)

:::note

- Meta will review your business and display name before you can send messages.
- The review process may take up to one business day.
- During the review period, you can send a limited number of business-initiated test messages.
- You will receive an email notification once the review is complete.

:::

---

### Option B: Add a New Phone Number

Select **Add a new number** if you want to register a phone number for your new WhatsApp Business Account.

1. Select **Add a new number**.
2. Choose the appropriate country code.
3. Enter your business phone number.
4. Enter or verify your WhatsApp Business display name.
5. Choose how you would like to receive the verification code:

   - **Text message (SMS)**
   - **Phone call**

6. Click **Next** to continue.

![Add New Phone Number](/img/whatsapp/whatsapp-create-step3-option-b.png)

:::note

- The phone number must not already be registered with another WhatsApp Business Platform account.
- Ensure that the phone number can receive the selected verification method.
- Your display name should accurately represent your business and comply with Meta's WhatsApp Business display name guidelines.

:::

---

## Step 4: Verify Your Phone Number

> **Note:** This step is applicable only if **Add a new number** was selected in the previous step.

After entering your business phone number and choosing the verification method, Meta sends a **6-digit verification code** to the registered phone number.

1. Wait for the verification code to be delivered via the selected verification method (**SMS** or **Phone Call**).
2. Enter the **6-digit verification code** in the provided fields.
3. Once the code is verified successfully, click **Next** to continue.

![Verify Phone Number](/img/whatsapp/whatsapp-create-step4.png)

:::note

- Ensure the phone number can receive the selected verification method.
- If you entered an incorrect phone number, click **Enter a different number** to update it.
- If you do not receive the verification code, wait for the countdown to expire and request a new code or choose a different verification method.
- The setup cannot continue until the phone number has been successfully verified.

:::

---

## Step 5: Review and Confirm Access Permissions

Before completing the setup, Meta displays a summary of the permissions that will be granted to the application.

Review the information, including:

- **WhatsApp Business Account** – Displays the newly created WhatsApp Business Account that will be connected.
- **Requested Access** – Lists the permissions the application requires to manage the connected account.

After reviewing the requested permissions, click **Confirm**.

![Review Access Permissions](/img/whatsapp/whatsapp-create-step5.png)

:::note

- By clicking **Confirm**, you grant the application permission to access and manage the selected WhatsApp Business Account.
- If you do not wish to continue, click **Back** to review or modify the previous configuration.

:::

---

After clicking **Confirm**, the remaining steps are identical to the other connection flows:

- **Step 6:** Connecting Your WhatsApp Business Account
- **Step 7:** Connection Successful

---

---

# Option 3: Connect an Existing WhatsApp Business Account

Choose this option if you already have a WhatsApp Business Account associated with your Meta Business Portfolio and want to connect it to the application.

---

## Step 1: Select an Existing WhatsApp Business Account

1. From the **Business Portfolio** drop-down, select the Meta Business Portfolio that contains the existing WhatsApp Business Account.
2. From the **WhatsApp Business account** drop-down, select the existing WhatsApp Business Account that you want to connect.
3. Click **Next** to continue.

![Select Existing WhatsApp Business Account](/img/whatsapp/whatsapp-existing-step1.png)

:::note

- Only WhatsApp Business Accounts associated with the selected Business Portfolio are displayed in the drop-down list.
- Ensure you select the correct WhatsApp Business Account, as it will be linked to the application.
- This option uses an existing WhatsApp Business Account and phone number. No new WhatsApp Business Account or phone number is created.

:::

---

## Step 2: Choose How to Add Your WhatsApp Phone Number

After selecting the existing WhatsApp Business Account, Meta prompts you to choose how you want your business to be identified on WhatsApp.

Select one of the following options.

### Option A: Use a Display Name Only

Choose this option if you want to use only your approved WhatsApp Business display name without associating a phone number at this stage.

![Use Display Name Only](/img/whatsapp/whatsapp-existing-step2-option-a.png)

---

### Option B: Use a New or Existing WhatsApp Number

Choose this option if you want to associate a phone number with the selected WhatsApp Business Account.

After choosing **Use a New or Existing WhatsApp Number**, select the phone number you want to associate with the WhatsApp Business Account.

You can choose one of the following:

- **Add a New WhatsApp Number** – Register and verify a new phone number for this WhatsApp Business Account.
- **Select an Existing Registered Number** – Choose a phone number that is already registered under the selected WhatsApp Business Account.

The WhatsApp Business Display Name is automatically populated based on the selected account.

Choose your preferred verification method (**Text Message** or **Phone Call**) if phone number verification is required.

Click **Next** to continue.

![Use New or Existing WhatsApp Number](/img/whatsapp/whatsapp-existing-step2-option-b.png)

:::note

Existing registered phone numbers appear in the drop-down list and can be selected directly.

If you choose **Add a New WhatsApp Number**, Meta will guide you through the phone number verification process before completing the setup.

:::

:::note

- **Use a Display Name Only** allows you to proceed without registering a phone number immediately.
- **Use a New or Existing WhatsApp Number** lets you connect either a new phone number or an eligible existing phone number to the selected WhatsApp Business Account.
- Depending on your selection, the subsequent steps may include entering a display name, registering a phone number, or verifying the phone number.

:::

---

## Step 3: Review Permissions and Confirm

Review the permissions that will be granted to the application for the selected WhatsApp Business Account.

The application requests access to:

- Manage the selected WhatsApp Business Account.
- Manage and access WhatsApp conversations.
- Log events on behalf of the WhatsApp Business Account and send those events to Meta.

After reviewing the requested permissions, click **Confirm** to complete the connection.

![Review Permissions and Confirm](/img/whatsapp/whatsapp-existing-step3.png)

:::note

By clicking **Confirm**, you authorize the application to access and manage the selected WhatsApp Business Account based on the permissions displayed.

:::

After this step, the WhatsApp Business Account is successfully connected and will be available for use within the application.

---