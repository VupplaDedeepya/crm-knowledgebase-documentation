---
sidebar_position: 2
title: Creating Contacts
description: Learn how to create Contact records in Sales Astra CRM.
---

# Creating Contacts

Sales Astra CRM provides multiple ways to create Contacts, ensuring customer information can be captured seamlessly throughout the sales process. Contacts can be created directly from the Contacts module or from related records such as Leads, Deals, and Organizations.

The **Contact Creation Form** is fully configurable by CRM administrators. Depending on your organization's configuration, the fields displayed, field order, mandatory fields, and custom fields may vary.

---

## Contact Creation Entry Points

Contacts can be created from the following locations within Sales Astra CRM:

- Create Contact from the Contacts Module
- Create Contact from a Lead
- Create Contact During Deal Creation
- Create Contact from an Organization

---

## 1. Create Contact from the Contacts Module

The **Contacts** module serves as the primary location for managing customer records and creating new Contacts.

### Steps

1. Navigate to **Contacts** from the left navigation menu.
2. Click **Create Contact** in the top-right corner.
3. Complete the required Contact details.
4. Enter any additional information as needed.
5. Click **Save** to create the Contact record.

This method is typically used when users need to add customer information directly into the CRM.

![Create Contact from Contacts Module](/img/contacts/CreateContact.png)

---

## 2. Create Contact from a Lead

Users can create a Contact directly from a **Lead Detail** page when the Lead represents a qualified individual who should be maintained as a customer record.

### Steps

1. Open the desired Lead record.
2. Navigate to the **Lead Detail** page.
3. Click the **Add Contact** icon available in the action panel.
4. The **Contact Creation** form opens.
5. Enter the required Contact information.
6. Click **Save**.

The newly created Contact can then be associated with future Deals, Organizations, and customer interactions.

![Create Contact from Lead](/img/contacts/CreateContactFromLead.png)

---

## 3. Create Contact During Deal Creation

When creating a Deal, users may need to create a Contact if the customer does not already exist in the system.

### Steps

1. Navigate to **Deals**.
2. Click **Create Deal**.
3. Locate the **Contact** field within the Deal Creation form.
4. Click the **Create Contact (+)** icon beside the Contact field.
5. Complete the Contact information.
6. Save the Contact.
7. Continue creating the Deal.

The newly created Contact is automatically available for selection within the Deal record.

This process helps users create Deals without leaving the Deal Creation workflow.

---

## 4. Create Contact from an Organization

Organizations often have multiple associated Contacts. Users can create Contacts directly from an Organization record to establish these relationships.

### Steps

1. Open the required Organization record.
2. Navigate to the **Organization Detail** page.
3. Click the **Create Contact** icon in the action section.
4. Complete the Contact details.
5. Save the Contact.

The Contact is automatically linked to the selected Organization.

This approach is useful when adding decision-makers, stakeholders, or employees associated with a company.

![Create Contact from Organization](/img/contacts/CreateContactFromOrganization.png)

---

## Contact Creation Form

The **Contact Creation** form is organized into logical sections to capture customer information efficiently.


---

### Contact Information

This section captures the Contact's primary identity details.

| Field | Description |
|--------|-------------|
| Salutation | Title such as Mr., Ms., Dr., etc. |
| First Name | Contact's first name. |
| Last Name | Contact's last name. |
| Contact Owner | User responsible for managing the Contact. |

---

### Communication

This section stores the Contact's communication details.

| Field | Description |
|--------|-------------|
| Contact Number | Primary phone number. |
| Extension | Phone extension if applicable. |
| Email | Primary email address. |
| Secondary Phone | Additional phone number. |
| Secondary Email | Additional email address. |

---

### Company Details

This section captures professional and organizational information.

| Field | Description |
|--------|-------------|
| Organization | Associated company or organization. |
| Job Title | Contact's designation or role. |

> **Note**
>
> If the Organization related to the Contact is not present, users can create an Organization directly from the Contact Creation form without leaving the page.

---

### Additional Information

This section provides additional context about the Contact.

| Field | Description |
|--------|-------------|
| Tags | Labels used for categorization and segmentation. |
| Notes | Additional comments or information. |

---

### Address Information

The **Address** section stores location details.

| Field | Description |
|--------|-------------|
| Flat / House No. / Building | Building or apartment information. |
| Street Address | Street information. |
| City | City name. |
| State / Province | State or province. |
| Zip / Postal Code | Postal code. |
| Country / Region | Country or region. |

---

## Custom Fields

Administrators can configure additional fields based on organizational requirements. These custom fields may be used to capture industry-specific, operational, or business-specific information and will appear within the Contact Creation form according to the organization's configuration.

---

### Saving the Contact

After entering the required information:

1. Review all entered details.
2. Verify the communication and organization information.
3. Confirm the Contact Owner and other mandatory fields.
4. Click **Save**.

The Contact is created successfully and becomes available for association with Leads, Deals, Organizations, Activities, and other CRM records.