---
title: Branding
sidebar_position: 4
---
# Branding

The **Branding** section allows organizations to maintain a consistent visual and communication identity across the CRM.

---

![Branding](/img/OrganizationSettings/Branding.png)

## Company Logo

Administrators can upload a company logo used throughout the CRM.

### Supported Formats

- PNG
- JPG
- SVG

### Logo Usage

The logo may appear in:

- App header
- Emails
- Invoices
- Proposals
- Chat interfaces

### Preview Support

Administrators can preview the logo before saving.

---

## Email Branding

### Email Footer Configuration

Administrators can configure a default email footer used in:

- System-generated emails
- CRM emails
- Automated communications

### Footer Elements

Supported footer content includes:

- Company name
- Address
- Website URL
- Contact number
- Legal disclaimer
- Social links

---

## Default User Signature

Administrators can create a reusable email signature template.

### Dynamic Placeholders

The following placeholders are supported:

| Placeholder | Description |
|-------------|-------------|
| `{{user_name}}` | User's full name |
| `{{designation}}` | User's designation |
| `{{user_email}}` | User's email address |
| `{{user_phone}}` | User's phone number |
| `{{company_name}}` | Organization name |
| `{{company_website}}` | Organization website |

### Runtime Behavior

:::note
The system automatically replaces placeholders with actual user data during email generation.
:::

---

## Signature Permission Control

Administrators can control whether users may:

- Fully edit signatures
- Partially edit signatures
- Use locked organization signatures only

---

## Email Branding Preview

Administrators can preview:

- Logo placement
- Footer appearance
- Signature rendering
- Sample email layout

---

## Branding Application Rules

Branding can be applied to:

- All emails
- Only system-generated emails
- Only CRM-sent emails

:::tip
Use consistent branding across all communication channels to strengthen organizational identity and provide a professional customer experience.
:::