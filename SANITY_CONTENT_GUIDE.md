# Sanity Content Setup Guide for NY Oncologists

This guide will help you set up all the content in Sanity Studio to populate your frontend website.

## 🚀 Accessing Sanity Studio

1. **Open your browser** and go to: `http://localhost:3333`
2. **You should see** the "NY Oncologists - Content Studio" interface
3. **Navigate using the left sidebar** with the "Content" section

## 📝 Content Types to Create

### 1. **About Content** (Required)

**Path**: Content → About

**Fields to fill:**

- **Hero Title**: "Together: A Better Way To Fight Cancer"
- **Hero Subtitle**: "Patient Centered Cancer Care Across New York"
- **Hero Description**: "For over 50 years, we have been at the leading-edge of cancer care. When you are a patient at NY Oncologists, you can expect innovative cancer care tailored to you using the latest treatments and technologies available, including clinical trials."
- **Hero Image**: Upload a professional medical image
- **Mission Title**: "Our Mission"
- **Mission Content**: "To provide superior treatment and compassionate care for those diagnosed with cancer and blood disorders by offering a dedicated environment of wellness through patient education, innovative treatment options and ongoing emotional support for our patients and their families."
- **About Title**: "About NY Oncologists"
- **About Content**: Write detailed content about your practice
- **Years of Experience**: 50
- **Combined Experience**: 400
- **CTA Title**: "Ready to Begin Your Care Journey?"
- **CTA Description**: "Our compassionate team is here to support you every step of the way. Contact us today to schedule a consultation."

### 2. **Services** (Create Multiple)

**Path**: Content → Services

**Create services for each category:**

#### Medical Oncology Services:

- **Title**: "Medical Oncology"
- **Description**: "Comprehensive medical cancer treatments including chemotherapy, targeted therapy, and immunotherapy."
- **Category**: "Medical Oncology"
- **Featured**: Yes

- **Title**: "Chemotherapy"
- **Description**: "Advanced chemotherapy treatments using the latest medications and protocols."
- **Category**: "Medical Oncology"

- **Title**: "Targeted Therapy"
- **Description**: "Precision treatments that target specific cancer cells while sparing healthy tissue."
- **Category**: "Medical Oncology"

#### Hematology Services:

- **Title**: "Hematology"
- **Description**: "Specialized care for blood disorders and blood-related cancers."
- **Category**: "Hematology"
- **Featured**: Yes

- **Title**: "Blood Disorder Treatment"
- **Description**: "Comprehensive treatment for various blood disorders and conditions."
- **Category**: "Hematology"

#### Radiation Oncology Services:

- **Title**: "Radiation Oncology"
- **Description**: "Advanced radiation therapy using state-of-the-art equipment."
- **Category**: "Radiation Oncology"
- **Featured**: Yes

- **Title**: "External Beam Radiation"
- **Description**: "Precision external beam radiation therapy for targeted cancer treatment."
- **Category**: "Radiation Oncology"

#### Gynecologic Oncology Services:

- **Title**: "Gynecologic Oncology"
- **Description**: "Specialized care for gynecologic cancers with comprehensive treatment options."
- **Category**: "Gynecologic Oncology"
- **Featured**: Yes

#### Cancer Treatment Services:

- **Title**: "Immunotherapy"
- **Description**: "Cutting-edge immunotherapy treatments that harness the body's immune system."
- **Category**: "Cancer Treatment"
- **Featured**: Yes

- **Title**: "Clinical Trials"
- **Description**: "Access to the latest clinical trials and experimental treatments."
- **Category**: "Cancer Treatment"

#### Patient Services:

- **Title**: "Patient Support Services"
- **Description**: "Comprehensive support including counseling, nutrition, and financial assistance."
- **Category**: "Patient Services"

### 3. **Providers** (Create Multiple)

**Path**: Content → Providers

**Create provider profiles:**

#### Example Provider 1:

- **Name**: "Dr. Sarah Johnson"
- **Professional Title**: "Medical Oncologist"
- **Bio**: "Dr. Johnson specializes in breast cancer treatment with over 15 years of experience..."
- **Specialties**: ["Medical Oncology", "Breast Cancer"]
- **Image**: Upload professional headshot
- **Education**: Add medical education details
- **Certifications**: Add board certifications
- **Languages**: ["English", "Spanish"]

#### Example Provider 2:

- **Name**: "Dr. Michael Chen"
- **Professional Title**: "Radiation Oncologist"
- **Bio**: "Dr. Chen is a leading expert in radiation oncology with expertise in..."
- **Specialties**: ["Radiation Oncology", "Lung Cancer"]
- **Image**: Upload professional headshot

#### Example Provider 3:

- **Name**: "Dr. Emily Rodriguez"
- **Professional Title**: "Hematologist"
- **Bio**: "Dr. Rodriguez specializes in blood disorders and hematologic cancers..."
- **Specialties**: ["Hematology", "Blood Disorders"]
- **Image**: Upload professional headshot

### 4. **Locations** (Create Multiple)

**Path**: Content → Locations

**Create location entries:**

#### Main Office:

- **Location Name**: "NY Oncologists - Main Office"
- **Address**:
  - **Street**: "123 Medical Center Drive"
  - **City**: "New York"
  - **State**: "NY"
  - **ZIP Code**: "10001"
- **Phone**: "(555) 123-4567"
- **Email**: "info@nyoncologists.com"
- **Office Hours**:
  - Monday: 8:00 AM - 5:00 PM
  - Tuesday: 8:00 AM - 5:00 PM
  - Wednesday: 8:00 AM - 5:00 PM
  - Thursday: 8:00 AM - 5:00 PM
  - Friday: 8:00 AM - 5:00 PM
  - Saturday: Closed
  - Sunday: Closed

#### Additional Locations:

Create 2-3 more location entries for different offices.

### 5. **Contact Info** (Optional)

**Path**: Content → Contact Info

**Fill in contact information:**

- **Phone**: "(555) 123-4567"
- **Email**: "info@nyoncologists.com"
- **Address**: "123 Medical Center Drive, New York, NY 10001"
- **Hours**: "Mon-Fri: 8:00 AM - 5:00 PM"

## 🎯 Content Strategy Tips

### **Images**

- **Use high-quality, professional medical images**
- **Ensure images are properly sized** (recommended: 1200x800px for hero images)
- **Add descriptive alt text** for accessibility

### **Content Writing**

- **Keep descriptions concise** but informative
- **Use medical terminology appropriately**
- **Focus on patient benefits** and outcomes
- **Include keywords** for SEO

### **Organization**

- **Use consistent naming** conventions
- **Categorize services properly**
- **Mark featured content** appropriately
- **Keep content updated** regularly

## 🔄 After Creating Content

1. **Save all documents** in Sanity
2. **Check your frontend** at `http://localhost:3001`
3. **Verify content appears** correctly
4. **Test all pages** (Home, About, Services, Providers)
5. **Update content** as needed

## 🆘 Troubleshooting

**If content doesn't appear:**

1. **Check browser console** for errors
2. **Verify Sanity connection** in frontend
3. **Ensure all required fields** are filled
4. **Check if documents are published** (not drafts)

**If images don't load:**

1. **Verify image uploads** completed successfully
2. **Check image URLs** in Sanity
3. **Ensure proper image sizing**

## 📞 Need Help?

If you encounter any issues:

1. **Check the browser console** for error messages
2. **Verify your Sanity project** is accessible
3. **Ensure all content types** are created properly
4. **Test with sample content** first

---

**Remember**: All content you create in Sanity will automatically appear on your frontend website. Make sure to save your work and check the frontend regularly to see your changes!
