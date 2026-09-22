---
sidebar_position: 11
title: Catalog
description: Learn how Sales Administrators can create and manage offerings, categories, and offering types for use in Deals.
---

# Catalog

The **Catalog** feature allows Sales Administrators to create and manage a centralized list of offerings that can be used while creating Deals.

An offering can represent a product, service, package, property, course, subscription, or any other standardized item sold by the organization.

The Catalog helps maintain consistent offering information, pricing, and categorization while reducing the need to enter the same details manually when creating Deals.

## Accessing Catalog

To access the Catalog:

1. Go to **CRM Configuration**.
2. Select **Catalog**.

The Catalog provides the following sections:

1. **Offerings**
2. **Categories**
3. **Offering Types**

---

## Offerings

The **Offerings** section displays the offerings available in the organization.

Administrators can:

- Create an offering
- Edit an offering
- Activate or deactivate an offering
- Search for offerings
- Filter offerings
- View offering details

### Creating an Offering

To create an offering:

1. Go to **CRM Configuration → Catalog → Offerings**.
2. Click **Create Offering**.

![create-offering](/img/Configure/CreateOffering.png)

3. Enter the required **Basic Information**.
4. Enter the **Commercial Information**.
5. Configure the offering **Status**.
6. Add any additional information, such as Tags or Notes.
7. Click **Save Offering**.

---

## Basic Information

The Basic Information section includes:

### Name *

Enter the name of the offering.

### Code

The code can be automatically generated from the offering name.

### Offering Type *

Select the type of offering.

### Category

Select a category to organize the offering.

### Description

Enter a description of the offering.

---

## Creating an Offering Type from the Offering Form

If the required offering type is not available in the dropdown, you can create one directly from the **Create Offering** form.

![offeringType](/img/Configure/offeringType.png)

To create an Offering Type:

1. Click the **+** icon next to **Offering Type**.
2. Enter the Offering Type details.
3. Click **Save**.
4. The newly created type becomes available for selection.

The Offering Type form includes:

- **Name \*** – Name of the offering type.
- **Code \*** – Unique code for the offering type.
- **Description** – Description of the offering type.
- **Status** – Active or Inactive.

---

## Creating a Category from the Offering Form

You can also create a new category directly from the **Create Offering** form.

To create a Category:

1. Click the **+** icon next to **Category**.
2. Enter the category details.
3. Click **Save**.
4. Select the newly created category for the offering.

The Category form includes:

- **Name \*** – Name of the category.
- **Code** – Category code.
- **Parent Category** – Select an existing category if the new category should be created as a subcategory.
- **Description** – Description of the category.
- **Status** – Active or Inactive.
- **Sort Order** – Defines the display order of the category.

---

## Commercial Information

The Commercial Information section allows you to configure the default pricing information for an offering.

### Default/Base Price

Enter the standard price of the offering.

### Currency

Select the currency applicable to the offering.

The configured currency is used when displaying the offering price.

### Price Override

Enable **Allow sales representatives to override default price in deals** if sales representatives should be allowed to change the offering's default price when adding it to a Deal.

When enabled, the sales representative can modify the price for an individual Deal without changing the default price configured in the Catalog.

---

## Status

An offering can be assigned one of the following statuses:

- **Active** – The offering is available for use.
- **Inactive** – The offering is not available for selection in new Deals.

---

## Additional Information

The Additional Information section allows you to provide supplementary information for the offering.

### Tags

Add relevant tags to categorize or identify the offering.

### Notes

Add additional information or remarks related to the offering.

---

# Categories

The **Categories** section allows administrators to organize offerings into logical groups.

For example:

- Healthcare
- Real Estate
- Education
- Software
- Professional Services

## Creating a Category

To create a category:

1. Open **Catalog → Categories**.
2. Click **Add Category**.

![add-category](/img/Configure/AddCategory.png)

3. Enter the category name.
4. Optionally provide a code and description.
5. Set the status.
6. Specify the **Sort Order**, if required.
7. Click **Save**.

---

# Offering Types

The **Offering Types** section allows administrators to define the types used to classify offerings.

Examples include:

- Product
- Service
- Subscription
- Package
- Property
- Course
- Membership
- Support Plan

## Creating an Offering Type

To create an offering type:

1. Open **Catalog → Offering Types**.
2. Click **Add Offering Type**.

![offering-type](/img/Configure/CreateOfferingType.png)

3. Enter the required details.
4. Set the status.
5. Click **Save**.

The Offering Type form includes:

- **Name \***
- **Code \***
- **Description**
- **Status**

---

## Managing Categories and Offering Types

Administrators can manage existing categories and offering types from their respective lists.

Available information may include:

- Name
- Code
- Description
- Status
- Actions

The available actions allow administrators to update or change the status of configured categories and offering types.

---

## Using Offerings in Deals

Active catalog offerings can be selected while creating or editing a Deal.

When an offering is selected, its configured information, such as the **offering name and default price**, can be used in the Deal.

If price override is enabled for the offering, the sales representative can modify the price for that particular Deal.

:::note
Changing the price in a Deal does not change the default price maintained in the Catalog.
:::

---

## Search and Filtering

The Catalog provides options to quickly locate configured offerings, categories, and offering types.

Offerings can be searched or filtered based on the available fields, such as:

- Name
- Code
- Category
- Offering Type
- Status
- Tags

---

## Managing Offering Status

Administrators can activate or deactivate offerings as required.

- **Active offerings** can be selected for applicable Deals.
- **Inactive offerings** are not available for new selection.

Deactivating an offering does not remove its existing information from previously created Deals.