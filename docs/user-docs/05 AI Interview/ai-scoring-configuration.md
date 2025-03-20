---
sidebar_position: 2
---

# AI Scoring Configuration

Advin allows you to configure how the AI evaluates candidate answers during the interview process. You can adjust the scoring weights for each evaluation factor and define the minimum passing score based on job requirements.

---

## 🏆 **1. What is AI Scoring Configuration?**
AI Scoring Configuration allows you to define how Advin evaluates and scores candidate responses during the AI interview.  

✅ Define weights for each scoring factor  
✅ Set passing thresholds based on job level  
✅ Create consistency in candidate evaluation  

✅ **Goal:** Ensure consistent and fair candidate evaluation across different job roles.  

---

## 📊 **2. AI Scoring Factors**
Advin evaluates candidate answers based on four main scoring factors:

| Scoring Factor | Description | Default Weight (%) |
|---------------|-------------|---------------------|
| **Goal Alignment** | How well the answer addresses the question objective | 40% |
| **Technical Accuracy** | Correctness and depth of the answer | 40% |
| **Soft Skills** | Communication style, tone, and clarity | 20% |
| **Decision-Making** | Logical approach to problem-solving | 0% (Optional) |

👉 **Example:**  
- Technical Interview → Higher weight on **Technical Accuracy**  
- Leadership Interview → Higher weight on **Goal Alignment** and **Soft Skills**  

✅ **Goal:** Ensure the most relevant factors carry the highest weight.  

---

## 🔎 **3. Adjusting AI Scoring Weights**
### ✅ **How to Configure Scoring:**
1. Go to **Settings → AI Scoring**  
2. Adjust the weight for each scoring factor  
3. Ensure the total weight equals **100%**  
4. Save settings  

👉 **Example:**  
| Scoring Factor | Old Weight (%) | New Weight (%) |
|---------------|-----------------|----------------|
| Goal Alignment | 40% | 30% |
| Technical Accuracy | 40% | 50% |
| Soft Skills | 20% | 15% |
| Decision-Making | 0% | 5% |

➡️ Total = **100%** ✅  

✅ **Goal:** Match scoring balance to the role's complexity and seniority.  

---

## 🎯 **4. Scoring Factor Definitions**
### 🔹 **(1) Goal Alignment**
Evaluates how well the candidate’s answer addresses the question objective.  
- Higher weight for **management** and **strategic** roles.  

👉 **Example:**  
- "Describe your approach to managing a project."  
- Candidate mentions resource planning, budget management, and risk handling → **90% Goal Alignment**  

✅ **Goal:** Test alignment with business goals.  

---

### 🔹 **(2) Technical Accuracy**
Measures the correctness and depth of the answer.  
- Higher weight for **technical** and **engineering** roles.  

👉 **Example:**  
- "Explain how garbage collection works in Java."  
- Candidate provides a clear and detailed answer → **95% Technical Accuracy**  

✅ **Goal:** Evaluate technical expertise.  

---

### 🔹 **(3) Soft Skills**
Measures communication style, clarity, and tone.  
- Higher weight for **customer-facing** and **leadership** roles.  

👉 **Example:**  
- "Describe how you resolved a conflict with a teammate."  
- Candidate explains calmly and logically → **80% Soft Skills**  

✅ **Goal:** Measure professionalism and teamwork.  

---

### 🔹 **(4) Decision-Making**
Measures logical thinking and problem-solving ability.  
- Higher weight for **leadership** and **problem-solving** roles.  

👉 **Example:**  
- "How would you approach a failing product launch?"  
- Candidate provides a clear strategy and timeline → **85% Decision-Making**  

✅ **Goal:** Test strategic thinking.  

---

## 🚀 **5. Setting Passing Thresholds**
You can define minimum passing scores based on job level:

| Job Level | Minimum Passing Score (%) |
|-----------|---------------------------|
| **Entry-Level** | 60% |
| **Mid-Level** | 70% |
| **Senior-Level** | 80% |
| **Executive-Level** | 85% |

👉 **Example:**  
- Backend Developer → **70%**  
- Senior Manager → **80%**  

✅ **Goal:** Ensure higher passing thresholds for more complex roles.  

---

## 📉 **6. Scoring Adjustments Based on AI Scoring Nature**
Advin allows you to define the AI’s scoring nature:

| Scoring Nature | Description | Effect on Scoring |
|----------------|-------------|--------------------|
| **Very Harsh** | Strictest evaluation, focuses on hard criteria | Higher rejection rate |
| **Harsh** | Leans toward strict evaluation | Moderate rejection rate |
| **Neutral** | Balanced evaluation, combines hard and soft factors | Balanced rejection rate |
| **Lenient** | Applies flexible scoring | Lower rejection rate |
| **Very Lenient** | Focuses on positive interpretation and reduces strictness | Very low rejection rate |

👉 **Example:**  
- Technical Role → **Harsh** Scoring  
- Customer Service Role → **Lenient** Scoring  

✅ **Goal:** Adjust AI strictness to match job complexity.  

---

## 🔢 **7. Scoring Calculation Example**
**Position:** Backend Developer  
- Goal Alignment → 30%  
- Technical Accuracy → 50%  
- Soft Skills → 15%  
- Decision-Making → 5%  

### **Candidate Score:**
| Scoring Factor | Score (%) | Weight (%) | Contribution (%) |
|---------------|------------|-------------|------------------|
| **Goal Alignment** | 85% | 30% | 25.5% |
| **Technical Accuracy** | 90% | 50% | 45% |
| **Soft Skills** | 80% | 15% | 12% |
| **Decision-Making** | 70% | 5% | 3.5% |
| **Total Score** | - | - | **86%** ✅ |

➡️ **Outcome:** Candidate moves to next stage  

✅ **Goal:** Generate consistent and balanced scoring.  

---

## 🛠️ **8. Example AI Scoring Configurations**
| Role Type | Goal Alignment (%) | Technical Accuracy (%) | Soft Skills (%) | Decision-Making (%) |
|-----------|---------------------|------------------------|-----------------|---------------------|
| **Software Engineer** | 30% | 50% | 10% | 10% |
| **Sales Manager** | 40% | 20% | 30% | 10% |
| **Project Manager** | 35% | 30% | 20% | 15% |
| **Executive** | 25% | 30% | 30% | 15% |

✅ **Goal:** Customize AI scoring to match different role types.  

---

## ✅ **9. Saving AI Scoring Configuration**
Once the AI scoring is configured:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the scoring settings to new interviews  
✅ Scoring adjustments will reflect in candidate reports  

---

## 🏆 **10. Best Practices**
✔️ Use higher weight for technical accuracy in engineering roles.  
✔️ Keep goal alignment higher for strategic roles.  
✔️ Monitor passing rates and adjust settings if too many candidates are failing.  
✔️ Use stricter evaluation for technical roles and lenient evaluation for customer-facing roles.  

---

## 💡 **11. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| **Low pass rate** | Passing threshold too high | Lower the minimum passing score |
| **High pass rate** | Scoring too lenient | Increase goal alignment and technical accuracy weight |
| **Inconsistent scores** | Incorrect scoring weights | Adjust scoring balance |
| **Irrelevant AI questions** | Weak job description | Improve job criteria |

---

## 🚀 **12. Summary**
Advin’s AI Scoring Configuration ensures that candidates are evaluated fairly and consistently using a structured framework.  
✅ Define goal alignment and technical accuracy weight  
✅ Adjust AI scoring nature based on job complexity  
✅ Monitor and refine scoring based on pass rates  

---

Advin’s AI scoring configuration allows you to balance technical and soft skill evaluation, ensuring high-quality hires. 😎
