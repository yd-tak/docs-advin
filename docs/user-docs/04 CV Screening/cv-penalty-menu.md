---
sidebar_position: 3
---

# CV Penalty Setup

Advin allows you to define **penalties** to adjust CV scores based on factors such as salary misalignment, overqualification, or missing criteria. This ensures that candidates are evaluated not only on their qualifications but also on their fit with the company’s hiring budget and expectations.

---

## 🏆 **1. What is a CV Penalty?**
A **CV Penalty** is a percentage reduction applied to a candidate's CV score based on predefined criteria, such as:  
✅ Salary expectations exceeding budget  
✅ Overqualification  
✅ Lack of relevant industry experience  
✅ Missing certifications  

Penalties help recruiters manage hiring costs and prevent overqualified candidates from inflating their scores.  

✅ **Goal:** Ensure a balanced and realistic candidate evaluation process.  

You can access the CV Scoring Configuration menu from. **Settings > Scoring Matrix > CV Scoring**

![Scoring Penalty](/screenshots/scoring-penalty.png)

---

## 📉 **2. Types of CV Penalties**
You can define multiple types of penalties depending on the job requirements and company policies.

### 🔹 **(1) Salary Expectation Penalty**
Reduce the CV score if a candidate’s salary expectation exceeds the defined budget.  

| Penalty Type | Percentage Over Budget | Penalty (%) |
|-------------|------------------------|-------------|
| **Minor Penalty** | 10% Over Budget | 10% |
| **Moderate Penalty** | 20% Over Budget | 20% |
| **Major Penalty** | 50% Over Budget | 40% |
| **Extreme Penalty** | 100% Over Budget | 60% |

👉 **Example:**  
- Expected Salary = IDR 20,000,000  
- Budget = IDR 15,000,000  
➡️ **20% Over Budget** → 20% score reduction  

✅ **Goal:** Prevent overqualified candidates from inflating scores due to high salary expectations.  

---

### 🔹 **(2) Overqualification Penalty**
Reduce the CV score if the candidate’s experience exceeds the job’s requirements.  

| Experience vs. Job Requirement | Penalty (%) |
|---------------------------------|-------------|
| **1–2 Years Over Requirement** | 5% |
| **3–5 Years Over Requirement** | 10% |
| **More than 5 Years Over Requirement** | 20% |

👉 **Example:**  
- Required Experience = **3–5 Years**  
- Candidate Experience = **8 Years**  
➡️ **More than 5 years over requirement** → 20% score reduction  

✅ **Goal:** Prevent candidates with excessive experience from distorting the hiring decision.  

---

### 🔹 **(3) Missing Certification Penalty**
Reduce the CV score if the candidate lacks required certifications.  

| Certification Status | Penalty (%) |
|----------------------|-------------|
| **Missing 1 Certification** | 5% |
| **Missing 2 Certifications** | 10% |
| **Missing 3 or More Certifications** | 20% |

👉 **Example:**  
- Required: AWS Certified Developer + Google Cloud Professional  
- Candidate has only AWS Certified Developer  
➡️ **Missing 1 Certification** → 5% score reduction  

✅ **Goal:** Ensure candidates meet critical job qualifications.  

---

### 🔹 **(4) Industry Experience Penalty**
Reduce the CV score if the candidate lacks experience in the relevant industry.  

| Experience vs. Job Requirement | Penalty (%) |
|---------------------------------|-------------|
| **No Relevant Industry Experience** | 10% |
| **Less than 1 Year Experience** | 5% |
| **1–3 Years of Experience** | 0% (No Penalty) |

👉 **Example:**  
- Required Industry Experience = FinTech  
- Candidate Experience = 0 Years in FinTech  
➡️ **No Relevant Industry Experience** → 10% score reduction  

✅ **Goal:** Ensure candidates align with the company's industry focus.  

---

### 🔹 **(5) Location Mismatch Penalty**
Reduce the CV score if the candidate is located outside the preferred hiring region.  

| Location Status | Penalty (%) |
|-----------------|-------------|
| **Different Country** | 20% |
| **Different Region** | 10% |
| **Same City** | 0% (No Penalty) |

👉 **Example:**  
- Required Location = Jakarta  
- Candidate Location = Surabaya  
➡️ **Different Region** → 10% score reduction  

✅ **Goal:** Encourage local hiring and reduce relocation costs.  

---

## 🔎 **3. Configuring CV Penalties**
### ✅ **How to Configure:**
1. Go to **Settings → CV Penalties**  
2. Select the penalty type (Salary, Overqualification, Certification, etc.)  
3. Set the penalty percentage based on your company’s policy  
4. Save settings  

👉 **Example:**  
- Salary Penalty: 20% for 20% Over Budget  
- Overqualification Penalty: 10% for 3–5 Years Over Requirement  
- Missing Certification Penalty: 5%  

✅ **Goal:** Ensure consistent and transparent evaluation across all job postings.  

---

## 📊 **4. Penalty Calculation Example**
**Position:** Backend Developer  
- Minimum CV Score: **60%**  
- Base CV Score: **85%**  
- Salary Expectation Penalty: **20%**  
- Overqualification Penalty: **10%**  
- Missing Certification Penalty: **5%**  

### **Formula:**  
**Final CV Score** = Base CV Score – (Salary Penalty + Overqualification Penalty + Certification Penalty)  

➡️ **Final CV Score** = 85% – (20% + 10% + 5%)  
➡️ **Final CV Score** = **50%** ❌ **(Rejected)**  

✅ **Goal:** Create balanced scores by considering both qualifications and fit.  

---

## 🚀 **5. Example Penalty Configuration**
| Penalty Type | Condition | Penalty (%) |
|--------------|-----------|-------------|
| **Salary Expectation Penalty** | 20% Over Budget | 20% |
| **Overqualification Penalty** | 3–5 Years Over Requirement | 10% |
| **Missing Certification Penalty** | 1 Certification Missing | 5% |
| **Location Mismatch Penalty** | Different Region | 10% |

### **Final Outcome:**  
- Initial CV Score: **85%**  
- Penalty: **20% + 10% + 5% + 10%** = **45% Reduction**  
➡️ **Final CV Score** = 85% – 45% = **40%** → **Not Suitable** ❌  

✅ **Goal:** Ensure only candidates who meet both qualifications and budget are shortlisted.  

---

## ✅ **6. Saving the CV Penalty Configuration**
Once all configurations are set:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the penalty rules to new applications  
✅ Penalty adjustments will reflect in the candidate’s final CV score  

---

## 🏆 **7. Best Practices**
✔️ Keep salary penalties moderate to avoid disqualifying strong candidates.  
✔️ Use higher penalties for industry experience to target relevant candidates.  
✔️ Adjust certification penalties based on the job complexity.  
✔️ Monitor the rejection rate and adjust penalties accordingly.  

---

## 💡 **8. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| **Too many rejections** | Penalty too high | Lower penalty values |
| **Low scoring accuracy** | Missing data in CV | Improve CV parsing accuracy |
| **High rejection of experienced candidates** | Overqualification penalty too strict | Reduce penalty for senior roles |
| **Mismatch in salary expectation** | Salary penalty too high | Allow higher variance in budget |

---

## 🚀 **9. Summary**
Advin’s flexible penalty configuration allows recruiters to manage hiring costs and ensure realistic candidate evaluation.  
✅ Salary Expectation  
✅ Overqualification  
✅ Missing Certifications  
✅ Industry Experience  
✅ Location Mismatch  

---

Advin’s penalty system ensures that only the most qualified and realistic candidates are moved to the next stage, improving overall hiring accuracy and efficiency. 😎
