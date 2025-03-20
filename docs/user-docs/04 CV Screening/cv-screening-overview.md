---
sidebar_position: 1
---

# CV Screening Overview

Advin automates the CV screening process using AI to extract, analyze, and score candidate profiles based on predefined job criteria. This allows recruiters to focus on high-potential candidates while eliminating manual screening effort.

---

## 🏆 **1. What is CV Screening?**
CV Screening is the process of evaluating candidate profiles based on factors like:  
✅ Work experience  
✅ Education  
✅ Skills  
✅ Certifications  
✅ Language proficiency  

Advin uses AI to parse and evaluate CVs, then assigns a **CV Score** (0–100) based on how well the candidate matches the job requirements.

✅ **Goal:** Automate and accelerate the initial screening process.  

---

## 🧠 **2. How AI-Based CV Screening Works**
Advin’s AI follows a structured process to screen and score CVs:  

### 🔹 **(1) Text Extraction**  
Advin extracts raw text from the CV using **OCR (Optical Character Recognition)**.  
✅ Identifies structured and unstructured text  
✅ Detects tables, bullet points, and document formatting  

👉 **Example:**  
- Name: John Doe  
- Experience: 5 years in software development  
- Skills: PHP, Python, AWS  

✅ **Goal:** Convert the CV into structured data for analysis.  

---

### 🔹 **(2) Data Structuring**  
The AI processes extracted text and maps it into structured fields:  
✅ Name  
✅ Contact Information  
✅ Work Experience  
✅ Education  
✅ Skills  
✅ Certifications  

👉 **Example:**  
| Field | Extracted Data |
|-------|----------------|
| Name | John Doe |
| Experience | 5 years (PHP, Python, AWS) |
| Education | Bachelor's Degree in Computer Science |
| Skills | PHP, Python, AWS |

✅ **Goal:** Ensure all key data points are extracted correctly.  

---

### 🔹 **(3) Criteria Matching**  
Advin compares the extracted data against the job criteria:  
✅ Years of Experience  
✅ Degree and Field of Study  
✅ Technical and Soft Skills  
✅ Certifications  

👉 **Example:**  
| Job Requirement | Candidate Profile | Match (%) |
|-----------------|-------------------|-----------|
| 3–5 years of experience | 5 years of experience | ✅ 100% |
| PHP, Python | PHP, Python, AWS | ✅ 100% |
| Bachelor’s in Computer Science | Bachelor’s in Computer Science | ✅ 100% |

✅ **Goal:** Identify how closely the candidate matches the job criteria.  

---

### 🔹 **(4) CV Scoring Calculation**  
Advin assigns a CV Score based on a weighted formula:  

**CV Score =**  
*(Relevant Work Experience × Weight) +*  
*(Education × Weight) +*  
*(Skills × Weight) +*  
*(Certifications × Weight)*  

👉 **Example:**  
- Relevant Work Experience = 30%  
- Education = 10%  
- Skills = 40%  
- Certifications = 20%  

➡️ **Final CV Score = 80%**  

✅ **Goal:** Generate an objective CV score for consistent evaluation.  

---

### 🔹 **(5) CV Score Threshold**  
Candidates who exceed the minimum score threshold are moved to the next stage.  

👉 **Example:**  
- Minimum CV Score = 60%  
- Candidate Score = 80% → ✅ Shortlisted  
- Candidate Score = 55% → ❌ Rejected  

✅ **Goal:** Automatically shortlist top candidates.  

---

## 📊 **3. CV Scoring Matrix**
Advin allows you to define how different CV components contribute to the final score.

| CV Component | Description | Weight (%) |
|--------------|-------------|------------|
| **Relevant Work Experience** | Matches past job roles to the current vacancy | 30% |
| **Work Experience** | Total years of experience | 10% |
| **Relevant Education** | Alignment of education with job requirements | 15% |
| **Education** | General degree and qualifications | 5% |
| **Skills** | Technical and soft skills | 20% |
| **Certifications** | Relevant professional certifications | 10% |
| **Language Proficiency** | Multilingual ability | 5% |
| **Industry Experience** | Experience in the same industry as the hiring company | 5% |

👉 **Example:**  
- **Relevant Work Experience:** 30%  
- **Skills:** 20%  
- **Education:** 10%  
- **Certifications:** 10%  

✅ **Goal:** Prioritize the most important factors for each job.  

---

## 🏆 **4. CV Score Thresholds**
Advin allows you to define custom score thresholds for each job type.  

| CV Score | Result | Description |
|----------|--------|-------------|
| **0–39** | Rejected | Does not meet minimum requirements |
| **40–44** | Not Suitable | Lacks essential qualifications |
| **45–49** | Needs Significant Improvement | Major gaps in qualifications |
| **50–54** | Needs Improvement | Meets basic criteria but lacks key qualifications |
| **55–59** | Below Average | Somewhat qualified but requires development |
| **60–64** | Average | Meets minimum requirements but not a strong fit |
| **65–69** | Decent | Meets expectations but with some weaknesses |
| **70–74** | Good | Meets most requirements |
| **75–79** | Very Good | Strong fit for the role |
| **80–84** | Excellent | Highly recommended |
| **85–89** | Outstanding | Ideal fit with exceptional qualifications |
| **90–100** | Exceptional | Best possible choice, exceeding all expectations |

👉 **Example:**  
- Candidate 1: 78 → **Very Good**  
- Candidate 2: 62 → **Average**  
- Candidate 3: 45 → **Needs Significant Improvement**  

✅ **Goal:** Create consistency in candidate evaluation.  

---

## 🚀 **5. Customizing CV Scoring**
You can customize how CV components are weighted for each job type:

### ✅ **Example Configuration:**
- Senior Developer:  
   - Relevant Experience = **40%**  
   - Technical Skills = **30%**  
   - Education = **10%**  
   - Certifications = **20%**  

- Junior Developer:  
   - Relevant Experience = **20%**  
   - Technical Skills = **40%**  
   - Education = **20%**  
   - Certifications = **10%**  

✅ **Goal:** Tailor scoring to match different job types.  

---

## 🔎 **6. CV Screening Example**
**Position:** Backend Developer  
- Minimum CV Score: **60%**  
- CV Component Weighting:  
   - Relevant Experience: 30%  
   - Technical Skills: 40%  
   - Certifications: 20%  
   - Language Skills: 10%  

👉 **Candidate Profile:**  
| Field | Score (%) | Weight (%) | Contribution |
|-------|-----------|------------|--------------|
| Relevant Experience | 80 | 30% | 24 |
| Technical Skills | 75 | 40% | 30 |
| Certifications | 90 | 20% | 18 |
| Language Skills | 70 | 10% | 7 |
| **Total Score** | - | - | **79%** |

➡️ **Result:** Candidate Shortlisted ✅  

✅ **Goal:** Streamline the process of shortlisting qualified candidates.  

---

## ✅ **7. Saving the CV Screening Configuration**
Once all configurations are set:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the rules to new applications  
✅ Changes will reflect across all active job postings  

---

## 🏆 **8. Best Practices**
✔️ Adjust CV scoring weights based on the seniority and complexity of the job.  
✔️ Use a balanced scoring approach for mixed-skill roles.  
✔️ Review CV threshold settings to avoid missing high-potential candidates.  
✔️ Monitor AI performance regularly to adjust scoring rules.  

---

Advin’s AI-driven CV screening ensures that only the most qualified candidates move forward, reducing recruitment time and improving hiring accuracy. 😎
