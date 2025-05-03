---
sidebar_position: 2
---

# CV Scoring Configuration

Advin allows you to customize how CV components are scored to align with the job's complexity and the company’s hiring priorities. You can adjust scoring weights for work experience, skills, education, and other factors.

---

## 🏆 **1. What is CV Scoring Configuration?**
CV Scoring Configuration allows you to define how different CV components contribute to the final CV score.  

✅ Adjust scoring based on job type and seniority  
✅ Define score weights for specific job criteria  
✅ Create consistent evaluation across different roles  

You can access the CV Scoring Configuration menu from. **Settings > Scoring Matrix > CV Scoring**

![CV Score Example](/screenshots/cv-scoring-matrix.png)

---

## 📊 **2. Default CV Scoring Matrix**
Advin includes a default scoring matrix that you can modify to match your recruitment needs.

| CV Component | Description | Default Weight (%) |
|--------------|-------------|---------------------|
| **Relevant Work Experience** | Alignment of past job roles to the current vacancy | 30% |
| **Work Experience** | Total years of experience | 10% |
| **Relevant Education** | Alignment of education with job requirements | 15% |
| **Education** | General degree and qualifications | 5% |
| **Skills** | Technical and soft skills | 20% |
| **Certifications** | Relevant professional certifications | 10% |
| **Language Proficiency** | Multilingual ability | 5% |
| **Industry Experience** | Experience in the same industry as the hiring company | 5% |

👉 **Example:**  
- For a **Backend Developer**, you may increase the weight of **Technical Skills** to 40% and reduce the weight of **Education** to 5%.  

✅ **Goal:** Ensure the most relevant criteria carry the highest weight.  

---

## 🔎 **3. Adjusting CV Scoring Weights**
### ✅ **How to Configure CV Scoring:**
1. Go to **Settings → CV Scoring**  
2. Modify the weight (%) for each component  
3. Ensure the total weight equals **100%**  
4. Save settings  

👉 **Example:**  
| CV Component | Old Weight (%) | New Weight (%) |
|--------------|-----------------|----------------|
| Relevant Work Experience | 30% | 25% |
| Work Experience | 10% | 10% |
| Skills | 20% | 30% |
| Certifications | 10% | 15% |

➡️ Total = **100%** ✅  

✅ **Goal:** Adjust the scoring balance based on job type and hiring priorities.  

---

## 🎯 **4. Criteria Definitions**
You can modify the criteria definitions to reflect the importance of each CV component.  

### 🔹 **Relevant Work Experience**  
- How well past job responsibilities match the current vacancy.  
👉 **Example:**  
- Senior Developer → High relevance → 40%  
- Junior Developer → Moderate relevance → 20%  

---

### 🔹 **Work Experience**  
- Total years of experience, regardless of job relevance.  
👉 **Example:**  
- Senior Developer → 5–10 years → 20%  
- Junior Developer → 1–3 years → 10%  

---

### 🔹 **Relevant Education**  
- How closely the candidate’s degree aligns with the job.  
👉 **Example:**  
- Software Engineer → Bachelor's in Computer Science → 20%  
- Sales Role → Bachelor's in Business → 10%  

---

### 🔹 **Education**  
- General degree and qualifications without relevance to the role.  
👉 **Example:**  
- Bachelor's Degree → 5%  
- Master’s Degree → 10%  

---

### 🔹 **Skills**  
- Technical and soft skills required for the job.  
👉 **Example:**  
- PHP, JavaScript, AWS → 30%  
- Communication, Teamwork → 10%  

---

### 🔹 **Certifications**  
- Relevant industry certifications.  
👉 **Example:**  
- AWS Certified Developer → 20%  
- Google Cloud Professional → 10%  

---

### 🔹 **Language Proficiency**  
- Multilingual ability.  
👉 **Example:**  
- English and Indonesian → 5%  
- Mandarin → 10%  

---

### 🔹 **Industry Experience**  
- Experience in the same industry as the hiring company.  
👉 **Example:**  
- Experience in FinTech → 5%  
- Experience in Manufacturing → 10%  

---

## 🚀 **5. Setting Minimum Thresholds**
Advin allows you to set minimum score thresholds for different job levels.

| Job Level | Minimum CV Score (%) |
|-----------|-----------------------|
| **Entry Level** | 50% |
| **Mid-Level** | 60% |
| **Senior Level** | 70% |
| **Executive Level** | 80% |

👉 **Example:**  
- Backend Developer → Minimum CV Score = **70%**  
- Junior Developer → Minimum CV Score = **60%**  

✅ **Goal:** Ensure candidates meet the minimum qualification before moving to the next step.  

---

## 📉 **6. CV Penalty Configuration**
Advin allows you to define penalties for salary misalignment and overqualification.

| Penalty Type | Penalty (%) | Effect |
|-------------|-------------|--------|
| **10% Over Budget** | 10% | Reduces score by 10% |
| **20% Over Budget** | 20% | Reduces score by 20% |
| **50% Over Budget** | 40% | Reduces score by 40% |
| **100% Over Budget** | 60% | Reduces score by 60% |

👉 **Example:**  
- Candidate's salary expectation exceeds budget by 20% → CV Score reduced by 20%.  

✅ **Goal:** Control hiring costs and prevent overqualified candidates from inflating scores.  

---

## 📊 **7. CV Score Definitions**
Define how CV scores are labeled to help recruiters quickly identify top candidates.  

| CV Score | Label | Description |
|----------|-------|-------------|
| **0–39** | Rejected | Candidate does not meet minimum requirements |
| **40–44** | Not Suitable | Lacks essential qualifications |
| **45–49** | Needs Significant Improvement | Major gaps in qualifications |
| **50–54** | Needs Improvement | Meets basic criteria but lacks key qualifications |
| **55–59** | Below Average | Somewhat qualified but needs development |
| **60–64** | Average | Meets minimum requirements but not a strong fit |
| **65–69** | Decent | Meets expectations but with some weaknesses |
| **70–74** | Good | Meets most requirements |
| **75–79** | Very Good | Strong fit for the role |
| **80–84** | Excellent | Highly recommended |
| **85–89** | Outstanding | Ideal fit with exceptional qualifications |
| **90–100** | Exceptional | Best possible choice, exceeding all expectations |

👉 **Example:**  
- Candidate 1 = **78%** → Very Good  
- Candidate 2 = **65%** → Decent  

✅ **Goal:** Allow quick identification of strong candidates.  

---

## 🏆 **8. Example Configuration**
**Position:** Senior Backend Developer  
- Minimum CV Score: **70%**  
- CV Component Weighting:  
   - Relevant Experience → 30%  
   - Technical Skills → 40%  
   - Certifications → 20%  
   - Language Skills → 10%  

**Penalty:**  
- Salary exceeds budget by 20% → 20% reduction in final score  

👉 **Result:** Candidate with a CV Score of 75% moves to the AI Interview stage.  

✅ **Goal:** Create a balanced scoring structure to identify the best candidates.  

---

## ✅ **9. Saving the CV Scoring Configuration**
Once all configurations are set:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the new scoring rules to new applications  
✅ Changes will reflect across all active job postings  

---

## 🚀 **10. Best Practices**
✔️ Adjust CV scoring weights based on the job's seniority and complexity.  
✔️ Regularly review AI scoring output to fine-tune weights.  
✔️ Use higher penalties for overqualified candidates.  
✔️ Keep score thresholds consistent across similar roles.  

---

Advin’s flexible CV scoring system ensures that only the most suitable candidates move to the next stage, saving time and improving hiring accuracy. 😎
