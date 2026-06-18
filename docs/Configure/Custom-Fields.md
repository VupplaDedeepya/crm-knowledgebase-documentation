---
title: Custom-Fields
sidebar_position: 1
---
The Custom Fields section under the Configure module allows Admin users to customize CRM modules such as Leads, Deals, Contacts, and Organizations without developer support. 

Each module contains its own independent Custom Fields configuration, enabling organizations to manage module-specific data structures, layouts, and field visibility according to business requirements. 

Admins can: 

- Create custom fields  
- Modify field properties  
- Manage field visibility  
- Configure layouts and sections  
- Organize fields into groups  
- Maintain structured CRM forms 
---
## Purpose
The Custom Fields section helps organizations: 
- Customize CRM modules dynamically  
- Capture business-specific information  
- Organize fields into logical sections  
- Simplify form management  
- Improve user experience  
- Reduce dependency on development teams  
- Maintain structured and scalable CRM configurations 

## Accessing Custom Fields 

Navigate to: 
Settings → Configure → [Module Name] → Custom Fields 

**Example:** 
- Configure → Leads → Custom Fields  
- Configure → Deals → Custom Fields  

---
## Module-wise Custom Fields 
Each CRM module has its own Custom Fields configuration area. 
**Example modules:** 
- Leads  
- Deals  
- Contacts  
- Organizations  
Changes made in one module do not affect other modules. 

**Example:** 
- A custom field created in Leads will only appear in the Leads module.  
- A custom field created in Deals will only appear in the Deals module.  

This structure helps maintain: 
- Module-specific workflows  
- Clean data organization  
- Better form customization  
- Flexible CRM configurations 
---
## Custom Fields Dashboard 

The Custom Fields page displays all fields available for the selected module. 

The page includes: 
- Field listing table  
- Search functionality  
- Filters  
- Add Field option  
- Custom Layout Builder access 

## Field Listing Page 

The listing page displays all existing fields associated with the selected module. 

Fields are categorized as: 
### System Fields 
Default CRM fields provided by the system. 

Characteristics: 
- Non-deletable  
- Limited editing permissions  
- Required for CRM functionality  
**Examples:** 
- Lead Name  
- Email  
- Created Date  
- Deal Value 

### Custom Fields 
Fields created by Admin users. 

Characteristics: 
- Editable  
- Configurable  
- Can be deactivated  
- Can be deleted if no dependencies exist  

**Examples:** 
- Customer Priority  
- Lead Rating  
- Preferred Region  
- Renewal Status

## Search & Filter Options 
Admins can quickly locate fields using: 
- Field Label Search  
- Field Type Filter  
- Category Filter  
- Status Filter  
- Created By Filter  
This simplifies field management for modules with large numbers of fields. 
---
## Add Custom Field 

Admins can create new fields using the: 

➕ Add Field button 

Clicking this button opens the Add Field modal. 

### Add Field Modal 
The Add Field form allows Admins to configure new custom fields. 

The following information is required: 
- Label – User-friendly field name 
- Type - Defines the field input type 
- Required (checkbox)– Marks field as mandatory

![Add field](/img/Configure/add-field.png)

### Supported Field Types 

The CRM supports multiple field types including: 
- Single Line  
- Multi Line  
- Email  
- Phone  
- Select  
- Multi Select  
- Date  
- Date/Time  
- Number  
- Currency  
- Decimal  
- Percent  
- Long Integer  
- Checkbox  
- URL  
- Auto Number  

Additional field types may be available depending on configuration. 

### Saving a Field 

After entering the required details: 

1. Click Save  
2. The field is created immediately  
3. The field appears in the listing page  
4. The field becomes available in layouts and forms 

### Internal Name Generation 

When a field is created: 

The system automatically generates an Internal Name  
Internal Name is derived from the Field Label  
Internal Name is used internally for:  
- APIs  
- Workflows  
- Reports  
- Database mapping 
Once created, the Internal Name cannot be modified. 

### Edit Field 

Admins can edit existing fields using the Edit action. 
Editable properties include: 
- Field Label  
- Required setting  
- Visibility status  
- Layout placement

### System Field Restrictions 

For System Fields: 
- Only Field Label modifications are allowed  
- Internal Name cannot be changed  
- Field Type cannot be modified  
- System fields cannot be deleted 

## Activate / Deactivate Fields 

Admins can control whether a field is active within the CRM. 

### Activate 
Makes the field available in: 
- Forms  
- Layouts  
- Reports  
- Filters  
- Views  

### Deactivate 

Temporarily hides the field without deleting existing data. 
Inactive fields remain stored in the system. 

### Delete Custom Field 

Only Custom Fields can be deleted. 
Before deletion, the system validates dependencies. 

### Dependency Validation 

The system checks whether the field is used in: 
- Workflows  
- Reports  
- Sequences  
- Automations  
- Existing Lead/Deal records  
- Filters  
- Formulas  

If dependencies exist: 
- A dependency warning modal is displayed  
- Admin must resolve dependencies before deleting 
---
## Custom Layout Builder 

The Custom Layout Builder under the Configure module allows CRM Admins to visually customize  form layouts using a drag-and-drop interface. 

Admins can: 
- Organize fields into sections  
- Add new custom fields  
- Reuse existing fields  
- Rearrange field placement  
- Configure field properties  
- Publish layout versions 
This feature helps organizations design CRM forms that align with their business processes without affecting core system functionality or data integrity. 

### Purpose 

The Custom Layout Builder helps Admin users: 
- Create structured Lead and Deal forms  
- Improve form usability and organization  
- Customize layouts without developer support  
- Manage fields visually using drag-and-drop  
- Reuse existing system and custom fields  
- Maintain data consistency and governance  
- Publish updated layouts instantly 

### Left Pane – Field Types 

The left panel displays all supported field types available for creating new fields. 

Admins can drag any field type into the layout canvas to create a new custom field. 

### Center Pane – Layout Canvas 

The center panel displays the active form layout. 

The layout is divided into: 
- Sections  
- Fields within sections  

Admins can: 

- Add new sections  
- Rename sections  
- Reorder sections  
- Move fields between sections  
- Rearrange field order  
- Configure field properties  

The layout canvas provides a visual representation of the final CRM form. 

### Right Pane – Defined Fields Library 

The right panel displays all existing fields available for the selected module. 

This includes: 
- System Fields  
- Custom Fields  

Admins can drag existing fields into the layout if they are not already added. 

### Layout Structure 

The layout consists of multiple sections containing fields. 

Example sections: 
- Basic Details  
- Company Details  
- Lead Information  
- Deal Information  
- Social Information  

Each section can contain multiple fields arranged in rows and columns. 

## Managing Sections 

Admins can manage sections within the layout. 
Supported actions: 
- Add Section  
- Rename Section  
- Reorder Sections  
- Remove Empty Sections  

Sections help organize forms into logical groups for better readability. 

### Adding Fields to Layout 

Fields can be added using two methods. 

#### Option 1 – Add New Field from Field Types 

Admins can drag a field type from the left panel into the layout canvas. 

This opens the Create Field Modal. 

The Create Field modal allows Admins to define a new custom field 

#### Option 2 – Add Existing Field from Defined Fields Library 

Admins can drag existing fields from the right panel into the layout. 

This helps reuse previously created fields. 

### Duplicate Field Prevention 

A field cannot appear more than once in the same layout. 

If the field already exists: 

The system displays an error notification  

**Example:**
“Field already added to layout.” 

### System Field Restrictions 

For system fields: 
- Fields cannot be deleted  
- Required system fields cannot be made optional  
- Internal names cannot be modified 
These restrictions help preserve system integrity. 

### Rearranging Fields 

Admins can drag and drop fields: 
- Within the same section  
- Across different sections  
This allows for a flexible layout organization. 

### Removing Fields from Layout 

Admins can remove fields from the active layout. 

Important: 

- Removing a field from the layout does NOT delete:  

1. Field data  
2. Field definition  
3. Historical records  
The field simply becomes hidden from the current layout. 

### Dependency Validation 

When removing an existing field from the default layout, the system checks dependencies. 

Dependencies may include: 
- Lead Assignment Rules  
- Workflows  
- Reports  
- Automations  
- Filters  
If dependencies exist, the system displays a warning message. 

### Field Type Restrictions 

Once created: 
Field Type cannot be changed.  
This prevents schema conflicts and data inconsistency. 

### Dropdown Validation 
For Select and Multi-select fields: 
- Option values must be unique.  
- At least one option is required. 

### Auto Save Draft 

All layout changes are automatically saved as a Draft version. 

This includes: 
- Field additions  
- Section modifications  
- Rearrangement changes  
- Property updates  
Draft changes are not visible to end users until published. 

## Preview Layout 

Admins can use the Preview Layout option to review the final form before publishing. 

This helps validate: 
- Section structure  
- Field positioning  
- User experience  
- Form organization 

## Publish Layout 

Clicking Publish Layout: 

- Creates a new Layout Version  
- Marks the layout as Active  
- Applies changes immediately to:  
1. Create Lead forms  
2. Edit Lead forms  
3. Create Deal forms  
4. Edit Deal forms  
Published layouts become available instantly across the CRM. 

## Layout Versioning 

Every published layout is version controlled. 

The system stores: 
- Version Number  
- Published By  
- Published Date  
-   Change History  
This helps track layout modifications over time. 

## Audit & Activity Tracking 

All layout-related changes are tracked in the audit system. 

Tracked activities include: 
- Field Creation  
- Section Updates  
- Layout Publishing  
- Layout Rollbacks  
- Field Rearrangement  
- Required Setting Changes 